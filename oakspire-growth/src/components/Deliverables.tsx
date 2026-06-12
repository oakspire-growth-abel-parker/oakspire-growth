import React from 'react';
import { Facebook, Instagram, ClipboardCheck, PhoneCall, CheckCircle, LineChart, Cpu, CalendarCheck } from 'lucide-react';

export default function Deliverables() {
  const deliverables = [
    {
      title: 'Facebook Ad Campaign Management',
      outcome: 'Reach buyers exactly when they need you',
      description: 'End-to-end management of paid Facebook campaigns. We handle target audience setup, budget planning, creative variations, and copy that stops local owners, ensuring your ad spend connects directly with local demand.',
      icon: Facebook,
    },
    {
      title: 'Instagram Advertising',
      outcome: 'Aesthetic presence that commands local attention',
      description: 'Visual campaigns on Instagram Stories, Reels, and Feed. We structure social proof layouts showing custom snippets of your business, locking in high-trust placement in your local territory.',
      icon: Instagram,
    },
    {
      title: 'Lead Form Campaigns',
      outcome: 'Friction-less prospect request captures',
      description: 'Native on-platform form configurations with instant auto-fill capability. This reduces completion friction on smartphones by 70%, boosting your conversion rates and dropping cost-per-lead immediately.',
      icon: ClipboardCheck,
    },
    {
      title: 'Appointment Generation',
      outcome: 'Warm sales conversations on autopilot',
      description: 'Transition local prospects directly from submitting an inquiry to selecting an active booking time on your calendar. Wake up to a schedule filled with qualified, high-intent local opportunities.',
      icon: CalendarCheck,
    },
    {
      title: 'Conversion Tracking & APIs',
      outcome: 'Complete certainty on every marketing dollar',
      description: 'Full pipeline setup linking your CRM, scheduler, and visual forms directly to the Meta ads ecosystem. You see the exact source, cost, and revenue value for each scheduled consultation.',
      icon: Cpu,
    },
    {
      title: 'Campaign Optimization',
      outcome: 'Sustained momentum and drop in cost-per-lead',
      description: 'Active budget shifting, real-time pruning of duplicate targeting groups, and automatic creative rotation to counter ad fatigue, so your client volume remains consistent month after month.',
      icon: CheckCircle,
    },
    {
      title: 'Weekly Performance Reporting',
      outcome: 'Complete transparency, zero guesswork',
      description: 'Receive simplified, transparent performance stats detailing exactly how many opportunities, booked strategy meetings, and leads were generated, without the confusing technical ad-jargon.',
      icon: LineChart,
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 text-slate-900 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-emerald-600 font-semibold tracking-widest uppercase text-xs">
              Our Capabilities & Scope
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 text-slate-900 tracking-tight">
              What We Deliver
            </h2>
            <p className="mt-4 text-slate-600">
              We manage the entire system so you can focus on servicing clients. We take full responsibility for generating high-intent client inquiries for your sales schedule.
            </p>
          </div>
          <div className="bg-white px-5 py-4 rounded-xl border border-slate-200/60 shadow-sm max-w-sm">
            <div className="text-emerald-500 font-bold text-sm uppercase tracking-wider mb-1">Our Core Commitment:</div>
            <p className="text-xs text-slate-500 leading-relaxed">
              We don't focus on raw "likes" or "impressions." Every asset we build and optimization we run is focused on booking sales calls.
            </p>
          </div>
        </div>

        {/* Deliverables Grid - Outcomes focused */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200/50 hover:border-emerald-300 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-slate-100 flex flex-col justify-between group h-full"
                id={`deliverable-${index}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200 shadow shadow-slate-900/10">
                    <Icon size={20} className="stroke-[1.75]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-100 mt-2.5 mb-4">
                    Outcome: {item.outcome}
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
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
