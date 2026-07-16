import React, { useMemo, useState } from 'react';
import StarsBackground from '../components/StarsBackground';
import Footer from '../components/Footer';
import tools from '../data/tools';
import './ToolsPage.css';

/* Abstract per-discipline HUD thumbnails (no external assets). */
function ToolThumb({ kind }) {
  const common = {
    viewBox: '0 0 340 172',
    width: '100%',
    height: '100%',
    preserveAspectRatio: 'xMidYMid slice',
    className: 'tools-thumb-svg',
    'aria-hidden': true,
  };
  const mono = { fontFamily: 'Montserrat, monospace', fontSize: 11, letterSpacing: '0.06em' };
  const accent = 'var(--accent)';
  const accentHi = 'var(--accent2)';
  const amber = 'var(--tools-amber)';
  const dim = 'var(--muted)';

  if (kind === 'propulsion')
    return (
      <svg {...common}>
        <g stroke={accent} fill="none" strokeWidth="1.4" opacity=".9">
          <path d="M150 42 h44 l-6 26 l30 20 l-30 20 l6 26 h-44 z" fill="rgba(96,165,250,.06)" />
          <line x1="150" y1="42" x2="150" y2="130" />
        </g>
        <path d="M224 78 l26 8 M224 86 l30 0 M224 94 l26 -8" stroke={amber} strokeWidth="1.2" fill="none" opacity=".85" />
        <text x="24" y="40" fill={accentHi} {...mono}>Pc = 8.2 MPa</text>
        <text x="24" y="58" fill={dim} {...mono}>Isp 311 s</text>
        <text x="24" y="132" fill={dim} {...mono}>O/F 2.56</text>
        <circle cx="27" cy="128" r="3" fill="var(--tools-live)" />
        <path d="M14 150 h312" stroke="rgba(148,163,184,.2)" />
      </svg>
    );
  if (kind === 'avionics')
    return (
      <svg {...common}>
        <path d="M24 148 C120 40 210 30 320 96" stroke="rgba(96,165,250,.15)" strokeWidth="10" fill="none" />
        <path d="M24 148 C120 40 210 30 320 96" stroke={accent} strokeWidth="1.6" fill="none" />
        <circle cx="176" cy="52" r="4" fill={amber} />
        <line x1="176" y1="52" x2="176" y2="30" stroke={dim} strokeDasharray="3 3" />
        <text x="168" y="34" textAnchor="end" fill={dim} {...mono}>apogee</text>
        <text x="24" y="40" fill={accentHi} {...mono}>Δv budget</text>
      </svg>
    );
  if (kind === 'structures')
    return (
      <svg {...common}>
        <g stroke={accent} strokeWidth="1.2" fill="none" opacity=".85">
          <path d="M130 30 h80 v112 h-80 z" />
          <path d="M130 30 l80 112 M210 30 l-80 112 M130 86 h80 M170 30 v112" />
        </g>
        <path d="M170 12 v14 M164 20 l6 6 l6 -6" stroke={amber} strokeWidth="1.4" fill="none" />
        <text x="24" y="40" fill={accentHi} {...mono}>MoS +1.4</text>
      </svg>
    );
  return (
    <svg {...common}>
      <g fill="none" strokeWidth="6">
        <circle cx="170" cy="88" r="18" stroke={amber} />
        <circle cx="170" cy="88" r="34" stroke="rgba(245,183,74,.55)" />
        <circle cx="170" cy="88" r="50" stroke="rgba(96,165,250,.5)" />
        <circle cx="170" cy="88" r="66" stroke="rgba(96,165,250,.22)" />
      </g>
      <text x="24" y="40" fill={accentHi} {...mono}>TPS 1650 K</text>
    </svg>
  );
}

function StatusBadge({ status }) {
  const map = {
    Live: { cls: 'live', label: 'LIVE', dot: true },
    Beta: { cls: 'beta', label: 'BETA', dot: false },
    'Coming Soon': { cls: 'soon', label: 'COMING SOON', dot: false },
  };
  const s = map[status] || map['Coming Soon'];
  return (
    <span className={`tools-badge tools-badge--${s.cls}`}>
      {s.dot && <span className="tools-badge-dot" />}
      {s.label}
    </span>
  );
}

function ToolCard({ tool }) {
  const launchable = tool.status === 'Live' || tool.status === 'Beta';
  const hasScreenshot = typeof tool.thumbnail === 'string' && tool.thumbnail.startsWith('/');
  return (
    <article
      className={`tools-card${launchable ? '' : ' tools-card--soon'}`}
      aria-label={`${tool.name} — ${tool.status}. ${tool.description}`}
    >
      <div className="tools-card-media">
        <div className="tools-card-grid" aria-hidden="true" />
        {hasScreenshot ? (
          <img className="tools-thumb-img" src={tool.thumbnail} alt={`${tool.name} interface preview`} loading="lazy" />
        ) : (
          <ToolThumb kind={tool.thumbnail} />
        )}
        <div className="tools-card-badge">
          <StatusBadge status={tool.status} />
        </div>
      </div>
      <div className="tools-card-body">
        <div className="tools-tags">
          {tool.tags.map((t) => (
            <span key={t} className="tools-tag">{t}</span>
          ))}
        </div>
        <h2 className="tools-card-name">{tool.name}</h2>
        <p className="tools-card-desc">{tool.description}</p>
        {launchable ? (
          <a
            className="btn-primary tools-launch"
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Launch ${tool.name} (opens in a new tab)`}
          >
            Launch
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M7 17L17 7M17 7H9M17 7v8" />
            </svg>
          </a>
        ) : (
          <span className="tools-launch tools-launch--disabled" aria-disabled="true">
            In Development
          </span>
        )}
      </div>
    </article>
  );
}

export default function ToolsPage() {
  const [filter, setFilter] = useState('All');

  const tags = useMemo(() => {
    const set = [];
    tools.forEach((t) => t.tags.forEach((g) => !set.includes(g) && set.push(g)));
    return set;
  }, []);

  const visible = useMemo(
    () => tools.filter((t) => filter === 'All' || t.tags.includes(filter)),
    [filter]
  );

  const liveCount = tools.filter((t) => t.status === 'Live').length;
  const soonCount = tools.length - liveCount;

  return (
    <>
      <StarsBackground />
      <div className="tools-page">
        <div className="tools-bg-grid" aria-hidden="true" />
        <div className="tools-bg-glow" aria-hidden="true" />

        <main className="tools-main">
          <section className="tools-hero reveal">
            <div className="section-label tools-eyebrow">
              <span className="tools-eyebrow-tick" />
              SKYLX // Engineering Tools
            </div>
            <h1 className="section-title tools-title">Engineering Tools</h1>
            <p className="tools-subhead">
              Real engineering tools we build inside SkyLakes to design our launch vehicles — now
              opened up for anyone to explore. Modeled against published data, tuned by our own
              engineers.
            </p>
            <div className="tools-stats">
              <div><span className="tools-stat-n">{liveCount}</span><span className="tools-stat-l">Live Now</span></div>
              <span className="tools-stat-sep" />
              <div><span className="tools-stat-n">{soonCount}</span><span className="tools-stat-l">In Development</span></div>
              <span className="tools-stat-sep" />
              <div><span className="tools-stat-n">{tags.length}</span><span className="tools-stat-l">Disciplines</span></div>
            </div>
          </section>

          <div className="tools-filters reveal" role="tablist" aria-label="Filter tools by discipline">
            {['All', ...tags].map((label) => (
              <button
                key={label}
                type="button"
                role="tab"
                aria-selected={filter === label}
                className={`tools-chip${filter === label ? ' is-active' : ''}`}
                onClick={() => setFilter(label)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="tools-grid reveal">
            {visible.map((t) => (
              <ToolCard key={t.name} tool={t} />
            ))}
          </div>
          {visible.length === 0 && (
            <p className="tools-empty">// No tools in this discipline yet</p>
          )}

          <p className="tools-disclaimer reveal">
            These are educational and internal engineering tools intended for exploration and
            early-stage analysis. They are <strong>not certified design software</strong> and must
            not be used as the sole basis for flight-hardware decisions.
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
}
