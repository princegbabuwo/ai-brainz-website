'use client';

import { Bot, SearchCheck, Zap } from 'lucide-react';

const SERVICES = [
  {
    icon: Bot,
    title: 'Custom AI Integration',
    description: 'We integrate AI for businesses by building Agentic AI solutions that solve problems specific to the business.'
  },
  {
    icon: SearchCheck,
    title: 'AI Discovery',
    description: 'We set up discovery pipelines that help businesses enhance their business discovery online and stay visible on modern AI & search engines.'
  },
  {
    icon: Zap,
    title: 'Workflow & Lead Automation',
    description: 'Streamline operations with smart workflow automation and sales lead systems to capture opportunities and eliminate manual admin work.'
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 relative bg-[#fafbfe] overflow-hidden">
      {/* Background blurs */}
      <div className="ambient-glow glow-purple w-[400px] h-[400px] -top-20 -left-20"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title Section */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
            What We do
          </h2>
        </div>

        {/* 3-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="premium-card premium-card-hover rounded-2xl p-8 min-h-[220px] flex flex-col justify-between"
              >
                <div>
                  <div className="text-slate-600 mb-6 inline-block p-3 rounded-xl bg-slate-100/70 border border-slate-200/40">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base mb-3 font-display">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                    {service.description}
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

