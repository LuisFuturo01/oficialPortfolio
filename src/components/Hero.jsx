import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, FileText, Github, Linkedin, MapPin, MessageCircle } from 'lucide-react';
import { Marquee, Reveal, Typewriter } from './UI';
import { Magnetic, ParticleField, Tilt } from './Effects';
import { projects } from '../data/projects';
import profileimg from '../assets/images/profile.jpeg';

const TECH = ['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'Python', 'FastAPI', 'TensorFlow', 'OpenCV', 'Flutter', 'Kotlin', 'Three.js', 'MySQL', 'PostgreSQL', 'Docker', 'Claude Code', 'Astro', 'Tailwind'];

const HeroSection = ({ content }) => {
  const { hero, ui, personal_data: me } = content;
  const built = projects.filter((p) => p.shots.desktop.length || p.shots.mobile.length || p.shots.android?.length);

  return (
    <section className="hero" aria-label="Introducción">
      <ParticleField />
      <div className="container hero__grid">
        <div className="hero__text">
          <Reveal>
            <span className="status-pill">
              <span className="status-pill__dot" /> {ui.status}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <p className="hero__greeting">{hero.greeting}</p>
            <h1 className="hero__title">
              {hero.title_a} <span className="gradient-text gradient-text--animated">{hero.title_b}</span>
            </h1>
            <p className="hero__dynamic">
              <span className="hero__dynamic-label">→</span> <Typewriter words={hero.dynamic_words} />
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="hero__desc">{hero.desc}</p>
            <div className="hero__actions">
              <Magnetic>
                <Link to="/projects" className="btn btn--primary btn--lg">
                  {ui.see_projects} <ArrowRight size={18} />
                </Link>
              </Magnetic>
              <Magnetic>
                <a href={me.links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--lg">
                  <MessageCircle size={18} /> {ui.hire}
                </a>
              </Magnetic>
            </div>
            <div className="hero__meta">
              <span><MapPin size={15} /> {me.location}</span>
              <a href={me.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={16} /> GitHub</a>
              <a href={me.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={16} /> LinkedIn</a>
              <a href={me.links.cv} target="_blank" rel="noopener noreferrer"><FileText size={16} /> {ui.view_cv}</a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="hero__visual">
          <Tilt className="hero__tilt" max={14}>
            <div className="hero__orbit" aria-hidden="true">
              <span /><span /><span />
            </div>
            <div className="hero__photo">
              <img src={profileimg} alt={me.name} width="420" height="420" />
            </div>
          </Tilt>
        </Reveal>
      </div>

      <div className="container">
        <Reveal delay={240} className="hero__stats">
          {hero.stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value === 'projects' ? `${built.length}+` : s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>

      <a href="#services" className="scroll-hint" aria-label="Scroll"><ChevronDown size={20} /></a>
      <Marquee items={TECH} />
    </section>
  );
};

export default HeroSection;
