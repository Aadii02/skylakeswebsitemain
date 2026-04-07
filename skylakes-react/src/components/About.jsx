import React from 'react';

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-label">About Us</div>
          <h2 className="section-title">Building India's Next Space Chapter</h2>
          <p style={{ color: 'var(--muted2)', maxWidth: '760px', margin: '0 auto', lineHeight: '1.7' }}>
            SKYLX AeroSpace is a private Indian aerospace company focused on reusable launch systems,
            cost-efficient access to orbit, and long-term space infrastructure that powers science,
            commerce, and national capability.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          <div className="stat-card reveal" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '10px' }}>Our Mission</h3>
            <p style={{ color: 'var(--muted2)', lineHeight: '1.7' }}>
              Make space launch more frequent, reliable, and affordable with reusable vehicles engineered
              for rapid turnaround.
            </p>
          </div>
          <div className="stat-card reveal" style={{ padding: '24px', transitionDelay: '0.1s' }}>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '10px' }}>What We Build</h3>
            <p style={{ color: 'var(--muted2)', lineHeight: '1.7' }}>
              A family of launch vehicles from small to heavy class, supporting LEO and GTO missions for
              startups, enterprises, and public programs.
            </p>
          </div>
          <div className="stat-card reveal" style={{ padding: '24px', transitionDelay: '0.2s' }}>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '10px' }}>Why SKYLX</h3>
            <p style={{ color: 'var(--muted2)', lineHeight: '1.7' }}>
              We combine advanced engineering, practical economics, and an India-first execution mindset to
              unlock commercial scale in space.
            </p>
          </div>
          <div className="stat-card reveal" style={{ padding: '24px', transitionDelay: '0.3s' }}>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '10px' }}>Our Vision</h3>
            <p style={{ color: 'var(--muted2)', lineHeight: '1.7' }}>
              Build the launch backbone that carries Indian innovation beyond Earth and into the global space
              economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
