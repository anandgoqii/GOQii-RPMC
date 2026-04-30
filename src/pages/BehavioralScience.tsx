import { motion } from 'motion/react';
import { BrainCircuit, Target, Zap, Heart, MessageSquare, LineChart, Layers, Users, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const pillars = [
  {
    title: 'Trigger → Action → Reward',
    icon: Zap,
    desc: 'We design interventions that follow a simple loop: Timely alerts or Care Pathways, small achievable health steps, and positive reinforcement.'
  },
  {
    title: 'Personalized Care Pathways',
    icon: MessageSquare,
    desc: 'Every patient is different. We tailor the timing, messaging, and intensity of interventions based on behavior patterns and clinical vitals.'
  },
  {
    title: 'Micro-Interventions',
    icon: Target,
    desc: 'Instead of overwhelming patients, we focus on small actionable steps and real-time corrections leading to higher adherence.'
  },
  {
    title: 'Continuous Feedback Loops',
    icon: LineChart,
    desc: 'Patients see progress instantly through health score improvements and trend tracking, reinforcing positive behavior.'
  }
];

export default function BehavioralScience() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-slate-50 to-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -mr-64 -mt-64" />
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-600 text-[11px] font-bold uppercase tracking-wider mb-8"
              >
                Behavioral Science
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-extrabold text-[#0F172A] mb-8 tracking-tight leading-[1.05]"
              >
                Turning Data into CLINICAL INTERVENTION. <br />
                <span className="text-blue-600">Intervention into Outcomes.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-[#64748B] leading-relaxed mb-12"
              >
                At GOQii HealthEngage RPMC, we don’t just monitor health — we influence behavior. Our platform combines real-time clinical vitals, Predictive insights, and behavioral science principles to drive sustained lifestyle change.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Why Behavior Matters */}
        <section className="py-24 px-6 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-extrabold text-[#0F172A] mb-8 tracking-tight">Why Behavior Matters</h2>
                <p className="text-lg text-[#64748B] leading-relaxed mb-8">
                  Most health conditions are not caused by lack of data — they are caused by lack of consistent CLINICAL INTERVENTION. This is where traditional monitoring fails.
                </p>
                <div className="space-y-4">
                  {[
                    'Patients forget',
                    'Motivation drops',
                    'Habits break',
                    'Adherence declines'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span className="font-semibold text-[#0F172A]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-900 rounded-[40px] p-12 text-white relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full" />
                <BrainCircuit className="w-12 h-12 text-blue-400 mb-8" />
                <h3 className="text-2xl font-bold mb-6">The Science of Engagement</h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  We apply proven behavioral science frameworks to ensure patients stay engaged, motivated, and on track with their treatment plans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-extrabold text-[#0F172A] mb-6 tracking-tight">A Science-Driven Engagement Model</h2>
              <p className="text-lg text-[#64748B]">Our approach focuses on small wins that lead to long-term health transformation.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <pillar.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0F172A] mb-4 tracking-tight leading-tight">{pillar.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Human + EWS Engine */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#0F172A] rounded-[48px] p-12 md:p-20 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -mr-64 -mt-64" />
              <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight">
                    Technology Guides. <br />
                    <span className="text-blue-400">Humans Motivate.</span>
                  </h2>
                  <p className="text-xl text-slate-400 leading-relaxed mb-12">
                    Behavior change requires more than algorithms. We combine predictive intelligence with human empathy to drive results.
                  </p>
                  <ul className="space-y-6">
                    {[
                      { title: 'Predictive Intelligence', desc: 'Identifies when intervention is needed before it becomes critical' },
                      { title: 'Human Coaches', desc: 'Care teams provide empathy, motivation, and practical support' },
                      { title: 'Balanced Care', desc: 'Patients receive both precise data and meaningful human interaction' }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="pt-1">
                          <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-1">{item.title}</h4>
                          <p className="text-slate-400 text-sm">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full flex items-center justify-center p-12 border border-white/5">
                    <div className="aspect-square w-full bg-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                       <Users className="w-24 h-24 text-blue-400" />
                    </div>
                  </div>
                  {/* Decorative orbital elements */}
                  <div className="absolute top-0 left-0 w-full h-full animate-spin-slow">
                    <div className="absolute top-1/4 left-0 w-12 h-12 bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center">
                      <BrainCircuit className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Science */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#0F172A] mb-4 tracking-tight">Built into the Platform</h2>
              <p className="text-lg text-[#64748B]">Behavioral intelligence is not an add-on. It is core to our mission.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Smart Alerts', 'Engagement Engine', 'Care Workflows', 'Patient Portal'].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 text-center font-bold text-[#0F172A] tracking-tight">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Theme */}
        <section className="py-32 px-6 text-center border-t border-slate-100">
           <div className="max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-8 leading-tight">
               Because Better Data Alone <br className="hidden md:block" /> Doesn’t Change Lives.
             </h2>
             <p className="text-6xl md:text-8xl font-black text-blue-600 mb-12 tracking-tighter">Behavior does.</p>
             <p className="text-xl text-[#64748B] mb-16">
               And we design systems that make the right behavior easier, consistent, and sustainable.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button 
                 onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal'))}
                 className="px-10 py-4 bg-[#2563EB] text-white rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
               >
                 Book Demo
                 <ArrowRight className="w-5 h-5" />
               </button>
               <button 
                 onClick={() => window.location.href = '/#platform'}
                 className="px-10 py-4 border-2 border-[#0F172A] text-[#0F172A] rounded-full font-bold text-lg hover:bg-[#0F172A] hover:text-white transition-all"
               >
                 Explore Platform
               </button>
             </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
