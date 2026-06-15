'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-44 pb-32 overflow-hidden bg-grid-pattern bg-[#fafbfe]">
      {/* Target UI Mesh Gradient Glow Overlay */}
      <div className="hero-glow-overlay"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Main Headline - Centered, Large, and Bold */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.1] max-w-4xl mx-auto">
          Awesome AI Automation <br />
          & Growth Systems for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
            Modern Businesses
          </span>
        </h1>

        {/* CTA Button - Centered, Dark, Pill-Shaped */}
        <div className="mt-10">
          <Link href="/#contact" className="btn-pill-dark px-8 py-3.5 text-sm font-bold shadow-md inline-flex items-center gap-2">
            <span>Get in Touch</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

