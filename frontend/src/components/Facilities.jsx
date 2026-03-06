import React from 'react';
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

const Facilities = () => {
  return (
    <section className="facilities-section" id="facilities">
      <div className="container">
        <h2 className="section-title">Our Facilities</h2>
        <p className="section-subtitle">
          We provide a conducive environment equipped with all the essentials for an 
          excellent educational journey.
        </p>

        <div className="facilities-grid">
          {features.map((item, index) => (
            <div key={index} className="facility-item glass-panel animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="facility-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
