import React, { useEffect, useRef } from 'react';
import './index.css';

import StarsBackground from './components/StarsBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Milestones from './components/Milestones';
import Tech from './components/Tech';
import Quote from './components/Quote';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const bgAudioRef = useRef(null);

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

    const tryPlay = async () => {
      try {
        await audio.play();
      } catch {
        // Autoplay may still be blocked by browser policy.
      }
    };

    const playWithSound = async () => {
      try {
        audio.muted = false;
        audio.volume = 0.3;
        await audio.play();
      } catch {
        // If blocked, keep trying only on the next interaction.
      }
    };

    tryPlay();

    window.addEventListener('pointerdown', playWithSound, { once: true });
    window.addEventListener('keydown', playWithSound, { once: true });
    window.addEventListener('touchstart', playWithSound, { once: true });

    return () => {
      window.removeEventListener('pointerdown', playWithSound);
      window.removeEventListener('keydown', playWithSound);
      window.removeEventListener('touchstart', playWithSound);
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
        preload="auto"
        loop
      />
      <StarsBackground />
      <Navbar />
      <Hero />
      <div className="divider"></div>
      <Mission />
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
      <Footer />
    </>
  );
}

export default App;
