import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text animate-fade-in-up">
          <div className="badge">Affiliated from CMEH Academy (JSR)</div>
          <h1>Build your future in <span>Electro Homeopathy</span></h1>
          <p className="hero-subtitle">
            Join us today at C.E.H Medical Institute, Chas, and excel under expert guidance and modern facilities.
          </p>
          <div className="hero-buttons">
            <a href="#courses" className="btn btn-primary">Explore Courses</a>
            <a href="#contact" className="btn btn-secondary">Contact Us</a>
          </div>
        </div>
        <div className="hero-image extreme-glass animate-fade-in-up">
          <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800" alt="Homeopathy Medicine" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
