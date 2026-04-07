import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="SKYLX Logo"
          style={{ height: '72px', objectFit: 'contain' }}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          onError={(e) => { e.target.style.display = 'none'; document.getElementById('nav-fallback-text').style.display = 'block'; }} />
        <span id="nav-fallback-text" style={{ display: 'none' }}>SKYLX</span>
      </div>

      <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>

      <ul className={`nav-links ${open ? 'nav-open' : ''}`}>
        <li><a href="#mission" onClick={() => setOpen(false)}>Mission</a></li>
        <li><a href="#vehicles" onClick={() => setOpen(false)}>Vehicles</a></li>
        <li><a href="#vehicles" onClick={() => setOpen(false)}>Products</a></li>
        <li><a href="#tech" onClick={() => setOpen(false)}>Technology</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About Us</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>

      <a href="#contact" className="btn-primary nav-cta" style={{ fontSize: '0.65rem', padding: '12px 24px' }}>
        Launch With Us
      </a>
     
    </nav>
  );
}







