import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Newsfeed from './Newsfeed';
import './Navbar.css';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUpdatesOpen, setIsUpdatesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsUpdatesOpen(false);
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      {/* Invisible overlay to catch clicks on mobile */}
      {isMenuOpen && (
        <div 
          style={{ position: 'fixed', inset: 0, zIndex: 990 }} 
          onClick={() => { setIsMenuOpen(false); setIsUpdatesOpen(false); }}
        />
      )}
      
      <motion.nav 
        ref={navRef}
        className={`navbar glass-panel ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
      >
        <div className="container nav-content">
        <a href="#" className="logo">
          <span className="logo-abbr">C.E.H</span>
          <span className="logo-text">Medical Institute</span>
        </a>

        {/* Mobile menu toggle */}
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#courses" onClick={() => setIsMenuOpen(false)}>Courses</a></li>
          <li><a href="#faculty" onClick={() => setIsMenuOpen(false)}>Faculty</a></li>
          <li><a href="#facilities" onClick={() => setIsMenuOpen(false)}>Facilities</a></li>
          
          <li className="nav-item-relative">
            <button 
              className={`nav-link-btn ${isUpdatesOpen ? 'active' : ''}`}
              onClick={() => setIsUpdatesOpen(!isUpdatesOpen)}
            >
              Updates
              <span className="live-fade-dot-nav"></span>
            </button>
            <Newsfeed isOpen={isUpdatesOpen} />
          </li>

          <li><a href="#contact" className="btn btn-primary nav-btn" onClick={() => setIsMenuOpen(false)}>Admission</a></li>
        </ul>
      </div>
    </motion.nav>
    </>
  );
};

export default Navbar;
