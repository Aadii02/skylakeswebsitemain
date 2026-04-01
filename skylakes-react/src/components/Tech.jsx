import React from 'react';


export default function Tech() {
  return (
    <section id="tech">
      <div className="tech-section">
    <div className="tech-header reveal">
      <div className="section-label">Our Technology</div>
      <h2 className="section-title">Three Pillars of<br/>Innovation</h2>
    </div>
    <div className="tech-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>

      <div className="tech-card reveal">
        <svg className="tech-icon" viewBox="0 0 52 52" fill="none" style={{ color: 'var(--accent)' }}>
          <path d="M26 4 C26 4 38 18 38 32 L26 40 L14 32 C14 18 26 4 26 4Z" stroke="currentColor" strokeWidth="2" fill="rgba(96,165,250,0.1)"/>
          <path d="M18 40 Q26 48 34 40" stroke="currentColor" strokeWidth="2"/>
        </svg>
        <div className="tech-card-title">Reusable Landing Tech</div>
        <p className="tech-card-desc" style={{ fontStyle: 'italic', fontWeight: '300', color: 'var(--muted2)' }}>
          Rockets return precisely to the launch pad — slashing turnaround times and making missions more sustainable.
        </p>
      </div>

      <div className="tech-card reveal" style={{ transitionDelay: '0.1s' }}>
        <svg className="tech-icon" viewBox="0 0 52 52" fill="none" style={{ color: 'var(--accent)' }}>
          <circle cx="26" cy="26" r="10" stroke="currentColor" strokeWidth="2" fill="rgba(96,165,250,0.1)"/>
          <path d="M26 6 V12 M26 40 V46 M6 26 H12 M40 26 H46" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 12 L16 16 M36 36 L40 40 M40 12 L36 16 M16 36 L12 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <div className="tech-card-title">Automotive Parts Repurposing</div>
        <p className="tech-card-desc" style={{ fontStyle: 'italic', fontWeight: '300', color: 'var(--muted2)' }}>
          Proven automotive components adapted for rocket manufacturing — leveraging India's established supply chain to cut costs.
        </p>
      </div>

      <div className="tech-card reveal" style={{ transitionDelay: '0.2s' }}>
        <svg className="tech-icon" viewBox="0 0 52 52" fill="none" style={{ color: 'var(--accent)' }}>
          <circle cx="26" cy="18" r="6" stroke="currentColor" strokeWidth="2" fill="rgba(96,165,250,0.1)"/>
          <path d="M26 24 V34" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="34" width="24" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 12 C16 8 10 16 14 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
          <path d="M32 12 C36 8 42 16 38 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
        </svg>
        <div className="tech-card-title">Rideshare Launch Services</div>
        <p className="tech-card-desc" style={{ fontStyle: 'italic', fontWeight: '300', color: 'var(--muted2)' }}>
          "Carpool for satellites" — multiple clients share payload space, maximizing efficiency and minimizing per-mission cost.
        </p>
      </div>

    </div>
  </div>
    </section>
  );
}
