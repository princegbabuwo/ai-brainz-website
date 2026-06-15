'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#fafbfe] pt-12 pb-16 px-4 overflow-hidden">
      {/* Background ambient blurs */}
      <div className="ambient-glow glow-blue w-[400px] h-[400px] bottom-0 right-10"></div>
      
      {/* White rounded card wrapper */}
      <div className="max-w-6xl mx-auto bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* Logo & Description */}
          <div className="space-y-4 max-w-sm">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-7 h-7">
                <Image 
                  src="/logo.svg" 
                  alt="AI Brainz Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display font-extrabold text-lg tracking-tight text-slate-950">
                AI Brainz
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Ready to automate your operations? Contact us today to schedule your consultation and see how custom AI pipelines can scale your team.
            </p>
          </div>

          {/* Navigation links (Horizontal layout) */}
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-semibold text-slate-600">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <Link href="/#services" className="hover:text-indigo-600 transition-colors">Services</Link>
            <Link href="/#process" className="hover:text-indigo-600 transition-colors">Our Process</Link>
            <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
            <Link href="/#faq" className="hover:text-indigo-600 transition-colors">FAQs</Link>
          </nav>
        </div>

        {/* Divider */}
        <hr className="border-slate-100 my-8 sm:my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div>
            <p className="font-sans">
              Made with love powered by <span className="font-bold text-slate-600">aibrainz.com</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-slate-500">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors p-1.5 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors p-1.5 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors p-1.5 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
            <a href="https://aibrainz.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors p-1.5 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
              <Globe size={14} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

