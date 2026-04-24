import { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
import GlobalIntegration from './components/GlobalIntegration';
import Compliance from './components/Compliance';
import RPMCAppSection from './components/RPMCAppSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import VideoModal from './components/VideoModal';
import ReadingModal from './components/ReadingModal';
import ContactSales from './pages/ContactSales';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import BehavioralScience from './pages/BehavioralScience';
import RPMCApp from './pages/RPMCApp';

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
        <ProblemSolution />
        <HumanAI />
        <TheRPMKit />
        <RPMCAppSection />
        <EngagementEngine />
        <DashboardPreview />
        <Conditions />
        <Outcomes />
        <Audience />
        <GlobalIntegration />
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
        <ReadingModal />
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
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/behavioral-science" element={<BehavioralScience />} />
          <Route path="/rpmc-app" element={<RPMCApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
