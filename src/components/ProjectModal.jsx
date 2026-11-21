import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Lock, Monitor, Smartphone, TabletSmartphone, Users, X, Check } from 'lucide-react';
import { useLockBody } from '../hooks/usePortfolioHooks';

const ProjectModal = ({ project, lang, ui, onClose }) => {
  const views = [
    { id: 'desktop', icon: Monitor, label: ui.desktop },
    { id: 'mobile', icon: Smartphone, label: ui.mobile },
    { id: 'android', icon: TabletSmartphone, label: ui.android },
  ].filter((v) => (project.shots[v.id] || []).length > 0);
  const [view, setView] = useState(views.find((v) => v.id === project.primary)?.id || views[0]?.id || 'desktop');
  const [index, setIndex] = useState(0);
  const touch = useRef(null);
  const dialogRef = useRef(null);
  useLockBody(true);

  const list = project.shots[view] || [];
  const total = list.length;
  const go = useCallback((d) => setIndex((i) => (i + d + total) % total), [total]);

  useEffect(() => setIndex(0), [view]);
  useEffect(() => {
    dialogRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, onClose]);

  const onTouchStart = (e) => { touch.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touch.current === null) return;
    const dx = e.changedTouches[0].clientX - touch.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touch.current = null;
  };

  const current = list[index];

  return createPortal(
    <div className="modal" role="dialog" aria-modal="true" aria-label={project.name[lang]} onClick={onClose}>
      <div className="modal__dialog" ref={dialogRef} tabIndex={-1} onClick={(e) => e.stopPropagation()}>
        <button className="modal__close icon-btn" onClick={onClose} aria-label={ui.close}><X size={20} /></button>

        <div className="modal__gallery">
          {views.length > 1 && (
            <div className="segmented" role="tablist">
              {views.map(({ id, icon, label }) => (
                <button key={id} role="tab" aria-selected={view === id} className={view === id ? 'is-active' : ''} onClick={() => setView(id)}>
                  {React.createElement(icon, { size: 16 })} {label}
                </button>
              ))}
            </div>
          )}

          {total > 0 ? (
            <>
              <div className={`stage stage--${view}`} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                {total > 1 && <button className="stage__nav stage__nav--prev" onClick={() => go(-1)} aria-label={ui.prev}><ChevronLeft size={22} /></button>}
                <div className={{ mobile: 'phone', android: 'phone phone--landscape' }[view] || 'browser'}>
                  {view === 'desktop' && (
                    <div className="browser__bar" aria-hidden="true"><i /><i /><i /><span>{project.slug}.app</span></div>
                  )}
                  <img key={current.src} src={current.src} alt={current.caption[lang]} className="stage__img" />
                </div>
                {total > 1 && <button className="stage__nav stage__nav--next" onClick={() => go(1)} aria-label={ui.next}><ChevronRight size={22} /></button>}
              </div>
              <p className="stage__caption">
                <span>{index + 1} / {total}</span> {current.caption[lang]}
              </p>
              {total > 1 && (
                <div className={`thumbs thumbs--${view}`}>
                  {list.map((s, i) => (
                    <button key={s.src} className={i === index ? 'is-active' : ''} onClick={() => setIndex(i)} aria-label={s.caption[lang]}>
                      <img src={s.src} alt="" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="stage stage--empty"><span>{project.name[lang]}</span></div>
          )}
        </div>

        <div className="modal__info">
          <div className="badges">
            {project.team && <span className="badge"><Users size={13} /> {ui.team}</span>}
            {project.private && <span className="badge"><Lock size={13} /> {ui.private}</span>}
            <span className="badge badge--soft">{project.year}</span>
          </div>
          <h2>{project.name[lang]}</h2>
          <p className="modal__tagline">{project.tagline[lang]}</p>
          <p className="modal__desc">{project.description[lang]}</p>

          <h3>{ui.features}</h3>
          <ul className="checklist">
            {project.features[lang].map((f) => <li key={f}><Check size={16} /> {f}</li>)}
          </ul>

          <h3>{ui.stack}</h3>
          <div className="chips">
            {project.stack.map((t) => <span key={t} className="chip">{t}</span>)}
          </div>

          <div className="modal__links">
            {project.links.demo && (
              <a className="btn btn--primary" href={project.links.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} /> {ui.demo}
              </a>
            )}
            {project.links.github && (
              <a className="btn btn--ghost" href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github size={16} /> {ui.code}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ProjectModal;
