import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <nav>
      <div className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Link to="/">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="SKYLX Logo"
            style={{ height: '72px', objectFit: 'contain' }}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onError={(e) => { e.target.style.display = 'none'; document.getElementById('nav-fallback-text').style.display = 'block'; }} />
          <span id="nav-fallback-text" style={{ display: 'none' }}>SKYLX</span>
        </Link>
      </div>

      <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>

      <ul className={`nav-links ${open ? 'nav-open' : ''}`}>
        <li><a href="#mission" onClick={() => setOpen(false)}>Mission</a></li>
        <li><Link to="/vehicles" onClick={() => setOpen(false)}>Vehicles</Link></li>
        <li 
          className="nav-dropdown"
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
          style={{ position: 'relative' }}
        >
          <a style={{ cursor: 'pointer' }}>Products</a>
          {dropdownOpen && (
            <ul className="dropdown-menu" style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              backgroundColor: 'var(--dark)',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              minWidth: '180px',
              zIndex: 1000,
              listStyle: 'none',
              padding: '8px 0',
              marginTop: '8px'
            }}>
              <li><Link to="/vehicles" onClick={() => { setOpen(false); setDropdownOpen(false); }} style={{ display: 'block', padding: '10px 16px', color: 'var(--white)', textDecoration: 'none', transition: 'all 0.2s' }}>Model Rockets</Link></li>
              <li><Link to="/products/substems" onClick={() => { setOpen(false); setDropdownOpen(false); }} style={{ display: 'block', padding: '10px 16px', color: 'var(--white)', textDecoration: 'none', transition: 'all 0.2s' }}>Substems</Link></li>
              <li><a href="https://shop.skylakes.io" target="_blank" rel="noopener noreferrer" onClick={() => { setOpen(false); setDropdownOpen(false); }} style={{ display: 'block', padding: '10px 16px', color: 'var(--white)', textDecoration: 'none', transition: 'all 0.2s' }}>Shop</a></li>
            </ul>
          )}
        </li>
        <li><a href="#tech" onClick={() => setOpen(false)}>Technology</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About Us</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        <li><Link to="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
      </ul>

      <a href="#contact" className="btn-primary nav-cta" style={{ fontSize: '0.65rem', padding: '12px 24px' }}>
        Launch With Us
      </a>
    </nav>
  );
}







