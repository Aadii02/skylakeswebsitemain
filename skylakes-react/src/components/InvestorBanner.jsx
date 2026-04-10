import React from 'react';
import SlideButton from './SlideButton';
import './InvestorBanner.css';

const PITCH_DECK_MAILTO = 'mailto:aaditya@skylakes.space?subject=Pitch%20Deck%20Request%20-%20SKYLX%20Aerospace';
const ONE_PAGER_MAILTO = 'mailto:aaditya@skylakes.space?subject=One-Pager%20Request%20-%20SKYLX%20Aerospace';

export default function InvestorBanner() {
  return (
    <section className="investor-banner-section">
      <div className="investor-banner-glow" aria-hidden="true"></div>
      <div className="investor-banner-inner reveal">
        <p className="investor-eyebrow">Pre-Seed Round Open</p>
        <h2 className="investor-title">First-mover in India&apos;s sub-₹40Cr LEO segment</h2>
        <p className="investor-subtext">
          Raising ₹3Cr via SAFE Note. Backed by aerospace passion and early technical traction.
        </p>

        <div className="investor-cta-row">
          <SlideButton href={PITCH_DECK_MAILTO}>Request Pitch Deck</SlideButton>
          <div className="investor-ghost-btn">
            <SlideButton href={ONE_PAGER_MAILTO}>View One-Pager</SlideButton>
          </div>
        </div>
      </div>
    </section>
  );
}
