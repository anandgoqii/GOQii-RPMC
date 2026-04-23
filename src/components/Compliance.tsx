import { motion } from 'motion/react';
import { ShieldCheck, FileKey, Share2, Lock, ListChecks, CheckCircle2 } from 'lucide-react';

const categories = [
  {
    title: 'DATA PRIVACY & SECURITY',
    icon: ShieldCheck,
    items: [
      { name: 'HIPAA', desc: 'Ensuring secure handling of patient health information' },
      { name: 'GDPR', desc: 'Protecting user data privacy across global regions' },
      { name: 'PDPL (Saudi Arabia)', desc: 'Compliant with Saudi Personal Data Protection Law' }
    ]
  },
  {
    title: 'CLINICAL & INTEROPERABILITY',
    icon: Share2,
    items: [
      { name: 'HL7 FHIR', desc: 'Seamless healthcare data exchange across systems' },
      { name: 'ICD-10-AM & SBS/ACHI', desc: 'Standardized clinical coding integration' }
    ]
  },
  {
    title: 'INFRASTRUCTURE & SECURITY',
    icon: Lock,
    items: [
      { name: 'ISO 27001', desc: 'Enterprise-grade information security management' },
      { name: 'End-to-End Encryption', desc: 'Secure data transmission and storage' },
      { name: 'Audit Logs & Access Control', desc: 'Full traceability and role-based permissions' }
    ]
  }
];

export default function Compliance() {
  return (
    <section className="py-24 bg-[#F8FAFC]" id="certifications">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-white border border-[#E2E8F0] rounded-full text-[#64748B] text-[11px] font-bold uppercase tracking-wider mb-6">
            Compliance & Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-8 tracking-tight">
            Built on Global Standards. <br />
            <span className="text-[#2563EB]">Trusted Locally.</span>
          </h2>
          <p className="text-lg text-[#64748B] leading-[1.6]">
            Our platform adheres to international healthcare, security, and data protection standards — ensuring safe, compliant, and reliable care delivery at scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[32px] border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F8FAFC] flex items-center justify-center mb-8 border border-[#E2E8F0] group-hover:bg-[#2563EB] transition-colors">
                <cat.icon className="w-7 h-7 text-[#2563EB] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-sm font-extrabold text-[#94A3B8] tracking-[1.5px] uppercase mb-8">
                {cat.title}
              </h3>
              <div className="space-y-8">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="relative pl-6">
                    <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                    <h4 className="text-lg font-bold text-[#0F172A] mb-1">{item.name}</h4>
                    <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="flex items-center gap-3 px-6 py-4 bg-white border border-[#E2E8F0] rounded-2xl shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-bold text-[#0F172A]">
              Deployed in compliance with national healthcare frameworks across regions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
