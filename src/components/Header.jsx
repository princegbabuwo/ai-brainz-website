'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-header py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/logo.svg" 
              alt="AI Brainz Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-slate-900">
            AI Brainz
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/#services" className="hover:text-indigo-600 transition-colors">Services</Link>
          <Link href="/#process" className="hover:text-indigo-600 transition-colors">Our Process</Link>
          <Link href="/#quiz" className="hover:text-indigo-600 transition-colors">AI Audit Quiz</Link>
          <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog & Operations</Link>
          <Link href="/#faq" className="hover:text-indigo-600 transition-colors">FAQs</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/#book" className="btn-primary px-5 py-2.5 rounded-full text-sm font-semibold inline-block">
            Book AI Audit
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-slate-800 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-header border-t border-slate-200 px-6 py-6 flex flex-col gap-5 shadow-lg animate-fadeIn">
          <Link 
            href="/#services" 
            className="text-base font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="/#process" 
            className="text-base font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Process
          </Link>
          <Link 
            href="/#quiz" 
            className="text-base font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            AI Audit Quiz
          </Link>
          <Link 
            href="/blog" 
            className="text-base font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog & Operations
          </Link>
          <Link 
            href="/#faq" 
            className="text-base font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQs
          </Link>
          <Link 
            href="/#book" 
            className="btn-primary text-center px-5 py-3 rounded-full text-base font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book AI Audit
          </Link>
        </div>
      )}
    </header>
  );
}
