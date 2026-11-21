import React from 'react';
import { Icon, Reveal, SectionHeader } from './UI';

const Services = ({ content }) => {
  const { services } = content;
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeader eyebrow={services.eyebrow} title={services.title} sub={services.sub} />
        <div className="services-grid">
          {services.items.map((s, i) => (
            <Reveal key={s.title} delay={i * 60} className="service-card">
              <div className="service-card__icon"><Icon name={s.icon} size={24} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="chips">
                {s.tags.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
