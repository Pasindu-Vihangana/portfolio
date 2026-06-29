"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Project } from "@/context/projects";
import styles from "./ProjectModal.module.css";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);

  // Set mounted state for createPortal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset image index when project changes
  useEffect(() => {
    if (project) {
      setActiveImageIndex(0);
    }
  }, [project]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  if (!mounted || !project) return null;

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return createPortal(
    <div className={styles.overlay}>
      {/* Backdrop Click */}
      <div className={styles.backdrop} onClick={onClose} />

      {/* Modal Card */}
      <div className={styles.modal}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close modal"
        >
          <svg className={styles.closeIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className={styles.grid}>
          {/* Left Column: Image Gallery & Carousel */}
          <div className={styles.galleryColumn}>
            {/* Main Image View */}
            <div className={styles.mainImageContainer}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${project.images[activeImageIndex]}`}
                alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                fill
                className={styles.mainImage}
                priority
              />

              {/* Carousel Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className={styles.arrowLeft}
                    aria-label="Previous image"
                  >
                    <svg className={styles.navIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNextImage}
                    className={styles.arrowRight}
                    aria-label="Next image"
                  >
                    <svg className={styles.navIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Indicators */}
            {project.images.length > 1 && (
              <div className={styles.thumbnails}>
                {project.images.map((img, iIdx) => (
                  <button
                    key={iIdx}
                    onClick={() => setActiveImageIndex(iIdx)}
                    className={`${styles.thumbnailButton} ${activeImageIndex === iIdx ? styles.thumbnailActive : ""
                      }`}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${img}`}
                      alt="Thumbnail"
                      fill
                      sizes="80px"
                      className={styles.thumbnailImage}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Details & Technical Notes */}
          <div className={styles.detailsColumn}>
            <div className={styles.detailsContent}>
              <div>
                <span className={styles.categoryLabel}>
                  {project.categoryLabel}
                </span>
                <h3 className={styles.title}>
                  {project.title}
                </h3>
              </div>

              <p className={styles.specs}>
                {project.specs}
              </p>

              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Project Overview</h4>
                <p className={styles.description}>
                  {project.description}
                </p>
              </div>

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>Key Highlights</h4>
                  <ul className={styles.featuresList}>
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className={styles.featureItem}>
                        <span className={styles.bullet}>▪</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Detailed Tech Specifications */}
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Technical Specifications</h4>
                <div className={styles.specsGrid}>
                  {Object.entries(project.detailedSpecs).map(([key, val], sIdx) => (
                    <div
                      key={sIdx}
                      className={`${styles.specsRow} ${sIdx % 2 === 0 ? styles.specsRowEven : styles.specsRowOdd
                        } ${sIdx !== 0 ? styles.specsRowBorder : ""}`}
                    >
                      <span className={styles.specKey}>{key}</span>
                      <span className={styles.specVal}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech Tags */}
            <div className={styles.tagsFooter}>
              <div className={styles.tagsContainer}>
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={styles.tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
