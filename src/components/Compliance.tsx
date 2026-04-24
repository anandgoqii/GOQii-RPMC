import { motion } from 'motion/react';
import { Shield, HeartPulse, Globe, ShieldCheck, Database, Key } from 'lucide-react';

const standards = [
  { name: 'ISO 27001', icon: Shield },
  { name: 'HIPAA', icon: HeartPulse },
  { name: 'GDPR', icon: Globe },
  { name: 'PDPL', icon: ShieldCheck },
  { name: 'Data Residency', icon: Database },
  { name: 'RBAC', icon: Key },
];

export default function Compliance() {
  return (
    <section className="py-24 bg-white" id="certifications">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[#2563EB] uppercase tracking-[0.2em] mb-4">
            Enterprise-Grade Security & Compliance
          </h2>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-8 tracking-tight">
            Built on Global Standards. <br className="hidden sm:block" />
            <span className="text-[#2563EB]">Trusted Locally.</span>
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Our platform adheres to international healthcare, security, and data protection standards — ensuring safe, compliant, and reliable care delivery at scale.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {standards.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-100 transition-all text-center flex flex-col items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <item.icon className="w-6 h-6 text-slate-400 group-hover:text-[#2563EB] transition-colors" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wider">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
