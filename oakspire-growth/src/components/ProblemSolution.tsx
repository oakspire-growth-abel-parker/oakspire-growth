import React, { useState } from 'react';
import { Target, Image, HelpCircle, TrendingDown, TrendingUp, Compass, PhoneCall, BarChart } from 'lucide-react';

export default function ProblemSolution() {
  const [activeTab, setActiveTab] = useState<string>('targeting');

  const points = [
    {
      id: 'targeting',
      title: 'Wrong Targeting',
      icon: Target,
      problem: 'Wasting budget on broad audiences or outdated demographics who will never purchase your services.',
      solution: 'Custom profile mapping + custom Meta Lookalike & local geo-fencing. We place ads only in front of buyers ready to request services.',
    },
    {
      id: 'creatives',
      title: 'Weak Ad Creatives',
      icon: Image,
      problem: 'Using boring stock photos, blurry images, or cluttered text layouts that users scroll past instantly.',
      solution: 'Hook-based real social layouts. Custom mobile-first video/photo hooks engineered to stop the scroll and compel action.',
    },
    {
      id: 'followup',
      title: 'Poor Follow-up Systems',
      icon: PhoneCall,
      problem: 'Leads sit in spreadsheet files for days without call attempts, letting warm prospects go cold instantly.',
      solution: 'Instant Automated Notifications. We integrate forms with automated SMS response blocks to book client appointments in real-time.',
    },
    {
      id: 'optimization',
      title: 'No Optimization Process',
      icon: Compass,
      problem: 'Setting up ads and leaving them unchanged for months, causing "ad fatigue" and skyrocketing costs.',
      solution: 'Continuous creative refresh & placement checks. Weekly dynamic changes to prune low performers and scale winners.',
    },
    {
      id: 'tracking',
      title: 'No Accurate Tracking',
      icon: BarChart,
      problem: 'Guessing where calls or requests are coming from, with no tracking pixels or attribution setup.',
      solution: 'Comprehensive CAPI (Conversions API) + pixel setup. Complete data transparency tracking every dollar spent back to a closed sale.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white overflow-hidden scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-emerald-400 font-semibold tracking-widest uppercase text-xs">
            The Reality Of Paid Ads
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-white tracking-tight leading-tight">
            Why Most Businesses Lose Money On Meta Ads
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Paid acquisition is predictable when engineered correctly. Most local service brands fall into these 5 common campaign traps. Here is how Oakspire transforms them into profits.
          </p>
        </div>

        {/* Tab Layout or Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Interaction Menu */}
          <div className="lg:col-span-5 space-y-4">
            {points.map((pt) => {
              const Icon = pt.icon;
              const isActive = activeTab === pt.id;
              return (
                <button
                  key={pt.id}
                  onClick={() => setActiveTab(pt.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? 'bg-slate-800 border-emerald-500 shadow-lg shadow-emerald-500/5'
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-800/30'
                  }`}
                  id={`trap-btn-${pt.id}`}
                >
                  <div className={`p-2.5 rounded-lg ${isActive ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-base ${isActive ? 'text-emerald-400' : 'text-white'}`}>
                      {pt.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                      {pt.problem}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Comparison Card */}
          <div className="lg:col-span-7 bg-slate-800/60 border border-slate-800 p-8 rounded-2xl relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            {(() => {
              const activePt = points.find((p) => p.id === activeTab) || points[0];
              return (
                <div className="space-y-8 animate-fadeIn">
                  {/* Problem Block */}
                  <div className="border-l-4 border-red-500/60 pl-6 space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-semibold uppercase bg-red-400/10 text-red-400">
                      <TrendingDown size={12} /> Typical Approach
                    </span>
                    <h4 className="text-xl font-bold text-white tracking-tight">{activePt.title} Error</h4>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                      {activePt.problem}
                    </p>
                  </div>

                  {/* Oakspire Fix */}
                  <div className="border-l-4 border-emerald-500 pl-6 space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-semibold uppercase bg-emerald-400/10 text-emerald-400">
                      <TrendingUp size={12} /> The Oakspire Solution
                    </span>
                    <h4 className="text-xl font-bold text-emerald-400 tracking-tight">Systemized Execution</h4>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                      {activePt.solution}
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
