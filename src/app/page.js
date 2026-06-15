import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import WorkCarousel from "@/components/WorkCarousel";
import AssessmentQuiz from "@/components/AssessmentQuiz";
import Booker from "@/components/Booker";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function Home() {
  return (
    <div className="relative w-full bg-[#fafbfe]">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Grid ("What We do") */}
      <ServicesGrid />

      {/* 3. Work Carousel ("Check our Work") */}
      <WorkCarousel />

      {/* 4. Onboarding Process Roadmap */}
      <ProcessTimeline />

      {/* 5. Pricing / Collaboration Section */}
      <section id="pricing" className="py-24 relative bg-[#fafbfe] overflow-hidden">
        {/* Glow backdrop */}
        <div className="ambient-glow glow-pink w-[450px] h-[450px] top-10 left-10"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side: Info & Call Meeting */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
                  Pricing
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
                  Check our flexible collaboration models to start implementing AI in your business, proving value with zero risk.
                </p>
              </div>

              {/* Schedule meeting card */}
              <div className="premium-card rounded-2xl p-8 border border-slate-200/80 bg-white/95 shadow-md space-y-6">
                <h3 className="text-lg font-extrabold text-slate-900 font-display">
                  Let's Schedule <br />
                  a Meeting
                </h3>
                <Link 
                  href="/#book" 
                  className="btn-pill-blue px-6 py-3 text-xs font-bold shadow-sm inline-block"
                >
                  Schedule Meeting
                </Link>
              </div>
            </div>

            {/* Right side: AI Pilot Program Card */}
            <div className="lg:col-span-7">
              <div className="premium-card rounded-3xl p-8 sm:p-10 border border-slate-200/80 bg-white shadow-lg space-y-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-slate-950 font-display">
                    AI Pilot Program
                  </h3>
                  <p className="text-xs text-slate-400">
                    Launch a single, focused AI assistant with zero risk.
                  </p>
                </div>

                {/* Features checklist */}
                <div className="space-y-4">
                  {[
                    "1 Custom AI assistant (Sales or Support)",
                    "Full software stack & API integration",
                    "30 days of active performance tuning",
                    "Complete knowledge base training",
                    "Live operations logs & analytics dashboard"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs font-semibold text-slate-600">
                      <div className="p-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0">
                        <Check size={12} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <hr className="border-slate-100" />

                {/* Price and Action */}
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
                      $2,500
                    </span>
                    <span className="text-xs text-slate-400 ml-1 font-semibold">/pilot</span>
                  </div>

                  <Link 
                    href="/#book" 
                    className="p-3.5 rounded-full bg-slate-950 text-white hover:bg-slate-800 transition-colors shadow-md"
                    aria-label="Get Started with AI Pilot"
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Assessment Quiz (Interactive Audit Diagnostic) */}
      <AssessmentQuiz />

      {/* 7. FAQs (Frequently Asked Questions in two-column grid) */}
      <FaqAccordion />

      {/* 8. Booker (Cal.com scheduler iframe) */}
      <Booker />

      {/* 9. Contact Form ("Let's Get in Touch") */}
      <ContactForm />
    </div>
  );
}

