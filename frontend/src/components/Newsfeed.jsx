import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Newsfeed.css';

const Newsfeed = ({ isOpen }) => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const announcements = [
    { id: 1, text: "🚨 New Batch Starts: July 15, 2026. Enroll Now!", isUrgent: true },
    { id: 2, text: "📅 Important Notice: Semester exams postponed to August." },
    { id: 3, text: "🎓 Congratulations to our top graduates of 2025!" },
    { id: 4, text: "🩺 Upcoming Free Health Camp Drive by CEH MED on Campus next Friday." },
    { id: 5, text: "📢 Guest Lecture by Dr. Sharma this Thursday in Hall B." }
  ];

  // Triplicate the items so the scroll logic can seamlessly reset without the user noticing.
  const displayItems = [...announcements, ...announcements, ...announcements];

  useEffect(() => {
    let animationFrameId;

    const scrollStep = () => {
      const el = scrollRef.current;
      if (el && isOpen && !isHovered) {
        el.scrollTop += 0.5; // slow speed auto-scroll

        // Seamless reset logic: if we scrolled past the first duplicate chunk, reset to top
        if (el.scrollTop >= el.scrollHeight / 3) {
           el.scrollTop = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isOpen, isHovered]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="newsfeed-dropdown glass-panel"
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className="newsfeed-dropdown-header">
            <h4>Live Updates <span className="live-fade-dot"></span></h4>
          </div>
          
          <div 
            className="newsfeed-dropdown-content"
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {displayItems.map((item, i) => (
              <div key={`${item.id}-${i}`} className="dropdown-news-item">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  {item.isUrgent && <span className="urgent-badge">Urgent</span>}
                  <span className="dropdown-news-text">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Newsfeed;
