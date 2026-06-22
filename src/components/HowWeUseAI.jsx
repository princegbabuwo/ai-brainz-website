'use client';

import { Search, FileStack, MessageSquareText, DatabaseZap } from 'lucide-react';

const SYSTEMS = [
  {
    icon: Search,
    title: 'Discovery',
    text: 'Research businesses, spot bottlenecks, and map where AI can create lift.'
  },
  {
    icon: FileStack,
    title: 'Strategy Assets',
    text: 'Create concise decks, explainers, and implementation notes for better first calls.'
  },
  {
    icon: MessageSquareText,
    title: 'Follow-Up',
    text: 'Keep outreach, reminders, and next steps consistent without sounding robotic.'
  },
  {
    icon: DatabaseZap,
    title: 'Knowledge Base',
    text: 'Turn client lessons, FAQs, and workflows into repeatable operating intelligence.'
  }
];

export default function HowWeUseAI() {
  return (
    <section id="how-we-use-ai" className="py-16 relative bg-slate-50 overflow-hidden">
      <div className="ambient-glow glow-pink w-[420px] h-[420px] -top-10 left-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4 p-8 sm:p-10 bg-slate-950 text-white">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-indigo-300">
                How We Use AI
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold font-display leading-tight">
                We run AI Brainz with the systems we build.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Our agency uses AI for research, outreach, content, notes, and delivery intelligence.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2">
              {SYSTEMS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className={`p-6 sm:p-8 border-slate-200/80 ${index < 2 ? 'sm:border-b' : ''} ${index % 2 === 0 ? 'sm:border-r' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-extrabold text-slate-950 text-base font-display">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-6">
                      {item.text}
                    </p>
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
