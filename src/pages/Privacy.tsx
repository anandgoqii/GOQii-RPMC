import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-4 tracking-tight">Privacy Policy</h1>
            <p className="text-[#64748B] font-medium mb-12">Last updated: April 24, 2026</p>

            <div className="prose prose-slate max-w-none space-y-12 text-[#334155] leading-relaxed">
              <section>
                <p className="text-lg">
                  GOQii HealthEngage RPMC ("we", "our", or "us") is committed to protecting the privacy and security of personal and health information. This Privacy Policy explains how we collect, use, store, and protect data when you use our Remote Patient Monitoring platform and related services.
                </p>
              </section>

              <hr className="border-slate-100" />

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-6">1. Information We Collect</h2>
                <p>We may collect the following categories of information:</p>
                
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">Personal Information</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Name, contact details, and demographic information</li>
                      <li>Account credentials and identifiers</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">Health & Medical Data</h3>
                    <ul className="list-disc pl-6 space-y-1 font-medium text-blue-600">
                      <li>Vital signs (e.g., heart rate, blood pressure, glucose levels)</li>
                      <li>Medical history and health records (as provided)</li>
                      <li>Device-generated health data</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">Technical & Usage Data</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Device information, IP address, browser type</li>
                      <li>Platform usage data and interaction logs</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">2. How We Use Your Information</h2>
                <p>We use collected data to:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Provide and operate the RPMC platform</li>
                  <li>Monitor patient health and generate clinical insights</li>
                  <li>Enable healthcare professionals to deliver care</li>
                  <li>Trigger alerts and interventions based on health data</li>
                  <li>Improve platform performance and user experience</li>
                  <li>Comply with legal and regulatory obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">3. Sharing of Information</h2>
                <p>We do not sell personal data. We may share information with:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Healthcare providers and authorized care teams</li>
                  <li>Integration partners (e.g., EHR systems, insurers)</li>
                  <li>Service providers supporting infrastructure and analytics</li>
                  <li>Regulatory authorities when required by law</li>
                </ul>
                <p className="mt-4 font-medium italic">All data sharing is governed by strict confidentiality and security controls.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4 text-blue-600">4. Data Security</h2>
                <p>We implement industry-standard security measures, including:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>End-to-end encryption</li>
                  <li>Secure cloud infrastructure</li>
                  <li>Role-based access control</li>
                  <li>Continuous monitoring and audit logs</li>
                </ul>
                <p className="mt-4">Our systems are designed in alignment with ISO 27001 and healthcare security best practices.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">5. Data Retention</h2>
                <p>We retain personal and health data only for as long as necessary to:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Provide services</li>
                  <li>Meet contractual obligations</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4 text-green-600">6. Your Rights</h2>
                <p>Depending on your location, you may have rights to:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of data</li>
                  <li>Restrict or object to processing</li>
                  <li>Request data portability</li>
                </ul>
                <p className="mt-4">Requests can be made by contacting us at the details below.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">7. International Compliance</h2>
                <p>We align our practices with:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2 font-bold">
                  <li>HIPAA (Health Insurance Portability and Accountability Act)</li>
                  <li>GDPR (General Data Protection Regulation)</li>
                  <li>PDPL (Saudi Personal Data Protection Law)</li>
                </ul>
                <p className="mt-4">Where required, data residency and processing comply with local regulations.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">8. Cookies & Tracking</h2>
                <p>We may use cookies and similar technologies to:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Improve user experience</li>
                  <li>Analyze platform usage</li>
                  <li>Ensure platform functionality</li>
                </ul>
                <p className="mt-4">Users can manage cookie preferences via browser settings.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">9. Third-Party Integrations</h2>
                <p>Our platform may integrate with third-party services (e.g., healthcare systems, devices). These providers are required to maintain appropriate data protection standards.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">10. Children’s Privacy</h2>
                <p>Our services are not intended for children without appropriate consent. Where applicable, parental or guardian consent is required.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">11. Updates to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
              </section>

              <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">12. Contact Us</h2>
                <p className="mb-8">For questions or requests regarding this Privacy Policy, please reach out to our team.</p>
                <Link 
                  to="/contact-sales"
                  className="px-8 py-3 bg-[#2563EB] text-white rounded-full font-bold hover:shadow-lg transition-all"
                >
                  Contact Us
                </Link>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
