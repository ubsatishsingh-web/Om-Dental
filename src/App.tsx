import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { Sparkles, ArrowRight, ShieldCheck, HeartPulse } from 'lucide-react';

import Navbar from './components/Navbar';
import ThreeToothCanvas from './components/ThreeToothCanvas';
import BioSection from './components/BioSection';
import Services from './components/Services';
import AppointmentForm from './components/AppointmentForm';
import OperatingHours from './components/OperatingHours';
import ContactSection from './components/ContactSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const toothPodRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  
  // GSAP Cinematic Intro
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Hero Content items sequentially on rise
      gsap.fromTo(
        '.gsap-hero-fade',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
      );

      // Slide and scale the 3D tooth hologram container
      gsap.fromTo(
        toothPodRef.current,
        { scale: 0.85, opacity: 0, x: 40 },
        { scale: 1, opacity: 1, x: 0, duration: 1.6, ease: 'elastic.out(1, 0.75)', delay: 0.3 }
      );
    });

    return () => ctx.revert(); // clean up context
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById('appointment-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#031525] overflow-hidden text-white selection:bg-medical-500/30 selection:text-white">
      
      {/* 🚀 Sleek Global Background Radar Lighting & Grid */}
      <div className="absolute inset-0 digital-grid pointer-events-none -z-20"></div>
      
      {/* Dynamic ambient orb lights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-medical-500/10 blur-[150px] -z-10 pointer-events-none"></div>
      <div className="absolute top-[35%] right-[-15%] w-[45%] h-[45%] rounded-full bg-[#0ea5e9]/10 blur-[150px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 blur-[150px] -z-10 pointer-events-none"></div>

      {/* 🧭 NAVIGATION HEADER */}
      <Navbar />

      {/* ⚡ HERO CLINIC HEADER */}
      <section id="hero-section" className="relative min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LFT: Value Pitch & Technical credentials */}
          <div ref={heroContentRef} className="lg:col-span-7 space-y-6 text-left">
            
            <div className="gsap-hero-fade inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-medical-500/10 border border-medical-500/25">
              <span className="w-2 h-2 rounded-full bg-medical-400 animate-pulse"></span>
              <span className="text-[10px] font-mono tracking-widest text-medical-300 uppercase font-medium">Om Dental &amp; Orthodontic Clinic</span>
            </div>

            <h1 className="gsap-hero-fade font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Reinventing Orthodontic <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-400 via-cyan-300 to-teal-200 glow-cyan">
                Smile Engineering
              </span>
            </h1>

            <p className="gsap-hero-fade text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Experience gold-standard orthodontic therapies and comprehensive medical restorations directed by Lucknow's leading expert, <strong>Dr. Vivek Singh (MDS, BDS)</strong>. Seamlessly integrated high-tech diagnostics meets human warmth.
            </p>

            {/* Micro Highlights Grid */}
            <div className="gsap-hero-fade grid grid-cols-2 gap-4 pb-4 max-w-md font-sans">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-medical-950/25 border border-medical-500/10 backdrop-blur-sm">
                <HeartPulse className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-350">Orthodontic Specialist</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-medical-950/25 border border-medical-500/10 backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-350">UP Council Certified</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="gsap-hero-fade flex flex-wrap gap-4 pt-2">
              <button
                onClick={scrollToBooking}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-medical-500 to-medical-600 text-sm font-semibold text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] hover:scale-102 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
              >
                Schedule Triage Slot
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              <a
                href="#services-section"
                className="px-6 py-3.5 rounded-xl border border-medical-500/20 text-sm font-semibold text-slate-300 hover:text-white hover:bg-medical-500/10 transition-all duration-300 cursor-pointer"
              >
                Clinical Grid Portfolio
              </a>
            </div>

          </div>

          {/* RGT: 3D Holographic Tooth Canvas */}
          <div className="lg:col-span-5 flex justify-center">
            <div 
              ref={toothPodRef}
              className="relative w-full max-w-sm h-[420px] aspect-square rounded-3xl p-4 glass-effect box-glow-cyan overflow-hidden group border border-medical-500/20 shadow-2xl"
              style={{ contentVisibility: 'auto' }}
            >
              {/* Technical scan overlays */}
              <div className="absolute top-3 left-4 flex gap-1.5 items-center z-10 select-none">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-medium">3D_Smile_Engine v4.2</span>
              </div>

              {/* Procedural Canvas Render */}
              <ThreeToothCanvas />

              {/* Technical aesthetic HUD controls layout overlay decoration */}
              <div className="absolute bottom-3 right-4 z-10 text-[9px] font-mono tracking-wider text-slate-400 select-none pointer-events-none uppercase">
                LAT_26.883 / LON_80.938 Lucknow
              </div>

              {/* Futuristic mechanical corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-cyan-400/35"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-cyan-400/35"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-cyan-400/35"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-cyan-400/35"></div>
            </div>
          </div>

        </div>
      </section>

      {/* 👨‍⚕️ TRUST BIO ACCREDITATION SECTION */}
      <BioSection />

      {/* 🗂️ TREATMENT GRID DENTAL SERVICES */}
      <Services />

      {/* 📅 APPOINTMENT FORM, ADDRESS HOURS COMPENDIUM SECTION */}
      <section id="appointment-section" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-medical-950/15">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LFT BLOCK: Dynamic booking form (Takes 7 column widths) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="mb-4">
                <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full border border-medical-500/10 bg-medical-950/65 mb-3.5 backdrop-blur-md">
                  <span className="text-[9px] font-mono tracking-widest text-medical-300 uppercase">Scheduling Portal</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Schedule Clinical Appointment
                </h2>
                <p className="mt-2 text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Allocate your slot instantly in our synchronized spreadsheet ledger. Once locked, Dr. Vivek Singh's desk monitors patient data queues to verify slot arrival.
                </p>
              </div>

              {/* Interactive Appoint form */}
              <div className="p-6 sm:p-8 rounded-3xl glass-effect border border-medical-500/10 box-glow-cyan">
                <AppointmentForm />
              </div>
            </div>

            {/* RGT BLOCK: Stack of Contact Info and Hours table (Takes 5 column widths) */}
            <div id="hours-location" className="lg:col-span-5 grid grid-cols-1 gap-6 h-full">
              
              {/* Operating Hours card */}
              <OperatingHours />

              {/* Geographic mapping coordinates, contact numbers info card */}
              <ContactSection />

            </div>

          </div>

        </div>
      </section>

      {/* 💬 FLOATING CHAT ANCHORS */}
      <FloatingWhatsApp />

      {/* 🏛️ FOOTER BAR */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-medical-500/10 bg-medical-950/80 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-medical-400 to-medical-600 flex items-center justify-center">
              <Sparkles className="w-4.5 h-4.5 text-white" />
            </div>
            <div>
              <span className="block font-display text-sm font-bold tracking-tight text-white">
                OM DENTAL &amp; ORTHODONTICS
              </span>
              <span className="block text-[8px] font-mono tracking-widest text-slate-400 uppercase -mt-1.5">
                © {new Date().getFullYear()} All Clinical Rights Reserved
              </span>
            </div>
          </div>

          <div className="text-xs text-slate-400 tracking-normal font-sans">
            Consultant: <strong>Dr. Vivek Singh (MDS, BDS)</strong> • UP Dental Council Reg: 2260
          </div>

          {/* Designed by Zera Technologies Link with glow effect */}
          <div className="text-xs font-mono tracking-wider">
            <a 
              href="https://ZeraTech.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-cyan-300 hover:glow-cyan font-semibold transition-all duration-300"
            >
              Designed by Zera Technologies
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}
