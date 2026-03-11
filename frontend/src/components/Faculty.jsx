import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Faculty.css';

const Faculty = () => {
  const [faculty, setFaculty] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8000/api/faculty')
      .then(res => res.json())
      .then(data => setFaculty(data))
      .catch(err => console.error(err));
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % faculty.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + faculty.length) % faculty.length);
  };

  // Calculate position logic for 3D effect
  const getCardPosition = (index) => {
    const diff = (index - currentIndex + faculty.length) % faculty.length;
    
    // Active card
    if (diff === 0) return { x: '0%', z: 0, scale: 1, zIndex: 10, opacity: 1, rotateY: 0 };
    // Right card 1
    if (diff === 1) return { x: '70%', z: -100, scale: 0.8, zIndex: 9, opacity: 0.8, rotateY: -25 };
    // Right card 2
    if (diff === 2) return { x: '120%', z: -250, scale: 0.6, zIndex: 8, opacity: 0.4, rotateY: -45 };
    // Left card 1
    if (diff === faculty.length - 1) return { x: '-70%', z: -100, scale: 0.8, zIndex: 9, opacity: 0.8, rotateY: 25 };
    // Left card 2
    if (diff === faculty.length - 2) return { x: '-120%', z: -250, scale: 0.6, zIndex: 8, opacity: 0.4, rotateY: 45 };
    
    // Hidden cards
    return { x: '0%', z: -400, scale: 0.4, zIndex: 0, opacity: 0, rotateY: 0 };
  };

  return (
    <section className="faculty-section" id="faculty">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Director & Faculty</h2>
          <p className="section-subtitle">
            Learn from experienced professionals dedicated to your success in Electro Homeopathy.
          </p>
        </motion.div>

        <motion.div 
          className="director-card glass-panel"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="director-img">
            {/* Using a reliable profile picture placeholder */}
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300" alt="Dr. S.P. Mahatha" />
          </div>
          <div className="director-info">
            <div className="badge">Director</div>
            <h3>Dr. S.P. Mahatha</h3>
            <p><strong>Contact:</strong> 9308795335</p>
            <p className="director-desc">
              Leading the C.E.H Medical Institute with a vision to provide exceptional education 
              and practical training in Electro Homeopathy.
            </p>
          </div>
        </motion.div>

        <motion.h3 
          className="section-title" 
          style={{marginTop: '4rem', fontSize: '2.2rem'}}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          Our Faculty Members
        </motion.h3>
        
        {faculty.length > 0 && (
          <div className="carousel-container">
            <button className="carousel-control prev" onClick={handlePrev}>❮</button>
            
            <div className="carousel-track">
              <AnimatePresence initial={false}>
                {faculty.map((member, index) => {
                  const position = getCardPosition(index);
                  
                  return (
                    <motion.div
                      key={member.id}
                      className={`faculty-card glass-panel ${index === currentIndex ? 'active-member' : ''}`}
                      initial={false}
                      animate={{
                        x: position.x,
                        z: position.z,
                        scale: position.scale,
                        zIndex: position.zIndex,
                        opacity: position.opacity,
                        rotateY: position.rotateY
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 260, 
                        damping: 20,
                        duration: 0.6
                      }}
                      onClick={() => setCurrentIndex(index)}
                      style={{ perspective: 1000 }}
                    >
                      <div className="faculty-avatar">
                        {member.name.charAt(4)}
                      </div>
                      <h4>{member.name}</h4>
                      <p>{member.designation}</p>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            <button className="carousel-control next" onClick={handleNext}>❯</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Faculty;
