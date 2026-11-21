import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';

const Footer = ({ content }) => {
  const { personal_data: me, footer, sections } = content;
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="brand">Luis Zeballos</Link>
          <p>{footer.made}</p>
        </div>
        <nav className="footer__nav" aria-label="Footer">
          {Object.entries(sections).map(([k, s]) => <Link key={k} to={s.path}>{s.label}</Link>)}
        </nav>
        <div className="footer__social">
          <a href={me.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href={me.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href={me.links.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a>
          <a href={me.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
          <a href={me.links.email} aria-label="Email"><Mail size={18} /></a>
        </div>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} {me.name}. {footer.rights}</p>
    </footer>
  );
};

export default Footer;
