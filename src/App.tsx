import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustScale from './components/TrustScale';
import Problem from './components/Problem';
import SolutionEcosystem from './components/SolutionEcosystem';
import TheRPMKit from './components/TheRPMKit';
import HowItWorks from './components/HowItWorks';
import EngagementEngine from './components/EngagementEngine';
import DashboardPreview from './components/DashboardPreview';
import Conditions from './components/Conditions';
import Outcomes from './components/Outcomes';
import Audience from './components/Audience';
import SaudiIntegration from './components/SaudiIntegration';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <DemoModal />
      <main>
        <Hero />
        <TrustScale />
        <Problem />
        <SolutionEcosystem />
        <TheRPMKit />
        <HowItWorks />
        <EngagementEngine />
        <DashboardPreview />
        <Conditions />
        <Outcomes />
        <Audience />
        <SaudiIntegration />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
