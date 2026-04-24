import { motion } from 'motion/react';
import { Smartphone, Activity, Bell, Users, Video, Zap, Cloud, ArrowRight, Apple, PlayCircle, QrCode } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const features = [
  { icon: Activity, title: 'Real-time Vitals', desc: 'View live readings from your connected devices instantly.' },
  { icon: Bell, title: 'Smart Alerts', desc: 'Receive critical health notifications and medication reminders.' },
  { icon: Zap, title: 'Trend Tracking', desc: 'Monitor your health progress over days, weeks, and months.' },
  { icon: Video, title: 'Telehealth', desc: 'Connect with your doctor via high-quality video consultations.' },
  { icon: Users, title: 'Care Team Sync', desc: 'Always stay connected with your dedicated care providers.' }
];

const designBenefits = [
  { title: 'Intuitive Interface', desc: 'Designed for simplicity, ensuring ease of use for all ages.' },
  { title: 'Zero Hassle Setup', desc: 'Guided pairing process for all your health devices.' },
  { title: 'Always Connected', desc: 'Continuous data sync ensures your care team is always informed.' },
  { title: 'Anywhere Access', desc: 'Your health records and care team are always in your pocket.' }
];

export default function RPMCApp() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-slate-50 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -ml-32 -mt-32" />
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-600 text-[11px] font-bold uppercase tracking-wider mb-8">
                  The RPMC Mobile Experience
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold text-[#0F172A] mb-8 tracking-tight leading-[1.05]">
                  The RPMC App <br />
                  <span className="text-blue-600 italic">Care, Connected.</span>
                </h1>
                <p className="text-xl text-[#64748B] leading-relaxed mb-12">
                  A simple, intuitive mobile experience that keeps patients connected, informed, and engaged — anytime, anywhere.
                </p>
                <div className="flex flex-wrap gap-4">
                   <button 
                     onClick={() => window.dispatchEvent(new CustomEvent('open-reading-modal'))}
                     className="px-8 py-4 bg-[#0F172A] text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
                   >
                     <Smartphone className="w-5 h-5" />
                     Download App
                   </button>
                   <button 
                     onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal'))}
                     className="px-8 py-4 border-2 border-slate-200 text-[#0F172A] rounded-2xl font-bold hover:bg-slate-50 transition-all"
                   >
                     Book Demo
                   </button>
                </div>
              </motion.div>

              <div className="relative">
                {/* Mobile Mockup */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative z-10 flex justify-center"
                >
                  <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[50px] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
                    {/* Screen Content */}
                    <img 
                      src="https://i.postimg.cc/3xGnw3ZB/mobile-1.jpg" 
                      alt="Connected Patient App" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* Home Indicator */}
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-300 rounded-full" />
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-8 top-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 hidden md:block"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <Video className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Consultation</p>
                        <p className="text-xs font-bold text-slate-900">Dr. Sarah is online</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-blue-500/10 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-blue-500/5 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid Section */}
        <section className="py-24 px-6 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-extrabold text-[#0F172A] mb-6 tracking-tight">What Patients Can Do</h2>
              <p className="text-lg text-[#64748B]">Empowering patients with the tools they need to take control of their health journey.</p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-3">{feature.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design & Engagement Split */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-extrabold text-[#0F172A] mb-12 tracking-tight">Designed for Real Life</h2>
                  <div className="grid sm:grid-cols-2 gap-8">
                    {designBenefits.map((benefit, i) => (
                      <div key={i}>
                        <h4 className="font-bold text-[#0F172A] mb-3 text-lg">{benefit.title}</h4>
                        <p className="text-sm text-[#64748B] leading-relaxed">{benefit.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <div className="mt-16 pt-16 border-t border-slate-100">
                  <h2 className="text-4xl font-extrabold text-[#0F172A] mb-8 tracking-tight">Continuous Engagement</h2>
                  <div className="space-y-6">
                    {[
                      { title: 'Smart Nudges', desc: 'Behavioral science backed alerts that encourage healthy actions.' },
                      { title: 'Personalized Reminders', desc: 'Timely prompts for readings, medication, and appointments.' },
                      { title: 'Instant Feedback', desc: 'Real-time classification of health data for immediate awareness.' }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 p-6 rounded-3xl bg-slate-50 items-center">
                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0F172A] mb-1">{item.title}</h4>
                          <p className="text-xs text-[#64748B]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-[#0F172A] rounded-[48px] p-12 text-white overflow-hidden relative">
                   <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full" />
                   <h3 className="text-3xl font-extrabold mb-8 relative z-10 tracking-tight">How It Connects</h3>
                   <div className="space-y-12 relative z-10">
                     {[
                       { label: 'Devices', icon: Zap },
                       { label: 'App', icon: Smartphone },
                       { label: 'AI Intelligence', icon: Cloud },
                       { label: 'Care Team', icon: Users },
                       { label: 'Action', icon: Activity }
                     ].map((item, i, arr) => (
                       <div key={i} className="flex items-center gap-6">
                         <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                           <item.icon className="w-6 h-6 text-blue-400" />
                         </div>
                         <span className="text-lg font-bold tracking-tight">{item.label}</span>
                         {i < arr.length - 1 && (
                           <div className="absolute bottom-[-32px] left-[23px] w-[2px] h-8 bg-gradient-to-b from-white/20 to-transparent" />
                         )}
                       </div>
                     ))}
                   </div>
                   <p className="mt-16 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-8 italic">
                     The app acts as the central hub between patients and care providers, ensuring every heartbeat is heard and every trend is understood.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-24 px-6 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-[48px] p-12 md:p-20 shadow-xl overflow-hidden relative border border-slate-100">
              <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.03] blur-[120px] rounded-full" />
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-8 tracking-tight">Experience Care in Your Pocket</h2>
                  <p className="text-lg text-[#64748B] mb-12 leading-relaxed">
                    Ready to take control of your health? Download the GOQii HealthEngage app today and start your journey towards better wellness under expert care.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <a href="#" className="flex items-center justify-center gap-3 bg-[#0F172A] text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition-all group">
                      <Apple className="w-6 h-6" />
                      <div className="text-left">
                        <p className="text-[10px] uppercase opacity-60 leading-none mb-1">Download on the</p>
                        <p className="text-lg font-bold leading-none">App Store</p>
                      </div>
                    </a>
                    <a href="#" className="flex items-center justify-center gap-3 bg-[#0F172A] text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition-all">
                      <PlayCircle className="w-6 h-6" />
                      <div className="text-left">
                        <p className="text-[10px] uppercase opacity-60 leading-none mb-1">Get it on</p>
                        <p className="text-lg font-bold leading-none">Google Play</p>
                      </div>
                    </a>
                  </div>

                  <div className="flex items-center gap-6">
                    <button 
                      onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal'))}
                      className="text-[#0F172A] font-bold flex items-center gap-2 hover:gap-3 transition-all group"
                    >
                      Book a Demo <ArrowRight className="w-5 h-5 text-blue-600" />
                    </button>
                    <div className="h-6 w-[1px] bg-slate-200" />
                    <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">24/7 Smart Support</span>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 flex flex-col items-center">
                    <div className="w-48 h-48 bg-slate-50 rounded-3xl flex items-center justify-center mb-6 border-4 border-slate-100 relative overflow-hidden">
                       <QrCode className="w-full h-full p-6 text-slate-900 opacity-20" />
                       <div className="absolute inset-0 flex items-center justify-center">
                         <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter text-center">Scan to <br /> Download</span>
                       </div>
                    </div>
                    <p className="text-sm font-bold text-[#0F172A] mb-1">Scan for Fast Access</p>
                    <p className="text-xs text-[#64748B]">Available for iOS & Android</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
