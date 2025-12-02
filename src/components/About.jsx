import React from 'react';
import { Eye } from 'lucide-react';
import { RevealOnScroll, SpotlightCard } from './UI';

const AboutMe = ({ content, isDark }) => (
    <section id="about" className="section-container" aria-labelledby="about-title">
        <RevealOnScroll>
            <h2 id="about-title" className="section-title">
                <span className="title-number" aria-hidden="true">01.</span> {content.about.title}
                <span className="title-line" aria-hidden="true"></span>
            </h2>
            <div className="about-grid">
                <div className="about-text">
                    <p>{content.about.p1}</p>
                    <p>{content.about.p2}</p>
                    <div className="about-actions">
                        <a 
                            href={content.personal_data.links.cv} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-highlight large"
                            aria-label={content.ui.view_cv_online}
                        >
                            <Eye size={22} className="icon-mr" aria-hidden="true" /> {content.ui.view_cv_online}
                        </a>
                    </div>
                </div>
                <div className="stats-grid">
                    {content.about.stats.map((stat, i) => (
                        <SpotlightCard key={i} isDark={isDark} className="stat-card">
                            <span className="stat-label">{stat.label}</span>
                            <span className="stat-value">{stat.value}</span>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </RevealOnScroll>
    </section>
);

export default AboutMe;