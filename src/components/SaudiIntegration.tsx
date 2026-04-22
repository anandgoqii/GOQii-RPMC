import { motion } from 'motion/react';
import { Database, ShieldCheck, FileCheck, Landmark, Network } from 'lucide-react';

export default function SaudiIntegration() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A1128]" id="compliance">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white text-[12px] font-bold tracking-wider mb-6 backdrop-blur-sm shadow-sm transition-all hover:bg-white/10">
              <span className="text-base leading-none">🇸🇦</span> Built for Saudi Arabia
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              National Systems <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#2563EB]">Integration</span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-12 leading-[1.6]">
              100% compliant with Saudi national standards. Designed to integrate seamlessly with your existing healthcare ecosystem — not replace it.
            </p>

            <div className="space-y-4 mb-12">
              {/* Feature 1 */}
              <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0D9488]/20 to-[#2563EB]/20 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Network className="w-6 h-6 text-[#0D9488]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">NPHIES Integration</h3>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0D9488] shrink-0" /> Native clinical data exchange with Saudi insurers</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0D9488] shrink-0" /> Auto-maps device data to ICD-10-AM & SBS/ACHI codes</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0D9488] shrink-0" /> HL7 FHIR compliant</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB]/20 to-purple-500/20 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Landmark className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">ZATCA (Fatoora) Ready</h3>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" /> VAT-compliant (15%) billing workflows</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" /> E-invoicing & Zakat compliance built-in</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" /> Seamless integration with finance systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-[#0D9488]/20 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">KSA Data Governance</h3>
                    <ul className="space-y-2 text-sm text-slate-400">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" /> PDPL compliance</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" /> Local data residency</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" /> Role-based access control & audit logs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {['HL7 FHIR', 'API-First', 'HIS/EHR Ready', 'White-Label'].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
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
                 src="https://demorpmcv.goqii.com/assets/rpmc-ksa-compliance-CsHwzQKt.jpg" 
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
               className="absolute top-12 -left-6 lg:-left-12 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] flex items-center gap-4 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Database className="text-[#0D9488] w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-semibold mb-0.5">Local Hosting</div>
                <div className="text-sm text-white font-bold tracking-wide">Riyadh Data Center</div>
              </div>
            </motion.div>

            <motion.div 
               animate={{ y: [8, -8, 8] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute bottom-24 -right-6 lg:-right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] flex items-center gap-4 z-20"
            >
               <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <FileCheck className="text-emerald-400 w-5 h-5" />
              </div>
               <div>
                <div className="text-xs text-emerald-400/80 font-semibold mb-0.5">Verified</div>
                <div className="text-sm text-white font-bold tracking-wide">PDPL Protocol Active</div>
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
