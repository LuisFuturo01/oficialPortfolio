import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Icon, Reveal, SectionHeader } from './UI';

export const Process = ({ content }) => {
  const { process, why } = content;
  return (
    <section className="section section--alt" id="process">
      <div className="container">
        <SectionHeader eyebrow={process.eyebrow} title={process.title} />
        <ol className="process">
          {process.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 80} className="process__step">
              <span className="process__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="why">
          <h3 className="why__title">{why.title}</h3>
          <div className="why__grid">
            {why.items.map((w) => (
              <div key={w.title} className="why__item">
                <span className="why__icon"><Icon name={w.icon} size={20} /></span>
                <div>
                  <strong>{w.title}</strong>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export const CTA = ({ content }) => (
  <section className="section">
    <div className="container">
      <Reveal className="cta">
        <div>
          <h2>{content.cta.title}</h2>
          <p>{content.cta.sub}</p>
        </div>
        <a className="btn btn--light btn--lg" href={content.personal_data.links.whatsapp} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} /> {content.cta.btn}
        </a>
      </Reveal>
    </div>
  </section>
);
