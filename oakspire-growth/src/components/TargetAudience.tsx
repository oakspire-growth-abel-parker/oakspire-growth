import React from 'react';
import { Home, Stethoscope, Briefcase, ArrowUpRight } from 'lucide-react';

export default function TargetAudience() {
  const niches = [
    {
      title: 'Healthcare & Wellness',
      examples: 'Med Spa, Day Spa, Massage Therapist',
      why: 'Hyper-local geographic ads showing customer results build long-term repeat client rosters with compounding customer lifetime value.',
      icon: Stethoscope,
    },
    {
      title: 'Home Services',
      examples: 'Interior Designer, Exterior Designers, Plumbers, Landscapers',
      why: 'High average job values mean even a small volume of booked appointments yields immense returns on ad spend.',
      icon: Home,
    },
    {
      title: 'Professional Services',
      examples: 'Financial Advisors, Accountants, Bookkeeping',
      why: 'Audience authority setups and case studies establish you as the default premium choice in your local metro market.',
      icon: Briefcase,
    },
  ];

  return (
    <section id="who-we-serve" className="py-24 bg-white text-slate-900 border-t border-slate-100 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-emerald-600 font-semibold tracking-widest uppercase text-xs">
            Niche Focus
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-slate-900 tracking-tight">
            Who We Work With
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            We partner with businesses where a single client acquired has high value. This enables your campaign to cover ad spend easily, driving compounding monthly growth.
          </p>
        </div>

        {/* Niches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {niches.map((niche, index) => {
            const Icon = niche.icon;
            return (
              <div
                key={index}
                className="bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-emerald-200 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg flex flex-col gap-5 items-start group"
                id={`niche-${index}`}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-200">
                  <Icon size={20} className="stroke-[1.75]" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight font-display">
                      {niche.title}
                    </h3>
                    <ArrowUpRight size={14} className="text-slate-300 group-hover:text-emerald-500 transition-colors" />
                  </div>
                  <div className="text-xs font-semibold text-emerald-600 tracking-wide">
                    Including: {niche.examples}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed pt-1">
                    {niche.why}
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
