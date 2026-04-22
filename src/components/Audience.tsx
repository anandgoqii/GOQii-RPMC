import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Hospital, Building2, Briefcase, HeartHandshake } from 'lucide-react';

const audiences = [
  {
    id: 'hospitals',
    label: 'Hospitals',
    icon: Hospital,
    content: {
      headline: "Scalable Post-Acute Care Management.",
      text: "Extend your clinical reach into patients' homes without increasing overhead. Reduce bed blocking and ensure continuous compliance monitoring.",
      features: ["Readmission prevention", "Bed turnover optimization", "Seamless EMR integration"]
    }
  },
  {
    id: 'clinics',
    label: 'Clinics',
    icon: Building2,
    content: {
      headline: "Unlock New Recurring Revenue Streams.",
      text: "Automated billing support for CPT codes 99453, 99454, 99457, and 99458. Turn remote care into a profitable center for your practice.",
      features: ["Automated billing exports", "Practice growth insights", "Simplified clinician workflows"]
    }
  },
  {
    id: 'employers',
    label: 'Employers',
    icon: Briefcase,
    content: {
      headline: "Healthier Workforce, Lower Premiums.",
      text: "Proactively manage chronic diseases within your employee population to reduce absenteeism and long-term healthcare spend.",
      features: ["Employee health analytics", "Engagement optimization", "Chronic disease management"]
    }
  },
  {
    id: 'insurance',
    label: 'Insurers',
    icon: HeartHandshake,
    content: {
      headline: "Risk Stratification at Scale.",
      text: "Utilize real-time population data to identify high-risk members and intervene before costly emergency encounters occur.",
      features: ["Actuarial data depth", "Intervention efficiency", "Cost-saving metrics"]
    }
  }
];

export default function Audience() {
  const [activeTab, setActiveTab] = useState(audiences[0].id);

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-4 tracking-tight">Scalable Solutions for All.</h2>
          <p className="text-[#64748B]">Tailored monitoring ecosystem for every healthcare stakeholder.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {audiences.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-full font-bold transition-all ${
                activeTab === tab.id 
                ? 'bg-[#0F172A] text-white shadow-xl' 
                : 'text-[#64748B] hover:bg-white hover:text-[#0F172A]'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-[24px] p-8 md:p-16 border border-[#E2E8F0] shadow-sm min-h-[400px] flex items-center">
          <AnimatePresence mode="wait">
            {audiences.map((tab) => tab.id === activeTab && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid lg:grid-cols-2 gap-16 items-center w-full"
              >
                <div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-6 leading-tight tracking-tight">
                    {tab.content.headline}
                  </h3>
                  <p className="text-lg text-[#64748B] mb-10 leading-[1.6]">
                    {tab.content.text}
                  </p>
                  <div className="space-y-4">
                    {tab.content.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                        <span className="font-bold text-[#0F172A] text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#F8FAFC] border border-[#E2E8F0]">
                  <img 
                    src={`https://images.unsplash.com/photo-${tab.id === 'hospitals' ? '1586773860418-d3b97978c650' : '1582213726892-25b82855b819'}?auto=format&fit=crop&q=80&w=800`}
                    className="w-full h-full object-cover"
                    alt={tab.label}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
