import React from 'react';
import StarsBackground from '../components/StarsBackground';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Milestones from '../components/Milestones';
import Tech from '../components/Tech';
import Quote from '../components/Quote';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <StarsBackground />
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
