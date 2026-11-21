import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X, MessageCircle } from 'lucide-react';

const Navbar = ({ content, isDark, setIsDark, lang, setLang }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = Object.entries(content.sections);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar__inner" aria-label="Principal">
        <Link to="/" className="brand" aria-label="Inicio">
          Luis Zeballos
        </Link>

        <div className="navbar__links">
          {links.map(([key, s]) => (
            <NavLink key={key} to={s.path} end={s.path === '/'} className={({ isActive }) => `navlink ${isActive ? 'is-active' : ''}`}>
              {s.label}
            </NavLink>
          ))}
        </div>

        <div className="navbar__actions">
          <button className="icon-btn lang-btn" onClick={() => setLang(lang === 'es' ? 'en' : 'es')} aria-label="Cambiar idioma / Change language">
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button className="icon-btn" onClick={() => setIsDark(!isDark)} aria-label={isDark ? 'Modo claro' : 'Modo oscuro'}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="btn btn--primary btn--sm navbar__cta" href={content.personal_data.links.whatsapp} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} /> {content.ui.hire}
          </a>
          <button className="icon-btn navbar__toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Menú">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`}>
        {links.map(([key, s]) => (
          <NavLink key={key} to={s.path} end={s.path === '/'} className={({ isActive }) => `mobile-menu__link ${isActive ? 'is-active' : ''}`}>
            {s.label}
          </NavLink>
        ))}
        <a className="btn btn--primary" href={content.personal_data.links.whatsapp} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} /> {content.ui.hire}
        </a>
      </div>
    </header>
  );
};

export default Navbar;
