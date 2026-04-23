import { motion } from 'motion/react';
import { BrainCircuit, Users, HeartPulse, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function HumanAI() {
  return (
    <section className="py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white border border-[#E2E8F0] rounded-full text-[#64748B] text-[11px] font-bold uppercase tracking-wider mb-6">
              Human + AI Care
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-8 tracking-tight">
              Human + <br />
              <span className="text-[#2563EB]">AI Care</span>
            </h2>
            <p className="text-xl text-[#0F172A] font-medium mb-12 leading-relaxed">
              AI identifies risks. <br />
              <span className="underline decoration-[#0D9488] decoration-4 underline-offset-4">Care teams take action.</span>
            </p>

            <div className="space-y-6">
              {[
                { 
                  icon: CheckCircle2, 
                  title: 'Doctors', 
                  desc: 'Medical professionals providing clinical oversight and intervention.' 
                },
                { 
                  icon: CheckCircle2, 
                  title: 'Health coaches', 
                  desc: 'Specialists driving daily behavioral changes and lifestyle optimization.' 
                },
                { 
                  icon: CheckCircle2, 
                  title: 'Care coordinators', 
                  desc: 'Dedicated staff ensuring seamless patient navigation and support.' 
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all">
                    <item.icon className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0F172A] mb-2">{item.title}</h4>
                    <p className="text-[#64748B] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Piece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto bg-white rounded-[48px] shadow-2xl border border-[#E2E8F0] overflow-hidden p-8 flex flex-col items-center justify-center text-center">
              <div className="absolute top-0 right-0 p-8">
                 <ShieldCheck className="w-10 h-10 text-emerald-500 opacity-20" />
              </div>
              
              <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mb-10">
                <BrainCircuit className="w-12 h-12 text-[#2563EB]" />
              </div>

              <h3 className="text-2xl font-extrabold text-[#0F172A] mb-6">Proactive Risk Detection</h3>
              
              <div className="w-full space-y-4 max-w-xs">
                {[
                  "Early warning triggers",
                  "Pattern recognition",
                  "Deterioration forecasting",
                  "Contextual health alerts"
                ].map((tag, i) => (
                   <div key={i} className="flex items-center gap-3 bg-[#F8FAFC] p-3 rounded-2xl border border-[#E2E8F0]">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                      <span className="text-sm font-bold text-slate-700">{tag}</span>
                   </div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#0D9488]/10 rounded-full blur-3xl" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2563EB]/10 rounded-full blur-3xl" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
