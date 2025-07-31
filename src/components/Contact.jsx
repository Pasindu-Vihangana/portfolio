import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-preview">
      <div className="contact-container">
        <div className="section-header">
          <span className="contact-badge">Get In Touch</span>
          <h2 className="section-title">Ready to Start Your Project?</h2>
          <p className="section-subtitle">Let's discuss how I can help bring your ideas to life</p>
        </div>
        
        <div className="contact-preview-content">
          <div className="contact-preview-info">
            <h3>Let's Connect</h3>
            
            <div className="contact-preview-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Colombo, Sri Lanka</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>pasindu@example.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-preview-action">
            <h3>Start a Conversation</h3>
            <p>
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <Link to="/contact" className="btn btn-primary contact-btn">
              Send Message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 