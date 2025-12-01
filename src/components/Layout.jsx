import React from 'react';
import { Sun, Moon, Github, Linkedin, Mail, Zap, User, Cpu, Code } from 'lucide-react';

export const Navbar = ({ content, colors, isDark, setIsDark, setLang, setPage, page }) => {
    const icons = { Zap, User, Cpu, Code, Mail };

    return (
        <nav 
            className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b transition-colors duration-300 ${isDark ? 'border-slate-800 bg-slate-950/80' : 'border-slate-200 bg-white/80'}`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
                <span className={`text-3xl font-bold font-pixel tracking-wide ${colors.accent}`} aria-label="Logo LZ_DEV">LZ_DEV</span>
                
                <div className="hidden md:flex space-x-1">
                    {Object.entries(content.sections).map(([key, section]) => {
                        const IconComp = icons[section.icon] || Zap;
                        const isActive = page === key;
                        return (
                            <button
                                key={key}
                                onClick={() => setPage(key)}
                                aria-current={isActive ? 'page' : undefined}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-pixel text-lg
                                    ${isActive 
                                        ? `bg-emerald-500/10 ${colors.accent}` 
                                        : 'hover:bg-emerald-500/5 opacity-70 hover:opacity-100'}
                                `}
                            >
                                <IconComp size={18} aria-hidden="true" />
                                <span>{section.label}</span>
                            </button>
                        );
                    })}
                </div>

                <div className="flex space-x-4 items-center">
                    <button 
                        onClick={() => setLang(l => l === 'es' ? 'en' : 'es')} 
                        className={`px-3 py-1 rounded-md border text-lg font-bold transition-all hover:scale-105 font-pixel ${colors.accent} ${isDark ? 'border-emerald-600/50 hover:bg-emerald-900/20' : 'border-emerald-600/50 hover:bg-emerald-50'}`}
                        aria-label="Cambiar idioma / Change Language"
                    >
                        ES/EN
                    </button>
                    <button 
                        onClick={() => setIsDark(!isDark)} 
                        className={`p-2 rounded-full transition-all hover:rotate-12 ${colors.accent} ${isDark ? 'hover:bg-emerald-900/20' : 'hover:bg-emerald-50'}`}
                        aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                    >
                        {isDark ? <Sun size={24} aria-hidden="true" /> : <Moon size={24} aria-hidden="true" />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export const Footer = ({ isDark }) => (
    <footer className={`flex flex-col sm:flex-row justify-between items-center py-8 border-t ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`} role="contentinfo">
        <div className="text-center sm:text-left mb-4 sm:mb-0 font-pixel opacity-90">
            <p className="text-lg">© 2025 Luis Alejandro Zeballos Quiroz.</p>
            <p className="text-base opacity-70">Todos los derechos reservados.</p>
        </div>
        <div className="flex space-x-6">
            <a href="#" className={`transition-transform hover:scale-110 hover:text-emerald-500`} aria-label="GitHub"><Github size={20} aria-hidden="true" /></a>
            <a href="#" className={`transition-transform hover:scale-110 hover:text-emerald-500`} aria-label="LinkedIn"><Linkedin size={20} aria-hidden="true" /></a>
            <a href="#" className={`transition-transform hover:scale-110 hover:text-emerald-500`} aria-label="Email"><Mail size={20} aria-hidden="true" /></a>
        </div>
    </footer>
);