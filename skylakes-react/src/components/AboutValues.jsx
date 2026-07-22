import React from 'react';

const values = [
  {
    n: '01',
    accent: 'blue',
    title: 'Build it, then talk',
    desc: 'We fire motors before we write pitch decks. Hardware in hand beats a roadmap every time.',
  },
  {
    n: '02',
    accent: 'green',
    title: 'Schedule is the product',
    desc: "A launch that slips isn't a launch. We pick proven propulsion precisely because it flies on time.",
  },
  {
    n: '03',
    accent: 'amber',
    title: 'Cheap, on purpose',
    desc: "Under ₹40 crore to LEO isn't a discount — it's the whole design constraint we optimize against.",
  },
];

export default function AboutValues() {
  return (
    <section className="about-values reveal">
      <div className="about-eyebrow-label">03 — What we run on</div>
      <h2 className="about-values-heading">Principles, not posters</h2>
      <div className="about-values-grid">
        {values.map((value) => (
          <div key={value.n} className={`about-value-card about-value-card--${value.accent}`}>
            <div className="about-value-index">{value.n}</div>
            <h3 className="about-value-title">{value.title}</h3>
            <p className="about-value-desc">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
