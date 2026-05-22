"use client";

import { useState } from "react";
import Image from "next/image";

// Custom SVG Icons to avoid package peer-dependency issues in React 19
const Icons = {
  Cpu: () => (
    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
    </svg>
  ),
  Activity: () => (
    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  Terminal: () => (
    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  Layers: () => (
    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m11.142 0L21.75 12l-4.179-2.25M12 5.75L6.429 8.75 12 11.75l5.571-3L12 5.75zm0 11l-5.571-3L12 16.75l5.571-3-5.571 3z" />
    </svg>
  ),
  Award: () => (
    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.375M16.5 18.75v-3.375C16.5 12.003 14.248 9.75 11.5 9.75S6.5 12.003 6.5 15.375v3.375m10 0h-10m10 0v-1.125c0-.621-.504-1.125-1.125-1.125h-.375M11.5 9.75V4.625c0-.621-.504-1.125-1.125-1.125h-.375m1.5 6.25v-6.25m-1.5 6.25H8.625c-.621 0-1.125-.504-1.125-1.125v-.375m3.75 1.5H8.625M11.5 3.375A1.125 1.125 0 0112.625 4.5v.375h-2.25V4.5a1.125 1.125 0 011.125-1.125z" />
    </svg>
  ),
  Github: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  ),
  Linkedin: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </svg>
  ),
  Instagram: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
    </svg>
  ),
  ExternalLink: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
  Coffee: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zM12 17c-2.67 0-4.5-1.5-4.5-1.5v-6.5C7.5 8.12 8.12 7.5 9 7.5h6c.88 0 1.5.62 1.5 1.5v6.5s-1.83 1.5-4.5 1.5zm0-9.5V6m-2.25 1.5V6m4.5 1.5V6m-1.5 14h-1.5a1 1 0 01-1-1v-.5h3.5v.5a1 1 0 01-1 1zm4.75-9c1.24 0 2.25.9 2.25 2s-1.01 2-2.25 2h-.25v-4h.25z" />
    </svg>
  )
};

export default function Home() {
  const [projectFilter, setProjectFilter] = useState("all");
  const [activeSide, setActiveSide] = useState<"engineer" | "fighter" | "comedian" | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const projects = [
    {
      id: "falcon-tracker",
      title: "Falcon Tracker",
      category: "hardware",
      desc: "Miniature autonomous bird-tracking device with 70 km+ range, operating on Nordic SoC. Sub-15g compact payload with custom low-power RTOS scheduling.",
      img: "/assets/falcon_tracker.png",
      tags: ["Nordic SoC", "RTOS", "RF Hardware", "Low Power"],
      link: "https://srqrobotics.com"
    },
    {
      id: "fitness-tracker",
      title: "Fitness Tracker",
      category: "hardware",
      desc: "Biomechanical wearable with 6-DoF IMU and digital pressure sensors. Streams athlete metrics via BLE to mobile apps. 4-layer ultra-compact PCB design.",
      img: "/assets/fitness_tracker.png",
      tags: ["Nordic nRF52", "6-DoF IMU", "BLE", "4-layer PCB", "MATLAB"],
      link: "https://srqrobotics.com"
    },
    {
      id: "dance-better",
      title: "DanceBetter",
      category: "software",
      desc: "AI-driven motion analysis SaaS platform using computer vision pose estimation to track posture, timing, and coordinate balance for athlete rehabilitation.",
      img: "/assets/dance_better.png",
      tags: ["Computer Vision", "Pose Estimation", "React", "Next.js", "Python"],
      link: "https://dancebetter.org"
    },
    {
      id: "xfly",
      title: "X-Fly 1.0 (QubeBots)",
      category: "hardware",
      desc: "Award-winning programmable STEM educational quadcopter. Cascaded PID controller, Madgwick orientation filter, EKF altitude estimation on ESP32.",
      img: "/assets/xfly_drone.png",
      tags: ["ESP32", "PID Control", "EKF", "Madgwick Filter", "Python SDK"],
      link: "https://qubebots.com"
    },
    {
      id: "arduino-visual",
      title: "Arduino Visual Programmer",
      category: "software",
      desc: "Graphical netlist-based compiler for microcontrollers allowing visual code construction without C++ syntax. Published research project.",
      img: "/assets/hero_mechatronics.png",
      tags: ["Python", "Netlist Compiler", "Visual Programming", "Research Paper"],
      link: "https://github.com/Pasindu-Vihangana/Arduino-Visual-Programmer"
    },
    {
      id: "arduino-interpreter",
      title: "Arduino Interpreter",
      category: "software",
      desc: "Comprehensive emulator/compiler for Arduino I/O, supporting direct runtimes of Visual Programmer output netlists.",
      img: "/assets/hero_mechatronics.png",
      tags: ["C++", "Emulator", "Parser", "Arduino"],
      link: "https://github.com/Pasindu-Vihangana/Arduino-Interpreter"
    },
    {
      id: "smart-thermostat",
      title: "SmartHomeThermostat",
      category: "software",
      desc: "A fully custom, highly animated smart home thermostat controller application built in SwiftUI featuring modern gesture controls.",
      img: "/assets/hero_mechatronics.png",
      tags: ["SwiftUI", "iOS App", "Micro-Animations", "UX Design"],
      link: "https://github.com/Pasindu-Vihangana/SmartHomeThermostat"
    },
    {
      id: "med-dispenser",
      title: "MedDispenser",
      category: "hardware",
      desc: "Embedded medication dispensing control unit featuring timed alerts, locked compartment locks, and real-time C++ scheduling.",
      img: "/assets/hero_mechatronics.png",
      tags: ["C++", "AVR MCU", "Real-Time Scheduling", "Actuators"],
      link: "https://github.com/Pasindu-Vihangana/MedDispenser"
    }
  ];

  const filteredProjects = projectFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === projectFilter);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <div className="bg-canvas text-[#e4e2e1] min-h-screen selection:bg-gold selection:text-canvas">
      
      {/* Dynamic Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-canvas/80 border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className="group">
            <span className="font-serif text-lg tracking-wide group-hover:text-gold transition-colors duration-300">
              PASINDU.V
            </span>
          </a>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-sans tracking-widest text-[#a7a5a5]">
            <a href="#about" className="hover:text-[#e4e2e1] transition-colors">ABOUT</a>
            <a href="#skills" className="hover:text-[#e4e2e1] transition-colors">SKILLS</a>
            <a href="#experience" className="hover:text-[#e4e2e1] transition-colors">EXPERIENCE</a>
            <a href="#projects" className="hover:text-[#e4e2e1] transition-colors">PROJECTS</a>
            <a href="#awards" className="hover:text-[#e4e2e1] transition-colors">AWARDS</a>
            <a href="#contact" className="hover:text-[#e4e2e1] transition-colors">CONTACT</a>
          </nav>
          <div>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-gold text-gold text-xs tracking-widest font-semibold hover:bg-gold hover:text-canvas transition-all duration-300"
            >
              HIRE ME
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center py-20 overflow-hidden">
        {/* Background Image Mask */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image 
            src="/assets/hero_mechatronics.png" 
            alt="Mechatronics background" 
            fill
            className="object-cover object-center filter grayscale contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/60 to-canvas" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div className="inline-flex items-center space-x-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-sans tracking-widest uppercase text-gold font-bold">
                ROBOTICS & EMBEDDED SYSTEMS ENGINEER
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif leading-tight tracking-tight text-white">
              Pasindu Vihangana
            </h1>
            
            <p className="text-xl md:text-2xl font-serif italic text-gold max-w-2xl border-l-2 border-gold/40 pl-4 py-1">
              &ldquo;Engineer by Day. Fighter by Night. Comedian on Weekends.&rdquo;
            </p>

            <p className="text-base text-[#a7a5a5] max-w-xl leading-relaxed font-sans">
              3+ years shipping production hardware across healthcare, robotics, and STEM education. Specializing in sensor fusion, motion analysis, and control systems. I bridge the gap between mathematical models and robust physical deployments.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-8 py-4 rounded-full bg-gold text-canvas font-bold text-xs tracking-widest hover:bg-gold-hover transition-colors shadow-lg shadow-gold/10"
              >
                VIEW WORK
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-full border border-white/10 hover:border-white/30 text-white font-bold text-xs tracking-widest transition-colors backdrop-blur-sm"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>

          {/* Social Proof Quick Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-[#1f2020]/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex flex-col justify-between h-40 hover:border-gold/20 transition-all duration-300">
              <span className="text-3xl font-serif text-white font-bold">70 km+</span>
              <span className="text-xs text-[#a7a5a5] uppercase tracking-wider font-semibold">Autonomous RF tracking range achieved</span>
            </div>
            <div className="bg-[#1f2020]/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex flex-col justify-between h-40 hover:border-gold/20 transition-all duration-300">
              <span className="text-3xl font-serif text-white font-bold">&lt; 15 g</span>
              <span className="text-xs text-[#a7a5a5] uppercase tracking-wider font-semibold">Miniature tracker weight payload</span>
            </div>
            <div className="bg-[#1f2020]/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex flex-col justify-between h-40 hover:border-gold/20 transition-all duration-300">
              <span className="text-3xl font-serif text-white font-bold">0.005°/s</span>
              <span className="text-xs text-[#a7a5a5] uppercase tracking-wider font-semibold">Rotational rate precision tracking</span>
            </div>
            <div className="bg-[#1f2020]/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex flex-col justify-between h-40 hover:border-gold/20 transition-all duration-300">
              <span className="text-3xl font-serif text-white font-bold">3+ Years</span>
              <span className="text-xs text-[#a7a5a5] uppercase tracking-wider font-semibold">Shipping commercial hardware models</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section & The 3 Sides */}
      <section id="about" className="py-32 border-t border-white/5 relative bg-[#1c1b1b]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <span className="text-xs font-sans tracking-widest uppercase text-gold font-bold">
                THE MAN BEHIND THE MACHINE
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">
                Quietly Ambitious, Technically Grounded
              </h2>
              <p className="text-base text-[#a7a5a5] leading-relaxed">
                I am a Mechatronics Engineer graduated with B.Eng.Tech (Hons) from the University of Sri Jayewardenepura. My career has focused on translating mathematical models and algorithm development directly into physical hardware deployments.
              </p>
              <p className="text-base text-[#a7a5a5] leading-relaxed">
                I thrive in GPS-denied autonomous navigation, multi-body kinematic tracking, and custom miniature PCB layout. I am constantly seeking theoretical depth that pure applied work rarely provides.
              </p>
              
              <div className="border border-white/5 rounded-2xl p-6 bg-canvas/30 space-y-3">
                <span className="text-xs text-gold font-bold uppercase tracking-widest block">Education & Accreditation</span>
                <span className="text-sm text-white font-serif block font-bold">B.Eng.Tech (Hons) in Mechatronics Technology</span>
                <span className="text-xs text-[#a7a5a5] block">GPA: 3.64 / 4.00 (Second Upper Class Honours)</span>
                <span className="text-xs text-[#a7a5a5] border-t border-white/5 pt-2 block mt-2">
                  🛡️ Accredited under the <strong className="text-white">Sydney Accord</strong> (IESL / ABET signatory) for global mutual recognition.
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col space-y-8">
              <h3 className="text-lg font-serif text-white border-b border-white/5 pb-2">
                Click to explore the three sides of my personality:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Side 1: The Engineer */}
                <div 
                  onClick={() => setActiveSide(activeSide === "engineer" ? null : "engineer")}
                  className={`border p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeSide === "engineer" 
                      ? "bg-[#1f2020] border-gold shadow-md shadow-gold/5" 
                      : "bg-[#1f2020]/20 border-white/5 hover:border-white/15"
                  }`}
                >
                  <span className="text-2xl mb-4 block">👨🏻‍💻</span>
                  <h4 className="text-lg font-serif text-white font-bold mb-2">The Engineer</h4>
                  <p className="text-xs text-[#a7a5a5]">Ships custom hardware, RTOS scheduling, and sensor fusion algorithms.</p>
                  {activeSide === "engineer" && (
                    <div className="mt-4 pt-4 border-t border-white/5 text-xs text-[#e4e2e1] space-y-2 animate-fadeIn">
                      <p>Full-cycle mechatronics: mathematical modelling to physical deployment.</p>
                      <p className="text-gold font-semibold">Specialty: 4-layer PCBs, RTOS, Kalman filters.</p>
                    </div>
                  )}
                </div>

                {/* Side 2: The Fighter */}
                <div 
                  onClick={() => setActiveSide(activeSide === "fighter" ? null : "fighter")}
                  className={`border p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeSide === "fighter" 
                      ? "bg-[#1f2020] border-gold shadow-md shadow-gold/5" 
                      : "bg-[#1f2020]/20 border-white/5 hover:border-white/15"
                  }`}
                >
                  <span className="text-2xl mb-4 block">🥊</span>
                  <h4 className="text-lg font-serif text-white font-bold mb-2">The Fighter</h4>
                  <p className="text-xs text-[#a7a5a5]">Trains martial arts, embedding focus, discipline, and endurance into my work.</p>
                  {activeSide === "fighter" && (
                    <div className="mt-4 pt-4 border-t border-white/5 text-xs text-[#e4e2e1] space-y-2 animate-fadeIn">
                      <p>Physical combat training breeds mental resilience and composure under pressure.</p>
                      <p className="text-gold font-semibold">Mindset: Rigorous discipline, fast reflexes.</p>
                    </div>
                  )}
                </div>

                {/* Side 3: The Comedian */}
                <div 
                  onClick={() => setActiveSide(activeSide === "comedian" ? null : "comedian")}
                  className={`border p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeSide === "comedian" 
                      ? "bg-[#1f2020] border-gold shadow-md shadow-gold/5" 
                      : "bg-[#1f2020]/20 border-white/5 hover:border-white/15"
                  }`}
                >
                  <span className="text-2xl mb-4 block">😂</span>
                  <h4 className="text-lg font-serif text-white font-bold mb-2">The Comedian</h4>
                  <p className="text-xs text-[#a7a5a5]">Self-described bad/dad joke dispenser who values approachable warmth.</p>
                  {activeSide === "comedian" && (
                    <div className="mt-4 pt-4 border-t border-white/5 text-xs text-[#e4e2e1] space-y-2 animate-fadeIn">
                      <p>Building complex hardware is intense, but communication shouldn&apos;t be. Good humor makes partnerships thrive.</p>
                      <p className="text-gold font-semibold">Vibe: Warm, grounded, zero corporate filters.</p>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-20 flex flex-col space-y-4">
            <span className="text-xs font-sans tracking-widest uppercase text-gold font-bold">CORE CAPABILITIES</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Full-Stack Mechatronics Depth</h2>
            <div className="h-0.5 w-12 bg-gold mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Control & Estimation */}
            <div className="bg-[#1f2020]/30 border border-white/5 p-8 rounded-2xl hover:border-gold/20 hover:bg-[#1f2020]/40 transition-all duration-300 flex flex-col space-y-6 group">
              <div className="p-3 bg-canvas border border-white/5 rounded-xl w-fit group-hover:border-gold/20 transition-colors">
                <Icons.Activity />
              </div>
              <h3 className="text-xl font-serif text-white font-bold">Control & Estimation</h3>
              <ul className="space-y-3 text-sm text-[#a7a5a5] flex-1">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span>Cascaded PID control</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span>Kalman Filter & EKF</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span>Madgwick & Mahony filter</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span>GPS-denied navigation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span>MATLAB modeling & DSP</span>
                </li>
              </ul>
            </div>

            {/* Programming & Firmware */}
            <div className="bg-[#1f2020]/30 border border-white/5 p-8 rounded-2xl hover:border-gold/20 hover:bg-[#1f2020]/40 transition-all duration-300 flex flex-col space-y-6 group">
              <div className="p-3 bg-canvas border border-white/5 rounded-xl w-fit group-hover:border-gold/20 transition-colors">
                <Icons.Terminal />
              </div>
              <h3 className="text-xl font-serif text-white font-bold">Firmware & Protocols</h3>
              <ul className="space-y-3 text-sm text-[#a7a5a5] flex-1">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span>Languages: C/C++, Python, Swift</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span>Nordic nRF52, ESP32, STM32</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span>RTOS scheduling, low-power</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span>BLE (nRF), I2C, SPI, UART</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span>iOS App Dev (SwiftUI)</span>
                </li>
              </ul>
            </div>

            {/* AI, ML & Signal Processing */}
            <div className="bg-[#1f2020]/30 border border-white/5 p-8 rounded-2xl hover:border-gold/20 hover:bg-[#1f2020]/40 transition-all duration-300 flex flex-col space-y-6 group">
              <div className="p-3 bg-canvas border border-white/5 rounded-xl w-fit group-hover:border-gold/20 transition-colors">
                <Icons.Cpu />
              </div>
              <h3 className="text-xl font-serif text-white font-bold">AI & Computer Vision</h3>
              <ul className="space-y-3 text-sm text-[#a7a5a5] flex-1">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span>Pose estimation algorithms</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span>PyTorch & TensorFlow</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span>Garment piece count CV</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span>NumPy, SciPy, Pandas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span>Frequency spectrum analysis</span>
                </li>
              </ul>
            </div>

            {/* Hardware & Design */}
            <div className="bg-[#1f2020]/30 border border-white/5 p-8 rounded-2xl hover:border-gold/20 hover:bg-[#1f2020]/40 transition-all duration-300 flex flex-col space-y-6 group">
              <div className="p-3 bg-canvas border border-white/5 rounded-xl w-fit group-hover:border-gold/20 transition-colors">
                <Icons.Layers />
              </div>
              <h3 className="text-xl font-serif text-white font-bold">Hardware & Design</h3>
              <ul className="space-y-3 text-sm text-[#a7a5a5] flex-1">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span>Multilayer PCB design (4-layer)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span>SolidWorks 3D modelling</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span>RF design & miniaturisation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span>3D printing & enclosure fit</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span>Blender 3D visual assets</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-32 border-t border-white/5 bg-[#1c1b1b]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-20 flex flex-col space-y-4">
            <span className="text-xs font-sans tracking-widest uppercase text-gold font-bold">PROFESSIONAL CHRONOLOGY</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Shipping Commercial Hardware</h2>
            <div className="h-0.5 w-12 bg-gold mx-auto mt-2" />
          </div>

          <div className="max-w-4xl mx-auto relative border-l border-white/10 pl-6 md:pl-12 space-y-20">
            
            {/* SRQ Robotics */}
            <div className="relative">
              {/* Timeline dot */}
              <span className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-gold ring-4 ring-canvas" />
              
              <div className="flex flex-col space-y-3">
                <span className="text-xs font-sans text-gold font-bold tracking-widest">
                  AUG 2022 – PRESENT | ROBOTICS & EMBEDDED SYSTEMS ENGINEER
                </span>
                <h3 className="text-2xl font-serif text-white font-bold">
                  SRQ Robotics LLC
                </h3>
                <a href="https://srqrobotics.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#a7a5a5] hover:text-gold flex items-center space-x-1.5 w-fit">
                  <span>srqrobotics.com</span>
                  <Icons.ExternalLink />
                </a>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="bg-canvas border border-white/5 p-5 rounded-2xl space-y-2">
                    <span className="text-xs text-gold uppercase tracking-wider font-semibold">Wearable & Motion Analysis</span>
                    <ul className="text-sm text-[#a7a5a5] space-y-2 list-disc list-inside">
                      <li><strong>Falcon Tracker</strong>: Autonomous tracking (70 km range, low-power RTOS on Nordic, &lt;15g).</li>
                      <li><strong>Fitness Tracker</strong>: IMU + pressure estimation, C++ firmware on nRF52, 4-layer PCB.</li>
                      <li><strong>High-Precision Rotational Tracker</strong>: 0.005°/s precision gyro-fusion, Kalman & Mahony.</li>
                    </ul>
                  </div>

                  <div className="bg-canvas border border-white/5 p-5 rounded-2xl space-y-2">
                    <span className="text-xs text-gold uppercase tracking-wider font-semibold">Drones & AI Systems</span>
                    <ul className="text-sm text-[#a7a5a5] space-y-2 list-disc list-inside">
                      <li><strong>X-Fly</strong>: Programmable STEM drone, cascaded PID control, Madgwick filter on ESP32.</li>
                      <li><strong>DanceBetter SaaS</strong>: Movement assessment pose estimation with timestamped metrics.</li>
                      <li>Single-MCU flight control + BLE concurrent optimisation.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* MAS Intimates */}
            <div className="relative">
              {/* Timeline dot */}
              <span className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-white/30 ring-4 ring-canvas" />
              
              <div className="flex flex-col space-y-3">
                <span className="text-xs font-sans text-[#a7a5a5] tracking-widest">
                  APR 2021 – DEC 2021 | MECHATRONICS ENGINEERING INTERN
                </span>
                <h3 className="text-2xl font-serif text-white font-bold">
                  MAS Intimates
                </h3>
                
                <div className="bg-canvas border border-white/5 p-5 rounded-2xl space-y-2 mt-2">
                  <ul className="text-sm text-[#a7a5a5] space-y-2 list-disc list-inside">
                    <li>Developed computer vision + ML pipeline for real-time fabric garment piece counting.</li>
                    <li>Designed sensor-based automatic alignment control system for fabric rollers.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="flex flex-col space-y-4">
              <span className="text-xs font-sans tracking-widest uppercase text-gold font-bold">CASE STUDIES</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">Engineering Portfolio</h2>
              <div className="h-0.5 w-12 bg-gold mt-2" />
            </div>

            {/* Filter Tabs */}
            <div className="flex bg-[#1f2020]/40 border border-white/5 p-1 rounded-full w-fit">
              <button 
                onClick={() => setProjectFilter("all")}
                className={`px-5 py-2.5 rounded-full text-xs tracking-wider uppercase font-semibold transition-all ${
                  projectFilter === "all" ? "bg-gold text-canvas font-bold" : "text-[#a7a5a5] hover:text-[#e4e2e1]"
                }`}
              >
                ALL
              </button>
              <button 
                onClick={() => setProjectFilter("hardware")}
                className={`px-5 py-2.5 rounded-full text-xs tracking-wider uppercase font-semibold transition-all ${
                  projectFilter === "hardware" ? "bg-gold text-canvas font-bold" : "text-[#a7a5a5] hover:text-[#e4e2e1]"
                }`}
              >
                HARDWARE & FIRMWARE
              </button>
              <button 
                onClick={() => setProjectFilter("software")}
                className={`px-5 py-2.5 rounded-full text-xs tracking-wider uppercase font-semibold transition-all ${
                  projectFilter === "software" ? "bg-gold text-canvas font-bold" : "text-[#a7a5a5] hover:text-[#e4e2e1]"
                }`}
              >
                AI & SOFTWARE
              </button>
            </div>
          </div>

          {/* Project Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-[#1f2020]/20 border border-white/5 rounded-2xl overflow-hidden hover:border-gold/25 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden bg-[#131313]/60">
                  <Image 
                    src={project.img} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f2020]/95 via-[#1f2020]/30 to-transparent" />
                </div>
                
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <h3 className="text-xl font-serif text-white font-bold group-hover:text-gold transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 text-gold transition-all">
                      <Icons.ExternalLink />
                    </a>
                  </h3>
                  
                  <p className="text-sm text-[#a7a5a5] leading-relaxed flex-grow">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded bg-[#1f2020] text-[#c6c6c7] border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-32 border-t border-white/5 bg-[#1c1b1b]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-20 flex flex-col space-y-4">
            <span className="text-xs font-sans tracking-widest uppercase text-gold font-bold">ACCOLADES & PUBLICATIONS</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Award-Winning Quality</h2>
            <div className="h-0.5 w-12 bg-gold mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Award 1 */}
            <div className="bg-[#1f2020]/30 border border-white/5 p-6 rounded-2xl hover:border-gold/15 transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <Icons.Award />
                <span className="text-xs font-sans font-bold text-gold tracking-wider">ICIET PUBLICATION</span>
              </div>
              <h3 className="text-lg font-serif text-white font-bold mb-2">Best Presentation Award</h3>
              <p className="text-xs text-[#a7a5a5] leading-relaxed">
                Presented research paper: &ldquo;Algorithmic approach to minimise text-based programming for microcontrollers using graphical netlist generation&rdquo; at ICIET 2021.
              </p>
            </div>

            {/* Award 2 */}
            <div className="bg-[#1f2020]/30 border border-white/5 p-6 rounded-2xl hover:border-gold/15 transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <Icons.Award />
                <span className="text-xs font-sans font-bold text-gold tracking-wider">SLASSCOM 2024</span>
              </div>
              <h3 className="text-lg font-serif text-white font-bold mb-2">National Winner</h3>
              <p className="text-xs text-[#a7a5a5] leading-relaxed">
                Recognised nationally for leadership and technical innovation in the development of the X-Fly drone educational platform.
              </p>
            </div>

            {/* Award 3 */}
            <div className="bg-[#1f2020]/30 border border-white/5 p-6 rounded-2xl hover:border-gold/15 transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <Icons.Award />
                <span className="text-xs font-sans font-bold text-gold tracking-wider">NICTA & APICTA</span>
              </div>
              <h3 className="text-lg font-serif text-white font-bold mb-2">Gold Medal & Merit</h3>
              <p className="text-xs text-[#a7a5a5] leading-relaxed">
                Awarded NICTA Gold 2023 and APICTA Merit 2023 for autonomous flight stability algorithms developed for the QubeBots platforms.
              </p>
            </div>

            {/* Award 4 */}
            <div className="bg-[#1f2020]/30 border border-white/5 p-6 rounded-2xl hover:border-gold/15 transition-all lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <Icons.Award />
                <span className="text-xs font-sans font-bold text-gold tracking-wider">IICE 2020</span>
              </div>
              <h3 className="text-lg font-serif text-white font-bold mb-2">Finalist (Top 34 / 300+)</h3>
              <p className="text-xs text-[#a7a5a5] leading-relaxed">
                Created the LP Gas Level Indicator IoT safety system, providing automated weight telemetry and shut-off valves.
              </p>
            </div>

            {/* Award 5 */}
            <div className="bg-[#1f2020]/30 border border-white/5 p-6 rounded-2xl hover:border-gold/15 transition-all lg:col-span-2 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-2">
                <Icons.Award />
                <span className="text-xs font-sans font-bold text-gold tracking-wider">HONOUR ROLLS</span>
              </div>
              <h3 className="text-lg font-serif text-white font-bold mb-1">Dean&apos;s List (3rd & 4th Semesters)</h3>
              <p className="text-xs text-[#a7a5a5]">
                University of Sri Jayewardenepura. Also named Semi-Finalist for the Best Employability Skills Achiever in 2021.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col space-y-8">
              <div className="flex flex-col space-y-4">
                <span className="text-xs font-sans tracking-widest uppercase text-gold font-bold">GET IN TOUCH</span>
                <h2 className="text-4xl md:text-5xl font-serif text-white">Let&apos;s Connect</h2>
                <div className="h-0.5 w-12 bg-gold mt-2" />
              </div>

              <p className="text-base text-[#a7a5a5] leading-relaxed max-w-md">
                Whether you have an embedded systems project, a robotics consultancy requirement, or just want to tell a bad joke — send a message!
              </p>

              <div className="space-y-4 text-sm">
                <div className="flex items-center space-x-3">
                  <span className="text-gold font-bold w-16 uppercase tracking-wider text-xs">Email:</span>
                  <a href="mailto:pasi1028@gmail.com" className="text-white hover:text-gold transition-colors font-serif">pasi1028@gmail.com</a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gold font-bold w-16 uppercase tracking-wider text-xs">Phone:</span>
                  <span className="text-[#a7a5a5]">(+94) 76 3498 429</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gold font-bold w-16 uppercase tracking-wider text-xs">Location:</span>
                  <span className="text-[#a7a5a5]">Colombo, Sri Lanka</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex items-center space-x-5 pt-4 border-t border-white/5 w-fit">
                <a href="https://github.com/Pasindu-Vihangana" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#1f2020]/40 border border-white/5 rounded-full text-[#a7a5a5] hover:text-gold hover:border-gold/20 transition-all">
                  <Icons.Github />
                </a>
                <a href="https://www.linkedin.com/in/pasindu-vihangana/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#1f2020]/40 border border-white/5 rounded-full text-[#a7a5a5] hover:text-gold hover:border-gold/20 transition-all">
                  <Icons.Linkedin />
                </a>
                <a href="https://www.instagram.com/romeo_skywalker" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#1f2020]/40 border border-white/5 rounded-full text-[#a7a5a5] hover:text-gold hover:border-gold/20 transition-all">
                  <Icons.Instagram />
                </a>
                <a href="https://buymeacoffee.com/pasindu.vihangana" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#1f2020]/40 border border-white/5 rounded-full text-[#a7a5a5] hover:text-gold hover:border-gold/20 transition-all">
                  <Icons.Coffee />
                </a>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7 bg-[#1f2020]/20 border border-white/5 p-8 md:p-10 rounded-2xl">
              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center text-center space-y-4 py-12 animate-fadeIn">
                  <span className="text-4xl">🚀</span>
                  <h3 className="text-2xl font-serif text-white font-bold">Message Transmitted!</h3>
                  <p className="text-sm text-[#a7a5a5] max-w-sm">
                    Thank you for reaching out. The system has queued your contact details, and I will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setFormStatus("idle")} 
                    className="mt-6 px-6 py-2.5 rounded-full border border-gold/40 text-gold text-xs tracking-widest font-semibold hover:bg-gold hover:text-canvas transition-all"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-[#a7a5a5] font-semibold">NAME</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name" 
                      className="bg-[#1f2020]/40 border-b border-white/10 py-3 text-sm focus:outline-none focus:border-gold text-white placeholder-white/20 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-[#a7a5a5] font-semibold">EMAIL</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email address" 
                      className="bg-[#1f2020]/40 border-b border-white/10 py-3 text-sm focus:outline-none focus:border-gold text-white placeholder-white/20 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-[#a7a5a5] font-semibold">MESSAGE</label>
                    <textarea 
                      id="message" 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      placeholder="Write your project details or inquiries..." 
                      className="bg-[#1f2020]/40 border border-white/5 rounded-xl p-4 text-sm focus:outline-none focus:border-gold text-white placeholder-white/20 transition-colors"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === "submitting"}
                    className="w-full py-4 rounded-full bg-gold text-canvas font-bold text-xs tracking-widest hover:bg-gold-hover transition-colors shadow-lg shadow-gold/5 flex items-center justify-center space-x-2"
                  >
                    <span>{formStatus === "submitting" ? "TRANSMITTING..." : "TRANSMIT MESSAGE"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-canvas">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#a7a5a5] gap-4">
          <p>© {new Date().getFullYear()} Pasindu Vihangana. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="text-gold font-bold">🎛️ MATHEMATICAL MODEL → PHYSICAL DEPLOYMENT</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
