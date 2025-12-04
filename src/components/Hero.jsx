import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { Typewriter } from './UI';
import profileimg from '../../public/profile.jpeg';

const HeroSection = ({ content }) => (
    <section className="hero-section" aria-label="Introducción">
        <div className="hero-grid">
            <div className="hero-text">
                <div className="status-badge" role="status">
                    <span className="status-dot animate-ping" aria-hidden="true"></span>
                    <span className="status-dot static" aria-hidden="true"></span>
                    {content.ui.status}
                </div>
                <h1 className="hero-title">
                    {content.personal_data.name.split(" ")[0]}<br/>
                    <span className="accent-text"><Typewriter words={content.hero.dynamic_words} /></span>
                </h1>
                <h2 className="hero-subtitle">{content.hero.title}</h2>
                <p className="hero-desc">{content.hero.intro_desc}</p>
                <div className="hero-actions">
                    <a 
                        href={content.personal_data.links.cv} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-highlight"
                        aria-label={content.ui.view_cv_btn}
                    >
                        <FileText size={20} className="icon-mr" aria-hidden="true" /> {content.ui.view_cv_btn}
                    </a>
                    <Link to="/contact" className="btn-primary">{content.ui.contact_btn}</Link>
                </div>
            </div>
            <div className="hero-image-container">
                <div className="hero-image-wrapper">
                    <img src={profileimg} alt={`Foto de ${content.personal_data.name}`} className="hero-img" />
                    <div className="corner-deco bottom-right" aria-hidden="true"></div>
                    <div className="corner-deco top-left" aria-hidden="true"></div>
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;