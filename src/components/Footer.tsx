import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-20 bg-white border-t border-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 md:gap-24">
        {/* LEFT: Logo & Description */}
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="https://appcdn.goqii.com/storeimg/82417_1776936691.png" 
              alt="GOQii Logo" 
              className="h-8 object-contain opacity-80"
            />
          </div>
          <p className="text-[#64748B] text-sm leading-[1.6]">
            Revolutionizing remote care with continuous monitoring and AI-driven insights for clinical perfection.
          </p>
        </div>

        {/* MIDDLE: Product */}
        <div>
          <h4 className="font-bold text-[#0F172A] mb-6 uppercase tracking-[1px] text-[11px]">Product</h4>
          <ul className="space-y-4">
            <li><Link to="/#platform" className="text-[#64748B] text-sm hover:text-[#0F172A] transition-colors">Platform</Link></li>
            <li><Link to="/#kit" className="text-[#64748B] text-sm hover:text-[#0F172A] transition-colors">RPMC Kit</Link></li>
            <li><Link to="/#saudi-infrastructure" className="text-[#64748B] text-sm hover:text-[#0F172A] transition-colors">Infrastructure</Link></li>
            <li><Link to="/#certifications" className="text-[#64748B] text-sm hover:text-[#0F172A] transition-colors">Compliance</Link></li>
          </ul>
        </div>

        {/* RIGHT: Company */}
        <div>
           <h4 className="font-bold text-[#0F172A] mb-6 uppercase tracking-[1px] text-[11px]">Company</h4>
           <ul className="space-y-4">
            <li><Link to="/about" className="text-[#64748B] text-sm hover:text-[#0F172A] transition-colors">About</Link></li>
            <li><Link to="/contact-sales" className="text-[#64748B] text-sm hover:text-[#0F172A] transition-colors">Contact</Link></li>
            <li><button onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal'))} className="text-[#64748B] text-sm hover:text-[#0F172A] transition-colors">Book Demo</button></li>
          </ul>
        </div>
      </div>
      
      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-[#F1F5F9] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#94A3B8] text-[12px]">© 2026 GOQii HealthEngage RPMC</p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-[#94A3B8] text-[12px] hover:text-[#0F172A] transition-colors">Privacy Policy</a>
          <span className="text-[#E2E8F0]">|</span>
          <a href="#" className="text-[#94A3B8] text-[12px] hover:text-[#0F172A] transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
