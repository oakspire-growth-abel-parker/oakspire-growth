import React from 'react';
import Logo from './Logo';
import { Target, Award, EyeOff } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white scroll-mt-10 overflow-hidden relative">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Logo Visual Anchor Left */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="p-12 bg-slate-800/40 border border-slate-800/80 rounded-3xl w-full max-w-sm flex justify-center shadow-2xl">
              <Logo variant="stacked" iconColor="#FFFFFF" textColor="#FFFFFF" />
            </div>
          </div>

          {/* Description Text Column Right */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-emerald-400 font-semibold tracking-widest uppercase text-xs">
                Our Foundation
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                About Oakspire Growth
              </h2>
            </div>

            <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed">
              <p>
                Oakspire Growth is a performance-driven lead generation agency focused exclusively on helping service businesses generate qualified opportunities through paid social advertising on Facebook and Instagram.
              </p>
              <p>
                We operate with a simple, laser-focused mission:{' '}
                <strong className="text-emerald-400 font-semibold">
                  Help local businesses create a highly predictable, repeatable flow of client opportunities using paid social systems.
                </strong>
              </p>
              <p className="text-sm text-slate-400">
                Unlike traditional multi-service agencies that dilute their attention across branding, social media posting, or event PR, we focus on engineering paid social systems. We work behind the scenes as a silent partner, managing the complete tracking, optimization, and creative cycle, so you have full certainty on your customer acquisition numbers.
              </p>
            </div>

            {/* Faceless trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="flex gap-3 items-center">
                <div className="p-2 rounded bg-slate-800 text-emerald-400">
                  <Target size={16} />
                </div>
                <span className="text-xs font-semibold text-slate-300">
                  100% Meta Ads Focus Niche
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="p-2 rounded bg-slate-800 text-emerald-400">
                  <EyeOff size={16} />
                </div>
                <span className="text-xs font-semibold text-slate-300">
                  Faceless, Behind-the-Scenes Partner
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
