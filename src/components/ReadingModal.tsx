import { motion, AnimatePresence } from 'motion/react';
import { X, Smartphone, Apple, PlayCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ReadingModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-reading-modal', handleOpen);
    return () => window.removeEventListener('open-reading-modal', handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#0F172A]/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[40px] shadow-2xl overflow-hidden"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#64748B] hover:bg-slate-200 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-12 text-center">
              <div className="w-20 h-20 rounded-3xl bg-blue-50 flex items-center justify-center mx-auto mb-8">
                <Smartphone className="w-10 h-10 text-blue-600" />
              </div>

              <h2 className="text-3xl font-extrabold text-[#0F172A] mb-4 tracking-tight">Sync Your Device</h2>
              <p className="text-[#64748B] text-lg leading-relaxed mb-10">
                To take your daily health reading, please connect your devices via the GOQii HealthEngage mobile app.
              </p>

              <div className="space-y-4">
                <a 
                  href="https://apps.apple.com/app/goqii" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 w-full py-4 bg-[#0F172A] text-white rounded-2xl font-bold hover:shadow-lg transition-all group"
                >
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-wider leading-none opacity-60">Download on the</p>
                    <p className="text-lg leading-none mt-1">App Store</p>
                  </div>
                </a>

                <a 
                  href="https://play.google.com/store/apps/details?id=com.goqii" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 w-full py-4 border-2 border-[#E2E8F0] text-[#0F172A] rounded-2xl font-bold hover:border-blue-200 hover:bg-blue-50 transition-all"
                >
                  <PlayCircle className="w-6 h-6 text-blue-600" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-wider leading-none opacity-60">Get it on</p>
                    <p className="text-lg leading-none mt-1">Google Play</p>
                  </div>
                </a>
              </div>

              <p className="mt-8 text-xs text-[#94A3B8] font-medium uppercase tracking-widest">
                Seamless Bluetooth & Cloud Sync
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
