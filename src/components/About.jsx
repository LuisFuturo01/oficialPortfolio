import React from 'react';
import { FileText, MessageCircle } from 'lucide-react';
import { Icon, Reveal } from './UI';
import profileimg from '../assets/images/profile.jpeg';

const AboutMe = ({ content, page = false }) => {
  const { about, ui, personal_data: me } = content;
  return (
    <section className={`section ${page ? 'section--page' : 'section--alt'}`} id="about">
      <div className="container about">
        <Reveal className="about__photo">
          <img src={profileimg} alt={me.name} loading="lazy" />
          <div className="about__badge">
            <strong>{me.short}</strong>
            <span>Full Stack · AI · Mobile</span>
          </div>
        </Reveal>
        <div className="about__text">
          <Reveal>
            <span className="eyebrow">{about.eyebrow}</span>
            <h2 className="section-title">{about.title}</h2>
          </Reveal>
          <Reveal delay={80}>
            <p>{about.p1}</p>
            <p>{about.p2}</p>
            <p>{about.p3}</p>
          </Reveal>
          <Reveal delay={140} className="about__highlights">
            {about.highlights.map((h) => (
              <div key={h.text} className="highlight">
                <span className="highlight__icon"><Icon name={h.icon} size={18} /></span>
                {h.text}
              </div>
            ))}
          </Reveal>
          <Reveal delay={200} className="hero__actions">
            <a href={me.links.cv} target="_blank" rel="noopener noreferrer" className="btn btn--primary"><FileText size={16} /> {ui.view_cv}</a>
            <a href={me.links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn--ghost"><MessageCircle size={16} /> {ui.hire}</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
