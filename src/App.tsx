import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import VideoModal from './components/VideoModal';
import ContactSales from './pages/ContactSales';
import About from './pages/About';

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return null;
}

function LandingPage() {
  return (
    <>
      <main>
        <Hero />
        <TrustScale />
        <Problem />
        <SolutionEcosystem />
        <HowItWorks />
        <TheRPMKit />
        <EngagementEngine />
        <DashboardPreview />
        <Conditions />
        <Outcomes />
        <Audience />
        <SaudiIntegration />
        <CTASection />
      </main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <DemoModal />
        <VideoModal />
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <LandingPage />
              <Footer />
            </>
          } />
          <Route path="/contact-sales" element={<ContactSales />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
