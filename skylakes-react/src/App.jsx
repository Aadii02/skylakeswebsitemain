import React, { useEffect, useRef } from 'react';
import './index.css';

import StarsBackground from './components/StarsBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Mission from './components/Mission';
import Traction from './components/Traction';
import Milestones from './components/Milestones';
import Tech from './components/Tech';
import Quote from './components/Quote';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import InvestorBanner from './components/InvestorBanner';
import Footer from './components/Footer';

function App() {
  const bgAudioRef = useRef(null);
  const audioStartedRef = useRef(false);

  // Setup Intersection Observer for reveal animations
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
      <StarsBackground />
      <Navbar />
      <Hero />
      <TrustBar />
      <div className="divider"></div>
      <Mission />
      <Traction />
      <div className="divider"></div>
      <Milestones />
      <div className="divider"></div>
      <Quote />
      <Tech />
      <div className="divider"></div>
      <About />
      <div className="divider"></div>
      <FAQ />
      <Contact />
      <InvestorBanner />
      <Footer />
    </>
  );
}

export default App;
