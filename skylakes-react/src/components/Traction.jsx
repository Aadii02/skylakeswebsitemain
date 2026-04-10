import React from 'react';
import './Traction.css';

const milestones = [
  '✅ Propellant characterization tests completed',
  '✅ Flight Computer Tested',
  '🚀 Pre-seed raise: ₹3Cr SAFE Note — actively fundraising',
  '👥 Team: 2 co-founders (Aaditya Goswami, CEO + Ayush Seth, COO)',
  '🎯 Target market: Sub-₹40Cr LEO segment — first-mover in India'
];

export default function Traction() {
  return (
    <section id="traction" className="traction-section">
      <div className="traction-inner">
        <div className="reveal traction-header">
          <div className="section-label">Proof of Progress</div>
          <h2 className="section-title">Technical Traction and Market Readiness</h2>
        </div>

        <div className="traction-grid">
          {milestones.map((item, index) => (
            <div
              key={item}
              className="stat-card reveal traction-card"
              style={{ transitionDelay: (index * 0.1) + 's' }}
            >
              <div className="traction-card-icon" aria-hidden="true">●</div>
              <p className="traction-card-text">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
