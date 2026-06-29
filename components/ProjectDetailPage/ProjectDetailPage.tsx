"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import katex from "katex";
import { Project, PROJECTS } from "@/context/projects";
import DiagramRenderer from "./DiagramRenderer";
import styles from "./ProjectDetailPage.module.css";

interface ProjectDetailPageProps {
  project: Project;
  readmeContent?: string;
}

const SLUG_TO_DIR: Record<string, string> = {
  "falcon-tracker": "Falcon Tracker",
  "fitness-tracker": "Fitness Tracker",
  "dance-better": "DanceBetter",
  "mocap-3d": "Skeleton Mocap 3D",
  "garment-counter": "Garment Piece Counter",
  "shadow-projection": "Shadow Projection",
  "qr2wallet": "QR2Wallet"
};

export default function ProjectDetailPage({ project, readmeContent }: ProjectDetailPageProps) {
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
    if (readmeContent) {
      // Ensure block math $$ formulas are separated by blank lines so remark-math parses them as display block nodes
      const processedContent = readmeContent
        .replace(/\r\n/g, '\n')
        .replace(/\n\$\$/g, '\n\n$$')
        .replace(/\$\$\n/g, '$$\n\n');

      return (
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 flex flex-col gap-6 mt-6">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeRaw, rehypeKatex]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl md:text-5xl font-bold font-serif text-foreground mb-6 tracking-tight mt-6 border-b border-white/10 pb-4">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className={styles.sectionTitle}>{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mt-6 mb-2 font-mono">
                  {children}
                </h3>
              ),
              p: ({ node, children }) => {
                const hasImage = node?.children?.some(
                  (child: any) => child.type === 'element' && child.tagName === 'img'
                );
                const align = (node as any)?.properties?.align;
                const textAlign = align === 'center' ? 'center' : undefined;
                if (hasImage) {
                  return <div style={{ textAlign }} className="my-4 w-full">{children}</div>;
                }
                return <p style={{ textAlign }} className="text-base text-muted-foreground leading-relaxed max-w-3xl mb-4">{children}</p>;
              },
              ul: ({ children }) => (
                <ul className="list-disc pl-5 mb-4 text-muted-foreground text-sm flex flex-col gap-1.5 max-w-3xl">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-5 mb-4 text-muted-foreground text-sm flex flex-col gap-1.5 max-w-3xl">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="leading-relaxed">{children}</li>
              ),
              hr: () => (
                <hr className="border-t border-white/5 my-8 max-w-[1200px]" />
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto my-6 max-w-4xl border border-white/5 rounded-xl bg-[#131313]/20">
                  <table className="w-full border-collapse text-left text-xs md:text-sm text-muted-foreground">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-[#131313]/60 text-xs font-bold text-primary uppercase tracking-wider border-b border-white/5">
                  {children}
                </thead>
              ),
              tbody: ({ children }) => (
                <tbody className="divide-y divide-white/5">
                  {children}
                </tbody>
              ),
              tr: ({ children }) => (
                <tr className="hover:bg-white/[0.02] transition-colors">
                  {children}
                </tr>
              ),
              th: ({ children }) => (
                <th className="px-5 py-3 font-mono font-bold text-primary">{children}</th>
              ),
              td: ({ children }) => (
                <td className="px-5 py-3 font-sans text-xs md:text-sm font-medium">{children}</td>
              ),
              blockquote: ({ children }) => {
                const getText = (node: any): string => {
                  if (typeof node === 'string') return node;
                  if (Array.isArray(node)) return node.map(getText).join('');
                  if (node?.props?.children) return getText(node.props.children);
                  return '';
                };

                const text = getText(children).trim();
                const match = text.match(/^\[!(TIP|NOTE|IMPORTANT|WARNING|CAUTION)\]/i);

                if (match) {
                  const type = match[1].toLowerCase() as 'tip' | 'note' | 'important' | 'warning' | 'caution';
                  const config = {
                    tip: { icon: "⚡", title: "Tip", styles: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300" },
                    note: { icon: "ℹ️", title: "Note", styles: "bg-blue-500/10 border-blue-500/20 text-blue-300" },
                    important: { icon: "⚠️", title: "Important", styles: "bg-amber-500/10 border-amber-500/20 text-amber-300" },
                    warning: { icon: "🔥", title: "Warning", styles: "bg-orange-500/10 border-orange-500/20 text-orange-300" },
                    caution: { icon: "🛑", title: "Caution", styles: "bg-rose-500/10 border-rose-500/20 text-rose-300" }
                  }[type];

                  let removed = false;
                  const removePrefix = (n: React.ReactNode): React.ReactNode => {
                    if (removed) return n;
                    if (typeof n === 'string') {
                      const trimmed = n.trimStart();
                      if (trimmed.startsWith('[!') || trimmed.match(/^\[!(TIP|NOTE|IMPORTANT|WARNING|CAUTION)\]/i)) {
                        removed = true;
                        return n.replace(/^\[!(TIP|NOTE|IMPORTANT|WARNING|CAUTION)\]\s*/i, '');
                      }
                      return n;
                    }
                    if (Array.isArray(n)) {
                      return n.map(child => removePrefix(child));
                    }
                    if (React.isValidElement(n)) {
                      if (n.props && 'children' in (n.props as any)) {
                        const element = n as React.ReactElement<any>;
                        return React.cloneElement(element, {
                          ...element.props,
                          children: removePrefix(element.props.children)
                        });
                      }
                    }
                    return n;
                  };

                  const cleanChildren = removePrefix(children);

                  return (
                    <div className={`p-4 rounded-xl border my-4 flex flex-col gap-1.5 ${config.styles} max-w-3xl`}>
                      <div className="flex items-center gap-1.5 font-mono font-bold text-[10px] uppercase tracking-wider">
                        <span>{config.icon}</span>
                        <span>{config.title}</span>
                      </div>
                      <div className="text-xs md:text-sm leading-relaxed text-muted-foreground [&_p]:mb-0 [&_strong]:text-foreground [&_li]:text-muted-foreground">
                        {cleanChildren}
                      </div>
                    </div>
                  );
                }

                return (
                  <blockquote className="border-l-2 border-primary/40 pl-4 my-4 italic text-muted-foreground max-w-3xl">
                    {children}
                  </blockquote>
                );
              },
              code: ({ node, className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || '');
                const codeContent = String(children).replace(/\n$/, '');
                const isInline = !className && (node as any)?.parent?.tagName !== 'pre' && !codeContent.includes('\n');

                if (!isInline && match && match[1] === 'mermaid') {
                  return (
                    <div className="my-6 max-w-4xl">
                      <DiagramRenderer content={codeContent} projectId={project.id} />
                    </div>
                  );
                }

                if (!isInline) {
                  return (
                    <pre className="p-4 my-4 rounded-xl border border-white/5 bg-[#131313]/40 font-mono text-xs overflow-x-auto text-muted-foreground leading-relaxed max-w-3xl">
                      <code className={className} {...props}>
                        {children}
                      </code>
                    </pre>
                  );
                }

                return (
                  <code className="px-1.5 py-0.5 rounded bg-white/5 text-primary border border-white/5 font-mono text-xs font-semibold" {...props}>
                    {children}
                  </code>
                );
              },
              img: ({ src, alt, width, height, style }) => {
                if (typeof src !== 'string') return null;

                const cleanSrc = src.replace(/^\.\//, '');
                const folderName = SLUG_TO_DIR[project.id] || project.title;
                 const resolvedSrc = (cleanSrc.startsWith('http') || cleanSrc.startsWith('/projects/'))
                   ? cleanSrc
                   : (cleanSrc.startsWith('/')
                       ? `/projects/${folderName}${cleanSrc}`
                       : `/projects/${folderName}/${cleanSrc}`);

                const isVideo = resolvedSrc.toLowerCase().endsWith('.mp4') || resolvedSrc.toLowerCase().endsWith('.webm') || resolvedSrc.toLowerCase().endsWith('.mov');

                const customStyle: React.CSSProperties = {
                  width: width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'inline-block',
                };

                if (isVideo) {
                  return (
                    <div 
                      className="overflow-hidden rounded-xl border border-white/5 bg-[#131313]/40 my-4 mx-2 align-top inline-block"
                      style={customStyle}
                    >
                      <video
                        src={`${basePath}${resolvedSrc}`}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-auto object-contain"
                      />
                      {alt && (
                        <div className="px-4 py-2 text-center text-xs text-muted-foreground/60 border-t border-white/5 font-sans">
                          {alt}
                        </div>
                      )}
                    </div>
                  );
                }

                const imgIndex = project.images.findIndex(img => 
                  resolvedSrc.endsWith(img) || img.endsWith(cleanSrc)
                );

                const isIcon = cleanSrc === 'appicon.png' || cleanSrc.includes('appicon') || (width && parseInt(String(width)) < 100);

                if (isIcon) {
                  return (
                    <img
                      src={`${basePath}${resolvedSrc}`}
                      alt={alt || ""}
                      width={width}
                      height={height}
                      style={{
                        borderRadius: '10px',
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        marginRight: '8px',
                        ...((style as any) || {})
                      }}
                    />
                  );
                }

                return (
                  <div 
                    className="overflow-hidden rounded-xl border border-white/5 bg-[#131313]/40 group cursor-pointer relative inline-block my-4 mx-2 align-top"
                    style={customStyle}
                    onClick={() => {
                      if (imgIndex !== -1) {
                        openLightbox(imgIndex);
                      }
                    }}
                  >
                    <img
                      src={`${basePath}${resolvedSrc}`}
                      alt={alt || project.title}
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    {alt && (
                      <div className="px-4 py-2 text-center text-xs text-muted-foreground/60 border-t border-white/5 font-sans">
                        {alt}
                      </div>
                    )}
                  </div>
                );
              },

            }}
          >
            {processedContent}
          </ReactMarkdown>
        </div>
      );
    }

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
