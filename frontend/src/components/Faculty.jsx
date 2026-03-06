import React, { useEffect, useState } from 'react';
import './Faculty.css';

const Faculty = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/faculty')
      .then(res => res.json())
      .then(data => setFaculty(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="faculty-section" id="faculty">
      <div className="container">
        <h2 className="section-title">Director & Faculty</h2>
        <p className="section-subtitle">
          Learn from experienced professionals dedicated to your success in Electro Homeopathy.
        </p>

        <div className="director-card glass-panel">
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
        </div>

        <h3 className="sub-heading text-center">Our Faculty Members</h3>
        <div className="faculty-grid">
          {faculty.map(member => (
            <div key={member.id} className="faculty-card glass-panel animate-fade-in-up">
              <div className="faculty-avatar">
                {/* Generative placeholder avatar based on name */}
                {member.name.charAt(4)}
              </div>
              <h4>{member.name}</h4>
              <p>{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
