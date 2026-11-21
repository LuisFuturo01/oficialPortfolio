"""Captura la app de escritorio J.A.R.V.I.S. (PyQt6) en sus distintos estados.

Se ejecuta con el venv de jarvis:
    ..\\jarvis\\venv\\Scripts\\python.exe scripts\\capture_jarvis.py
No abre el micrófono: el hilo de audio se reemplaza por uno vacío y los estados
se disparan con las mismas señales que usa la app. La pregunta de ejemplo sí se
envía al cerebro real (Gemini) para mostrar una respuesta auténtica.
"""
import os
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
JARVIS = ROOT.parent / 'jarvis'
OUT = ROOT / 'public' / 'projects' / 'jarvis'
OUT.mkdir(parents=True, exist_ok=True)
sys.path.insert(0, str(JARVIS))
os.chdir(JARVIS)

from PyQt6.QtCore import QTimer, Qt  # noqa: E402
from PyQt6.QtGui import QColor, QLinearGradient, QPainter, QPixmap, QRadialGradient  # noqa: E402
from PyQt6.QtWidgets import QApplication  # noqa: E402

import ui.interface as iface  # noqa: E402

iface.AudioWorker.run = lambda self: None  # sin micrófono durante la captura

app = QApplication(sys.argv)
win = iface.JarvisUI()
win.show()

W, H = 1440, 900


def fondo():
    """Escritorio oscuro de fondo para componer la ventana translúcida."""
    pm = QPixmap(W, H)
    p = QPainter(pm)
    g = QLinearGradient(0, 0, W, H)
    g.setColorAt(0, QColor(6, 10, 22))
    g.setColorAt(1, QColor(10, 28, 44))
    p.fillRect(0, 0, W, H, g)
    r = QRadialGradient(W / 2, H / 2, 600)
    r.setColorAt(0, QColor(0, 140, 170, 70))
    r.setColorAt(1, QColor(0, 0, 0, 0))
    p.fillRect(0, 0, W, H, r)
    p.end()
    return pm


def shot(name, widget=None):
    widget = widget or win
    pm = fondo()
    p = QPainter(pm)
    p.setRenderHint(QPainter.RenderHint.Antialiasing)
    img = widget.grab()
    p.drawPixmap((W - img.width()) // 2, (H - img.height()) // 2, img)
    p.end()
    pm.save(str(OUT / f'{name}-desktop.jpg'), 'JPG', 88)
    print('ok', name)


pasos = []


def paso(ms):
    def deco(fn):
        pasos.append((ms, fn))
        return fn
    return deco


@paso(1500)
def inicio():
    win._on_estado_audio('CARGANDO_IA')
    QTimer.singleShot(900, lambda: shot('01-inicializando'))


@paso(2500)
def espera():
    win._on_estado_audio('EN_ESPERA')
    QTimer.singleShot(900, lambda: shot('02-en-espera'))


@paso(2500)
def escuchando():
    win._on_estado_audio('ESCUCHANDO')
    for i in range(12):
        QTimer.singleShot(i * 60, lambda i=i: win._on_volumen(0.35 + 0.5 * ((i % 4) / 3)))
    QTimer.singleShot(800, lambda: shot('03-escuchando'))


@paso(1500)
def pregunta():
    win._on_comando_voz('Jarvis, explícame en una frase qué es una API REST')
    QTimer.singleShot(500, lambda: shot('04-pensando'))


@paso(14000)
def respuesta():
    shot('05-respuesta')


@paso(1500)
def ajustes():
    dlg = iface.PanelConfiguracion(win)
    dlg.show()
    QTimer.singleShot(700, lambda: (shot('06-configuracion', dlg), dlg.close()))


@paso(1500)
def mini():
    win._modo_mini()
    QTimer.singleShot(900, lambda: shot('07-modo-mini'))


@paso(1500)
def fin():
    app.quit()


t = 0
for ms, fn in pasos:
    t += ms
    QTimer.singleShot(t, fn)

app.exec()
