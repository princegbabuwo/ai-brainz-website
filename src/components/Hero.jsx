'use client';

import Link from 'next/link';
import { ArrowRight, Bot, CheckCircle, Zap, Shield, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Gradient Blurs */}
      <div className="gradient-blur gradient-blur-purple w-[500px] h-[500px] -top-20 -right-20 animate-pulse-slow"></div>
      <div className="gradient-blur gradient-blur-blue w-[600px] h-[600px] -bottom-20 -left-20 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Wording & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Pill Accent */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700 tracking-wide">
              <Sparkles size={14} className="animate-spin-slow" />
              <span>PRACTICAL AI FOR MODERN BUSINESSES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] tracking-tight">
              Respond Faster. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                Convert More Leads.
              </span> <br />
              Operate Effortlessly.
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              We design and implement custom AI-powered systems for sales, customer support, and workflow automation. Built for businesses that need reliable execution, not guesswork.
            </p>

            {/* Quick value propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
              <div className="flex items-center gap-2.5 text-slate-700 font-medium">
                <CheckCircle size={18} className="text-indigo-600 shrink-0" />
                <span>Instant response to lead enquiries</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 font-medium">
                <CheckCircle size={18} className="text-indigo-600 shrink-0" />
                <span>Custom trained Support Agents</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 font-medium">
                <CheckCircle size={18} className="text-indigo-600 shrink-0" />
                <span>Automated, personalized follow-up</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 font-medium">
                <CheckCircle size={18} className="text-indigo-600 shrink-0" />
                <span>No complex coding required by you</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/#book" className="btn-primary text-center px-8 py-4 rounded-full text-base font-bold flex items-center justify-center gap-2 group">
                <span>Book Free AI Opportunity Review</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link href="/#quiz" className="btn-secondary text-center px-8 py-4 rounded-full text-base font-bold flex items-center justify-center gap-2">
                <span>Check AI Readiness Quiz</span>
              </Link>
            </div>

            {/* Trusted Integrations list */}
            <div className="pt-6 border-t border-slate-200/80">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Automating workflows across your favorite stack
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-semibold text-slate-400 text-sm">
                <span className="hover:text-slate-600 transition-colors">OpenAI</span>
                <span className="text-slate-200">•</span>
                <span className="hover:text-slate-600 transition-colors">Anthropic</span>
                <span className="text-slate-200">•</span>
                <span className="hover:text-slate-600 transition-colors">Zapier</span>
                <span className="text-slate-200">•</span>
                <span className="hover:text-slate-600 transition-colors">Make.com</span>
                <span className="text-slate-200">•</span>
                <span className="hover:text-slate-600 transition-colors">HubSpot</span>
                <span className="text-slate-200">•</span>
                <span className="hover:text-slate-600 transition-colors">Slack</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Dashboard Mock */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
            
            {/* Glow backing */}
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-lg opacity-10"></div>
            
            {/* Visual Glass Dashboard */}
            <div className="relative w-full max-w-[420px] glass-card rounded-2xl p-6 shadow-xl border border-slate-200/60 z-10 flex flex-col gap-6 select-none">
              
              {/* Header card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">AI Agent Live Monitor</h3>
                    <p className="text-[10px] text-slate-400 font-medium">Running 24/7/365</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>ACTIVE</span>
                </div>
              </div>

              {/* Stat grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Response Speed</p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-bold text-slate-800">2.1 min</span>
                    <span className="text-[10px] font-bold text-emerald-600">-98%</span>
                  </div>
                  <p className="text-[9px] text-slate-400 mt-0.5">Industry avg: 4.5 hrs</p>
                </div>

                <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Tasks Executed</p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-bold text-slate-800">14,289</span>
                    <span className="text-[10px] font-bold text-indigo-600">Zapier</span>
                  </div>
                  <p className="text-[9px] text-slate-400 mt-0.5">This billing cycle</p>
                </div>
              </div>

              {/* Progress bars / Metrics */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-500">Lead Response Capture Rate</span>
                  <span className="text-indigo-600 font-bold">99.4%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-[99.4%] h-full bg-indigo-600 rounded-full"></div>
                </div>

                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-500">Client Audit Bottlenecks Solved</span>
                  <span className="text-purple-600 font-bold">78%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-[78%] h-full bg-purple-600 rounded-full"></div>
                </div>
              </div>

              {/* Feed logs (Micro-activity simulator UI) */}
              <div className="space-y-2.5 pt-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Recent Automated Operations</p>
                
                <div className="flex items-start gap-2.5 text-xs text-slate-600">
                  <Zap size={14} className="text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">CRM Lead Synced</span>
                    <span className="text-[10px] text-slate-400 ml-1.5">2s ago</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-600">
                  <Shield size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">Support Agent Answered FAQ</span>
                    <span className="text-[10px] text-slate-400 ml-1.5">1m ago</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-600">
                  <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">Cal.com Time Booked</span>
                    <span className="text-[10px] text-slate-400 ml-1.5">5m ago</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
