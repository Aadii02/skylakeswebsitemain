import React from 'react';


export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
    <div className="footer-brand">
      <div className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="SKYLX Logo" style={{ height: '40px', objectFit: 'contain' }} loading="lazy" decoding="async" onError={(e) => { e.target.style.display = 'none'; document.getElementById('footer-fallback-text').style.display = 'block'; }} />
        <span id="footer-fallback-text" style={{ display: 'none', fontSize: '1.2rem' }}>SKYLX AeroSpace</span>
      </div>
      <p className="footer-tagline">Reaching Further. Building Smarter.<br/>India's commercial space future starts here.</p>
      <div className="footer-social">
        <a href="mailto:contact@skylakes.space" className="social-btn" aria-label="Email SKYLX">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2"></rect>
            <polyline points="3,7 12,13 21,7"></polyline>
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/skylakes-aerospace/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="SKYLX on LinkedIn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a href="https://www.instagram.com/skylx.space/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="SKYLX on Instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37a4 4 0 1 1-1.17-2.83A4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a href="http://www.youtube.com/@skylakes.space02" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="SKYLX on YouTube">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="6" width="20" height="12" rx="3" ry="3"></rect>
            <polygon points="10,9 16,12 10,15"></polygon>
          </svg>
        </a>
      </div>
    </div>
    <div>
      <div className="footer-col-title">Company</div>
      <ul className="footer-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="mailto:contact@skylakes.space?subject=Career%20Inquiry%20at%20SKYLX">Careers</a></li>
        <li><a href="mailto:contact@skylakes.space?subject=Press%20Inquiry%20at%20SKYLX">Press</a></li>
        <li><a href="mailto:contact@skylakes.space?subject=Investor%20Relations%20at%20SKYLX">Investors</a></li>
      </ul>
    </div>
    <div>
      <div className="footer-col-title">Technology</div>
      <ul className="footer-links">
        <li><a href="#vehicles">Rocket Systems</a></li>
        <li><a href="#vehicles">Payloads</a></li>
        <li><a href="#tech">Ground Systems</a></li>
        <li><a href="#tech">R&amp;D</a></li>
      </ul>
    </div>
    <div>
      <div className="footer-col-title">About</div>
      <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: '1.75' }}>SKYLX AeroSpace is pioneering India's private space revolution — building the rockets that will carry India's ambitions to orbit and beyond.</p>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="footer-copy">© 2026 SKYLX AeroSpace Pvt. Ltd. All rights reserved.</div>
    <div className="footer-made">Made in <span>India 🇮🇳</span> for the Universe</div>
  </div>
    </footer>
  );
}
