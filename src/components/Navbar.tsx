import { motion } from 'motion/react';
import { Activity, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

import { Link } from 'react-router-dom';

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
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3"
        >
          <img 
            src="https://appcdn.goqii.com/storeimg/82417_1776936691.png" 
            alt="GOQii Logo" 
            className="h-8 object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {['Platform', 'RPMC Kit', 'Intelligence', 'Solutions', 'Outcomes', 'About', 'Infrastructure', 'Compliance'].map((item) => (
            <Link
              key={item}
              to={
                item === 'About' ? '/about' : 
                item === 'Infrastructure' ? '/#saudi-infrastructure' : 
                item === 'RPMC Kit' ? '/#kit' :
                item === 'Compliance' ? '/#certifications' :
                `/#${item.toLowerCase().replace(/\s+/g, '-')}`
              }
              className="text-sm font-semibold text-[#64748B] hover:text-[#0F172A] transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal'))}
            className="bg-[#0F172A] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#1E293B] transition-all"
          >
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
          {['Platform', 'RPMC Kit', 'Intelligence', 'Solutions', 'Outcomes', 'About', 'Infrastructure', 'Compliance'].map((item) => (
            <Link 
              key={item} 
              to={
                item === 'About' ? '/about' : 
                item === 'Infrastructure' ? '/#saudi-infrastructure' : 
                item === 'RPMC Kit' ? '/#kit' :
                item === 'Compliance' ? '/#certifications' :
                `/#${item.toLowerCase().replace(/\s+/g, '-')}`
              }
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-900"
            >
              {item}
            </Link>
          ))}
          <hr className="border-slate-100" />
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent('open-demo-modal'));
            }}
            className="w-full py-4 rounded-2xl bg-slate-900 text-white font-semibold"
          >
            Book Demo
          </button>
        </motion.div>
      )}
    </div>
  );
}
