import React from 'react';
import { motion } from 'framer-motion';
import './Facilities.css';

const features = [
  { icon: '📚', title: 'Library', desc: 'Comprehensive medical texts and resources.' },
  { icon: '🔬', title: 'Laboratory', desc: 'Fully equipped for rigorous practicals.' },
  { icon: '🧪', title: 'Practical', desc: 'Hands-on experience in electro homeopathy.' },
  { icon: '🩺', title: 'Medical Camp', desc: 'Community outreach and real-world practice.' },
  { icon: '🌿', title: 'Botanical Tours', desc: 'Special arrangements to study medicinal plants.' },
  { icon: '⏰', title: '24 Hours Guidance', desc: 'Continuous support from our experts.' },
  { icon: '💻', title: 'Flexibility', desc: 'Both Online & Offline Classes Available.' },
];

// Duplicate the array to create a seamless infinite loop
const duplicatedFeatures = [...features, ...features];

const Facilities = () => {
  return (
    <section className="facilities-section" id="facilities">
      <div className="container" style={{ maxWidth: '100%', padding: '0 1rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Facilities</h2>
          <p className="section-subtitle">
            We provide a conducive environment equipped with all the essentials for an 
            excellent educational journey.
          </p>
        </motion.div>

        <div className="marquee-container">
          <motion.div 
            className="marquee-track"
            animate={{
              x: ['0%', '-50%'] 
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 35, // Smooth scrolling speed
                ease: 'linear',
              },
            }}
          >
            {duplicatedFeatures.map((item, index) => (
              <motion.div 
                key={`${item.title}-${index}`} 
                className="facility-item glass-panel"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="facility-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
