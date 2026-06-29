"use client";

import React, { useState } from "react";
import { CERTIFICATIONS } from "@/context/certifications";
import CertificationCard from "@/components/CertificationCard/CertificationCard";
import styles from "./CertificationsShowcase.module.css";

export default function CertificationsShowcase() {
  const [filter, setFilter] = useState<"all" | 3 | 2 | 1>("all");

  const filteredCertifications = filter === "all"
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter((cert) => cert.level === filter);

  return (
    <div className={styles.section}>
      <div className={styles.headerContainer}>
        <div className={styles.titleWrapper}>
          <div className="flex items-center gap-2 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M12 8v4l3 3" />
            </svg>
            <span className="text-[10px] uppercase tracking-widest font-bold font-mono">
              Credentials
            </span>
          </div>
          <h2 className={styles.sectionTitle}>
            Certifications &amp; Coursework
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filters}>
          <button
            onClick={() => setFilter("all")}
            className={`${styles.filterBtn} ${filter === "all" ? styles.filterBtnActive : ""}`}
          >
            All Levels
          </button>
          <button
            onClick={() => setFilter(3)}
            className={`${styles.filterBtn} ${filter === 3 ? styles.filterBtnActive : ""}`}
          >
            Advanced (L3)
          </button>
          <button
            onClick={() => setFilter(2)}
            className={`${styles.filterBtn} ${filter === 2 ? styles.filterBtnActive : ""}`}
          >
            Intermediate (L2)
          </button>
          <button
            onClick={() => setFilter(1)}
            className={`${styles.filterBtn} ${filter === 1 ? styles.filterBtnActive : ""}`}
          >
            Foundational (L1)
          </button>
        </div>
      </div>

      {/* Grid of Certification Cards */}
      <div className={styles.grid}>
        {filteredCertifications.map((cert, idx) => (
          <CertificationCard key={idx} certification={cert} />
        ))}
      </div>
    </div>
  );
}
