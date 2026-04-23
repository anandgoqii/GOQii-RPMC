import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Outcomes() {
  return (
    <section className="py-24 bg-white border-t border-[#F1F5F9]" id="outcomes">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight">Measurable Impact</h2>
          <p className="text-lg text-[#64748B]">Proven results across global healthcare deployments.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-20 text-center">
          <div className="px-8 py-10 bg-slate-50 rounded-3xl border border-slate-100">
            <span className="text-5xl font-extrabold text-[#2563EB] block mb-3">-40%</span>
            <span className="text-[12px] text-[#94A3B8] uppercase tracking-[1.5px] font-bold">Hospital Readmissions</span>
          </div>
          <div className="px-8 py-10 bg-slate-50 rounded-3xl border border-slate-100">
            <span className="text-5xl font-extrabold text-[#0D9488] block mb-3">+82%</span>
            <span className="text-[12px] text-[#94A3B8] uppercase tracking-[1.5px] font-bold">Patient Adherence</span>
          </div>
          <div className="px-8 py-10 bg-slate-50 rounded-3xl border border-slate-100">
            <span className="text-5xl font-extrabold text-[#EF4444] block mb-3">-35%</span>
            <span className="text-[12px] text-[#94A3B8] uppercase tracking-[1.5px] font-bold">Emergency Visits</span>
          </div>
          <div className="px-8 py-10 bg-slate-50 rounded-3xl border border-slate-100">
            <span className="text-5xl font-extrabold text-[#8B5CF6] block mb-3">+50%</span>
            <span className="text-[12px] text-[#94A3B8] uppercase tracking-[1.5px] font-bold">Engagement Levels</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {[
            "Reduced hospital readmissions",
            "Improved adherence",
            "Early risk detection",
            "Better long-term health outcomes"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              </div>
              <span className="text-sm font-bold text-[#475569]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

