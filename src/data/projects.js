// =====================================================================
//  PROYECTOS DEL PORTAFOLIO
//  Las capturas viven en /public/projects/<slug>/<archivo>-{desktop|mobile}.webp
//  y se generan con scripts/capture.py + scripts/optimize-images.py
// =====================================================================

const GH = 'https://github.com/LuisFuturo01';

/** Construye la lista de capturas de un proyecto.
 *  items: [archivo, caption_es, caption_en, { desktop?: bool, mobile?: bool, android?: true, ext? }]
 *  android: true = captura horizontal de la app Android corriendo en un teléfono real. */
const shots = (slug, items) => {
  const build = (kind) =>
    items
      .filter(([, , , opt = {}]) => (kind === 'android' ? opt.android : !opt.android && opt[kind] !== false))
      .map(([file, es, en, opt = {}]) => ({
        src: `/projects/${slug}/${file}${opt.ext ? '' : `-${kind}`}.${opt.ext || 'webp'}`,
        caption: { es, en },
      }));
  return { desktop: build('desktop'), mobile: build('mobile'), android: build('android') };
};

export const CATEGORIES = [
  { id: 'all', es: 'Todos', en: 'All' },
  { id: 'business', es: 'Sistemas empresariales', en: 'Business systems' },
  { id: 'web', es: 'Web & E-commerce', en: 'Web & E-commerce' },
  { id: 'ai', es: 'IA & Datos', en: 'AI & Data' },
  { id: '3d', es: '3D, VR & Juegos', en: '3D, VR & Games' },
  { id: 'mobile', es: 'Apps móviles', en: 'Mobile apps' },
];

export const projects = [
  // ------------------------------------------------------------------ 1
  {
    slug: 'snowy-ventas',
    category: 'business',
    featured: true,
    year: 2026,
    name: { es: 'Snowy Ventas — POS SaaS', en: 'Snowy Ventas — POS SaaS' },
    tagline: {
      es: 'Punto de venta, inventario y contabilidad en una sola plataforma.',
      en: 'Point of sale, inventory and accounting in a single platform.',
    },
    description: {
      es: 'Sistema SaaS completo para negocios: ventas en mostrador y por pedido, cotizador, control de stock con historial de reposición, contabilidad con ingresos vs. egresos, auditoría y reportes PDF. Seguridad con JWT, roles (admin, empleado, cliente), CAPTCHA propio y registro de accesos con IP y navegador.',
      en: 'Complete SaaS for businesses: counter and order-based sales, quoting, stock control with restock history, accounting with income vs. expenses, auditing and PDF reports. Secured with JWT, roles (admin, employee, client), a custom CAPTCHA and access logs with IP and browser.',
    },
    features: {
      es: ['Venta directa con validación de stock en tiempo real', 'Dashboard financiero con gráficos (Recharts)', 'Exportación de reportes a PDF (jsPDF)', 'Roles, JWT, bcrypt y logs de acceso', 'Tema claro/oscuro y diseño 100% responsive'],
      en: ['Direct sales with real-time stock validation', 'Financial dashboard with charts (Recharts)', 'PDF report export (jsPDF)', 'Roles, JWT, bcrypt and access logs', 'Light/dark theme and fully responsive design'],
    },
    stack: ['React', 'Vite', 'Node.js', 'Express', 'MySQL', 'JWT', 'Recharts', 'jsPDF'],
    links: { github: `${GH}/snowy_ventas`, demo: 'https://snowy-ventas.netlify.app/' },
    shots: shots('snowy-ventas', [
      ['01-dashboard', 'Dashboard con balance global y accesos rápidos', 'Dashboard with global balance and shortcuts'],
      ['02-venta-directa', 'Venta directa en mostrador', 'Counter sale'],
      ['03-productos', 'Catálogo de productos e inventario', 'Product catalog and inventory'],
      ['04-contabilidad', 'Contabilidad: ingresos vs. egresos', 'Accounting: income vs. expenses'],
      ['05-pedidos', 'Bandeja de pedidos por estado', 'Orders inbox by status'],
      ['06-auditoria', 'Auditoría de movimientos', 'Movement auditing'],
      ['07-logs', 'Logs de acceso con IP y navegador', 'Access logs with IP and browser'],
      ['00-login', 'Login con CAPTCHA propio', 'Login with custom CAPTCHA'],
    ]),
  },
  // ------------------------------------------------------------------ 2
  {
    slug: 'zequitex-ecommerce',
    category: 'web',
    featured: true,
    year: 2025,
    name: { es: 'Zequitex — Tienda online', en: 'Zequitex — Online store' },
    tagline: {
      es: 'E-commerce para una empresa textil boliviana con panel administrativo.',
      en: 'E-commerce for a Bolivian textile company with an admin panel.',
    },
    description: {
      es: 'Tienda online con catálogo filtrable, detalle de producto, carrito persistente con descuentos por volumen, checkout por departamento y método de pago, página de servicios de personalización y panel administrativo con inventario y alertas de stock. Backend en NestJS + Prisma sobre MySQL y autenticación JWT.',
      en: 'Online store with a filterable catalog, product detail, persistent cart with volume discounts, checkout by region and payment method, a customization services page and an admin panel with inventory and stock alerts. NestJS + Prisma backend on MySQL with JWT auth.',
    },
    features: {
      es: ['Catálogo con filtros, búsqueda y orden por precio', 'Carrito persistente (Zustand) y descuentos por volumen', 'Panel admin: valor de inventario, stock por categoría', 'API REST tipada con NestJS + Prisma', 'Server Components de Next.js para SEO'],
      en: ['Catalog with filters, search and price sorting', 'Persistent cart (Zustand) and volume discounts', 'Admin panel: inventory value, stock per category', 'Typed REST API with NestJS + Prisma', 'Next.js Server Components for SEO'],
    },
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Zustand', 'NestJS', 'Prisma', 'MySQL', 'JWT'],
    links: { github: null },
    private: true,
    shots: shots('zequitex-ecommerce', [
      ['01-home', 'Home con hero, beneficios y categorías', 'Home with hero, benefits and categories'],
      ['03-catalogo', 'Catálogo completo', 'Full catalog'],
      ['04-catalogo-filtro', 'Filtro por categoría', 'Category filter'],
      ['05-detalle', 'Detalle de producto', 'Product detail'],
      ['06-carrito', 'Carrito y checkout', 'Cart and checkout'],
      ['07-servicios', 'Servicios de personalización', 'Customization services'],
      ['08-admin-login', 'Acceso administrativo', 'Admin login'],
      ['09-admin-dashboard', 'Panel de inventario', 'Inventory dashboard'],
    ]),
  },
  // ------------------------------------------------------------------ 3
  {
    slug: 'radioguard',
    category: 'ai',
    featured: true,
    year: 2026,
    name: { es: 'RadioGuard — Dosimetría con IA', en: 'RadioGuard — AI dosimetry' },
    tagline: {
      es: 'Visión artificial + física nuclear para conservar alimentos (Hackatom).',
      en: 'Computer vision + nuclear physics to preserve food (Hackatom).',
    },
    description: {
      es: 'Sistema que analiza 4 fotos de una papa o manzana, clasifica su nivel de daño con un modelo TensorFlow propio, reconstruye un gemelo digital 3D y calcula la dosis de irradiación exacta (Beer-Lambert), la vida útil ganada y el impacto financiero para la planta. Backend FastAPI con WebSockets y dashboard en React + Three.js.',
      en: 'System that analyzes 4 photos of a potato or apple, classifies its damage level with a custom TensorFlow model, rebuilds a 3D digital twin and computes the exact irradiation dose (Beer-Lambert), the extra shelf life and the financial impact for the plant. FastAPI backend with WebSockets and a React + Three.js dashboard.',
    },
    features: {
      es: ['Modelo CNN propio (TensorFlow/Keras) para 6 niveles de daño', 'Segmentación GrabCut y textura 360° con OpenCV', 'Gemelo digital 3D en Three.js', 'Motor de dosimetría, vida útil y simulador B2B', 'Actualización en vivo por WebSockets'],
      en: ['Custom CNN (TensorFlow/Keras) for 6 damage levels', 'GrabCut segmentation and 360° texture with OpenCV', '3D digital twin in Three.js', 'Dosimetry, shelf-life engine and B2B simulator', 'Live updates over WebSockets'],
    },
    stack: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'WebSockets', 'React', 'TypeScript', 'Three.js'],
    links: { github: `${GH}/proyecto-ganaderia` },
    shots: shots('radioguard', [
      ['01-dashboard', 'Escáner 3D y análisis geométrico', '3D scanner and geometric analysis'],
      ['03-carga', 'Carga de 4 vistas 360° del fruto', 'Uploading 4 360° views of the fruit'],
      ['05-dosimetria', 'Atenuación vs. profundidad y dosis', 'Attenuation vs. depth and dose'],
      ['06-comparativa', 'Comparativa antes/después y defectos', 'Before/after comparison and defects'],
      ['07-historial', 'Historial de lotes', 'Batch history'],
      ['02-panel', 'Panel de carga manual o por cámara', 'Manual or camera upload panel'],
    ]),
  },
  // ------------------------------------------------------------------ 4
  {
    slug: 'cotizador-zequitex',
    category: 'business',
    featured: true,
    year: 2026,
    name: { es: 'Cotizador de bordados con IA', en: 'AI embroidery quoting tool' },
    tagline: {
      es: 'Sube un logo y obtén puntadas, colores y precio en segundos.',
      en: 'Upload a logo and get stitches, colors and price in seconds.',
    },
    description: {
      es: 'Herramienta interna para Zequitex SRL: procesa la imagen del diseño (quita el fondo, detecta colores con clustering y estima puntadas), calcula el costo real con materiales, hilos y descuentos por cantidad, y genera un ticket para compartir por WhatsApp. Incluye modo foto con cámara, modo "tanteo" guiado, gestión de clientes, órdenes de trabajo, historial de precios y personal. Base de datos heterogénea MySQL + PostgreSQL.',
      en: 'Internal tool for Zequitex SRL: processes the design image (background removal, color detection with clustering and stitch estimation), computes the real cost with materials, threads and quantity discounts, and generates a shareable ticket for WhatsApp. Includes camera mode, a guided estimation mode, clients, work orders, price history and staff. Heterogeneous MySQL + PostgreSQL database.',
    },
    features: {
      es: ['Procesamiento de imagen con rembg + scikit-learn', 'Costeo automático por puntadas, colores y medidas', 'Ticket compartible generado con html2canvas', 'Órdenes de trabajo con estados y fechas', 'BD distribuida MySQL + PostgreSQL'],
      en: ['Image processing with rembg + scikit-learn', 'Automatic costing by stitches, colors and size', 'Shareable ticket generated with html2canvas', 'Work orders with statuses and dates', 'Distributed MySQL + PostgreSQL database'],
    },
    stack: ['React', 'TypeScript', 'Sass', 'Python', 'Flask', 'SQLAlchemy', 'MySQL', 'PostgreSQL', 'Cloudinary'],
    links: { github: `${GH}/costos_with_zequitexsrl` },
    shots: shots('cotizador-zequitex', [
      ['02-diseno-cargado', 'Carga del diseño a bordar', 'Design upload'],
      ['03-resultado', 'Resultado: puntadas, colores y medidas', 'Result: stitches, colors and size'],
      ['03b-costos', 'Estructura de costos unitaria', 'Unit cost breakdown'],
      ['04-tanteo', 'Modo tanteo guiado', 'Guided estimation mode'],
      ['06-config-precios', 'Panel de precios vigentes', 'Current prices panel'],
      ['07-clientes', 'Gestión de clientes', 'Client management'],
      ['08-ordenes', 'Órdenes de trabajo', 'Work orders'],
      ['09-historial', 'Historial de configuraciones', 'Settings history'],
      ['10-personal', 'Personal y roles', 'Staff and roles'],
    ]),
  },
  // ------------------------------------------------------------------ 5
  {
    slug: 'gestion-universitaria',
    category: 'business',
    featured: true,
    year: 2025,
    name: { es: 'Sistema Académico Universitario', en: 'University Academic System' },
    tagline: {
      es: 'Inscripciones, notas y gestiones para +480 usuarios con 4 roles.',
      en: 'Enrollment, grades and terms for 480+ users with 4 roles.',
    },
    description: {
      es: 'Plataforma académica con roles de Administrador, Director de carrera, Docente y Estudiante. Maneja oferta académica por mención y semestre, inscripción con prerrequisitos, planillas de notas ponderadas, reportes con gráficos y exportación a PDF, y apertura/cierre de gestión. La seguridad se aplica también en la base de datos: cada rol se conecta con su propio usuario MySQL con permisos mínimos.',
      en: 'Academic platform with Admin, Program Director, Teacher and Student roles. Handles course offering by track and semester, enrollment with prerequisites, weighted grade sheets, reports with charts and PDF export, and term opening/closing. Security is enforced in the database too: each role connects with its own least-privilege MySQL user.',
    },
    features: {
      es: ['Malla curricular con prerrequisitos', 'Planillas de notas por paralelo y docente', 'Reportes e indicadores exportables a PDF', 'Usuarios MySQL por rol y auditoría (+1.300 registros)', 'Cierre de gestión con promoción automática'],
      en: ['Curriculum with prerequisites', 'Grade sheets per class and teacher', 'Reports and KPIs exportable to PDF', 'Per-role MySQL users and auditing (1,300+ records)', 'Term closing with automatic promotion'],
    },
    stack: ['React', 'Node.js', 'Express', 'Sequelize', 'MySQL', 'JWT', 'Recharts', 'jsPDF'],
    links: { github: `${GH}/gestion-universitaria` },
    shots: shots('gestion-universitaria', [
      ['01-dashboard', 'Panel de administración general', 'General admin panel'],
      ['02-usuarios', 'Gestión de usuarios y roles', 'Users and roles'],
      ['03-oferta', 'Oferta académica y malla curricular', 'Course offering and curriculum'],
      ['04-inscripcion', 'Ventanilla de inscripción', 'Enrollment desk'],
      ['05-notas', 'Notas y ponderaciones', 'Grades and weighting'],
      ['06-reportes', 'Reportes e indicadores', 'Reports and KPIs'],
      ['07-cierre', 'Apertura y cierre de gestión', 'Term opening and closing'],
      ['00-login', 'Login con usuarios de prueba', 'Login with demo users'],
    ]),
  },
  // ------------------------------------------------------------------ 6
  {
    slug: 'dental-crm',
    category: 'business',
    featured: false,
    year: 2025,
    name: { es: 'DentalSys — CRM odontológico', en: 'DentalSys — Dental CRM' },
    tagline: {
      es: 'Pacientes, citas, finanzas e inventario de un consultorio.',
      en: 'Patients, appointments, finances and inventory for a clinic.',
    },
    description: {
      es: 'CRM para consultorios dentales: ficha de pacientes con historial clínico, agenda de citas con estados, registro de pagos y gastos con gráfico mensual de ingresos, e inventario de insumos con alertas de stock mínimo y movimientos que generan el gasto automáticamente.',
      en: 'CRM for dental clinics: patient records with clinical history, appointment schedule with statuses, payments and expenses with a monthly income chart, and supplies inventory with minimum-stock alerts and movements that automatically log the expense.',
    },
    features: {
      es: ['KPIs del día: pacientes, citas, ingresos y ganancia neta', 'Agenda con estados pendiente/completada/cancelada', 'Inventario con alertas de stock bajo', 'Navegación inferior optimizada para móvil'],
      en: ['Daily KPIs: patients, appointments, income and net profit', 'Schedule with pending/completed/cancelled statuses', 'Inventory with low-stock alerts', 'Mobile-optimized bottom navigation'],
    },
    stack: ['React', 'Sass', 'Recharts', 'Node.js', 'Express', 'MySQL'],
    links: { github: null },
    private: true,
    shots: shots('dental-crm', [
      ['01-dashboard', 'Panel de control con KPIs', 'Control panel with KPIs'],
      ['02-pacientes', 'Gestión de pacientes', 'Patient management'],
      ['03-citas', 'Agenda de citas', 'Appointment schedule'],
      ['04-finanzas', 'Finanzas y pagos', 'Finances and payments'],
      ['05-inventario', 'Control de inventario', 'Inventory control'],
    ]),
  },
  // ------------------------------------------------------------------ 7
  {
    slug: 'yachay-ai',
    category: 'mobile',
    featured: true,
    year: 2026,
    name: { es: 'Yachay AI — Tutor para niños', en: 'Yachay AI — Kids tutor' },
    tagline: {
      es: 'App educativa con IA generativa para niños bolivianos, incluye aymara.',
      en: 'Generative-AI learning app for Bolivian kids, including Aymara.',
    },
    description: {
      es: 'App multiplataforma (Android, iOS y Web) donde cada niño elige un compañero andino y aprende Matemáticas, Ciencias y Aymara con un tutor que genera lecciones a medida con Gemini, reconocimiento y síntesis de voz para practicar pronunciación, puntos, logros y progreso guardado en la nube.',
      en: 'Cross-platform app (Android, iOS and Web) where each kid picks an Andean companion and learns Math, Science and Aymara with a tutor that generates tailored lessons with Gemini, speech recognition and text-to-speech to practice pronunciation, points, achievements and cloud-saved progress.',
    },
    features: {
      es: ['Lecciones generadas con IA (Gemini API)', 'Práctica de pronunciación aymara con voz', 'Gamificación: estrellas, logros y avatares', 'Progreso sincronizado con Firestore'],
      en: ['AI-generated lessons (Gemini API)', 'Aymara pronunciation practice with voice', 'Gamification: stars, achievements and avatars', 'Progress synced with Firestore'],
    },
    stack: ['Flutter', 'Dart', 'Gemini API', 'Firebase', 'Python', 'TTS / STT'],
    links: { github: `${GH}/yachay_ai` },
    shots: shots('yachay-ai', [
      ['01-splash', 'Pantalla de bienvenida', 'Welcome screen', { desktop: false }],
      ['02-login', 'Ingreso al aula', 'Classroom login', { desktop: false }],
      ['03-avatar', 'Elección de compañero andino', 'Andean companion picker', { desktop: false }],
      ['04-materias', 'Mapa de materias', 'Subjects map', { desktop: false }],
      ['06-aymara', 'Práctica de pronunciación aymara', 'Aymara pronunciation practice', { desktop: false }],
      ['05-tutor-ia', 'El tutor IA prepara la lección', 'The AI tutor prepares the lesson', { desktop: false }],
    ]),
  },
  // ------------------------------------------------------------------ 8
  {
    slug: 'ares-twin',
    category: '3d',
    featured: true,
    year: 2026,
    name: { es: 'ARES-TWIN — EVA en Marte (NASA)', en: 'ARES-TWIN — Mars EVA (NASA)' },
    tagline: {
      es: 'Gemelo digital VR para planificar caminatas de astronautas en Marte.',
      en: 'VR digital twin to plan astronaut walks on Mars.',
    },
    description: {
      es: 'Proyecto en equipo para NASA Space Apps. Planifica qué sitios científicos visita un astronauta en el cráter Gale y en qué orden, usando el oxígeno como costo, y replanifica ante eventos en vivo. Usa datos reales de la NASA (topografía USGS, imagen HiRISE, espectros CRISM). Mi parte: la simulación 3D y la experiencia VR — vista de espectador en laptop y casco VR con giroscopio desde el celular, sincronizados por red local.',
      en: 'Team project for NASA Space Apps. Plans which science sites an astronaut visits in Gale crater and in which order, using oxygen as cost, and re-plans on live events. Uses real NASA data (USGS topography, HiRISE imagery, CRISM spectra). My part: the 3D simulation and VR experience — spectator view on laptop and gyroscope VR headset on the phone, synced over the local network.',
    },
    features: {
      es: ['Terreno marciano 3D a partir de datos reales', 'Modo casco VR con giroscopio (Cardboard)', 'Ruta A* dinámica, dron y mochila', 'Sincronización en tiempo real con Socket.io'],
      en: ['3D Martian terrain from real data', 'Gyroscope VR headset mode (Cardboard)', 'Dynamic A* route, drone and backpack', 'Real-time sync with Socket.io'],
    },
    stack: ['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'Socket.io', 'Python', 'FastAPI'],
    links: { github: 'https://github.com/BMold/walkingsimulator' },
    team: true,
    shots: shots('ares-twin', [
      ['02-espectador', 'Vista del astronauta sobre Marte', 'Astronaut view on Mars'],
      ['03-mision', 'Misión completa sobre imagen HiRISE', 'Full mission on HiRISE imagery'],
      ['01-roles', 'Selección de rol: laptop o casco VR', 'Role selection: laptop or VR headset'],
    ]),
  },
  // ------------------------------------------------------------------ 10
  {
    slug: 'ajedrez-3d',
    category: '3d',
    featured: true,
    year: 2026,
    name: { es: 'Ajedrez 3D multijugador', en: 'Multiplayer 3D Chess' },
    tagline: {
      es: 'Ajedrez en 3D online en tiempo real, contra la IA o en local.',
      en: 'Real-time online 3D chess, against AI or local.',
    },
    description: {
      es: 'Ajedrez completo con motor de reglas propio (enroque, captura al paso, coronación, jaque mate y tablas), tablero 3D, salas online con reloj y reconexión vía Socket.io, cuentas con Supabase y rival con IA a través de un modelo de lenguaje. Incluye modo invitado para jugar 1 vs 1 sin registrarse. Desplegado con Docker en Hugging Face Spaces.',
      en: 'Full chess with its own rules engine (castling, en passant, promotion, checkmate and draws), 3D board, online rooms with clock and reconnection via Socket.io, Supabase accounts and an AI opponent powered by a language model. Includes guest mode to play 1v1 without signing up. Deployed with Docker on Hugging Face Spaces.',
    },
    features: {
      es: ['Motor de reglas de ajedrez completo', 'Partidas online con reloj y reconexión', 'Rival IA configurable', 'Modo invitado local'],
      en: ['Complete chess rules engine', 'Online games with clock and reconnection', 'Configurable AI opponent', 'Local guest mode'],
    },
    stack: ['React', 'TypeScript', 'Three.js', 'Socket.io', 'Express', 'Supabase', 'Docker'],
    links: { github: `${GH}/ajedrez-3d`, demo: 'https://huggingface.co/spaces/LuisFuturo01/chess' },
    shots: shots('ajedrez-3d', [
      ['04-partida', 'Partida en curso en el tablero 3D', 'Game in progress on the 3D board'],
      ['03-jugadas-validas', 'Pieza seleccionada con sus jugadas válidas', 'Selected piece with its valid moves'],
      ['05-jaque-mate', 'Jaque mate detectado por el motor de reglas', 'Checkmate detected by the rules engine'],
      ['07-tema-espacial', 'Tema espacial', 'Space theme'],
      ['08-tema-digital', 'Tema digital / cyber', 'Digital / cyber theme'],
      ['09-tema-medieval', 'Tema medieval de piedra', 'Medieval stone theme'],
      ['06-ajustes-visuales', 'Ajustes visuales personales', 'Personal visual settings'],
      ['02-tablero', 'Tablero inicial con reloj', 'Initial board with clock'],
      ['01-login', 'Login o modo invitado', 'Login or guest mode'],
    ]),
  },
  // ------------------------------------------------------------------ 11
  {
    slug: 'luchopolis',
    primary: 'android', // vista que se muestra primero (app corriendo)
    category: '3d',
    featured: false,
    year: 2026,
    name: { es: 'Luchópolis — Juego de mesa 3D', en: 'Luchópolis — 3D board game' },
    tagline: {
      es: 'Juego de propiedades ambientado en La Paz y El Alto, para Windows y Android.',
      en: 'Property-trading game set in La Paz and El Alto, for Windows and Android.',
    },
    description: {
      es: 'Juego de mesa de compra y venta de propiedades con barrios reales de La Paz y El Alto, desarrollado en Godot. Tablero 3D o 2D, de 2 a 6 jugadores, rivales con IA, subastas, negociaciones y modo online. Incluye su landing page de descarga optimizada para SEO.',
      en: 'Property-trading board game featuring real neighborhoods of La Paz and El Alto, built with Godot. 3D or 2D board, 2 to 6 players, AI rivals, auctions, trades and online mode. Includes its SEO-optimized download landing page.',
    },
    features: {
      es: ['Tablero 3D/2D con 40 casillas temáticas', 'Rivales con IA y subastas', 'Builds para Windows (64/32 bits) y Android', 'Landing con SEO, sitemap y Open Graph'],
      en: ['3D/2D board with 40 themed spaces', 'AI rivals and auctions', 'Builds for Windows (64/32-bit) and Android', 'Landing with SEO, sitemap and Open Graph'],
    },
    stack: ['Godot', 'GDScript', 'Blender', 'HTML', 'CSS', 'JavaScript'],
    links: { github: `${GH}/monopoly-godot` },
    shots: shots('luchopolis', [
      ['a04-tablero-3d', 'Partida contra la IA en el tablero 3D (Android)', 'Game vs AI on the 3D board (Android)', { android: true }],
      ['a05-propiedad', 'Tarjeta de propiedad: comprar o subastar', 'Property card: buy or auction', { android: true }],
      ['a08-registro', 'Registro de jugadas de los rivales IA', 'Move log of the AI rivals', { android: true }],
      ['a06-vista-2d', 'Vista 2D del tablero', '2D board view', { android: true }],
      ['a02-modos', 'Modos: Bluetooth, contra IA, pasar y jugar, WiFi', 'Modes: Bluetooth, vs AI, pass & play, WiFi', { android: true }],
      ['a03-rivales-ia', 'Rivales IA con 3 niveles de dificultad', 'AI rivals with 3 difficulty levels', { android: true }],
      ['a07-mis-propiedades', 'Gestión de propiedades y casas', 'Property and house management', { android: true }],
      ['a01-menu', 'Menú principal', 'Main menu', { android: true }],
      ['01-hero', 'Landing del juego', 'Game landing'],
      ['03-capturas', 'Capturas del tablero 3D', '3D board screenshots'],
      ['04-descargar', 'Descarga por plataforma', 'Download by platform'],
    ]),
  },
  // ------------------------------------------------------------------ 12
  {
    slug: 'locky',
    primary: 'mobile', // vista que se muestra primero (app corriendo)
    category: 'mobile',
    featured: false,
    year: 2025,
    name: { es: 'Locky — Bóveda de contraseñas', en: 'Locky — Password vault' },
    tagline: {
      es: 'App de credenciales cifradas con AES-256 y su web de distribución.',
      en: 'AES-256 encrypted credentials app and its distribution site.',
    },
    description: {
      es: 'App móvil (Flutter) para guardar contraseñas, tarjetas y patrones cifrados con AES-256 y arquitectura de conocimiento cero, con desbloqueo biométrico, generador de contraseñas y sincronización. La landing page presenta funciones, simulador de patrones, historial de versiones, guía de instalación y descarga del APK.',
      en: 'Mobile app (Flutter) to store passwords, cards and patterns encrypted with AES-256 and a zero-knowledge architecture, with biometric unlock, password generator and sync. The landing page shows features, a pattern simulator, version history, install guide and APK download.',
    },
    features: {
      es: ['Cifrado AES-256 de conocimiento cero', 'Desbloqueo biométrico', 'Landing con versiones y descarga del APK'],
      en: ['Zero-knowledge AES-256 encryption', 'Biometric unlock', 'Landing with versions and APK download'],
    },
    stack: ['Flutter', 'Dart', 'Supabase', 'HTML', 'CSS', 'JavaScript'],
    links: { github: `${GH}/locky-sure` },
    shots: shots('locky', [
      ['c01-bloqueo-pin', 'App: desbloqueo con PIN local o huella', 'App: unlock with local PIN or fingerprint', { desktop: false }],
      ['c03-generador', 'App: generador de contraseñas seguras', 'App: strong password generator', { desktop: false }],
      ['c05-patron', 'App: guardar patrones de desbloqueo (3×3 a 6×6)', 'App: store unlock patterns (3×3 to 6×6)', { desktop: false }],
      ['c04-tarjeta', 'App: tarjetas con CVV y PIN cifrados', 'App: cards with encrypted CVV and PIN', { desktop: false }],
      ['c02-nueva-credencial', 'App: nueva credencial cifrada con AES-256', 'App: new AES-256 encrypted credential', { desktop: false }],
      ['c06-identidad', 'App: documentos de identidad', 'App: identity documents', { desktop: false }],
      ['c07-seguridad', 'App: cuenta, contraseña maestra y PIN local', 'App: account, master password and local PIN', { desktop: false }],
      ['c08-temas', 'App: 6 temas visuales', 'App: 6 visual themes', { desktop: false }],
      ['c09-sincronizacion', 'App: sincronización con la nube (Supabase)', 'App: cloud sync (Supabase)', { desktop: false }],
      ['01-hero', 'Landing: tu bóveda privada', 'Landing: your private vault'],
      ['02-caracteristicas', 'Landing: características y demo interactiva', 'Landing: features and interactive demo'],
      ['03-versiones', 'Landing: historial de versiones', 'Landing: version history'],
      ['04-instalacion', 'Landing: guía de instalación', 'Landing: install guide'],
      ['05-faq', 'Landing: preguntas frecuentes', 'Landing: FAQ'],
    ]),
  },
  // ------------------------------------------------------------------ 13
  {
    slug: 'kivva',
    primary: 'mobile', // vista que se muestra primero (app corriendo)
    category: 'mobile',
    featured: false,
    year: 2026,
    name: { es: 'Kivva — Productividad', en: 'Kivva — Productivity' },
    tagline: {
      es: 'Ecosistema de agenda, tareas y pizarra para Windows y Android.',
      en: 'Calendar, tasks and whiteboard ecosystem for Windows and Android.',
    },
    description: {
      es: 'Aplicación de productividad multiplataforma con calendario, organización de tareas y pizarra de dibujo libre, con su sitio de lanzamiento y descargas para Windows y Android.',
      en: 'Cross-platform productivity app with calendar, task organization and a free-drawing whiteboard, with its launch site and downloads for Windows and Android.',
    },
    features: {
      es: ['Calendario y tareas sincronizadas', 'Pizarra / workspace creativo', 'Descargas para Windows y Android'],
      en: ['Synced calendar and tasks', 'Whiteboard / creative workspace', 'Downloads for Windows and Android'],
    },
    stack: ['Flutter', 'Dart', 'HTML', 'CSS', 'JavaScript'],
    links: { github: `${GH}/kivva_web_publish` },
    shots: shots('kivva', [
      ['11-calendario', 'App: calendario con agenda', 'App: calendar with schedule', { desktop: false }],
      ['12-nueva-entrada', 'App: nueva tarea o evento', 'App: new task or event', { desktop: false }],
      ['13-proyectos', 'App: workspace de notas', 'App: notes workspace', { desktop: false }],
      ['15-nueva-alarma', 'App: alarmas con tonos', 'App: alarms with tones', { desktop: false }],
      ['01-hero', 'Landing: tu ecosistema productivo', 'Landing: your productivity ecosystem'],
      ['02-scroll', 'Organización total y pizarra', 'Full organization and whiteboard'],
      ['03-galeria', 'Galería de la app', 'App gallery'],
    ]),
  },
  // ------------------------------------------------------------------ 14
  {
    slug: 'laser-admin',
    primary: 'mobile', // vista que se muestra primero (app corriendo)
    category: 'mobile',
    featured: false,
    year: 2026,
    name: { es: 'Zequitex Láser — App Android', en: 'Zequitex Laser — Android app' },
    tagline: {
      es: 'Administra trabajos de corte láser, clientes y mantenimiento de máquina.',
      en: 'Manage laser-cutting jobs, clients and machine maintenance.',
    },
    description: {
      es: 'App nativa Android (Kotlin + Jetpack Compose) 100% offline: trabajos con potencia, velocidad y tiempo de máquina, clientes con llamada y WhatsApp, dashboard de ingresos y puntualidad, horas de máquina con alertas de mantenimiento, importación/exportación CSV, respaldo automático en Google Drive y seguridad con huella o PIN. Portada animada con un láser que recorta el logo.',
      en: 'Native Android app (Kotlin + Jetpack Compose), fully offline: jobs with power, speed and machine time, clients with call and WhatsApp, income and punctuality dashboard, machine hours with maintenance alerts, CSV import/export, automatic Google Drive backup and fingerprint/PIN security. Animated splash with a laser cutting the logo.',
    },
    features: {
      es: ['SQLite con caché en memoria', 'Respaldo automático en Google Drive', 'Biometría / PIN para acciones sensibles', 'Adaptable a móvil y tablet'],
      en: ['SQLite with in-memory cache', 'Automatic Google Drive backup', 'Biometrics / PIN for sensitive actions', 'Adapts to phone and tablet'],
    },
    stack: ['Kotlin', 'Jetpack Compose', 'SQLite', 'Google Drive API', 'Gradle'],
    links: { github: null },
    private: true,
    shots: shots('laser-admin', [
      ['b01-dashboard', 'Resumen del taller: ingresos, pendientes y puntualidad', 'Shop summary: income, pending jobs and punctuality', { desktop: false }],
      ['b04-trabajos', 'Trabajos con potencia, velocidad, horas y estado', 'Jobs with power, speed, hours and status', { desktop: false }],
      ['b05-clientes', 'Clientes y mejor cliente del periodo', 'Clients and best client of the period', { desktop: false }],
      ['b02-dashboard-maquina', 'Horas de máquina y próximo mantenimiento', 'Machine hours and next maintenance', { desktop: false }],
      ['b03-dashboard-graficos', 'Puntualidad, estados e ingresos de 14 días', 'Punctuality, statuses and 14-day income', { desktop: false }],
      ['b06-ajustes', 'Ajustes: temas, tamaño de letra y seguridad con huella', 'Settings: themes, font size and fingerprint security', { desktop: false }],
      ['b00-splash', 'Portada animada', 'Animated splash', { desktop: false }],
      ['01-splash', 'Animación: el láser recorta el logo', 'Animation: the laser cuts the logo', { ext: 'gif', mobile: false }],
    ]),
  },
  // ------------------------------------------------------------------ 15
  {
    slug: 'shaffer-laws',
    category: 'web',
    featured: false,
    year: 2025,
    name: { es: 'Abogados J-R — Firma legal', en: 'Abogados J-R — Law firm' },
    tagline: {
      es: 'Sitio corporativo con Astro: servicios, equipo, blog y contacto.',
      en: 'Corporate site with Astro: services, team, blog and contact.',
    },
    description: {
      es: 'Sitio web ultrarrápido para una firma de abogados construido con Astro: páginas dinámicas por servicio, perfil de cada abogado, blog legal con artículos destacados, formulario de contacto, sitemap automático, prefetch y transiciones de vista.',
      en: 'Blazing-fast website for a law firm built with Astro: dynamic pages per service, a profile for each lawyer, a legal blog with featured articles, contact form, automatic sitemap, prefetch and view transitions.',
    },
    features: {
      es: ['Generación estática con Astro (SEO 100)', 'Rutas dinámicas por servicio, abogado y artículo', 'Sitemap y prefetch al pasar el mouse'],
      en: ['Static generation with Astro (100 SEO)', 'Dynamic routes per service, lawyer and article', 'Sitemap and hover prefetch'],
    },
    stack: ['Astro', 'TypeScript', 'Sass', 'Iconify'],
    links: { github: `${GH}/portafolioAbogados`, demo: 'https://abogados-jr.netlify.app/' },
    shots: shots('shaffer-laws', [
      ['01-inicio', 'Inicio', 'Home'],
      ['02-areas', 'Áreas de práctica', 'Practice areas'],
      ['03-equipo-home', 'Equipo de abogados', 'Legal team'],
      ['04-servicios', 'Servicios', 'Services'],
      ['06-blog', 'Blog legal', 'Legal blog'],
      ['07-contacto', 'Contacto', 'Contact'],
    ]),
  },
  // ------------------------------------------------------------------ 16
  {
    slug: 'abogados-jr',
    category: 'web',
    featured: false,
    year: 2025,
    name: { es: 'Aurea Legal & Tech', en: 'Aurea Legal & Tech' },
    tagline: {
      es: 'Landing para asociación de abogados con portafolio de casos.',
      en: 'Landing for a lawyers association with a case portfolio.',
    },
    description: {
      es: 'Sitio en React + TypeScript para una asociación de abogados: presentación, servicios por especialidad, blog, horarios y contacto, y un portafolio de casos filtrable por área. Desplegado en GitHub Pages.',
      en: 'React + TypeScript site for a lawyers association: intro, services by specialty, blog, office hours and contact, plus a case portfolio filterable by practice area. Deployed on GitHub Pages.',
    },
    features: {
      es: ['Portafolio de casos con filtros', 'SCSS modular por componente', 'Deploy automatizado a GitHub Pages'],
      en: ['Case portfolio with filters', 'Modular per-component SCSS', 'Automated deploy to GitHub Pages'],
    },
    stack: ['React', 'TypeScript', 'Sass', 'React Router', 'Vite'],
    links: { github: `${GH}/AbogadosJR` },
    shots: shots('abogados-jr', [
      ['01-hero', 'Hero de la firma', 'Firm hero'],
      ['02-nosotros', 'Experiencia y compromiso', 'Experience and commitment'],
      ['03-servicios', 'Servicios por especialidad', 'Services by specialty'],
      ['04-equipo', 'Blog y publicaciones', 'Blog and posts'],
      ['06-portafolio', 'Portafolio de casos', 'Case portfolio'],
    ]),
  },
  // ------------------------------------------------------------------ 17
  {
    slug: 'catalogo-interactivo',
    category: 'web',
    featured: false,
    year: 2026,
    name: { es: 'Snowy Store — Catálogo interactivo', en: 'Snowy Store — Interactive catalog' },
    tagline: {
      es: 'Catálogo de productos con scroll cinematográfico y pedido por WhatsApp.',
      en: 'Product catalog with cinematic scrolling and WhatsApp ordering.',
    },
    description: {
      es: 'Catálogo premium donde cada producto aparece con animaciones guiadas por el scroll (GSAP + Lenis), fichas técnicas, precio y botón directo a WhatsApp. Ideal para tiendas que venden por redes sociales.',
      en: 'Premium catalog where each product appears with scroll-driven animations (GSAP + Lenis), tech specs, price and a direct WhatsApp button. Ideal for shops selling through social media.',
    },
    features: {
      es: ['Animaciones con GSAP ScrollTrigger', 'Smooth scroll con Lenis', 'Pedido directo por WhatsApp'],
      en: ['GSAP ScrollTrigger animations', 'Smooth scroll with Lenis', 'Direct WhatsApp ordering'],
    },
    stack: ['React', 'TypeScript', 'GSAP', 'Lenis', 'Vite'],
    links: { github: `${GH}/catalogo-interactivo` },
    
    shots: shots('catalogo-interactivo', [
      ['01-portada', 'Portada del catálogo', 'Catalog cover'],
      ['02-coleccion', 'Ficha de producto animada', 'Animated product card'],
      ['03-producto', 'Transición entre productos', 'Transition between products'],
      ['04-galeria', 'Producto destacado', 'Featured product'],
      ['05-cierre', 'Cierre del catálogo', 'Catalog closing'],
    ]),
  },
  // ------------------------------------------------------------------ 18
  {
    slug: 'campus-3d',
    category: '3d',
    featured: false,
    year: 2026,
    name: { es: 'Campus 3D — Tour virtual 360°', en: 'Campus 3D — 360° virtual tour' },
    tagline: {
      es: 'Recorrido virtual 360° por ambientes, ideal para inmobiliarias y campus.',
      en: '360° virtual walkthrough of spaces, ideal for real estate and campuses.',
    },
    description: {
      es: 'Tour virtual en el navegador: cada ambiente es una foto panorámica proyectada sobre una esfera 3D. Navegación por flechas, teclado o miniaturas, auto-giro y diseño adaptable a celular.',
      en: 'In-browser virtual tour: each room is a panoramic photo projected onto a 3D sphere. Navigate with arrows, keyboard or thumbnails, with auto-rotation and a phone-friendly layout.',
    },
    features: {
      es: ['Panorámicas 360° con Three.js', 'Navegación por miniaturas y teclado', 'Auto-giro y controles táctiles'],
      en: ['360° panoramas with Three.js', 'Thumbnail and keyboard navigation', 'Auto-rotate and touch controls'],
    },
    stack: ['React', 'TypeScript', 'Three.js', 'React Three Fiber'],
    links: { github: `${GH}/campus-3d-tour` },
    
    shots: shots('campus-3d', [
      ['01-recepcion', 'Recepción principal', 'Main reception'],
      ['02-sala', 'Sala de estar', 'Living room'],
      ['03-comedor', 'Comedor', 'Dining room'],
      ['04-eventos', 'Salón de eventos', 'Event hall'],
    ]),
  },
  // ------------------------------------------------------------------ 19
  {
    slug: 'umsenos-nuclear',
    category: 'ai',
    featured: false,
    year: 2025,
    name: { es: 'CCN — Monitoreo nuclear con IA', en: 'CCN — AI nuclear monitoring' },
    tagline: {
      es: 'Plataforma de monitoreo de variables críticas en una central nuclear.',
      en: 'Platform to monitor critical variables in a nuclear plant.',
    },
    description: {
      es: 'Propuesta de hackatón para monitorear en tiempo real temperatura, presión, radiación y flujo en una central nuclear, con alertas inteligentes y gráficos (Chart.js). Sitio institucional con servicios, equipo y proyecto.',
      en: 'Hackathon proposal to monitor temperature, pressure, radiation and flow in real time at a nuclear plant, with smart alerts and charts (Chart.js). Institutional site with services, team and project.',
    },
    features: {
      es: ['Dashboard de variables con Chart.js', 'Alertas por umbrales', 'Sitio institucional multipágina'],
      en: ['Variables dashboard with Chart.js', 'Threshold alerts', 'Multi-page institutional site'],
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Chart.js'],
    links: { github: `${GH}/Umse-os-Nuclear.github.io` },
    team: true,
    shots: shots('umsenos-nuclear', [
      ['01-inicio', 'Centro de control', 'Control center'],
      ['02-inicio-scroll', 'Demandas y soporte con IA', 'Demands and AI support'],
      ['04-servicios', 'Variables monitoreadas', 'Monitored variables'],
      ['05-equipo', 'Equipo', 'Team'],
    ]),
  },
  // ------------------------------------------------------------------ 20
  {
    slug: 'hand-tracking',
    category: 'ai',
    featured: false,
    year: 2026,
    name: { es: 'Hand Tracking — Partículas', en: 'Hand Tracking — Particles' },
    tagline: {
      es: 'Controla un sistema de partículas con las manos usando la cámara.',
      en: 'Control a particle system with your hands using the webcam.',
    },
    description: {
      es: 'Experimento de visión por computadora en el navegador: detecta los puntos de la mano con MediaPipe y los usa para mover, atraer y transformar miles de partículas en canvas, con HUD de FPS y estado.',
      en: 'In-browser computer-vision experiment: detects hand landmarks with MediaPipe and uses them to move, attract and morph thousands of particles on canvas, with an FPS and status HUD.',
    },
    features: {
      es: ['Detección de manos con MediaPipe', 'Miles de partículas a 60 FPS', 'Formas seleccionables'],
      en: ['Hand detection with MediaPipe', 'Thousands of particles at 60 FPS', 'Selectable shapes'],
    },
    stack: ['JavaScript', 'MediaPipe', 'Canvas API'],
    links: { github: `${GH}/hand-tracking-particulas` },
    
    shots: shots('hand-tracking', [['01-sistema', 'Sistema de partículas listo para la mano', 'Particle system ready for the hand']]),
  },
  // ------------------------------------------------------------------ 21
  {
    slug: 'pizarra-tactica',
    category: 'web',
    featured: false,
    year: 2026,
    name: { es: 'Pizarra Táctica Pro', en: 'Tactical Board Pro' },
    tagline: {
      es: 'Pizarra para entrenadores: formaciones, jugadas animadas y fútbol sala.',
      en: 'Coach board: formations, animated plays and futsal.',
    },
    description: {
      es: 'Herramienta para entrenadores: elige deporte (fútbol 11 o sala) y formaciones de cada equipo, arrastra fichas, traza destinos y reproduce la jugada animada con pausa y continuación. Funciona con mouse o táctil.',
      en: 'Tool for coaches: pick the sport (11-a-side or futsal) and each team formation, drag pieces, draw targets and play the animated move with pause and resume. Works with mouse or touch.',
    },
    features: {
      es: ['Formaciones predefinidas por equipo', 'Animación de jugadas', 'Soporte táctil en móvil'],
      en: ['Predefined formations per team', 'Animated plays', 'Touch support on mobile'],
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: { github: `${GH}/pizarra-tactica` },
    
    shots: shots('pizarra-tactica', [
      ['01-pizarra', 'Pizarra con formaciones 4-4-2', 'Board with 4-4-2 formations'],
      ['02-modo', 'Modo trazar destinos', 'Draw targets mode'],
      ['01b-cancha', 'Cancha adaptada al celular', 'Pitch adapted to phone', { desktop: false }],
    ]),
  },
  // ------------------------------------------------------------------ 22
  {
    slug: 'sportadmin',
    category: 'business',
    featured: false,
    year: 2025,
    name: { es: 'SportAdmin — Escuelas deportivas', en: 'SportAdmin — Sports schools' },
    tagline: {
      es: 'Gestión de inscripciones con estructuras de datos visualizadas.',
      en: 'Enrollment management with visualized data structures.',
    },
    description: {
      es: 'Sistema para escuelas deportivas que modela su dominio con estructuras de datos propias en Java (listas circulares, listas dobles, colas y pilas) y las visualiza en la web: escuelas, estudiantes activos, cola de espera e historial personal.',
      en: 'System for sports schools that models its domain with custom Java data structures (circular lists, doubly linked lists, queues and stacks) and visualizes them on the web: schools, active students, waiting queue and personal history.',
    },
    features: {
      es: ['Listas circulares/dobles, colas y pilas en Java', 'Visualización interactiva de cada estructura', 'Diseño responsive'],
      en: ['Circular/doubly linked lists, queues and stacks in Java', 'Interactive visualization of each structure', 'Responsive design'],
    },
    stack: ['Java', 'HTML', 'CSS', 'JavaScript'],
    links: { github: `${GH}/ProyectoEscuelasDeportivas` },
    shots: shots('sportadmin', [
      ['01-panel', 'Panel de escuelas y estructuras', 'Schools and structures panel'],
      ['02-scroll', 'Cola de espera e historial', 'Waiting queue and history'],
    ]),
  },
  // ------------------------------------------------------------------ 23
  {
    slug: 'jarvis',
    category: 'ai',
    featured: false,
    year: 2026,
    name: { es: 'Jarvis — Asistente de voz', en: 'Jarvis — Voice assistant' },
    tagline: {
      es: 'Asistente personal por voz con IA para escritorio y web.',
      en: 'AI voice personal assistant for desktop and web.',
    },
    description: {
      es: 'Asistente estilo "Jarvis": escucha por micrófono, entiende la intención con IA, responde con voz y ejecuta herramientas del sistema. Versión de escritorio en Python con interfaz animada (orbe) y versión web ligera, más un módulo de visión con MobileNet-SSD para detectar personas por cámara.',
      en: 'Jarvis-style assistant: listens through the mic, understands intent with AI, answers by voice and runs system tools. Desktop version in Python with an animated orb UI and a lightweight web version, plus a MobileNet-SSD vision module to detect people on camera.',
    },
    features: {
      es: ['Reconocimiento y síntesis de voz', 'Herramientas del sistema por comando', 'Detección de objetos con OpenCV DNN'],
      en: ['Speech recognition and synthesis', 'System tools by command', 'Object detection with OpenCV DNN'],
    },
    stack: ['Python', 'OpenCV', 'LLM API', 'JavaScript', 'Web Speech API'],
    links: { github: `${GH}/jarvis-asistente-voz` },
    
    shots: shots('jarvis', [
      ['02-en-espera', 'App de escritorio: orbe holográfico en espera', 'Desktop app: holographic orb idle', { mobile: false }],
      ['03-escuchando', 'Escuchando: la esfera reacciona al volumen de tu voz', 'Listening: the orb reacts to your voice volume', { mobile: false }],
      ['04-pensando', 'Pensando: transcribe tu orden y consulta a la IA', 'Thinking: transcribes your command and queries the AI', { mobile: false }],
      ['01-inicializando', 'Inicializando el modelo de voz (Whisper)', 'Loading the speech model (Whisper)', { mobile: false }],
      ['06-configuracion', 'Configuración: proveedor de IA (Gemini / DeepSeek) y modelo', 'Settings: AI provider (Gemini / DeepSeek) and model', { mobile: false }],
      ['07-modo-mini', 'Modo mini flotante', 'Floating mini mode', { mobile: false }],
      ['01-web', 'Versión web: Jarvis Core', 'Web version: Jarvis Core'],
    ]),
  },
  // ------------------------------------------------------------------ 24 (externos, sin capturas locales)
  {
    slug: 'poisson',
    category: 'ai',
    featured: false,
    year: 2024,
    name: { es: 'Predictor Copa Libertadores', en: 'Copa Libertadores Predictor' },
    tagline: { es: 'Predicción de resultados con el modelo de Poisson.', en: 'Match prediction with the Poisson model.' },
    description: {
      es: 'Sistema que estima la probabilidad de victoria, empate y derrota y el marcador más probable de cada partido de la Copa Libertadores a partir de la distribución de Poisson.',
      en: 'System that estimates win/draw/loss probabilities and the most likely score of each Copa Libertadores match using the Poisson distribution.',
    },
    features: { es: ['Modelo estadístico de Poisson', 'Probabilidades por partido'], en: ['Poisson statistical model', 'Per-match probabilities'] },
    stack: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    links: { github: `${GH}/Poisson_copa_libertadores`, demo: 'https://predicador-grupofav-z-s-z.onrender.com/' },
    shots: shots('poisson', [
      ['02-probabilidades', 'Probabilidades, goles esperados y marcadores probables', 'Probabilities, expected goals and likely scores'],
      ['04-clasico', 'Superclásico Boca vs River con historial', 'Boca vs River superclásico with history'],
      ['03-marcadores', 'Marcadores más probables y últimos enfrentamientos', 'Most likely scores and recent meetings'],
      ['01-selector', 'Selector de equipos con escudos', 'Team picker with crests'],
    ]),
  },
  {
    slug: 'integrales',
    category: 'ai',
    featured: false,
    year: 2024,
    name: { es: 'Calculadora de integrales', en: 'Integral calculator' },
    tagline: { es: 'Integrales definidas e indefinidas paso a paso.', en: 'Definite and indefinite integrals step by step.' },
    description: {
      es: 'Calculadora web de integrales definidas e indefinidas con un backend en Python para el cálculo simbólico.',
      en: 'Web calculator for definite and indefinite integrals with a Python backend for symbolic computation.',
    },
    features: { es: ['Cálculo simbólico en Python'], en: ['Symbolic computation in Python'] },
    stack: ['Python', 'HTML', 'CSS', 'JavaScript'],
    links: { github: `${GH}/calculadoraDeIntegrales`, demo: 'https://calculadoradeintegrales.onrender.com/' },
    shots: shots('integrales', [
      ['02-resultado', 'Integral indefinida y definida en LaTeX', 'Indefinite and definite integral in LaTeX'],
      ['03-geogebra', 'Área bajo la curva en GeoGebra con límites ajustables', 'Area under the curve in GeoGebra with adjustable limits'],
      ['01-calculadora', 'Calculadora con previsualización de la función', 'Calculator with live function preview'],
      ['04-funciones-extra', 'Explorador de funciones curiosas', 'Curious functions explorer'],
      ['05-estadistica', 'Estadística de rendimiento del curso', 'Course performance statistics'],
      ['06-tablas', 'Resumen académico', 'Academic summary'],
      ['07-formulario', 'Formulario de evaluación', 'Evaluation form'],
    ]),
  },
];
