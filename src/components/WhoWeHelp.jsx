'use client';

import { Building2, BriefcaseBusiness, Home, ShoppingBag, Users, Repeat2, Clock3, TrendingUp, Search, AlertCircle } from 'lucide-react';

const AUDIENCES = [
  {
    icon: BriefcaseBusiness,
    label: 'Professional Services',
    examples: 'Accountants, CPA firms, Law offices, Attorneys, and Architects.'
  },
  {
    icon: Building2,
    label: 'Service Businesses',
    examples: 'Auto/RV dealerships, HVAC companies, Plumbing firms, and Local Contractors.'
  },
  {
    icon: Home,
    label: 'Real Estate Firms',
    examples: 'Real estate brokerages, leasing agencies, and property management firms.'
  },
  {
    icon: Users,
    label: 'Agencies & Consultants',
    examples: 'Marketing agencies, design studios, IT consulting firms, and recruiters.'
  },
  {
    icon: ShoppingBag,
    label: 'B2B Companies',
    examples: 'Growth-stage software companies, manufacturers, and corporate services.'
  }
];

const SIGNALS = [
  { icon: Repeat2, label: 'Repetitive enquiries.' },
  { icon: Clock3, label: 'Stale/Slow responses' },
  { icon: AlertCircle, label: 'Slow/Manual operations' },
  { icon: Search, label: 'Poor business discoveries' }
];

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="py-24 relative bg-[#fafbfe] overflow-hidden">
      {/* Background ambient blurs */}
      <div className="ambient-glow glow-blue w-[400px] h-[400px] -top-10 right-10"></div>
      <div className="ambient-glow glow-purple w-[300px] h-[300px] -bottom-10 left-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col gap-4 mb-16 max-w-4xl">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-indigo-600">
            Who We Help
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 font-display leading-tight">
            We help businesses & professionals adapt to the speed of AI.
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl">
            Traditional processes can&apos;t keep pace with modern client expectations. We design and deploy custom AI automation, lead follow-ups, and customer journey systems that keep your business responsive, scale your execution, and match the speed of today&apos;s market.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {AUDIENCES.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="premium-card premium-card-hover rounded-2xl p-5 flex flex-col justify-between space-y-6">
                <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100/50 w-fit">
                  <Icon size={20} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-extrabold text-slate-950 font-display">
                    {item.label}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    {item.examples}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottleneck signals list */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 pt-6 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center lg:text-left lg:mr-2">
            We solve bottlenecks like:
          </span>
          <div className="flex flex-wrap justify-center gap-2">
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
    </section>
  );
}
