"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/Icons";
import { PROJECTS } from "@/context/projects";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

import { CERTIFICATIONS } from "@/context/certifications";
import CertificationCard from "@/components/CertificationCard/CertificationCard";
import { ParallaxBackground } from "@/components/ParallaxBackground";


// Local inline icons for page sections and cards
const HomeIcons = {
  Briefcase: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="6" rx="2" />
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Code: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16" />
    </svg>
  ),
  Target: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  User: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Quote: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a4 4 0 1 0 4 4v-2h-2m-10 2a4 4 0 1 0 4 4v-2H8" />
    </svg>
  ),
  Cpu: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
    </svg>
  ),
  Activity: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  Layers: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-10 5 10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Radio: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2" />
      <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
    </svg>
  ),
  Eye: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Navigation: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  ),
  Wrench: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
    </svg>
  ),
  Rocket: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  ChevronRight: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
  ChevronsDown: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m7 6 5 5 5-5M7 13 5 5 5-5" />
    </svg>
  )
};

const ROLES = [
  "Robotics Engineer",
  "Embedded Systems Developer",
  "Mechatronics Engineer",
  "Firmware Developer",
  "Sensor Fusion Specialist"
];

const SERVICES = [
  {
    title: "Embedded Firmware",
    description: "Low-overhead C/C++ bare metal & RTOS deployments on Nordic SoC, STM32, and ESP32 with strict power constraints.",
    icon: <HomeIcons.Cpu className="w-5 h-5 text-primary" />
  },
  {
    title: "Control Loops",
    description: "High-precision stabilization using cascaded PID control and real-time Euler orientation Madgwick/Kalman filter estimators.",
    icon: <HomeIcons.Activity className="w-5 h-5 text-primary" />
  },
  {
    title: "Multilayer PCB Design",
    description: "Designing high-density, multi-layer rigid and flexible boards with impedance matching, signal isolation, and sub-15g footprint targets.",
    icon: <HomeIcons.Layers className="w-5 h-5 text-primary" />
  },
  {
    title: "Wearables & Telemetry",
    description: "Integrating IMUs and pressure sensors, processing DSP features on-chip, and streaming telemetry packets via proprietary RF/BLE.",
    icon: <HomeIcons.Radio className="w-5 h-5 text-primary" />
  },
  {
    title: "AI Biomechanical SaaS",
    description: "Co-authoring motion analysis platforms using video-based human pose estimation model tracking and timestamped coordinate feedback.",
    icon: <HomeIcons.Eye className="w-5 h-5 text-primary" />
  },
  {
    title: "Autonomous Flight Systems",
    description: "Designing cascades of PID and Extended Kalman Filters for altitude and flight control stabilization with user-programmable SDK layers.",
    icon: <HomeIcons.Navigation className="w-5 h-5 text-primary" />
  }
];

const SKILLS_CATEGORIES = [
  {
    title: "Control & State Estimation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-primary">
        <path d="M3 12h18M3 6h18M3 18h18" />
        <circle cx="12" cy="12" r="3" fill="currentColor" className="text-primary/20" />
      </svg>
    ),
    skills: [
      { name: "Cascaded PID", rate: "95%", color: "#e9c349" },
      { name: "EKF / Kalman", rate: "90%", color: "#e9c349" },
      { name: "Orientation", rate: "95%", color: "#e9c349" },
      { name: "MATLAB Models", rate: "85%", color: "#e9c349" }
    ]
  },
  {
    title: "Firmware & RTOS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-primary">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m6 10 2 2-2 2M11 14h5" />
      </svg>
    ),
    skills: [
      { name: "C/C++ Development", rate: "95%", color: "#e9c349" },
      { name: "RTOS Task Scheduling", rate: "90%", color: "#e9c349" },
      { name: "BLE Bluetooth", rate: "90%", color: "#e9c349" },
      { name: "Drivers (SPI / I2C)", rate: "90%", color: "#e9c349" }
    ]
  },
  {
    title: "Hardware & PCB Design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-primary">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    skills: [
      { name: "Multilayer PCB Design", rate: "90%", color: "#e9c349" },
      { name: "High-density Routing", rate: "85%", color: "#e9c349" },
      { name: "Signal Integrity", rate: "85%", color: "#e9c349" },
      { name: "Altium / KiCad", rate: "90%", color: "#e9c349" }
    ]
  },
  {
    title: "AI & Computer Vision",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-primary">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    skills: [
      { name: "Pose Estimation Models", rate: "85%", color: "#e9c349" },
      { name: "Deep Learning Architectures", rate: "80%", color: "#e9c349" },
      { name: "OpenCV Processing", rate: "90%", color: "#e9c349" },
      { name: "NumPy / Pandas DSP", rate: "85%", color: "#e9c349" }
    ]
  }
];



const PRINCIPLES = [
  {
    title: "Mathematical Rigor",
    description: "Prototyping dynamic control loops, Kalman noise variance matrices, and digital signal filter coefficients in MATLAB/Python before committing a single byte to hardware flash memory.",
    category: "code",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-primary">
        <path d="M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    )
  },
  {
    title: "RTOS Task Boundaries",
    description: "Structuring resource-constrained firmware with clear priority scheduling, event flags, DMA transfers, and deep sleep registers to ensure sub-1ms critical loop deadlines.",
    category: "code",
    icon: <HomeIcons.Cpu className="w-5 h-5 text-primary" />
  },
  {
    title: "Signal Integrity Design",
    description: "Routing critical high-frequency traces with trace impedance matching, solid ground return paths, analog isolation barrier lines, and optimized decoupling placement.",
    category: "design",
    icon: <HomeIcons.Activity className="w-5 h-5 text-primary" />
  },
  {
    title: "Mechanical Footprint Integration",
    description: "Designing PCBs as co-dependent structural parts. Sensor placements, antenna keepouts, trace vias, and 3D housing tolerances are calculated inside SolidWorks modeling early.",
    category: "design",
    icon: <HomeIcons.Layers className="w-5 h-5 text-primary" />
  },
  {
    title: "Field Range Validation",
    description: "Software simulators are useful abstractions, but physical hardware must be stress-tested inside its deployment envelope. Physical telemetry trials (like 70km RF runs) are mandatory.",
    category: "deliver",
    icon: <HomeIcons.Radio className="w-5 h-5 text-primary" />
  },
  {
    title: "Sydney Accord Compliance",
    description: "Documenting systems, validation reports, calculations, and code files to the global mutual recognition standard (IESL / ABET signatory status) for clean validation.",
    category: "deliver",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-primary">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    title: "Modular Abstractions",
    description: "Decoupling peripheral driver interactions from primary control algorithms. Changing a Nordic BLE chip to an ESP32 shouldn't require rewriting core kinematic math logic.",
    category: "code",
    icon: <HomeIcons.Code className="w-5 h-5 text-primary" />
  },
  {
    title: "Thermal & ESD Hardening",
    description: "Integrating TVS diodes, isolated power regulation circuits, decoupling loops, and copper thermal vias to protect sensitive digital cores from inductive kickbacks or discharges.",
    category: "design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-primary">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  },
  {
    title: "User-Centered APIs",
    description: "Empowering developers by delivering abstract communication SDKs (Python/Arduino flight sequences) and graphical drag-and-drop netlist compiler interfaces.",
    category: "deliver",
    icon: <HomeIcons.Navigation className="w-5 h-5 text-primary" />
  }
];

const TESTIMONIALS = [
  {
    quote: "[Quote]",
    author: "[Name], [Company Name]"
  },
  {
    quote: "[Quote]",
    author: "[Name], [Company Name]"
  },
  {
    quote: "[Quote]",
    author: "[Name], [Company Name]"
  }
];

const AWARDS = [
  { name: "ICIET Best Presentation 2021" },
  { name: "Finalist (Top 34 / 300+)" },
  { name: "Dean's List (3rd & 4th Semesters)" }
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const [activeTab, setActiveTab] = useState<"all" | "code" | "design" | "deliver">("all");

  const [projectFilter, setProjectFilter] = useState<string>("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const filteredPrinciples = PRINCIPLES.filter(
    (p) => activeTab === "all" || p.category === activeTab
  );

  return (
    <div className="flex-1 flex flex-col font-sans">
      <ParallaxBackground />

      {/* Hero Section */}
      <section className="min-h-dvh flex items-center relative overflow-hidden select-none backdrop-blur-[2px]">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-xs opacity-5" style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/hero_mechatronics.png')` }} />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />

        <div className="container mx-auto px-6 relative z-10 w-full -mt-12 sm:mt-0 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-8 flex flex-col items-start text-left">
              <p className="animate-fade-in-up text-lg md:text-xl text-primary font-medium mb-4">
                Hi, Pasindu here! 👋
              </p>

              <h1 className="animate-fade-in-up text-[5.5vw] sm:text-[4vw] lg:text-[2.5rem] xl:text-[2.75rem] font-serif tracking-tight text-foreground leading-[1.1] mb-8">
                I am a<br />
                <span className="font-mono text-primary inline-block text-[5.5vw] sm:text-[4vw] lg:text-[2.5rem] xl:text-[2.75rem] whitespace-nowrap min-h-[1.2em] mt-2 relative">
                  {currentText}
                  <span className="inline-block w-1.5 h-[0.8em] bg-primary ml-1.5 align-baseline animate-pulse"></span>
                </span>
              </h1>

              <p className="animate-fade-in-up delay-100 text-base sm:text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl">
                I translate mathematical modeling (Kalman filters, cascaded loops) and low-power RTOS boundaries directly into highly compact, production-ready physical hardware.
              </p>

              <div className="animate-fade-in-up delay-200 flex flex-wrap gap-4 w-full sm:w-auto">
                <Link
                  href="/resume"
                  className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] cursor-pointer"
                >
                  <Icons.FileText className="w-4 h-4 text-primary-foreground" />
                  Résumé
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border-2 border-border hover:border-primary hover:text-primary font-bold text-sm tracking-wider uppercase transition-all duration-300 active:scale-[0.98] bg-background cursor-pointer"
                >
                  <Icons.MessageSquare className="w-4 h-4" />
                  Contact
                </Link>
              </div>

              {/* Mobile scroll indicator */}
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: "smooth" })}
                className="animate-fade-in-up delay-300 mt-12 sm:hidden flex justify-center w-full text-muted-foreground/40 hover:text-primary transition-colors cursor-pointer"
                aria-label="Scroll down"
              >
                <HomeIcons.ChevronsDown className="w-6 h-6 animate-bounce" />
              </button>
            </div>

            {/* Circular Glowing Portrait Schematic Card */}
            <div className="lg:col-span-4 hidden lg:flex justify-center items-center">
              <div className="relative w-64 xl:w-80 aspect-square group">
                <div className="absolute -inset-4 rounded-full border border-primary/15 animate-pulse-slow"></div>
                <div className="absolute -inset-2 rounded-full bg-[conic-gradient(from_0deg,transparent_0%,var(--color-primary)_25%,transparent_50%)] opacity-15 group-hover:opacity-30 animate-spin-slow transition-opacity duration-500"></div>
                <div className="absolute -inset-2 rounded-full border border-primary/10"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-full blur-md group-hover:from-primary/35 group-hover:to-primary/20 transition-all duration-500"></div>
                <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-primary/30 animate-pulse-slow"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-primary/25 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>

                <div className="relative rounded-full w-full h-full ring-4 ring-[#131313] overflow-hidden shadow-2xl bg-[#131313]/60">
                  <Image
                    alt="Pasindu Vihangana Schematic Portrait"
                    fill
                    className="relative object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/portrait.jpg`}
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="border-t border-border bg-[#0a0a0a]/70 backdrop-blur-[2px]">
        <div className="container mx-auto px-6 py-24 sm:py-32 max-w-6xl">
          <div className="mb-16 animate-fade-in-up">
            <div className="flex items-center gap-2 text-primary mb-4">
              <HomeIcons.Briefcase className="w-4 h-4 text-primary" />
              <h2 className="text-xs uppercase tracking-widest font-bold">
                Services
              </h2>
            </div>
            <p className="text-2xl sm:text-3xl font-serif text-foreground">
              My skills, applied.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((srv, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#131313]/45 backdrop-blur-sm border border-border hover:border-primary/20 transition-all duration-300 space-y-3 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/15 group-hover:border-primary/25 transition-all duration-300">
                    {srv.icon}
                  </div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {srv.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-t border-border bg-[#0d0d0d]/40 backdrop-blur-[2px]">
        <div className="container mx-auto px-6 py-24 sm:py-32 max-w-6xl">
          <div className="mb-16">
            <div className="flex items-center gap-2 text-primary mb-4">
              <HomeIcons.Code className="w-4 h-4 text-primary" />
              <h2 className="text-xs uppercase tracking-widest font-bold">
                Skills
              </h2>
            </div>
            <p className="text-2xl sm:text-3xl font-serif text-foreground">
              My technical expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {SKILLS_CATEGORIES.map((category, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#131313]/45 backdrop-blur-sm border border-border space-y-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground border-b border-border/40 pb-3">
                  {category.icon}
                  {category.title}
                </h3>

                <div className="grid grid-cols-4 gap-6">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex flex-col items-center gap-2 group hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="w-10 h-10 rounded-lg bg-muted/40 border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-colors text-xs font-bold font-mono">
                        {skill.name.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="text-[9px] text-muted-foreground group-hover:text-foreground text-center uppercase tracking-wider font-semibold line-clamp-2 h-7 flex items-center justify-center px-0.5">
                        {skill.name}
                      </span>
                      <div className="w-full h-[1.5px] bg-border/50 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: skill.rate }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Certifications */}
          <div className="mt-20 pt-16 border-t border-border/40">
            <div className="flex items-center gap-2 text-primary mb-8 justify-center sm:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v4l3 3" />
              </svg>
              <span className="text-xs uppercase tracking-widest font-bold font-mono">
                Featured Credentials
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl">
              {CERTIFICATIONS.filter(c => c.featured).map((cert, idx) => (
                <div key={idx} className="h-full">
                  <CertificationCard certification={cert} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="relative border-t border-border bg-[#0a0a0a]/70 backdrop-blur-[2px]">
        <div className="container mx-auto px-6 py-24 sm:py-32 max-w-6xl">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-primary mb-4">
                <HomeIcons.Briefcase className="w-4 h-4 text-primary" />
                <h2 className="text-xs uppercase tracking-widest font-bold">Featured Projects</h2>
              </div>
              <p className="text-2xl sm:text-3xl font-serif text-foreground font-medium tracking-tight">Featured Work</p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {["All", "Hardware & IoT", "AI & Computer Vision", "3D & Web", "Mobile & iOS"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setProjectFilter(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-300 cursor-pointer ${projectFilter === cat
                    ? "bg-primary text-primary-foreground border-primary font-bold shadow-md shadow-primary/10"
                    : "bg-[#131313]/50 text-muted-foreground border-border hover:text-foreground hover:border-muted-foreground/30"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.filter(p => projectFilter === "All" || p.categoryLabel === projectFilter).map((proj) => (
              <ProjectCard
                key={proj.id}
                project={proj}
                exploreLabel="Explore Project"
              />
            ))}
          </div>
        </div>

      </section>

      {/* Principles Section */}
      <section className="border-t border-border bg-[#0d0d0d]/40 backdrop-blur-[2px]">
        <div className="container mx-auto px-6 py-24 sm:py-32 max-w-6xl">
          <div className="mb-12">
            <div className="flex items-center gap-2 text-primary mb-4">
              <HomeIcons.Target className="w-4 h-4 text-primary" />
              <h2 className="text-xs uppercase tracking-widest font-bold">
                Principles
              </h2>
            </div>
            <p className="text-2xl sm:text-3xl font-serif text-foreground">
              How I build hardware.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-12">
            <button
              onClick={() => setActiveTab("all")}
              className={`flex items-center gap-2 px-4.5 py-2 text-xs font-semibold rounded-full transition-colors cursor-pointer ${activeTab === "all" ? "bg-primary text-primary-foreground font-bold" : "bg-muted text-muted-foreground hover:text-foreground border border-border"
                }`}
            >
              <HomeIcons.Layers className="w-3.5 h-3.5" />
              All
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-2 px-4.5 py-2 text-xs font-semibold rounded-full transition-colors cursor-pointer ${activeTab === "code" ? "bg-primary text-primary-foreground font-bold" : "bg-muted text-muted-foreground hover:text-foreground border border-border"
                }`}
            >
              <HomeIcons.Code className="w-3.5 h-3.5" />
              How I Code / Model
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={`flex items-center gap-2 px-4.5 py-2 text-xs font-semibold rounded-full transition-colors cursor-pointer ${activeTab === "design" ? "bg-primary text-primary-foreground font-bold" : "bg-muted text-muted-foreground hover:text-foreground border border-border"
                }`}
            >
              <HomeIcons.Wrench className="w-3.5 h-3.5" />
              How I Design / Build
            </button>
            <button
              onClick={() => setActiveTab("deliver")}
              className={`flex items-center gap-2 px-4.5 py-2 text-xs font-semibold rounded-full transition-colors cursor-pointer ${activeTab === "deliver" ? "bg-primary text-primary-foreground font-bold" : "bg-muted text-muted-foreground hover:text-foreground border border-border"
                }`}
            >
              <HomeIcons.Rocket className="w-3.5 h-3.5" />
              How I Deliver / Support
            </button>
          </div>

          {/* Filtered Principles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrinciples.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#131313]/45 backdrop-blur-sm border border-border hover:border-primary/20 transition-all duration-300 flex flex-col space-y-4 animate-fade-in-up"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    {p.icon}
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {p.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (Split column style) */}
      <section className="border-t border-border bg-[#0a0a0a]/70 backdrop-blur-[2px]">
        <div className="container mx-auto px-6 py-24 sm:py-32 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

            <div className="space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <HomeIcons.User className="w-4 h-4 text-primary" />
                <h2 className="text-xs uppercase tracking-widest font-bold">
                  About
                </h2>
              </div>
              <p className="text-2xl sm:text-3xl font-serif text-foreground leading-snug">
                Driven by mechatronic precision — bridging mathematical systems and physical deployments.
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
              <p>
                I am a mechatronics engineer with 3+ years of experience shipping production-grade embedded and robotic systems for international clients. I specialize in low-power firmware development, multilayer high-density PCB layouts, sensor fusion (IMUs, GPS-denied environments), and biomechanical motion analysis.
              </p>
              <p>
                Outside of core mathematics and electronics, I train in martial arts (fighter by night) and write code with a focus on simplicity. I call myself a realistic perfectionist: I have a clear view of physical hardware limitations and deliver optimized, highly reliable systems that win awards and perform in the field.
              </p>
              <a
                href="/resume"
                className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors font-semibold hover-underline"
              >
                View my background
                <HomeIcons.ChevronRight className="w-3.5 h-3.5 mt-0.5" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Reviews & Awards Section */}
      <section className="border-t border-border bg-[#0a0a0a]/70 backdrop-blur-[2px] hidden">
        <div className="container mx-auto px-6 py-24 sm:py-32 max-w-6xl">
          <div className="mb-16">
            <div className="flex items-center gap-2 text-primary mb-4">
              <HomeIcons.Quote className="w-4 h-4 text-primary" />
              <h2 className="text-xs uppercase tracking-widest font-bold">
                Reviews
              </h2>
            </div>
            <p className="text-2xl sm:text-3xl font-serif text-foreground">
              What others say.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-between space-y-4 hover:border-primary/10 transition-colors"
              >
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-border/60 pt-3">
                  <span className="text-[10px] sm:text-xs font-bold text-foreground block">
                    {t.author}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Awards Logo Slider/Grid */}
          <div className="pt-12 border-t border-border/40">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-6 text-center">
              Recognition & National Awards
            </span>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
              {AWARDS.map((aw, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 border border-border/60 rounded-full text-xs font-semibold text-muted-foreground bg-[#131313]/20 hover:text-primary hover:border-primary/20 transition-all cursor-default"
                >
                  🏆 {aw.name}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
