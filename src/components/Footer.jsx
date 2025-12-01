import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
    <footer className="footer-premium" role="contentinfo">
        <div className="footer-content">
            <div className="footer-left">
                <p className="copyright">© 2025 Luis Alejandro Zeballos Quiroz</p>
                <p className="rights">Todos los derechos reservados.</p>
            </div>
            <div className="footer-right">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/LuisFuturo01" className="footer-social-link" aria-label="GitHub">
                    <Github size={20} aria-hidden="true" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/luis-alejandro-zeballos-quiroz-324bab2b9/" className="footer-social-link" aria-label="LinkedIn">
                    <Linkedin size={20} aria-hidden="true" />
                </a>
                <a href="mailto:luis.futuro.01@gmail.com" className="footer-social-link" aria-label="Enviar email">
                    <Mail size={20} aria-hidden="true" />
                </a>
            </div>
        </div>
        <div className="footer-bottom-line"></div>
    </footer>
);

export default Footer;