import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2><Link to="//" className="logo-link">Pasindu Vihangana</Link></h2>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="//#expertise" className="nav-link" onClick={() => setIsMenuOpen(false)} >Expertise</Link></li>
            <li><Link to="/projects" className="nav-link" onClick={() => setIsMenuOpen(false)} >Projects</Link></li>
            <li><Link to="//#services" className="nav-link" onClick={() => setIsMenuOpen(false)} >Services</Link></li>
            <li><Link to="/certifications" className="nav-link" onClick={() => setIsMenuOpen(false)} >Certifications</Link></li>
            <li><Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)} >About Me</Link></li>
            <li><Link to="/contact" className="nav-link nav-link-highlight">Get in Touch</Link></li>
          </ul>
        </nav>

        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header; 