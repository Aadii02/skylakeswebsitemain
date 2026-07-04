import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars -- motion is used as <motion.*> JSX
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

  const closeAll = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`nav-shell ${scrolled ? 'nav-scrolled' : ''}`}>
      <nav className="nav-pill">
        <Link to="/" className="nav-logo" onClick={closeAll}>
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="SKYLX Logo"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onError={(e) => { e.target.style.display = 'none'; document.getElementById('nav-fallback-text').style.display = 'block'; }} />
          <span id="nav-fallback-text" style={{ display: 'none' }}>SKYLX</span>
        </Link>

        <ul className="nav-links">
          <li><Link className="nav-link" to="/#mission" onClick={closeAll}>Mission</Link></li>
          <li><Link className={`nav-link ${isActive('/vehicles') ? 'active' : ''}`} to="/vehicles" onClick={closeAll}>Vehicles</Link></li>
          <li
            className="nav-dropdown"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              type="button"
              onClick={() => setDropdownOpen((current) => !current)}
              aria-expanded={dropdownOpen}
              className={`nav-link nav-products-trigger ${location.pathname.startsWith('/products') ? 'active' : ''}`}
            >
              Products
              <svg className={`nav-caret ${dropdownOpen ? 'flipped' : ''}`} viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                >
                  <li><Link to="/vehicles" onClick={closeAll}>Model Rockets</Link></li>
                  <li><Link to="/products/substems" onClick={closeAll}>Substems</Link></li>
                  <li><a href="https://shop.skylakes.io" target="_blank" rel="noopener noreferrer" onClick={closeAll}>Shop</a></li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li><Link className="nav-link" to="/#tech" onClick={closeAll}>Technology</Link></li>
          <li><Link className="nav-link" to="/#about" onClick={closeAll}>About Us</Link></li>
          <li><Link className="nav-link" to="/#contact" onClick={closeAll}>Contact</Link></li>
          <li><Link className={`nav-link ${location.pathname.startsWith('/blog') ? 'active' : ''}`} to="/blog" onClick={closeAll}>Blog</Link></li>
        </ul>

        <div className="nav-right">
          <Link to="/#contact" className="btn-primary nav-cta" onClick={closeAll}>
            Launch With Us
          </Link>
          <button
            className={`nav-hamburger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile-panel"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <ul className="nav-mobile-links">
              {[
                { to: '/#mission', label: 'Mission' },
                { to: '/vehicles', label: 'Vehicles' },
                { to: '/#tech', label: 'Technology' },
                { to: '/#about', label: 'About Us' },
                { to: '/#contact', label: 'Contact' },
                { to: '/blog', label: 'Blog' },
              ].map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.25 }}
                >
                  <Link to={item.to} onClick={closeAll}>{item.label}</Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.25 }}
              >
                <span className="nav-mobile-sub-label">Products</span>
                <ul className="nav-mobile-sublinks">
                  <li><Link to="/vehicles" onClick={closeAll}>Model Rockets</Link></li>
                  <li><Link to="/products/substems" onClick={closeAll}>Substems</Link></li>
                  <li><a href="https://shop.skylakes.io" target="_blank" rel="noopener noreferrer" onClick={closeAll}>Shop</a></li>
                </ul>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.25 }}
                className="nav-mobile-cta-row"
              >
                <Link to="/#contact" className="btn-primary" onClick={closeAll}>Launch With Us</Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
