#!/usr/bin/env bash
# Crea / actualiza los repos de GitHub de cada proyecto (requiere `gh auth login`).
# Formato: carpeta|repo|visibilidad|descripción|temas(coma)|homepage
set -uo pipefail
cd "$(dirname "$0")/../../.."   # PersonalProjects
OWNER=$(gh api user --jq .login)

while IFS='|' read -r dir repo vis desc topics home; do
  [ -z "$dir" ] || [[ "$dir" == \#* ]] && continue
  echo "=== $dir -> $OWNER/$repo ($vis)"
  if gh repo view "$OWNER/$repo" >/dev/null 2>&1; then
    gh repo edit "$OWNER/$repo" --description "$desc" ${home:+--homepage "$home"} >/dev/null
  else
    gh repo create "$OWNER/$repo" "--$vis" --description "$desc" ${home:+--homepage "$home"} >/dev/null
  fi
  for t in ${topics//,/ }; do gh repo edit "$OWNER/$repo" --add-topic "$t" >/dev/null; done
  url="https://github.com/$OWNER/$repo.git"
  if git -C "$dir" remote get-url origin >/dev/null 2>&1; then
    cur=$(git -C "$dir" remote get-url origin)
    if [[ "$cur" != *"github.com"* ]]; then git -C "$dir" remote rename origin hf 2>/dev/null; git -C "$dir" remote add origin "$url"; fi
  else
    git -C "$dir" remote add origin "$url"
  fi
  git -C "$dir" push -u origin HEAD 2>&1 | tail -1
done <<'LIST'
Portfolio2|oficialPortfolio|public|Portafolio de Luis Zeballos: +20 proyectos con capturas reales en escritorio y móvil, stack de 60+ tecnologías.|portfolio,react,vite,sass|
snowy-ventas|snowy_ventas|public|Snowy Ventas: SaaS de punto de venta, inventario, contabilidad y auditoría con React, Node.js, MySQL y JWT.|pos,saas,react,nodejs,mysql,jwt|https://snowy-ventas.netlify.app/
cotizadorZequitex|costos_with_zequitexsrl|public|Cotizador de bordados con IA para Zequitex SRL: detecta colores, estima puntadas y calcula costos (React + Flask + MySQL/PostgreSQL).|flask,react,computer-vision,mysql,postgresql|
proyecto_bd2|gestion-universitaria|public|Sistema académico universitario: inscripciones, notas, reportes y cierre de gestión con roles y usuarios MySQL por rol.|react,nodejs,sequelize,mysql|
yachay_ai|yachay_ai|public|Yachay AI: app educativa con IA generativa (Gemini) para niños bolivianos, con práctica de aymara por voz.|flutter,dart,gemini,firebase,education|
hackatom-nuclear/proyecto-ganaderia|proyecto-ganaderia|public|RadioGuard: visión artificial + dosimetría nuclear para conservar alimentos (TensorFlow, OpenCV, FastAPI, Three.js). Hackatom.|tensorflow,opencv,fastapi,threejs,hackathon|
calculadoraDeIntegrales|calculadoraDeIntegrales|public|Calculadora de integrales definidas e indefinidas con SymPy, LaTeX y gráficas en GeoGebra (UMSA).|python,flask,sympy,geogebra,math|
Poisson_copa_libertadores|Poisson_copa_libertadores|public|Predictor de la Copa Libertadores con modelo de Poisson: probabilidades, goles esperados, marcadores e historial (2000-2024).|python,flask,statistics,poisson,football|
AbogadosJR|AbogadosJR|public|Aurea Legal & Tech: sitio para asociación de abogados con portafolio de casos (React + TypeScript + Sass).|react,typescript,sass,landing-page|
portfolioAbogados|portafolioAbogados|public|Abogados J-R: sitio corporativo ultrarrápido con Astro (servicios, equipo, blog y contacto).|astro,typescript,sass,seo|https://abogados-jr.netlify.app/
proyect_pg3|ProyectoEscuelasDeportivas|public|SportAdmin: gestión de escuelas deportivas con listas circulares, colas y pilas en Java visualizadas en la web.|java,data-structures,javascript|
sure_thing|locky-sure|public|Locky: bóveda de contraseñas con cifrado AES-256 de conocimiento cero y desbloqueo biométrico (Flutter).|flutter,dart,security,aes|
chess|ajedrez-3d|public|Ajedrez 3D multijugador en tiempo real: motor de reglas propio, Socket.io, Supabase, rival IA y modo invitado.|react,threejs,socketio,supabase,chess|https://huggingface.co/spaces/LuisFuturo01/chess
zequitex-ecommerce|zequitex-ecommerce|private|Tienda online de Zequitex: Next.js + NestJS + Prisma + MySQL con carrito, checkout y panel admin.|nextjs,nestjs,prisma,ecommerce|
dentalCRM|dental-crm|private|DentalSys: CRM odontológico con pacientes, citas, finanzas e inventario (React + Express + MySQL).|react,express,mysql,crm|
laser-administrador|zequitex-laser-admin|private|Zequitex Láser: app Android nativa (Kotlin + Jetpack Compose) para administrar trabajos de corte láser, clientes y máquina.|android,kotlin,jetpack-compose,sqlite|
catalogo-interactivo|catalogo-interactivo|public|Snowy Store: catálogo de productos con scroll cinematográfico (GSAP + Lenis) y pedido por WhatsApp.|react,typescript,gsap,lenis|
3dview|campus-3d-tour|public|Campus 3D: tour virtual 360° en el navegador con Three.js y React Three Fiber.|threejs,react-three-fiber,360,virtual-tour|
jarvis|jarvis-asistente-voz|public|J.A.R.V.I.S.: asistente de voz de escritorio con Whisper, Gemini/DeepSeek y UI PyQt6 holográfica.|python,pyqt6,whisper,gemini,voice-assistant|
web-cam|jarvis-web-vision|public|Jarvis web + visión por computadora con OpenCV DNN (MobileNet-SSD).|javascript,opencv,computer-vision|
camara-seguimiento|hand-tracking-particulas|public|Sistema de partículas controlado con las manos usando MediaPipe y la cámara.|mediapipe,javascript,canvas,computer-vision|
soccer|pizarra-tactica|public|Pizarra táctica para entrenadores: formaciones, jugadas animadas y fútbol sala, responsive y táctil.|javascript,football,coaching|
locky-web|locky-web|public|Landing de Locky: características, simulador de patrones, historial de versiones y descarga del APK.|landing-page,html,css,javascript|
web-publisidad-kivva|kivva_web_publish|public|Landing de Kivva: app de productividad (calendario, tareas, pizarra y alarmas) para Windows y Android.|landing-page,html,css,javascript|
monopoly/luchopolis-web|luchopolis|public|Luchópolis: landing del juego de mesa digital ambientado en La Paz y El Alto (Windows y Android).|game,landing-page,seo|
monopoly|monopoly-godot|public|Luchópolis: juego de mesa 3D/2D de propiedades en La Paz y El Alto, con rivales IA y modo online (Godot).|godot,gdscript,game,android|
Umseños-Nuclear|Umse-os-Nuclear.github.io|public|CCN: plataforma de monitoreo de variables críticas en una central nuclear con alertas y gráficos (hackatón).|hackathon,chartjs,bootstrap|
LIST
