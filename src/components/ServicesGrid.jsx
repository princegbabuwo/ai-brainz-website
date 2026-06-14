'use client';

import { Bot, UserCheck, MessageSquare, CalendarRange, SearchCheck, Zap } from 'lucide-react';

const SERVICES = [
  {
    icon: Bot,
    title: 'AI Sales Assistant',
    description: 'A customer-facing agent that interacts with web traffic 24/7. It answers complex inquiries, qualifies prospects instantly, collects critical details, and maps scheduling options without delay.',
    accent: 'from-blue-500 to-indigo-500',
    large: true,
  },
  {
    icon: MessageSquare,
    title: 'AI Support Assistant',
    description: 'A dedicated support system trained strictly on your business knowledge base, product documentations, and service policies to answer customer support tickets instantly.',
    accent: 'from-purple-500 to-pink-500',
    large: false,
  },
  {
    icon: UserCheck,
    title: 'AI Lead Follow-Up System',
    description: 'A structured automated workflow designed to nurture leads, check in on inactive prospects, share case studies, and convert interest to booked calls consistently.',
    accent: 'from-amber-500 to-orange-500',
    large: false,
  },
  {
    icon: SearchCheck,
    title: 'AI Content & SEO Pipeline',
    description: 'A full content creation framework configured for Multi-Channel Search Optimization. We set up systems that generate scripts, write optimization briefs, and adapt authority articles to rank across Google, AI scrapers, and socials.',
    accent: 'from-emerald-500 to-teal-500',
    large: true,
  },
  {
    icon: CalendarRange,
    title: 'AI Booking & Scheduling Flow',
    description: 'Interactive scheduling tunnels that link enquiries to calendar availability automatically. Reduces friction by removing back-and-forth email loops entirely.',
    accent: 'from-sky-500 to-blue-500',
    large: false,
  },
  {
    icon: Zap,
    title: 'AI Internal Workflow Automation',
    description: 'Quiet, behind-the-scenes automations connecting your contact forms, CRM sheets, invoicing, and messaging systems to reduce team manual administrative friction.',
    accent: 'from-rose-500 to-red-500',
    large: false,
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 relative bg-white">
      {/* Background blurs */}
      <div className="gradient-blur gradient-blur-purple w-[450px] h-[450px] top-1/3 left-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Section */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
            <span>PRACTICAL IMPLEMENTATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            AI Systems Built to Run <br />
            Your Operations on Autopilot.
          </h2>
          <p className="text-lg text-slate-600 max-w-xl">
            We do not sell abstract code or complex tutorials. We build operational AI assistants that address specific bottlenecks and convert leads.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between ${service.large ? 'md:col-span-2' : 'md:col-span-1'}`}
              >
                <div className="space-y-6">
                  {/* Icon Card */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-sm`}>
                    <IconComponent size={24} />
                  </div>
                  
                  {/* Wording */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 font-display">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Bottom line */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  <span>Fully Custom Integration</span>
                  <span>•</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
