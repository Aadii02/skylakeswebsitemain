import React from 'react';

export default function AboutOrigin() {
  return (
    <section className="about-origin reveal">
      <div className="about-origin-label-wrap">
        <div className="about-eyebrow-label">01 — Origin</div>
        <h2 className="about-origin-heading">
          How we
          <br />
          got here
        </h2>
      </div>
      <div className="about-origin-copy">
        <p>
          SkyLakes started with a frustration we couldn&apos;t shake: India builds world-class
          small satellites, but there was nowhere to <em>actually launch them on our own terms</em>.
          Operators waited years for a ride-share slot, gave up control of their orbit, and still
          paid a premium.
        </p>
        <p>
          So we started in a workshop with a simple bet — that a schedule-first vehicle built
          around proven solid propulsion could reach low Earth orbit for a fraction of the going
          rate. We machined our own motor, tested it, fired it, and wrote the flight software to
          fly it.
        </p>
        <p>
          Today SkyLakes is a pre-seed company in Faridabad with a hardware-first team, a working
          Mission Control stack, and a launch roadmap aimed squarely at the gap no funded Indian
          player has filled: dedicated LEO access for under ₹40 crore.
        </p>
      </div>
    </section>
  );
}
