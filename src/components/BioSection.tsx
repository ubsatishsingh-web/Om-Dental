import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Heart, GraduationCap } from 'lucide-react';

export default function BioSection() {
  return (
    <section id="about-doctor" className="relative py-20 px-4 sm:px-6 lg:px-8 digital-grid border-b border-medical-500/5">
      
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-medical-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/12 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LFT SCREEN: Doctor Badging, Clinical Credentials */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl p-6 glass-effect box-glow-cyan overflow-hidden group">
              
              {/* Scanline glowing laser bar purely for technical high-tech presentation */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-bounce duration-3000"></div>
              
              {/* Profile placeholder graphic representing premium aesthetic */}
              <div className="relative h-64 w-full bg-medical-950/60 rounded-2xl border border-medical-500/10 flex items-center justify-center mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-medical-950/80 via-transparent to-transparent z-10"></div>
                
                {/* Clean medical cross visual placeholder overlay */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-medical-500/10 border border-medical-400/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[9px] font-mono font-medium tracking-wider text-medical-300 uppercase">Consultant Active</span>
                </div>

                {/* Styled Doctor Illustration Core */}
                <div className="relative flex flex-col items-center text-center p-6 z-20">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-medical-500/30 via-cyan-400/10 to-medical-950 border border-medical-400/30 flex items-center justify-center mb-3">
                    <GraduationCap className="w-12 h-12 text-medical-300" />
                  </div>
                  <h4 className="font-display font-bold text-white text-base">Dr. Vivek Singh</h4>
                  <p className="text-xs text-medical-400 font-mono mt-0.5">MDS, BDS • Orthodontist Specialist</p>
                </div>
              </div>

              {/* Secure Registries Detail */}
              <div className="space-y-3.5">
                <div className="p-3 bg-medical-950/50 rounded-xl border border-medical-500/10 flex items-center gap-3">
                  <div className="p-2 h-9 w-9 rounded-lg bg-medical-500/10 border border-medical-400/20 text-medical-400 flex items-center justify-center">
                    <Award className="w-5 h-5 text-medical-300" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider">State Council Registry</span>
                    <span className="text-sm font-semibold text-white tracking-wide">Reg No: 2260 UP State Dental</span>
                  </div>
                </div>

                <div className="p-3 bg-medical-950/50 rounded-xl border border-medical-500/10 flex items-center gap-3">
                  <div className="p-2 h-9 w-9 rounded-lg bg-medical-500/10 border border-medical-400/20 text-medical-400 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-medical-300" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider">Professional Alliances</span>
                    <span className="text-xs font-semibold text-white tracking-wide leading-tight block">
                      Life Member, Indian Association of Forensic Odontology (IAFO)
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Digital Accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-medical-500/40"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-medical-500/40"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-medical-500/40"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-medical-500/40"></div>
            </div>
          </div>

          {/* RGT SCREEN: Expert biography */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-medical-500/15 border border-medical-500/30">
              <span className="text-xs font-medium font-mono text-medical-300 tracking-wide">Elite Healthcare Practitioner</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Crafting Exceptional, Healthy Smiles With a <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-400 via-cyan-300 to-teal-300 glow-cyan">Personal Touch</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              At <strong className="text-white">Om Dental and Orthodontic Clinic</strong>, we believe orthodontic engineering combined with general clinical expertise can completely redefine confidence. Under the scholarly direction of expert Orthodontist <strong>Dr. Vivek Singh (MDS, BDS)</strong>, our clinic has established a golden standard in Lucknow for dental therapeutics.
            </p>

            <blockquote className="p-5 bg-medical-950/40 rounded-2xl border-l-[4px] border-medical-400 italic text-slate-300/90 text-sm leading-relaxed">
              "Treat each patient with the best possible care. Known for a personal touch that makes patients comfortable. Extensive training in restoring natural smiles with advanced crowns, bridges, veneers, and dentures. Dedicated to continuing education and the latest technologies."
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-xs text-slate-300">
                  <strong className="text-white">Expert Orthodontics</strong> - Advanced alignment, ceramic corrective brackets, and modern clear retainers.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-xs text-slate-300">
                  <strong className="text-white">Dentofacial Orthopedics</strong> - Minimizing or correcting facial skeletal asymmetry in adolescent patients.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-xs text-slate-300">
                  <strong className="text-white">Prosthetic SMILE Makeovers</strong> - Master-crafted dental implants, aesthetic porcelain crowns, and premium dentures.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-xs text-slate-300">
                  <strong className="text-white">Continuous Innovation</strong> - Integrating laser sterilization, forensic odontology parameters, and pain-free dentistry guidelines.
                </span>
              </div>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 flex flex-wrap gap-8 border-t border-medical-500/10">
              <div>
                <span className="block font-display text-2xl font-bold text-white tracking-tight">100%</span>
                <span className="block text-xs text-slate-400 font-mono tracking-wider">Patient Trust Rating</span>
              </div>
              <div>
                <span className="block font-display text-2xl font-bold text-white tracking-tight">UP Sec. 2260</span>
                <span className="block text-xs text-slate-400 font-mono tracking-wider">SCD Council Certified</span>
              </div>
              <div>
                <span className="block font-display text-2xl font-bold text-white tracking-tight">MDS, BDS</span>
                <span className="block text-xs text-slate-400 font-mono tracking-wider">Advanced Orthopedics Degree</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
