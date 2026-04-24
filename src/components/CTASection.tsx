import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-32 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-[48px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/20 blur-[80px] rounded-full" />
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight relative z-10">
            Start Delivering Proactive Care Today
          </h2>
          <p className="text-slate-400 mb-10 relative z-10 text-lg">
            Transform how you monitor, manage, and improve patient outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <motion.button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal'))}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#2563EB] px-10 py-4 rounded-full font-bold shadow-xl flex items-center gap-2 group transition-all"
            >
              Book Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
