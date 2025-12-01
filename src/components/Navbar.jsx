import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, User, Cpu, Code, Mail, Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ content, isDark, setIsDark, setLang }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const icons = { Zap, User, Cpu, Code, Mail };
    const location = useLocation();

    useEffect(() => { setIsMenuOpen(false); }, [location]);

    return (
        <nav className={`navbar ${isDark ? 'dark' : 'light'}`}>
            <div className="nav-content">
                <Link to="/" className="nav-logo">LZ_DEV</Link>
                
                <div className="nav-links">
                    {Object.entries(content.sections).map(([key, section]) => {
                        const IconComp = icons[section.icon] || Zap;
                        const isActive = location.pathname === section.path;
                        return (
                            <Link key={key} to={section.path} className={`nav-item ${isActive ? 'active' : ''}`}>
                                <IconComp size={18} /> <span>{section.label.replace('_', ' ')}</span>
                            </Link>
                        );
                    })}
                </div>

                <div className="nav-actions">
                    <button onClick={() => setLang(l => l === 'es' ? 'en' : 'es')} className="nav-btn">ES/EN</button>
                    <button onClick={() => setIsDark(!isDark)} className="nav-btn toggle-theme">
                        {isDark ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                    <button className="nav-btn mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''} ${isDark ? 'dark' : 'light'}`}>
                {Object.entries(content.sections).map(([key, section]) => {
                    const IconComp = icons[section.icon] || Zap;
                    const isActive = location.pathname === section.path;
                    return (
                        <Link key={key} to={section.path} className={`mobile-nav-item ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
                            <IconComp size={24} /> <span>{section.label.replace('_', ' ')}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;