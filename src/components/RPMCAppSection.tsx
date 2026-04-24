import { motion } from 'motion/react';
import { Smartphone, Activity, Bell, Video, Zap, ArrowRight, Apple, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RPMCAppSection() {
  return (
    <section className="py-24 px-6 bg-slate-50 overflow-hidden" id="rpmc-app">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Visuals */}
          <div className="relative order-2 lg:order-1">
            <div className="relative flex justify-center items-center h-[600px]">
              {/* Phone Mockup 1: Vitals */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotate: -5 }}
                whileInView={{ opacity: 1, x: 0, rotate: -5 }}
                viewport={{ once: true }}
                className="absolute left-0 z-10 w-[240px] h-[480px] bg-slate-900 rounded-[40px] border-[6px] border-slate-800 shadow-2xl overflow-hidden hidden md:block"
              >
                <img 
                  src="https://i.postimg.cc/Cx8mKw4t/mobile-2.jpg" 
                  alt="Connected Patient App Left View" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Phone Mockup 2: Dashboard (Main) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-20 w-[280px] h-[560px] bg-slate-900 rounded-[50px] border-[8px] border-slate-800 shadow-2xl shadow-blue-500/10 overflow-hidden"
              >
                <img 
                  src="https://i.postimg.cc/3xGnw3ZB/mobile-1.jpg" 
                  alt="Connected Patient App" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Phone Mockup 3: Alerts */}
              <motion.div
                initial={{ opacity: 0, x: 50, rotate: 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 5 }}
                viewport={{ once: true }}
                className="absolute right-0 z-10 w-[240px] h-[480px] bg-slate-900 rounded-[40px] border-[6px] border-slate-800 shadow-2xl overflow-hidden hidden md:block"
              >
                <img 
                  src="https://i.postimg.cc/Cx8mKw4Q/mobile-3.jpg" 
                  alt="Connected Patient App Right View" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-600 text-[11px] font-bold uppercase tracking-wider mb-8">
                The RPMC App
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-[#0F172A] mb-6 tracking-tight leading-[1.1]">
                Care, Connected to <br /> the Patient
              </h2>
              <p className="text-xl text-[#64748B] leading-relaxed mb-12">
                A simple, intuitive mobile experience that keeps patients connected, informed, and engaged — anytime, anywhere.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                {[
                  { icon: Activity, label: 'Real-time health tracking' },
                  { icon: Bell, label: 'Alerts & smart reminders' },
                  { icon: Video, label: 'Telehealth access' },
                  { icon: Zap, label: 'Continuous engagement' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-[#0F172A] text-sm">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm mb-12">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Experience it seamlessly</h4>
                <div className="flex flex-wrap items-center gap-3">
                   {['Devices', 'App', 'AI', 'Care Team', 'Action'].map((step, i, arr) => (
                     <div key={i} className="flex items-center gap-3">
                        <span className="text-sm font-bold text-[#0F172A]">{step}</span>
                        {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-slate-200" />}
                     </div>
                   ))}
                </div>
                <p className="mt-6 text-sm text-[#64748B] italic">
                  The app acts as the central hub between patients and care providers.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <Link 
                  to="/rpmc-app"
                  className="px-8 py-4 bg-[#2563EB] text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
                >
                  Explore the App
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex gap-4">
                  <Apple className="w-6 h-6 text-slate-300" />
                  <PlayCircle className="w-6 h-6 text-slate-300" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
