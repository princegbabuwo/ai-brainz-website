'use client';

import { Building2, BriefcaseBusiness, Home, ShoppingBag, Users, Repeat2, Clock3, TrendingUp } from 'lucide-react';

const AUDIENCES = [
  { icon: Building2, label: 'Service Businesses' },
  { icon: BriefcaseBusiness, label: 'Agencies & Consultants' },
  { icon: Home, label: 'Real Estate Teams' },
  { icon: ShoppingBag, label: 'E-commerce Brands' },
  { icon: Users, label: 'B2B & Startup Teams' }
];

const SIGNALS = [
  { icon: Clock3, label: 'Slow response' },
  { icon: Repeat2, label: 'Repetitive enquiries' },
  { icon: TrendingUp, label: 'Leaky sales follow-up' }
];

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="py-16 relative bg-[#fafbfe] overflow-hidden">
      <div className="ambient-glow glow-blue w-[360px] h-[360px] top-0 right-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-indigo-600">
              Who We Help
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
              Built for teams with costly manual gaps.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-5">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {AUDIENCES.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="premium-card premium-card-hover rounded-2xl p-4 min-h-[112px] flex flex-col justify-between">
                    <Icon size={18} className="text-indigo-600" />
                    <span className="text-xs font-extrabold text-slate-800 leading-snug">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              {SIGNALS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-bold text-slate-600 shadow-sm">
                    <Icon size={14} className="text-emerald-600" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
