'use client';

import { useState } from 'react';
import { Search, DatabaseZap, MessageSquareText, NotebookPen, ScanSearch, BotMessageSquare } from 'lucide-react';

const SYSTEMS = [
  {
    icon: Search,
    stepNum: '01',
    title: 'Lead Discovery',
    text: 'We built pipelines that finds businesses in high-value markets where AI can create meaningful improvement.'
  },
  {
    icon: DatabaseZap,
    stepNum: '02',
    title: 'Business Research',
    text: 'We use AI to build a focused business knowledge base and identify pain points for outreach.'
  },
  {
    icon: MessageSquareText,
    stepNum: '03',
    title: 'Outreach & Follow-ups',
    text: 'We send automated custom outreach and use AI to keep follow-ups timely, relevant, and consistent.'
  },
  {
    icon: NotebookPen,
    stepNum: '04',
    title: 'Call Intelligence',
    text: 'We use AI to take notes and document meetings so needs, objections, and actions are not missed.'
  },
  {
    icon: ScanSearch,
    stepNum: '05',
    title: 'Content & SEO',
    text: 'We built a workflows to monitor public questions, create useful content, and improve discoverability.'
  },
  {
    icon: BotMessageSquare,
    stepNum: '06',
    title: 'AI Engine Optimization',
    text: 'We built workflows to track AI-engine references so recommendations stays updated & accurate.'
  }
];

export default function HowWeUseAI() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-we-use-ai" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background ambient blurs */}
      <div className="ambient-glow glow-pink w-[420px] h-[420px] -top-10 left-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700">
            <span>HOW WE USE AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            AI is not just what we sell. It is how we operate.
          </h2>
          <p className="text-base text-slate-600">
            We do not just recommend AI. We run our agency with it.
            <br></br>
            We use AI internally to research, identify, create, outreach, document, and manage a lean but highly capable agency operation.
          </p>
        </div>

        {/* Desktop View: Interactive Split layout */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Selector */}
          <div className="col-span-5 space-y-3">
            {SYSTEMS.map((system, index) => {
              const IconComp = system.icon;
              const isActive = activeStep === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-4 rounded-xl border flex items-center gap-4 transition-all duration-300 cursor-pointer ${isActive
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-md'
                      : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-700'
                    }`}
                >
                  <span className={`font-mono text-sm font-bold ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}>
                    {system.stepNum}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    <IconComp size={18} />
                  </div>
                  <span className="font-bold text-sm sm:text-base flex-1">{system.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Active Step Card */}
          <div className="col-span-7 h-full flex items-center justify-center">
            <div className="glass-card rounded-2xl p-10 border border-slate-200/80 bg-white/95 w-full min-h-[300px] flex flex-col justify-between shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-5xl font-extrabold text-indigo-100 leading-none">
                    {SYSTEMS[activeStep].stepNum}
                  </span>
                  <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl">
                    {(() => {
                      const Icon = SYSTEMS[activeStep].icon;
                      return <Icon size={36} />;
                    })()}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900 font-display">
                    {SYSTEMS[activeStep].title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {SYSTEMS[activeStep].text}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span>System {activeStep + 1} of {SYSTEMS.length}</span>
                <span>AI Brainz Operations Stack</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Compact cards */}
        <div className="lg:hidden space-y-6">
          {SYSTEMS.map((system, index) => {
            const IconComp = system.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-xl p-6 border border-slate-200 bg-white shadow-sm flex items-start gap-4"
              >
                <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl shrink-0">
                  <IconComp size={22} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-900 text-lg">{system.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{system.text}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
