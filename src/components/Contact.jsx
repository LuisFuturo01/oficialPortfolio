import React, { useRef, useEffect } from 'react';
import emailjs from "emailjs-com";
import { MessageCircle, Instagram } from 'lucide-react';
import { RevealOnScroll } from './UI';

const ContactSection = ({ content }) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("portfolioLuis", "template_tjxa21n", form.current, "uftlo6n2RL8bs0Hh5")
            .then(
                () => { alert(content.contact.form.success_msg); form.current.reset(); },
                (error) => { alert(content.contact.form.error_msg); console.error(error); }
            );
    };

    useEffect(() => {
        document.title = `${content.sections.contact.label} | ${content.personal_data.name}`;
    }, [content]);

    return (
        <section id="contact" className="section-container">
            <RevealOnScroll>
                <div className="contact-box">
                    <div className="contact-glow-line"></div>
                    <h2 className="contact-title">{content.contact.title}</h2>
                    <p className="contact-subtitle">{content.contact.subtitle}</p>

                    <div className="social-buttons-container">
                        <a href={content.contact.social.whatsapp} target="_blank" rel="noopener noreferrer" className="social-pill whatsapp" aria-label="Contactar por WhatsApp">
                            <MessageCircle size={22} aria-hidden="true" /> <span>WhatsApp</span>
                        </a>
                        <a href={content.contact.social.instagram} target="_blank" rel="noopener noreferrer" className="social-pill instagram" aria-label="Visitar perfil de Instagram">
                            <Instagram size={22} aria-hidden="true" /> <span>Instagram</span>
                        </a>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder={content.contact.form.name_ph} 
                                required 
                                className="form-input" 
                                aria-label={content.contact.form.name_ph}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder={content.contact.form.email_ph} 
                                required 
                                className="form-input" 
                                aria-label={content.contact.form.email_ph}
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="message" 
                                rows="4" 
                                placeholder={content.contact.form.msg_ph} 
                                required 
                                className="form-input"
                                aria-label={content.contact.form.msg_ph}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-primary full-width">{content.contact.cta}</button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default ContactSection;