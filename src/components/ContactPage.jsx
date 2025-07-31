import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/pasindu-vihangana',
      icon: '📁',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pasindu-vihangana/',
      icon: '💼',
      color: '#0077b5'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/pasindu_vihangana',
      icon: '🐦',
      color: '#1da1f2'
    },
    {
      name: 'Email',
      url: 'mailto:pasindu@example.com',
      icon: '📧',
      color: '#ea4335'
    }
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <section id="contact" className="contact-preview">
          <div className="contact-container">
            <div className="contact-page-header">
              <h1 className="contact-page-title">Let's Work Together</h1>
              <p className="contact-page-subtitle">Ready to bring your ideas to life? Let's discuss your next project</p>
            </div>
            <div className="contact-page-content">
              <div className="contact-page-info">
                <h3>Let's Connect</h3>
                <p>
                  I'm always interested in hearing about new opportunities and exciting projects.
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="contact-page-details">
                  <div className="contact-page-item">
                    <span className="contact-page-icon">📍</span>
                    <div>
                      <h4>Location</h4>
                      <p>Colombo, Sri Lanka</p>
                    </div>
                  </div>
                  <div className="contact-page-item">
                    <span className="contact-page-icon">📧</span>
                    <div>
                      <h4>Email</h4>
                      <p>pasindu@example.com</p>
                    </div>
                  </div>
                  <div className="contact-page-item">
                    <span className="contact-page-icon">📱</span>
                    <div>
                      <h4>Phone</h4>
                      <p>+94 71 234 5678</p>
                    </div>
                  </div>
                </div>
                <div className="contact-page-social">
                  <h4>Follow Me</h4>
                  <div className="contact-page-social-grid">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-page-social-link"
                        style={{ '--social-color': social.color }}
                      >
                        <span className="contact-page-social-icon">{social.icon}</span>
                        <span className="contact-page-social-name">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="contact-page-form">
                <h3>Send a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="contact-page-form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="contact-page-form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="contact-page-form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>
                  <div className="contact-page-form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="contact-page-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage; 