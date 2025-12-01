import { useState, useEffect, useMemo, useRef } from 'react';

// Hook para título dinámico optimizado (pausa en segundo plano)
export const useDynamicTitle = (name) => {
    const titles = useMemo(() => [
        `${name} | Desarrollador Full Stack`,
        `[STATUS: ONLINE]`,
        `Luis Zeballos | Portfolio`,
    ], [name]);

    useEffect(() => {
        let interval;
        
        const cycleTitle = () => {
            let index = 0;
            interval = setInterval(() => {
                // Solo actualiza si la página es visible para ahorrar recursos
                if (!document.hidden) {
                    document.title = titles[index];
                    index = (index + 1) % titles.length;
                }
            }, 5000);
        };

        cycleTitle();

        const handleVisibility = () => {
            if (document.hidden) {
                clearInterval(interval);
                document.title = titles[0]; 
            } else {
                cycleTitle();
            }
        };

        document.addEventListener('visibilitychange', handleVisibility);
        return () => {
            clearInterval(interval);
            document.removeEventListener('visibilitychange', handleVisibility);
        };
    }, [titles]);
};

// Hook IntersectionObserver optimizado
export const useIntersectionObserver = (options = { threshold: 0.1, rootMargin: "0px" }) => {
    const [isIntersecting, setIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(true);
                observer.disconnect(); 
            }
        }, options);

        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
            observer.disconnect();
        };
    }, [options.threshold, options.rootMargin]); 

    return [ref, isIntersecting];
};

// Hook MouseTracker con Throttling vía requestAnimationFrame (Mejora Crítica de Rendimiento)
export const useMouseTracker = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const requestRef = useRef();

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (requestRef.current) return;
            
            requestRef.current = requestAnimationFrame(() => {
                setPosition({ x: e.clientX, y: e.clientY });
                requestRef.current = null;
            });
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return position;
};