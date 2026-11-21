"""Hace una hoja de contacto de las capturas de un proyecto (para revisión)."""
import glob, sys
from PIL import Image
slug = sys.argv[1]; out = sys.argv[2]
d = sorted(glob.glob(f"public/projects/{slug}/*-desktop.jpg"))
m = sorted(glob.glob(f"public/projects/{slug}/*-mobile.jpg"))
cols = 3
W = Image.new("RGB", (cols * 400, 250 * ((len(d) + cols - 1) // cols) + 340), "white")
for i, f in enumerate(d):
    W.paste(Image.open(f).resize((400, 250)), ((i % cols) * 400, (i // cols) * 250))
y = 250 * ((len(d) + cols - 1) // cols)
for i, f in enumerate(m[:10]):
    W.paste(Image.open(f).resize((120, 260)).crop((0, 0, 120, 260)), (i * 120, y + 40))
W.save(out)
