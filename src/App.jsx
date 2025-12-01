import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Estilos
import './styles.scss';

// Datos
import { portfolioData } from './data/portfolioData';

// Hooks (IMPORTADO, NO DEFINIDO AQUÍ)
import { useDynamicTitle } from './hooks/usePortfolioHooks';

// Componentes UI globales (Matrix, Cursor)
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

const App = () => {
    const [isDark, setIsDark] = useState(true);
    const [lang, setLang] = useState('es');
    
    // Obtener data basada en el idioma
    const content = useMemo(() => portfolioData[lang], [lang]);
    
    // Usar el hook importado para el título
    useDynamicTitle(content.personal_data.name);

    // Efecto para cambiar la clase del body (Theme)
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