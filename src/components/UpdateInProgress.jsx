import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function UpdateInProgress() {
  return (
    <div className="update-in-progress-wrapper">
      <Header />
      <main style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          background: 'var(--card-bg, #fff)',
          borderRadius: '1rem',
          padding: '2rem 2.5rem',
          boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
          textAlign: 'center',
          maxWidth: '420px',
        }}>
          <h2 style={{ marginBottom: '1rem', color: 'var(--primary, #0078d7)' }}>Update in Progress</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text, #333)' }}>
            This page is currently being updated.<br />
            Please check back soon!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 