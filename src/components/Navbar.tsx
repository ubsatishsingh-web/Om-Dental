import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Menu, X, ShieldAlert } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      id="navbar-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-4 bg-medical-950/75 backdrop-blur-md border-b border-medical-500/10 shadow-lg'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            onClick={() => scrollToSection('hero-section')} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-medical-400 to-medical-600 flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-transform duration-300 group-hover:scale-105">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="block font-display text-lg font-bold tracking-tight text-white group-hover:text-medical-300 transition-colors">
                OM DENTAL
              </span>
              <span className="block text-[9px] font-mono tracking-widest text-medical-400 uppercase -mt-1">
                &amp; Orthodontic Clinic
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-sans">
            <button
              onClick={() => scrollToSection('about-doctor')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              The Doctor
            </button>
            <button
              onClick={() => scrollToSection('services-section')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('hours-location')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Hours
            </button>
            <button
              onClick={() => scrollToSection('appointment-section')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Desktop CTA Callout */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('appointment-section')}
              className="relative px-5 py-2.5 rounded-xl bg-gradient-to-r from-medical-500 to-medical-600 text-sm font-semibold text-white shadow-[0_0_20px_rgba(14,165,233,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] hover:scale-102 hover:from-medical-450 hover:to-medical-550 transition-all duration-300 flex items-center gap-2 group-hover:translate-x-1 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Hamburguer Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-medical-950/95 border-b border-medical-500/10 backdrop-blur-xl animate-in fade-in duration-300 px-6 py-6 space-y-4">
          <button
            onClick={() => scrollToSection('about-doctor')}
            className="block w-full text-left py-2.5 text-base font-medium text-slate-200 hover:text-medical-300 transition-colors"
          >
            The Doctor
          </button>
          <button
            onClick={() => scrollToSection('services-section')}
            className="block w-full text-left py-2.5 text-base font-medium text-slate-200 hover:text-medical-300 transition-colors"
          >
            Clinical Services
          </button>
          <button
            onClick={() => scrollToSection('hours-location')}
            className="block w-full text-left py-2.5 text-base font-medium text-slate-200 hover:text-medical-300 transition-colors"
          >
            Clinical Hours
          </button>
          <button
            onClick={() => scrollToSection('appointment-section')}
            className="block w-full text-left py-2.5 text-base font-medium text-slate-200 hover:text-medical-300 transition-colors"
          >
            Booking &amp; Address
          </button>
          <div className="pt-4 border-t border-medical-500/10">
            <button
              onClick={() => scrollToSection('appointment-section')}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-medical-500 to-medical-600 text-center text-sm font-semibold text-white shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Quick Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
