import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars -- motion is used as <motion.*> JSX
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeAll = () => setOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`nav-shell ${scrolled ? 'nav-scrolled' : ''}`}>
      <nav className="nav-pill">
        <ul className="nav-links">
          <li><Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/" onClick={closeAll}>Home</Link></li>
          <li><Link className={`nav-link ${isActive('/mission') ? 'active' : ''}`} to="/mission" onClick={closeAll}>Mission</Link></li>
          <li><Link className={`nav-link ${isActive('/vehicles') ? 'active' : ''}`} to="/vehicles" onClick={closeAll}>Vehicles</Link></li>
          <li><Link className={`nav-link ${isActive('/products') ? 'active' : ''}`} to="/products" onClick={closeAll}>Products</Link></li>
          <li><Link className={`nav-link ${isActive('/tools') ? 'active' : ''}`} to="/tools" onClick={closeAll}>Tools</Link></li>
          <li><Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} to="/about" onClick={closeAll}>About Us</Link></li>
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
                { to: '/', label: 'Home' },
                { to: '/mission', label: 'Mission' },
                { to: '/vehicles', label: 'Vehicles' },
                { to: '/tools', label: 'Tools' },
                { to: '/about', label: 'About Us' },
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
                <Link to="/products" onClick={closeAll}>Products</Link>
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
