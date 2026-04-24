import { motion } from 'motion/react';
import { ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <>
      {/* THE PROBLEM */}
      <section className="py-24 bg-white border-b border-[#F1F5F9]" id="problem">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-[10px] font-bold uppercase tracking-wider mb-6">
                <AlertTriangle className="w-3 h-3" />
                The Core Challenge
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-8 tracking-tight leading-tight">
                Healthcare doesn’t fail due to lack of data. <br />
                <span className="text-[#64748B]">It fails due to lack of timely action.</span>
              </h2>
              <div className="space-y-4 text-lg text-[#64748B] leading-relaxed">
                <p>Patients drop off. Conditions worsen. Intervention comes too late because traditional care models rely on reactive encounters.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-8 bg-[#F8FAFC] rounded-3xl border border-[#E2E8F0]">
                <div className="text-[#EF4444] font-bold mb-2">The Data Trap</div>
                <p className="text-sm text-[#64748B]">Millions of data points are collected daily, but most are never reviewed by a clinician in time to make a difference.</p>
              </div>
              <div className="p-8 bg-[#F8FAFC] rounded-3xl border border-[#E2E8F0]">
                <div className="text-[#EF4444] font-bold mb-2">The Engagement Gap</div>
                <p className="text-sm text-[#64748B]">Without continuous feedback, patients lose motivation and adherence plummeting within 30 days of discharge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="py-24 bg-[#0F172A] text-white overflow-hidden relative" id="solution">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[11px] font-bold uppercase tracking-wider mb-6">
              Our Solution
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
              A Complete <span className="text-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Remote Care Ecosystem</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium">
              We connect devices, AI intelligence, and care teams to deliver continuous, proactive healthcare beyond hospital walls.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-20">
            {['Devices', 'Platform Intelligence', 'Action', 'Outcomes'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 md:gap-6">
                <div className="flex flex-col items-center">
                   <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 group hover:border-blue-500/50 transition-colors">
                      <span className="text-xl font-bold text-white group-hover:text-blue-400">{i + 1}</span>
                   </div>
                   <span className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">{item}</span>
                </div>
                {i < 4 && (
                  <ArrowRight className="w-6 h-6 text-slate-700 hidden sm:block mt-[-20px]" />
                )}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
               <h3 className="text-xl font-bold text-white mb-4">Continuous Monitoring</h3>
               <p className="text-slate-400 text-sm leading-relaxed">Moving from snapshot data to a 24/7 view of patient health through medical-grade devices.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
               <h3 className="text-xl font-bold text-white mb-4">Proactive Intervention</h3>
               <p className="text-slate-400 text-sm leading-relaxed">AI analyzes trends to flag risks before they become emergencies, triggering clinical action.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
               <h3 className="text-xl font-bold text-white mb-4">Engagement & Adherence</h3>
               <p className="text-slate-400 text-sm leading-relaxed">Human-led care loops supported by automated nudges keep patients on track with their treatment plans.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
