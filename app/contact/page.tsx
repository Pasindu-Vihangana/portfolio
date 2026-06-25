"use client";

import React, { useState } from "react";
import { Icons } from "@/components/Icons";

// Local Contact SVGs for a self-contained premium page
const ContactIcons = {
  WhatsApp: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="-0.5 -1 25 25">
      <path d="M17.6 6.32A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.88 11.89L4 20l4.2-1.1a7.9 7.9 0 0 0 3.79 1 8 8 0 0 0 8-7.93 8 8 0 0 0-2.39-5.65M12 18.53a6.6 6.6 0 0 1-3.36-.92l-.24-.15-2.49.66.66-2.43-.16-.25a6.6 6.6 0 0 1 10.25-8.17 6.65 6.65 0 0 1 2 4.66 6.66 6.66 0 0 1-6.66 6.6m3.61-4.94c-.2-.1-1.17-.58-1.35-.64s-.32-.1-.45.1a9 9 0 0 1-.63.77c-.11.14-.23.15-.43 0a5.33 5.33 0 0 1-2.69-2.35c-.21-.35.2-.33.58-1.08a.38.38 0 0 0 0-.35c0-.1-.45-1.08-.61-1.47s-.32-.33-.45-.34h-.39a.7.7 0 0 0-.53.25A2.2 2.2 0 0 0 8 10.17a3.8 3.8 0 0 0 .81 2.05 8.9 8.9 0 0 0 3.39 3 3.85 3.85 0 0 0 2.38.5 2 2 0 0 0 1.33-.94 1.6 1.6 0 0 0 .12-.94c-.09-.1-.22-.15-.42-.25" />
    </svg>
  ),
  Mail: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.99 5.74a2 2 0 0 1-2.02 0L2 7" />
    </svg>
  ),
  Phone: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  MapPin: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Send: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  ),
  Alert: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16h.01" />
      <path d="M12 8v4" />
    </svg>
  ),
  Users: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Check: ({ className = "w-2.5 h-2.5" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  ChevronRight: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
  ChevronDown: ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  Rocket: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  MessageSquare: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Project" as "Project" | "Retainer" | "Other",
    message: ""
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [validationError, setValidationError] = useState("");

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    // Validate inputs
    if (!formData.name.trim()) {
      setValidationError("Name or company is required.");
      return;
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      setValidationError("Please specify at least one contact method (email or phone number).");
      return;
    }

    setFormStatus("submitting");

    // Simulate transmission latency
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        type: "Project",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="flex-1 bg-background text-foreground font-sans animate-fade-in-up">
      {/* Title Hero */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-[1.1] mb-6">
              Let&apos;s build hardware
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Have a mechatronics prototype, custom PCB design, high-frequency BLE telemetry tracking system, or just want to collaborate? Get in touch.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="pb-24 sm:pb-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

            {/* Form Column (Left side) */}
            <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
              {formStatus === "success" ? (
                <div className="text-center py-12 space-y-6 animate-fade-in-up">
                  <span className="text-5xl block animate-bounce">🚀</span>
                  <h3 className="text-xl font-bold text-primary">Transmission Success</h3>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                    The telemetry packet was dispatched. I have registered your parameters and will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 btn-shimmer bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] h-10 px-6 text-sm cursor-pointer mt-4"
                  >
                    Transmit another packet
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  {/* Status Banner */}
                  <div className="flex items-start gap-3 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <ContactIcons.Alert className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-primary leading-normal">
                      Direct telemetry line: Submit the fields below or ping directly via WhatsApp. Response rate: &lt; 24h.
                    </p>
                  </div>

                  {/* WhatsApp Direct Link */}
                  <a
                    href="https://wa.me/94763498429?text=Hi%20Pasindu%2C%20I%27m%20interested%20in%20working%20together!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#25D366] hover:bg-[#128C7E] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    <ContactIcons.WhatsApp className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>

                  {/* Visual Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-card px-2 text-muted-foreground">or</span>
                    </div>
                  </div>

                  {/* Validation Error */}
                  {validationError && (
                    <div className="text-xs text-red-500 font-semibold bg-red-950/20 border border-red-500/20 rounded-lg p-3">
                      ⚠️ {validationError}
                    </div>
                  )}

                  {/* Fields */}
                  <div className="space-y-4">
                    <div className="text-xs text-muted-foreground">
                      <span className="text-primary">*</span> Required fields (at least one contact method)
                    </div>

                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">
                        Name or company <span className="text-primary">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="John Doe / Acme Robotics"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-colors text-sm text-foreground"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">
                          Email <span className="text-primary">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-colors text-sm text-foreground"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">
                          Phone <span className="text-primary">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          placeholder="(+94) 12 3456 789"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-colors text-sm text-foreground"
                        />
                      </div>
                    </div>

                    {/* What are you looking for? */}
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-2.5 uppercase tracking-wider">
                        What are you looking for?
                      </label>
                      <div className="flex gap-2.5">
                        {(["Project", "Retainer", "Other"] as const).map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormData({ ...formData, type: opt })}
                            className={`flex-1 px-4 py-2.5 rounded-lg border text-xs font-semibold transition-colors cursor-pointer ${formData.type === opt
                              ? "bg-primary border-primary text-primary-foreground font-bold"
                              : "bg-background border-border hover:border-primary/50 text-foreground"
                              }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">
                        Message (optional)
                      </label>
                      <textarea
                        id="contact-message"
                        placeholder="Tell me about your hardware constraints, MCU selection, sensor requirements..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-colors text-sm text-foreground resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-bold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none cursor-pointer btn-shimmer bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] h-12 px-8 text-sm uppercase tracking-wider w-full"
                  >
                    <ContactIcons.Send className="w-4 h-4 mr-1 text-primary-foreground" />
                    {formStatus === "submitting" ? "Transmitting..." : "Transmit Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Info Column (Right side) */}
            <div className="space-y-8 lg:pl-6">
              <div>
                <h2 className="text-2xl font-serif text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/10">
                      <ContactIcons.Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">Email</p>
                      <a href="mailto:pasi1028@gmail.com" className="text-foreground hover:text-primary transition-colors text-sm font-semibold">
                        pasi1028@gmail.com
                      </a>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/10">
                      <ContactIcons.Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">Phone</p>
                      <a href="tel:+94763498429" className="text-foreground hover:text-primary transition-colors text-sm font-semibold">
                        (+94) 76 3498 429
                      </a>
                    </div>
                  </div>
                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/10">
                      <ContactIcons.MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">Location</p>
                      <p className="text-foreground text-sm font-semibold">
                        Colombo, Sri Lanka.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Freelance & Consulting Details */}
              <div className="pt-8 border-t border-border">
                <h3 className="text-lg font-medium text-foreground mb-3">
                  Consulting & Availability
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Currently accepting contract work for sensor fusion development, RTOS firmware optimization (Nordic/ESP32), schematic capture & multilayer PCB layout, and biomechanical movement analysis modeling. Let&apos;s build robust, sub-15g physical products.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href="https://github.com/Pasindu-Vihangana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#131313] hover:bg-[#222222] border border-border hover:border-primary/20 rounded-full text-xs font-semibold text-muted-foreground hover:text-primary transition-all"
                  >
                    <Icons.Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pasindu-vihangana/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#131313] hover:bg-[#222222] border border-border hover:border-primary/20 rounded-full text-xs font-semibold text-muted-foreground hover:text-primary transition-all"
                  >
                    <Icons.Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.instagram.com/romeo_skywalker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#131313] hover:bg-[#222222] border border-border hover:border-primary/20 rounded-full text-xs font-semibold text-muted-foreground hover:text-primary transition-all"
                  >
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://buymeacoffee.com/pasindu.vihangana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#131313] hover:bg-[#222222] border border-border hover:border-primary/20 rounded-full text-xs font-semibold text-muted-foreground hover:text-primary transition-all"
                  >
                    <span>Buy Me a Coffee</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="pb-24 sm:pb-32 border-t border-border pt-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">
              How it works
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              No strings attached. We align fully on electrical specifications, mechanical footprints, and firmware scope prior to contract activation.
            </p>
          </div>

          <div className="relative">
            <div className="grid sm:grid-cols-4 gap-12 sm:gap-6 lg:gap-8">

              {/* Step 1 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/15">
                    <ContactIcons.MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-5 rotate-[15deg] inline-flex items-center gap-0.5 text-[9px] font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2 py-0.5 shadow-sm">
                    <ContactIcons.Check className="w-2.5 h-2.5 text-emerald-500 shrink-0" />
                    Free
                  </span>
                </div>
                <p className="text-xs font-bold text-primary mb-1 uppercase tracking-widest">01</p>
                <h3 className="font-bold text-foreground text-sm mb-2">Get in touch</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[180px]">
                  Submit the form, email, or send a message on WhatsApp. I respond within 24 hours.
                </p>

                {/* Connecting Chevron Desktop */}
                <div className="hidden sm:flex items-center justify-center absolute top-7 left-[calc(100%+12px)] -translate-x-1/2 z-10">
                  <ContactIcons.ChevronRight className="w-4 h-4 text-muted-foreground/30" />
                </div>
                {/* Connecting Chevron Mobile */}
                <div className="flex justify-center py-4 sm:hidden">
                  <ContactIcons.ChevronDown className="w-4 h-4 text-muted-foreground/30" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/15">
                    <ContactIcons.Users className="w-6 h-6 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-5 rotate-[15deg] inline-flex items-center gap-0.5 text-[9px] font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2 py-0.5 shadow-sm">
                    <ContactIcons.Check className="w-2.5 h-2.5 text-emerald-500 shrink-0" />
                    Free
                  </span>
                </div>
                <p className="text-xs font-bold text-primary mb-1 uppercase tracking-widest">02</p>
                <h3 className="font-bold text-foreground text-sm mb-2">Technical Alignment</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[180px]">
                  We schedule a briefing to review your sensors, target ranges, constraints, and MCU architecture.
                </p>

                {/* Connecting Chevron Desktop */}
                <div className="hidden sm:flex items-center justify-center absolute top-7 left-[calc(100%+12px)] -translate-x-1/2 z-10">
                  <ContactIcons.ChevronRight className="w-4 h-4 text-muted-foreground/30" />
                </div>
                {/* Connecting Chevron Mobile */}
                <div className="flex justify-center py-4 sm:hidden">
                  <ContactIcons.ChevronDown className="w-4 h-4 text-muted-foreground/30" />
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/15">
                    <Icons.FileText className="w-6 h-6 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-5 rotate-[15deg] inline-flex items-center gap-0.5 text-[9px] font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2 py-0.5 shadow-sm">
                    <ContactIcons.Check className="w-2.5 h-2.5 text-emerald-500 shrink-0" />
                    Free
                  </span>
                </div>
                <p className="text-xs font-bold text-primary mb-1 uppercase tracking-widest">03</p>
                <h3 className="font-bold text-foreground text-sm mb-2">Scope & Proposal</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[180px]">
                  Receive a structured technical spec proposal, project milestones, and a clear budget estimate.
                </p>

                {/* Connecting Chevron Desktop */}
                <div className="hidden sm:flex items-center justify-center absolute top-7 left-[calc(100%+12px)] -translate-x-1/2 z-10">
                  <ContactIcons.ChevronRight className="w-4 h-4 text-muted-foreground/30" />
                </div>
                {/* Connecting Chevron Mobile */}
                <div className="flex justify-center py-4 sm:hidden">
                  <ContactIcons.ChevronDown className="w-4 h-4 text-muted-foreground/30" />
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/15">
                    <ContactIcons.Rocket className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <p className="text-xs font-bold text-primary mb-1 uppercase tracking-widest">04</p>
                <h3 className="font-bold text-foreground text-sm mb-2">Kickoff & Build</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[180px]">
                  Once the quote is accepted, design execution starts immediately. Expect frequent updates.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
