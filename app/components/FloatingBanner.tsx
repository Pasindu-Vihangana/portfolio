"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Icons } from "./Icons";

export default function FloatingBanner() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showFloatingBanner, setShowFloatingBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
        setShowFloatingBanner(true);
      } else {
        setShowScrollTop(false);
        setShowFloatingBanner(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="print:hidden">
      {/* Floating Availability Sticky Banner */}
      <div 
        className={`fixed bottom-8 left-6 right-6 sm:bottom-6 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-50 transition-all duration-500 select-none ${
          showFloatingBanner ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between bg-[#131313]/90 backdrop-blur-xl border border-border rounded-full px-5 py-3 shadow-2xl">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-primary"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-xs font-semibold text-foreground">Available for remote contracts</span>
          </div>
          
          <div className="h-5 w-px bg-border mx-4"></div>
          
          <div className="flex items-center gap-2.5">
            <Link 
              href="/contact" 
              className="btn-shimmer inline-flex items-center justify-center text-xs font-bold transition-all bg-primary text-primary-foreground shadow active:scale-[0.98] h-8 px-4 rounded-full"
            >
              Discuss Options
            </Link>
            <a 
              href="https://wa.me/94763498429?text=Hi%20Pasindu%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center w-8 h-8 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full transition-colors" 
              title="WhatsApp Quick Connect"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="-0.5 -1 25 25" className="block">
                <path fill="currentColor" d="M17.6 6.32A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.88 11.89L4 20l4.2-1.1a7.9 7.9 0 0 0 3.79 1 8 8 0 0 0 8-7.93 8 8 0 0 0-2.39-5.65M12 18.53a6.6 6.6 0 0 1-3.36-.92l-.24-.15-2.49.66.66-2.43-.16-.25a6.6 6.6 0 0 1 10.25-8.17 6.65 6.65 0 0 1 2 4.66 6.66 6.66 0 0 1-6.66 6.6m3.61-4.94c-.2-.1-1.17-.58-1.35-.64s-.32-.1-.45.1a9 9 0 0 1-.63.77c-.11.14-.23.15-.43 0a5.33 5.33 0 0 1-2.69-2.35c-.21-.35.2-.33.58-1.08a.38.38 0 0 0 0-.35c0-.1-.45-1.08-.61-1.47s-.32-.33-.45-.34h-.39a.7.7 0 0 0-.53.25A2.2 2.2 0 0 0 8 10.17a3.8 3.8 0 0 0 .81 2.05 8.9 8.9 0 0 0 3.39 3 3.85 3.85 0 0 0 2.38.5 2 2 0 0 0 1.33-.94 1.6 1.6 0 0 0 .12-.94c-.09-.1-.22-.15-.42-.25" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        type="button" 
        className={`fixed bottom-24 sm:bottom-6 right-6 z-40 p-2.5 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`} 
        aria-label="Scroll to top"
      >
        <Icons.ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
