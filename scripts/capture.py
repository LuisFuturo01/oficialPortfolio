"""Captura pantallas de proyectos en vista desktop y móvil.

Uso: python scripts/capture.py scripts/shots/<proyecto>.json
JSON: {"slug": "snowy", "storage": {"k": "v"} | null, "login": {...} | null,
       "shots": [{"name": "dashboard", "url": "http://...", "wait": 1500,
                  "click": ["selector", ...], "scroll": 0, "full": false}]}
"""
import json
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "projects"

VIEWPORTS = {
    "desktop": {"viewport": {"width": 1440, "height": 900}, "device_scale_factor": 1},
    "mobile": {"viewport": {"width": 390, "height": 844}, "device_scale_factor": 2,
               "is_mobile": True, "has_touch": True},
}


def run(cfg_path: str, only: str | None = None) -> None:
    cfg = json.loads(Path(cfg_path).read_text(encoding="utf-8"))
    out_dir = OUT / cfg["slug"]
    out_dir.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(channel="msedge", args=["--use-gl=angle", "--enable-webgl", "--ignore-gpu-blocklist",
                                                                 "--use-fake-ui-for-media-stream", "--use-fake-device-for-media-stream"])
        for vname, vopts in VIEWPORTS.items():
            if only and vname != only:
                continue
            if cfg.get("skip_" + vname):
                continue
            ctx = browser.new_context(**vopts, locale="es-ES", color_scheme=cfg.get("scheme", "dark"),
                                      permissions=["camera", "microphone"])
            page = ctx.new_page()
            if cfg.get("storage"):
                origin = cfg["storage_origin"]
                page.goto(origin, wait_until="domcontentloaded")
                page.evaluate(
                    "s => { for (const [k, v] of Object.entries(s)) localStorage.setItem(k, v); }",
                    cfg["storage"],
                )
            for shot in cfg["shots"]:
                if shot.get("only") and shot["only"] != vname:
                    continue
                try:
                    if shot.get("url"):
                        page.goto(shot["url"], wait_until=shot.get("until", "networkidle"), timeout=60000)
                    page.wait_for_timeout(shot.get("wait", 1200))
                    for js in shot.get("eval", []):
                        page.evaluate(js)
                        page.wait_for_timeout(400)
                    for sel, path in shot.get("upload", {}).items():
                        page.locator(sel).first.set_input_files(path)
                        page.wait_for_timeout(shot.get("upload_wait", 1500))
                    for sel, val in shot.get("fill", {}).items():
                        page.locator(sel).first.fill(val)
                    for sel in shot.get("click", []):
                        page.locator(sel).first.click(timeout=8000)
                        page.wait_for_timeout(shot.get("click_wait", 900))
                    if shot.get("scroll"):
                        page.evaluate(f"window.scrollTo(0, {shot['scroll']})")
                        page.wait_for_timeout(900)
                    if shot.get("after_wait"):
                        page.wait_for_timeout(shot["after_wait"])
                    target = out_dir / f"{shot['name']}-{vname}.jpg"
                    page.screenshot(path=str(target), type="jpeg", quality=78,
                                    full_page=shot.get("full", False))
                    print("ok", target.relative_to(ROOT))
                except Exception as exc:  # noqa: BLE001
                    print("FAIL", shot["name"], vname, str(exc).splitlines()[0])
            ctx.close()
        browser.close()


if __name__ == "__main__":
    run(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else None)
