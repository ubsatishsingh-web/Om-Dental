import React from 'react';
import { Clock, CalendarDays, AlertTriangle, MoonStar } from 'lucide-react';
import { OperatingHour } from '../types';

export default function OperatingHours() {
  const hours: OperatingHour[] = [
    {
      dayGroup: 'Mon - Wed & Fri - Sat',
      timeRange: '10:00 AM – 03:00 PM , 05:30 PM – 09:00 PM',
      isSpecial: false
    },
    {
      dayGroup: 'Thursday Slots',
      timeRange: '10:00 AM – 03:00 PM , 05:30 PM – 09:00 PM',
      isSpecial: false
    },
    {
      dayGroup: 'Sunday Session (Half Day)',
      timeRange: '10:00 AM – 03:00 PM',
      isSpecial: true
    }
  ];

  return (
    <div className="rounded-3xl p-6 sm:p-8 glass-effect border border-medical-500/10 box-glow-cyan flex flex-col justify-between h-full relative overflow-hidden group">
      {/* Absolute Tech Details */}
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden rounded-tr-3xl">
        <div className="absolute top-[-5px] right-[-5px] w-20 h-[1px] bg-medical-400 rotate-45"></div>
      </div>

      <div>
        <div className="flex items-center gap-3.5 mb-6">
          <div className="p-3 rounded-2xl bg-medical-500/10 border border-medical-400/20 text-medical-300">
            <CalendarDays className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-[9px] font-mono tracking-widest text-slate-400 uppercase">Consulting Slots</span>
            <h3 className="font-display font-bold text-xl text-white">Operating Hours</h3>
          </div>
        </div>

        <div className="space-y-4">
          {hours.map((hour, idx) => (
            <div 
              key={idx}
              className={`p-4 rounded-2xl border transition-all duration-300 ${
                hour.isSpecial 
                  ? 'bg-amber-500/5 border-amber-500/25 group-hover:border-amber-400/40' 
                  : 'bg-medical-950/40 border-medical-500/10 group-hover:border-medical-400/25'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-mono font-bold uppercase tracking-wider ${hour.isSpecial ? 'text-amber-400' : 'text-medical-300'}`}>
                  {hour.dayGroup}
                </span>
                {hour.isSpecial && (
                  <span className="flex items-center gap-1 py-0.5 px-2 rounded-full bg-amber-500/10 text-[9px] font-mono tracking-wide text-amber-300 uppercase">
                    <AlertTriangle className="w-2.5 h-2.5" />
                    Special Hours
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2.5 text-sm font-semibold text-white tracking-wide">
                <Clock className={`w-4 h-4 shrink-0 ${hour.isSpecial ? 'text-amber-400' : 'text-cyan-400'}`} />
                <span>{hour.timeRange}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Footer Section */}
      <div className="mt-8 pt-4 border-t border-medical-500/10 flex items-start gap-3.5 text-xs text-slate-400">
        <MoonStar className="w-5 h-5 text-medical-400 shrink-0 mt-0.5" />
        <p className="leading-normal">
          <strong className="text-slate-350 font-bold">Emergency dental pain?</strong> We support urgent orthodontic revisions and emergency scaling. Use the direct WhatsApp connect link below for fast triage slot allocation.
        </p>
      </div>

      {/* Corner Bracket Elements */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-medical-500/30"></div>
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-medical-500/30"></div>
    </div>
  );
}
