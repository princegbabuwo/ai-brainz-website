'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Brand Card */}
        <div className="md:col-span-6 space-y-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8 filter brightness-0 invert">
              <Image 
                src="/logo.svg" 
                alt="AI Brainz Logo" 
                fill
                className="object-contain"
              />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              AI Brainz
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-sm">
            AI Brainz builds practical AI-powered systems for sales, customer support, lead follow-up, content operations, and business growth.
          </p>
        </div>

        {/* Links Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-display font-bold text-sm tracking-wider uppercase text-white">Navigation</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/#process" className="hover:text-white transition-colors">Our Process</Link></li>
            <li><Link href="/#quiz" className="hover:text-white transition-colors">AI Audit Quiz</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Operations</Link></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-display font-bold text-sm tracking-wider uppercase text-white">Resources</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/#faq" className="hover:text-white transition-colors">FAQs</Link></li>
            <li><a href="/llms.txt" className="hover:text-white transition-colors">llms.txt (AI Profile)</a></li>
            <li><a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2026 AI Brainz. Built for operational execution, not guesswork.</p>
        <p className="text-slate-500">All rights reserved.</p>
      </div>
    </footer>
  );
}
