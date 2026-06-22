'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-44 pb-32 overflow-hidden bg-grid-pattern bg-[#fafbfe]">
      {/* Target UI Mesh Gradient Glow Overlay */}
      <div className="hero-glow-overlay"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Main Headline - Centered, Large, and Bold */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.1] max-w-4xl mx-auto">
          Scale Your Business with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
            Custom AI Workflows
          </span>
        </h1>

        <ul className="hidden sm:flex mt-6 max-w-4xl mx-auto flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-600 leading-6 list-none">
          <li className="inline-flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-indigo-600 shrink-0" aria-hidden="true" />
            <span>Automate support and repetitive workflows</span>
          </li>
          <li className="inline-flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-indigo-600 shrink-0" aria-hidden="true" />
            <span>Improve discoverability and sales momentum</span>
          </li>
          <li className="inline-flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-indigo-600 shrink-0" aria-hidden="true" />
            <span>Remove manual friction across operations</span>
          </li>
        </ul>

        <p className="mt-10 text-sm font-bold uppercase tracking-[0.28em] text-indigo-600">
          Get started, Book a Free Consultation with us
        </p>

        {/* CTA Buttons - Centered, Pill-Shaped */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/#contact" className="btn-pill-dark px-8 py-3.5 text-sm font-bold shadow-md inline-flex items-center gap-2">
            <span>Book Consultation</span>
          </Link>
          <Link href="/#how-we-use-ai" className="btn-pill-blue px-8 py-3.5 text-sm font-bold shadow-md inline-flex items-center gap-2">
            <span>See How We Use AI</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
