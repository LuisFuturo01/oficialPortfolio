# Scripts del portafolio

| Script | Qué hace |
|---|---|
| `capture.py <config.json> [desktop\|mobile]` | Abre cada proyecto con Playwright (Edge) y guarda capturas en `public/projects/<slug>/` en vista escritorio (1440×900) y móvil (390×844). |
| `shots/*.json` | Configuración de capturas por proyecto (URLs, clicks, scroll, subida de archivos). |
| `optimize-images.py` | Convierte las capturas JPG a WebP (escritorio 1440 px, móvil 600 px) y borra los JPG. |
| `check-images.mjs [--list] [--prune]` | Verifica que cada captura usada en `src/data/projects.js` exista; `--prune` borra las que no se usan. |
| `sheet.py <slug> <salida.jpg>` | Hoja de contacto para revisar las capturas de un proyecto. |

Los servidores de cada proyecto se levantan con `.claude/launch.json` (carpeta `PersonalProjects`).
Requisitos: `pip install playwright pillow` y Microsoft Edge instalado.
