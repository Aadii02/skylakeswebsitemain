import React from 'react';
import SocialTiles from './SocialTiles';

// Photos live in public/ and are referenced via BASE_URL, matching the
// logo/earth-bg convention in Hero.jsx and Footer.jsx. `objectPosition` frames
// each crop toward the subject's face (the two source photos have different
// aspect ratios and framing — see the manual-review note for this page).
const founders = [
  {
    id: 'aaditya',
    name: 'Aaditya Goswami',
    role: 'CEO & Cofounder',
    accent: 'blue',
    photo: 'founder-aaditya.jpeg',
    objectPosition: 'center 28%',
    bio: "Aaditya leads propulsion, vehicle architecture, and the long game. He designed and fired SkyLakes' first in-house solid motor and owns the technical roadmap from SKYLX-S to -H. He spends most days between the test stand and the CAD screen, and the rest making the case to anyone who'll listen that India's launch cost curve can bend a lot faster than people think.",
    links: [
      { platform: 'linkedin', href: 'https://www.linkedin.com/in/aaditya-goswami-908a98303' },
      { platform: 'instagram', href: 'https://www.instagram.com/aadiii_g02/' },
      { platform: 'twitter', href: 'https://x.com/aadiii_g02' },
      { platform: 'email', href: 'aaditya@skylakes.space' },
    ],
  },
  {
    id: 'ayush',
    name: 'Ayush Seth',
    role: 'COO & Cofounder',
    accent: 'green',
    photo: 'founder-ayush.jpeg',
    objectPosition: 'center 42%',
    bio: "Ayush runs operations, avionics, and everything that turns hardware into a company. He built the STM32 flight computer and the Mission Control dashboard, and he keeps the regulatory, funding, and customer tracks moving in parallel — iDEX, IN-SPACe, the LOI pipeline. If Aaditya makes it fly, Ayush makes sure there's a launch to fly it on.",
    links: [
      { platform: 'linkedin', href: 'https://www.linkedin.com/in/ayush-seth-b67a113b1' },
      { platform: 'instagram', href: 'https://www.instagram.com/ayushatskylx/' },
      { platform: 'email', href: 'ayush.seth@skylakes.space' },
    ],
  },
];

function FounderCard({ founder }) {
  return (
    <article className={`about-founder-card about-founder-card--${founder.accent}`}>
      <div className="about-founder-photo">
        <img
          className="about-founder-img"
          src={`${import.meta.env.BASE_URL}${founder.photo}`}
          alt={`${founder.name} — ${founder.role}, SkyLakes Aerospace`}
          style={{ objectPosition: founder.objectPosition }}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="about-founder-body">
        <h3 className="about-founder-name">{founder.name}</h3>
        <span className="about-founder-role">{founder.role}</span>
        <p className="about-founder-bio">{founder.bio}</p>
        <SocialTiles links={founder.links} />
      </div>
    </article>
  );
}

export default function AboutFounders() {
  return (
    <section className="about-founders reveal">
      <div className="about-founders-header">
        <div>
          <div className="about-eyebrow-label">02 — The Founders</div>
          <h2 className="about-founders-heading">Two people, one launch pad</h2>
        </div>
        <p className="about-founders-sub">
          Hardware and operations, sitting at the same bench since day one.
        </p>
      </div>
      <div className="about-founders-grid">
        {founders.map((founder) => (
          <FounderCard key={founder.id} founder={founder} />
        ))}
      </div>
    </section>
  );
}
