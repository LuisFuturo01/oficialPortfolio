import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ content }) => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer-premium" role="contentinfo">
            <div className="footer-content">
                <div className="footer-left">
                    <p className="copyright">© {currentYear} {content.personal_data.name}</p>
                    <p className="rights">{content.footer.rights}</p>
                </div>
                <div className="footer-right">
                    <a target="_blank" rel="noopener noreferrer" href={content.personal_data.links.github} className="footer-social-link" aria-label="GitHub">
                        <Github size={20} aria-hidden="true" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={content.personal_data.links.linkedin} className="footer-social-link" aria-label="LinkedIn">
                        <Linkedin size={20} aria-hidden="true" />
                    </a>
                    <a href={content.personal_data.links.email} className="footer-social-link" aria-label="Enviar email">
                        <Mail size={20} aria-hidden="true" />
                    </a>
                </div>
            </div>
            <div className="footer-bottom-line"></div>
        </footer>
    );
};

export default Footer;