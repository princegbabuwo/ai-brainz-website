import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import AssessmentQuiz from "@/components/AssessmentQuiz";
import Booker from "@/components/Booker";
import FaqAccordion from "@/components/FaqAccordion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Grid */}
      <ServicesGrid />

      {/* 3. Process Timeline */}
      <ProcessTimeline />

      {/* 4. Assessment Quiz (Interactive Interest Form) */}
      <div className="bg-slate-50/50 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
            <span>SELF-ASSESSMENT TOOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Ready is Your Business for AI?
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            Answer a few quick questions to receive a personalized automation audit rating and recommendation.
          </p>
        </div>
        <AssessmentQuiz />
      </div>

      {/* 5. Dedicated Cal.com Booker Section */}
      <Booker />

      {/* 6. Dual CTA Cards Banners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="glass-card rounded-2xl p-8 sm:p-10 border border-slate-200/80 bg-slate-50/20 flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div className="gradient-blur gradient-blur-purple w-[300px] h-[300px] -top-20 -right-20 group-hover:scale-105 transition-transform duration-500"></div>
            <div className="space-y-4 relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Request an AI Pilot Project
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Want to test a single, focused AI system (like a Lead Response Assistant or FAQ support agent) with lower risk? Request a customized pilot project.
              </p>
            </div>
            <div className="relative z-10 pt-4">
              <Link href="/#book" className="btn-primary px-6 py-3 rounded-full text-sm font-bold inline-flex items-center gap-2 group/btn">
                <span>Initiate AI Pilot</span>
                <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card rounded-2xl p-8 sm:p-10 border border-slate-200/80 bg-slate-50/20 flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div className="gradient-blur gradient-blur-pink w-[300px] h-[300px] -bottom-20 -left-20 group-hover:scale-105 transition-transform duration-500"></div>
            <div className="space-y-4 relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                See How We Run AI Brainz
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We don’t just build AI systems for clients. We run our own marketing, outreach, research, and notes pipelines internally with AI. Read our transparency reports.
              </p>
            </div>
            <div className="relative z-10 pt-4">
              <Link href="/blog" className="btn-secondary px-6 py-3 rounded-full text-sm font-bold inline-flex items-center gap-2">
                <span>Read Operations Blog</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <FaqAccordion />
    </div>
  );
}
