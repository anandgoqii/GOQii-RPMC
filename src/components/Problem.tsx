import { motion } from 'motion/react';

export default function Problem() {
  return (
    <section className="py-24 bg-[#0F172A] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8">
            Healthcare doesn’t fail due to lack of data. <br />
            <span className="text-[#0D9488]">It fails due to lack of engagement.</span>
          </h2>
          
          <p className="text-xl text-slate-300">
            Patients drop off. Conditions worsen. <br className="hidden md:inline" />
            Intervention comes too late.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
