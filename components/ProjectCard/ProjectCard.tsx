"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  exploreLabel?: string;
}

export default function ProjectCard({
  project,
  onClick,
  exploreLabel = "Explore Project",
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className={styles.card}
    >
      {/* Background glow on hover */}
      <div className={styles.glow} />

      <div>
        {/* Image container */}
        <div className={styles.imageContainer}>
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
          />
          {/* Spec overlay */}
          <div className={styles.categoryBadge}>
            {project.categoryLabel}
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <h3 className={styles.title}>
            {project.title}
          </h3>
          <p className={styles.specs}>
            {project.specs.split("|")[0]}
          </p>
          <p className={styles.description}>
            {project.description}
          </p>
        </div>
      </div>

      {/* Tags and explore button at bottom */}
      <div className={styles.footer}>
        <div className={styles.tagsContainer}>
          {project.tags.slice(0, 3).map((tag, tIdx) => (
            <span
              key={tIdx}
              className={styles.tag}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className={styles.tag}>
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <div className={styles.exploreButton}>
          {exploreLabel}
          <svg className={styles.arrowIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
