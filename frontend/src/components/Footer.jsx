import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{ background: '#0b4d47', color: 'white', padding: '3rem 0 1.5rem', marginTop: 'auto' }}>
      <div className="container">
        <motion.div 
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem', marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>C.E.H Medical Institute</h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Affiliated from CMEH Academy (JSR). Build your future in Electro Homeopathy with expert guidance and modern facilities.
            </p>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="#home" style={{ color: '#cbd5e1' }}>Home</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#courses" style={{ color: '#cbd5e1' }}>Courses</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#faculty" style={{ color: '#cbd5e1' }}>Faculty</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#facilities" style={{ color: '#cbd5e1' }}>Facilities</a></li>
            </ul>
          </div>
        </motion.div>
        <motion.div 
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', textAlign: 'center', color: '#cbd5e1', fontSize: '0.9rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          &copy; {new Date().getFullYear()} C.E.H Medical Institute, Chas. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
