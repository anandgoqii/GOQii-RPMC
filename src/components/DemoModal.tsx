import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-demo-modal', handleOpen);
    return () => window.removeEventListener('open-demo-modal', handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#0F172A]/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-[#0F172A] mb-8">Request a Demo</h3>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Dr. Ahmed Al-Rashid"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="ahmed@hospital.sa"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Facility Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="King Faisal Hospital"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+966 5X XXX XXXX"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                  Facility OID
                </label>
                <input
                  type="text"
                  placeholder="2.16.840.1.113883..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                  Integration Priority
                </label>
                <div className="relative">
                  <select 
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-sm appearance-none bg-transparent"
                  >
                    <option value="" disabled>Select priority</option>
                    <option value="high">High - Immediate</option>
                    <option value="medium">Medium - Next 3 months</option>
                    <option value="low">Low - Exploring options</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your monitoring needs..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0b1c39] hover:bg-slate-800 text-white font-semibold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-colors"
              >
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
