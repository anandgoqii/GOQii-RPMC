import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Activity, ShieldCheck, Zap, BarChart3, Users, Globe2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-6 max-w-7xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-[#F1F5F9] border border-[#E2E8F0] rounded-full text-[#64748B] text-[11px] font-bold uppercase tracking-wider mb-6">
              About GOQii HEALTHENGAGE RPMC
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#0F172A] mb-8 leading-[1.1] tracking-tight">
              Reimagining Healthcare <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#2563EB]">Beyond the Hospital</span>
            </h1>
            <p className="text-xl text-[#64748B] leading-[1.6] max-w-2xl mx-auto">
              We are building a future where care doesn’t stop at discharge — it continues, intelligently and seamlessly, in everyday life.
            </p>
          </motion.div>
        </section>

        {/* Vision & Mission */}
        <section className="px-6 py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-white rounded-[32px] shadow-sm border border-[#E2E8F0]"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Our Vision</h2>
              <p className="text-[#64748B] text-lg leading-relaxed">
                To shift healthcare from reactive treatment to continuous prevention — improving outcomes, reducing risk, and enabling healthier lives.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-white rounded-[32px] shadow-sm border border-[#E2E8F0]"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#0D9488]" />
              </div>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Our Mission</h2>
              <p className="text-[#64748B] text-lg leading-relaxed">
                We combine connected devices, AI-driven insights, and human-led interventions to deliver continuous, proactive healthcare at scale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What We Do */}
        <section className="px-6 py-32 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0F172A] mb-6 tracking-tight">What We Do</h2>
            <p className="text-lg text-[#64748B]">A complete Remote Patient Monitoring ecosystem.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Connected medical devices', icon: Activity },
              { title: 'Real-time health tracking', icon: BarChart3 },
              { title: 'AI-powered risk detection', icon: Zap },
              { title: 'Clinical care dashboards', icon: ShieldCheck },
              { title: 'Engagement & Intervention', icon: Users },
              { title: 'Global Standards', icon: Globe2 }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#2563EB] transition-all group shadow-sm hover:shadow-md">
                <item.icon className="w-8 h-8 text-[#2563EB] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-[#0F172A]">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Why it Matters */}
        <section className="px-6 py-32 bg-[#0F172A] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/20 blur-[100px] rounded-full" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-extrabold text-white mb-8 tracking-tight">Why It Matters</h2>
                <div className="space-y-6">
                  {[
                    "Late intervention often leads to emergency scenarios.",
                    "Poor patient adherence remains a major hurdle.",
                    "Fragmented care outside hospitals creates gaps in treatment."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2.5 shrink-0" />
                      <p className="text-slate-300 text-lg">{text}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-10 text-white font-bold text-xl leading-relaxed">
                  We solve this by enabling continuous monitoring and real-time intervention — reducing complications and improving outcomes.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="text-4xl font-extrabold text-white block mb-2">-40%</span>
                  <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Readmissions</span>
                </div>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="text-4xl font-extrabold text-white block mb-2">+82%</span>
                  <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Adherence</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="px-6 py-32 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="bg-[#F8FAFC] rounded-[32px] p-12 border border-[#E2E8F0]">
              <h2 className="text-3xl font-extrabold text-[#0F172A] mb-8">Technology + <br/>Human Care</h2>
              <div className="space-y-8">
                {[
                  { l: "AI Risk Signals", d: "Early identification of deterioration signs." },
                  { l: "Care Team Alerts", d: "Real-time notifications sent to clinicians." },
                  { l: "Timely Interventions", d: "Direct support when it's needed most." },
                  { l: "Behavior Change", d: "Continuous guidance for healthier life habits." }
                ].map((item, i) => (
                   <div key={i} className="flex gap-6">
                    <div className="text-sm font-bold text-[#2563EB] shrink-0 w-8">0{i+1}</div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] mb-1">{item.l}</h4>
                      <p className="text-[#64748B] text-sm">{item.d}</p>
                    </div>
                   </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-extrabold text-[#0F172A] mb-8 tracking-tight">Closed-Loop Care</h2>
              <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
                We believe the future of healthcare is continuous, personalized, and preventive. And we’re building the infrastructure to make it a reality.
              </p>
              <div className="flex flex-wrap gap-3">
                {['HIPAA', 'GDPR', 'PDPL', 'HL7 FHIR'].map(tag => (
                   <span key={tag} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-bold text-slate-600">
                    {tag}
                   </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-[40px] p-16 text-white overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/30 blur-[80px] rounded-full" />
            <h2 className="text-4xl font-extrabold text-white mb-6 relative z-10">Let’s Build the Future of Care Together</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal'))}
                className="bg-[#2563EB] hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg"
              >
                Book a Demo
              </button>
              <Link 
                to="/contact-sales"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-10 py-4 rounded-full font-bold border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
