import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Affiliated from CMEH Academy (JSR)
          </motion.div>
          <h1>Build your future in <span>Electro Homeopathy</span></h1>
          <p className="hero-subtitle">
            Join us today at C.E.H Medical Institute, Chas, and excel under expert guidance and modern facilities.
          </p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a href="#courses" className="btn btn-primary">Explore Courses</a>
            <a href="#contact" className="btn btn-secondary">Contact Us</a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image extreme-glass"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <img src="/hero_image.png" alt="C.E.H Medical Institute" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
