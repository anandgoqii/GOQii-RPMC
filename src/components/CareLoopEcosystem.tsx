import { motion } from 'motion/react';
import { Smartphone, Database, BrainCircuit, Activity, Users, Send, ArrowRight, Bell, Video, Ambulance, Hospital } from 'lucide-react';

const steps = [
  { 
    icon: Smartphone, 
    title: '1. Connected Devices', 
    desc: 'Medical-grade devices capture real-time clinical vitals.',
    color: 'bg-blue-500'
  },
  { 
    icon: Database, 
    title: '2. Data Platform', 
    desc: 'All clinical vitals are securely aggregated and structured.',
    color: 'bg-indigo-500'
  },
  { 
    icon: BrainCircuit, 
    title: '3. Standardized EWS Algorithms', 
    desc: 'Our engine maps live vitals against EWS (Early Warning Score) standards to identify deterioration early.',
    color: 'bg-purple-500'
  },
  { 
    icon: Bell, 
    title: '4. Real-Time Alerts', 
    desc: 'Clinical Command Center triggers immediate, role-based intervention protocols.',
    color: 'bg-red-500'
  },
  { 
    icon: Users, 
    title: '5. Care Team Intervention', 
    desc: 'Doctors, coaches, and care teams act in real-time.',
    color: 'bg-emerald-500'
  },
  { 
    icon: Video, 
    title: '6. Telehealth Consultation', 
    desc: 'Patients connect instantly with healthcare professionals.',
    color: 'bg-cyan-500'
  },
  { 
    icon: Ambulance, 
    title: '7. Ambulance Dispatch', 
    desc: 'Emergency services are triggered instantly for critical cases.',
    color: 'bg-orange-500'
  },
  { 
    icon: Hospital, 
    title: '8. Hospital Admission', 
    desc: 'Seamless coordination for fast and efficient hospital intake.',
    color: 'bg-rose-600'
  },
  { 
    icon: Send, 
    title: '9. Continuous Engagement', 
    desc: 'Patients receive ongoing support, Care Pathways, and follow-ups post-care.',
    color: 'bg-amber-500'
  }
];

export default function CareLoopEcosystem() {
  return (
    <section className="py-32 bg-white overflow-hidden" id="platform">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-8 tracking-tight">
            A Complete Clinical Intervention Loop
          </h2>
          <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap text-[10px] md:text-xs font-bold text-[#64748B] uppercase tracking-wider">
            <span>Devices</span>
            <ArrowRight className="w-3 h-3 text-slate-300" />
            <span>Clinical Vitals</span>
            <ArrowRight className="w-3 h-3 text-slate-300" />
            <span>Standardized EWS Algorithms</span>
            <ArrowRight className="w-3 h-3 text-slate-300" />
            <span>Alerts</span>
            <ArrowRight className="w-3 h-3 text-slate-300" />
            <span>CLINICAL INTERVENTION</span>
            <ArrowRight className="w-3 h-3 text-slate-300" />
            <span className="text-cyan-600">Consultation</span>
            <ArrowRight className="w-3 h-3 text-slate-300" />
            <span className="text-orange-600">Emergency</span>
            <ArrowRight className="w-3 h-3 text-slate-300" />
            <span className="text-rose-600">Admission</span>
            <ArrowRight className="w-3 h-3 text-slate-300" />
            <span className="text-[#2563EB]">Outcomes</span>
          </div>
          <p className="mt-8 text-xl text-[#0F172A] font-medium leading-relaxed">
            We don’t just collect clinical vitals. <br className="hidden sm:block" />
            We <span className="text-[#2563EB]">manage the entire patient journey</span>.
          </p>
        </div>

        <div className="space-y-16">
          {[
            { phase: 'Detection', color: 'text-blue-600', range: [0, 3] },
            { phase: 'Response', color: 'text-emerald-600', range: [3, 6] },
            { phase: 'Resolution', color: 'text-rose-600', range: [6, 9] }
          ].map((group, groupIndex) => (
            <div key={group.phase} className="relative">
              <div className="flex items-center gap-4 mb-8">
                <span className={`text-xs font-black uppercase tracking-[0.2em] ${group.color} bg-white px-2`}>
                  Phase 0{groupIndex + 1}: {group.phase}
                </span>
                <div className="flex-1 h-px bg-slate-100" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {steps.slice(group.range[0], group.range[1]).map((step, i) => {
                  const globalIndex = group.range[0] + i;
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group flex flex-col items-start gap-4"
                    >
                      <div className={`w-16 h-16 rounded-[1.25rem] ${step.color} shadow-lg shadow-current/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <step.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Step 0{globalIndex + 1}</span>
                        </div>
                        <h3 className="text-xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
                          {step.title.split('. ')[1]}
                        </h3>
                        <p className="text-[#64748B] text-sm leading-relaxed max-w-[260px]">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
