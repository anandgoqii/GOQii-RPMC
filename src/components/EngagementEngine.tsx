import { motion } from 'motion/react';
import { Target, MessageCircle, Trophy, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: MessageCircle,
    title: "Smart nudges",
    desc: "AI-driven prompts that guide patients to take readings and stay synchronized."
  },
  {
    icon: Target,
    title: "Reminders",
    desc: "Personalized alerts for medication, measurements, and clinical tasks."
  },
  {
    icon: Trophy,
    title: "Habit tracking",
    desc: "Building long-term health habits through psychology-backed behavioral design."
  },
  {
    icon: Activity,
    title: "Continuous patient support",
    desc: "Keeping patients engaged and compliant with care protocols through ongoing support."
  }
];

export default function EngagementEngine() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#F1F5F9] rounded-full text-[#475569] text-[11px] font-bold uppercase tracking-wider mb-6">
              Engagement Engine
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight leading-tight">
              Driving <span className="text-[#2563EB]">Behavior Change</span>
            </h2>
            <p className="text-lg text-[#64748B] mb-10 leading-[1.6]">
              This is GOQii’s real strength. Monitoring without engagement doesn’t work. Our proprietary behavioral engine ensures patients stay active and adherent to their care plans.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {features.map((f, i) => (
                <div key={i}>
                  <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <h4 className="font-bold text-[#0F172A] mb-2">{f.title}</h4>
                  <p className="text-sm text-[#64748B] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
            
            <Link 
              to="/behavioral-science"
              className="flex items-center gap-2 font-bold text-[#2563EB] hover:gap-3 transition-all"
            >
              Learn about our behavioral science <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-[#F8FAFC] rounded-[24px] border border-[#E2E8F0] shadow-xl p-8">
              {/* Mockup UI of a phone or engagement screen */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4 mb-6">
                  <div>
                    <div className="text-xs font-bold text-[#94A3B8] uppercase">Daily Goal</div>
                    <div className="text-lg font-bold text-[#0F172A]">Morning Reading</div>
                  </div>
                  <div className="w-12 h-12 rounded-full border-4 border-[#2563EB] border-t-[#E2E8F0] flex items-center justify-center">
                    <span className="text-xs font-bold text-[#0F172A]">75%</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] flex gap-4 shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2563EB]" />
                  <div className="w-10 h-10 rounded-full bg-[#E2E8F0] shrink-0 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200" alt="Nurse" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0F172A] mb-1">Sarah (Care Coach)</div>
                    <div className="text-sm text-[#64748B]">"Great job logging your BP three days in a row! You're on track."</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <Trophy className="text-[#F59E0B] w-6 h-6" />
                     <div>
                       <div className="text-sm font-bold text-[#0F172A]">3 Day Streak!</div>
                       <div className="text-xs text-[#64748B]">+50 Reward Points</div>
                     </div>
                   </div>
                </div>
                
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-reading-modal'))}
                  className="w-full py-3 rounded-xl bg-[#2563EB] text-white font-bold shadow-md hover:bg-[#1D4ED8] transition-colors"
                >
                  Take Today's Reading
                </button>
              </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -z-10 -right-10 -bottom-10 w-64 h-64 bg-gradient-to-br from-[#2563EB]/20 to-transparent rounded-full blur-3xl mix-blend-multiply" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
