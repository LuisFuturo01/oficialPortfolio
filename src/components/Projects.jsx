import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { CATEGORIES, projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Reveal, SectionHeader } from './UI';

/** Estado compartido del modal sincronizado con ?p=slug (enlace directo a un proyecto). */
const useProjectModal = () => {
  const [params, setParams] = useSearchParams();
  const slug = params.get('p');
  const open = (p) => setParams((prev) => { const n = new URLSearchParams(prev); n.set('p', p.slug); return n; }, { replace: false });
  const close = () => setParams((prev) => { const n = new URLSearchParams(prev); n.delete('p'); return n; }, { replace: false });
  return [projects.find((p) => p.slug === slug), open, close];
};

export const FeaturedProjects = ({ content, lang }) => {
  const { ui } = content;
  const [active, open, close] = useProjectModal();
  const featured = projects.filter((p) => p.featured);
  return (
    <section className="section" id="featured">
      <div className="container">
        <SectionHeader eyebrow={ui.featured} title={lang === 'es' ? 'Trabajo que habla por sí solo' : 'Work that speaks for itself'} sub={ui.featured_sub} />
        <div className="projects-grid projects-grid--featured">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 70}>
              <ProjectCard project={p} lang={lang} ui={ui} onOpen={open} large={i < 2} />
            </Reveal>
          ))}
        </div>
        <div className="center mt-xl">
          <Link to="/projects" className="btn btn--ghost btn--lg">{ui.see_all} <ArrowRight size={18} /></Link>
        </div>
      </div>
      {active && <ProjectModal project={active} lang={lang} ui={ui} onClose={close} />}
    </section>
  );
};

const ProjectsPage = ({ content, lang }) => {
  const { ui } = content;
  const [cat, setCat] = useState('all');
  const [q, setQ] = useState('');
  const [active, open, close] = useProjectModal();

  const counts = useMemo(() => {
    const c = { all: projects.length };
    projects.forEach((p) => { c[p.category] = (c[p.category] || 0) + 1; });
    return c;
  }, []);

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return projects.filter((p) => (cat === 'all' || p.category === cat) && (!term
      || p.name[lang].toLowerCase().includes(term)
      || p.tagline[lang].toLowerCase().includes(term)
      || p.stack.some((s) => s.toLowerCase().includes(term))));
  }, [cat, q, lang]);

  return (
    <section className="section section--page" id="projects">
      <div className="container">
        <SectionHeader eyebrow={content.sections.projects.label} title={ui.projects_title} sub={ui.projects_sub} />

        <Reveal className="filters">
          <div className="filters__chips" role="tablist">
            {CATEGORIES.map((c) => (
              <button key={c.id} role="tab" aria-selected={cat === c.id} className={`filter ${cat === c.id ? 'is-active' : ''}`} onClick={() => setCat(c.id)}>
                {c[lang]} <span>{counts[c.id] || 0}</span>
              </button>
            ))}
          </div>
          <label className="search">
            <Search size={16} />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={ui.search} aria-label={ui.search} />
          </label>
        </Reveal>

        {list.length ? (
          <div className="projects-grid">
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 60}>
                <ProjectCard project={p} lang={lang} ui={ui} onOpen={open} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="empty">{ui.no_results}</p>
        )}
      </div>
      {active && <ProjectModal project={active} lang={lang} ui={ui} onClose={close} />}
    </section>
  );
};

export default ProjectsPage;
