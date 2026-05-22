import React from "react";
import Link from "next/link";
import { Icons } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-[#0c0c0c]/85 text-xs text-muted-foreground print:hidden">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_4fr_2.5fr] gap-12 lg:gap-8">
          {/* Column 1: Intro */}
          <div className="space-y-4">
            <Link 
              href="/" 
              className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
            >
              <span className="font-bold tracking-tight">PASINDU</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm mt-3">
              Robotics & Embedded Systems Engineer building reliable physical deployments and hardware-integrated software. Specializing in low-power firmware, IMU sensor fusion, and closed-loop control systems.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Navigation</h3>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-3">
              <Link className="hover:text-foreground transition-colors" href="/">Home</Link>
              <Link className="hover:text-foreground transition-colors" href="/expertise">Expertise</Link>
              <Link className="hover:text-foreground transition-colors" href="/experience">Experience</Link>
              <Link className="hover:text-foreground transition-colors" href="/resume">Résumé</Link>
              <Link className="hover:text-foreground transition-colors" href="/contact">Contact</Link>
              <a 
                href="https://github.com/Pasindu-Vihangana/Arduino-Visual-Programmer" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-foreground transition-colors"
              >
                Visual Compiler Research
              </a>
            </nav>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contact</h3>
              <div className="flex flex-col gap-2">
                <a 
                  href="mailto:pasi1028@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm break-all font-semibold"
                >
                  pasi1028@gmail.com
                </a>
                <span className="text-muted-foreground">(+94) 76 3498 429</span>
                <span className="text-muted-foreground">Colombo, Sri Lanka</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Externals</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Pasindu-Vihangana" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-[#131313] border border-border rounded-full text-muted-foreground hover:text-primary transition-all hover-shake" 
                  aria-label="GitHub"
                >
                  <Icons.Github className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/pasindu-vihangana/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-[#131313] border border-border rounded-full text-muted-foreground hover:text-primary transition-all hover-bounce" 
                  aria-label="LinkedIn"
                >
                  <Icons.Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://buymeacoffee.com/pasindu.vihangana" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-[#131313] border border-border rounded-full text-muted-foreground hover:text-primary transition-all" 
                  title="Buy Me A Coffee"
                >
                  <Icons.Cpu className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} Pasindu Vihangana. All rights reserved.</p>
          <div className="flex items-center space-x-2">
            <span className="text-primary font-bold tracking-widest uppercase">🎛️ MATHEMATICAL MODEL → PHYSICAL DEPLOYMENT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
