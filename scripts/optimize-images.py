"""Convierte las capturas JPG de public/projects a WebP optimizado.

- Escritorio: ancho máximo 1440 px
- Móvil: ancho 600 px (suficiente para el marco de teléfono del carrusel)
Borra el JPG original después de convertir. Uso: python scripts/optimize-images.py
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent / "public" / "projects"


def main() -> None:
    before = after = 0
    for jpg in sorted(ROOT.rglob("*.jpg")):
        before += jpg.stat().st_size
        im = Image.open(jpg).convert("RGB")
        portrait = im.height > im.width
        max_w = 600 if portrait and jpg.stem.endswith("-mobile") else 1440
        if im.width > max_w:
            im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)
        out = jpg.with_suffix(".webp")
        im.save(out, "WEBP", quality=78, method=6)
        after += out.stat().st_size
        jpg.unlink()
    print(f"{before / 1e6:.1f} MB -> {after / 1e6:.1f} MB")


if __name__ == "__main__":
    main()
