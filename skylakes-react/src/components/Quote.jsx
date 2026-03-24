import React from 'react';


export default function Quote() {
  return (
    <section className="quote-section">
      <div className="quote-bg-text">SPACE</div>
  <div className="quote-text reveal">
    <span className="quote-mark">"</span>
    If you want to shine like a sun, first burn like a sun. Space is not just a frontier — it is India's destiny.
  </div>
  <div className="quote-author reveal" style={{ transitionDelay: '0.3s' }}>— Dr. APJ Abdul Kalam, Missile Man of India</div>
    </section>
  );
}
