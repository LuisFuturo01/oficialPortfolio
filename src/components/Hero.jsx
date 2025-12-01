import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { Typewriter } from './UI';
import profileimg from '../assets/images/profile.jpeg';

const HeroSection = ({ content }) => (
    <section className="hero-section">
        <div className="hero-grid">
            <div className="hero-text">
                <div className="status-badge">
                    <span className="status-dot animate-ping"></span>
                    <span className="status-dot static"></span>
                    Disponible para trabajar
                </div>
                <h1 className="hero-title">
                    Luis Alejandro<br/>
                    <span className="accent-text"><Typewriter words={content.hero.dynamic_words} /></span>
                </h1>
                <h2 className="hero-subtitle">{content.hero.title}</h2>
                <p className="hero-desc">{content.hero.intro_desc}</p>
                <div className="hero-actions">
                    <a href="https://drive.google.com/file/d/1i4QaSSfWKybM-HSPRRhoUBAaUrr9BJg2/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-highlight">
                        <FileText size={20} className="icon-mr" /> VER CV
                    </a>
                    <Link to="/contact" className="btn-primary">CONTACTAR</Link>
                </div>
            </div>
            <div className="hero-image-container">
                <div className="hero-image-wrapper">
                    <img src={profileimg} alt="Luis Zeballos" className="hero-img" />
                    <div className="corner-deco bottom-right"></div>
                    <div className="corner-deco top-left"></div>
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;