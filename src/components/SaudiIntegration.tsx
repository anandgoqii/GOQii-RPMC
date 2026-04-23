import { motion } from 'motion/react';
import { Database, ShieldCheck, FileCheck, Landmark, Network } from 'lucide-react';

export default function SaudiIntegration() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A1128]" id="saudi-infrastructure">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0D9488]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB]/20 border border-[#2563EB]/30 rounded-full text-[#60A5FA] text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm shadow-sm animate-pulse">
                Coming Soon
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              National Systems <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#2563EB]">Integration</span>
            </h2>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[650px] w-full"
          >
            {/* Base "Data Center" layers */}
            <div className="absolute inset-0 bg-[#0F172A] rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
               <img 
                 src="https://appcdn.goqii.com/storeimg/60224_1776937117.png" 
                 alt="Saudi Healthcare Data Center" 
                 className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
               />
               {/* Subtle bottom gradient to ensure floating cards stand out, but leaves the image mostly clear */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Glowing / Floating Elements */}
            <motion.div 
               animate={{ y: [-8, 8, -8] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-12 -left-6 lg:-left-12 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] flex items-center justify-center z-20"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Database className="text-[#0D9488] w-5 h-5" />
              </div>
            </motion.div>

            <motion.div 
               animate={{ y: [8, -8, 8] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute bottom-24 -right-6 lg:-right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] flex items-center justify-center z-20"
            >
               <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <FileCheck className="text-emerald-400 w-5 h-5" />
              </div>
            </motion.div>

            {/* Connecting lines / Data flows */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                d="M10 90 Q 50 50 90 10" 
                fill="none" 
                stroke="#2563EB" 
                strokeWidth="0.5" 
                strokeDasharray="2 2"
              />
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                d="M10 10 C 40 50 60 50 90 90" 
                fill="none" 
                stroke="#0D9488" 
                strokeWidth="0.5" 
                strokeDasharray="3 3"
              />
            </svg>

            {/* Center Status Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#2563EB]/40 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-all duration-300 z-20 cursor-default">
               <ShieldCheck className="w-8 h-8 text-white" />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
