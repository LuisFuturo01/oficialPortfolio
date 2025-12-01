import React from 'react';
import { Code, PenTool, Server, Database, GitBranch, Cpu, Cloud } from 'lucide-react';
import { RevealOnScroll, SpotlightCard } from './UI';

const SkillsGraph = ({ content, isDark }) => {
    const icons = { Code, PenTool, Server, Database, GitBranch, Cpu, Cloud };
    return (
        <section id="skills" className="section-container">
            <RevealOnScroll>
                <h2 className="section-title">
                    <span className="title-number">02.</span> {content.sections.skills.label.replace('_', ' ')}
                    <span className="title-line"></span>
                </h2>
                <div className="skills-grid">
                    {content.skills.map((grp) => {
                        const IconComp = icons[grp.icon] || Code;
                        return (
                            <SpotlightCard key={grp.id} isDark={isDark} className="skill-card">
                                <div className="skill-header">
                                    <div className="skill-icon-wrapper"><IconComp size={24} /></div>
                                    <h3>{grp.name}</h3>
                                </div>
                                <div className="skill-tags">
                                    {grp.stack.map(tech => <span key={tech} className="skill-tag">{tech}</span>)}
                                </div>
                            </SpotlightCard>
                        );
                    })}
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default SkillsGraph;