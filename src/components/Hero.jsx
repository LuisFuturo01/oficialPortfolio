import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { Typewriter } from './UI';
import profileimg from '../assets/images/profile.jpeg';

const HeroSection = ({ content }) => (
    <section className="hero-section" aria-label="Introducción">
        <div className="hero-grid">
            <div className="hero-text">
                <div className="status-badge" role="status">
                    <span className="status-dot animate-ping" aria-hidden="true"></span>
                    <span className="status-dot static" aria-hidden="true"></span>
                    Disponible para trabajar
                </div>
                <h1 className="hero-title">
                    Luis Alejandro<br/>
                    <span className="accent-text"><Typewriter words={content.hero.dynamic_words} /></span>
                </h1>
                <h2 className="hero-subtitle">{content.hero.title}</h2>
                <p className="hero-desc">{content.hero.intro_desc}</p>
                <div className="hero-actions">
                    <a 
                        href="https://drive.google.com/file/d/1ERtkPq25x1BRZsm-8uydchcKPsXLftXo/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-highlight"
                        aria-label="Ver Curriculum Vitae (Se abre en nueva pestaña)"
                    >
                        <FileText size={20} className="icon-mr" aria-hidden="true" /> VER CV
                    </a>
                    <Link to="/contact" className="btn-primary">CONTACTAR</Link>
                </div>
            </div>
            <div className="hero-image-container">
                <div className="hero-image-wrapper">
                    <img src={profileimg} alt="Foto de perfil de Luis Zeballos" className="hero-img" />
                    <div className="corner-deco bottom-right" aria-hidden="true"></div>
                    <div className="corner-deco top-left" aria-hidden="true"></div>
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;