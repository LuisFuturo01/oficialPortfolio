import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

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

export default Footer;