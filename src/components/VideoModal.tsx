import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function VideoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-video-modal', handleOpen);
    return () => window.removeEventListener('open-video-modal', handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#0F172A]/90 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl relative aspect-video"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white hover:bg-white hover:text-black rounded-full transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <video 
              autoPlay 
              controls 
              className="w-full h-full object-contain"
              onEnded={() => setIsOpen(false)}
            >
              <source src="https://appcdn.goqii.com/storeimg/8789_1776938216.56" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
