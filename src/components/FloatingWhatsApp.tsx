import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show high tech greeting tooltip after 4 seconds to invite patience connect
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans flex flex-col items-end gap-2.5 pointer-events-none">
      
      {/* Dynamic Hover Tooltip notification speechbubble */}
      {showTooltip && (
        <div className="bg-medical-950/90 border border-emerald-500/10 p-3.5 rounded-2xl shadow-[0_10px_25px_-5px_rgba(16,185,129,0.15)] max-w-xs animate-in slide-in-from-bottom-2 duration-300 backdrop-blur-md pointer-events-auto relative block text-left">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-0.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-bold">Online Desk</span>
          </div>
          
          <p className="text-xs text-slate-200 font-medium leading-normal mb-2 pr-3.5">
            Questions on aligners or treatment scheduling? Chat directly on WhatsApp!
          </p>
          
          <a
            href="https://wa.me/919559188655"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowTooltip(false)}
            className="inline-flex items-center text-[10px] font-bold text-emerald-400 hover:text-emerald-300 tracking-wide uppercase cursor-pointer"
          >
            Connect Instantly →
          </a>
        </div>
      )}

      {/* Floating Glowing Ripple anchor button */}
      <div className="pointer-events-auto relative mt-auto">
        {/* Radar concentric circular ripples */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/25 animate-ping opacity-75"></span>
        <span className="absolute inset-[-4px] rounded-full bg-emerald-500/10"></span>
        
        <a
          href="https://wa.me/919559188655"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-500 text-white shadow-xl shadow-emerald-600/35 hover:shadow-emerald-500/50 hover:scale-110 transition-all duration-300 cursor-pointer"
          aria-label="Direct Connect via WhatsApp"
        >
          {/* Custom vector representation matching WhatsApp */}
          <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97-1.861-1.868-4.339-2.897-6.974-2.898-5.437 0-9.87 4.373-9.875 9.8.001 2.044.544 3.391 1.47 5.06l-.974 3.56 3.65-.957zM18.156 14.8c-.34-.17-2.011-.99-2.321-1.1-.311-.11-.539-.17-.765.17-.227.34-.879 1.1-.115 1.34c.264.08.528-.08.791-.2l.142-.063c.535-.239 1.053-.472 1.3-.397.351.104 1.139.73 1.393.9.227.15.34.23.31.28-.15.26-.78.96-1.11 1.14-.3.16-.91.5-2.02.1-.8-.29-2.29-1.02-3.83-2.39-1.2-1.07-2.02-2.4-2.25-2.8-.23-.4-.02-.62.18-.82.18-.18.4-.47.6-.7.2-.23.27-.39.4-.65.13-.26.07-.49-.03-.7-.1-.2-.76-1.85-1.05-2.54-.28-.68-.56-.59-.76-.6-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.85 0 1.68 1.23 3.31 1.4 3.54.17.23 2.42 3.69 5.86 5.17.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.14.66-.1 2.01-.82 2.3-1.58.29-.76.29-1.41.2-1.55-.09-.14-.33-.23-.67-.4z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
