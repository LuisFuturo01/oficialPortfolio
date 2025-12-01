export const portfolioData = {
    es: {
        personal_data: { name: "Luis Alejandro Zeballos Quiroz" },
        hero: {
            title: "Desarrollador Full Stack",
            tagline: "Construyendo soluciones digitales eficientes",
            intro_desc: "Especializado en transformar ideas en código funcional. Mi enfoque abarca desde la lógica del servidor hasta la experiencia de usuario, siempre buscando el mejor rendimiento.",
            dynamic_words: ["Zeballos Quiroz", "Full Stack Dev", "Problem Solver", "Innovador"] 
        },
        about: {
            title: "Sobre Mí",
            p1: "Soy Luis Alejandro Zeballos Quiroz, tengo 19 años y soy de Bolivia. Mi pasión es el desarrollo de software. He dedicado los últimos años a aprender y dominar las tecnologías que mueven la web hoy en día.",
            p2: "No me conformo con que las cosas funcionen; busco entender el porqué detrás de cada línea de código. Estoy listo para integrarme a equipos y aportar valor desde el primer día.",
            stats: [
                { label: "Años de Práctica", value: "1+" },
                { label: "Tecnologías", value: "20+" },
                { label: "Disponibilidad", value: "100%" },
            ]
        },
        skills: [
            { id: 'core', name: "Lenguajes", stack: ["JavaScript", "TypeScript", "Python", "Java", "C#"], icon: "Code" },
            { id: 'fe', name: "Frontend", stack: ["React", "Next.js", "TailwindCSS", "HTML5/CSS3", "Bootstrap", "Sass"], icon: "PenTool" },
            { id: 'be', name: "Backend", stack: ["Node.js", "Django", "PHP", "Laravel"], icon: "Server" },
            { id: 'db', name: "Datos", stack: ["PostgreSQL", "MongoDB", "SQL Server", "Firebase", "MySQL"], icon: "Database" },
            { id: 'tools', name: "Herramientas", stack: ["Git/GitHub", "Docker", "Xampp", "Wordpress", "Notion", "Figma"], icon: "GitBranch" },
            { id: 'speak', name: "Idiomas", stack: ["Español", "Inglés", "Portugués", "Francés"], icon: "Globe" },
        ],
        projects: [
            { 
                id: 1, 
                name: "Predictor de resultados de la Copa Libertadores", 
                desc: "Sistema predictor de resultados de la Copa Libertadores, basado en el modelo de Poisson.", 
                stack: "Python, HTML, CSS, JavaScript",
                links: { github: "https://github.com/LuisFuturo01/Poisson_copa_libertadores", demo: "https://predicador-grupofav-z-s-z.onrender.com/" } 
            },
            { 
                id: 2, 
                name: "Calculadora de integrales", 
                desc: "Calculadora de integrales definidas y indefinidas.", 
                stack: "HTML, CSS, JavaScript, Python",
                links: { github: "https://github.com/LuisFuturo01/calculadoraDeIntegrales", demo: "https://calculadoradeintegrales.onrender.com/" }
            },
        ],
        sections: {
            hero: { label: "INICIO", icon: "Zap", path: "/" },
            about: { label: "SOBRE_MÍ", icon: "User", path: "/about" },
            skills: { label: "STACK_TECNOLÓGICO", icon: "Cpu", path: "/skills" },
            projects: { label: "PROYECTOS", icon: "Code", path: "/projects" },
            contact: { label: "CONTACTO", icon: "Mail", path: "/contact" },
        },
        contact: {
            title: "Contáctame",
            subtitle: "Disponible para oportunidades laborales y colaboraciones.",
            cta: "Enviar Mensaje",
            social: {
                whatsapp: "https://wa.me/59171556955", 
                instagram: "https://instagram.com/zalexui"
            }
        }
    },
    en: {
        personal_data: { name: "Luis Alejandro Zeballos Quiroz" },
        hero: {
            title: "Full Stack Developer",
            tagline: "Building efficient digital solutions",
            intro_desc: "Specialized in transforming ideas into functional code. My approach covers everything from server logic to user experience, always seeking the best performance.",
            dynamic_words: ["Zeballos Quiroz", "Full Stack Dev", "Problem Solver", "Innovator"]
        },
        about: {
            title: "About Me",
            p1: "I am Luis Alejandro Zeballos Quiroz, 19 years old from Bolivia. My passion is software development. I have dedicated the last few years to learning and mastering the technologies that power the web today.",
            p2: "I don't settle for things just working; I seek to understand the why behind every line of code. I am ready to join teams and add value from day one.",
            stats: [
                { label: "Years Practice", value: "1+" },
                { label: "Technologies", value: "20+" },
                { label: "Availability", value: "100%" },
            ]
        },
        skills: [
            { id: 'core', name: "Languages", stack: ["JavaScript", "TypeScript", "Python", "Java", "C#"], icon: "Code" },
            { id: 'fe', name: "Frontend", stack: ["React", "Next.js", "TailwindCSS", "HTML5/CSS3", "Bootstrap", "Sass"], icon: "PenTool" },
            { id: 'be', name: "Backend", stack: ["Node.js", "Django", "PHP", "Laravel"], icon: "Server" },
            { id: 'db', name: "Database", stack: ["PostgreSQL", "MongoDB", "SQL Server", "Firebase", "MySQL"], icon: "Database" },
            { id: 'tools', name: "Tools", stack: ["Git/GitHub", "Docker", "Xampp", "Wordpress", "Notion", "Figma"], icon: "GitBranch" },
            { id: 'speak', name: "Languages", stack: ["Spanish", "English", "Portuguese", "French"], icon: "Globe" },
        ],
        projects: [
            { 
                id: 1, 
                name: "E-Learning Platform", 
                desc: "Modular learning system with user management.", 
                stack: "Next.js, Python, PostgreSQL",
                links: { github: "#", demo: "#" }
            },
            { 
                id: 2, 
                name: "Financial Dashboard", 
                desc: "Real-time data visualization.", 
                stack: "React, GoLang, Redis",
                links: { github: "#", demo: null }
            },
            { 
                id: 3, 
                name: "Custom API REST", 
                desc: "Scalable API with JWT authentication.", 
                stack: "Node.js, Express, Mongo",
                links: { github: "#", demo: null }
            },
        ],
        sections: {
            hero: { label: "HOME", icon: "Zap", path: "/" },
            about: { label: "ABOUT_ME", icon: "User", path: "/about" },
            skills: { label: "TECH_STACK", icon: "Cpu", path: "/skills" },
            projects: { label: "PROJECTS", icon: "Code", path: "/projects" },
            contact: { label: "CONTACT", icon: "Mail", path: "/contact" },
        },
        contact: {
            title: "Contact Me",
            subtitle: "Available for job opportunities and collaborations.",
            cta: "Send Message",
            social: {
                whatsapp: "https://wa.me/59171556955", 
                instagram: "https://instagram.com/zalexui"
            }
        }
    }
};