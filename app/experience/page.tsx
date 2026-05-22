"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icons } from "../components/Icons";

interface Project {
  id: string;
  title: string;
  category: "hardware" | "software";
  desc: string;
  img: string;
  tags: string[];
  link: string;
}

const PROJECTS: Project[] = [
  {
    id: "falcon-tracker",
    title: "Falcon Tracker",
    category: "hardware",
    desc: "Miniature autonomous tracking device with 70 km+ range. Powered by Nordic SoC and running a custom low-power RTOS scheduling model. Under 15g total weight.",
    img: "/assets/falcon_tracker.png",
    tags: ["Nordic SoC", "RTOS", "RF Hardware", "Low Power"],
    link: "https://srqrobotics.com"
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    category: "hardware",
    desc: "Biomechanical athletic tracker incorporating 6-DoF IMU and pressure sensors. Streams orientation rates and velocity metrics via BLE on Nordic nRF52 SoC.",
    img: "/assets/fitness_tracker.png",
    tags: ["nRF52", "IMU Fusion", "BLE", "4-layer PCB"],
    link: "https://srqrobotics.com"
  },
  {
    id: "dance-better",
    title: "DanceBetter AI",
    category: "software",
    desc: "AI SaaS utilizing computer vision human pose estimation to track posture, timing, and coordinate balance for rehabilitation and biomechanical modeling.",
    img: "/assets/dance_better.png",
    tags: ["Computer Vision", "Pose Estimation", "Next.js", "Python"],
    link: "https://dancebetter.org"
  },
  {
    id: "xfly",
    title: "X-Fly STEM Drone",
    category: "hardware",
    desc: "Award-winning programmable educational quadcopter drone. Implements cascaded PID stabilization, EKF altitude estimation, and BLE control on ESP32.",
    img: "/assets/xfly_drone.png",
    tags: ["ESP32", "PID Control", "EKF Fusion", "Python SDK"],
    link: "https://qubebots.com"
  },
  {
    id: "visual-compiler",
    title: "MCU Netlist Compiler",
    category: "software",
    desc: "Research-grade graphical visual compiler converting node layouts directly into machine compiled executables without C++ syntax coding.",
    img: "/assets/hero_mechatronics.png",
    tags: ["Python", "Netlist Compiler", "Visual Programming", "ICIET Award"],
    link: "https://github.com/Pasindu-Vihangana/Arduino-Visual-Programmer"
  },
  {
    id: "visual-interpreter",
    title: "Arduino Netlist Interpreter",
    category: "software",
    desc: "Full emulation runtime for Arduino microcontrollers executing netlists generated from the MCU Visual compiler.",
    img: "/assets/hero_mechatronics.png",
    tags: ["C++", "Parser", "AVR Emulation"],
    link: "https://github.com/Pasindu-Vihangana/Arduino-Interpreter"
  }
];

export default function ExperiencePage() {
  const [projectFilter, setProjectFilter] = useState<"all" | "hardware" | "software">("all");

  const filteredProjects = projectFilter === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === projectFilter);

  return (
    <div className="flex-1 bg-background text-foreground py-16 sm:py-24 font-sans animate-fade-in-up">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Page Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-primary mb-4">
            <Icons.Briefcase className="w-4 h-4 text-primary" />
            <span className="text-xs uppercase tracking-widest font-bold">
              Experience
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">
            Work Experience
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            A timeline of my professional journey, building and shipping commercial mechatronics systems for international clients.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto mb-28">
          <div className="relative py-8 sm:py-16">
            
            {/* Centered Timeline Line */}
            <div className="absolute left-[7px] sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20">
              <div className="absolute inset-0 bg-primary/40 animate-pulse rounded-full" />
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="space-y-16 sm:space-y-24">
              
              {/* SRQ Robotics - Left Side (Active) */}
              <div className="relative pl-8 sm:pl-0 sm:w-1/2 sm:pr-12 sm:text-right">
                
                {/* Active Glowing Dot centered on timeline */}
                <div className="absolute top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-primary bg-background ring-4 ring-primary/20 left-0 sm:left-auto sm:-right-2.5 z-10">
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-45" />
                  <span className="absolute inset-1 sm:inset-1.5 rounded-full bg-primary" />
                </div>

                {/* Sub-projects list floating on the opposite side of the timeline */}
                <div className="absolute top-2 space-y-4 hidden sm:block sm:-right-[51.5px] text-left z-15">
                  <div className="relative flex items-center justify-start">
                    <span className="w-2 h-2 rounded-full border border-primary/50 bg-background shrink-0" />
                    <span className="absolute text-[10px] text-muted-foreground/80 hover:text-primary transition-colors whitespace-nowrap left-5">
                      Falcon Tracker
                    </span>
                  </div>
                  <div className="relative flex items-center justify-start">
                    <span className="w-2 h-2 rounded-full border border-primary/50 bg-background shrink-0" />
                    <span className="absolute text-[10px] text-muted-foreground/80 hover:text-primary transition-colors whitespace-nowrap left-5">
                      Fitness Tracker
                    </span>
                  </div>
                  <div className="relative flex items-center justify-start">
                    <span className="w-2 h-2 rounded-full border border-primary/50 bg-background shrink-0" />
                    <span className="absolute text-[10px] text-muted-foreground/80 hover:text-primary transition-colors whitespace-nowrap left-5">
                      Wearable Rehab
                    </span>
                  </div>
                  <div className="relative flex items-center justify-start">
                    <span className="w-2 h-2 rounded-full border border-primary/50 bg-background shrink-0" />
                    <span className="absolute text-[10px] text-muted-foreground/80 hover:text-primary transition-colors whitespace-nowrap left-5">
                      Rotational Rate Tracker
                    </span>
                  </div>
                </div>

                {/* Role Details */}
                <div className="group">
                  <span className="inline-block px-2.5 py-0.5 mb-2 text-[10px] uppercase font-bold tracking-widest bg-primary/10 text-primary rounded-full">
                    Aug 2022 — Present · 3 yrs 9 mos
                  </span>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Robotics &amp; Embedded Systems Engineer
                  </h3>
                  <div className="flex items-center gap-1.5 text-muted-foreground mt-1 sm:justify-end">
                    <span className="font-semibold text-sm">SRQ Robotics LLC</span>
                    <span>·</span>
                    <a 
                      href="https://srqrobotics.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs hover:text-primary hover-underline flex items-center gap-0.5"
                    >
                      srqrobotics.com
                      <Icons.ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-lg sm:ml-auto">
                    Full-cycle design and firmware deployment for production hardware. Engineered micro-telemetry wearables, BLE athletic trackers, rehabilitation sensors, and cascaded flight stabilization controls for international drone platforms.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-5 sm:justify-end">
                    {["Nordic SoC", "RTOS", "BLE", "EKF Fusion", "C/C++", "PCB Design", "SolidWorks"].map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[9px] uppercase font-bold tracking-wider bg-card border border-border text-muted-foreground rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* MAS Intimates - Right Side (Past) */}
              <div className="relative pl-8 sm:pl-0 sm:w-1/2 sm:pl-12 sm:ml-auto">
                
                {/* Past Dot centered on timeline */}
                <div className="absolute top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-primary bg-background left-0 sm:-left-2.5 z-10">
                  <span className="absolute inset-1 sm:inset-1.5 rounded-full bg-primary/60" />
                </div>

                {/* Sub-projects list floating on the opposite side of the timeline */}
                <div className="absolute top-2 space-y-4 hidden sm:block sm:-left-[51.5px] text-right z-15">
                  <div className="relative flex items-center justify-end">
                    <span className="absolute text-[10px] text-muted-foreground/80 hover:text-primary transition-colors whitespace-nowrap right-5">
                      Garment Counting AI
                    </span>
                    <span className="w-2 h-2 rounded-full border border-primary/50 bg-background shrink-0" />
                  </div>
                  <div className="relative flex items-center justify-end">
                    <span className="absolute text-[10px] text-muted-foreground/80 hover:text-primary transition-colors whitespace-nowrap right-5">
                      Roller Control Loops
                    </span>
                    <span className="w-2 h-2 rounded-full border border-primary/50 bg-background shrink-0" />
                  </div>
                </div>

                {/* Role Details */}
                <div className="group">
                  <span className="inline-block px-2.5 py-0.5 mb-2 text-[10px] uppercase font-bold tracking-widest bg-muted text-muted-foreground rounded-full">
                    Apr 2021 — Dec 2021 · 9 mos
                  </span>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Mechatronics Engineering Intern
                  </h3>
                  <p className="text-sm font-semibold text-muted-foreground mt-1">
                    MAS Intimates
                  </p>
                  
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-lg">
                    Developed computer vision and ML pipeline models for automated fabric piece counting. Modeled closed-loop roller alignment feeds using digital sensors and custom embedded actuation routines.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {["Computer Vision", "Python", "ML Pipelines", "Closed-loop Control", "Industrial Sensors"].map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[9px] uppercase font-bold tracking-wider bg-card border border-border text-muted-foreground rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Projects Section */}
        <section className="border-t border-border/40 pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 text-primary mb-4">
                <Icons.Cpu className="w-4 h-4 text-primary" />
                <span className="text-xs uppercase tracking-widest font-bold">
                  Case Studies
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-foreground">
                Engineering Portfolio
              </h2>
            </div>

            {/* Dynamic Filter Buttons */}
            <div className="flex bg-card border border-border/60 p-1 rounded-full w-fit text-xs font-bold text-muted-foreground select-none">
              <button 
                onClick={() => setProjectFilter("all")}
                className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                  projectFilter === "all" ? "bg-primary text-primary-foreground" : "hover:text-foreground"
                }`}
              >
                ALL
              </button>
              <button 
                onClick={() => setProjectFilter("hardware")}
                className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                  projectFilter === "hardware" ? "bg-primary text-primary-foreground" : "hover:text-foreground"
                }`}
              >
                HARDWARE
              </button>
              <button 
                onClick={() => setProjectFilter("software")}
                className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                  projectFilter === "software" ? "bg-primary text-primary-foreground" : "hover:text-foreground"
                }`}
              >
                AI &amp; COMPILERS
              </button>
            </div>
          </div>

          {/* Projects Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <div 
                key={p.id} 
                className="group bg-card/40 border border-border/60 rounded-2xl overflow-hidden hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col"
              >
                {/* Image Wrap */}
                <div className="relative h-48 w-full bg-muted/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                  <div className="w-full h-full flex items-center justify-center bg-muted/10 text-muted-foreground">
                    <svg className="w-12 h-12 opacity-35" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <rect x="2" y="2" width="20" height="20" rx="2" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-2 py-0.5 text-[9px] uppercase font-bold tracking-widest bg-primary/20 text-primary border border-primary/25 rounded-md">
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 space-y-4">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                    <span>{p.title}</span>
                    <a 
                      href={p.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="opacity-0 group-hover:opacity-100 text-primary transition-all duration-300 hover:scale-110"
                    >
                      <Icons.ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-muted border border-border/80 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
