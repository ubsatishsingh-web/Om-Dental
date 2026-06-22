import React from 'react';
import { MapPin, Phone, Facebook, Navigation, ExternalLink, CalendarDays, Share2 } from 'lucide-react';

export default function ContactSection() {
  const clinicAddress = "Shop no 28-29, FI Plaza, near Sai mandir, Kapoorthla, Bara Chandganj, Kapoorthala, Lucknow, UP 226024";
  const clinicPhone = "09559188655";
  const mapLink = "https://maps.app.goo.gl/CjPyxPs7BiV1kt1c7";
  const fbLink = "https://www.facebook.com/Om-Dental-Orthodontic-Clinic-148360455690566/";

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Om Dental and Orthodontic Clinic',
        text: 'State-of-the-art Orthodontic care by Dr. Vivek Singh (MDS, BDS)',
        url: window.location.href
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(`Om Dental and Orthodontic Clinic, Lucknow. Contact: ${clinicPhone}`);
      alert('Clinic details copied to clipboard!');
    }
  };

  return (
    <div className="rounded-3xl p-6 sm:p-8 glass-effect border border-medical-500/10 box-glow-cyan flex flex-col justify-between h-full relative overflow-hidden group">
      {/* Absolute Corner line */}
      <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none overflow-hidden rounded-tl-3xl">
        <div className="absolute top-[-5px] left-[-5px] w-20 h-[1px] bg-medical-400 -rotate-45"></div>
      </div>

      <div>
        <div className="flex items-center gap-3.5 mb-6">
          <div className="p-3 rounded-2xl bg-medical-500/10 border border-medical-400/20 text-medical-300">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-[9px] font-mono tracking-widest text-slate-400 uppercase">Interactive Connect</span>
            <h3 className="font-display font-bold text-xl text-white font-sans text-white">Contact &amp; Location</h3>
          </div>
        </div>

        <div className="space-y-5">
          {/* SECURE GEOLOCATION POINTER */}
          <div className="p-4 bg-medical-950/40 rounded-2xl border border-medical-500/10 hover:border-medical-400/25 transition-colors duration-300">
            <span className="block text-[9px] font-mono text-slate-400 mb-1">CLINIC ADDRESS</span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {clinicAddress}
            </p>
            <div className="mt-3 flex gap-2.5">
              <a 
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 py-2 px-3.5 rounded-xl bg-medical-500/10 hover:bg-medical-500/25 border border-medical-400/20 text-xs text-medical-300 hover:text-white transition-all cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                Launch Google Maps
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          {/* PHONE DIALING MODULE */}
          <div className="p-4 bg-medical-950/40 rounded-2xl border border-medical-500/10 hover:border-medical-400/25 transition-colors duration-300">
            <span className="block text-[9px] font-mono text-slate-400 mb-1">DIRECT VOICE CHANNEL</span>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base sm:text-lg font-bold text-white tracking-wide">
                  {clinicPhone}
                </p>
                <p className="text-[10px] text-slate-400">Dr. Vivek's Consulting Desk</p>
              </div>
              <a 
                href={`tel:${clinicPhone}`}
                className="p-3 rounded-xl bg-gradient-to-r from-medical-500 to-medical-600 hover:scale-105 shadow-[0_0_15px_rgba(14,165,233,0.3)] text-white transition-all cursor-pointer"
                aria-label="Call clinic desk"
              >
                <Phone className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* SOCIAL CHANNELS */}
          <div className="flex justify-between items-center p-4 bg-medical-950/40 rounded-2xl border border-medical-500/10">
            <div>
              <span className="block text-[9px] font-mono text-slate-400">PATIENT COMMUNITY</span>
              <span className="text-xs text-white font-semibold">Om Dental Facebook Page</span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={handleShare}
                className="p-2.5 rounded-xl bg-medical-500/10 border border-medical-400/20 text-medical-300 hover:text-white transition-all cursor-pointer"
                title="Share Clinic Details"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <a 
                href={fbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-medical-500/10 border border-medical-400/20 text-medical-300 hover:text-white transition-all cursor-pointer"
                aria-label="Connect on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MINI INTEGRATED RADAR LOOKUP GRID */}
      <div className="mt-6 p-4 rounded-xl border border-medical-500/10 bg-radial-at-c from-medical-500/5 to-transparent relative overflow-hidden flex flex-col justify-between">
        <div className="absolute top-2 right-2 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[8px] font-mono text-slate-400 uppercase">GPS ACTIVE</span>
        </div>
        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest leading-loose">
          Locator: Fi Plaza Lucknow
        </div>
        <div className="text-[11px] text-slate-300 leading-normal">
          Directly positioned near the legendary <strong className="text-white">Sai Mandir</strong>, Bara Chandganj path in Kapoorthala, Lucknow. Easily accessible with ample secure private parking facilities.
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-medical-500/30"></div>
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-medical-500/30"></div>
    </div>
  );
}
