import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Estilos
import './styles.scss';

// Datos
import { portfolioData } from './data/portfolioData';

// Componentes UI globales
import { MatrixBackground, GlobalCustomCursor } from './components/UI';

// Secciones / Páginas
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import AboutMe from './components/About';
import SkillsGraph from './components/Skills';
import ProjectsConsole from './components/Projects';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

// Hook de título (mantenido localmente por simplicidad o puedes moverlo a UI.jsx)
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

const App = () => {
    const [isDark, setIsDark] = useState(true);
    const [lang, setLang] = useState('es');
    
    // Carga de datos
    const content = useMemo(() => portfolioData[lang], [lang]);
    useDynamicTitle(content.personal_data.name);

    // Efecto de tema en el body
    useEffect(() => {
        document.body.className = isDark ? 'theme-dark' : 'theme-light';
    }, [isDark]);

    const commonProps = { content, isDark };

    // Meta descripción inicial
    useEffect(() => {
        let meta = document.querySelector("meta[name='description']");
        if (!meta) {
            meta = document.createElement("meta");
            meta.name = "description";
            document.head.appendChild(meta);
        }
        meta.content = "Portafolio Luis Zeballos";
    }, []);

    return (
        <Router>
            <div className={`app-wrapper ${isDark ? 'dark' : 'light'}`}>
                {/* Fondos globales */}
                <MatrixBackground isDark={isDark} />
                <GlobalCustomCursor isDark={isDark} />
                
                <Navbar content={content} isDark={isDark} setIsDark={setIsDark} setLang={setLang} />
                
                {/* Contenedor principal con padding para navbar fija */}
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={
                            <HeroSection 
                                // Pasamos el prop 'colors' tal como estaba en tu original
                                colors={{accent_bg: 'bg-emerald-500', accent_border: 'border-emerald-500', accent: 'text-emerald-400'}} 
                                {...commonProps} 
                            />
                        } />
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