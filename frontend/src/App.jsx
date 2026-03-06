import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Facilities from './components/Facilities';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Courses />
      <Faculty />
      <Facilities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
