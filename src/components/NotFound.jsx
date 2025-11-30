import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { RevealOnScroll } from './UI'; 

const NotFound = () => (
    <section className="section-container" style={{ textAlign: 'center', paddingTop: '15vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <RevealOnScroll>
            <div style={{ display: 'inline-block', position: 'relative', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '12rem', lineHeight: 0.8, opacity: 0.05, margin: 0, fontWeight: 'bold' }}>404</h1>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <AlertTriangle size={80} color="#10B981" />
                </div>
            </div>
            <h2 className="contact-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>ERROR: SECTOR NO ENCONTRADO</h2>
            <p className="contact-subtitle" style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                La ruta que intentas acceder no existe en este sistema o los datos han sido corrompidos.
            </p>
            <Link to="/" className="btn-primary">
                INICIAR SECUENCIA DE RETORNO
            </Link>
        </RevealOnScroll>
    </section>
);

export default NotFound;