import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe, MessageSquare, Send, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactSales() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F8FAFC]">
        <Navbar />
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex items-center justify-center min-h-[70vh]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-white p-12 rounded-[32px] shadow-sm border border-[#E2E8F0] max-w-xl"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            </div>
            <h1 className="text-3xl font-extrabold text-[#0F172A] mb-4">Request Received</h1>
            <p className="text-[#64748B] mb-8 leading-relaxed">
              Thank you for reaching out. Our clinical solutions team will get in touch with you within 24 hours to discuss your monitoring needs.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-[#2563EB] font-bold hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Content */}
            <div>
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-sm font-bold text-[#94A3B8] hover:text-[#2563EB] transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight">
                Let's Build the Future of <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#2563EB]">Remote Patient Care</span>
              </h1>
              <p className="text-lg text-[#64748B] mb-12 leading-[1.6] max-w-xl">
                Ready to transform your clinic or hospital with continuous monitoring? Talk to our experts about integration, deployment, and clinical outcomes.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A]">Email us</h4>
                    <p className="text-sm text-[#64748B]">sachin@goqii.com</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A]">Call us</h4>
                    <p className="text-sm text-[#64748B]">+966 535020549</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-6 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 555}`} alt="Expert" />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-bold text-[#0F172A]">Expert Consultation Ready</p>
                </div>
                <p className="text-sm text-[#64748B]">
                  "We help clinical teams set up remote care loops that actually improve longitudinal outcomes."
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.03)] border border-[#E2E8F0]"
            >
              <h3 className="text-2xl font-bold text-[#0F172A] mb-8">Clinical Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">First Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ahmed" 
                      className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] focus:ring-2 focus:ring-[#2563EB]/10 focus:border-[#2563EB] outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">Last Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Al-Rashid" 
                      className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] focus:ring-2 focus:ring-[#2563EB]/10 focus:border-[#2563EB] outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Work Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="ahmed@hospital.sa" 
                    className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] focus:ring-2 focus:ring-[#2563EB]/10 focus:border-[#2563EB] outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Facility Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="King Faisal Hospital" 
                    className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] focus:ring-2 focus:ring-[#2563EB]/10 focus:border-[#2563EB] outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Department</label>
                  <select className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] focus:ring-2 focus:ring-[#2563EB]/10 focus:border-[#2563EB] outline-none transition-all text-sm appearance-none bg-white">
                    <option value="">Select department</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="endocrinology">Endocrinology</option>
                    <option value="post-op">Post-Op Recovery</option>
                    <option value="admin">Administration / IT</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">How can we help?</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your patient population and monitoring goals..." 
                    className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] focus:ring-2 focus:ring-[#2563EB]/10 focus:border-[#2563EB] outline-none transition-all text-sm resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
                >
                  Send Inquiry
                  <Send className="w-4 h-4" />
                </button>

                <p className="text-center text-xs text-[#94A3B8]">
                  By submitting, you agree to our processing of your clinical data in accordance with KSA health standards.
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
