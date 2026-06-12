import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How much should I spend on ads?',
      answer: 'For most local service businesses, we recommend starting with an ad spend budget of $1,000 to $2,500 per month. This allows the Meta algorithm to collect enough conversion data quickly, test multiple creative layouts, and identify winning audience targets. As we establish a predictable cost-per-lead (CPL) and prove positive return, you can easily reinvest profits to scale budgets.',
    },
    {
      question: 'How quickly can campaigns launch?',
      answer: 'Typically, your custom Meta advertising system will go live within 3 to 7 days. During this initial setup period, we perform competitor audits, design your native forms, write the ad copy hooks, configure the Conversions API (CAPI) tracking plumbing, and finalize visual assets. We review the entire pipeline with you for final approval before running active ad units.',
    },
    {
      question: 'Do you create the ad creatives and write the copy?',
      answer: 'Yes, we handle 100% of the creative production. We draft the high-converting ad copy, engineer emotional hooks, and assemble custom images or short-form mobile-first videos. You do not need to worry about graphic design or copywriting; our specialized focus in direct-response creative allows us to design assets engineered specifically to convert local social scrolls into inquiries.',
    },
    {
      question: 'What service industries do you work with?',
      answer: 'We focus exclusively on high-value service-based fields: 1. Healthcare & Wellness (including Med Spa, Day Spa, Massage Therapist), 2. Home Services (including Interior Designer, Exterior Designers, Plumbers, Landscapers), and 3. Professional Services (including Financial Advisors, Accountants, Bookkeeping). This focus ensures the sales pipeline can easily cover acquisition costs and drive highly profitable returns.',
    },
    {
      question: 'How do we get started?',
      answer: "The process is simple. First, fill out the form at the bottom of our website to schedule a free Growth Audit. We'll jump on a quick 15-minute call to analyze your current lead pathways, calculate your local audience potential, and see if Meta Ads make sense for your business. If we are a fit, we can initialize your setup immediately and launch within two weeks.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white text-slate-900 scroll-mt-10 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold tracking-widest uppercase text-xs">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-slate-900 tracking-tight">
            Common Inquiries
          </h2>
          <p className="mt-4 text-slate-600">
            Everything you need to know about partnering with Oakspire Growth to secure predictive customer acquisition pipelines.
          </p>
        </div>

        {/* Faction Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? 'border-emerald-500 bg-slate-50/50 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
                id={`faq-item-${index}`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 text-sm md:text-base pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg shrink-0 transition-colors ${isOpen ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 text-slate-600 text-xs md:text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support helper */}
        <div className="mt-12 text-center p-6 bg-slate-50 border border-slate-200/50 rounded-2xl">
          <span className="text-xs text-slate-500">
            Have a different strategic question not covered here?{' '}
            <a href="#contact" className="text-emerald-600 font-bold hover:underline">
              Submit your inquiry in our audit form
            </a>{' '}
            and we will respond within hours with custom feedback.
          </span>
        </div>

      </div>
    </section>
  );
}
