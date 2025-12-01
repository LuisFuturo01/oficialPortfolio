import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import { RevealOnScroll, SpotlightCard } from './UI';

const ProjectsConsole = ({ content, isDark }) => (
    <section id="projects" className="section-container">
        <RevealOnScroll>
            <h2 className="section-title">
                <span className="title-number" aria-hidden="true">03.</span> {content.sections.projects.label}
                <span className="title-line"></span>
            </h2>
            <div className="projects-grid">
                {content.projects.map((proj, idx) => (
                    <SpotlightCard key={proj.id} isDark={isDark} className="project-card">
                        <div className={`project-layout ${idx % 2 !== 0 ? 'reverse' : ''}`}>
                            <div className="project-info">
                                <p className="project-featured">Proyecto Destacado</p>
                                <h3 className="project-title">{proj.name}</h3>
                                <div className="project-desc">{proj.desc}</div>
                                <div className="project-stack">
                                    {proj.stack.split(', ').map((tech, i) => <span key={i}>{tech}</span>)}
                                </div>
                                
                                <div className="project-links">
                                    {proj.links?.github && (
                                        <a 
                                            href={proj.links.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="icon-link"
                                            aria-label={`Ver código fuente de ${proj.name} en GitHub`}
                                            title="Ver Código en GitHub"
                                        >
                                            <Github size={24} aria-hidden="true" />
                                        </a>
                                    )}

                                    {proj.links?.demo && (
                                        <a 
                                            href={proj.links.demo} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="icon-link"
                                            aria-label={`Ver demostración en vivo de ${proj.name}`}
                                            title="Ver Demo en Vivo"
                                        >
                                            <ExternalLink size={24} aria-hidden="true" />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="project-image">
                                <div className="img-placeholder" role="img" aria-label={`Imagen representativa de ${proj.name}`}>
                                    <Code size={48} />
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </RevealOnScroll>
    </section>
);

export default ProjectsConsole;