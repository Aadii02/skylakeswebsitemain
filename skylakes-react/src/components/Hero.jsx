import React from 'react';
import SlideButton from './SlideButton';


export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-gradient"></div>
  <div className="hero-earth-bg" style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/earth-bg.png)', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', opacity: 0.8, zIndex: 0, pointerEvents: 'none' }}></div>
  <div className="hero-grid-lines"></div>
  <h1 className="hero-title" style={{ display: 'flex', justifyContent: 'center', margin: '0 0 12px 0' }}>
    <img src="/logo.png" alt="SKYLX AeroSpace" style={{ width: '100%', maxWidth: '500px', height: 'auto', objectFit: 'contain' }} />
  </h1>
  <p className="hero-subtitle">Revolutionizing India's space industry with reusable rockets, cost-effective launches, and cutting-edge aerospace innovation.</p>
  <div className="hero-ctas">
    <SlideButton href="#mission">Discover Our Mission</SlideButton>
    <div style={{ width: '8px' }} />
    <SlideButton href="#vehicles">View Launch Vehicles</SlideButton>
  </div>

  
  <svg className="hero-rocket" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5 C50 5 70 40 70 100 L50 120 L30 100 C30 40 50 5 50 5Z" fill="rgba(96,165,250,0.8)"/>
    <path d="M30 100 L10 140 L30 130Z" fill="rgba(96,165,250,0.4)"/>
    <path d="M70 100 L90 140 L70 130Z" fill="rgba(96,165,250,0.4)"/>
    <circle cx="50" cy="55" r="12" fill="rgba(255,255,255,0.2)"/>
    <path d="M42 140 Q50 160 58 140" stroke="rgba(96,165,250,0.6)" strokeWidth="2" fill="none"/>
    <ellipse cx="50" cy="168" rx="8" ry="12" fill="rgba(96,165,250,0.3)" filter="blur(4px)"/>
  </svg>
    </section>
  );
}
