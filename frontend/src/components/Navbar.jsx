import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass-panel">
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
    </nav>
  );
};

export default Navbar;
