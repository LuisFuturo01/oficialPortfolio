import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Github, Instagram, Linkedin, Mail, MessageCircle, Send } from 'lucide-react';
import { Reveal, SectionHeader } from './UI';

const ContactSection = ({ content }) => {
  const form = useRef();
  const [status, setStatus] = useState('idle');
  const { contact, personal_data: me } = content;

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.sendForm('portfolioLuis', 'template_tjxa21n', form.current, 'uftlo6n2RL8bs0Hh5')
      .then(() => { setStatus('ok'); form.current.reset(); })
      .catch(() => setStatus('error'));
  };

  const channels = [
    { icon: MessageCircle, label: 'WhatsApp', value: '+591 71556955', href: me.links.whatsapp, cls: 'whatsapp' },
    { icon: Mail, label: 'Email', value: me.links.email.replace('mailto:', ''), href: me.links.email, cls: 'mail' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Luis Zeballos', href: me.links.linkedin, cls: 'linkedin' },
    { icon: Github, label: 'GitHub', value: '@LuisFuturo01', href: me.links.github, cls: 'github' },
    { icon: Instagram, label: 'Instagram', value: '@zalexui', href: me.links.instagram, cls: 'instagram' },
  ];

  return (
    <section className="section section--page" id="contact">
      <div className="container">
        <SectionHeader eyebrow={contact.eyebrow} title={contact.title} sub={contact.subtitle} />
        <div className="contact">
          <Reveal className="contact__channels">
            {channels.map(({ icon, label, value, href, cls }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={`channel channel--${cls}`}>
                <span className="channel__icon">{React.createElement(icon, { size: 20 })}</span>
                <span><strong>{label}</strong><small>{value}</small></span>
              </a>
            ))}
          </Reveal>

          <Reveal delay={100} className="contact__form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="field-row">
                <input className="field" type="text" name="name" placeholder={contact.form.name_ph} aria-label={contact.form.name_ph} required />
                <input className="field" type="email" name="email" placeholder={contact.form.email_ph} aria-label={contact.form.email_ph} required />
              </div>
              <select className="field" name="project_type" aria-label={contact.form.type_ph} defaultValue="">
                <option value="" disabled>{contact.form.type_ph}</option>
                {contact.form.types.map((t) => <option key={t}>{t}</option>)}
              </select>
              <textarea className="field" name="message" rows="5" placeholder={contact.form.msg_ph} aria-label={contact.form.msg_ph} required />
              <button type="submit" className="btn btn--primary btn--lg btn--block" disabled={status === 'sending'}>
                <Send size={16} /> {status === 'sending' ? contact.form.sending : contact.cta}
              </button>
              {status === 'ok' && <p className="form-msg form-msg--ok">{contact.form.success_msg}</p>}
              {status === 'error' && <p className="form-msg form-msg--error">{contact.form.error_msg}</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
