import React from 'react';
import GlobeWireframe from './GlobeWireframe';

export default function Mission() {
  return (
    <section id="mission">
      <div className="mission">
        <div className="mission-text reveal">
          <div className="section-label">Our Mission</div>
          <h2 className="section-title">Bridging India<br/>to the Stars</h2>
          <p className="mission-body">SkyLakes Aerospace is building India's first reusable small-lift launch vehicle family — pioneering reusable rockets and reliable, cutting-edge propulsion and avionics. Our mission: make space accessible, sustainable, and affordable, empowering India's presence in the global space race.</p>
          <blockquote className="mission-quote">Getting there takes more than an engine test stand. It takes a community that believes in the mission, and hardware in people's hands today — so that's where we started.</blockquote>
          <div className="mission-stats">
            <div className="mission-stat">
              <div className="stat-label">Today</div>
              <div className="mission-stat-value">$8K–10K<span className="mission-stat-unit">/kg</span></div>
            </div>
            <div className="mission-stat is-accent">
              <div className="stat-label">SKYLX Target</div>
              <div className="mission-stat-value">$4K–6K<span className="mission-stat-unit">/kg</span></div>
            </div>
            <div className="mission-stat">
              <div className="stat-label">Market</div>
              <div className="mission-stat-value">sub-₹40Cr<span className="mission-stat-unit">LEO</span></div>
            </div>
          </div>
        </div>

        <div className="mission-visual reveal" style={{ transitionDelay: '0.2s' }}>
          <GlobeWireframe />
        </div>
      </div>
    </section>
  );
}
