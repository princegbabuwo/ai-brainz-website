'use client';

import { Bot, Layout, Zap, Code2, CheckCircle2 } from 'lucide-react';

const SERVICES = [
  {
    icon: Bot,
    title: 'Custom AI Integration',
    badge: 'Core Focus',
    description: 'We integrate AI for businesses by integrating Automated solutions that solve problems specific to the business.',
    points: [
      'Custom Agentic workflows & autonomous task bots',
      'LLM fine-tuning, system prompts & internal knowledge bases',
      'Intelligent document processing & automated CRM sync'
    ]
  },
  {
    icon: Layout,
    title: 'Web Design & Development',
    badge: 'Design & UI/UX',
    description: 'Modern, responsive, conversion-focused websites and web applications built to elevate your brand and turn visitors into clients.',
    points: [
      'Bespoke website design & modern responsive UI/UX',
      'High-converting landing pages & web applications',
      'Fast loading speed, SEO optimization & CMS integration'
    ]
  },
  {
    icon: Zap,
    title: 'Workflow & Lead Automation',
    badge: 'Operations',
    description: 'Streamline operations with smart workflow automation and sales lead systems to capture opportunities and eliminate manual admin work.',
    points: [
      'Automated lead capture, qualification & instant follow-ups',
      'Multi-platform connections (Email, WhatsApp, CRM, Slack)',
      'Elimination of repetitive manual back-office tasks'
    ]
  },
  {
    icon: Code2,
    title: 'General Tech & Custom Solutions',
    badge: 'Tech Services',
    description: 'Comprehensive technical services, custom software engineering, and digital infrastructure to solve complex operational challenges.',
    points: [
      'Custom software development & internal business tools',
      'API integrations, webhooks & database synchronization',
      'Technical consulting, maintenance & infrastructure support'
    ]
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 relative bg-[#fafbfe] overflow-hidden">
      {/* Background blurs */}
      <div className="ambient-glow glow-purple w-[400px] h-[400px] -top-20 -left-20"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title Section */}
        <div className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700 mb-4">
            <span>WHAT WE DO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
            Custom AI Integrations & Full-Spectrum Tech Solutions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
            While our flagship focus is engineering custom AI automations, we also build modern websites and provide end-to-end tech solutions to support your entire digital operation.
          </p>
        </div>

        {/* 4-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="premium-card premium-card-hover rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-slate-200/80 bg-white/90 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-slate-700 p-3 rounded-xl bg-slate-100/80 border border-slate-200/60 inline-flex items-center justify-center">
                      <Icon size={22} className="text-indigo-600" />
                    </div>
                    {service.badge && (
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                        service.badge === 'Core Focus' 
                          ? 'bg-indigo-50 text-indigo-700 border-indigo-200/80 font-extrabold' 
                          : 'bg-slate-50 text-slate-600 border-slate-200'
                      }`}>
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl mb-3 font-display">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                    {service.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <CheckCircle2 size={15} className="text-indigo-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
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
