import { motion } from 'motion/react';
import { Activity, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#0D9488] to-[#2563EB] rounded-lg" />
          <span className="text-xl font-extrabold tracking-tight text-[#0F172A]">
            CuraStream
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Platform', 'Solutions', 'Data', 'Science', 'Company'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-[#64748B] hover:text-[#0F172A] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="bg-[#0F172A] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#1E293B] transition-all">
            Book Demo
          </button>
        </div>

        <button 
          className="md:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-6 right-6 bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 flex flex-col gap-6 md:hidden"
        >
          {['Platform', 'Solutions', 'Data', 'Science', 'Company'].map((item) => (
            <a key={item} href="#" className="text-lg font-medium text-slate-900">{item}</a>
          ))}
          <hr className="border-slate-100" />
          <button className="w-full py-4 rounded-2xl bg-slate-900 text-white font-semibold">Book Demo</button>
        </motion.div>
      )}
    </div>
  );
}
