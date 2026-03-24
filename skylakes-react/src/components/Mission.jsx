import React from 'react';


export default function Mission() {
  return (
    <section id="mission">
      <div className="mission">
    <div className="mission-visual reveal">
      <div className="planet-container">
        <div className="planet"></div>
        <div className="planet-ring"></div>
        <div className="planet-ring2"></div>
      </div>
    </div>
    <div className="mission-text reveal" style={{ transitionDelay: '0.2s' }}>
      <div className="section-label">Our Mission</div>
      <h2 className="section-title">Bridging India<br/>to the Stars</h2>
      <p className="mission-body">SKYLX AeroSpace is at the forefront of revolutionizing India's aerospace industry — pioneering reusable rockets and reliable, cutting-edge solutions. Our mission: make space accessible, sustainable, and affordable, empowering India's presence in the global space race.</p>
      <div className="cost-solution-block" style={{ marginTop: '48px' }}>
        <h3 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '32px' }}>
          Our Solution: Slash the Cost to Orbit
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
          <div className="stat-card" style={{ padding: '32px 28px', textAlign: 'left' }}>
            <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.4rem', fontWeight: '700', marginBottom: '16px', color: 'var(--white)' }}>Current Cost</h4>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted2)', lineHeight: '1.8' }}>
              ISRO: <strong style={{ color: 'var(--accent)' }}>$9K–$10K/kg</strong><br/>
              SpaceX: <strong style={{ color: 'var(--accent)' }}>$8K–$9K/kg</strong>
            </p>
          </div>
          <div className="stat-card" style={{ padding: '32px 28px', textAlign: 'left' }}>
            <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.4rem', fontWeight: '700', marginBottom: '16px', color: 'var(--white)' }}>SKYLX Target</h4>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted2)', lineHeight: '1.8' }}>
              <strong style={{ color: 'var(--accent)' }}>$4K–$6K/kg</strong> — up to 50% cheaper via Indian private launch vehicle
            </p>
          </div>
        </div>

        <div className="stat-card" style={{ padding: '32px 28px', textAlign: 'left' }}>
          <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.4rem', fontWeight: '700', marginBottom: '16px', color: 'var(--white)' }}>How?</h4>
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
