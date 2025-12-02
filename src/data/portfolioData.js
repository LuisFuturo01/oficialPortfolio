export const portfolioData = {
  // ================= VERSIÓN ESPAÑOL =================
  es: {
    personal_data: { 
      name: "Luis Alejandro Zeballos Quiroz",
      links: {
        cv: "https://drive.google.com/file/d/1ERtkPq25x1BRZsm-8uydchcKPsXLftXo/view?usp=sharing",
        github: "https://github.com/LuisFuturo01",
        linkedin: "https://www.linkedin.com/in/luis-alejandro-zeballos-quiroz-324bab2b9/",
        email: "mailto:luis.futuro.01@gmail.com"
      }
    },
    ui: {
      status: "Disponible para trabajar",
      view_cv_btn: "VER CV",
      view_cv_online: "Ver CV Online",
      contact_btn: "CONTACTAR",
      project_featured: "Proyecto Destacado",
      project_github_aria: "Ver código fuente en GitHub",
      project_demo_aria: "Ver demostración en vivo",
      project_img_aria: "Imagen representativa de",
    },
    hero: {
      title: "Desarrollador Full Stack",
      tagline: "Construyendo soluciones digitales eficientes",
      intro_desc:
        "Especializado en transformar ideas en código funcional. Mi enfoque abarca desde la lógica del servidor hasta la experiencia de usuario, siempre buscando el mejor rendimiento.",
      dynamic_words: [
        "Zeballos Quiroz",
        "Full Stack Dev",
        "Problem Solver",
        "Innovador",
      ],
    },
    about: {
      title: "Sobre Mí",
      p1: "Soy Luis Alejandro Zeballos Quiroz, tengo 19 años y soy de Bolivia. Mi pasión es el desarrollo de software. He dedicado los últimos años a aprender y dominar las tecnologías que mueven la web hoy en día.",
      p2: "No solo busco que las cosas funcionen, sino comprender el propósito y la lógica detrás de cada línea de código. Estoy preparado para integrarme rápidamente a cualquier equipo y aportar valor desde el primer día.",
      stats: [
        { label: "Años de Práctica", value: "1+" },
        { label: "Tecnologías", value: "20+" },
        { label: "Disponibilidad", value: "100%" },
      ],
    },
    skills: [
      {
        id: "core",
        name: "Lenguajes",
        stack: ["JavaScript", "TypeScript", "Python", "Java", "C#"],
        icon: "Code",
      },
      {
        id: "fe",
        name: "Frontend",
        stack: [
          "React",
          "Next.js",
          "TailwindCSS",
          "HTML5/CSS3",
          "Bootstrap",
          "Sass",
        ],
        icon: "PenTool",
      },
      {
        id: "be",
        name: "Backend",
        stack: ["Node.js", "Django", "PHP", "Laravel"],
        icon: "Server",
      },
      {
        id: "db",
        name: "Datos",
        stack: ["PostgreSQL", "MongoDB", "SQL Server", "Firebase", "MySQL"],
        icon: "Database",
      },
      {
        id: "tools",
        name: "Herramientas",
        stack: [
          "Git/GitHub",
          "Docker",
          "Xampp",
          "Wordpress",
          "Notion",
          "Figma",
        ],
        icon: "GitBranch",
      },
      {
        id: "speak",
        name: "Idiomas",
        stack: ["Español", "Inglés", "Portugués", "Francés"],
        icon: "Globe",
      },
    ],
    projects: [
      {
        id: 1,
        name: "Predictor de resultados de la Copa Libertadores",
        desc: "Sistema predictor de resultados de la Copa Libertadores, basado en el modelo de Poisson.",
        stack: "Python, HTML, CSS, JavaScript",
        links: {
          github: "https://github.com/LuisFuturo01/Poisson_copa_libertadores",
          demo: "https://predicador-grupofav-z-s-z.onrender.com/",
        },
      },
      {
        id: 2,
        name: "Calculadora de integrales",
        desc: "Calculadora de integrales definidas y indefinidas.",
        stack: "HTML, CSS, JavaScript, Python",
        links: {
          github: "https://github.com/LuisFuturo01/calculadoraDeIntegrales",
          demo: "https://calculadoradeintegrales.onrender.com/",
        },
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
      form: {
        name_ph: "Tu Nombre",
        email_ph: "Tu Email",
        msg_ph: "Tu Mensaje",
        success_msg: "¡Mensaje enviado exitosamente!",
        error_msg: "Error al enviar el mensaje.",
      },
      social: {
        whatsapp: "https://wa.me/59171556955",
        instagram: "https://instagram.com/zalexui",
      },
    },
    footer: {
      rights: "Todos los derechos reservados."
    },
    notFound: {
      title: "ERROR: SECTOR NO ENCONTRADO",
      desc: "La ruta que intentas acceder no existe en este sistema o los datos han sido corrompidos.",
      btn: "INICIAR SECUENCIA DE RETORNO"
    }
  },
  
  // ================= ENGLISH VERSION =================
  en: {
    personal_data: { 
      name: "Luis Alejandro Zeballos Quiroz",
      links: {
        cv: "https://drive.google.com/file/d/1ERtkPq25x1BRZsm-8uydchcKPsXLftXo/view?usp=sharing",
        github: "https://github.com/LuisFuturo01",
        linkedin: "https://www.linkedin.com/in/luis-alejandro-zeballos-quiroz-324bab2b9/",
        email: "mailto:luis.futuro.01@gmail.com"
      }
    },
    ui: {
      status: "Available for work",
      view_cv_btn: "VIEW CV",
      view_cv_online: "View CV Online",
      contact_btn: "CONTACT ME",
      project_featured: "Featured Project",
      project_github_aria: "View Code on GitHub",
      project_demo_aria: "View Live Demo",
      project_img_aria: "Representative image of",
    },
    hero: {
      title: "Full Stack Developer",
      tagline: "Building efficient digital solutions",
      intro_desc:
        "Specialized in transforming ideas into functional code. My approach covers everything from server logic to user experience, always seeking the best performance.",
      dynamic_words: [
        "Zeballos Quiroz",
        "Full Stack Dev",
        "Problem Solver",
        "Innovator",
      ],
    },
    about: {
      title: "About Me",
      p1: "I am Luis Alejandro Zeballos Quiroz, 19 years old from Bolivia. My passion is software development. I have dedicated the last few years to learning and mastering the technologies that power the web today.",
      p2: "I don't just want things to work; I strive to understand the purpose and logic behind every line of code. I am ready to quickly integrate into any team and contribute value from day one.",
      stats: [
        { label: "Years Practice", value: "1+" },
        { label: "Technologies", value: "20+" },
        { label: "Availability", value: "100%" },
      ],
    },
    skills: [
      {
        id: "core",
        name: "Languages",
        stack: ["JavaScript", "TypeScript", "Python", "Java", "C#"],
        icon: "Code",
      },
      {
        id: "fe",
        name: "Frontend",
        stack: [
          "React",
          "Next.js",
          "TailwindCSS",
          "HTML5/CSS3",
          "Bootstrap",
          "Sass",
        ],
        icon: "PenTool",
      },
      {
        id: "be",
        name: "Backend",
        stack: ["Node.js", "Django", "PHP", "Laravel"],
        icon: "Server",
      },
      {
        id: "db",
        name: "Database",
        stack: ["PostgreSQL", "MongoDB", "SQL Server", "Firebase", "MySQL"],
        icon: "Database",
      },
      {
        id: "tools",
        name: "Tools",
        stack: [
          "Git/GitHub",
          "Docker",
          "Xampp",
          "Wordpress",
          "Notion",
          "Figma",
        ],
        icon: "GitBranch",
      },
      {
        id: "speak",
        name: "Languages",
        stack: ["Spanish", "English", "Portuguese", "French"],
        icon: "Globe",
      },
    ],
    // CORRECCIÓN: TUS PROYECTOS TRADUCIDOS AL INGLÉS
    projects: [
      {
        id: 1,
        name: "Copa Libertadores Predictor",
        desc: "Result prediction system for the Copa Libertadores, based on the Poisson model.",
        stack: "Python, HTML, CSS, JavaScript",
        links: {
          github: "https://github.com/LuisFuturo01/Poisson_copa_libertadores",
          demo: "https://predicador-grupofav-z-s-z.onrender.com/",
        },
      },
      {
        id: 2,
        name: "Integral Calculator",
        desc: "Calculator for definite and indefinite integrals.",
        stack: "HTML, CSS, JavaScript, Python",
        links: {
          github: "https://github.com/LuisFuturo01/calculadoraDeIntegrales",
          demo: "https://calculadoradeintegrales.onrender.com/",
        },
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
      form: {
        name_ph: "Your Name",
        email_ph: "Your Email",
        msg_ph: "Your Message",
        success_msg: "Message sent successfully!",
        error_msg: "Error sending message.",
      },
      social: {
        whatsapp: "https://wa.me/59171556955",
        instagram: "https://instagram.com/zalexui",
      },
    },
    footer: {
      rights: "All rights reserved."
    },
    notFound: {
      title: "ERROR: SECTOR NOT FOUND",
      desc: "The route you are trying to access does not exist in this system or data has been corrupted.",
      btn: "INITIATE RETURN SEQUENCE"
    }
  },
};