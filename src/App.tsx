import { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProblemSolution from './components/ProblemSolution';
import TheRPMKit from './components/TheRPMKit';
import CareLoopEcosystem from './components/CareLoopEcosystem';
import HumanAI from './components/HumanAI';
import HowItWorks from './components/HowItWorks';
import EngagementEngine from './components/EngagementEngine';
import DashboardPreview from './components/DashboardPreview';
import Conditions from './components/Conditions';
import Outcomes from './components/Outcomes';
import Audience from './components/Audience';
import SaudiIntegration from './components/SaudiIntegration';
import Compliance from './components/Compliance';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import VideoModal from './components/VideoModal';
import ContactSales from './pages/ContactSales';
import About from './pages/About';

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) {
      // Clear trailing hash from URL if it exists
      if (window.location.hash === '#') {
        window.history.replaceState(null, '', window.location.pathname);
      }

      // Immediate and staged resets
      window.scrollTo(0, 0);
      const timer1 = setTimeout(() => window.scrollTo(0, 0), 0);
      const timer2 = setTimeout(() => window.scrollTo(0, 0), 100);
      const timer3 = setTimeout(() => window.scrollTo(0, 0), 500); 
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [pathname, hash]);

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timeoutId = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [hash]);

  return null;
}

function LandingPage() {
  return (
    <>
      <main>
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <CareLoopEcosystem />
        <HumanAI />
        <TheRPMKit />
        <EngagementEngine />
        <DashboardPreview />
        <Conditions />
        <Outcomes />
        <Audience />
        <SaudiIntegration />
        <Compliance />
        <CTASection />
      </main>
    </>
  );
}

export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

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
