import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import './styles.scss';

import { portfolioData } from './data/portfolioData';
import { useDynamicTitle } from './hooks/usePortfolioHooks';
import { Backdrop } from './components/UI';
import { CursorGlow, ScrollProgress } from './components/Effects';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import Services from './components/Services';
import ProjectsPage, { FeaturedProjects } from './components/Projects';
import SkillsSection from './components/Skills';
import { CTA, Process } from './components/Process';
import AboutMe from './components/About';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
};

const stored = (key, fallback) => {
  try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; }
};

const App = () => {
  const [isDark, setIsDark] = useState(() => stored('lz_theme', 'dark') === 'dark');
  const [lang, setLang] = useState(() => stored('lz_lang', 'es'));
  const content = useMemo(() => portfolioData[lang] || portfolioData.es, [lang]);

  useDynamicTitle(content.personal_data.name);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    try { localStorage.setItem('lz_theme', isDark ? 'dark' : 'light'); } catch { /* sin storage */ }
  }, [isDark]);

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem('lz_lang', lang); } catch { /* sin storage */ }
  }, [lang]);

  const p = { content, lang };

  return (
    <Router>
      <ScrollToTop />
      <Backdrop />
      <CursorGlow />
      <ScrollProgress />
      <Navbar content={content} isDark={isDark} setIsDark={setIsDark} lang={lang} setLang={setLang} />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <HeroSection {...p} />
                <Services {...p} />
                <FeaturedProjects {...p} />
                <Process {...p} />
                <SkillsSection {...p} compact />
                <AboutMe {...p} />
                <CTA {...p} />
              </>
            )}
          />
          <Route path="/services" element={<div className="page-top"><Services {...p} /><Process {...p} /><CTA {...p} /></div>} />
          <Route path="/projects" element={<><ProjectsPage {...p} /><CTA {...p} /></>} />
          <Route path="/skills" element={<><SkillsSection {...p} /><CTA {...p} /></>} />
          <Route path="/about" element={<><AboutMe {...p} page /><Process {...p} /><CTA {...p} /></>} />
          <Route path="/contact" element={<ContactSection {...p} />} />
          <Route path="*" element={<NotFound content={content} />} />
        </Routes>
      </main>
      <Footer content={content} />
    </Router>
  );
};

export default App;
