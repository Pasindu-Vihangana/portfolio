import React from "react";
import { Icons } from "../components/Icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Résumé | Pasindu Vihangana",
  description: "Academic qualifications, Sydney Accord accreditation, and national awards in mechatronics, robotics, and embedded systems engineering.",
};

const AWARDS = [
  {
    title: "Best Presentation Award",
    context: "ICIET 2021 Publication",
    desc: "Presented research paper: 'Algorithmic approach to minimise text-based programming for microcontrollers using graphical netlist generation' in Electronics Category."
  },
  {
    title: "National Winner",
    context: "SLASSCOM 2024",
    desc: "Recognised nationally for design leadership in STEM educational flight stability systems and QubeBots software SDK algorithms."
  },
  {
    title: "Gold Medal & Merit",
    context: "NICTA & APICTA 2023",
    desc: "Won NICTA Gold 2023 and APICTA Merit 2023 in autonomous stability flight estimation algorithms developed for STEM drone platforms."
  },
  {
    title: "Finalist (Top 34 / 300+)",
    context: "IICE 2020",
    desc: "Developed IoT smart level safety alert system incorporating weight telemetry and automatic shut-off valves for LP Gas cylinders."
  },
  {
    title: "Dean's List (3rd & 4th Semesters)",
    context: "USJP Honours",
    desc: "Dean's list honors at University of Sri Jayewardenepura. Also semi-finalist for Best Employability Skills Achiever in 2021."
  }
];

export default function ResumePage() {
  return (
    <div className="flex-1 bg-background text-foreground py-16 sm:py-24 font-sans animate-fade-in-up">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Page Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-primary mb-4">
            <Icons.FileText className="w-4 h-4 text-primary" />
            <span className="text-xs uppercase tracking-widest font-bold">
              Résumé
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">
            Curriculum Vitae
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            A comprehensive overview of my credentials, credentials, and achievements.
          </p>
        </div>

        {/* 2-Column Grid matching Cyntax */}
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] gap-16 xl:gap-24">
          
          {/* Left Main Column */}
          <div className="space-y-12">
            
            {/* Profile Section */}
            <section className="space-y-4">
              <h2 className="flex items-center gap-2 uppercase tracking-widest text-primary font-bold text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Profile
              </h2>
              <p className="text-sm text-foreground leading-relaxed">
                Mechatronics engineer with 3+ years building real-world robotic and embedded systems for international clients across healthcare, robotics, and STEM education. Experienced in the full cycle — mathematical modelling and algorithm development through to hardware deployment — with particular depth in sensor fusion, motion analysis, and control systems.
              </p>
            </section>

            {/* About Me narrative */}
            <section className="space-y-4">
              <h2 className="flex items-center gap-2 uppercase tracking-widest text-primary font-bold text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                About Me
              </h2>
              <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
                <p>
                  Driven by a passion for physics and physical computing, I build hardware that bridges the digital and physical worlds. Rather than focusing solely on coding, I own the entire pipeline: mathematical simulation, custom multi-layer PCB design, low-power RTOS firmwares, and field integration.
                </p>
                <p>
                  I thrive in informal yet rigorous engineering environments where complex mechatronics design meets practical constraints. My goal is always to deliver robust telemetry and control loops that perform under demanding real-world conditions.
                </p>
              </div>
            </section>

            {/* Experience Section (Simplified Left Timeline) */}
            <section className="space-y-6">
              <h2 className="flex items-center gap-2 uppercase tracking-widest text-primary font-bold text-xs">
                <Icons.Briefcase className="w-4 h-4 text-primary" />
                Experience
              </h2>
              
              <div className="relative border-l border-border pl-6 space-y-8 py-2">
                
                {/* SRQ Robotics */}
                <div className="relative">
                  <div className="absolute -left-[30px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-primary bg-background ring-4 ring-primary/20 z-10">
                    <span className="absolute inset-0.5 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      Robotics &amp; Embedded Systems Engineer
                    </h3>
                    <p className="text-xs text-muted-foreground font-semibold mt-0.5">
                      SRQ Robotics LLC
                    </p>
                    <p className="text-[10px] text-primary font-bold tracking-wider mt-0.5 uppercase">
                      Aug 2022 — Present · Colombo, Sri Lanka
                    </p>
                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                      Deploying micro-telemetry wearables (&lt;15g), BLE orientation training trackers, closed-loop muscle stimulators, and drone flight stability logic for international clients.
                    </p>
                  </div>
                </div>

                {/* MAS Intimates */}
                <div className="relative">
                  <div className="absolute -left-[30px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-primary/60 bg-background z-10">
                    <span className="absolute inset-0.5 rounded-full bg-primary/60" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      Mechatronics Engineering Intern
                    </h3>
                    <p className="text-xs text-muted-foreground font-semibold mt-0.5">
                      MAS Intimates
                    </p>
                    <p className="text-[10px] text-muted-foreground font-bold tracking-wider mt-0.5 uppercase">
                      Apr 2021 — Dec 2021 · Colombo, Sri Lanka
                    </p>
                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                      Engineered computer vision garment piece counting ML pipelines and closed-loop control system sensors for automatic textile roller alignments.
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* Education Section */}
            <section className="space-y-6">
              <h2 className="flex items-center gap-2 uppercase tracking-widest text-primary font-bold text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
                Education
              </h2>

              <div className="space-y-6">
                <div className="border border-border/50 p-5 rounded-xl bg-card/20">
                  <h3 className="text-sm font-bold text-foreground">
                    B.Eng.Tech (Hons) in Mechatronics Technology
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    University of Sri Jayewardenepura, Sri Lanka
                  </p>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold mt-1 tracking-wider">
                    Graduated June 2022
                  </p>
                  
                  <div className="flex gap-6 mt-4 pt-4 border-t border-border/40 text-xs">
                    <div>
                      <span className="text-[10px] text-muted-foreground block uppercase font-bold tracking-wider">GPA achieved</span>
                      <span className="text-sm font-bold font-mono text-foreground">3.64 / 4.00</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-muted-foreground block uppercase font-bold tracking-wider">Honours Class</span>
                      <span className="text-sm font-bold text-foreground">Second Upper</span>
                    </div>
                  </div>
                </div>

                <div className="border border-border/50 p-5 rounded-xl bg-card/20">
                  <span className="inline-block px-2 py-0.5 text-[9px] uppercase font-bold tracking-widest bg-primary/10 text-primary border border-primary/25 rounded-md mb-2">
                    Research Publication &amp; Award
                  </span>
                  <h4 className="text-xs font-bold text-foreground">
                    Best Presentation Award — ICIET 2021
                  </h4>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Published and presented: <em>'An algorithmic approach to minimise text-based programming for microcontrollers using graphical netlist generation'</em> in Electronics Category.
                  </p>
                </div>
              </div>
            </section>

            {/* Awards & Accolades */}
            <section className="space-y-6">
              <h2 className="flex items-center gap-2 uppercase tracking-widest text-primary font-bold text-xs">
                <Icons.Award className="w-4 h-4 text-primary" />
                Accolades
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {AWARDS.map((award, idx) => (
                  <div key={idx} className="border border-border/50 p-4 rounded-xl bg-card/20 hover:border-primary/20 transition-colors duration-300">
                    <div className="flex items-center gap-1.5 text-primary mb-2">
                      <Icons.Award className="w-3.5 h-3.5" />
                      <span className="text-[9px] uppercase font-bold tracking-wider">{award.context}</span>
                    </div>
                    <h4 className="text-xs font-bold text-foreground">{award.title}</h4>
                    <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed">
                      {award.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Sidebar Column */}
          <div className="space-y-8">
            
            {/* Personal Details */}
            <section className="border border-border/50 p-6 rounded-xl bg-card/10 space-y-4">
              <h2 className="flex items-center gap-2 uppercase tracking-widest text-primary font-bold text-xs border-b border-border/40 pb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="4" />
                  <line x1="8" y1="2" x2="8" y2="4" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Personal Details
              </h2>
              
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Name</span>
                  <span className="text-foreground font-medium">Pasindu Vihangana</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="text-foreground font-medium">Colombo, Sri Lanka</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Email</span>
                  <a href="mailto:pasi1028@gmail.com" className="text-primary hover-underline font-medium">pasi1028@gmail.com</a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Phone</span>
                  <a href="tel:+94763498429" className="text-foreground hover:text-primary transition-colors font-medium">(+94) 76 3498 429</a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">GitHub</span>
                  <a href="https://github.com/Pasindu-Vihangana" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-0.5">
                    Pasindu-Vihangana
                    <Icons.ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </section>

            {/* Sydney Accord accreditation block */}
            <section className="bg-gradient-to-br from-primary/10 to-card/40 border border-primary/20 p-6 rounded-xl space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Icons.Award className="w-4 h-4 animate-pulse-slow" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Sydney Accord Accredited</span>
              </div>
              <h3 className="text-sm font-bold text-foreground">
                International Recognition
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The mechatronics degree is officially accredited under the <strong>Sydney Accord</strong> (by IESL/ABET signatory). This guarantees international mutual engineering recognition in countries like the USA, UK, and Australia.
              </p>
            </section>

            {/* Professional Skills sidebar progress list */}
            <section className="border border-border/50 p-6 rounded-xl bg-card/10 space-y-4">
              <h2 className="flex items-center gap-2 uppercase tracking-widest text-primary font-bold text-xs border-b border-border/40 pb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                Core Capabilities
              </h2>
              
              <div className="space-y-4">
                {[
                  { name: "Control Systems", rate: "95%" },
                  { name: "Embedded C/C++", rate: "95%" },
                  { name: "Wearable Electronics", rate: "90%" },
                  { name: "AI Pose Estimation", rate: "85%" }
                ].map((s, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <span className="text-xs text-foreground font-medium block">{s.name}</span>
                    <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: s.rate }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages (visual bars) */}
            <section className="border border-border/50 p-6 rounded-xl bg-card/10 space-y-4">
              <h2 className="flex items-center gap-2 uppercase tracking-widest text-primary font-bold text-xs border-b border-border/40 pb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Languages
              </h2>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-foreground">Sinhala</span>
                    <span className="text-muted-foreground text-[10px] uppercase font-bold">Native</span>
                  </div>
                  <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "100%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-foreground">English</span>
                    <span className="text-muted-foreground text-[10px] uppercase font-bold">Full Professional</span>
                  </div>
                  <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>
            </section>

            {/* Interests tags */}
            <section className="border border-border/50 p-6 rounded-xl bg-card/10 space-y-4">
              <h2 className="flex items-center gap-2 uppercase tracking-widest text-primary font-bold text-xs border-b border-border/40 pb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
                Interests &amp; Trivia
              </h2>
              
              <div className="flex flex-wrap gap-2 pt-1">
                {["Martial Arts (Fighter)", "Stand-up Comedy", "Drone Racing", "3D Modeling", "Biomechanics"].map((t) => (
                  <span key={t} className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider bg-card border border-border text-muted-foreground rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </section>

          </div>

        </div>

      </div>
    </div>
  );
}
