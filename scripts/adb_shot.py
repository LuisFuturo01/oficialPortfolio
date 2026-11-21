"""Utilidades para capturar apps Android por adb.

python scripts/adb_shot.py shot <slug> <nombre>   -> guarda public/projects/<slug>/<nombre>-mobile.jpg
python scripts/adb_shot.py peek <archivo.jpg>       -> captura rápida para revisar (sin recortar)
python scripts/adb_shot.py tap <x> <y> | swipe x1 y1 x2 y2 | text "..." | key <KEYCODE> | launch <pkg>

La barra de estado del teléfono (hora, notificaciones) se recorta para no exponer datos personales.
"""
import io
import subprocess
import sys
import time
from pathlib import Path

from PIL import Image

OUT = Path(__file__).resolve().parent.parent / 'public' / 'projects'
STATUS_BAR = 0.045  # fracción superior a recortar


def adb(*args, binary=False):
    r = subprocess.run(['adb', *args], capture_output=True)
    return r.stdout if binary else r.stdout.decode(errors='ignore')


def grab():
    return Image.open(io.BytesIO(adb('exec-out', 'screencap', '-p', binary=True))).convert('RGB')


def main():
    cmd, *a = sys.argv[1:]
    if cmd == 'shot':
        slug, name = a
        im = grab()
        if im.height > im.width:  # en horizontal (juegos) la barra de estado está oculta
            im = im.crop((0, int(im.height * STATUS_BAR), im.width, im.height))
        (OUT / slug).mkdir(parents=True, exist_ok=True)
        im.save(OUT / slug / f'{name}-mobile.jpg', quality=88)
        print('ok', slug, name)
    elif cmd == 'peek':
        im = grab()
        im.resize((im.width // 2, im.height // 2)).save(a[0], quality=70)
        print('peek', im.size)
    elif cmd == 'tap':
        adb('shell', 'input', 'tap', *a)
    elif cmd == 'swipe':
        adb('shell', 'input', 'swipe', *a, '400')
    elif cmd == 'text':
        adb('shell', 'input', 'text', a[0].replace(' ', '%s'))
    elif cmd == 'key':
        adb('shell', 'input', 'keyevent', a[0])
    elif cmd == 'launch':
        adb('shell', 'monkey', '-p', a[0], '-c', 'android.intent.category.LAUNCHER', '1')
    time.sleep(float(a[-1]) if cmd in ('wait',) else 0)


if __name__ == '__main__':
    main()
