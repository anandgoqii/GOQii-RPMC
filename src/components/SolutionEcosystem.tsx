import { motion } from 'motion/react';
import { Smartphone, BrainCircuit, Users, Send } from 'lucide-react';

const pillars = [
  { icon: Smartphone, title: 'Connected devices', color: 'text-blue-500' },
  { icon: BrainCircuit, title: 'AI-driven insights', color: 'text-purple-500' },
  { icon: Users, title: 'Human coaching', color: 'text-emerald-500' },
  { icon: Send, title: 'Behavioral nudges', color: 'text-amber-500' }
];

export default function SolutionEcosystem() {
  return (
    <section className="py-24 bg-white" id="platform">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight">
            A Complete Remote Care Ecosystem
          </h2>
          <p className="text-xl text-[#64748B] mb-4">We combine:</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[24px] p-6 md:p-8 flex flex-col items-center justify-center shadow-sm"
            >
              <pillar.icon className={`w-10 h-10 mb-4 ${pillar.color}`} />
              <h3 className="font-bold text-[#0F172A] text-lg tracking-tight">{pillar.title}</h3>
            </motion.div>
          ))}
        </div>

        <p className="text-2xl font-bold text-[#0F172A] max-w-2xl mx-auto tracking-tight">
          To ensure continuous care <br className="hidden sm:inline" />
          beyond hospital walls.
        </p>
      </div>
    </section>
  );
}
