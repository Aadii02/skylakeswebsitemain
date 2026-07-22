import React from 'react';
import './SocialTiles.css';

// Inline SVGs reuse the same icon set already hand-drawn in Footer.jsx, so the
// tiles stay visually consistent with the rest of the site and add no icon
// library dependency.
const ICONS = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-1.17-2.83A4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2h3.866l-8.44 9.648L23 22h-6.828l-5.337-6.959L4.94 22H1.072l8.845-10.116L1 2h6.99l4.79 6.255L18.244 2Zm-1.062 18h2.02L5.89 3.95H3.73L17.182 20Z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3,7 12,13 21,7" />
    </svg>
  ),
};

const LABELS = {
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
  twitter: 'X / Twitter',
  email: 'Email',
};

// `links` is an array of { platform, href }. Email renders as a mailto: link;
// the rest open in a new tab.
export default function SocialTiles({ links = [], className = '' }) {
  return (
    <div className={`social-tiles ${className}`.trim()}>
      {links.map(({ platform, href }) => {
        const isEmail = platform === 'email';
        const url = isEmail ? `mailto:${href}` : href;
        const label = LABELS[platform] || platform;
        const external = isEmail ? {} : { target: '_blank', rel: 'noopener noreferrer' };
        return (
          <a key={platform} className="social-tile" href={url} aria-label={label} title={label} {...external}>
            {ICONS[platform] || null}
          </a>
        );
      })}
    </div>
  );
}
