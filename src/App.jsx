import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import ProjectsCarousel from './components/ProjectsCarousel';
import Footer from './components/Footer';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import './App.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Services />
        <ProjectsCarousel />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
