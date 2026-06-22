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
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 transition-all duration-300">
      <div 
        className={`max-w-6xl mx-auto capsule-nav rounded-full px-6 py-2.5 flex items-center justify-between transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/75 shadow-md border-slate-200/80' 
            : 'bg-white/50 backdrop-blur-md border-slate-200/40'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-7 h-7 transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/logo.svg" 
              alt="AI Brainz Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-display font-extrabold text-lg tracking-tight text-slate-950 flex items-center gap-1">
            AI Brainz
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <Link href="/#services" className="hover:text-indigo-600 transition-colors">Services</Link>
          <Link href="/#process" className="hover:text-indigo-600 transition-colors">Our Process</Link>
          <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
          <Link href="/#faq" className="hover:text-indigo-600 transition-colors">FAQs</Link>
        </nav>

        {/* Desktop CTA actions - styled like Sign In / Sign Up */}
        <div className="hidden md:flex items-center gap-4 text-xs font-semibold">
          <Link href="/#contact" className="btn-pill-blue px-4 py-2 text-xs font-bold shadow-sm">
            Book Audit
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button 
          className="md:hidden text-slate-800 focus:outline-none p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-lg border border-slate-200/80 rounded-2xl p-6 flex flex-col gap-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
          <Link 
            href="/" 
            className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/#services" 
            className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="/#process" 
            className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Process
          </Link>
          <Link 
            href="/blog" 
            className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            href="/#faq" 
            className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQs
          </Link>
          <hr className="border-slate-100 my-1" />
          <Link 
            href="/#contact" 
            className="btn-pill-blue text-center px-4 py-2.5 text-xs font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Audit
          </Link>
        </div>
      )}
    </header>
  );
}
