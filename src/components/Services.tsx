import React, { useState } from 'react';
import { 
  Activity, 
  Award, 
  Droplets, 
  Sparkles, 
  Smile, 
  SquareCheck, 
  Anchor, 
  Wind, 
  Scissors, 
  ShieldAlert, 
  Clock, 
  ArrowRight,
  Sparkle
} from 'lucide-react';
import { DentalService } from '../types';

export default function Services() {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [activeService, setActiveService] = useState<DentalService | null>(null);

  const servicesData: DentalService[] = [
    {
      id: 'rct',
      title: 'Root Canal Treatment (RCT)',
      shortDescription: 'Advanced pain-free nerve preservation under extreme microscopic precision.',
      fullDescription: 'Our root canal therapy preserves your natural teeth in a highly state-of-the-art sterile setting. Using specialized precision instrumentation, Dr. Vivek Singh carefully removes diseased dental pulp, sterilizes the biological canal structure, and seals it completely with premium gutta-percha. Usually completed in single-visit sessions.',
      iconName: 'Activity',
      tag: 'Core'
    },
    {
      id: 'crowns-bridges',
      title: 'Dental Crowns & Bridges',
      shortDescription: 'Monolithic CAD-CAM zirconia crowns to perfectly rebuild your jaw structural bite.',
      fullDescription: 'Bespoke, multi-layered metal-free crowns and bridges restore total structural integrity. Crafted using advanced digital zirconia materials, these replacements align seamlessly with your existing teeth, granting structural durability and rendering original natural aesthetics.',
      iconName: 'Award',
      tag: 'Core'
    },
    {
      id: 'cosmetic-fillings',
      title: 'Cosmetic Fillings',
      shortDescription: 'Invisible biomimetic composite resin fillings matching original enamel colors.',
      fullDescription: 'Say goodbye to shiny silver fillings. We utilize advanced photopolymerized dental composite resins that cure in seconds and match the exact texture, coloring, and light-transmissive qualities of your natural enamel. Strong, durable, and highly tooth-conserving.',
      iconName: 'Droplets',
      tag: 'Cosmetic'
    },
    {
      id: 'whitening',
      title: 'Teeth Whitening',
      shortDescription: 'Advanced deep bleaching systems dissolving stubborn deep-seated enamel stains.',
      fullDescription: 'Reveal a dazzling smile up to 8 shades lighter in just one single session. Dr. Vivek Singh utilizes highly-tuned blue laser light activation paired with isolated clinician-grade hydrogen peroxide formulas, removing years of smoking, coffee, or aging discoloration safely.',
      iconName: 'Sparkles',
      tag: 'Cosmetic'
    },
    {
      id: 'veneers',
      title: 'Dental Veneers',
      shortDescription: 'Ultra-thin custom porcelain laminate shells to completely reinvent smiles.',
      fullDescription: 'The ultimate standard in cosmetic dental revision. Veneers are custom-crafted, wafer-thin porcelain shells bonded directly onto the fronts of teeth, correcting minor misalignments, spacing gaps, chips, or permanent internal dental staining elegantly.',
      iconName: 'Smile',
      tag: 'Cosmetic'
    },
    {
      id: 'braces-aligners',
      title: 'Braces & Aligners',
      shortDescription: 'Bespoke alignment treatments featuring virtually invisible clear aligners.',
      fullDescription: 'Correct dental crowding, deep bites, and spacing. We specialize in both traditional ceramic aesthetic brackets and next-generation clear orthodontic aligners. Dr. Vivek Singh computes precise custom pressure paths to map out your digital tooth alignment roadmap.',
      iconName: 'SquareCheck',
      tag: 'Orthodontic'
    },
    {
      id: 'implants',
      title: 'Dental Implants',
      shortDescription: 'Surgically anchored biocompatible titanium structures acting as true tooth roots.',
      fullDescription: 'The permanent anatomical solution to missing teeth. High-grade titanium implants integrate molecularly with your jawbone (osseointegration), supporting highly customized ceramic crown prosthetics that mimic natural dental chew forces seamlessly.',
      iconName: 'Anchor',
      tag: 'Surgical'
    },
    {
      id: 'scaling-polishing',
      title: 'Scaling & Polishing',
      shortDescription: 'Ultrasonic calculus ablation and micro-abrasive smile detailing.',
      fullDescription: 'Essential preventive prophylaxis. Gentle high-frequency ultrasonic tips shatter hard calcified tartar (calculus) accumulations that standard toothbrush bristles cannot touch, followed by rotating prophy paste polishing for a slippery clean finish.',
      iconName: 'Wind',
      tag: 'Preventive'
    },
    {
      id: 'gum-surgery',
      title: 'Gum Surgery',
      shortDescription: 'Laser gingival contouring therapies treating advanced periodontal pockets.',
      fullDescription: 'Treating receding ridges or deep periodontal pocket infections. Using surgical techniques or gentle laser revisions, Dr. Vivek Singh reorganizes diseased gum contours, decreases pocket depths, and locks down teeth structural support.',
      iconName: 'Scissors',
      tag: 'Surgical'
    },
    {
      id: 'cancer-detection',
      title: 'Oral Cancer Detection',
      shortDescription: 'High-precision visual screenings detecting microscopic mucosal abnormalities early.',
      fullDescription: 'Early oral screening saves lives. Dr. Vivek Singh inspects the sublingual, buccal, and glossal mucosa surfaces to flag any early dysplastic variations, hyperkeratotic plaques, or silent lesions, providing essential safety for all adult patients.',
      iconName: 'ShieldAlert',
      tag: 'Preventive'
    }
  ];

  const tags = ['All', 'Core', 'Cosmetic', 'Orthodontic', 'Surgical', 'Preventive'];

  const filteredServices = selectedTag === 'All' 
    ? servicesData 
    : servicesData.filter(s => s.tag === selectedTag);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-6 h-6 text-cyan-400" />;
      case 'Award': return <Award className="w-6 h-6 text-purple-400" />;
      case 'Droplets': return <Droplets className="w-6 h-6 text-blue-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'Smile': return <Smile className="w-6 h-6 text-emerald-400" />;
      case 'SquareCheck': return <SquareCheck className="w-6 h-6 text-indigo-400" />;
      case 'Anchor': return <Anchor className="w-6 h-6 text-sky-400" />;
      case 'Wind': return <Wind className="w-6 h-6 text-teal-400" />;
      case 'Scissors': return <Scissors className="w-6 h-6 text-rose-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-red-550 block animate-pulse" />;
      default: return <Smile className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getTagColorClass = (tag: string) => {
    switch (tag) {
      case 'Core': return 'bg-blue-500/15 text-blue-300 border-blue-500/20';
      case 'Cosmetic': return 'bg-amber-500/15 text-amber-300 border-amber-500/20';
      case 'Orthodontic': return 'bg-indigo-500/15 text-indigo-300 border-indigo-500/20';
      case 'Surgical': return 'bg-rose-500/15 text-rose-300 border-rose-500/20';
      case 'Preventive': return 'bg-teal-500/15 text-teal-300 border-teal-500/20';
      default: return 'bg-slate-500/15 text-slate-300 border-slate-500/20';
    }
  };

  return (
    <section id="services-section" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-medical-950/20 border-b border-medical-500/5">
      {/* Absolute Digital Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-medical-500/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full border border-medical-500/10 bg-medical-950/65 mb-4 backdrop-blur-md">
            <Sparkle className="w-3.5 h-3.5 text-medical-300 shrink-0" />
            <span className="text-[10px] font-mono tracking-widest text-medical-300 uppercase">State-of-the-Art Operations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Clinical <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-400 to-cyan-300">Dental Treatments</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            From molecular tissue bone grafts and digital dental restorations down to specialized ortho leveling pathways. Discover Dr. Vivek Singh's fully-equipped treatment suite in Kapoorthala, Lucknow.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                selectedTag === tag 
                  ? 'bg-medical-500 text-white shadow-[0_0_15px_rgba(14,165,233,0.3)] scale-102 font-semibold'
                  : 'bg-medical-950/40 text-slate-400 hover:text-white border border-medical-500/10 hover:border-medical-400/30'
              }`}
            >
              {tag === 'All' ? 'All Services' : tag}
            </button>
          ))}
        </div>

        {/* Services Grid (Hover Animated) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setActiveService(service)}
              className="group relative rounded-2xl p-6 glass-effect glass-effect-hover flex flex-col justify-between cursor-pointer border border-medical-500/10 transition-transform duration-300"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-medical-950/60 border border-medical-500/15 flex items-center justify-center group-hover:border-cyan-400/40 transition-colors duration-300">
                    {getIconComponent(service.iconName)}
                  </div>
                  <span className={`text-[9px] font-mono font-medium uppercase tracking-widest px-2.5 py-1 rounded-md border ${getTagColorClass(service.tag)}`}>
                    {service.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-medical-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors duration-300">
                  {service.shortDescription}
                </p>
              </div>

              {/* Read Info Action Foot */}
              <div className="flex items-center gap-1.5 text-xs text-medical-300 group-hover:text-cyan-300 font-mono font-medium tracking-wide">
                View Full Details 
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>

              {/* Subtle Tech Corner Accent Line */}
              <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden rounded-tr-2xl">
                <div className="absolute top-[-5px] right-[-5px] w-10 h-[1.5px] bg-medical-400/20 rotate-45 transform origin-top-left transition-all duration-300 group-hover:bg-cyan-400/50"></div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* DETAILED GLASS MODAL (PORTAL DIALOG SIMULATION OVERLAY) */}
      {activeService && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-medical-950/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-xl rounded-3xl p-6 sm:p-8 glass-effect box-glow-cyan overflow-hidden animate-in zoom-in-95 duration-400 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Exit Cross button */}
            <button 
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-medical-950/40 hover:bg-medical-500/20 border border-medical-500/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              ✕
            </button>

            {/* Glowing Tech Frame */}
            <div className="flex items-center gap-3.5 mb-6">
              <div className="p-3.5 rounded-2xl bg-medical-500/10 border border-medical-400/30">
                {getIconComponent(activeService.iconName)}
              </div>
              <div>
                <span className={`text-[9px] font-mono font-medium px-2 py-0.5 rounded-md border ${getTagColorClass(activeService.tag)}`}>
                  {activeService.tag} CLINICAL PROTOCOL
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white mt-1">
                  {activeService.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4 font-sans text-sm sm:text-base text-slate-350 leading-relaxed">
              <p className="font-medium text-white italic text-xs sm:text-sm">
                "{activeService.shortDescription}"
              </p>
              <div className="p-4 rounded-xl bg-medical-950/50 border border-medical-500/10">
                <span className="block font-mono text-[9px] text-slate-400 uppercase tracking-widest mb-1.5">CLINICAL OVERVIEW</span>
                <p className="text-xs sm:text-sm text-slate-300">{activeService.fullDescription}</p>
              </div>
              <div className="flex items-center gap-3.5 text-xs text-slate-300 pt-2 border-t border-medical-500/15">
                <Clock className="w-4 h-4 text-medical-300" />
                <span>Requires Appointment with <strong>Dr. Vivek Singh (MDS)</strong></span>
              </div>
            </div>

            <div className="mt-8 flex gap-3.5 flex-col sm:flex-row justify-end">
              <button
                onClick={() => setActiveService(null)}
                className="px-5 py-2.5 rounded-xl border border-medical-500/20 text-xs font-semibold text-slate-300 hover:text-white hover:bg-medical-500/10 transition-colors cursor-pointer"
              >
                Close Clinical Review
              </button>
              <button
                onClick={() => {
                  setActiveService(null);
                  document.getElementById('appointment-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-medical-500 to-medical-600 text-xs font-semibold text-white shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:scale-102 cursor-pointer"
              >
                Schedule Appointment
              </button>
            </div>

            {/* Micro Corner brackets for aesthetic glow */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-medical-400/30"></div>
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-medical-400/30"></div>
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-medical-400/30"></div>
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-medical-400/30"></div>
          </div>
        </div>
      )}

    </section>
  );
}
