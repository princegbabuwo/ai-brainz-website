'use client';

import { useState } from 'react';
import { Eye, FileText, CheckSquare, Wrench, ShieldAlert, Rocket } from 'lucide-react';

const STEPS = [
  {
    icon: Eye,
    stepNum: '01',
    title: 'AI Opportunity Review',
    description: 'We audit your business model, customer communications, sales pipelines, and software tools to assess where automation makes logical sense.'
  },
  {
    icon: FileText,
    stepNum: '02',
    title: 'Pain-Point Mapping',
    description: 'We pinpoint exactly where you are losing leads, hours, or operational efficiency (e.g. slow response, repetitive support questions).'
  },
  {
    icon: CheckSquare,
    stepNum: '03',
    title: 'System Recommendation',
    description: 'We outline the simplest, highest-impact AI solution to start with. We focus on launching a clean pilot project rather than complex bloat.'
  },
  {
    icon: Wrench,
    stepNum: '04',
    title: 'Build & Integration',
    description: 'We configure and program the AI workflows, connecting them directly to your existing systems (website, CRM, WhatsApp, email).'
  },
  {
    icon: ShieldAlert,
    stepNum: '05',
    title: 'Testing & Optimization',
    description: 'Before pushing live, we run extensive tests on the assistant’s tone, instructions accuracy, error fallbacks, and sync latency.'
  },
  {
    icon: Rocket,
    stepNum: '06',
    title: 'Launch & Expansion',
    description: 'The system runs autonomously. We analyze early logs to tune performance and then expand automation into additional business areas.'
  }
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="gradient-blur gradient-blur-blue w-[400px] h-[400px] -top-20 right-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700">
            <span>OUR ONBOARDING ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Get You Automating
          </h2>
          <p className="text-base text-slate-600">
            From analysis to deployment, our process is designed to implement practical AI systems quickly, with zero coding overhead on your team.
          </p>
        </div>

        {/* Desktop View: Split layout with Active Step details */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Step Selector */}
          <div className="col-span-5 space-y-3">
            {STEPS.map((step, index) => {
              const IconComp = step.icon;
              const isActive = activeStep === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-4 rounded-xl border flex items-center gap-4 transition-all duration-300 cursor-pointer ${isActive ? 'bg-indigo-600 border-indigo-600 text-white shadow-md' : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-700'}`}
                >
                  <span className={`font-mono text-sm font-bold ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}>
                    {step.stepNum}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    <IconComp size={18} />
                  </div>
                  <span className="font-bold text-sm sm:text-base flex-1">{step.title}</span>
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
                    {STEPS[activeStep].stepNum}
                  </span>
                  <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl">
                    {(() => {
                      const Icon = STEPS[activeStep].icon;
                      return <Icon size={36} />;
                    })()}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900 font-display">
                    {STEPS[activeStep].title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {STEPS[activeStep].description}
                  </p>
                </div>
              </div>
              
              <div className="pt-6 mt-6 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span>Phase {activeStep + 1} of 6</span>
                <span>AI Brainz Integration Protocol</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Vertical scroll list */}
        <div className="lg:hidden space-y-6">
          {STEPS.map((step, index) => {
            const IconComp = step.icon;
            return (
              <div 
                key={index}
                className="glass-card rounded-xl p-6 border border-slate-200 bg-white shadow-sm flex items-start gap-4"
              >
                <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl shrink-0">
                  <IconComp size={22} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-xs font-bold text-indigo-500 uppercase tracking-wider">Step {step.stepNum}</span>
                    <h3 className="font-bold text-slate-900 text-lg">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
