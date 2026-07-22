import React from 'react';
import StarsBackground from '../components/StarsBackground';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import AboutOrigin from '../components/AboutOrigin';
import AboutFounders from '../components/AboutFounders';
import AboutValues from '../components/AboutValues';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <>
      <StarsBackground />
      <div className="about-page">
        <div className="about-bg-grid" aria-hidden="true" />
        <div className="about-bg-glow" aria-hidden="true" />
        <main className="about-main">
          <AboutHero />
          <AboutOrigin />
          <AboutFounders />
          <AboutValues />
        </main>
      </div>
      <Footer />
    </>
  );
}
