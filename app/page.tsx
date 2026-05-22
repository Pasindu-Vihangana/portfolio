"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./components/Icons";

const ROLES = [
  "Robotics Engineer",
  "Embedded Systems Specialist",
  "Mechatronics Engineer",
  "Firmware Developer",
  "Sensor Fusion Specialist"
];

const STATS = [
  { value: "3+", label: "Years Experience", description: "Shipping production hardware" },
  { value: "10+", label: "International Clients", description: "Across US, EU & Asia" },
  { value: "70 km", label: "Telemetry Range", description: "Falcon Tracker RF deployment" },
  { value: "0.005°/s", label: "Sensor Precision", description: "Triple-gyro fusion estimation" }
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const [activeSide, setActiveSide] = useState<"engineer" | "fighter" | "comedian" | null>(null);

  // Typewriter effect logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = ROLES[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          setTypingSpeed(100);
          return;
        }
      }
      setTypingSpeed(isDeleting ? 50 : 100);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  return (
    <div className="flex-1 flex flex-col font-sans">
      
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-center relative overflow-hidden select-none py-16">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm opacity-5" style={{ backgroundImage: "url('/hero-bg.jpg')" }} />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <p className="animate-fade-in-up text-lg md:text-xl text-primary font-medium mb-4">
                Hi, Pasindu here! 👋
              </p>

              <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-[1.15] mb-6">
                I am a<br />
                <span className="font-mono text-primary inline-block min-h-[1.5em] mt-1 relative">
                  {currentText}
                  <span className="w-1.5 h-8 bg-primary absolute right-[-10px] bottom-[5px] animate-pulse"></span>
                </span>
              </h1>

              <p className="animate-fade-in-up delay-100 text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
                I bridge the gap between mathematical models and physical deployments. Graduated B.Eng.Tech (Hons) under the Sydney Accord with 3+ years shipping production hardware across healthcare, robotics, and STEM education.
              </p>

              <div className="animate-fade-in-up delay-200 flex flex-wrap gap-4">
                <Link 
                  href="/resume" 
                  className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
                >
                  <Icons.FileText className="w-4 h-4" />
                  Get Résumé
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border-2 border-border hover:border-primary hover:text-primary font-semibold text-sm tracking-wider uppercase transition-all duration-300 active:scale-[0.98]"
                >
                  <Icons.MessageSquare className="w-4 h-4" />
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Circular Glowing Portrait Schematic Card */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-64 xl:w-80 aspect-square group">
                {/* Conic Ring glow */}
                <div className="absolute -inset-4 rounded-full border border-primary/10 animate-pulse-slow"></div>
                <div className="absolute -inset-2 rounded-full bg-[conic-gradient(from_0deg,transparent_0%,var(--color-primary)_25%,transparent_50%)] opacity-10 group-hover:opacity-20 animate-spin-slow transition-opacity duration-500"></div>
                <div className="absolute -inset-2 rounded-full border border-primary/10"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/15 via-transparent to-primary/5 rounded-full blur-md group-hover:from-primary/25 group-hover:to-primary/15 transition-all duration-500"></div>
                <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-primary/20 animate-pulse-slow"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-primary/10 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
                
                <div className="relative rounded-full w-full h-full ring-4 ring-[#131313] overflow-hidden shadow-2xl bg-[#131313]/50">
                  <Image 
                    alt="Pasindu Vihangana Portrait Schematic" 
                    fill 
                    className="relative object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500" 
                    src="/assets/hero_mechatronics.png"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Metrics / Stats Grid (Cyntax-style) */}
      <section className="border-t border-border py-16 bg-[#0c0c0c]/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-[#131313]/30 border border-border/60 p-6 rounded-xl space-y-2 hover:border-primary/20 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-mono text-primary font-bold">{stat.value}</div>
                <div className="text-sm font-semibold text-foreground font-serif">{stat.label}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Human Side Section */}
      <section className="border-t border-border py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                The Man Behind the Machine
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-foreground">
                Grounded Engineer. Rigorous Details.
              </h2>
              <p className="text-[#a7a5a5] leading-relaxed text-sm">
                I graduated USJP with second-upper honours (B.Eng.Tech in Mechatronics), accredited under the Sydney Accord. I thrive on translating theoretical mathematics (Kalman filtering, DSP) directly into hardware that works in the field.
              </p>
              <p className="text-[#a7a5a5] leading-relaxed text-sm">
                Whether deploying 12mm telemetry chips in falconry or CV systems in textile mills, my work focuses on precision engineering, low-power constraints, and scalable reliability.
              </p>
              
              <div className="border border-border rounded-xl p-5 bg-[#131313]/40 space-y-3">
                <span className="text-xs text-primary font-bold uppercase tracking-wider block">Accreditation & Education</span>
                <span className="text-sm text-foreground font-serif font-bold block">B.Eng.Tech (Hons) in Mechatronics Technology</span>
                <span className="text-xs text-[#a7a5a5] block">GPA: 3.64 / 4.00 | Dean's List (3rd & 4th Sem)</span>
                <p className="text-[11px] text-[#a7a5a5] border-t border-border pt-2.5 mt-2.5 leading-relaxed">
                  🛡️ accredited under the <strong className="text-white">Sydney Accord</strong> (IESL / ABET signatory) for mutual global engineering recognition.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col space-y-8">
              <h3 className="text-base font-serif text-foreground border-b border-border pb-3">
                Explore the three sides of my personality:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Engineer */}
                <div 
                  onClick={() => setActiveSide(activeSide === "engineer" ? null : "engineer")}
                  className={`border p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeSide === "engineer" 
                      ? "bg-[#131313] border-primary shadow-lg shadow-primary/5" 
                      : "bg-[#131313]/20 border-border hover:border-white/10"
                  }`}
                >
                  <span className="text-2xl mb-3 block">👨🏻‍💻</span>
                  <h4 className="text-base font-bold text-foreground mb-1">The Engineer</h4>
                  <p className="text-xs text-[#a7a5a5]">Mathematical modeling, 4-layer PCBs, RTOS scheduling, and sensor fusion.</p>
                  {activeSide === "engineer" && (
                    <div className="mt-4 pt-3 border-t border-border text-xs text-foreground space-y-2 animate-fade-in-up">
                      <p>Focuses on low latency, low power, and physical robust deployment.</p>
                      <p className="text-primary font-bold">Key Specialties: nRF52, IMUs, Kalman Filtering.</p>
                    </div>
                  )}
                </div>

                {/* Fighter */}
                <div 
                  onClick={() => setActiveSide(activeSide === "fighter" ? null : "fighter")}
                  className={`border p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeSide === "fighter" 
                      ? "bg-[#131313] border-primary shadow-lg shadow-primary/5" 
                      : "bg-[#131313]/20 border-border hover:border-white/10"
                  }`}
                >
                  <span className="text-2xl mb-3 block">🥊</span>
                  <h4 className="text-base font-bold text-foreground mb-1">The Fighter</h4>
                  <p className="text-xs text-[#a7a5a5]">Trains martial arts, embedding resilience, reflex, and focus into daily code.</p>
                  {activeSide === "fighter" && (
                    <div className="mt-4 pt-3 border-t border-border text-xs text-foreground space-y-2 animate-fade-in-up">
                      <p>Physical combat keeps the mind focused and builds quick-reflex system designs.</p>
                      <p className="text-primary font-bold">Mindset: Endurance, discipline, composure.</p>
                    </div>
                  )}
                </div>

                {/* Comedian */}
                <div 
                  onClick={() => setActiveSide(activeSide === "comedian" ? null : "comedian")}
                  className={`border p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeSide === "comedian" 
                      ? "bg-[#131313] border-primary shadow-lg shadow-primary/5" 
                      : "bg-[#131313]/20 border-border hover:border-white/10"
                  }`}
                >
                  <span className="text-2xl mb-3 block">😂</span>
                  <h4 className="text-base font-bold text-foreground mb-1">The Comedian</h4>
                  <p className="text-xs text-[#a7a5a5]">Self-described bad dad joke generator who believes engineer communication should be fun.</p>
                  {activeSide === "comedian" && (
                    <div className="mt-4 pt-3 border-t border-border text-xs text-foreground space-y-2 animate-fade-in-up">
                      <p>Building mechatronics is hard work, but explaining it shouldn&apos;t be boring.</p>
                      <p className="text-primary font-bold">Vibe: Approachable, self-aware, witty.</p>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
