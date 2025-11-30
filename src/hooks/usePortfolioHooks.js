import { useState, useEffect, useMemo, useCallback, useRef } from 'react';

export const useDynamicTitle = (name) => {
    const titles = useMemo(() => [
        `${name} | Desarrollador Full Stack`,
        `[STATUS: ONLINE]`,
        `Luis Zeballos | Portfolio`,
    ], [name]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            document.title = titles[index];
            index = (index + 1) % titles.length;
        }, 5000);
        return () => clearInterval(interval);
    }, [titles]);
};

export const useIntersectionObserver = (options = { threshold: 0.1, rootMargin: "0px" }) => {
    const [isIntersecting, setIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(true);
                observer.disconnect(); 
            }
        }, options);

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return [ref, isIntersecting];
};

export const useMouseTracker = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    
    const handleMouseMove = useCallback((e) => { 
        setPosition({ x: e.clientX, y: e.clientY }); 
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [handleMouseMove]);

    return position;
};