# Luis.dev — Portafolio

Portafolio profesional de Luis Alejandro Zeballos Quiroz (React 19 + Vite + Sass).

- **Proyectos** con galería real de capturas en escritorio y móvil (carrusel con teclado, swipe y miniaturas), descripción, funciones, stack y enlaces. Enlace directo a un proyecto: `/projects?p=<slug>`.
- **Stack**: más de 60 tecnologías, cada una con qué es, cómo la uso y en qué proyectos aparece.
- Servicios, proceso de trabajo, sobre mí y contacto (EmailJS + WhatsApp).
- Tema oscuro/claro y español/inglés (se recuerdan en `localStorage`), 100% responsive, PWA.

## Desarrollo

```bash
npm install
npm run dev
```

## Editar contenido

- `src/data/projects.js` — proyectos y capturas
- `src/data/skills.js` — tecnologías
- `src/data/portfolioData.js` — textos (ES/EN)
- `scripts/` — regenerar capturas (ver `scripts/README.md`)
