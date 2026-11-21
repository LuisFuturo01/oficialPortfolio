import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { skillGroups, spokenLanguages } from '../data/skills';
import { projects } from '../data/projects';
import { Icon, Reveal, SectionHeader } from './UI';

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9#+]/g, '');

/** Proyectos del portafolio que usan una tecnología (coincidencia por alias). */
const projectsFor = (skillName, lang) => {
  const aliases = skillName.split(/[/,()]| y | & /).map((a) => norm(a)).filter((a) => a.length > 1);
  return projects
    .filter((p) => p.stack.some((s) => {
      const n = norm(s);
      // Coincidencia por prefijo (p. ej. "Gemini API" ↔ "Gemini"), evitando Java ↔ JavaScript
      const isJavaVsJs = (x, y) => x === 'java' && y.startsWith('javascript');
      return aliases.some((a) => n === a
        || ((n.startsWith(a) || a.startsWith(n)) && !isJavaVsJs(a, n) && !isJavaVsJs(n, a)));
    }))
    .map((p) => p.name[lang].split(' — ')[0]);
};

const Level = ({ value }) => (
  <span className="level" aria-label={`${value}/5`}>
    {[1, 2, 3, 4, 5].map((i) => <i key={i} className={i <= value ? 'on' : ''} />)}
  </span>
);

const SkillCard = ({ skill, lang, ui }) => {
  const used = useMemo(() => projectsFor(skill.name, lang), [skill.name, lang]);
  return (
    <article className="skill" style={{ '--skill': skill.color }}>
      <header className="skill__head">
        <span className="skill__dot" aria-hidden="true" />
        <h4>{skill.name}</h4>
        <Level value={skill.level} />
      </header>
      <p className="skill__what"><strong>{ui.what}:</strong> {skill.what[lang]}</p>
      <p className="skill__use"><strong>{ui.use}:</strong> {skill.use[lang]}</p>
      {used.length > 0 && (
        <p className="skill__used"><span>{ui.used_in}:</span> {used.slice(0, 3).join(' · ')}{used.length > 3 ? ` +${used.length - 3}` : ''}</p>
      )}
    </article>
  );
};

const SkillsSection = ({ content, lang, compact = false }) => {
  const { ui } = content;
  const [tab, setTab] = useState('all');
  const total = skillGroups.reduce((a, g) => a + g.items.length, 0);
  const groups = tab === 'all' ? skillGroups : skillGroups.filter((g) => g.id === tab);
  const visible = compact ? skillGroups.filter((g) => ['vibe', 'ai'].includes(g.id)) : groups;

  return (
    <section className={`section ${compact ? '' : 'section--page'}`} id="skills">
      <div className="container">
        <SectionHeader eyebrow={`${total}+ ${lang === 'es' ? 'tecnologías' : 'technologies'}`} title={ui.skills_title} sub={ui.skills_sub} />

        {!compact && (
          <Reveal className="cat-carousel" aria-label={lang === 'es' ? 'Categorías' : 'Categories'}>
            <div className="cat-carousel__track">
              {[0, 1].map((copy) => (
                <div className="cat-carousel__group" key={copy} aria-hidden={copy === 1}>
                  <button tabIndex={copy ? -1 : 0} className={`filter ${tab === 'all' ? 'is-active' : ''}`} onClick={() => setTab('all')}>
                    <Icon name="Sparkles" size={14} /> {lang === 'es' ? 'Todo' : 'All'} <span>{total}</span>
                  </button>
                  {skillGroups.map((g) => (
                    <button key={g.id} tabIndex={copy ? -1 : 0} className={`filter ${tab === g.id ? 'is-active' : ''}`} onClick={() => setTab(g.id)}>
                      <Icon name={g.icon} size={14} /> {g.title[lang]} <span>{g.items.length}</span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        )}

        {visible.map((g) => (
          <div key={g.id} className="skill-group">
            <Reveal className="skill-group__title">
              <span className="skill-group__icon"><Icon name={g.icon} size={18} /></span>
              <h3>{g.title[lang]}</h3>
              <span className="skill-group__count">{g.items.length}</span>
            </Reveal>
            <div className="skills-grid">
              {g.items.map((s, i) => (
                <Reveal key={s.name} delay={(i % 3) * 50}><SkillCard skill={s} lang={lang} ui={ui} /></Reveal>
              ))}
            </div>
          </div>
        ))}

        {compact && (
          <div className="center">
            <Link to="/skills" className="btn btn--ghost btn--lg">{ui.see_stack} <ArrowRight size={18} /></Link>
          </div>
        )}

        {!compact && (
          <div className="skill-group">
            <Reveal className="skill-group__title">
              <span className="skill-group__icon"><Icon name="Languages" size={18} /></span>
              <h3>{ui.languages}</h3>
            </Reveal>
            <div className="langs">
              {spokenLanguages.map((l) => (
                <Reveal key={l.name.es} className="lang">
                  <div className="lang__row"><strong>{l.name[lang]}</strong><span>{l.level[lang]}</span></div>
                  <div className="bar"><span style={{ width: `${l.pct}%` }} /></div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
