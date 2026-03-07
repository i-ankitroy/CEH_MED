import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  return (
    <motion.nav 
      className="navbar glass-panel"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
    >
      <div className="container nav-content">
        <a href="#" className="logo">
          <span className="logo-abbr">C.E.H</span>
          <span className="logo-text">Medical Institute</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#faculty">Faculty</a></li>
          <li><a href="#facilities">Facilities</a></li>
          <li><a href="#contact" className="btn btn-primary nav-btn">Admission</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
