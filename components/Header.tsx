"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Expertise", href: "/expertise" },
    { name: "Experience", href: "/experience" },
    { name: "Résumé", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 print:hidden">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl font-serif text-foreground hover:text-primary transition-colors lg:w-[200px]"
        >
          <span className="font-bold tracking-tight">PASINDU</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center justify-center gap-8 flex-1 text-sm tracking-wider uppercase font-semibold text-muted-foreground">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`transition-colors hover-underline py-1 ${
                  isActive(link.href) 
                    ? "text-primary font-bold" 
                    : "hover:text-foreground text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action / Social / Mock controls */}
        <div className="hidden lg:flex items-center justify-end gap-2 lg:min-w-[200px]">
          <a
            href="https://www.linkedin.com/in/pasindu-vihangana/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors hover-bounce"
            aria-label="LinkedIn"
          >
            <Icons.Linkedin className="w-5 h-5" />
          </a>

          <a
            href="https://github.com/Pasindu-Vihangana"
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-2 text-muted-foreground hover:text-primary transition-colors hover-shake"
            aria-label="GitHub"
          >
            <Icons.Github className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 min-w-[1.25rem] h-4 px-1 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-[9px] font-bold leading-none pointer-events-none">
              +248
            </span>
          </a>

          <a
            href="https://buymeacoffee.com/pasindu.vihangana"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            title="Buy Me A Coffee"
          >
            <Icons.Cpu className="w-5 h-5" />
          </a>

          <div className="h-4 w-px bg-border mx-2"></div>
          <button className="text-xs font-semibold px-2.5 py-1 rounded bg-[#131313] border border-border text-foreground hover:border-primary transition-colors cursor-pointer">
            EN
          </button>

          <button className="p-2 rounded hover:bg-[#131313] transition-colors cursor-pointer" aria-label="Toggle theme">
            <Icons.Sun className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded hover:bg-[#131313] lg:hidden text-foreground cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <Icons.Close className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-xl transition-all duration-300">
          <ul className="flex flex-col px-6 py-4 space-y-3 text-sm tracking-wider uppercase font-semibold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 ${
                    isActive(link.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="h-px bg-border my-2"></li>
            <li className="flex items-center gap-4 py-2">
              <a
                href="https://www.linkedin.com/in/pasindu-vihangana/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Icons.Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Pasindu-Vihangana"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Icons.Github className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-3.5 min-w-[1.25rem] h-4 px-1 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-[8px] font-bold leading-none pointer-events-none">
                  +248
                </span>
              </a>
              <a
                href="https://buymeacoffee.com/pasindu.vihangana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Buy Me A Coffee"
              >
                <Icons.Cpu className="w-5 h-5" />
              </a>
              <div className="h-4 w-px bg-border"></div>
              <button className="text-xs font-semibold px-2 py-0.5 rounded bg-[#131313] border border-border text-foreground hover:border-primary transition-colors">
                EN
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
