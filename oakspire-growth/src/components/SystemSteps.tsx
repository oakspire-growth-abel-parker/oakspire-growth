import React from 'react';
import { Search, Compass, Settings, ShieldAlert, Sparkles, Sliders, ChevronRight } from 'lucide-react';

export default function SystemSteps() {
  const steps = [
    {
      step: 1,
      title: 'Research & Strategy',
      subtitle: 'Mapping your audience & unique hook profile',
      description: 'We audit your previous campaigns, define your ideal customer profile, research local competitors, and build a high-converting offer structure designed to stand out in your market.',
      deliverables: [
        'Detailed Customer Persona Map',
        'Competitor Ad Angle Audit',
        'Validated Lead Magnet / Offer Design',
        'Creative Hook Map & Asset Plan',
      ],
      icon: Search,
    },
    {
      step: 2,
      title: 'Campaign Setup',
      subtitle: 'Plumbing the tracking & engineering templates',
      description: 'We construct your high-converting landing pages / native lead forms, install the Meta Pixel & Conversions API (CAPI) for airtight tracking, and configure specific local target fencing.',
      deliverables: [
        'High-Converting Native Lead Forms',
        'Meta Conversions API & Pixel Integration',
        'A/B Testing Target Segments',
        'Aesthetic Custom Image & Copy Asset Set',
      ],
      icon: Settings,
    },
    {
      step: 3,
      title: 'Lead Generation',
      subtitle: 'Launching the campaign & securing appointments',
      description: 'The ads go live. We place dynamic ad units directly onto Facebook & Instagram, capture qualified lead data, and push prospects directly to your booking calendar in real-time.',
      deliverables: [
        'Live Active Meta Ads Placement',
        'Instant Email & SMS Lead Notifications',
        'Interactive Scheduling Calendars',
        'Automated Immediate Follow-Up Prompts',
      ],
      icon: Sparkles,
    },
    {
      step: 4,
      title: 'Optimization & Scaling',
      subtitle: 'Pruning ad creative fatigue & growing return',
      description: 'We monitor bids, test fresh ad copy, filter out low-quality inquiries, refresh creative visual assets weekly to prevent fatigue, and scale successful budgets to expand market share.',
      deliverables: [
        'Weekly Ad Creative Refreshes',
        'Daily Bid & Placement Optimization',
        'Negative Audience & Keyword Scrubbing',
        'Monthly Strategy Scale Meetings',
      ],
      icon: Sliders,
    },
  ];

  return (
    <section id="our-system" className="py-24 bg-white text-slate-900 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fadeIn">
          <span className="text-emerald-600 font-semibold tracking-widest uppercase text-xs">
            How We Get Results
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-slate-900 tracking-tight leading-tight">
            Our Lead Generation System
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            We don't "run ads" and hope. We build a bulletproof, systematic client acquisition pipeline tailored specifically for local service businesses.
          </p>
        </div>

        {/* Process Roadmap */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/4 left-8 right-8 h-0.5 bg-gradient-to-r from-emerald-100 via-emerald-300 to-emerald-100 z-0"></div>

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.step} 
                className="relative bg-slate-50/50 border border-slate-100 hover:border-emerald-200 hover:bg-slate-50 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md z-10 flex flex-col justify-between"
                id={`system-step-${item.step}`}
              >
                <div>
                  {/* Step Hexagon/Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-5xl font-bold font-display text-emerald-500/20 leading-none">
                      0{item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center shadow-inner">
                      <Icon size={22} className="stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-emerald-600 text-xs font-semibold uppercase tracking-wider mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Scope list bullets */}
                <div className="mt-auto pt-4 border-t border-slate-200/60">
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block mb-2">
                    Action Items Include:
                  </span>
                  <ul className="space-y-1.5">
                    {item.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <ChevronRight size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
