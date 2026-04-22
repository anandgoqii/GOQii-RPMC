import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HeartPulse, Activity, Droplet, Scale, Thermometer, 
  Watch, Stethoscope, Cloud, Smartphone, LayoutDashboard, 
  ArrowRight, CheckCircle2 
} from 'lucide-react';

const devices = [
  { id: 'bp', name: 'Digital Blood Pressure Monitor', icon: HeartPulse, color: '#EF4444' }, // Red
  { id: 'ecg', name: 'Portable ECG Monitor', icon: Activity, color: '#3B82F6' }, // Blue
  { id: 'spo2', name: 'Pulse Oximeter (SpO2)', icon: Stethoscope, color: '#10B981' }, // Emerald
  { id: 'glucose', name: 'Glucose Meter', icon: Droplet, color: '#F59E0B' }, // Amber
  { id: 'scale', name: 'Smart Weight Scale', icon: Scale, color: '#8B5CF6' }, // Violet
  { id: 'thermo', name: 'Digital Thermometer', icon: Thermometer, color: '#EC4899' }, // Pink
  { id: 'watch', name: 'Connected Smartwatch', icon: Watch, color: '#0F172A' }, // Slate
];

const features = [
  "Plug & Play Setup — zero configuration required",
  "Automatic Data Transmission — no manual logging",
  "Clinically Validated Devices",
  "Seamless Connectivity (App / Cellular)"
];

const flowSteps = [
  { icon: Watch, label: "Devices" },
  { icon: Smartphone, label: "App" },
  { icon: Cloud, label: "Cloud" },
  { icon: LayoutDashboard, label: "Dashboard" }
];

export default function TheRPMKit() {
  const [activeDevice, setActiveDevice] = useState(devices[0]);

  return (
    <section className="py-24 bg-white border-y border-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full text-[#64748B] text-[11px] font-bold uppercase tracking-wider mb-6">
            The RPM Kit
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight">
            Everything Patients Need. <br className="hidden sm:block" />
            <span className="text-[#94A3B8] font-medium">Ready from Day One.</span>
          </h2>
          <p className="text-lg text-[#64748B] leading-[1.6]">
            A complete, clinically validated monitoring kit — pre-configured, connected, and ready to deliver real-time health data without setup or friction.
          </p>
        </div>

        {/* Why this works - Pill bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-[#F8FAFC] rounded-full border border-[#E2E8F0]">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
              <span className="text-sm font-medium text-[#0F172A]">{feature}</span>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT: Product Image Stage */}
          <div className="lg:col-span-5 relative w-full h-[400px] lg:h-[650px] bg-[#F8FAFC] rounded-[32px] border border-[#E2E8F0] overflow-hidden shadow-sm flex items-center justify-center">
             <img 
               src="https://demorpmcv.goqii.com/assets/rpmc-kit-B74qYOLa.jpg" 
               alt="The RPM Kit" 
               className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
             />
             {/* Subtle inner shadow overlay to give it depth inside the border */}
             <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[32px] pointer-events-none" />
          </div>

          {/* RIGHT: Selection & Flow */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Device List grid */}
            <div className="mb-16">
              <h4 className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-[1.5px] mb-6">What's Included</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {devices.map((device) => {
                  const isActive = activeDevice.id === device.id;
                  return (
                    <div
                      key={device.id}
                      onMouseEnter={() => setActiveDevice(device)}
                      className={`cursor-pointer group flex items-center gap-4 p-4 rounded-[16px] transition-all duration-300 border ${
                        isActive 
                          ? 'bg-white border-[#E2E8F0] shadow-md scale-[1.02]' 
                          : 'bg-[#F8FAFC] border-transparent hover:border-[#E2E8F0] hover:bg-white text-[#64748B]'
                      }`}
                      style={isActive ? { boxShadow: `0 8px 24px -8px ${device.color}30` } : {}}
                    >
                      <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm border ${
                          isActive ? 'bg-white' : 'bg-[#F1F5F9] border-transparent'
                        }`}
                        style={isActive ? { borderColor: `${device.color}40` } : {}}
                      >
                        <device.icon className={`w-5 h-5 transition-colors ${isActive ? '' : 'opacity-70'}`} style={isActive ? { color: device.color } : {}} />
                      </div>
                      <span className={`font-semibold text-sm transition-colors ${isActive ? 'text-[#0F172A]' : 'group-hover:text-[#0F172A]'}`}>
                        {device.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* How It Works Flow */}
            <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-[24px] border border-[#E2E8F0]">
              <h4 className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-[1.5px] mb-8">How It Works</h4>
              
              {/* Visual Flow track */}
              <div className="relative flex items-center justify-between mb-8 pb-8 border-b border-[#E2E8F0]/50">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-[#E2E8F0] -translate-y-1/2 rounded-full overflow-hidden">
                   <motion.div 
                     animate={{ x: ["-100%", "100%"] }}
                     transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                     className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-50"
                   />
                </div>
                
                {/* Nodes */}
                {flowSteps.map((step, i) => (
                  <div key={i} className="relative z-10 bg-[#F8FAFC] p-2">
                    <div className="w-12 h-12 bg-white rounded-full border-2 border-[#E2E8F0] shadow-sm flex items-center justify-center relative">
                      <step.icon className="w-5 h-5 text-[#475569]" />
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#64748B] uppercase tracking-wider">
                        {step.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Text steps */}
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E0E7FF] text-[#2563EB] font-bold text-xs flex items-center justify-center mt-0.5">1</div>
                  <p className="text-sm text-[#475569] leading-relaxed">Devices automatically <span className="font-semibold text-[#0F172A]">sync patient data</span></p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E0E7FF] text-[#2563EB] font-bold text-xs flex items-center justify-center mt-0.5">2</div>
                  <p className="text-sm text-[#475569] leading-relaxed">Data is <span className="font-semibold text-[#0F172A]">securely transmitted</span> to the platform</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E0E7FF] text-[#2563EB] font-bold text-xs flex items-center justify-center mt-0.5">3</div>
                  <p className="text-sm text-[#475569] leading-relaxed">AI <span className="font-semibold text-[#0F172A]">detects risk patterns</span> proactively</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E0E7FF] text-[#2563EB] font-bold text-xs flex items-center justify-center mt-0.5">4</div>
                  <p className="text-sm text-[#475569] leading-relaxed">Care teams receive <span className="font-semibold text-[#0F172A]">real-time alerts</span></p>
                </li>
              </ul>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
