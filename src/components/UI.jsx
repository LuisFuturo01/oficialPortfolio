import React, { useEffect, useState } from 'react';
import {
  Box, Brain, Building2, Code, Database, Globe, GraduationCap, HeartHandshake, Languages, LayoutDashboard, PenTool, Rocket, Server, ShieldCheck, ShoppingCart, Smartphone, Sparkles, Trophy, Wrench, Zap,
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/usePortfolioHooks';
import { ScrambleText } from './Effects';

// Solo los íconos usados por nombre en los datos (mantiene el bundle liviano).
const ICONS = { Box, Brain, Building2, Code, Database, Globe, GraduationCap, HeartHandshake, Languages, LayoutDashboard, PenTool, Rocket, Server, ShieldCheck, ShoppingCart, Smartphone, Sparkles, Trophy, Wrench, Zap };

/** Icono de lucide por nombre (con respaldo). */
export const Icon = ({ name, size = 20, ...rest }) =>
  React.createElement(ICONS[name] || Sparkles, { size, 'aria-hidden': true, ...rest });

export const Typewriter = ({ words, delay = 2200 }) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    if (!isDeleting && text === current) {
      const t = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(t);
    }
    if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return undefined;
    }
    const t = setTimeout(
      () => setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
      isDeleting ? 35 : 70,
    );
    return () => clearTimeout(t);
  }, [text, isDeleting, wordIndex, words, delay]);

  return (
    <span className="typewriter" aria-label={words[wordIndex % words.length]}>
      {text}
      <span className="typewriter__caret" aria-hidden="true" />
    </span>
  );
};

export const Reveal = ({ children, delay = 0, as = 'div', className = '' }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return React.createElement(
    as,
    { ref, className: `reveal ${isVisible ? 'is-visible' : ''} ${className}`, style: { transitionDelay: `${delay}ms` } },
    children,
  );
};

export const SectionHeader = ({ eyebrow, title, sub, center = true }) => (
  <Reveal className={`section-header ${center ? 'is-center' : ''}`}>
    {eyebrow && <span className="eyebrow"><ScrambleText text={eyebrow} /></span>}
    <h2 className="section-title">{title}</h2>
    {sub && <p className="section-sub">{sub}</p>}
  </Reveal>
);

/** Fondo animado (aurora + grilla) — liviano, solo CSS. */
export const Backdrop = () => (
  <div className="backdrop" aria-hidden="true">
    <div className="backdrop__grid" />
    <div className="backdrop__blob backdrop__blob--a" />
    <div className="backdrop__blob backdrop__blob--b" />
    <div className="backdrop__blob backdrop__blob--c" />
  </div>
);

/** Cinta infinita de tecnologías. */
export const Marquee = ({ items }) => (
  <div className="marquee" aria-hidden="true">
    <div className="marquee__track">
      {[...items, ...items].map((it, i) => (
        <span key={i} className="marquee__item">{it}</span>
      ))}
    </div>
  </div>
);
