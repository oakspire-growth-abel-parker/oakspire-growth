import React from 'react';
import { Target, MessageSquare, LineChart, ShieldCheck, Zap } from 'lucide-react';

export default function WhyChooseUs() {
  const highlights = [
    {
      title: 'Meta Ads Specialists',
      description: 'We don’t try to manage SEO, run TikTok campaigns, design business cards, or do general PR. We focus 100% of our capacity on mastering Facebook and Instagram advertising. Concentrated expertise produces superior cost-per-lead metric efficiencies.',
      icon: Target,
    },
    {
      title: 'Fast Communication',
      description: 'No waiting 4 days for a response or getting bounced around generic support tickets. We operate with high accountability. You get direct text/Slack access to your dedicated campaign optimizer, responding in hours, not days.',
      icon: MessageSquare,
    },
    {
      title: 'Data-Driven Decisions',
      description: 'We ignore "vanity metrics" like likes, post reach, or impression spikes. We optimize budgets mathematically according to booked consultations, qualified application forms, and customer acquisition costs. Every edit has statistical validation.',
      icon: LineChart,
    },
    {
      title: 'Transparent Reporting',
      description: 'No monthly 40-page PDF reports filled with complex, useless graphs designed to confuse you. We provide a single, clean live dashboard recording ad spend, total leads, total appointments, and cost per lead. Complete transparency keeps us aligned.',
      icon: ShieldCheck,
    },
    {
      title: 'Long-Term Growth Focus',
      description: 'We do not engage in temporary "hype" strategies that spike lead cost after 14 days. We architect stable customer pipelines with audience segmentation, campaign scale protection, and deep asset rotations to secure steady lead flow for many years.',
      icon: Zap,
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white text-slate-900 scroll-mt-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Portion */}
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fadeIn">
          <span className="text-emerald-600 font-semibold tracking-widest uppercase text-xs">
            Standard Of Service
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-slate-900 tracking-tight">
            Why Choose Oakspire Growth
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            We operate as an extension of your service business. Our values are rooted in clarity, direct feedback, speed of execution, and predictable customer pipeline numbers.
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {highlights.map((hl, index) => {
            const Icon = hl.icon;
            return (
              <div
                key={index}
                className="bg-slate-50/50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-between hover:border-emerald-200 hover:bg-white hover:shadow-lg transition-all duration-300"
                id={`why-choose-item-${index}`}
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-950 text-emerald-400 flex items-center justify-center shadow-inner shrink-0">
                    <Icon size={18} className="stroke-[1.75]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {hl.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {hl.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
