import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--primary-dark)', color: 'white', padding: '3rem 0 1.5rem', marginTop: 'auto' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem', marginBottom: '2rem' }}>
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
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', textAlign: 'center', color: '#cbd5e1', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} C.E.H Medical Institute, Chas. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
