import React from 'react';
import { Link } from 'react-router-dom';
import StarsBackground from '../components/StarsBackground';
import Footer from '../components/Footer';
import './MissionPage.css';

// Recreated from the Claude Design handoff at
// desgin-import/skylakes-mission-page/project/Mission.dc.html — same sections,
// copy and layout, rendered in the site's own type and palette.

const GAP_STATS = [
  { label: 'Vehicle family', value: 'SKYLX-S / M / H' },
  { label: 'Primary engine', value: 'LX-1 · Ethanol/LOX' },
  { label: 'Reuse target', value: 'Booster recovery' },
];

const ICONS = {
  propulsion: [
    ['path', { d: 'M12 3c2.6 3.2 3.6 5.6 3.6 8.2v3.4H8.4v-3.4C8.4 8.6 9.4 6.2 12 3Z' }],
    ['path', { d: 'M8.4 14.6 6.6 21h10.8l-1.8-6.4' }],
    ['path', { d: 'M12 17.4V21' }],
  ],
  avionics: [
    ['rect', { x: 5, y: 5, width: 14, height: 14, rx: 2 }],
    ['rect', { x: 9.5, y: 9.5, width: 5, height: 5, rx: 1 }],
    ['path', { d: 'M9 2.5V5M15 2.5V5M9 19v2.5M15 19v2.5M2.5 9H5M2.5 15H5M19 9h2.5M19 15h2.5' }],
  ],
  simulation: [
    ['path', { d: 'M2.5 12h3.2l2.6-6.4 3.2 12.8 2.6-6.4h3.4' }],
    ['path', { d: 'M18.5 12h3' }],
  ],
  design: [
    ['path', { d: 'M12 3 20.5 7.7v8.6L12 21 3.5 16.3V7.7L12 3Z' }],
    ['path', { d: 'M3.5 7.7 12 12.4l8.5-4.7M12 12.4V21' }],
  ],
};

function Icon({ name }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name].map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs }))}
    </svg>
  );
}

const BUILD_CARDS = [
  {
    icon: 'propulsion',
    title: 'Propulsion',
    tag: 'LX-1 Engine',
    body: "LX-1 is our primary engine — ethanol/LOX, regeneratively cooled. We picked ethanol over kerosene after genuinely interrogating the trade, because it fits the mission profile we're building for.",
  },
  {
    icon: 'avionics',
    title: 'Avionics',
    tag: 'STM32F411 + Pi Zero 2W',
    body: "A dual flight-computer architecture, stress-tested through a formal bare-metal-vs-Linux evaluation protocol run in shadow mode — because the flight computer doesn't get a second chance to be right.",
  },
  {
    icon: 'simulation',
    title: 'Simulation',
    tag: 'SimCore',
    body: "We're building SimCore, our own flight simulation platform, to eventually get us off MATLAB/Simulink entirely. If it's core to how we fly, we want to own it.",
  },
  {
    icon: 'design',
    title: 'Design & Iteration',
    tag: 'Fusion 360 · Blender · KeyShot',
    body: 'Every airframe and engine gets modeled, visualized, and pressure-tested digitally before it touches a test stand — iterated the same way we iterate hardware: fast, and without ego.',
  },
];

const VEHICLES = [
  {
    name: 'SKYLX-S',
    status: 'In active development',
    active: true,
    role: 'Small-lift entry point',
    builtFor: 'Smallsat operators, first flights, technology demonstration.',
  },
  {
    name: 'SKYLX-M',
    status: 'Roadmap',
    active: false,
    role: 'Mid-capacity workhorse',
    builtFor: 'Constellation deployment, dedicated rideshare.',
  },
  {
    name: 'SKYLX-H',
    status: 'Roadmap',
    active: false,
    role: 'Heavier LEO payloads',
    builtFor: 'Larger payload classes as the platform matures.',
  },
];

const ROADMAP = [
  {
    num: '01',
    title: 'Build the community',
    body: "Before SkyLakes builds rockets at scale, it's building the people who care about rockets — students, hobbyists, and engineers who show up, ask hard questions, and stay. This is that room.",
  },
  {
    num: '02',
    title: 'Fund the mission with hardware people can hold',
    body: 'Model rocket kits and sub-components — real revenue from real products, not slide decks. It funds the harder problems and puts rocketry into more hands than a launch ever could on its own.',
  },
  {
    num: '03',
    title: 'Commercial spaceflight',
    body: "Everything above builds toward this: SKYLX-S, M, and H flying, reflying, and making sub-₹40Cr LEO access something India's smallsat operators can actually plan around.",
  },
];

const COMMITMENTS = [
  "We won't claim a flight date we haven't earned with test data.",
  "We won't skip the cheap test to look impressive faster.",
  "We won't build this behind closed doors — the community sees the build logs, the failures, and the fixes.",
];

// Blueprint elevation behind the hero, traced from the handoff.
function HeroBlueprint() {
  return (
    <div className="mp-hero-blueprint" aria-hidden="true">
      <svg viewBox="0 0 320 620" width="100%" fill="none" stroke="var(--accent)" strokeWidth="1" vectorEffect="non-scaling-stroke">
        <g opacity=".55">
          <path d="M160 24 C 196 96, 210 150, 210 196 L 210 470 C 210 508, 196 546, 160 596 C 124 546, 110 508, 110 470 L 110 196 C 110 150, 124 96, 160 24 Z" />
          <path d="M110 196 L 210 196 M110 250 L 210 250 M110 470 L 210 470 M110 404 L 210 404" opacity=".7" />
          <path d="M110 404 L 52 512 L 52 560 L 110 500 Z M210 404 L 268 512 L 268 560 L 210 500 Z" />
          <path d="M128 596 L 128 620 M192 596 L 192 620" opacity=".6" />
          <circle cx="160" cy="300" r="22" />
          <circle cx="160" cy="300" r="9" opacity=".6" />
        </g>
        <g opacity=".45" strokeDasharray="4 6">
          <path d="M160 0 L 160 620" />
          <path d="M40 196 L 92 196 M40 470 L 92 470" />
          <path d="M46 196 L 46 470" />
        </g>
        <g opacity=".35" strokeDasharray="2 5">
          <path d="M240 24 L 300 24 M240 596 L 300 596 M292 24 L 292 596" />
        </g>
      </svg>
    </div>
  );
}

export default function MissionPage() {
  return (
    <>
      <StarsBackground />
      <div className="mission-page">
        <div className="mp-bg-glow" aria-hidden="true" />
        <main className="mp-main">

          <section className="mp-hero" id="top">
            <HeroBlueprint />
            <div className="mp-hero-inner">
              <div className="mp-eyebrow mp-eyebrow-ruled">Our Mission</div>
              <h1 className="mp-h1">Building India&apos;s First Reusable Small-Lift Rocket</h1>
              <p className="mp-lede">
                Not a paper rocket. Not a rendering. A vehicle family we&apos;re testing, flying,
                and rebuilding — piece by piece, from a garage in Delhi to a launch pad.
              </p>
              <div className="mp-hero-meta">
                <span>SKYLX-S · SKYLX-M · SKYLX-H</span>
                <span>Ethanol / LOX</span>
                <span>Delhi, India</span>
              </div>
            </div>
          </section>

          <section className="mp-band mp-statement">
            <div className="mp-statement-inner">
              <p className="mp-statement-lead">
                India can put satellites in orbit. What it can&apos;t yet do is put{' '}
                <em>small</em> satellites in orbit <em>cheap</em> — reliably, on schedule, for
                under ₹40 crore. That gap is where SkyLakes lives.
              </p>
              <p className="mp-body">
                We&apos;re building the SKYLX family — S, M, and H — a line of reusable small-lift
                launch vehicles designed to make sub-₹40Cr LEO access normal instead of
                exceptional. Not by out-funding the incumbents, but by out-testing them: cheaper
                iterations, faster failure, more flights per rupee.
              </p>
            </div>
          </section>

          <section className="mp-section mp-why">
            <div>
              <div className="mp-eyebrow">Why This, Why Now</div>
              <h2 className="mp-h2">Open, legal, and almost entirely unbuilt</h2>
              <p className="mp-body">
                India&apos;s space sector just opened up. IN-SPACe exists. Private launch is legal,
                encouraged, and still almost entirely unbuilt. A handful of companies are chasing
                the top of the market — bigger payloads, bigger rockets, bigger checks. Almost
                nobody is building for the small satellite operators who need a ride to orbit and
                can&apos;t afford to wait in line behind a national mission.
              </p>
              <p className="mp-body">
                That&apos;s the seat we&apos;re taking. Small-lift. Reusable. Priced for the
                customer who currently has no good option.
              </p>
            </div>
            <div className="mp-card mp-gap-card">
              <div className="mp-card-kicker">The gap we&apos;re built for</div>
              <div className="mp-rule" />
              <dl className="mp-gap-list">
                {GAP_STATS.map(({ label, value }) => (
                  <div className="mp-gap-row" key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className="mp-band">
            <div className="mp-band-inner">
              <div className="mp-measure">
                <div className="mp-eyebrow">How We Build</div>
                <h2 className="mp-h2">Test-first, not paper-first</h2>
                <p className="mp-body">
                  Every subsystem earns its place through hardware, not slides. Our LX-1 engine
                  program didn&apos;t jump straight to a metal print — we ran a PLA-CF nozzle
                  through water flow testing first, validating cooling channel geometry before
                  committing to an expensive IN718 build. That&apos;s the philosophy end to end:
                  de-risk cheap, commit expensive.
                </p>
              </div>
              <div className="mp-build-grid">
                {BUILD_CARDS.map(({ icon, title, tag, body }) => (
                  <article className="mp-card mp-build-card" key={title}>
                    <div className="mp-card-icon"><Icon name={icon} /></div>
                    <h3 className="mp-h3">{title}</h3>
                    <div className="mp-card-tag">{tag}</div>
                    <p className="mp-card-body">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mp-section mp-stack">
            <div className="mp-measure">
              <div className="mp-eyebrow">The Vehicle Family</div>
              <h2 className="mp-h2">One platform, three payload classes</h2>
            </div>
            <div className="mp-vehicle-grid">
              {VEHICLES.map(({ name, status, active, role, builtFor }) => (
                <article className={`mp-card mp-vehicle-card${active ? ' is-active' : ''}`} key={name}>
                  <header className="mp-vehicle-head">
                    <span className="mp-vehicle-name">{name}</span>
                    <span className={`mp-pill${active ? ' is-active' : ''}`}>{status}</span>
                  </header>
                  <div className="mp-rule" />
                  <div className="mp-card-kicker">Role</div>
                  <div className="mp-vehicle-role">{role}</div>
                  <div className="mp-card-kicker mp-card-kicker-spaced">Built for</div>
                  <p className="mp-card-body">{builtFor}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mp-band">
            <div className="mp-band-inner">
              <div className="mp-measure">
                <div className="mp-eyebrow">The Roadmap</div>
                <h2 className="mp-h2">How we get there</h2>
                <p className="mp-body">
                  We&apos;re not pretending a small team in Delhi ships a reusable orbital rocket
                  on day one. So we&apos;re sequencing it honestly:
                </p>
              </div>
              <ol className="mp-roadmap">
                {ROADMAP.map(({ num, title, body }) => (
                  <li className="mp-step" key={num}>
                    <span className="mp-step-node" aria-hidden="true" />
                    <span className="mp-step-num">{num}</span>
                    <h3 className="mp-h3">{title}</h3>
                    <p className="mp-card-body">{body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="mp-band mp-cta" id="launch">
            <div className="mp-cta-inner">
              <div className="mp-eyebrow">Join The Mission</div>
              <h2 className="mp-h2 mp-cta-title">There&apos;s a place for you in this</h2>
              <p className="mp-body">
                Whether you&apos;re an engineer who wants to work the hard problems, a student who
                wants to learn by watching it happen in real time, or an operator who needs a
                smallsat in orbit for less — there&apos;s a place for you in this.
              </p>
              <div className="mp-cta-actions">
                <Link className="mp-btn mp-btn-primary" to="/#ask">Launch With Us</Link>
                <Link className="mp-btn mp-btn-ghost" to="/#contact">Join The Community →</Link>
              </div>
            </div>
          </section>

          <section className="mp-section mp-wont">
            <h2 className="mp-wont-title">What we won&apos;t do</h2>
            <div className="mp-wont-list">
              {COMMITMENTS.map((line) => <p key={line}>{line}</p>)}
            </div>
          </section>

        </main>
      </div>
      <Footer />
    </>
  );
}
