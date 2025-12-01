import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, User, Cpu, Code, Mail, Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ content, isDark, setIsDark, setLang }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const icons = { Zap, User, Cpu, Code, Mail };
    const location = useLocation();

    useEffect(() => { setIsMenuOpen(false); }, [location]);

    return (
        <nav className={`navbar ${isDark ? 'dark' : 'light'}`} role="navigation" aria-label="Main Navigation">
            <div className="nav-content">
                <Link to="/" className="nav-logo" aria-label="Ir al inicio LZ_DEV">LZ_DEV</Link>
                
                <div className="nav-links">
                    {Object.entries(content.sections).map(([key, section]) => {
                        const IconComp = icons[section.icon] || Zap;
                        const isActive = location.pathname === section.path;
                        return (
                            <Link 
                                key={key} 
                                to={section.path} 
                                className={`nav-item ${isActive ? 'active' : ''}`}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                <IconComp size={18} aria-hidden="true" /> 
                                <span>{section.label.replace('_', ' ')}</span>
                            </Link>
                        );
                    })}
                </div>

                <div className="nav-actions">
                    <button 
                        onClick={() => setLang(l => l === 'es' ? 'en' : 'es')} 
                        className="nav-btn"
                        aria-label="Cambiar idioma / Change language"
                    >
                        ES/EN
                    </button>
                    <button 
                        onClick={() => setIsDark(!isDark)} 
                        className="nav-btn toggle-theme"
                        aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                    >
                        {isDark ? <Sun size={24} aria-hidden="true" /> : <Moon size={24} aria-hidden="true" />}
                    </button>
                    <button 
                        className="nav-btn mobile-toggle" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        aria-label="Menú principal"
                    >
                        {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                    </button>
                </div>
            </div>

            <div 
                id="mobile-menu"
                className={`mobile-menu ${isMenuOpen ? 'open' : ''} ${isDark ? 'dark' : 'light'}`}
            >
                {Object.entries(content.sections).map(([key, section]) => {
                    const IconComp = icons[section.icon] || Zap;
                    const isActive = location.pathname === section.path;
                    return (
                        <Link 
                            key={key} 
                            to={section.path} 
                            className={`mobile-nav-item ${isActive ? 'active' : ''}`} 
                            onClick={() => setIsMenuOpen(false)}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            <IconComp size={24} aria-hidden="true" /> 
                            <span>{section.label.replace('_', ' ')}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;