import React, { useState, useEffect } from 'react';
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
    title: 'Deep Learning using TensorFlow',
    issuer: 'IBM',
    date: 'Jun 2022',
    type: 'Digital',
    validationLink: 'https://www.credly.com/badges/4e401794-8b9c-4fdd-8fde-b6c86b7de318/public_url',
    image: 'assets/certifications/deep-learning-using-tensorflow.png',
    tags: ['Deep Learning', 'TensorFlow', 'Autoencoders', 'CNN', 'RNN', 'Deep-learning Networks'],
    featured: false,
  },
  {
    title: 'Accelerated Deep Learning with GPU',
    issuer: 'IBM',
    date: 'Jul 2022',
    type: 'Digital',
    validationLink: 'https://www.credly.com/badges/bc98b1c0-dc5c-4ef2-ae59-181673efb995/public_url',
    image: 'assets/certifications/accelerated-deep-learning-with-gpu.png',
    tags: ['Deep Learning', 'Accelerated Learning', 'Distributed Learning',  'GPU',],
    featured: false,
  },
];

const certifications_level_3 = [
  {
    title: 'Deep Learning using TensorFlow',
    issuer: 'IBM',
    date: 'Jun 2022',
    type: 'Digital',
    validationLink: 'https://www.credly.com/badges/4e401794-8b9c-4fdd-8fde-b6c86b7de318/public_url',
    image: 'assets/certifications/deep-learning-using-tensorflow.png',
    tags: ['Deep Learning', 'TensorFlow', 'Autoencoders', 'CNN', 'RNN', 'Deep-learning Networks'],
    featured: false,
  },
  {
    title: 'Accelerated Deep Learning with GPU',
    issuer: 'IBM',
    date: 'Jul 2022',
    type: 'Digital',
    validationLink: 'https://www.credly.com/badges/bc98b1c0-dc5c-4ef2-ae59-181673efb995/public_url',
    image: 'assets/certifications/accelerated-deep-learning-with-gpu.png',
    tags: ['Deep Learning', 'Accelerated Learning', 'Distributed Learning',  'GPU',],
    featured: false,
  },
];
const certifications_level_2 = [
  {
    title: 'Data Visualization using Python',
    issuer: 'IBM',
    date: 'Jul 2022',
    type: 'Digital',
    validationLink: 'https://www.credly.com/badges/bb95a38a-53b2-42ee-8d8e-cd927077b70b/public_url',
    image: 'assets/certifications/data-visualization-using-python.png',
    tags: ['Data Visualization', 'Python', 'Matplotlib', 'Seaborn'],
    featured: false,
  },
  {
    title: 'Data Analysis using Python',
    issuer: 'IBM',
    date: 'Jun 2022',
    type: 'Digital',
    validationLink: 'https://www.credly.com/badges/0881f14a-735c-4ad4-9571-debbbc495007/public_url',
    image: 'assets/certifications/data-analysis-using-python.png',
    tags: ['Data Analysis', 'Python', 'Jupyter', 'Pandas'],
    featured: false,
  },
  {
    title: 'Deep Learning Essentials',
    issuer: 'IBM',
    date: 'Jun 2022',
    type: 'Digital',
    validationLink: 'https://www.credly.com/badges/6745cf02-fc9f-4fe3-8e33-0e9a4e29fd4a/public_url',
    image: 'assets/certifications/deep-learning-essentials.png',
    tags: ['Data Science', 'Deep Learning', 'Neural Networks', 'CNN'],
    featured: false,
  },
];

const certifications_level_1 = [
  {
    title: 'Python for Data Science',
    issuer: 'IBM',
    date: 'Jun 2022',
    type: 'Digital',
    validationLink: 'https://www.credly.com/badges/ed219eac-f175-4e62-a32c-d6977f2262b6/public_url',
    image: 'assets/certifications/python-for-data-science.png',
    tags: ['Data Science', 'Python', 'Pandas', 'Numpy'],
    featured: false,
  },
  {
    title: 'Applied Data Science with Python - Level 2',
    issuer: 'IBM',
    date: 'Jul 2022',
    type: 'Digital',
    validationLink: 'https://www.credly.com/badges/4474fec6-8995-4802-98dd-92f852e4f8c5/public_url',
    image: 'assets/certifications/applied-data-science-with-python-level-2.png',
    tags: ['Matplotlib', 'Python'],
    featured: false,
  },
  {
    title: 'Deep Learning',
    issuer: 'IBM',
    date: 'Jul 2022',
    type: 'Digital',
    validationLink: 'https://www.credly.com/badges/9a628031-bc76-4111-acd6-74c34b35d0dc/public_url',
    image: 'assets/certifications/deep-learning.png',
    tags: ['Deep Learning', 'TensorFlow', 'Neural Networks'],
    featured: false,
  },
  // // Placeholder for paper certificates
  // {
  //   title: 'Paper Certificate',
  //   issuer: 'Your Issuer',
  //   date: 'Year',
  //   type: 'Paper',
  //   validationLink: '',
  //   image: placeholderImg,
  //   tags: ['Paper'],
  //   featured: false,
  // },
];

export default function CertificationsPage() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selected = featureCertifications[selectedIdx];

  // useEffect(() => {
  //   if (certifications.some(cert => cert.validationLink)) {
  //     const script = document.createElement('script');
  //     script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
  //     script.async = true;
  //     document.body.appendChild(script);
  //     return () => {
  //       document.body.removeChild(script);
  //     };
  //   }
  // }, []);

  return (
    <div className="certifications-page-wrapper">
      <Header />
      <main className="certs-card-grid-wrapper">
      <h2 className="certs-title">Certifications</h2>
        {/* <section className="feature-tile">
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
        </section> */}

        <div className="certs-card-grid">
          {certifications_level_3.map((cert, idx) => (
            <div className="cert-card" key={idx}>
              <div className="cert-card-img-wrap">
                <img src={cert.image} alt={cert.title} className="cert-card-img" />
                {cert.featured && <span className="cert-card-badge">★</span>}
              </div>
              <div className="cert-card-body">
                <h3 className="cert-card-title">{cert.title}</h3>
                <p className="cert-card-issuer">{cert.issuer}</p>
                <p className="cert-card-date">{cert.date}</p>
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
                    View on Credly
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="certs-card-grid">
          {certifications_level_2.map((cert, idx) => (
            <div className="cert-card" key={idx}>
              <div className="cert-card-img-wrap">
                <img src={cert.image} alt={cert.title} className="cert-card-img" />
                {cert.featured && <span className="cert-card-badge">★</span>}
              </div>
              <div className="cert-card-body">
                <h3 className="cert-card-title">{cert.title}</h3>
                <p className="cert-card-issuer">{cert.issuer}</p>
                <p className="cert-card-date">{cert.date}</p>
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
                    View on Credly
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="certs-card-grid">
          {certifications_level_1.map((cert, idx) => (
            <div className="cert-card" key={idx}>
              <div className="cert-card-img-wrap">
                <img src={cert.image} alt={cert.title} className="cert-card-img" />
                {cert.featured && <span className="cert-card-badge">★</span>}
              </div>
              <div className="cert-card-body">
                <h3 className="cert-card-title">{cert.title}</h3>
                <p className="cert-card-issuer">{cert.issuer}</p>
                <p className="cert-card-date">{cert.date}</p>
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
                    View on Credly
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