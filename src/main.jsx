import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.jsx';
import AboutPage from './components/AboutPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import CertificationsPage from './components/CertificationsPage.jsx';
import ProjectsPage from './components/ProjectsPage.jsx';
import UpdateInProgress from './components/UpdateInProgress.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}
        <Route path="/projects" element={<Navigate to="/update-in-progress" replace />} />
        <Route path="/update-in-progress" element={<UpdateInProgress />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
