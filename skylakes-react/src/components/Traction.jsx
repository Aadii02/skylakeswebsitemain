import React from 'react';
import './Traction.css';

const milestones = [
  { label: 'Propulsion', text: 'Propellant characterization tests completed' },
  { label: 'Avionics', text: 'Flight computer tested' },
  { label: 'Funding', text: 'Pre-seed raise: ₹3Cr SAFE Note — actively fundraising' },
  { label: 'Team', text: '2 co-founders — Aaditya Goswami (CEO) & Ayush Seth (COO)' },
  { label: 'Market', text: 'First-mover in India’s sub-₹40Cr LEO segment' },
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
              key={item.label}
              className="stat-card reveal traction-card"
              style={{ transitionDelay: (index * 0.1) + 's' }}
            >
              <div className="traction-card-icon" aria-hidden="true">●</div>
              <div>
                <div className="traction-card-label">{item.label}</div>
                <p className="traction-card-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
