import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488] to-[#2563EB] -z-10" />
      
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full text-white text-[11px] font-bold uppercase tracking-[2px] mb-8">
            <Sparkles className="w-4 h-4" /> Ready for what's next?
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-[-1px]">
            Deliver Proactive Care <br />
            <span className="opacity-80 font-normal">at Pulse Point Precision.</span>
          </h2>
          
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-[1.6]">
            Join the 500+ healthcare organizations setting the new gold standard for remote patient monitoring.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0F172A] text-white px-8 py-4 rounded-full font-bold text-md shadow-xl hover:scale-105 transition-all">
              Book a Strategy Call
            </button>
            <button className="bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-md hover:bg-white/20 transition-all flex items-center justify-center gap-2">
              Explore Our Data <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
