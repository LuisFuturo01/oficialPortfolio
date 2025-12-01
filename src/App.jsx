import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles.scss';

import { portfolioData } from './data/portfolioData';

import { useDynamicTitle } from './hooks/usePortfolioHooks';

import { MatrixBackground, GlobalCustomCursor } from './components/UI';

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
    
    const content = useMemo(() => portfolioData[lang], [lang]);
    
    useDynamicTitle(content.personal_data.name);

    useEffect(() => {
        document.body.className = isDark ? 'theme-dark' : 'theme-light';
    }, [isDark]);

    const commonProps = { content, isDark };

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
                <MatrixBackground isDark={isDark} />
                <GlobalCustomCursor isDark={isDark} />
                
                <Navbar content={content} isDark={isDark} setIsDark={setIsDark} setLang={setLang} />
                
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