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
                                <p className="project-featured">{content.ui.project_featured}</p>
                                <h3 className="project-title">{proj.name}</h3>
                                <div className="project-desc">{proj.desc}</div>
                                <div className="project-stack">
                                    {proj.stack.split ? proj.stack.split(', ').map((tech, i) => <span key={i}>{tech}</span>) : <span>{proj.stack}</span>}
                                </div>
                                
                                <div className="project-links">
                                    {proj.links?.github && (
                                        <a 
                                            href={proj.links.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="icon-link"
                                            aria-label={`${content.ui.project_github_aria} - ${proj.name}`}
                                            title={content.ui.project_github_aria}
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
                                            aria-label={`${content.ui.project_demo_aria} - ${proj.name}`}
                                            title={content.ui.project_demo_aria}
                                        >
                                            <ExternalLink size={24} aria-hidden="true" />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="project-image">
                                <div className="img-placeholder" role="img" aria-label={`${content.ui.project_img_aria} ${proj.name}`}>
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