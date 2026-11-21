"""Juega una partida (mate del pastor) en el Ajedrez 3D y captura cada momento.

Proyecta las casillas del tablero 3D a coordenadas de pantalla usando la misma cámara
que define ChessGame.tsx (posición [0, 14, 12], fov 45, mirando al origen).
Uso: python scripts/capture_chess.py [url]
"""
import math
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright

URL = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:5208/'
OUT = Path(__file__).resolve().parent.parent / 'public' / 'projects' / 'ajedrez-3d'
OUT.mkdir(parents=True, exist_ok=True)
CAM, FOV = (0.0, 14.0, 12.0), 45.0


def norm(v):
    m = math.sqrt(sum(c * c for c in v))
    return tuple(c / m for c in v)


def cross(a, b):
    return (a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0])


def dot(a, b):
    return sum(x * y for x, y in zip(a, b))


def project(row, col, box):
    """Casilla (row, col) -> píxel dentro del canvas."""
    p = (col - 3.5, 0.05, row - 3.5)
    fwd = norm(tuple(-c for c in CAM))
    right = norm(cross(fwd, (0, 1, 0)))
    up = cross(right, fwd)
    d = tuple(pi - ci for pi, ci in zip(p, CAM))
    x, y, z = dot(d, right), dot(d, up), dot(d, fwd)
    f = 1 / math.tan(math.radians(FOV) / 2)
    aspect = box['width'] / box['height']
    ndc_x, ndc_y = (x / z) * f / aspect, (y / z) * f
    return box['x'] + (ndc_x + 1) / 2 * box['width'], box['y'] + (1 - ndc_y) / 2 * box['height']


SQ = lambda s: (8 - int(s[1]), 'abcdefgh'.index(s[0]))  # 'e2' -> (row, col)
MOVES = ['e2e4', 'e7e5', 'f1c4', 'b8c6', 'd1h5', 'g8f6', 'h5f7']
VIEWPORTS = {
    'desktop': dict(viewport={'width': 1440, 'height': 900}),
    'mobile': dict(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True),
}


def run(kind, opts, browser):
    page = browser.new_page(**opts)
    shot = lambda name: page.screenshot(path=str(OUT / f'{name}-{kind}.jpg'), type='jpeg', quality=80)
    page.goto(URL, wait_until='networkidle')
    page.wait_for_timeout(2500)
    shot('01-login')
    page.locator("button:has-text('Jugar como invitado')").click()
    page.wait_for_timeout(5000)
    shot('02-tablero')
    box = page.locator('canvas').first.bounding_box()

    def click(square):
        x, y = project(*SQ(square), box)
        page.mouse.click(x, y)
        page.wait_for_timeout(700)

    def themes():
        page.locator('button', has_text='🎨').first.click()
        page.wait_for_timeout(1000)
        shot('06-ajustes-visuales')
        for theme, name in [('espacial', '07-tema-espacial'), ('digital', '08-tema-digital'),
                            ('medieval', '09-tema-medieval'), ('normal', None)]:
            page.locator('select').first.select_option(theme)
            page.locator("button:has-text('Guardar')").click()
            page.wait_for_timeout(2500)
            if name:
                shot(name)
                page.locator('button', has_text='🎨').first.click()
                page.wait_for_timeout(800)

    for i, mv in enumerate(MOVES):
        click(mv[:2])
        if i == 2:  # alfil seleccionado mostrando jugadas válidas
            page.wait_for_timeout(600)
            shot('03-jugadas-validas')
        click(mv[2:])
        page.wait_for_timeout(1300)
        if i == 3:
            shot('04-partida')
            themes()
    page.wait_for_timeout(2500)
    shot('05-jaque-mate')
    page.close()


if __name__ == '__main__':
    only = sys.argv[2] if len(sys.argv) > 2 else None
    with sync_playwright() as p:
        b = p.chromium.launch(channel='msedge', args=['--use-gl=angle', '--ignore-gpu-blocklist'])
        for k, o in VIEWPORTS.items():
            if not only or only == k:
                run(k, o, b)
        b.close()
    print('ok')
