import React, { useState, useEffect, useRef } from 'react';
import { useMouseTracker, useIntersectionObserver } from '../hooks/usePortfolioHooks';

// Efecto de escritura tipo máquina
export const Typewriter = ({ words, delay = 3000, typingSpeed = 100, deletingSpeed = 50 }) => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const currentWord = words[wordIndex];
        
        const handleType = () => {
            setText(prev => {
                if (isDeleting) {
                    return currentWord.substring(0, prev.length - 1);
                } else {
                    return currentWord.substring(0, prev.length + 1);
                }
            });

            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        };

        const timer = setTimeout(handleType, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, words, delay, typingSpeed, deletingSpeed]);

    return <span>{text}<span className="animate-pulse text-emerald-500">_</span></span>;
};

// Contenedor para animar entrada al hacer scroll
export const RevealOnScroll = ({ children, className = "" }) => {
    const [ref, isVisible] = useIntersectionObserver();
    
    return (
        <div 
            ref={ref} 
            className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
        >
            {children}
        </div>
    );
};

// Tarjeta con efecto de foco interno
export const SpotlightCard = ({ children, className = "", isDark }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => { setOpacity(1); };
    const handleBlur = () => { setOpacity(0); };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleFocus}
            onMouseLeave={handleBlur}
            className={`relative overflow-hidden rounded-xl border transition-all duration-300 ${className} group`}
        >
            <div
                className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${isDark ? 'rgba(16, 185, 129, 0.15)' : 'rgba(16, 185, 129, 0.1)'}, transparent 40%)`,
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
};

// Cursor Global tipo Linterna
export const GlobalCustomCursor = ({ isDarkMode }) => {
    const position = useMouseTracker();
    const accentColor = isDarkMode ? 'rgba(52, 211, 153, 0.25)' : 'rgba(4, 120, 87, 0.15)'; 
    
    return (
        <div
            className="pointer-events-none fixed inset-0 z-40 transition duration-100 ease-out"
            style={{
                background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${accentColor}, transparent 80%)`,
                mixBlendMode: isDarkMode ? 'screen' : 'multiply', 
            }}
        />
    );
};

// Fondo Lluvia Matrix
export const MatrixBackground = ({ isDarkMode }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!isDarkMode) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = document.body.scrollHeight;
        const letters = '01'; 
        const fontSize = 16;
        const columns = Math.floor(width / fontSize);
        const drops = Array(columns).fill(1);
        
        const draw = () => {
            ctx.fillStyle = 'rgba(2, 6, 23, 0.05)'; 
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#10B981'; 
            ctx.font = `${fontSize}px 'VT323', monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50);
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = document.body.scrollHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, [isDarkMode]);

    if (!isDarkMode) return null;

    return (
        <canvas 
            ref={canvasRef} 
            className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0"
            style={{ height: '100%' }}
        />
    );
};