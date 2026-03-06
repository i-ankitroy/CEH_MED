import React, { useEffect, useState } from 'react';
import './Courses.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/courses')
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching courses", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="courses-section" id="courses">
      <div className="container">
        <h2 className="section-title">Programs Offered</h2>
        <p className="section-subtitle">
          Comprehensive electro homeopathy courses designed to build your medical career.
        </p>

        {loading ? (
          <div className="loading">Loading courses...</div>
        ) : (
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div 
                key={course.id} 
                className={`course-card glass-panel ${activeIndex === index ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                <div className="course-header">
                  <h3>{course.name}</h3>
                </div>
                <div className="course-body">
                  <p className="course-desc">{course.description}</p>
                  <ul className="course-details">
                    <li>
                      <strong>Duration:</strong> {course.duration}
                    </li>
                    <li>
                      <strong>Eligibility:</strong> {course.eligibility}
                    </li>
                    <li>
                      <strong>Fee Estimate:</strong> <span className="text-highlight">{course.fee_estimate}</span>
                    </li>
                  </ul>
                  <a href="#contact" className="btn btn-primary btn-sm mt-3">Enquire Now</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
