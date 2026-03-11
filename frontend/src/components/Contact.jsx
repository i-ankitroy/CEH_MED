import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch(err => {
        setStatus('error');
        console.error(err);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contact & Admission</h2>
          <p className="section-subtitle">
            Ready to start your journey in Electro Homeopathy? Reach out to us today.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 style={{ marginBottom: '2rem' }}>Get in Touch</h3>
            
            <div className="contact-info-block">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h4>Phone Numbers</h4>
                <p>+91 93087 95335</p>
                <p>+91 93044 75364</p>
              </div>
            </div>

            <div className="contact-info-block">
              <div className="contact-icon">🏢</div>
              <div className="contact-details">
                <h4>Office Location</h4>
                <p>Electro Homoeo Health Care</p>
                <p>Telidih road, Chas (Near Kushwaha Bhawan)</p>
              </div>
            </div>

            <div className="contact-info-block" style={{ marginBottom: 0 }}>
              <div className="contact-icon">🏫</div>
              <div className="contact-details">
                <h4>Institute Location</h4>
                <p>Near Kali Mandir</p>
                <p>Bartand, Narayanpur, Telidih Road, Chas, Bokaro</p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form" 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <h3 style={{ marginBottom: '2rem' }}>Admission Enquiry</h3>
            {status === 'success' && <div className="alert-success">Message sent successfully! We will contact you soon.</div>}
            {status === 'error' && <div className="alert-error">Failed to send message. Please try again.</div>}
            
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message / Queries</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">Submit Enquiry</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
