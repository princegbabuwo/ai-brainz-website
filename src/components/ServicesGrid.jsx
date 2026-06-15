'use client';

import { Bot, MessageSquare, UserCheck, CalendarRange, SearchCheck, Zap } from 'lucide-react';
import Image from 'next/image';

const SERVICES = [
  {
    icon: Bot,
    title: 'AI Sales Assistant',
    description: '24/7 web agent to qualify leads, answer enquiries, and schedule consultations.'
  },
  {
    icon: MessageSquare,
    title: 'AI Support Assistant',
    description: 'Trained on your knowledge base to resolve customer queries instantly.'
  },
  {
    icon: UserCheck,
    title: 'AI Lead Follow-Up System',
    description: 'Automated nurturing workflows to convert prospects into booked calls.'
  },
  {
    icon: CalendarRange,
    title: 'AI Booking & Scheduling',
    description: 'Interactive calendars connecting enquiries to availability automatically.'
  },
  {
    icon: SearchCheck,
    title: 'AI Content & SEO Pipeline',
    description: 'Slick content pipeline built to optimize across search & LLM channels.'
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description: 'Integrate forms, CRMs, and messaging apps to eliminate manual admin work.'
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

        {/* 8-Card Grid Layout (4-columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: AI Sales Assistant */}
          <div className="premium-card premium-card-hover rounded-2xl p-6 min-h-[190px] flex flex-col justify-between">
            <div>
              <div className="text-slate-600 mb-4 inline-block p-2 rounded-xl bg-slate-100/70 border border-slate-200/40">
                <Bot size={18} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm mb-2 font-display">
                {SERVICES[0].title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                {SERVICES[0].description}
              </p>
            </div>
          </div>

          {/* Card 2: AI Support Assistant */}
          <div className="premium-card premium-card-hover rounded-2xl p-6 min-h-[190px] flex flex-col justify-between">
            <div>
              <div className="text-slate-600 mb-4 inline-block p-2 rounded-xl bg-slate-100/70 border border-slate-200/40">
                <MessageSquare size={18} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm mb-2 font-display">
                {SERVICES[1].title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                {SERVICES[1].description}
              </p>
            </div>
          </div>

          {/* Card 3: AI Lead Follow-Up System */}
          <div className="premium-card premium-card-hover rounded-2xl p-6 min-h-[190px] flex flex-col justify-between">
            <div>
              <div className="text-slate-600 mb-4 inline-block p-2 rounded-xl bg-slate-100/70 border border-slate-200/40">
                <UserCheck size={18} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm mb-2 font-display">
                {SERVICES[2].title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                {SERVICES[2].description}
              </p>
            </div>
          </div>

          {/* Card 4: AI Booking & Scheduling */}
          <div className="premium-card premium-card-hover rounded-2xl p-6 min-h-[190px] flex flex-col justify-between">
            <div>
              <div className="text-slate-600 mb-4 inline-block p-2 rounded-xl bg-slate-100/70 border border-slate-200/40">
                <CalendarRange size={18} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm mb-2 font-display">
                {SERVICES[3].title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                {SERVICES[3].description}
              </p>
            </div>
          </div>

          {/* Card 5: AI Content & SEO Pipeline */}
          <div className="premium-card premium-card-hover rounded-2xl p-6 min-h-[190px] flex flex-col justify-between">
            <div>
              <div className="text-slate-600 mb-4 inline-block p-2 rounded-xl bg-slate-100/70 border border-slate-200/40">
                <SearchCheck size={18} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm mb-2 font-display">
                {SERVICES[4].title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                {SERVICES[4].description}
              </p>
            </div>
          </div>

          {/* Card 6: Solid Indigo Brand Card (Rotating Neural Brain SVG) */}
          <div className="bg-[#4f46e5] rounded-2xl p-6 min-h-[190px] flex items-center justify-center relative overflow-hidden group shadow-md border border-indigo-700/35">
            {/* Background design */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-700/60 to-purple-600/40 opacity-70 group-hover:scale-105 transition-transform duration-500"></div>
            
            {/* Rotating SVG Neural Network Brain */}
            <svg 
              className="relative z-10 w-20 h-20 text-white opacity-90 animate-spin-slow" 
              viewBox="0 0 100 100" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <circle cx="50" cy="50" r="8" fill="currentColor" />
              <line x1="50" y1="50" x2="20" y2="30" strokeDasharray="3 3" />
              <line x1="50" y1="50" x2="80" y2="30" strokeDasharray="3 3" />
              <line x1="50" y1="50" x2="20" y2="70" strokeDasharray="3 3" />
              <line x1="50" y1="50" x2="80" y2="70" strokeDasharray="3 3" />
              <circle cx="20" cy="30" r="5" fill="currentColor" />
              <circle cx="80" cy="30" r="5" fill="currentColor" />
              <circle cx="20" cy="70" r="5" fill="currentColor" />
              <circle cx="80" cy="70" r="5" fill="currentColor" />
              <path d="M20,30 L80,30 L80,70 L20,70 Z" strokeWidth="1" opacity="0.4" />
            </svg>
          </div>

          {/* Card 7: AI Internal Workflow Automation */}
          <div className="premium-card premium-card-hover rounded-2xl p-6 min-h-[190px] flex flex-col justify-between">
            <div>
              <div className="text-slate-600 mb-4 inline-block p-2 rounded-xl bg-slate-100/70 border border-slate-200/40">
                <Zap size={18} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm mb-2 font-display">
                {SERVICES[5].title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                {SERVICES[5].description}
              </p>
            </div>
          </div>

          {/* Card 8: High-quality consulting illustration image */}
          <div className="rounded-2xl overflow-hidden relative min-h-[190px] h-full shadow-sm border border-slate-200/40">
            <Image 
              src="/service-collaboration.png" 
              alt="AI Consultation" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-w-768px) 100vw, 25vw"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

