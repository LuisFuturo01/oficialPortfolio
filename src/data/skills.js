// =====================================================================
//  STACK TECNOLÓGICO
//  what = qué es (breve) · use = para qué lo uso yo / qué gana el cliente
//  level: 1-5 (dominio) · projects: proyectos del portafolio donde se usa
// =====================================================================

const t = (name, level, what_es, use_es, what_en, use_en, color) => ({
  name, level, color,
  what: { es: what_es, en: what_en },
  use: { es: use_es, en: use_en },
});

export const skillGroups = [
  {
    id: 'languages',
    icon: 'Code',
    title: { es: 'Lenguajes', en: 'Languages' },
    items: [
      t('JavaScript', 5, 'El lenguaje de la web: da vida e interactividad a cualquier página.', 'Construyo interfaces dinámicas, lógica de negocio en el navegador y servidores con Node.js.', 'The language of the web: brings any page to life.', 'I build dynamic interfaces, browser business logic and Node.js servers.', '#f7df1e'),
      t('TypeScript', 5, 'JavaScript con tipos: detecta errores antes de que lleguen al cliente.', 'Lo uso en proyectos grandes (Next.js, NestJS, React) para código más seguro y mantenible.', 'JavaScript with types: catches bugs before they reach users.', 'I use it on large projects (Next.js, NestJS, React) for safer, maintainable code.', '#3178c6'),
      t('Python', 5, 'Lenguaje líder en IA, datos y automatización.', 'Entreno modelos de IA, proceso imágenes, creo APIs con FastAPI/Flask y automatizo tareas.', 'The leading language for AI, data and automation.', 'I train AI models, process images, build APIs with FastAPI/Flask and automate tasks.', '#3776ab'),
      t('Java', 4, 'Lenguaje robusto y orientado a objetos usado en empresas y Android.', 'Modelo estructuras de datos y lógica empresarial sólida y bien organizada.', 'Robust, object-oriented language used in enterprise and Android.', 'I model data structures and solid, well-organized business logic.', '#f89820'),
      t('Kotlin', 4, 'Lenguaje moderno oficial para apps Android.', 'Desarrollo apps Android nativas, rápidas y que funcionan sin internet.', 'Modern official language for Android apps.', 'I build fast native Android apps that work offline.', '#7f52ff'),
      t('Dart', 4, 'Lenguaje de Flutter para apps multiplataforma.', 'Con un solo código publico apps para Android, iOS, web y escritorio.', 'Flutter\'s language for cross-platform apps.', 'With one codebase I ship apps for Android, iOS, web and desktop.', '#0175c2'),
      t('SQL', 5, 'Lenguaje para consultar y administrar bases de datos.', 'Diseño bases de datos normalizadas, reportes complejos, roles y seguridad.', 'Language to query and manage databases.', 'I design normalized databases, complex reports, roles and security.', '#e38c00'),
      t('C#', 3, 'Lenguaje de Microsoft para escritorio, juegos y backend.', 'Lo aplico en aplicaciones de escritorio y lógica de videojuegos.', 'Microsoft\'s language for desktop, games and backend.', 'I apply it to desktop apps and game logic.', '#9b4f96'),
      t('PHP', 3, 'Lenguaje clásico del servidor web.', 'Mantengo y extiendo sitios y sistemas existentes en PHP/Laravel/WordPress.', 'Classic server-side web language.', 'I maintain and extend existing PHP/Laravel/WordPress systems.', '#777bb4'),
      t('GDScript', 3, 'Lenguaje del motor de videojuegos Godot.', 'Programo la lógica, IA de rivales y reglas de mis videojuegos.', 'Scripting language of the Godot engine.', 'I code game logic, AI rivals and rules for my games.', '#478cbf'),
    ],
  },
  {
    id: 'frontend',
    icon: 'PenTool',
    title: { es: 'Frontend & UI', en: 'Frontend & UI' },
    items: [
      t('React', 5, 'Librería para construir interfaces por componentes.', 'Creo dashboards, sistemas y webs rápidas, modulares y fáciles de escalar.', 'Library for component-based interfaces.', 'I build fast, modular and scalable dashboards, systems and sites.', '#61dafb'),
      t('Next.js', 4, 'Framework de React con SEO y renderizado en servidor.', 'Hago tiendas online y webs que aparecen en Google y cargan al instante.', 'React framework with SEO and server rendering.', 'I build online stores and sites that rank on Google and load instantly.', '#ffffff'),
      t('Astro', 4, 'Framework para sitios de contenido ultrarrápidos.', 'Ideal para webs corporativas y blogs con puntaje SEO perfecto.', 'Framework for ultra-fast content sites.', 'Ideal for corporate sites and blogs with perfect SEO scores.', '#ff5d01'),
      t('Tailwind CSS', 5, 'Framework de estilos utilitario.', 'Maqueto diseños modernos y responsive en tiempo récord.', 'Utility-first CSS framework.', 'I build modern responsive layouts in record time.', '#38bdf8'),
      t('Sass / SCSS', 5, 'CSS con variables, anidación y módulos.', 'Organizo estilos de proyectos grandes y temas claro/oscuro.', 'CSS with variables, nesting and modules.', 'I organize styles for large projects and light/dark themes.', '#cc6699'),
      t('HTML5 / CSS3', 5, 'La base de toda página web.', 'Escribo maquetación semántica, accesible y 100% responsive.', 'The foundation of every web page.', 'I write semantic, accessible, fully responsive markup.', '#e34f26'),
      t('Three.js / R3F', 4, 'Gráficos 3D en el navegador (WebGL).', 'Hago tours 360°, gemelos digitales, juegos y experiencias VR.', '3D graphics in the browser (WebGL).', 'I build 360° tours, digital twins, games and VR experiences.', '#049ef4'),
      t('GSAP', 4, 'Librería profesional de animaciones.', 'Animaciones con scroll que hacen que una web se sienta premium.', 'Professional animation library.', 'Scroll animations that make a site feel premium.', '#88ce02'),
      t('Zustand / Context', 4, 'Manejo de estado global en React.', 'Carritos de compra, sesiones y datos compartidos sin complicaciones.', 'Global state management in React.', 'Shopping carts, sessions and shared data without hassle.', '#8b5cf6'),
      t('Recharts / Chart.js', 4, 'Librerías de gráficos.', 'Dashboards financieros y de KPIs que se entienden de un vistazo.', 'Charting libraries.', 'Financial and KPI dashboards understood at a glance.', '#22c55e'),
      t('Bootstrap', 4, 'Framework de componentes listos.', 'Prototipos y paneles administrativos rápidos.', 'Ready-made component framework.', 'Fast prototypes and admin panels.', '#7952b3'),
    ],
  },
  {
    id: 'backend',
    icon: 'Server',
    title: { es: 'Backend & APIs', en: 'Backend & APIs' },
    items: [
      t('Node.js / Express', 5, 'JavaScript en el servidor.', 'Construyo APIs REST seguras con JWT, roles y validaciones.', 'JavaScript on the server.', 'I build secure REST APIs with JWT, roles and validation.', '#3c873a'),
      t('NestJS', 4, 'Framework de Node.js con arquitectura empresarial.', 'APIs grandes, ordenadas por módulos y fáciles de mantener en equipo.', 'Node.js framework with enterprise architecture.', 'Large APIs organized in modules, easy to maintain as a team.', '#e0234e'),
      t('FastAPI', 4, 'Framework Python moderno y muy rápido.', 'Sirvo modelos de IA y datos en tiempo real con WebSockets.', 'Modern, very fast Python framework.', 'I serve AI models and real-time data over WebSockets.', '#009688'),
      t('Flask', 4, 'Microframework web de Python.', 'APIs livianas para procesamiento de imágenes y cálculos.', 'Python web microframework.', 'Lightweight APIs for image processing and calculations.', '#cfcfcf'),
      t('Django', 3, 'Framework Python "con baterías incluidas".', 'Sistemas con panel administrativo listo desde el día uno.', 'Batteries-included Python framework.', 'Systems with an admin panel ready from day one.', '#0c4b33'),
      t('Laravel', 3, 'Framework PHP elegante.', 'Mantengo y amplío sistemas web PHP existentes.', 'Elegant PHP framework.', 'I maintain and extend existing PHP web systems.', '#ff2d20'),
      t('Socket.io / WebSockets', 4, 'Comunicación en tiempo real.', 'Juegos multijugador, chats y dashboards en vivo.', 'Real-time communication.', 'Multiplayer games, chats and live dashboards.', '#a3a3a3'),
      t('REST / JWT / OAuth', 5, 'Estándares para APIs y autenticación.', 'Integraciones seguras entre sistemas, apps móviles y terceros.', 'Standards for APIs and authentication.', 'Secure integrations between systems, mobile apps and third parties.', '#f59e0b'),
    ],
  },
  {
    id: 'data',
    icon: 'Database',
    title: { es: 'Bases de datos', en: 'Databases' },
    items: [
      t('MySQL / MariaDB', 5, 'Base de datos relacional más usada del mundo.', 'Diseño esquemas, vistas, roles por usuario y auditoría.', 'The world\'s most used relational database.', 'I design schemas, views, per-user roles and auditing.', '#4479a1'),
      t('PostgreSQL', 4, 'Base de datos relacional avanzada.', 'Datos críticos y arquitecturas heterogéneas MySQL + PostgreSQL.', 'Advanced relational database.', 'Critical data and heterogeneous MySQL + PostgreSQL setups.', '#336791'),
      t('SQL Server', 4, 'Base de datos empresarial de Microsoft.', 'Bases distribuidas entre sedes con linked servers y transacciones distribuidas.', 'Microsoft\'s enterprise database.', 'Distributed multi-site databases with linked servers and distributed transactions.', '#cc2927'),
      t('Prisma / Sequelize / SQLAlchemy', 4, 'ORMs: trabajan la base de datos desde el código.', 'Consultas tipadas, migraciones y menos errores.', 'ORMs: work with the database from code.', 'Typed queries, migrations and fewer bugs.', '#5a67d8'),
      t('Firebase / Firestore', 4, 'Backend en la nube de Google.', 'Sincronización en tiempo real y autenticación para apps móviles.', 'Google\'s cloud backend.', 'Real-time sync and authentication for mobile apps.', '#ffca28'),
      t('Supabase', 4, 'Alternativa open-source a Firebase sobre PostgreSQL.', 'Cuentas de usuario y datos en la nube en minutos.', 'Open-source Firebase alternative on PostgreSQL.', 'User accounts and cloud data in minutes.', '#3ecf8e'),
      t('MongoDB', 3, 'Base de datos NoSQL de documentos.', 'Datos flexibles y prototipos rápidos.', 'Document NoSQL database.', 'Flexible data and fast prototypes.', '#47a248'),
      t('SQLite', 4, 'Base de datos embebida.', 'Apps móviles que funcionan 100% sin internet.', 'Embedded database.', 'Mobile apps that work fully offline.', '#0f80cc'),
    ],
  },
  {
    id: 'ai',
    icon: 'Brain',
    title: { es: 'Inteligencia Artificial', en: 'Artificial Intelligence' },
    items: [
      t('TensorFlow / Keras', 4, 'Framework de Google para redes neuronales.', 'Entreno modelos propios de clasificación de imágenes.', 'Google\'s neural-network framework.', 'I train custom image classification models.', '#ff6f00'),
      t('OpenCV', 4, 'Visión por computadora.', 'Segmentación, detección de objetos y análisis de fotos o cámara.', 'Computer vision.', 'Segmentation, object detection and photo/camera analysis.', '#5c3ee8'),
      t('YOLO / MediaPipe', 3, 'Modelos de detección en tiempo real.', 'Detecto productos, personas o manos en video en vivo.', 'Real-time detection models.', 'I detect products, people or hands in live video.', '#00ffff'),
      t('scikit-learn', 4, 'Machine learning clásico.', 'Clustering, predicciones y análisis de datos.', 'Classic machine learning.', 'Clustering, predictions and data analysis.', '#f7931e'),
      t('LLM APIs (Gemini, OpenAI, Claude)', 5, 'Modelos de lenguaje como servicio.', 'Agrego chatbots, tutores y automatizaciones inteligentes a tu sistema.', 'Language models as a service.', 'I add chatbots, tutors and smart automations to your system.', '#a855f7'),
      t('Prompt Engineering', 5, 'Diseño de instrucciones para IA.', 'Logro respuestas precisas, seguras y con el tono de tu marca.', 'Designing instructions for AI.', 'I get precise, safe answers in your brand\'s voice.', '#ec4899'),
    ],
  },
  {
    id: 'mobile',
    icon: 'Smartphone',
    title: { es: 'Móvil, 3D & Juegos', en: 'Mobile, 3D & Games' },
    items: [
      t('Flutter', 4, 'Framework de Google para apps multiplataforma.', 'Apps para Android, iOS y web con un solo código.', 'Google\'s cross-platform app framework.', 'Android, iOS and web apps from one codebase.', '#02569b'),
      t('Jetpack Compose', 4, 'UI moderna para Android nativo.', 'Interfaces fluidas y adaptables a móvil y tablet.', 'Modern UI for native Android.', 'Smooth UIs that adapt to phone and tablet.', '#4285f4'),
      t('Godot Engine', 3, 'Motor de videojuegos open source.', 'Juegos 2D/3D para Windows y Android.', 'Open-source game engine.', '2D/3D games for Windows and Android.', '#478cbf'),
      t('Blender', 3, 'Modelado y animación 3D.', 'Modelos y assets para juegos y experiencias 3D.', '3D modeling and animation.', 'Models and assets for games and 3D experiences.', '#f5792a'),
      t('WebXR / VR', 3, 'Realidad virtual en el navegador.', 'Experiencias VR con el celular como casco.', 'Virtual reality in the browser.', 'VR experiences using the phone as a headset.', '#14b8a6'),
    ],
  },
  {
    id: 'tools',
    icon: 'Wrench',
    title: { es: 'DevOps & Herramientas', en: 'DevOps & Tools' },
    items: [
      t('Git / GitHub', 5, 'Control de versiones y colaboración.', 'Historial de cambios, ramas y trabajo en equipo ordenado.', 'Version control and collaboration.', 'Change history, branches and tidy teamwork.', '#f05032'),
      t('Docker', 4, 'Contenedores para empaquetar aplicaciones.', 'Despliegues idénticos en cualquier servidor.', 'Containers to package applications.', 'Identical deployments on any server.', '#2496ed'),
      t('Vite', 5, 'Herramienta de build ultrarrápida.', 'Entornos de desarrollo instantáneos y builds optimizados.', 'Ultra-fast build tool.', 'Instant dev environments and optimized builds.', '#646cff'),
      t('Netlify / Render / HF Spaces', 4, 'Plataformas de hosting en la nube.', 'Publico tu proyecto online con HTTPS y deploy automático.', 'Cloud hosting platforms.', 'I put your project online with HTTPS and auto-deploys.', '#00c7b7'),
      t('Playwright', 4, 'Automatización de navegadores.', 'Pruebas end-to-end y capturas automáticas (¡como las de este portafolio!).', 'Browser automation.', 'End-to-end tests and automatic screenshots (like the ones in this portfolio!).', '#2ead33'),
      t('Postman', 4, 'Cliente para probar APIs.', 'Pruebo y documento cada endpoint antes de entregar.', 'API testing client.', 'I test and document every endpoint before delivery.', '#ff6c37'),
      t('Figma', 4, 'Diseño de interfaces y prototipos.', 'Diseño la UI contigo antes de programar: cero sorpresas.', 'Interface design and prototyping.', 'I design the UI with you before coding: zero surprises.', '#f24e1e'),
      t('XAMPP / WordPress', 4, 'Entorno local y CMS más popular.', 'Sitios autoadministrables para negocios.', 'Local stack and most popular CMS.', 'Self-managed sites for businesses.', '#fb7a24'),
      t('Notion', 4, 'Documentación y gestión de proyectos.', 'Te comparto avances, tareas y documentación en un solo lugar.', 'Docs and project management.', 'I share progress, tasks and docs in one place.', '#ffffff'),
    ],
  },
  {
    id: 'vibe',
    icon: 'Sparkles',
    title: { es: 'Vibe Coding & IA para desarrollo', en: 'Vibe Coding & AI-assisted dev' },
    items: [
      t('Claude Code', 5, 'Agente de IA que programa dentro del proyecto.', 'Acelero entregas: refactors, pruebas y features completas en horas, no semanas.', 'AI agent that codes inside the project.', 'I speed up delivery: refactors, tests and full features in hours, not weeks.', '#d97757'),
      t('Cursor', 5, 'Editor de código con IA integrada.', 'Escribo y reviso código con asistencia de IA en tiempo real.', 'Code editor with built-in AI.', 'I write and review code with real-time AI assistance.', '#ffffff'),
      t('GitHub Copilot', 5, 'Autocompletado inteligente de código.', 'Menos código repetitivo, más tiempo para la lógica de tu negocio.', 'Smart code autocomplete.', 'Less boilerplate, more time for your business logic.', '#8957e5'),
      t('Vibe Coding', 5, 'Desarrollar describiendo la intención y guiando a la IA.', 'Prototipos funcionales en un día para validar tu idea antes de invertir.', 'Building by describing intent and steering the AI.', 'Working prototypes in a day to validate your idea before investing.', '#f43f5e'),
      t('Agentes & MCP', 4, 'IA que usa herramientas: navegador, base de datos, APIs.', 'Automatizo procesos repetitivos de tu empresa con agentes.', 'AI that uses tools: browser, database, APIs.', 'I automate your company\'s repetitive processes with agents.', '#06b6d4'),
    ],
  },
];

export const spokenLanguages = [
  { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' }, pct: 100 },
  { name: { es: 'Inglés', en: 'English' }, level: { es: 'Avanzado', en: 'Advanced' }, pct: 80 },
  { name: { es: 'Portugués', en: 'Portuguese' }, level: { es: 'Intermedio', en: 'Intermediate' }, pct: 55 },
  { name: { es: 'Francés', en: 'French' }, level: { es: 'Básico', en: 'Basic' }, pct: 35 },
];
