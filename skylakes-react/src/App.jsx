import React, { useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './index.css';
import useDocumentMeta from './hooks/useDocumentMeta';

import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import HomePage from './pages/HomePage';
import ModelRocketsPage from './pages/ModelRocketsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ToolsPage from './pages/ToolsPage';
import AboutPage from './pages/AboutPage';
import MissionPage from './pages/MissionPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  const bgAudioRef = useRef(null);
  const audioStartedRef = useRef(false);

  useDocumentMeta();

  function RouteEffects() {
    const location = useLocation();

    useEffect(() => {
      // Scroll to the section named in the hash (works across pages),
      // otherwise reset to the top on route change.
      if (location.hash) {
        const id = location.hash.slice(1);
        window.setTimeout(() => {
          const target = document.getElementById(id);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }

      let observer = null;
      const timer = window.setTimeout(() => {
        const reveals = document.querySelectorAll('.reveal:not(.visible)');
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, { threshold: 0.08 });

        reveals.forEach((element) => observer.observe(element));
      }, 60);

      return () => {
        window.clearTimeout(timer);
        if (observer) {
          observer.disconnect();
        }
      };
    }, [location.pathname, location.hash]);

    return null;
  }

  // Setup Intersection Observer for reveal animations (run on all routes)
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  // Audio setup (runs on all routes)
  useEffect(() => {
    const audio = bgAudioRef.current;
    if (!audio) return;

    audio.volume = 0.3;
    audio.muted = true;
    audio.preload = 'auto';
    audio.setAttribute('webkit-playsinline', 'true');
    audio.load();

    const startAudioOnFirstGesture = async () => {
      if (audioStartedRef.current) return;

      audioStartedRef.current = true;

      try {
        audio.muted = false;
        audio.volume = 0.3;
        await audio.play();
      } catch {
        audioStartedRef.current = false;
      }
    };

    const interactionEvents = ['pointerdown', 'touchstart', 'click'];
    interactionEvents.forEach((eventName) => {
      document.addEventListener(eventName, startAudioOnFirstGesture, { capture: true, passive: true });
    });

    return () => {
      interactionEvents.forEach((eventName) => {
        document.removeEventListener(eventName, startAudioOnFirstGesture, { capture: true });
      });
    };
  }, []);

  return (
    <>
      <audio
        ref={bgAudioRef}
        src={`${import.meta.env.BASE_URL}nikitakondrashev-space-ambient-509783_ZpAByXjv.mp3`}
        autoPlay
        muted
        playsInline
        webkit-playsinline="true"
        preload="metadata"
        loop
      />
      <RouteEffects />
      <ScrollProgress />
      <Navbar />
      <BackToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/vehicles" element={<ModelRocketsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        {/* backward-compatible redirect: old URL -> new /vehicles */}
        <Route path="/vehicles/model-rockets" element={<Navigate to="/vehicles" replace />} />
        {/* page removed: old URL was in the published sitemap, send visitors home */}
        <Route path="/products/substems" element={<Navigate to="/" replace />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </>
  );
}

export default App;
