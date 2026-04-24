import { motion } from 'motion/react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';
import { Bell, Info, Heart, Activity } from 'lucide-react';

const data = [
  { time: '08:00', value: 72 },
  { time: '10:00', value: 78 },
  { time: '12:00', value: 85 },
  { time: '14:00', value: 82 },
  { time: '16:00', value: 92 },
  { time: '18:00', value: 88 },
  { time: '20:00', value: 74 },
];

const readmissionsData = [
  { name: 'Standard Care', value: 18, color: '#94a3b8' },
  { name: 'CuraStream', value: 7, color: '#2563eb' },
];

export default function DashboardPreview() {
  return (
    <section className="py-24 overflow-hidden bg-white" id="intelligence">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#F8FAFC] rounded-[24px] shadow-sm border border-[#E2E8F0] overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-[#F1F5F9] flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E2E8F0]" />
                  <div>
                    <p className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider">Patient Portal</p>
                    <p className="text-sm font-bold text-[#0F172A]">James Robinson</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#64748B]">
                    <Bell className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Main Grid */}
              <div className="p-8">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
                    <div className="flex justify-between items-start mb-3">
                      <Heart className="text-[#2563EB] w-5 h-5" />
                      <span className="text-[10px] font-bold text-[#22C55E] bg-[#F1F5F9] px-2 py-0.5 rounded-full uppercase tracking-wider">Stable</span>
                    </div>
                    <p className="text-[11px] text-[#94A3B8] font-bold uppercase mb-1">Heart Rate</p>
                    <p className="text-2xl font-extrabold text-[#0F172A]">76 <span className="text-sm font-normal text-[#94A3B8]">BPM</span></p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
                    <div className="flex justify-between items-start mb-3">
                      <Activity className="text-[#0D9488] w-5 h-5" />
                      <span className="text-[10px] font-bold text-[#22C55E] bg-[#F1F5F9] px-2 py-0.5 rounded-full uppercase tracking-wider">Normal</span>
                    </div>
                    <p className="text-[11px] text-[#94A3B8] font-bold uppercase mb-1">Blood Oxygen</p>
                    <p className="text-2xl font-extrabold text-[#0F172A]">98.5 <span className="text-sm font-normal text-[#94A3B8]">%</span></p>
                  </div>
                </div>

                <div className="h-64 w-full mb-8 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
                   <h4 className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-6 flex items-center gap-2">
                     Real-time Metrics
                   </h4>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2563EB" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      />
                      <Area type="monotone" dataKey="value" stroke="#2563EB" strokeWidth={2} fillOpacity={1} fill="url(#colorVal)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="p-4 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#2563EB] rounded-full" />
                    <p className="text-[12px] font-bold text-[#0F172A]">AI Risk Assessment: Low Risk (98%)</p>
                  </div>
                  <button className="text-[11px] font-bold text-[#2563EB] uppercase tracking-wider">Details</button>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center px-4 py-2 bg-[#F1F5F9] rounded-full text-[#475569] text-[11px] font-bold uppercase tracking-wider mb-6">
              Platform Intelligence
            </div>
            <h2 className="text-4xl font-extrabold text-[#0F172A] mb-8 leading-tight tracking-tight">
              Intelligent Care, <br />
              <span className="bg-gradient-to-r from-[#0D9488] to-[#2563EB] bg-clip-text text-transparent">Measured Continuously.</span>
            </h2>
            <p className="text-lg text-[#64748B] mb-10 leading-[1.6]">
              GOQii synthesizes complex biometric data into actionable clinical insights. We prioritize the patients who need your attention most.
            </p>

            <div className="space-y-6">
              {[
                { label: "Live patient dashboards", desc: "Real-time state tracking for every patient in your care." },
                { label: "Risk alerts & notifications", desc: "Identify deterioration before an acute event occurs." },
                { label: "Predictive health insights", desc: "Early threat detection using longitudinal health data." },
                { label: "Population health analytics", desc: "Monitor your entire cohort from a single pane." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#F1F5F9] flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-[#2563EB] rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] mb-1 tracking-tight">{item.label}</h4>
                    <p className="text-sm text-[#64748B]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
