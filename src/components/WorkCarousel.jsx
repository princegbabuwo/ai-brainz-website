'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star, Bot, Shield, CheckCircle } from 'lucide-react';

const SLIDES = [
  {
    title: 'AI Sales & Response Agent',
    description: 'A 24/7 web assistant that interacts with incoming traffic, qualifies leads, and schedules consultations automatically.',
    url: 'sales-agent.aibrainz.com',
    content: (
      <div className="flex flex-col h-full bg-slate-900 text-white font-sans text-xs select-none">
        {/* Sidebar + Chat Pane */}
        <div className="flex flex-1 overflow-hidden min-h-[220px]">
          {/* Side panel */}
          <div className="w-1/3 bg-slate-950 p-3 border-r border-slate-800 flex flex-col gap-2">
            <div className="text-[10px] font-bold text-slate-500 uppercase">Lead Qualification</div>
            <div className="bg-slate-900 p-2 rounded border border-indigo-500/20">
              <p className="font-bold text-white text-[10px]">John D. (Retail Owner)</p>
              <p className="text-[9px] text-emerald-400 mt-0.5">● Ready to Buy</p>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <p className="font-bold text-slate-400 text-[10px]">Sarah M. (Agency Partner)</p>
              <p className="text-[9px] text-indigo-400 mt-0.5">● Scheduling Review</p>
            </div>
          </div>
          {/* Chat Pane */}
          <div className="flex-1 p-3 flex flex-col justify-between bg-slate-900">
            <div className="space-y-2.5 overflow-y-auto max-h-[160px] pr-1">
              <div className="bg-slate-800 p-2 rounded-lg rounded-tl-none max-w-[85%] text-slate-200">
                Hi, I want to know if you can automate our customer booking schedule? We lose about 10 hours a week on it.
              </div>
              <div className="bg-indigo-600 p-2 rounded-lg rounded-tr-none max-w-[85%] ml-auto text-white">
                <div className="flex items-center gap-1 font-bold text-[9px] mb-0.5">
                  <Bot size={10} />
                  <span>AI Assistant</span>
                </div>
                Absolutely! We build custom calendar flows that connect booking directly to your CRM. Let's schedule a time to review it.
              </div>
            </div>
            {/* Input mock */}
            <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-slate-500 text-[10px]">
              <span>Type a message...</span>
              <span className="px-2 py-0.5 rounded bg-indigo-600 text-white text-[9px]">Send</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'AI Client Audit & Discovery Dashboard',
    description: 'Internal operations dashboard tracking lead qualification rates, response speeds, and automated integrations.',
    url: 'ops-dashboard.aibrainz.com',
    content: (
      <div className="h-full bg-slate-950 text-slate-300 font-sans p-4 text-xs select-none flex flex-col justify-between min-h-[220px]">
        {/* Metric widgets */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-slate-900 p-2 rounded border border-slate-800">
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Response Speed</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-base font-bold text-white">2.1m</span>
              <span className="text-[9px] text-emerald-500 font-bold">-98%</span>
            </div>
          </div>
          <div className="bg-slate-900 p-2 rounded border border-slate-800">
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Lead Conversion</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-base font-bold text-white">99.4%</span>
              <span className="text-[9px] text-indigo-400 font-bold">+12%</span>
            </div>
          </div>
          <div className="bg-slate-900 p-2 rounded border border-slate-800">
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Tasks Synced</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-base font-bold text-white">14,289</span>
              <span className="text-[9px] text-slate-400 font-bold">Zapier</span>
            </div>
          </div>
        </div>
        {/* Activity feed */}
        <div className="mt-3 space-y-2 bg-slate-900/60 p-2 rounded border border-slate-900">
          <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">Live Integration Logs</div>
          <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
            <CheckCircle size={10} className="text-emerald-500" />
            <span>CRM Database Sync Successful</span>
            <span className="ml-auto text-slate-600 text-[8px]">1s ago</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
            <Shield size={10} className="text-indigo-400" />
            <span>Outbound FAQ Response Dispatched</span>
            <span className="ml-auto text-slate-600 text-[8px]">4m ago</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'AI Multi-Channel SEO Pipeline',
    description: 'SEO content system that auto-repurposes core articles into Google briefs, LinkedIn highlights, and AI engine crawler maps.',
    url: 'seo-engine.aibrainz.com',
    content: (
      <div className="h-full bg-slate-900 text-slate-200 font-sans p-4 text-xs select-none flex gap-3 min-h-[220px]">
        {/* Outline creator */}
        <div className="w-1/2 bg-slate-950 p-2.5 rounded border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="text-[9px] font-bold text-slate-500 uppercase">Core Content Input</div>
            <p className="font-bold text-[10px] text-white mt-1.5 truncate">How AI Speeds Up Lead Booking</p>
            <div className="w-full bg-slate-900 h-1 mt-2 rounded-full overflow-hidden">
              <div className="w-[75%] h-full bg-indigo-600"></div>
            </div>
          </div>
          <div className="text-[9px] text-slate-400 mt-2 line-clamp-3 leading-relaxed">
            Standard sales follow-up delayed. Responding instantly via API triggers lead conversion. Custom templates mapping client parameters...
          </div>
        </div>
        {/* Pipeline channels */}
        <div className="flex-1 flex flex-col justify-between gap-1.5">
          <div className="text-[9px] font-bold text-slate-500 uppercase mb-1">Generated Output Targets</div>
          <div className="bg-slate-800 p-2 rounded flex items-center justify-between text-[10px]">
            <span className="font-semibold text-white">Google SEO Snippet</span>
            <span className="text-[8px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1 rounded">Active</span>
          </div>
          <div className="bg-slate-800 p-2 rounded flex items-center justify-between text-[10px]">
            <span className="font-semibold text-white">LinkedIn Executive Summary</span>
            <span className="text-[8px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-1 rounded">Active</span>
          </div>
          <div className="bg-slate-800 p-2 rounded flex items-center justify-between text-[10px]">
            <span className="font-semibold text-white">LLM Crawl Schema (llms.txt)</span>
            <span className="text-[8px] bg-purple-500/10 text-purple-400 border border-purple-500/20 px-1 rounded">Mapped</span>
          </div>
        </div>
      </div>
    )
  }
];

export default function WorkCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="work" className="py-24 relative bg-[#fafbfe] overflow-hidden">
      {/* Glow backgrounds */}
      <div className="ambient-glow glow-blue w-[400px] h-[400px] top-1/4 right-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
            Check our Work
          </h2>
          <p className="text-sm text-slate-500 max-w-lg mx-auto">
            Take a look at some of our custom AI implementation prototypes to see how we help businesses solve operational bottlenecks.
          </p>
        </div>

        {/* Carousel & Controls */}
        <div className="relative max-w-3xl mx-auto mt-4">
          
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-12 z-20">
            <button 
              onClick={prevSlide}
              className="p-2.5 rounded-full bg-white border border-slate-200/80 shadow-md text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer select-none"
              aria-label="Previous Slide"
            >
              <ArrowLeft size={16} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-12 z-20">
            <button 
              onClick={nextSlide}
              className="p-2.5 rounded-full bg-white border border-slate-200/80 shadow-md text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer select-none"
              aria-label="Next Slide"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Browser Container Frame Mockup */}
          <div className="premium-card rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white select-none">
            
            {/* Browser top-bar */}
            <div className="bg-slate-50 border-b border-slate-200/60 py-2.5 px-4 flex items-center gap-2">
              {/* Window dots */}
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              </div>
              {/* URL bar */}
              <div className="flex-1 max-w-xs mx-auto bg-slate-200/50 rounded-md py-1 px-3 text-[10px] text-slate-500 font-mono flex items-center justify-center">
                <span>{SLIDES[activeSlide].url}</span>
              </div>
            </div>

            {/* Slide Component Viewport */}
            <div className="min-h-[220px]">
              {SLIDES[activeSlide].content}
            </div>

          </div>

          {/* Title & Info Panel Under Browser */}
          <div className="text-center mt-6 space-y-1 px-4">
            <h3 className="font-extrabold text-slate-900 text-base font-display">
              {SLIDES[activeSlide].title}
            </h3>
            <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed">
              {SLIDES[activeSlide].description}
            </p>
          </div>

          {/* Slider Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full cursor-pointer slider-dot ${
                  activeSlide === index ? 'active bg-indigo-600 w-6' : 'bg-slate-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

        </div>

        {/* Customer Review/Rating Badge - Underneath Carousel */}
        <div className="mt-16 flex flex-col items-center justify-center gap-2">
          {/* Avatar Stack */}
          <div className="flex -space-x-2.5 select-none">
            <span className="w-7 h-7 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-indigo-700">JD</span>
            <span className="w-7 h-7 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-purple-700">SM</span>
            <span className="w-7 h-7 rounded-full bg-pink-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-pink-700">TK</span>
            <span className="w-7 h-7 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-700">AL</span>
          </div>
          {/* Star and review text */}
          <div className="flex items-center gap-1.5">
            <div className="flex text-yellow-400">
              <Star size={11} fill="currentColor" />
              <Star size={11} fill="currentColor" />
              <Star size={11} fill="currentColor" />
              <Star size={11} fill="currentColor" />
              <Star size={11} fill="currentColor" />
            </div>
            <span className="text-[11px] font-bold text-slate-800">
              5.0 Based On 145 Reviews
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
