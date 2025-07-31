import React from 'react';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import '../App.css';

const AboutPage = () => (
  <div className="App">
    <Header />
    <main>
      <About />
    </main>
    <Footer />
  </div>
);

export default AboutPage; 