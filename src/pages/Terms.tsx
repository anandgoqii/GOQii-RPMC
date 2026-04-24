import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Terms() {
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-4 tracking-tight">Terms & Conditions</h1>
            <p className="text-[#64748B] font-medium mb-12">Last updated: April 24, 2026</p>

            <div className="prose prose-slate max-w-none space-y-12 text-[#334155] leading-relaxed">
              <section>
                <p className="text-lg">
                  These Terms & Conditions ("Terms") govern your access to and use of the GOQii HealthEngage RPMC platform and services ("Platform"). By accessing or using the Platform, you agree to be bound by these Terms.
                </p>
              </section>

              <hr className="border-slate-100" />

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">1. About the Platform</h2>
                <p>
                  GOQii HealthEngage RPMC provides a remote patient monitoring ecosystem that includes connected devices, data analytics, AI-driven insights, telehealth capabilities, and care coordination tools.
                </p>
                <p className="mt-4">
                  The Platform is intended for use by healthcare providers, organizations, and authorized users.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">2. Eligibility</h2>
                <p>By using the Platform, you confirm that:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>You are authorized to use the services</li>
                  <li>You are at least 18 years old (or have appropriate consent)</li>
                  <li>You are using the Platform in compliance with applicable laws</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4 text-red-600">3. Nature of Services (Important)</h2>
                <p>The Platform supports healthcare delivery but:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2 font-medium">
                  <li>It does not replace professional medical judgment</li>
                  <li>It is not intended for emergency use</li>
                  <li>Clinical decisions remain the responsibility of licensed healthcare professionals</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">4. User Responsibilities</h2>
                <p>Users agree to:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain confidentiality of login credentials</li>
                  <li>Use the Platform only for authorized purposes</li>
                  <li>Comply with healthcare and data protection regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">5. Health Data & Consent</h2>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Users consent to the collection and processing of health data as described in the Privacy Policy</li>
                  <li>Healthcare providers are responsible for obtaining patient consent where required</li>
                  <li>Data is used to enable monitoring, alerts, and care delivery</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">6. Telehealth & Remote Services</h2>
                <p>Where telehealth features are used:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Services are subject to local regulatory requirements</li>
                  <li>Availability may vary by region</li>
                  <li>Users must ensure compliance with applicable telemedicine laws</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">7. Emergency Situations</h2>
                <p>The Platform may generate alerts; however:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>It is not a substitute for emergency services</li>
                  <li>In case of emergency, users should contact local emergency services immediately</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">8. Intellectual Property</h2>
                <p>All content, software, and technology associated with the Platform are owned by GOQii or its licensors.</p>
                <p className="mt-4">Users may not:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Copy, modify, or distribute platform content</li>
                  <li>Reverse engineer or misuse the system</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">9. Data Security</h2>
                <p>We implement industry-standard security measures; however:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>No system can guarantee absolute security</li>
                  <li>Users are responsible for safeguarding access credentials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">10. Third-Party Integrations</h2>
                <p>The Platform may integrate with third-party services (e.g., EHR systems, devices).</p>
                <p className="mt-4">We are not responsible for:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Third-party service availability</li>
                  <li>External system errors or data inaccuracies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">11. Service Availability</h2>
                <p>We aim to provide reliable access but do not guarantee:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Uninterrupted service</li>
                  <li>Error-free operation</li>
                </ul>
                <p className="mt-4">Maintenance, updates, or external factors may impact availability.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">12. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>GOQii shall not be liable for indirect, incidental, or consequential damages</li>
                  <li>We are not responsible for medical outcomes resulting from platform use</li>
                  <li>Liability is limited to the extent permitted by applicable law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">13. Indemnification</h2>
                <p>Users agree to indemnify and hold harmless GOQii from claims arising from:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Misuse of the Platform</li>
                  <li>Violation of these Terms</li>
                  <li>Breach of applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">14. Compliance with Laws</h2>
                <p>Users must comply with all applicable laws, including:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Healthcare regulations</li>
                  <li>Data protection laws (HIPAA, GDPR, PDPL where applicable)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">15. Termination</h2>
                <p>We may suspend or terminate access if:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Terms are violated</li>
                  <li>Unauthorized use is detected</li>
                  <li>Required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">16. Changes to Terms</h2>
                <p>We may update these Terms periodically. Continued use of the Platform constitutes acceptance of updated Terms.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">17. Governing Law</h2>
                <p>These Terms shall be governed by and interpreted in accordance with applicable laws of the jurisdiction in which services are provided, including local regulatory requirements.</p>
              </section>

              <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">18. Contact Information</h2>
                <p>For questions regarding these Terms:</p>
                <div className="mt-4 font-bold text-[#0F172A]">
                  <p>GOQii HealthEngage RPMC</p>
                  <p>Email: legal@goqii.com</p>
                  <p>Address: [Insert Address]</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
