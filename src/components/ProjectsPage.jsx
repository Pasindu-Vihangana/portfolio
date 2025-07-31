import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './ProjectsPage.css';
import placeholderImg from '../assets/react.svg';

const projects = [
  {
    title: 'IoT Weather Station',
    description: 'A solar-powered weather station with real-time cloud dashboard.',
    image: placeholderImg,
    tags: ['IoT', 'Weather', 'Cloud'],
    link: '#',
    video: '',
  },
  {
    title: 'Smart Home Hub',
    description: 'Centralized control for smart devices with voice assistant integration.',
    image: placeholderImg,
    tags: ['Smart Home', 'Voice', 'Automation'],
    link: '#',
    video: '',
  },
  {
    title: 'Embedded Linux Gateway',
    description: 'Industrial gateway with secure remote management.',
    image: placeholderImg,
    tags: ['Linux', 'Gateway', 'Security'],
    link: '#',
    video: '',
  },
  {
    title: 'BLE Sensor Network',
    description: 'Low-power Bluetooth mesh for environmental monitoring.',
    image: placeholderImg,
    tags: ['BLE', 'Sensors', 'Mesh'],
    link: '#',
    video: '',
  },
  {
    title: 'Robotics Platform',
    description: 'Modular robotics kit for STEM education.',
    image: placeholderImg,
    tags: ['Robotics', 'STEM', 'Modular'],
    link: '#',
    video: '',
  },
  {
    title: 'AI Edge Camera',
    description: 'Real-time object detection on embedded hardware.',
    image: placeholderImg,
    tags: ['AI', 'Edge', 'Vision'],
    link: '#',
    video: '',
  },
];

export default function ProjectsPage() {
  const [modalProject, setModalProject] = useState(null);

  const openModal = (project) => setModalProject(project);
  const closeModal = () => setModalProject(null);

  return (
    <div className="projects-page-wrapper">
      <Header />
      <main>
        <div className="projects-main-content">
          <h2 className="projects-title">Projects</h2>
          <div className="projects-card-grid">
            {projects.map((project, idx) => (
              <div
                className="project-card"
                key={idx}
                onClick={() => openModal(project)}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${project.title}`}
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && openModal(project)}
              >
                <div className="project-card-img-wrap">
                  <img src={project.image} alt={project.title} className="project-card-img" />
                </div>
                <div className="project-card-body">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>
                  <div className="project-card-tags">
                    {project.tags.map((tag, i) => (
                      <span className="project-card-tag" key={i}>#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {modalProject && (
          <div className="project-modal-overlay" onClick={closeModal}>
            <div className="project-modal" onClick={e => e.stopPropagation()}>
              <button className="project-modal-close" onClick={closeModal} aria-label="Close">&times;</button>
              <div className="project-modal-media">
                {modalProject.video ? (
                  <video src={modalProject.video} controls autoPlay style={{ width: '100%' }} />
                ) : (
                  <img src={modalProject.image} alt={modalProject.title} />
                )}
              </div>
              <div className="project-modal-title">{modalProject.title}</div>
              <div className="project-modal-desc">{modalProject.description}</div>
              <div className="project-modal-tags">
                {modalProject.tags.map((tag, i) => (
                  <span className="project-modal-tag" key={i}>#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
} 