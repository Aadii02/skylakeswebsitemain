import React, { Suspense, lazy, useEffect, useState } from 'react';

const Globe3D = lazy(() => import('./Globe3D'));

export default function Mission() {
  // Mount the lazy globe only after hydration: renderToString can't resolve
  // Suspense boundaries, so rendering it during hydration throws React #419.
  const [showGlobe, setShowGlobe] = useState(false);
  useEffect(() => setShowGlobe(true), []);

  return (
    <section id="mission">
      <div className="mission">
    <div className="mission-visual reveal">
      {showGlobe ? (
        <Suspense fallback={<div className="globe-canvas" />}>
          <Globe3D />
        </Suspense>
      ) : (
        <div className="globe-canvas" />
      )}
    </div>
    <div className="mission-text reveal" style={{ transitionDelay: '0.2s' }}>
      <div className="section-label">Our Mission</div>
      <h2 className="section-title">Bridging India<br/>to the Stars</h2>
      <p className="mission-body">SKYLX AeroSpace is at the forefront of revolutionizing India's aerospace industry — pioneering reusable rockets and reliable, cutting-edge solutions. Our mission: make space accessible, sustainable, and affordable, empowering India's presence in the global space race.</p>
      <div className="cost-solution-block" style={{ marginTop: '48px' }}>
        <h3 className="section-title" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', marginBottom: '32px' }}>
          Our Solution: Slash the Cost to Orbit
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '20px' }}>
          <div className="stat-card" style={{ padding: 'clamp(22px, 4vw, 32px) clamp(18px, 3.5vw, 28px)', textAlign: 'left' }}>
            <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', fontWeight: '700', marginBottom: '16px', color: 'var(--white)' }}>Current Cost</h4>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted2)', lineHeight: '1.8' }}>
              ISRO: <strong style={{ color: 'var(--accent)' }}>$9K–$10K/kg</strong><br/>
              SpaceX: <strong style={{ color: 'var(--accent)' }}>$8K–$9K/kg</strong>
            </p>
          </div>
          <div className="stat-card" style={{ padding: 'clamp(22px, 4vw, 32px) clamp(18px, 3.5vw, 28px)', textAlign: 'left' }}>
            <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', fontWeight: '700', marginBottom: '16px', color: 'var(--white)' }}>SKYLX Target</h4>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted2)', lineHeight: '1.8' }}>
              <strong style={{ color: 'var(--accent)' }}>$4K–$6K/kg</strong> — up to 50% cheaper via Indian private launch vehicle
            </p>
          </div>
        </div>

        <div className="stat-card" style={{ padding: 'clamp(22px, 4vw, 32px) clamp(18px, 3.5vw, 28px)', textAlign: 'left' }}>
          <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', fontWeight: '700', marginBottom: '16px', color: 'var(--white)' }}>How?</h4>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted2)', lineHeight: '1.6' }}>
            Reusable rockets + repurposed automotive parts + rideshare services
          </p>
        </div>
      </div>
    </div>
  </div>
    </section>
  );
}
