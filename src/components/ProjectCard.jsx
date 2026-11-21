import React from 'react';
import { ArrowUpRight, Github, Images, Lock, Monitor, Smartphone, TabletSmartphone, Users } from 'lucide-react';
import { Tilt } from './Effects';

const ProjectCard = ({ project, lang, ui, onOpen, large = false }) => {
  const android = project.shots.android || [];
  const preferred = project.primary && (project.shots[project.primary] || [])[0];
  const cover = preferred || project.shots.desktop[0] || android[0] || project.shots.mobile[0];
  const mobileCover = project.shots.mobile[0];
  const count = project.shots.desktop.length + project.shots.mobile.length + android.length;
  const portrait = project.primary === 'mobile' || (!project.shots.desktop.length && !android.length);

  return (
    <Tilt className="project-tilt" max={6}>
    <article className={`project-card ${large ? 'project-card--large' : ''}`}>
      <button className="project-card__media" onClick={() => onOpen(project)} aria-label={`${ui.details}: ${project.name[lang]}`}>
        {cover ? (
          <>
            <img src={cover.src} alt={cover.caption[lang]} loading="lazy" className={portrait ? 'is-portrait' : ''} />
            {!portrait && mobileCover && (
              <span className="project-card__phone" aria-hidden="true"><img src={mobileCover.src} alt="" loading="lazy" /></span>
            )}
          </>
        ) : (
          <span className="project-card__placeholder">{project.name[lang]}</span>
        )}
        <span className="project-card__overlay"><ArrowUpRight size={18} /> {ui.details}</span>
      </button>

      <div className="project-card__body">
        <div className="project-card__meta">
          {count > 0 && <span><Images size={13} /> {count} {ui.screens}</span>}
          {project.shots.desktop.length > 0 && <Monitor size={13} aria-label={ui.desktop} />}
          {project.shots.mobile.length > 0 && <Smartphone size={13} aria-label={ui.mobile} />}
          {android.length > 0 && <TabletSmartphone size={13} aria-label={ui.android} />}
          {project.team && <span><Users size={13} /> {ui.team}</span>}
        </div>
        <h3 className="project-card__title">
          <button onClick={() => onOpen(project)}>{project.name[lang]}</button>
        </h3>
        <p className="project-card__tagline">{project.tagline[lang]}</p>
        <div className="chips chips--sm">
          {project.stack.slice(0, large ? 6 : 4).map((t) => <span key={t} className="chip">{t}</span>)}
          {project.stack.length > (large ? 6 : 4) && <span className="chip chip--muted">+{project.stack.length - (large ? 6 : 4)}</span>}
        </div>
        <div className="project-card__links">
          {project.links.github ? (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer"><Github size={15} /> {ui.code}</a>
          ) : (
            <span className="muted"><Lock size={14} /> {ui.private}</span>
          )}
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer"><ArrowUpRight size={15} /> {ui.demo}</a>
          )}
        </div>
      </div>
    </article>
    </Tilt>
  );
};

export default ProjectCard;
