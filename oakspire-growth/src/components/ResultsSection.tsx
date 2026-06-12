import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ResultsSection() {
  // Results presets for future clients (from prompt guidelines: 'More Leads', 'More Appointments', 'Lower Cost Per Lead', 'Higher Return On Ad Spend')
  const placeholderResults = [
    {
      metric: 'More Leads',
      before: '18 leads/mo',
      after: '68 leads/mo',
      improvement: '+277%',
      category: 'Home Services Campaign Refactoring',
    },
    {
      metric: 'More Appointments',
      before: '4 calls/mo',
      after: '22 calls/mo',
      improvement: '5.5x Increase',
      category: 'Medical Spa Funnel Automation',
    },
    {
      metric: 'Lower Cost Per Lead',
      before: '$58.10 CPL',
      after: '$21.40 CPL',
      improvement: '-63%',
      category: 'Real Estate Lead Form Customization',
    },
    {
      metric: 'Higher ROAS',
      before: '1.4x ROAS',
      after: '4.8x ROAS',
      improvement: '4.8x Return',
      category: 'Commercial Cleaning Performance Scale',
    }
  ];

  return (
    <section id="results" className="py-24 bg-slate-900 text-white scroll-mt-10 overflow-hidden relative border-b border-slate-800">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-slate-800/50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-emerald-400 font-semibold tracking-widest uppercase text-xs">
            Performance Metrics
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            Designed To Drive Profitable Scale
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Review our conservative execution benchmarks achieved through rigorous campaign optimization and direct-response audience matching.
          </p>
        </div>

        {/* Campaign Execution Performance Benchmarks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {placeholderResults.map((res, idx) => (
            <div 
              key={idx}
              className="bg-slate-800/40 border border-slate-800/80 p-6 rounded-2xl relative group hover:border-slate-700 transition-all duration-300"
              id={`result-benchmark-${idx}`}
            >
              <div className="absolute top-4 right-4 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={18} />
              </div>
              
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
                {res.category}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-4 font-display">
                {res.metric}
              </h3>
              
              <div className="flex items-end justify-between border-t border-slate-800/60 pt-4">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Before Setup</div>
                  <div className="text-xs line-through text-slate-400 mt-0.5">{res.before}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-emerald-400 uppercase tracking-wider font-semibold">With Oakspire</div>
                  <div className="text-lg font-bold text-emerald-400 font-display mt-0.5">{res.after}</div>
                </div>
              </div>
              
              <div className="mt-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg py-1.5 px-3 text-center">
                <span className="text-xs font-bold text-emerald-400">{res.improvement} Growth Improvement</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
