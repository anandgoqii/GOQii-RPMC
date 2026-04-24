import { motion } from 'motion/react';
import { Globe, Cpu, ShieldCheck, Database, Zap, Share2 } from 'lucide-react';

const supportItems = [
  { icon: Share2, text: 'Interoperability with global healthcare systems' },
  { icon: Cpu, text: 'Standardized data exchange (HL7 FHIR)' },
  { icon: Zap, text: 'Secure API-first architecture' },
  { icon: Database, text: 'Multi-region data infrastructure' },
  { icon: ShieldCheck, text: 'Compliance-ready integrations across markets' }
];

const capabilities = [
  { title: 'Cross-border healthcare deployments', desc: 'Validated infrastructure for international scale and connectivity.' },
  { title: 'Scalable cloud infrastructure', desc: 'Enterprise-grade hosting with regional availability zones.' },
  { title: 'Regional compliance adaptability', desc: 'Flexible framework designed to meet local data residency requirements.' },
  { title: 'Enterprise-grade data security', desc: 'Military-grade encryption and rigorous access controls globally.' }
];

export default function GlobalIntegration() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden" id="integration">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-600 text-[11px] font-bold uppercase tracking-wider mb-8">
              Global Systems Integration
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0F172A] mb-8 tracking-tight leading-[1.1]">
              Global Systems <br />
              <span className="text-blue-600">Integration</span>
            </h2>
            <p className="text-xl text-[#64748B] leading-relaxed mb-12">
              Built to seamlessly integrate with healthcare systems worldwide — enabling secure, scalable, and connected care delivery across regions.
            </p>

            <div className="inline-flex flex-col gap-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-50 border border-blue-100 rounded-2xl w-fit">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-sm font-bold text-blue-700 uppercase tracking-widest">Coming Soon</span>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img 
                src="https://appcdn.goqii.com/storeimg/64831_1777033257.png" 
                alt="Global Systems Integration" 
                className="w-full h-auto rounded-[48px] shadow-2xl border border-slate-100"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Background Decor */}
            <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
