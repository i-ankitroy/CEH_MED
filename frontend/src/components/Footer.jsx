import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="container footer-content">
        <motion.div 
          className="footer-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {/* Brand Column */}
          <motion.div className="footer-col brand-col" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <div className="footer-logo">
              <span className="logo-abbr">C.E.H</span>
              <span className="logo-text">Medical Institute</span>
            </div>
            <p className="footer-desc">
              Affiliated from CMEH Academy (JSR). Build your future in Electro Homeopathy with expert guidance and modern facilities in Chas.
            </p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div className="footer-col links-col" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#courses">Courses Offered</a></li>
              <li><a href="#faculty">Our Faculty</a></li>
              <li><a href="#facilities">Campus Facilities</a></li>
            </ul>
          </motion.div>

          {/* Contact Details Column */}
          <motion.div className="footer-col contact-col" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <h4>Contact Us</h4>
            <ul>
              <li>📍 College Road, Chas, Bokaro - 827013</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ admission@cehmed.in</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright Bar */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} C.E.H Medical Institute. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
