import React from 'react';
import StarsBackground from '../components/StarsBackground';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Quote from '../components/Quote';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <StarsBackground />
      <Hero />
      <Mission />
      <div className="divider"></div>
      <Quote />
      <div className="divider"></div>
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
}
