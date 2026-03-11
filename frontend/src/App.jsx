import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy-load below-the-fold sections to defer JS parse cost
const Courses = lazy(() => import('./components/Courses'));
const Faculty = lazy(() => import('./components/Faculty'));
const Facilities = lazy(() => import('./components/Facilities'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <Courses />
        <Faculty />
        <Facilities />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
