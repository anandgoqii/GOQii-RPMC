import { motion } from 'motion/react';
import { Smartphone, Database, BrainCircuit, Activity, Users, Send, ArrowRight, Bell, Video } from 'lucide-react';

const steps = [
  { 
    icon: Smartphone, 
    title: '1. Connected Devices', 
    desc: 'Medical-grade devices capture real-time patient vitals.',
    color: 'bg-blue-500'
  },
  { 
    icon: Database, 
    title: '2. Data Platform', 
    desc: 'All health data is securely aggregated and structured.',
    color: 'bg-indigo-500'
  },
  { 
    icon: BrainCircuit, 
    title: '3. AI Intelligence', 
    desc: 'Risk patterns are identified early using predictive models.',
    color: 'bg-purple-500'
  },
  { 
    icon: Bell, 
    title: '4. Real-Time Alerts', 
    desc: 'Critical health changes trigger instant alerts for timely intervention.',
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
    desc: 'Patients connect instantly with healthcare professionals for remote consultations.',
    color: 'bg-cyan-500'
  },
  { 
    icon: Send, 
    title: '7. Continuous Engagement', 
    desc: 'Patients receive nudges, reminders, and ongoing guidance.',
    color: 'bg-amber-500'
  }
];

export default function CareLoopEcosystem() {
  return (
    <section className="py-32 bg-white overflow-hidden" id="platform">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-8 tracking-tight">
            THE PLATFORM
          </h2>
          <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap text-xs md:text-sm font-bold text-[#64748B] uppercase tracking-wider">
            <span>Devices</span>
            <ArrowRight className="w-3 h-3 text-slate-300" />
            <span>Data</span>
            <ArrowRight className="w-3 h-3 text-slate-300" />
            <span>Intelligence</span>
            <ArrowRight className="w-3 h-3 text-slate-300" />
            <span className="text-red-500">Alerts</span>
            <ArrowRight className="w-3 h-3 text-slate-300" />
            <span>Action</span>
            <ArrowRight className="w-3 h-3 text-slate-300" />
            <span className="text-cyan-600">Consultation</span>
            <ArrowRight className="w-3 h-3 text-slate-300" />
            <span className="text-[#2563EB]">Outcomes</span>
          </div>
          <p className="mt-8 text-xl text-[#0F172A] font-medium leading-relaxed">
            Intelligent Care, Delivered Continuously <br className="hidden sm:block" />
            Our platform connects devices, data, AI, and care teams to enable <span className="text-[#2563EB]">real-time monitoring</span> and proactive intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-0 w-full h-0.5 bg-slate-100 -z-10" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-24 h-24 lg:w-26 lg:h-26 rounded-[28px] ${step.color} shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-sm font-extrabold text-[#0F172A] mb-3 tracking-tight leading-tight px-1">
                  {step.title}
                </h3>
                <p className="text-[12px] text-[#64748B] leading-relaxed px-1">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
