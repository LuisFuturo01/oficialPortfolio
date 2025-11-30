import React, { useState } from 'react';
import { ArrowRight, FileText, Download, Code, Cpu, Server, HardHat, GitBranch, Database, Cloud, Github, ExternalLink, MessageCircle, Instagram } from 'lucide-react';
import { Typewriter, RevealOnScroll, SpotlightCard } from './UI';

export const HeroSection = ({ content, colors }) => (
    <section className="min-h-[85vh] flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
        <div className="w-full flex flex-col-reverse md:grid md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
            <div className="md:col-span-7 text-center md:text-left space-y-6">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-lg font-medium border ${colors.accent_border} bg-opacity-10 text-emerald-600`}>
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Disponible para trabajar
                </div>
                <h1 className="text-5xl sm:text-7xl font-bold font-pixel leading-tight tracking-tight">
                    Luis Alejandro<br/>
                    <span className={colors.accent}>
                        <Typewriter words={content.hero.dynamic_words} />
                    </span>
                </h1>
                <h2 className={`text-2xl sm:text-3xl font-pixel opacity-90 ${colors.accent}`}>
                    {content.hero.title}
                </h2>
                <p className="text-xl opacity-80 max-w-2xl mx-auto md:mx-0 leading-relaxed font-pixel">
                    {content.hero.intro_desc}
                </p>
                <div className="flex gap-4 justify-center md:justify-start pt-4">
                    <a href="#contact" className={`px-8 py-3 rounded font-bold font-pixel tracking-wide transition-all transform hover:-translate-y-1 ${colors.accent_bg} text-white shadow-lg shadow-emerald-500/20`}>
                        CONTACTAR
                    </a>
                    <a href="#projects" className={`px-8 py-3 rounded font-bold font-pixel tracking-wide border-2 transition-all transform hover:-translate-y-1 ${colors.accent_border} ${colors.accent} hover:bg-emerald-500/5`}>
                        <ArrowRight size={20} className="inline-block mr-2" /> PROYECTOS
                    </a>
                </div>
            </div>
            <div className="md:col-span-5 flex justify-center items-center w-full">
                <div className={`relative w-64 md:w-80 aspect-[3/4] p-2 rounded-xl border-2 transition-transform duration-500 hover:scale-105 ${colors.accent_border} shadow-2xl`}>
                    <img 
                        src="https://placehold.co/400x533/10B981/020617?text=Luis+Zeballos" 
                        alt="Luis Zeballos" 
                        className="w-full h-full object-cover rounded-lg filter grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className={`absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 ${colors.accent_border} opacity-50`}></div>
                    <div className={`absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 ${colors.accent_border} opacity-50`}></div>
                </div>
            </div>
        </div>
    </section>
);

// --- ABOUT SECTION ---
export const AboutMe = ({ content, colors }) => (
    <section id="about" className="py-20">
        <RevealOnScroll>
            <h2 className={`text-4xl font-bold mb-12 font-pixel ${colors.accent} flex items-center`}>
                <span className="text-3xl opacity-50 mr-4">01.</span> {content.about.title}
                <span className={`h-px flex-1 ml-6 ${colors.accent_bg} opacity-20`}></span>
            </h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6 text-xl leading-relaxed opacity-90 font-pixel">
                    <p>{content.about.p1}</p>
                    <p>{content.about.p2}</p>
                    <div className="flex gap-4 mt-8">
                        <button onClick={() => alert('Simulando Previsualización...')} className={`group flex items-center gap-2 px-6 py-3 rounded-lg border hover:bg-emerald-500/5 transition-all ${colors.accent_border} ${colors.accent}`}>
                            <FileText size={18} className="group-hover:scale-110 transition-transform"/> Ver PDF
                        </button>
                        <button onClick={() => alert('Descargando...')} className={`group flex items-center gap-2 px-6 py-3 rounded-lg border hover:bg-emerald-500/5 transition-all ${colors.accent_border} ${colors.accent}`}>
                            <Download size={18} className="group-hover:scale-110 transition-transform"/> Descargar CV
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    {content.about.stats.map((stat, i) => (
                        <SpotlightCard key={i} isDark={colors.bg.includes('slate-950')} className={`${colors.card_bg} border-slate-700/50`}>
                            <div className="p-6 flex justify-between items-center">
                                <span className="opacity-70 font-medium font-pixel text-lg">{stat.label}</span>
                                <span className={`text-4xl font-bold font-pixel ${colors.accent}`}>{stat.value}</span>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </RevealOnScroll>
    </section>
);

// --- SKILLS SECTION ---
export const SkillsGraph = ({ content, colors, isDark }) => {
    const [activeStack, setActiveStack] = useState(null);
    const icons = { Code, HardHat, Server, Database, GitBranch, Cpu, Cloud };

    return (
        <section id="skills" className="py-20">
            <RevealOnScroll>
                <h2 className={`text-4xl font-bold mb-12 font-pixel ${colors.accent} flex items-center`}>
                    <span className="text-3xl opacity-50 mr-4">02.</span> Stack Tecnológico
                    <span className={`h-px flex-1 ml-6 ${colors.accent_bg} opacity-20`}></span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {content.skills.map((grp) => {
                        const IconComp = icons[grp.icon] || Code;
                        return (
                            <SpotlightCard 
                                key={grp.id} 
                                isDark={isDark}
                                className={`${colors.card_bg} ${activeStack === grp.id ? colors.accent_border : (isDark ? 'border-slate-800' : 'border-slate-200')}`}
                            >
                                <div 
                                    className="p-6 h-full flex flex-col"
                                    onMouseEnter={() => setActiveStack(grp.id)}
                                    onMouseLeave={() => setActiveStack(null)}
                                >
                                    <div className={`flex items-center gap-3 mb-6 ${colors.accent}`}>
                                        <div className={`p-2 rounded-lg bg-emerald-500/10`}>
                                            <IconComp size={24} />
                                        </div>
                                        <h3 className="text-2xl font-bold font-pixel">{grp.name}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {grp.stack.map(tech => (
                                            <span 
                                                key={tech} 
                                                className={`text-lg px-3 py-1.5 rounded-md transition-all duration-300 font-pixel ${activeStack === grp.id ? `${colors.accent_bg} text-white shadow-md` : (isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700')}`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </SpotlightCard>
                        );
                    })}
                </div>
            </RevealOnScroll>
        </section>
    );
};

// --- PROJECTS SECTION ---
export const ProjectsConsole = ({ content, colors, isDark }) => {
    return (
        <section id="projects" className="py-20">
            <RevealOnScroll>
                <h2 className={`text-4xl font-bold mb-12 font-pixel ${colors.accent} flex items-center`}>
                    <span className="text-3xl opacity-50 mr-4">03.</span> Proyectos
                    <span className={`h-px flex-1 ml-6 ${colors.accent_bg} opacity-20`}></span>
                </h2>
                <div className="grid gap-8">
                    {content.projects.map((proj, idx) => (
                        <SpotlightCard key={proj.id} isDark={isDark} className={`${colors.card_bg} border-transparent hover:border-emerald-500/30`}>
                            <div className="p-8 grid md:grid-cols-12 gap-8 items-center group">
                                <div className={`md:col-span-7 ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2 md:text-right'}`}>
                                    <p className={`font-pixel text-lg mb-2 ${colors.accent}`}>Proyecto Destacado</p>
                                    <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'} group-hover:${colors.accent} transition-colors font-pixel`}>
                                        {proj.name}
                                    </h3>
                                    <div className={`p-6 rounded-lg text-lg leading-relaxed mb-6 shadow-lg relative z-10 font-pixel ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-white text-slate-700 border border-slate-100'}`}>
                                        {proj.desc}
                                    </div>
                                    <div className={`flex flex-wrap gap-4 font-pixel text-md mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'} ${idx % 2 !== 0 && 'md:justify-end'}`}>
                                        {proj.stack.split(', ').map((tech, i) => (
                                            <span key={i}>{tech}</span>
                                        ))}
                                    </div>
                                    <div className={`flex gap-4 ${idx % 2 !== 0 && 'md:justify-end'}`}>
                                        <Github className="w-6 h-6 hover:text-emerald-500 cursor-pointer transition-colors" />
                                        <ExternalLink className="w-6 h-6 hover:text-emerald-500 cursor-pointer transition-colors" />
                                    </div>
                                </div>
                                <div className={`md:col-span-5 ${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'} relative`}>
                                    <div className={`rounded-lg overflow-hidden border-2 ${isDark ? 'border-slate-800' : 'border-slate-200'} group-hover:border-emerald-500/50 transition-all duration-500 grayscale group-hover:grayscale-0`}>
                                        <div className={`w-full aspect-video ${isDark ? 'bg-slate-800' : 'bg-slate-200'} flex items-center justify-center`}>
                                            <Code size={48} className="opacity-20" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </RevealOnScroll>
        </section>
    );
};

// --- CONTACT SECTION ---
export const ContactSection = ({ content, colors }) => (
    <section id="contact" className="py-20 mb-20">
        <RevealOnScroll>
            <div className={`p-10 md:p-16 rounded-2xl text-center border ${colors.accent_border} ${colors.card_bg} relative overflow-hidden`}>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50`}></div>
                <h2 className={`text-4xl font-bold mb-6 font-pixel ${colors.accent}`}>{content.contact.title}</h2>
                <p className="mb-10 text-xl opacity-80 max-w-xl mx-auto font-pixel">{content.contact.subtitle}</p>
                <div className="flex justify-center gap-6 mb-10">
                    <a href={content.contact.social.whatsapp} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 font-pixel text-lg font-bold transition-all hover:scale-105 ${colors.accent_border} text-emerald-500 hover:bg-emerald-500/10`}>
                        <MessageCircle size={24} /> WhatsApp
                    </a>
                    <a href={content.contact.social.instagram} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 font-pixel text-lg font-bold transition-all hover:scale-105 ${colors.accent_border} text-emerald-500 hover:bg-emerald-500/10`}>
                        <Instagram size={24} /> Instagram
                    </a>
                </div>
                <form className="max-w-md mx-auto space-y-4 relative z-10 font-pixel">
                    <div className="group relative">
                        <input type="text" placeholder="Tu Nombre" className={`w-full p-4 rounded-lg bg-transparent border-2 ${colors.accent_border} text-inherit focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`} />
                    </div>
                    <div className="group relative">
                        <input type="email" placeholder="Tu Email" className={`w-full p-4 rounded-lg bg-transparent border-2 ${colors.accent_border} text-inherit focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`} />
                    </div>
                    <div className="group relative">
                        <textarea rows="4" placeholder="Tu Mensaje" className={`w-full p-4 rounded-lg bg-transparent border-2 ${colors.accent_border} text-inherit focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all`}></textarea>
                    </div>
                    <button type="submit" className={`w-full py-4 rounded-lg font-bold font-pixel text-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] ${colors.accent_bg} text-white shadow-lg hover:shadow-emerald-500/25`}>
                        {content.contact.cta}
                    </button>
                </form>
            </div>
        </RevealOnScroll>
    </section>
);