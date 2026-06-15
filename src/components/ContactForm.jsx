'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ email: '', name: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.name || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }
    console.log('Contact form submitted:', formData);
    setStatus('Thank you! Your message has been sent.');
    setFormData({ email: '', name: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative bg-[#fafbfe] overflow-hidden">
      {/* Mesh gradients & blurs matching target UI */}
      <div className="ambient-glow glow-blue w-[500px] h-[500px] -bottom-20 -left-20"></div>
      <div className="ambient-glow glow-pink w-[400px] h-[400px] top-1/4 right-0"></div>

      <div className="max-w-xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
            Let's Get in Touch
          </h2>
        </div>

        {/* Contact Card */}
        <div className="premium-card rounded-2xl p-8 sm:p-10 border border-slate-200/80 bg-white/90 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email field */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-semibold text-slate-500 lowercase">
                email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200/80 bg-white/60 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all"
              />
            </div>

            {/* Name field */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-xs font-semibold text-slate-500 lowercase">
                name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name"
                placeholder="full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200/80 bg-white/60 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all"
              />
            </div>

            {/* Message field */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-xs font-semibold text-slate-500 lowercase">
                message
              </label>
              <textarea 
                id="message" 
                name="message"
                rows="4"
                placeholder="write your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200/80 bg-white/60 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="btn-pill-blue w-full py-3 text-xs font-bold shadow-md cursor-pointer select-none"
            >
              Get in Touch
            </button>

            {/* Status Messages */}
            {status && (
              <p className={`text-center text-xs font-bold ${status.includes('Thank') ? 'text-emerald-600' : 'text-rose-500'}`}>
                {status}
              </p>
            )}
            
          </form>
        </div>

      </div>
    </section>
  );
}
