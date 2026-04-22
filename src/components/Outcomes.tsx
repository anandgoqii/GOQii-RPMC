import { motion } from 'motion/react';

export default function Outcomes() {
  return (
    <section className="py-20 bg-white border-t border-[#F1F5F9]" id="outcomes">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">Proven Impact</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          <div className="text-center w-full md:w-auto px-8">
            <span className="text-4xl font-extrabold text-[#0F172A] block mb-2">-40%</span>
            <span className="text-[11px] text-[#94A3B8] uppercase tracking-[1px] font-bold">Hospital Readmissions</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-[#E2E8F0]" />
          <div className="text-center w-full md:w-auto px-8">
            <span className="text-4xl font-extrabold text-[#0F172A] block mb-2">+82%</span>
            <span className="text-[11px] text-[#94A3B8] uppercase tracking-[1px] font-bold">Patient Adherence</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-[#E2E8F0]" />
          <div className="text-center w-full md:w-auto px-8">
            <span className="text-4xl font-extrabold text-[#0F172A] block mb-2">-35%</span>
            <span className="text-[11px] text-[#94A3B8] uppercase tracking-[1px] font-bold">Emergency Visits</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-[#E2E8F0]" />
          <div className="text-center w-full md:w-auto px-8">
            <span className="text-4xl font-extrabold text-[#0F172A] block mb-2">+50%</span>
            <span className="text-[11px] text-[#94A3B8] uppercase tracking-[1px] font-bold">Engagement Levels</span>
          </div>
        </div>
      </div>
    </section>
  );
}
