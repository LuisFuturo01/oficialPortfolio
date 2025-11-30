import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Code, Cpu, Zap, Moon, Sun, Globe, Github, Linkedin, Mail, User, BookOpen, Download, FileText, Server, PenTool, GitBranch, Database, Cloud, ArrowRight, ExternalLink, Instagram, MessageCircle, Eye } from 'lucide-react';
import NotFound from './components/NotFound';
import emailjs from "emailjs-com";
import profileimg from './assets/images/profile.jpeg';
import './styles.scss';




const CV_URL = "./assets/documentos/cv_luis_zeballos.pdf"; 

const portfolioData = {
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
            { id: 'fe', name: "Frontend", stack: ["React", "Next.js", "TailwindCSS", "HTML5/CSS3"], icon: "PenTool" },
            { id: 'be', name: "Backend", stack: ["Node.js", "Express", "Django", "Spring Boot"], icon: "Server" },
            { id: 'db', name: "Datos", stack: ["PostgreSQL", "MongoDB", "SQL Server", "Redis"], icon: "Database" },
            { id: 'tools', name: "Herramientas", stack: ["Git/GitHub", "Docker", "Linux", "Postman"], icon: "GitBranch" },
        ],
        projects: [
            { id: 1, name: "E-Learning Platform", desc: "Sistema modular de aprendizaje con gestión de usuarios.", stack: "Next.js, Python, PostgreSQL" },
            { id: 2, name: "Financial Dashboard", desc: "Visualización de datos en tiempo real.", stack: "React, GoLang, Redis" },
            { id: 3, name: "Custom API REST", desc: "API escalable con autenticación JWT.", stack: "Node.js, Express, Mongo" },
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
                { label: "Years Practice", value: "3+" },
                { label: "Technologies", value: "20+" },
                { label: "Availability", value: "100%" },
            ]
        },
        skills: [
            { id: 'core', name: "Languages", stack: ["JavaScript", "TypeScript", "Python", "Java", "C#"], icon: "Code" },
            { id: 'fe', name: "Frontend", stack: ["React", "Next.js", "TailwindCSS", "HTML5/CSS3"], icon: "PenTool" },
            { id: 'be', name: "Backend", stack: ["Node.js", "Express", "Django", "Spring Boot"], icon: "Server" },
            { id: 'db', name: "Data", stack: ["PostgreSQL", "MongoDB", "SQL Server", "Redis"], icon: "Database" },
            { id: 'tools', name: "Tools", stack: ["Git/GitHub", "Docker", "Linux", "Postman"], icon: "GitBranch" },
        ],
        projects: [
            { id: 1, name: "E-Learning Platform", desc: "Modular learning system with user management.", stack: "Next.js, Python, PostgreSQL" },
            { id: 2, name: "Financial Dashboard", desc: "Real-time data visualization.", stack: "React, GoLang, Redis" },
            { id: 3, name: "Custom API REST", desc: "Scalable API with JWT authentication.", stack: "Node.js, Express, Mongo" },
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


const useDynamicTitle = (name) => {
    const titles = useMemo(() => [`${name} | Full Stack`, `[STATUS: ONLINE]`, `Luis Zeballos`], [name]);
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            document.title = titles[index];
            index = (index + 1) % titles.length;
        }, 5000);
        return () => clearInterval(interval);
    }, [titles]);
};

const useIntersectionObserver = (options = { threshold: 0.1 }) => {
    const [isIntersecting, setIntersecting] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(true);
                observer.disconnect(); 
            }
        }, options);
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return [ref, isIntersecting];
};

const useMouseTracker = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = useCallback((e) => { setPosition({ x: e.clientX, y: e.clientY }); }, []);
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [handleMouseMove]);
    return position;
};

const Typewriter = ({ words, delay = 3000 }) => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const currentWord = words[wordIndex];
        const handleType = () => {
            setText(prev => isDeleting ? currentWord.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1));
            if (!isDeleting && text === currentWord) setTimeout(() => setIsDeleting(true), delay);
            else if (isDeleting && text === '') {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        };
        const timer = setTimeout(handleType, isDeleting ? 50 : 100);
        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, words, delay]);

    return <span className="typewriter-text">{text}<span className="cursor-blink">_</span></span>;
};

const RevealOnScroll = ({ children }) => {
    const [ref, isVisible] = useIntersectionObserver();
    return <div ref={ref} className={`reveal-section ${isVisible ? 'is-visible' : ''}`}>{children}</div>;
};

const SpotlightCard = ({ children, className = "", isDark }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className={`spotlight-card ${className}`}
        >
            <div
                className="spotlight-overlay"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${isDark ? 'rgba(16, 185, 129, 0.15)' : 'rgba(16, 185, 129, 0.1)'}, transparent 40%)`,
                }}
            />
            <div className="card-content">{children}</div>
        </div>
    );
};

const GlobalCustomCursor = ({ isDark }) => {
    const position = useMouseTracker();
    return (
        <div
            className="global-cursor"
            style={{
                background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${isDark ? 'rgba(52, 211, 153, 0.2)' : 'rgba(4, 120, 87, 0.1)'}, transparent 80%)`,
            }}
        />
    );
};

const MatrixBackground = ({ isDark }) => {
    const canvasRef = useRef(null);
    useEffect(() => {
        if (!isDark) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = document.body.scrollHeight;
        const letters = '01'; 
        const fontSize = 16;
        const columns = Math.floor(width / fontSize);
        const drops = Array(columns).fill(1);
        
        const draw = () => {
            ctx.fillStyle = 'rgba(2, 6, 23, 0.05)'; 
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#10B981'; 
            ctx.font = `${fontSize}px 'VT323', monospace`;
            for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        };
        const interval = setInterval(draw, 50);
        const handleResize = () => { width = canvas.width = window.innerWidth; height = canvas.height = document.body.scrollHeight; };
        window.addEventListener('resize', handleResize);
        return () => { clearInterval(interval); window.removeEventListener('resize', handleResize); };
    }, [isDark]);

    if (!isDark) return null;
    return <canvas ref={canvasRef} className="matrix-canvas" />;
};

const HeroSection = ({ content }) => (
    <section className="hero-section">
        <div className="hero-grid">
            <div className="hero-text">
                <div className="status-badge">
                    <span className="status-dot animate-ping"></span>
                    <span className="status-dot static"></span>
                    Disponible para trabajar
                </div>
                <h1 className="hero-title">
                    Luis Alejandro<br/>
                    <span className="accent-text"><Typewriter words={content.hero.dynamic_words} /></span>
                </h1>
                <h2 className="hero-subtitle">{content.hero.title}</h2>
                <p className="hero-desc">{content.hero.intro_desc}</p>
                <div className="hero-actions">
                    <a href="https://drive.google.com/file/d/1av_xUMcgP_7VgMRk7gJ3AnMox-vEL3iC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-highlight">
                        <FileText size={20} className="icon-mr" /> VER CV
                    </a>
                    <Link to="/contact" className="btn-primary">CONTACTAR</Link>
                </div>
            </div>
            <div className="hero-image-container">
                <div className="hero-image-wrapper">
                    <img 
                        src={profileimg} 
                        alt="Luis Zeballos" 
                        className="hero-img"
                    />
                    <div className="corner-deco bottom-right"></div>
                    <div className="corner-deco top-left"></div>
                </div>
            </div>
        </div>
    </section>
);

const AboutMe = ({ content, isDark }) => (
    <section id="about" className="section-container">
        <RevealOnScroll>
            <h2 className="section-title">
                <span className="title-number">01.</span> {content.about.title}
                <span className="title-line"></span>
            </h2>
            <div className="about-grid">
                <div className="about-text">
                    <p>{content.about.p1}</p>
                    <p>{content.about.p2}</p>
                    <div className="about-actions">
                        <a href="https://drive.google.com/file/d/1av_xUMcgP_7VgMRk7gJ3AnMox-vEL3iC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-highlight large">
                            <Eye size={22} className="icon-mr" /> Ver PDF Online
                        </a>
                        
                    </div>
                </div>
                <div className="stats-grid">
                    {content.about.stats.map((stat, i) => (
                        <SpotlightCard key={i} isDark={isDark} className="stat-card">
                            <span className="stat-label">{stat.label}</span>
                            <span className="stat-value">{stat.value}</span>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </RevealOnScroll>
    </section>
);

const SkillsGraph = ({ content, isDark }) => {
    const icons = { Code, PenTool, Server, Database, GitBranch, Cpu, Cloud };
    return (
        <section id="skills" className="section-container">
            <RevealOnScroll>
                <h2 className="section-title">
                    <span className="title-number">02.</span> Stack Tecnológico
                    <span className="title-line"></span>
                </h2>
                <div className="skills-grid">
                    {content.skills.map((grp) => {
                        const IconComp = icons[grp.icon] || Code;
                        return (
                            <SpotlightCard key={grp.id} isDark={isDark} className="skill-card">
                                <div className="skill-header">
                                    <div className="skill-icon-wrapper"><IconComp size={24} /></div>
                                    <h3>{grp.name}</h3>
                                </div>
                                <div className="skill-tags">
                                    {grp.stack.map(tech => <span key={tech} className="skill-tag">{tech}</span>)}
                                </div>
                            </SpotlightCard>
                        );
                    })}
                </div>
            </RevealOnScroll>
        </section>
    );
};

const ProjectsConsole = ({ content, isDark }) => (
    <section id="projects" className="section-container">
        <RevealOnScroll>
            <h2 className="section-title">
                <span className="title-number">03.</span> Proyectos
                <span className="title-line"></span>
            </h2>
            <div className="projects-grid">
                {content.projects.map((proj, idx) => (
                    <SpotlightCard key={proj.id} isDark={isDark} className="project-card">
                        <div className={`project-layout ${idx % 2 !== 0 ? 'reverse' : ''}`}>
                            <div className="project-info">
                                <p className="project-featured">Proyecto Destacado</p>
                                <h3 className="project-title">{proj.name}</h3>
                                <div className="project-desc">{proj.desc}</div>
                                <div className="project-stack">
                                    {proj.stack.split(', ').map((tech, i) => <span key={i}>{tech}</span>)}
                                </div>
                                <div className="project-links">
                                    <Github size={20} className="icon-link" />
                                    <ExternalLink size={20} className="icon-link" />
                                </div>
                            </div>
                            <div className="project-image">
                                <div className="img-placeholder"><Code size={48} /></div>
                            </div>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </RevealOnScroll>
    </section>
);

const ContactSection = ({ content }) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "portfolioLuis", 
                "template_tjxa21n", 
                form.current,
                "uftlo6n2RL8bs0Hh5"
            )
            .then(
                () => {
                    alert("¡Mensaje enviado exitosamente!");
                    form.current.reset(); 
                },
                (error) => {
                    alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
                    console.error(error);
                }
            );
    };
    useEffect(() => {
    document.title = "Contacto | Luis Zeballos";

    const desc = document.querySelector("meta[name='description']");
    if (desc) {
        desc.setAttribute(
            "content",
            "Ponte en contacto conmigo para colaborar en proyectos de desarrollo web."
        );
    } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = "Ponte en contacto conmigo para colaborar en proyectos de desarrollo web.";
        document.head.appendChild(meta);
    }
}, []);
   return (
    <section id="contact" className="section-container">
        <RevealOnScroll>
            <div className="contact-box">
                <div className="contact-glow-line"></div>
                <h2 className="contact-title">{content.contact.title}</h2>
                <p className="contact-subtitle">{content.contact.subtitle}</p>

                    
                    <div className="social-buttons-container">
                        <a href={content.contact.social.whatsapp} target="_blank" rel="noreferrer" className="social-pill whatsapp">
                            <MessageCircle size={22} /> <span>WhatsApp</span>
                        </a>
                        <a href={content.contact.social.instagram} target="_blank" rel="noreferrer" className="social-pill instagram">
                            <Instagram size={22} /> <span>Instagram</span>
                        </a>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Tu Nombre" required className="form-input" />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Tu Email" required className="form-input" />
                        </div>
                        <div className="form-group">
                            <textarea name="message" rows="4" placeholder="Tu Mensaje" required className="form-input"></textarea>
                        </div>
                        <button type="submit" className="btn-primary full-width">{content.contact.cta}</button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};

import { Menu, X } from 'lucide-react';

const Navbar = ({ content, isDark, setIsDark, setLang}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const icons = { Zap, User, Cpu, Code, Mail };
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${isDark ? 'dark' : 'light'}`}>
            <div className="nav-content">
                <Link to="/" className="nav-logo">LZ_DEV</Link>
                
                <div className="nav-links">
                    {Object.entries(content.sections).map(([key, section]) => {
                        const IconComp = icons[section.icon] || Zap;
                        const isActive = location.pathname === section.path;
                        return (
                            <Link 
                                key={key} 
                                to={section.path} 
                                className={`nav-item ${isActive ? 'active' : ''}`}
                            >
                                <IconComp size={18} /> <span>{section.label}</span>
                            </Link>
                        );
                    })}
                </div>

                <div className="nav-actions">
                    <button onClick={() => setLang(l => l === 'es' ? 'en' : 'es')} className="nav-btn">ES/EN</button>
                    <button onClick={() => setIsDark(!isDark)} className="nav-btn toggle-theme">
                        {isDark ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                    
                    <button 
                        className="nav-btn mobile-toggle" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''} ${isDark ? 'dark' : 'light'}`}>
                {Object.entries(content.sections).map(([key, section]) => {
                    const IconComp = icons[section.icon] || Zap;
                    const isActive = location.pathname === section.path;
                    return (
                        <Link 
                            key={key} 
                            to={section.path} 
                            className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)} // Cierra al hacer click
                        >
                            <IconComp size={24} /> <span>{section.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

const Footer = () => (
    <footer className="footer-premium">
        <div className="footer-content">
            <div className="footer-left">
                <p className="copyright">© 2025 Luis Alejandro Zeballos Quiroz</p>
                <p className="rights">Todos los derechos reservados.</p>
            </div>
            <div className="footer-right">
                <a href="#" className="footer-social-link"><Github size={20} /></a>
                <a href="#" className="footer-social-link"><Linkedin size={20} /></a>
                <a href="#" className="footer-social-link"><Mail size={20} /></a>
            </div>
        </div>
        <div className="footer-bottom-line"></div>
    </footer>
);

const App = () => {
    const [isDark, setIsDark] = useState(true);
    const [lang, setLang] = useState('es');
    
    const content = useMemo(() => portfolioData[lang], [lang]);
    useDynamicTitle(content.personal_data.name);

    useEffect(() => {
        document.body.className = isDark ? 'theme-dark' : 'theme-light';
    }, [isDark]);

    const commonProps = { content, isDark };
    useEffect(() => {
    document.title = "Título de la página";

    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
    }
    meta.content = "Descripción de la página";
}, []);

    return (
    <Router>
        <div className={`app-wrapper ${isDark ? 'dark' : 'light'}`}>
            <MatrixBackground isDark={isDark} />
            <GlobalCustomCursor isDark={isDark} />
            
            <Navbar content={content} isDark={isDark} setIsDark={setIsDark} setLang={setLang} />
            
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<HeroSection colors={{accent_bg: 'bg-emerald-500', accent_border: 'border-emerald-500', accent: 'text-emerald-400'}} {...commonProps} />} />
                    <Route path="/about" element={<AboutMe {...commonProps} />} />
                    <Route path="/skills" element={<SkillsGraph {...commonProps} />} />
                    <Route path="/projects" element={<ProjectsConsole {...commonProps} />} />
                    <Route path="/contact" element={<ContactSection {...commonProps} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            
            <Footer isDark={isDark} />
        </div>
    </Router>
);

};

export default App;