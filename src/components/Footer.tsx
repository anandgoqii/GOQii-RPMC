import { Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 bg-white border-t border-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-1">
           <div className="flex items-center gap-3 mb-6">
            <img 
              src="https://demorpmcv.goqii.com/assets/goqii-footer-logo-BoIhmnw2.png" 
              alt="GOQii Logo" 
              className="h-8 object-contain opacity-80"
            />
            <span className="text-xl font-extrabold tracking-tight text-[#0F172A]">
              RPM
            </span>
          </div>
          <p className="text-[#64748B] text-sm leading-[1.6] mb-8">
            Revolutionizing remote care with continuous monitoring and AI-driven insights for clinical perfection.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-[#0F172A] mb-6 uppercase tracking-[1px] text-[11px]">Compliance</h4>
          <ul className="space-y-4">
            {['HIPAA Adherence', 'GDPR Privacy', 'PDPL Framework', 'ISO 27001'].map(i => (
              <li key={i}><a href="#" className="text-[#64748B] text-sm hover:text-[#0F172A]">{i}</a></li>
            ))}
          </ul>
        </div>

        <div>
           <h4 className="font-bold text-[#0F172A] mb-6 uppercase tracking-[1px] text-[11px]">Security</h4>
           <ul className="space-y-4">
            {['Security Overview', 'Data Governance', 'Audit Logs', 'Encryption Standard'].map(i => (
              <li key={i}><a href="#" className="text-[#64748B] text-sm hover:text-[#0F172A]">{i}</a></li>
            ))}
          </ul>
        </div>

        <div>
           <h4 className="font-bold text-[#0F172A] mb-6 uppercase tracking-[1px] text-[11px]">Partnerships & Contact</h4>
           <ul className="space-y-4">
            {['API Integration', 'Implementation Partners', 'Contact Sales', 'Support Portal'].map(i => (
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
