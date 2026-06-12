import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Lead } from './types';

// Import components
import Header from './components/Header';
import ProblemSolution from './components/ProblemSolution';
import SystemSteps from './components/SystemSteps';
import Deliverables from './components/Deliverables';
import TargetAudience from './components/TargetAudience';
import ResultsSection from './components/ResultsSection';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';
import Logo from './components/Logo';

export default function App() {
  const [leads, setLeads] = useState<Lead[]>([]);

  // Initialize leads from localStorage on load
  useEffect(() => {
    const existing = localStorage.getItem('oakspire_leads');
    if (existing) {
      try {
        setLeads(JSON.parse(existing));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Sync state whenever a lead is submitted
  const handleLeadSubmit = (newOrUpdatedLead: Lead) => {
    const existing = localStorage.getItem('oakspire_leads');
    let updatedLeads: Lead[] = [];
    
    if (existing) {
      try {
        const parsed: Lead[] = JSON.parse(existing);
        const idx = parsed.findIndex(l => l.id === newOrUpdatedLead.id);
        if (idx > -1) {
          parsed[idx] = newOrUpdatedLead;
          updatedLeads = [...parsed];
        } else {
          updatedLeads = [newOrUpdatedLead, ...parsed];
        }
      } catch (e) {
        updatedLeads = [newOrUpdatedLead];
      }
    } else {
      updatedLeads = [newOrUpdatedLead];
    }

    setLeads(updatedLeads);
    localStorage.setItem('oakspire_leads', JSON.stringify(updatedLeads));
  };

  const scrollToContact = () => {
    const contactSec = document.querySelector('#contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWhyUs = () => {
    const whySec = document.querySelector('#why-us');
    if (whySec) {
      whySec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-500 selection:text-white" id="site-root-canvas">
      
      {/* Sticky header */}
      <Header onAdminOpen={() => {}} adminEnabled={false} />

      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative bg-slate-900 text-white pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden border-b border-slate-800"
      >
        {/* Dynamic mesh dot background overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_90%,transparent_100%)] opacity-35"></div>

        {/* Dynamic color orb */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="space-y-8 flex flex-col items-center">
            
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 active:scale-95 transition-transform">
              <ShieldCheck size={14} /> Meta Ads Direct-Response Experts
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight font-display max-w-3xl">
              Turn Facebook & Instagram Ads Into{' '}
              <span className="text-emerald-400 block mt-2 sm:inline">Qualified Leads Month-After-Month</span>
            </h1>

            <p className="max-w-2xl text-slate-300 text-lg md:text-xl leading-relaxed font-light">
              Oakspire Growth helps service businesses generate more appointments, phone calls, and customers using proven Meta advertising systems.
            </p>

            {/* Action row CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md pt-2">
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold bg-emerald-500 text-white hover:bg-emerald-600 transition-all font-display shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
                id="hero-primary-cta"
              >
                Book A Free Growth Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <button
                onClick={scrollToWhyUs}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white transition-all border border-slate-700 active:scale-[0.98]"
                id="hero-secondary-cta"
              >
                See How It Works
              </button>
            </div>

            {/* Bullet mini proofs */}
            <div className="grid grid-cols-3 gap-6 pt-8 w-full max-w-lg border-t border-slate-800/80 text-center">
              <div>
                <div className="text-xl font-bold text-white font-display">100%</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Meta Advertising Focused</div>
              </div>
              <div>
                <div className="text-xl font-bold text-emerald-400 font-display">Zero</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Hype or Jargon</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white font-display">Airtight</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Attribution & Tracking</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sections breakdown */}
      <ProblemSolution />
      <SystemSteps />
      <Deliverables />
      <TargetAudience />
      <ResultsSection />
      <WhyChooseUs />
      <AboutUs />
      <FAQSection />

      {/* Lead Generation form and dynamic strategy calendar scheduler */}
      <ContactForm onLeadSubmit={handleLeadSubmit} />

      {/* Muted Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-slate-900">
            {/* Logo brand footer lockup */}
            <Logo variant="header" iconColor="#FFFFFF" textColor="#FFFFFF" />

            {/* navigation indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-xs font-medium">
              <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
              <a href="#our-system" className="hover:text-white transition-colors">Blueprint</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#who-we-serve" className="hover:text-white transition-colors">Niches</a>
              <a href="#results" className="hover:text-white transition-colors">Results</a>
              <a href="#about" className="hover:text-white transition-colors">About Us</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs">
            <p>© 2026 Oakspire Growth. All rights reserved. Strategic direct-response lead generation.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
