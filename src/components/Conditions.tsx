import { motion } from 'motion/react';
import { Thermometer, Heart, CloudLightning, Activity, ChevronRight } from 'lucide-react';

const conditions = [
  {
    icon: CloudLightning,
    title: "Diabetes Management",
    benefit: "Stabilize HbA1c levels with continuous glucose monitoring & alerts.",
    color: "group-hover:bg-amber-500",
    bg: "bg-amber-50"
  },
  {
    icon: Activity,
    title: "Hypertension Monitoring",
    benefit: "Manage uncontrolled blood pressure with smart-cuff monitoring.",
    color: "group-hover:bg-blue-500",
    bg: "bg-blue-50"
  },
  {
    icon: Heart,
    title: "Cardiac Care",
    benefit: "40% reduction in cardiac readmissions through ECG tracking.",
    color: "group-hover:bg-rose-500",
    bg: "bg-rose-50"
  },
  {
    icon: Thermometer,
    title: "Post-discharge Recovery",
    benefit: "Safe transition to home with early infection detection & vitals.",
    color: "group-hover:bg-teal-500",
    bg: "bg-teal-50"
  }
];

export default function Conditions() {
  return (
    <section className="py-24 bg-white" id="use-cases">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-[#0F172A] mb-6 tracking-tight">Built for Complex care.</h2>
            <p className="text-lg text-[#64748B] leading-[1.6]">Tailored monitoring protocols for the challenges that impact your clinical outcomes most.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {conditions.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-[24px] bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-white hover:shadow-xl transition-all cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm`}>
                <c.icon className="w-6 h-6 text-[#1E293B] group-hover:text-[#2563EB] transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3 tracking-tight">{c.title}</h3>
              <p className="text-[#64748B] leading-[1.6] text-sm mb-8">
                {c.benefit}
              </p>
              <div className="flex gap-2">
                 <span className="px-3 py-1 rounded-full bg-[#F1F5F9] text-[#475569] text-[10px] font-semibold">Real-time</span>
                 <span className="px-3 py-1 rounded-full bg-[#F1F5F9] text-[#475569] text-[10px] font-semibold">AI Powered</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
