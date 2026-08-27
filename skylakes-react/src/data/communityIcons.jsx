import React from 'react';

// One hand-drawn icon set shared by the community tiles in Contact.jsx and the
// social buttons in Footer.jsx, so a new channel only needs adding in one
// place and no icon library is pulled in. Icons carry no width/height —
// callers size them in CSS (.social-square svg / .social-btn svg).
export const COMMUNITY_ICONS = {
  discord: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.317 4.369A19.79 19.79 0 0 0 15.885 3c-.19.34-.41.8-.567 1.163a18.3 18.3 0 0 0-5.44 0A12.6 12.6 0 0 0 9.3 3a19.7 19.7 0 0 0-4.435 1.372C2.05 8.57 1.29 12.66 1.67 16.694A19.9 19.9 0 0 0 7.7 19.74a14.6 14.6 0 0 0 1.29-2.104 12.9 12.9 0 0 1-2.032-.98c.171-.126.338-.257.5-.392a14.2 14.2 0 0 0 12.084 0c.164.14.331.271.5.392-.647.384-1.33.712-2.036.982.373.729.804 1.428 1.29 2.102a19.8 19.8 0 0 0 6.032-3.046c.443-4.678-.764-8.73-3.011-12.325ZM8.68 14.234c-1.183 0-2.157-1.086-2.157-2.42s.955-2.421 2.157-2.421 2.176 1.096 2.156 2.42c0 1.335-.955 2.421-2.156 2.421Zm6.64 0c-1.183 0-2.157-1.086-2.157-2.42s.955-2.421 2.157-2.421 2.176 1.096 2.156 2.42c0 1.335-.954 2.421-2.156 2.421Z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2A9.9 9.9 0 0 0 2.15 11.9c0 1.746.457 3.45 1.324 4.95L2.07 22l5.29-1.383a9.86 9.86 0 0 0 4.68 1.192h.004a9.9 9.9 0 0 0 9.89-9.9 9.84 9.84 0 0 0-2.896-7A9.82 9.82 0 0 0 12.04 2Zm0 18.06h-.003a8.2 8.2 0 0 1-4.18-1.145l-.3-.178-3.14.821.838-3.06-.195-.314a8.19 8.19 0 0 1-1.255-4.374 8.22 8.22 0 0 1 14.03-5.81 8.16 8.16 0 0 1 2.41 5.816 8.22 8.22 0 0 1-8.205 8.244Zm4.5-6.172c-.246-.124-1.458-.72-1.684-.802-.226-.083-.39-.124-.555.123-.164.247-.636.802-.78.967-.143.165-.287.186-.533.062-.246-.124-1.04-.383-1.982-1.222-.733-.653-1.228-1.46-1.372-1.706-.143-.247-.015-.38.108-.503.111-.11.246-.288.37-.432.123-.145.164-.248.246-.413.083-.165.041-.31-.02-.433-.062-.124-.555-1.338-.76-1.832-.2-.48-.404-.415-.555-.423l-.472-.008a.91.91 0 0 0-.657.31c-.226.246-.862.842-.862 2.055 0 1.212.883 2.383 1.006 2.548.123.165 1.737 2.652 4.208 3.72.588.254 1.047.405 1.405.518.59.188 1.127.161 1.552.098.473-.07 1.458-.596 1.663-1.171.205-.576.205-1.07.144-1.172-.061-.104-.226-.165-.472-.289Z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3,7 12,13 21,7" />
    </svg>
  ),
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
  youtube: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="6" width="20" height="12" rx="3" ry="3" />
      <polygon points="10,9 16,12 10,15" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2h3.866l-8.44 9.648L23 22h-6.828l-5.337-6.959L4.94 22H1.072l8.845-10.116L1 2h6.99l4.79 6.255L18.244 2Zm-1.062 18h2.02L5.89 3.95H3.73L17.182 20Z" />
    </svg>
  ),
};

// Community and social channels, in the order they are shown. `label` titles
// the tiles in the Contact section; `aria` labels the icon-only footer buttons.
export const COMMUNITY_CHANNELS = [
  { key: 'discord', label: 'Discord', aria: 'SKYLX on Discord', href: 'https://discord.gg/dt8ePdz6v' },
  { key: 'whatsapp', label: 'WhatsApp', aria: 'SKYLX on WhatsApp', href: 'https://chat.whatsapp.com/H6s3o0h0On4DQHoVWTp8GM' },
  { key: 'email', label: 'Email', aria: 'Email SKYLX', href: 'mailto:contact@skylakes.space' },
  { key: 'linkedin', label: 'LinkedIn', aria: 'SKYLX on LinkedIn', href: 'https://www.linkedin.com/company/skylakes-aerospace/' },
  { key: 'instagram', label: 'Instagram', aria: 'SKYLX on Instagram', href: 'https://www.instagram.com/skylx.space?igsh=bjBwMXgzdm84azg0' },
  { key: 'youtube', label: 'YouTube', aria: 'SKYLX on YouTube', href: 'http://www.youtube.com/@skylakes.space02' },
  { key: 'twitter', label: 'X.com', aria: 'SKYLX on X.com', href: 'https://x.com/Skylakes_space' },
].map((channel) => ({ ...channel, icon: COMMUNITY_ICONS[channel.key] }));

// The Contact tiles skip YouTube so the grid stays an even 3 x 2.
export const TILE_CHANNELS = COMMUNITY_CHANNELS.filter((c) => c.key !== 'youtube');
