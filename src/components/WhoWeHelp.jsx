'use client';

import { Building2, BriefcaseBusiness } from 'lucide-react';

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="py-24 relative bg-[#fafbfe] overflow-hidden">
      {/* Background ambient blurs */}
      <div className="ambient-glow glow-blue w-[400px] h-[400px] -top-10 right-10"></div>
      <div className="ambient-glow glow-purple w-[300px] h-[300px] -bottom-10 left-10"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-indigo-600">
            Who We Help
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 font-display leading-tight">
            Built for Businesses, <br className="hidden sm:inline" />Not Teams.
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto">
            We build custom AI automation and growth systems for businesses ready to remove costly manual bottlenecks and scale operations.
          </p>
        </div>

        {/* 2 Centered Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Professionals */}
          <div className="premium-card premium-card-hover rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center justify-between space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm shadow-indigo-100/50">
              <BriefcaseBusiness size={32} strokeWidth={1.5} />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-extrabold text-slate-950 font-display">
                Professionals
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                Accountants, lawyers, contractors, and independent practitioners looking to streamline client interactions and automate repetitive workflows.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {['Accountants', 'Lawyers', 'Contractors', 'Consultants'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border border-slate-200/50 bg-slate-50 text-[10px] sm:text-[11px] font-extrabold text-slate-500">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Service Businesses */}
          <div className="premium-card premium-card-hover rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center justify-between space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600 shadow-sm shadow-pink-100/50">
              <Building2 size={32} strokeWidth={1.5} />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-extrabold text-slate-950 font-display">
                Service Businesses
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                Dealerships, real estate agencies, local service providers, and customer-centric businesses wanting faster lead responses and booking flows.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {['Dealerships', 'Real Estate', 'Service Providers', 'Agencies'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border border-slate-200/50 bg-slate-50 text-[10px] sm:text-[11px] font-extrabold text-slate-500">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
