import React from 'react';
import StarsBackground from '../components/StarsBackground';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Mission from '../components/Mission';
import VehicleFamily from '../components/VehicleFamily';
import Tech from '../components/Tech';
import Traction from '../components/Traction';
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
      <Marquee />
      <Mission />
      <div className="divider"></div>
      <VehicleFamily />
      <div className="divider"></div>
      <Quote />
      <Tech />
      <div className="divider"></div>
      <Traction />
      <div className="divider"></div>
      <About />
      <div className="divider"></div>
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
