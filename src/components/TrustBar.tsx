import { motion } from 'motion/react';

export default function TrustBar() {
  return (
    <section className="py-12 bg-white border-y border-[#F1F5F9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[11px] font-bold text-[#94A3B8] uppercase tracking-[2px] mb-10">
          Trusted by healthcare providers, insurers, and enterprise partners
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {/* Using text-based branding placeholders that look like logos */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-xs">M</div>
            <span className="font-extrabold text-xl tracking-tighter text-slate-900">METLIFE</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">A</div>
            <span className="font-extrabold text-xl tracking-tighter text-slate-900">AXA</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-6 bg-slate-200 rounded flex items-center justify-center text-slate-900 font-bold text-[10px]">HEALTH</div>
            <span className="font-extrabold text-xl tracking-tighter text-slate-900">BUPA</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-tr-xl rounded-bl-xl flex items-center justify-center text-white font-bold text-xs">S</div>
            <span className="font-extrabold text-xl tracking-tighter text-slate-900">SEHA</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-slate-900 rounded-full flex items-center justify-center text-slate-900 font-bold text-[10px]">TH</div>
            <span className="font-extrabold text-xl tracking-tighter text-slate-900">TATA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
