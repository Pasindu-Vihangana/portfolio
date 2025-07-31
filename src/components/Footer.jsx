import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content new-footer-grid">

          <div className="footer-col">
            <a href="./#services" ><h3 className="footer-title">👨🏻‍💻 Services</h3></a>
            <ul className="footer-list">
              <a href="./contact"><li>Embedded Systems Designing</li></a>
              <a href="./contact"><li>Mechanical Systems Designing</li></a>
              <a href="./contact"><li>Application Development</li></a>
            </ul>
          </div>

          <div className="footer-col">
            <a href="./#expertise"><h3 className="footer-title">🧠 Expertise</h3></a>
            <a href="./projects"><h3 className="footer-title">⚙️ Projects</h3></a>
            <a href="./certifications"><h3 className="footer-title">🏆 Certifications</h3></a>
            <a href="./about"><h3 className="footer-title">📒 About Me</h3></a>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Connect</h3>
            <ul className="footer-list">
              <li><FaLinkedin size={32} color="#0077b5" /> <a href="https://www.linkedin.com/in/pasindu-vihangana/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><FaGithub size={32} color="#333" /> <a href="https://www.linkedin.com/in/pasindu-vihangana/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><SiGmail size={32} color="#D14836" /> <a href="mailto:pasi1028@gmail.com">Schedule a Meeting</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Start a Project</h3>
            <p className="footer-desc">Let's create your next big idea.</p>
            <a href="./contact" className="footer-cta-btn">Get in Touch <span className="footer-cta-arrow">→</span></a>
          </div>

        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Pasindu Vihangana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 