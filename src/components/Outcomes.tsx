import { motion } from 'motion/react';

export default function Outcomes() {
  return (
    <section className="py-20 bg-white border-t border-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          <div className="text-center w-full md:w-auto px-10">
            <span className="text-4xl font-extrabold text-[#0F172A] block mb-2">40%</span>
            <span className="text-[11px] text-[#94A3B8] uppercase tracking-[1px] font-bold">Readmission Reduction</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-[#E2E8F0]" />
          <div className="text-center w-full md:w-auto px-10">
            <span className="text-4xl font-extrabold text-[#0F172A] block mb-2">82%</span>
            <span className="text-[11px] text-[#94A3B8] uppercase tracking-[1px] font-bold">Patient Adherence</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-[#E2E8F0]" />
          <div className="text-center w-full md:w-auto px-10">
            <span className="text-4xl font-extrabold text-[#0F172A] block mb-2">15min</span>
            <span className="text-[11px] text-[#94A3B8] uppercase tracking-[1px] font-bold">Average Response</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-[#E2E8F0]" />
          <div className="text-center w-full md:w-auto px-10">
            <span className="text-4xl font-extrabold text-[#0F172A] block mb-2">$4.2k</span>
            <span className="text-[11px] text-[#94A3B8] uppercase tracking-[1px] font-bold">Saved Per Patient/Yr</span>
          </div>
        </div>
      </div>
    </section>
  );
}
