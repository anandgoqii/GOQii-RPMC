import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Hospital, ShieldCheck, Briefcase, FlaskConical } from 'lucide-react';

const audiences = [
  {
    id: 'hospitals',
    label: 'Hospitals',
    icon: Hospital,
    content: {
      headline: "Extend care beyond discharge.",
      text: "Maintain a clinical connection with patients after they leave the hospital to monitor recovery and intervene before readmission is necessary.",
      features: ["Readmission prevention", "Continuous vitals monitoring", "Seamless EMR integration"]
    }
  },
  {
    id: 'insurance',
    label: 'Insurance',
    icon: ShieldCheck,
    content: {
      headline: "Reduce claims and improve outcomes.",
      text: "Utilize real-time population data to identify high-risk members and proactively manage their condition before costly emergency encounters occur.",
      features: ["Actuarial data depth", "High-risk member identification", "Cost-saving metrics"]
    }
  },
  {
    id: 'employers',
    label: 'Employers',
    icon: Briefcase,
    content: {
      headline: "Drive workforce health & productivity.",
      text: "Keep your employees healthy by proactively managing chronic diseases and preventing acute events that lead to absenteeism.",
      features: ["Employee health analytics", "Engagement optimization", "Chronic disease management"]
    }
  },
  {
    id: 'governments',
    label: 'Governments',
    icon: FlaskConical,
    content: {
      headline: "Population health at national scale.",
      text: "Deploy large-scale health initiatives that reduce the national burden of chronic disease through standardized, technology-enabled care loops.",
      features: ["National health infrastructure", "Scalable data architecture", "Standardized clinical pathways"]
    }
  }
];

export default function Audience() {
  const [activeTab, setActiveTab] = useState(audiences[0].id);

  return (
    <section className="py-24 bg-[#F8FAFC]" id="solutions">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-4 tracking-tight">WHO IT'S FOR</h2>
          <p className="text-[#64748B]">Hospitals | Insurance | Employers | Governments</p>
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
                    src={
                      tab.id === 'employers' ? 'https://appcdn.goqii.com/storeimg/89672_1732853903.png' : 
                      tab.id === 'hospitals' ? 'https://appcdn.goqii.com/storeimg/61951_1733724534.png' : 
                      tab.id === 'governments' ? 'https://storage.googleapis.com/ksabupatest/2026/04/03/4ay4z/8swa84b8y1.webp' : 
                      tab.id === 'insurance' ? 'https://appcdn.goqii.com/storeimg/48429_1733724619.jpg' :
                      'https://images.unsplash.com/photo-1582213726892-25b82855b819?auto=format&fit=crop&q=80&w=800'
                    }
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
