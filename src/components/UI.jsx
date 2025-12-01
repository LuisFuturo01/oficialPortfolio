import React, { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver, useMouseTracker } from '../hooks/usePortfolioHooks';

export const Typewriter = ({ words, delay = 3000 }) => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const currentWord = words[wordIndex];
        const handleType = () => {
            setText(prev => isDeleting ? currentWord.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1));
            if (!isDeleting && text === currentWord) setTimeout(() => setIsDeleting(true), delay);
            else if (isDeleting && text === '') {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        };
        const timer = setTimeout(handleType, isDeleting ? 50 : 100);
        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, words, delay]);

    return <span className="typewriter-text">{text}<span className="cursor-blink">_</span></span>;
};

export const RevealOnScroll = ({ children }) => {
    const [ref, isVisible] = useIntersectionObserver();
    return <div ref={ref} className={`reveal-section ${isVisible ? 'is-visible' : ''}`}>{children}</div>;
};

export const SpotlightCard = ({ children, className = "", isDark }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const gradientColor = isDark 
        ? 'rgba(16, 185, 129, 0.15)' 
        : 'rgba(5, 150, 105, 0.1)'; 

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className={`spotlight-card ${className}`}
        >
            <div
                className="spotlight-overlay"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${gradientColor}, transparent 40%)`,
                }}
            />
            <div className="card-content">{children}</div>
        </div>
    );
};

export const GlobalCustomCursor = ({ isDark }) => {
    const position = useMouseTracker();
    
    const cursorColor = isDark 
        ? 'rgba(52, 211, 153, 0.2)' 
        : 'rgba(5, 150, 105, 0.15)'; 

    return (
        <div
            className="global-cursor"
            style={{
                background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${cursorColor}, transparent 80%)`,
                mixBlendMode: isDark ? 'screen' : 'normal', 
            }}
        />
    );
};

export const MatrixBackground = ({ isDark }) => {
    const canvasRef = useRef(null);

    const matrixColor = isDark ? '#10B981' : '#059669'; 
    const fadeColor = isDark ? 'rgba(2, 6, 23, 0.05)' : 'rgba(241, 245, 249, 0.1)'; 

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = document.body.scrollHeight;
        
        const letters = '01'; 
        const fontSize = 16;
        const columns = Math.floor(width / fontSize);
        const drops = Array(columns).fill(1);
        
        const draw = () => {
            ctx.fillStyle = fadeColor; 
            ctx.fillRect(0, 0, width, height);
            
            ctx.fillStyle = matrixColor; 
            ctx.font = `${fontSize}px 'VT323', monospace`;
            
            for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
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
    }, [isDark, matrixColor, fadeColor]); 

    return <canvas ref={canvasRef} className="matrix-canvas" />;
};