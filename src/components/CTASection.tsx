import { motion } from 'motion/react';

export default function CTASection() {
  return (
    <section className="relative w-full h-screen min-h-[500px] bg-[#f7f9fc]">
      {/* 
        Using absolute positioning at 50% as requested, combined 
        with transform translate to perfectly center it horizontally and vertically 
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
            Start delivering proactive care today
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Book a demo to see how RPMC works in real-world scenarios.
          </p>

          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal'))}
            className="bg-[#0b1c39] text-white px-8 py-3.5 rounded-full font-medium hover:bg-slate-800 transition-colors shadow-sm"
          >
            Book Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
