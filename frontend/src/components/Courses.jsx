import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Courses.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8000/api/courses')
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Programs Offered</h2>
          <p className="section-subtitle">
            Comprehensive electro homeopathy courses designed to build your medical career.
          </p>
        </motion.div>

        {loading ? (
          <div className="loading">Loading courses...</div>
        ) : (
          <div className="courses-grid">
            {courses.map((course, index) => (
              <motion.div 
                key={course.id} 
                className={`course-card glass-panel ${activeIndex === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
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
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
