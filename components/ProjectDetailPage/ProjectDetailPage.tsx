"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { Project, PROJECTS } from "@/data/projects";
import DiagramRenderer from "./DiagramRenderer";
import styles from "./ProjectDetailPage.module.css";

interface ProjectDetailPageProps {
  project: Project;
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Get related projects
  const relatedProjects = PROJECTS.filter(
    (p) => p.id !== project.id
  ).slice(0, 3);

  // Lightbox keyboard navigation
  const handleLightboxKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight")
        setLightboxIndex((i) =>
          i === project.images.length - 1 ? 0 : i + 1
        );
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) =>
          i === 0 ? project.images.length - 1 : i - 1
        );
    },
    [lightboxOpen, project.images.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleLightboxKeyDown);
    return () => window.removeEventListener("keydown", handleLightboxKeyDown);
  }, [handleLightboxKeyDown]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // Render dynamic sections helper
  const renderSections = () => {
    if (!project.sections || project.sections.length === 0) {
      return (
        <div className={styles.detailsGrid}>
          {/* Fallback to original layout if no tailored sections are defined */}
          <section>
            <h2 className={styles.sectionTitle}>Technical Specifications</h2>
            <div className={styles.specsTable}>
              {Object.entries(project.detailedSpecs).map(
                ([key, value], idx) => (
                  <div key={idx} className={styles.specRow}>
                    <span className={styles.specLabel}>{key}</span>
                    <span className={styles.specValue}>{value}</span>
                  </div>
                )
              )}
            </div>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Key Highlights</h2>
            <div className={styles.highlightsGrid}>
              {project.features.map((feature, idx) => (
                <div key={idx} className={styles.highlightCard}>
                  <div className={styles.highlightAccent} />
                  <p className={styles.highlightText}>{feature}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      );
    }

    return (
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 flex flex-col gap-12 mt-4">
        {project.sections.map((section, idx) => {
          switch (section.type) {
            case "specs-table":
              return (
                <section key={idx} className="fade-in-up" style={{ animationDelay: `${0.1 * idx}s` }}>
                  {section.title && <h2 className={styles.sectionTitle}>{section.title}</h2>}
                  <div className={styles.specsTable}>
                    {((section.items || []) as { label: string; value: string }[]).map((item, itemIdx) => (
                      <div key={itemIdx} className={styles.specRow}>
                        <span className={styles.specLabel}>{item.label}</span>
                        <span className={styles.specValue}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </section>
              );

            case "highlights-grid":
              return (
                <section key={idx} className="fade-in-up" style={{ animationDelay: `${0.1 * idx}s` }}>
                  {section.title && <h2 className={styles.sectionTitle}>{section.title}</h2>}
                  <div className={styles.highlightsGrid}>
                    {((section.items || []) as { title: string; text: string }[]).map((item, itemIdx) => (
                      <div key={itemIdx} className={styles.highlightCard}>
                        <div className={styles.highlightAccent} />
                        <h3 className="text-xs font-bold text-primary uppercase tracking-wide mb-1 font-mono">{item.title}</h3>
                        <p className={styles.highlightText}>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              );

            case "text":
              return (
                <section key={idx} className="fade-in-up" style={{ animationDelay: `${0.1 * idx}s` }}>
                  {section.title && <h2 className={styles.sectionTitle}>{section.title}</h2>}
                  <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">{section.content}</p>
                </section>
              );

            case "mermaid":
              return (
                <section key={idx} className="fade-in-up" style={{ animationDelay: `${0.1 * idx}s` }}>
                  {section.title && <h2 className={styles.sectionTitle}>{section.title}</h2>}
                  <DiagramRenderer content={section.content || ""} projectId={project.id} />
                </section>
              );

            case "math-block":
              return (
                <section key={idx} className="fade-in-up" style={{ animationDelay: `${0.1 * idx}s` }}>
                  {section.title && <h2 className={styles.sectionTitle}>{section.title}</h2>}
                  <div className="p-6 bg-[#131313]/60 border border-white/5 rounded-xl font-mono text-sm leading-relaxed max-w-3xl overflow-x-auto text-muted-foreground">
                    {/* Math formulations formatted elegantly with HTML markup blocks */}
                    <div 
                      className="whitespace-pre-wrap flex flex-col gap-4"
                      dangerouslySetInnerHTML={{
                        __html: (section.content || "")
                          .replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => `<div class="py-3 text-center text-primary font-bold text-base overflow-x-auto bg-black/20 rounded border border-white/5 my-2">${math}</div>`)
                          .replace(/\$(.*?)\$/g, (_, math) => `<span class="text-primary font-semibold font-mono">${math}</span>`)
                          .replace(/### (.*?)\n/g, (_, title) => `<h3 class="text-xs font-bold text-foreground uppercase tracking-widest border-b border-white/5 pb-1 font-sans mt-4 mb-2">${title}</h3>`)
                      }}
                    />
                  </div>
                </section>
              );

            case "steps-list":
              return (
                <section key={idx} className="fade-in-up" style={{ animationDelay: `${0.1 * idx}s` }}>
                  {section.title && <h2 className={styles.sectionTitle}>{section.title}</h2>}
                  <div className="flex flex-col gap-4">
                    {((section.items || []) as { label: string; value: string }[]).map((step, stepIdx) => (
                      <div key={stepIdx} className="flex gap-4 p-4 rounded-lg bg-[#131313]/30 border border-white/5">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary font-mono shrink-0">
                          {stepIdx + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{step.label}</p>
                          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{step.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );

            case "info-box":
              return (
                <section key={idx} className="fade-in-up" style={{ animationDelay: `${0.1 * idx}s` }}>
                  {section.title && <h2 className={styles.sectionTitle}>{section.title}</h2>}
                  <div className="p-5 rounded-lg bg-primary/5 border border-primary/20 flex flex-col gap-3">
                    {((section.items || []) as { title: string; text: string }[]).map((tip, tipIdx) => (
                      <div key={tipIdx} className="text-xs leading-relaxed">
                        <span className="font-bold text-primary font-mono block uppercase tracking-wider mb-0.5">⚡ {tip.title}</span>
                        <span className="text-muted-foreground">{tip.text}</span>
                      </div>
                    ))}
                  </div>
                </section>
              );

            default:
              return null;
          }
        })}
      </div>
    );
  };

  return (
    <div className={styles.page}>
      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb}>
        <Link href="/#projects" className={styles.backLink}>
          <svg
            className={styles.backArrow}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>
        <span className={styles.breadcrumbTrail}>
          Home / Projects / {project.title}
        </span>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        {/* Hero Image */}
        <div
          className={styles.heroImageContainer}
          onClick={() => openLightbox(0)}
        >
          <Image
            src={`${basePath}${project.images[0]}`}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroImageRing} />
        </div>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <span className={styles.categoryBadge}>
            {project.categoryLabel}
          </span>

          <h1 className={styles.heroTitle}>{project.title}</h1>

          <p className={styles.heroDescription}>{project.description}</p>

          <div className={styles.heroTags}>
            {project.tags.map((tag, idx) => (
              <span key={idx} className={styles.heroTag}>
                {tag}
              </span>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Explore on GitHub
              <svg
                className={styles.ctaArrow}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          )}
        </div>
      </section>

      {/* Image Gallery */}
      {project.images.length > 1 && (
        <section className={styles.gallery}>
          <div className={styles.galleryScroller}>
            {project.images.map((img, idx) => (
              <div
                key={idx}
                className={`${styles.galleryItem} ${
                  activeGalleryIndex === idx ? styles.galleryItemActive : ""
                }`}
                onClick={() => {
                  setActiveGalleryIndex(idx);
                  openLightbox(idx);
                }}
              >
                <Image
                  src={`${basePath}${img}`}
                  alt={`${project.title} - Image ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 85vw, 500px"
                  className={styles.galleryImage}
                />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className={styles.galleryDots}>
            {project.images.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.galleryDot} ${
                  activeGalleryIndex === idx ? styles.galleryDotActive : ""
                }`}
                onClick={() => setActiveGalleryIndex(idx)}
                aria-label={`View image ${idx + 1}`}
              />
            ))}
          </div>
        </section>
      )}

      {/* Tailored Dynamic Sections Grid */}
      {renderSections()}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className={styles.related}>
          <div className={styles.relatedDivider} />
          <h2 className={styles.sectionTitle}>Other Projects</h2>
          <div className={styles.relatedGrid}>
            {relatedProjects.map((rp) => (
              <Link
                key={rp.id}
                href={`/projects/${rp.id}`}
                className={styles.relatedCard}
              >
                <div className={styles.relatedImageContainer}>
                  <Image
                    src={`${basePath}${rp.images[0]}`}
                    alt={rp.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.relatedImage}
                  />
                  <span className={styles.relatedBadge}>
                    {rp.categoryLabel}
                  </span>
                </div>
                <div className={styles.relatedContent}>
                  <h3 className={styles.relatedTitle}>{rp.title}</h3>
                  <p className={styles.relatedDescription}>
                    {rp.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Lightbox */}
      {mounted &&
        lightboxOpen &&
        createPortal(
          <div
            className={styles.lightbox}
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className={styles.lightboxInner}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`${basePath}${project.images[lightboxIndex]}`}
                alt={`${project.title} - Full view ${lightboxIndex + 1}`}
                fill
                className={styles.lightboxImage}
                priority
              />

              {/* Close */}
              <button
                className={styles.lightboxClose}
                onClick={() => setLightboxOpen(false)}
                aria-label="Close lightbox"
              >
                <svg
                  className={styles.lightboxCloseIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Prev/Next */}
              {project.images.length > 1 && (
                <>
                  <button
                    className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
                    onClick={() =>
                      setLightboxIndex((i) =>
                        i === 0 ? project.images.length - 1 : i - 1
                      )
                    }
                    aria-label="Previous image"
                  >
                    <svg
                      className={styles.lightboxNavIcon}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    className={`${styles.lightboxNav} ${styles.lightboxNext}`}
                    onClick={() =>
                      setLightboxIndex((i) =>
                        i === project.images.length - 1 ? 0 : i + 1
                      )
                    }
                    aria-label="Next image"
                  >
                    <svg
                      className={styles.lightboxNavIcon}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
