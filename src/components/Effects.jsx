import React, { useEffect, useRef } from 'react';

const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

/** Red de partículas que reacciona al mouse (se atraen y se conectan con líneas). */
export const ParticleField = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || reduced()) return undefined;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    let w = 0;
    let h = 0;
    let raf = 0;
    let points = [];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(110, (w * h) / 12000));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const color = () => (document.documentElement.dataset.theme === 'light' ? '5, 150, 105' : '52, 211, 153');

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      const c = color();
      for (const p of points) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const d = Math.hypot(dx, dy);
        if (d < 180) { p.vx += (dx / d) * 0.012; p.vy += (dy / d) * 0.012; }
        p.vx *= 0.985; p.vy *= 0.985;
        p.x += p.vx + (Math.random() - 0.5) * 0.05;
        p.y += p.vy + (Math.random() - 0.5) * 0.05;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < points.length; i += 1) {
        const a = points[i];
        for (let j = i + 1; j < points.length; j += 1) {
          const b = points[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.strokeStyle = `rgba(${c}, ${(1 - d / 120) * 0.25})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < 170) {
          ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - dm / 170) * 0.55})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
        ctx.fillStyle = `rgba(${c}, 0.8)`;
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    const onVis = () => { cancelAnimationFrame(raf); if (!document.hidden) raf = requestAnimationFrame(tick); };

    resize();
    raf = requestAnimationFrame(tick);
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    document.addEventListener('visibilitychange', onVis);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return <canvas ref={ref} className="particle-field" aria-hidden="true" />;
};

/** Halo de luz que sigue al cursor (solo con mouse). */
export const CursorGlow = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (!finePointer() || reduced()) return undefined;
    const el = ref.current;
    let x = 0; let y = 0; let tx = 0; let ty = 0; let raf = 0;
    const onMove = (e) => { tx = e.clientX; ty = e.clientY; el.style.opacity = '1'; };
    const loop = () => {
      x += (tx - x) * 0.12; y += (ty - y) * 0.12;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener('pointermove', onMove); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
};

/** Barra de progreso de lectura + variable CSS --scroll (0-1) para efectos de scroll. */
export const ScrollProgress = () => {
  const ref = useRef(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
      document.documentElement.style.setProperty('--scroll', p.toFixed(4));
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  return <div ref={ref} className="scroll-progress" aria-hidden="true" />;
};

/** Inclinación 3D siguiendo el mouse. */
export const Tilt = ({ children, className = '', max = 10, glare = true }) => {
  const ref = useRef(null);
  const onMove = (e) => {
    if (!finePointer() || reduced()) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty('--rx', `${(0.5 - py) * max}deg`);
    el.style.setProperty('--ry', `${(px - 0.5) * max}deg`);
    el.style.setProperty('--gx', `${px * 100}%`);
    el.style.setProperty('--gy', `${py * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };
  return (
    <div ref={ref} className={`tilt ${glare ? 'tilt--glare' : ''} ${className}`} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </div>
  );
};

/** Botón/enlace "magnético": se desplaza levemente hacia el cursor. */
export const Magnetic = ({ children, strength = 0.3 }) => {
  const ref = useRef(null);
  const onMove = (e) => {
    if (!finePointer() || reduced()) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => { ref.current.style.transform = ''; };
  return (
    <span ref={ref} className="magnetic" onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </span>
  );
};

/** Texto que se "decodifica" con caracteres aleatorios al aparecer. */
export const ScrambleText = ({ text, className = '' }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) { if (el) el.textContent = text; return undefined; }
    const chars = '!<>-_\\/[]{}—=+*^?#01';
    let frame = 0;
    let raf = 0;
    const total = 28;
    const run = () => {
      const progress = frame / total;
      el.textContent = text.split('').map((ch, i) => {
        if (ch === ' ') return ' ';
        return i / text.length < progress ? ch : chars[Math.floor(Math.random() * chars.length)];
      }).join('');
      frame += 1;
      if (frame <= total) raf = requestAnimationFrame(run);
      else el.textContent = text;
    };
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { frame = 0; run(); io.disconnect(); }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [text]);
  return <span ref={ref} className={className}>{text}</span>;
};
