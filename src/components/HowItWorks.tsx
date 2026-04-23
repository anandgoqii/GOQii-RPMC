import { motion } from 'motion/react';
import { Smartphone, Radar, BrainCircuit, HeartPulse, UserCheck } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    title: "Patient Onboarding",
    desc: "Patients receive cellular-connected devices ready to use out of the box. No WiFi required.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Radar,
    title: "Data Capture",
    desc: "Vitals are captured automatically and streamed securely to the clinician portal.",
    color: "bg-teal-50 text-teal-600"
  },
  {
    icon: BrainCircuit,
    title: "AI Risk Detection",
    desc: "Our neural network detects subtle deviations in vitals before they become critical.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: HeartPulse,
    title: "Clinical Action",
    desc: "Care teams intervene proactively based on prioritized risk alerts.",
    color: "bg-rose-50 text-rose-600"
  },
  {
    icon: UserCheck,
    title: "Continuous Engagement",
    desc: "Ongoing behavioral nudges and coaching support driving long-term adherence.",
    color: "bg-amber-50 text-amber-600"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold text-[#0F172A] mb-5 tracking-tight">Proactive Care Loop</h2>
          <p className="text-lg text-[#64748B] leading-[1.6]">
            CuraStream bridges the gap between clinic visits with an end-to-end monitoring ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-[2px] bg-[#E2E8F0] -z-0" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="w-20 h-20 rounded-[20px] bg-white border border-[#E2E8F0] flex items-center justify-center mb-8 mx-auto shadow-sm">
                <step.icon className="w-8 h-8 text-[#0F172A]" />
              </div>
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-[#F1F5F9] rounded-full text-[10px] font-bold text-[#94A3B8] uppercase mb-4">Step {idx + 1}</span>
                <h3 className="text-lg font-bold text-[#0F172A] mb-3 tracking-tight">{step.title}</h3>
                <p className="text-[#64748B] text-sm leading-[1.6] px-2">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
