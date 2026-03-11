import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20, mass: 0.8 } }
  };

  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div className="badge" variants={item}>
            Affiliated from CMEH Academy (JSR)
          </motion.div>
          <motion.h1 variants={item}>
            Build your future in <span>Electro Homeopathy</span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={item}>
            Join us today at C.E.H Medical Institute, Chas, and excel under expert guidance and modern facilities.
          </motion.p>
          <motion.div className="hero-buttons" variants={item}>
            <a href="#courses" className="btn btn-primary">Explore Courses</a>
            <a href="#contact" className="btn btn-secondary">Contact Us</a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-images-container"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          {/* Organic background shapes simulating cutouts */}
          <motion.div 
            className="hero-shape shape-1"
            variants={{
              rest: { rotate: 0, scale: 1 },
              hover: { rotate: 15, scale: 1.05 }
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />

          {/* Main Image with Organic Mask */}
          <motion.div 
            className="hero-main-photo"
            variants={{
              rest: { scale: 0.95 },
              hover: { scale: 1, y: -10 }
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <img src="/hero_image.png" alt="C.E.H Medical Institute" />
          </motion.div>

          {/* Floating Glass Card 1 */}
          <motion.div 
            className="floating-card card-left glass-panel"
            variants={{
              rest: { x: 0, y: 0, rotate: -5 },
              hover: { x: -40, y: -20, rotate: -10 }
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            <div className="card-icon ring-teal">🎓</div>
            <div className="card-text">
              <strong>Premium</strong>
              <span>Education</span>
            </div>
          </motion.div>

          {/* Floating Glass Card 2 */}
          <motion.div 
            className="floating-card card-right glass-panel"
            variants={{
              rest: { x: 0, y: 0, rotate: 5 },
              hover: { x: 40, y: 30, rotate: 12 }
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            <div className="card-icon ring-orange">⭐</div>
            <div className="card-text">
              <strong>10+ Years</strong>
              <span>Excellence</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
