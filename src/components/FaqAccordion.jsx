'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: 'How can I contact AI Brainz Team?',
    answer: 'You can reach us through our contact form on our website or by emailing us at hello@aibrainz.com. We typically respond within 24 hours.'
  },
  {
    question: 'What services do you offer?',
    answer: 'We design and build custom AI Sales Assistants, Support Agents, automated follow-up sequences, calendar booking workflows, content creation pipelines, and internal Zapier/Make integrations.'
  },
  {
    question: 'Do you provide website maintenance services?',
    answer: 'Yes, we provide ongoing support, performance tuning, knowledge base documentation updates, and error monitoring for all deployed AI systems under our support SLA.'
  },
  {
    question: 'How long does it take to design and develop a website?',
    answer: 'A standard custom AI pilot (like a chatbot or follow-up sequence) is designed, integrated, and fully tested in 2 to 3 weeks.'
  },
  {
    question: 'Do you require a deposit for projects?',
    answer: 'Yes. We typically require a 50% deposit before launching the discovery mapping and building phase, with the remaining 50% due after testing and final sign-off.'
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#fafbfe] overflow-hidden">
      {/* Glow background */}
      <div className="ambient-glow glow-purple w-[400px] h-[400px] top-10 right-0"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight font-display">
              Frequently <br className="hidden lg:block" />
              Asked <br className="hidden lg:block" />
              Questions
            </h2>
          </div>

          {/* Right Column: Accordions list */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className="border-b border-slate-200/60 pb-5 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left py-4 flex items-center justify-between gap-4 font-extrabold text-slate-900 hover:text-indigo-600 transition-colors cursor-pointer select-none"
                  >
                    <span className="text-sm sm:text-base leading-snug font-display">
                      {faq.question}
                    </span>
                    <div className="text-slate-400 hover:text-indigo-600 shrink-0">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  {/* Answer box with height transition */}
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[300px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed pr-6 font-sans">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

