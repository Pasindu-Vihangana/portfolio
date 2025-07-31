import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './CertificationsPage.css';
import placeholderImg from '../assets/react.svg';

const featureCertifications = [
  // Placeholder for paper certificates
  {
    title: 'Paper Certificate 1',
    issuer: 'Your Issuer',
    date: 'Year',
    type: 'Paper',
    credentialId: '',
    validationLink: '',
    image: placeholderImg,
    tags: ['Paper'],
    featured: false,
  },
  {
    title: 'Paper Certificate 2',
    issuer: 'Your Issuer',
    date: 'Year',
    type: 'Paper',
    credentialId: '',
    validationLink: '',
    image: placeholderImg,
    tags: ['Paper'],
    featured: false,
  },

  {
    title: 'Paper Certificate 3',
    issuer: 'Your Issuer',
    date: 'Year',
    type: 'Paper',
    credentialId: '',
    validationLink: '',
    image: placeholderImg,
    tags: ['Paper'],
    featured: false,
  },
];

const certifications = [
  {
    title: 'Accelerated Deep Learning with GPU',
    issuer: 'IBM',
    date: 'Jul 2022',
    type: 'Digital',
    credentialId: '6957e2a94a344a72ab7f1ade6e1a6053',
    validationLink: '',
    image: placeholderImg,
    tags: ['Deep Learning', 'GPU', 'Digital'],
    featured: false,
  },
  {
    title: 'Applied Data Science with Python - Level 2',
    issuer: 'IBM',
    date: 'Jul 2022',
    type: 'Digital',
    credentialId: '',
    validationLink: '',
    image: placeholderImg,
    tags: ['Data Science', 'Python', 'Digital'],
    featured: false,
  },
  {
    title: 'Data Visualization with Python',
    issuer: 'IBM',
    date: 'Jul 2022',
    type: 'Digital',
    credentialId: 'a6d42cdf6a224a0493111693d259e14c',
    validationLink: '',
    image: placeholderImg,
    tags: ['Data Visualization', 'Python', 'Digital'],
    featured: false,
  },
  {
    title: 'Deep Learning',
    issuer: 'IBM',
    date: 'Jul 2022',
    type: 'Digital',
    credentialId: '',
    validationLink: '',
    image: placeholderImg,
    tags: ['Deep Learning', 'Python', 'Digital'],
    featured: false,
  },
  {
    title: 'Data Analysis using Python',
    issuer: 'IBM',
    date: 'Jun 2022',
    type: 'Digital',
    credentialId: 'c3869635a4364e74a31397ffaca84da7',
    validationLink: '',
    image: placeholderImg,
    tags: ['Data Analysis', 'Python', 'Digital'],
    featured: false,
  },
  {
    title: 'Deep Learning Essentials',
    issuer: 'IBM',
    date: 'Jun 2022',
    type: 'Digital',
    credentialId: '9c71b47a0694467cbf04ae1cb3aae39f',
    validationLink: '',
    image: placeholderImg,
    tags: ['Deep Learning', 'Python', 'Digital'],
    featured: false,
  },
  {
    title: 'Deep Learning using TensorFlow',
    issuer: 'IBM',
    date: 'Jun 2022',
    type: 'Digital',
    credentialId: 'c57b671a976d466a927edc3b746b57ef',
    validationLink: '',
    image: placeholderImg,
    tags: ['Deep Learning', 'TensorFlow', 'Python', 'Digital'],
    featured: false,
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM',
    date: 'Jun 2022',
    type: 'Digital',
    credentialId: '845749dc36c045ab86a2132e96a46370',
    validationLink: '',
    image: placeholderImg,
    tags: ['Python', 'Data Science', 'Digital'],
    featured: false,
  },
  // Placeholder for paper certificates
  {
    title: 'Paper Certificate',
    issuer: 'Your Issuer',
    date: 'Year',
    type: 'Paper',
    credentialId: '',
    validationLink: '',
    image: placeholderImg,
    tags: ['Paper'],
    featured: false,
  },
];

export default function CertificationsPage() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selected = featureCertifications[selectedIdx];

  return (
    <div className="certifications-page-wrapper">
      <Header />
      <main className="certs-card-grid-wrapper">
      <h2 className="certs-title">Certifications</h2>
        <section className="feature-tile">
          <div className="feature-tile-image">
            <img src={selected.image} alt={selected.title} />
          </div>
          <div className="feature-tile-list no-scroll">
            {featureCertifications.map((cert, idx) => (
              <div
                key={idx}
                className={`feature-tile-title${selectedIdx === idx ? ' active' : ''}`}
                onMouseEnter={() => setSelectedIdx(idx)}
                onFocus={() => setSelectedIdx(idx)}
                tabIndex={0}
              >
                <span className="feature-title-main">{cert.title}</span>
                <span className="feature-title-issuer">{cert.issuer}</span>
                <span className="feature-title-date">{cert.date}</span>
              </div>
            ))}
          </div>
        </section>
        
        <div className="certs-card-grid">
          {certifications.map((cert, idx) => (
            <div className="cert-card" key={idx}>
              <div className="cert-card-img-wrap">
                <img src={cert.image} alt={cert.title} className="cert-card-img" />
                {cert.featured && <span className="cert-card-badge">★</span>}
              </div>
              <div className="cert-card-body">
                <h3 className="cert-card-title">{cert.title}</h3>
                <p className="cert-card-issuer">{cert.issuer}</p>
                <p className="cert-card-date">{cert.date}</p>
                {cert.credentialId && (
                  <p className="cert-card-id">ID: {cert.credentialId}</p>
                )}
                <div className="cert-card-tags">
                  {cert.tags.map((tag, i) => (
                    <span className="cert-card-tag" key={i}>#{tag}</span>
                  ))}
                </div>
                {cert.validationLink && (
                  <a
                    href={cert.validationLink}
                    className="cert-card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Validate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 