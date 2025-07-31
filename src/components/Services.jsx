import React from 'react';
import './Services.css';

const services = [
  {
    icon: '📟',
    title: 'Embedded Systems Design',
    subtitle: 'End-to-end embedded systems designing and development.',
    features: [
      'CAD designing & prototyping',
      'Firmware development',
      'Real-time & low-power systems',
      'Mobile application support'
    ],
    link: '#',
  },
  {
    icon: '⚙️',
    title: 'Mechanical Systems Design',
    subtitle: 'Robust mechanical solutions from concept to manufacturing.',
    features: [
      'CAD modeling & 3D printing',
      'Prototype development',
      'Manufacturing optimization',
      'Structural analysis & testing'
    ],
    link: '#',
  },
  {
    icon: '📲',
    title: 'Application Development',
    subtitle: 'Cross-platform mobile and desktop applications for modern needs.',
    features: [
      'Mobile app development (iOS/Android)',
      'Desktop application development',
      'Cross-platform solutions',
      'User experience optimization'
    ],
    link: '#',
  },
  // {
  //   icon: '🧠',
  //   title: 'AI Powered Solutions',
  //   subtitle: 'Robust and efficient, hardware and software solutions for real-world applications.',
  //   features: [
  //     'Research & Development',
  //     'Proof of Concept',
  //     'Iterative Refinement'
  //   ],
  //   link: '#',
  // },
];

const Services = () => (
  <section id="services" className="services-section">
    <div className="services-header">
      <span className="services-badge">Services</span>
      <h2 className="services-title">What I Deliver</h2>
      <p className="services-subtitle">
        Robust and efficient, hardware and software solutions for real-world applications.
      </p>
    </div>
    <div className="services-cards">
      {services.map((service, idx) => (
        <div className="service-card" key={idx}>
          <div className="service-icon">
            {service.icon}
            <h1 className="service-name">{service.title}</h1>
          </div>
          <p className="service-desc">{service.subtitle}</p>
          <ul className="service-features">
            {service.features.map((f, i) => (
              <li key={i}>&#8594; {f}</li>
            ))}
          </ul>
          {/* <a href={service.link} className="service-link">Learn More &rarr;</a> */}
        </div>
      ))}
    </div>
  </section>
);

export default Services; 