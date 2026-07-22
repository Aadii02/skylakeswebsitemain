import React from 'react';

export default function AboutHero() {
  return (
    <section className="about-hero reveal">
      <div className="about-eyebrow">
        <span className="about-eyebrow-dot" />
        <span>SkyLakes Aerospace</span>
      </div>
      <h1 className="about-hero-title">
        Putting India&apos;s small satellites into orbit for{' '}
        <span className="about-accent">under ₹40 crore.</span>
      </h1>
      <p className="about-hero-sub">
        We&apos;re building a family of dedicated launch vehicles that make low Earth orbit fast,
        affordable, and Indian — no ride-share compromises, no multi-year queues, no cryogenic
        delays.
      </p>

      <div className="about-stats">
        <div className="about-stat">
          <div className="about-stat-value">3 vehicles</div>
          <div className="about-stat-label">SKYLX-S · -M · -H roadmap</div>
        </div>
        <div className="about-stat">
          <div className="about-stat-value about-stat-value--green">In-house</div>
          <div className="about-stat-label">Solid propulsion, tested &amp; fired</div>
        </div>
        <div className="about-stat">
          <div className="about-stat-value about-stat-value--amber">Pre-seed</div>
          <div className="about-stat-label">Faridabad NCR · founded 2025</div>
        </div>
      </div>
    </section>
  );
}
