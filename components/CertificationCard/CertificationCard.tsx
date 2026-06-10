"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Certification } from "@/data/certifications";
import styles from "./CertificationCard.module.css";

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  const [imageError, setImageError] = useState(false);

  const getLevelLabel = (level: number) => {
    switch (level) {
      case 3:
        return "Level 3 - Advanced";
      case 2:
        return "Level 2 - Intermediate";
      case 1:
        return "Level 1 - Foundational";
      default:
        return `Level ${level}`;
    }
  };

  const getLevelClass = (level: number) => {
    switch (level) {
      case 3:
        return styles.level3;
      case 2:
        return styles.level2;
      case 1:
        return styles.level1;
      default:
        return "";
    }
  };

  // Premium Fallback SVG Badge for each certification level
  const renderFallbackBadge = (level: number) => {
    switch (level) {
      case 3:
        return (
          <svg width="128" height="128" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse-slow">
            <circle cx="40" cy="40" r="37" stroke="var(--color-primary)" strokeWidth="1.5" strokeDasharray="6 3" />
            <circle cx="40" cy="40" r="33" fill="url(#goldGrad)" stroke="var(--color-primary)" strokeWidth="1" strokeOpacity="0.25" />

            {/* AI / Deep Learning Circuit Nodes */}
            <path d="M40 18v44M18 40h44" stroke="var(--color-primary)" strokeWidth="0.75" strokeOpacity="0.3" />
            <path d="M25 25l30 30M25 55l30-30" stroke="var(--color-primary)" strokeWidth="0.75" strokeOpacity="0.2" />

            {/* Outer orbiting nodes */}
            <circle cx="40" cy="22" r="3.5" fill="var(--color-primary)" stroke="#0a0a0a" strokeWidth="1" />
            <circle cx="40" cy="58" r="3.5" fill="var(--color-primary)" stroke="#0a0a0a" strokeWidth="1" />
            <circle cx="22" cy="40" r="3.5" fill="var(--color-primary)" stroke="#0a0a0a" strokeWidth="1" />
            <circle cx="58" cy="40" r="3.5" fill="var(--color-primary)" stroke="#0a0a0a" strokeWidth="1" />

            {/* Center Core */}
            <circle cx="40" cy="40" r="10" fill="#0d0d0d" stroke="var(--color-primary)" strokeWidth="1.5" />
            <path d="M37 38.5l3 3 4-4" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

            <text x="40" y="72" fill="var(--color-primary)" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="0.1em">L3 · ADV</text>

            <defs>
              <radialGradient id="goldGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" transform="translate(40 40) rotate(90) scale(33)">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.95" />
              </radialGradient>
            </defs>
          </svg>
        );
      case 2:
        return (
          <svg width="128" height="128" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="37" stroke="#a3a3a3" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="40" cy="40" r="33" fill="url(#silverGrad)" stroke="#a3a3a3" strokeWidth="1" strokeOpacity="0.2" />

            {/* Data / Analysis Charts Theme */}
            <path d="M26 48l8-10 10 7 12-14" stroke="#a3a3a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
            <line x1="22" y1="52" x2="58" y2="52" stroke="#a3a3a3" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="22" y1="28" x2="22" y2="52" stroke="#a3a3a3" strokeWidth="1" strokeOpacity="0.3" />

            {/* Data nodes */}
            <circle cx="26" cy="48" r="2.5" fill="#a3a3a3" />
            <circle cx="34" cy="38" r="2.5" fill="#a3a3a3" />
            <circle cx="44" cy="45" r="2.5" fill="#a3a3a3" />
            <circle cx="56" cy="31" r="2.5" fill="#a3a3a3" />

            {/* Center overlay badge */}
            <circle cx="40" cy="40" r="7" fill="#0d0d0d" stroke="#a3a3a3" strokeWidth="1" />
            <text x="40" y="42.5" fill="#a3a3a3" fontSize="8" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">✓</text>

            <text x="40" y="72" fill="#a3a3a3" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="0.1em">L2 · INT</text>

            <defs>
              <radialGradient id="silverGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" transform="translate(40 40) rotate(90) scale(33)">
                <stop offset="0%" stopColor="#a3a3a3" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.95" />
              </radialGradient>
            </defs>
          </svg>
        );
      case 1:
      default:
        return (
          <svg width="128" height="128" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="37" stroke="#b45309" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="40" cy="40" r="33" fill="url(#bronzeGrad)" stroke="#b45309" strokeWidth="1" strokeOpacity="0.2" />

            {/* Programming Code brackets theme */}
            <path d="M30 32l-8 8 8 8M50 32l8 8-8 8M43 30l-6 20" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />

            <text x="40" y="72" fill="#b45309" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="0.1em">L1 · FND</text>

            <defs>
              <radialGradient id="bronzeGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" transform="translate(40 40) rotate(90) scale(33)">
                <stop offset="0%" stopColor="#b45309" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.95" />
              </radialGradient>
            </defs>
          </svg>
        );
    }
  };

  return (
    <div className={styles.card}>
      {/* Dynamic hover glow overlay */}
      <div className={styles.glow} />

      <div>
        {/* Badge image/visual container */}
        <div className={styles.badgeContainer}>
          {!imageError ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${certification.image}`}
              alt={certification.title}
              width={1080}
              height={1080}
              className={styles.image}
              onError={() => setImageError(true)}
              unoptimized // Allow loading local dev files without breaking Next.js optimizer
            />
          ) : (
            renderFallbackBadge(certification.level)
          )}

          {/* Level indicators */}
          <span className={`${styles.levelBadge} ${getLevelClass(certification.level)}`}>
            {getLevelLabel(certification.level)}
          </span>
        </div>

        {/* Info Content */}
        <div className={styles.content}>
          <div className={styles.meta}>
            <span className={styles.issuer}>{certification.issuer}</span>
            <span className={styles.date}>{certification.date}</span>
          </div>

          <h3 className={styles.title} title={certification.title}>
            {certification.title}
          </h3>

          <div className={styles.tagsContainer}>
            {certification.tags.slice(0, 4).map((tag, idx) => (
              <span key={idx} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Verify footer */}
      <div className={styles.footer}>
        <a
          href={certification.validationLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.verifyLink}
        >
          Verify Credential
          <svg className={styles.arrowIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
