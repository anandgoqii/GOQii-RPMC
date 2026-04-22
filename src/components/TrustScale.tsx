import { motion } from 'motion/react';
import { Globe2, Building2, ShieldCheck } from 'lucide-react';

export default function TrustScale() {
  return (
    <section className="py-20 bg-white border-t border-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mb-4">Trusted at Scale</h2>
          <p className="text-lg text-[#64748B]">Proven deployments across the world's most demanding healthcare systems.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-[24px] bg-[#F8FAFC] border border-[#E2E8F0]"
          >
            <Globe2 className="w-8 h-8 mx-auto text-[#2563EB] mb-4" />
            <div className="text-4xl font-extrabold text-[#0F172A] mb-2">5M+</div>
            <div className="text-sm font-bold text-[#64748B] uppercase tracking-wide">Users Engaged Globally</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-[24px] bg-[#F8FAFC] border border-[#E2E8F0]"
          >
            <Building2 className="w-8 h-8 mx-auto text-[#0D9488] mb-4" />
            <div className="text-4xl font-extrabold text-[#0F172A] mb-2">300+</div>
            <div className="text-sm font-bold text-[#64748B] uppercase tracking-wide">Enterprise Partners</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-[24px] bg-[#F8FAFC] border border-[#E2E8F0]"
          >
            <ShieldCheck className="w-8 h-8 mx-auto text-[#8B5CF6] mb-4" />
            <div className="text-4xl font-extrabold text-[#0F172A] mb-2">100%</div>
            <div className="text-sm font-bold text-[#64748B] uppercase tracking-wide">Compliance Record</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
