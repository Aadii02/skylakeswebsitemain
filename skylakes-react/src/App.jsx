import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ModelRocketsPage from './pages/ModelRocketsPage';
import SubstemsPage from './pages/SubstemsPage';
import BlogPage from './pages/BlogPage';

function App() {
  const bgAudioRef = useRef(null);
  const audioStartedRef = useRef(false);

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
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vehicles" element={<ModelRocketsPage />} />
          {/* backward-compatible redirect: old URL -> new /vehicles */}
          <Route path="/vehicles/model-rockets" element={<Navigate to="/vehicles" replace />} />
          <Route path="/products/substems" element={<SubstemsPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
