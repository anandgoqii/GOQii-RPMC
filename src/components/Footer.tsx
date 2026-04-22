import { Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 bg-white border-t border-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-1">
           <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-gradient-to-br from-[#0D9488] to-[#2563EB] rounded" />
            <span className="text-xl font-extrabold tracking-tight text-[#0F172A]">
              CuraStream
            </span>
          </div>
          <p className="text-[#64748B] text-sm leading-[1.6] mb-8">
            Revolutionizing remote care with continuous monitoring and AI-driven insights for clinical perfection.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-[#0F172A] mb-6 uppercase tracking-[1px] text-[11px]">Product</h4>
          <ul className="space-y-4">
            {['RPM Essentials', 'CCM Integration', 'AI Risk Detection', 'Device Catalog'].map(i => (
              <li key={i}><a href="#" className="text-[#64748B] text-sm hover:text-[#0F172A]">{i}</a></li>
            ))}
          </ul>
        </div>

        <div>
           <h4 className="font-bold text-[#0F172A] mb-6 uppercase tracking-[1px] text-[11px]">Resources</h4>
           <ul className="space-y-4">
            {['Case Studies', 'Clinical Evidence', 'CPT Code Guide', 'Safety Standards'].map(i => (
              <li key={i}><a href="#" className="text-[#64748B] text-sm hover:text-[#0F172A]">{i}</a></li>
            ))}
          </ul>
        </div>

        <div>
           <h4 className="font-bold text-[#0F172A] mb-6 uppercase tracking-[1px] text-[11px]">Compliance</h4>
           <ul className="space-y-4">
            {['HIPAA Privacy', 'Terms of Service', 'Security Overview', 'Cookie Policy'].map(i => (
              <li key={i}><a href="#" className="text-[#64748B] text-sm hover:text-[#0F172A]">{i}</a></li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-[#F1F5F9] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#94A3B8] text-[12px]">© 2024 CuraStream Health Platforms Inc. All rights reserved.</p>
        <p className="text-[#94A3B8] text-[12px] flex items-center gap-2">
           <span className="w-2 h-2 rounded-full bg-[#22C55E]" /> System Status: Optimal
        </p>
      </div>
    </footer>
  );
}
