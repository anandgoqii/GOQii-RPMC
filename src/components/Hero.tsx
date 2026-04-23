import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Hero() {
  const { hash } = useLocation();

  useLayoutEffect(() => {
    // If we land on the home page without a specific hash, force the scroll to the top
    // to fight any browser scroll restoration or layout shifting.
    if (!hash) {
      window.scrollTo(0, 0);
      const t = setTimeout(() => window.scrollTo(0, 0), 100);
      return () => clearTimeout(t);
    }
  }, [hash]);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#F8FAFC]" id="hero">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex gap-2 mb-4">
            <span className="px-4 py-1.5 rounded-full bg-[#F1F5F9] text-[#475569] text-xs font-medium tracking-wide">Cardiac</span>
            <span className="px-4 py-1.5 rounded-full bg-[#F1F5F9] text-[#475569] text-xs font-medium tracking-wide">Diabetes</span>
            <span className="px-4 py-1.5 rounded-full bg-[#F1F5F9] text-[#475569] text-xs font-medium tracking-wide">Recovery</span>
          </div>
          
          <h1 className="text-[56px] leading-[1.1] font-extrabold text-[#0F172A] tracking-[-1.5px] mb-6">
            Beyond Monitoring. <br />
            <span className="bg-gradient-to-r from-[#0D9488] to-[#2563EB] bg-clip-text text-transparent">
              Into Continuous Care.
            </span>
          </h1>
          
          <p className="text-lg text-[#64748B] leading-[1.6] max-w-[480px] mb-8">
            An AI-powered remote patient monitoring ecosystem that connects devices, data, and care teams to deliver real-time intervention and better outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <motion.button 
              onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#0F172A] text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all"
            >
              See How It Works
            </motion.button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal'))}
              className="bg-white text-[#0F172A] border border-[#E2E8F0] px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              Book Demo
            </button>
          </div>

          <div className="mt-12">
            <div className="text-sm">
              <p className="font-bold text-slate-900 tracking-tight">Trusted by 500+ Clinics</p>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <CheckCircle2 key={s} className="w-3 h-3 text-emerald-500" />
                ))}
                <span className="text-xs text-slate-500 ml-1">Certified HIPPA & GDPR</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative z-10 w-full h-[380px] bg-white/70 backdrop-blur-[12px] border border-white/30 rounded-[24px] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] p-6 grid grid-cols-2 gap-4">
            <div className="absolute -top-3 -right-3 bg-[#EF4444] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-[0_4px_12px_rgba(239,68,68,0.3)] z-30">
              Critical Alert: Patient ID #4202
            </div>

            <div className="col-span-2 bg-white rounded-2xl p-4 shadow-sm border border-[#E2E8F0] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E2E8F0]" />
                <div>
                  <div className="font-bold text-sm text-[#0F172A]">Robert Wilson</div>
                  <div className="text-[12px] text-[#94A3B8]">Stable • Last sync: 2m ago</div>
                </div>
              </div>
              <div className="w-2 h-2 bg-[#22C55E] rounded-full ring-4 ring-[#22C55E]/20 animate-pulse" />
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-l-[#2563EB] border border-[#E2E8F0]">
              <div className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wider">Heart Rate</div>
              <div className="text-2xl font-bold text-[#0F172A] my-2">72 <span className="text-sm font-normal text-[#94A3B8]">BPM</span></div>
              <div className="w-full h-8 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent rounded" />
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-l-[#10B981] border border-[#E2E8F0]">
               <div className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wider">Blood Pressure</div>
               <div className="text-2xl font-bold text-[#0F172A] my-2">118/76</div>
               <div className="text-[11px] text-[#22C55E]">↓ 2% from yesterday</div>
            </div>

            <div className="col-span-2 bg-white rounded-2xl p-4 shadow-sm border border-[#E2E8F0]">
              <div className="flex justify-between items-center mb-3">
                <div className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wider">AI Risk Prediction</div>
                <div className="text-[11px] font-semibold text-[#2563EB]">Low Risk (98%)</div>
              </div>
              <div className="h-2 w-full bg-[#F1F5F9] rounded-full overflow-hidden">
                <div className="h-full w-[98%] bg-[#2563EB] rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
