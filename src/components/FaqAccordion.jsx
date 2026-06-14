'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: 'How long does it take to implement my first AI system?',
    answer: 'An initial focused AI pilot project (such as an AI Sales Assistant or Lead Follow-Up System) typically takes 2 to 3 weeks. This includes the initial review, pipeline mapping, configuration, instruction testing, and live integration.'
  },
  {
    question: 'Do I need to change or replace my existing CRM or software stack?',
    answer: 'No. We configure AI assistants to plug directly into the tools your team already uses (such as Slack, HubSpot, Salesforce, WhatsApp, Gmail, and Google Sheets) using custom Zapier/Make webhooks or direct APIs.'
  },
  {
    question: 'How secure is my data, and will AI train on my private client documents?',
    answer: 'We prioritize data security. We build systems using dedicated enterprise API endpoints (like OpenAI and Anthropic) that explicitly restrict input data from being used to train public open-source models.'
  },
  {
    question: 'What happens if the AI assistant makes a mistake or is asked a question it does not know?',
    answer: 'We program every assistant with robust guardrails. If a customer asks a question outside the custom knowledge base, or if a prospect requires a manual override, the AI gracefully flags the interaction and routes the ticket to a human representative.'
  },
  {
    question: 'Do I need technical expertise to manage these systems post-launch?',
    answer: 'Not at all. We handle all initial programming and configuration. We provide your team with simple management dashboards to update knowledge documents or review conversation transcripts easily.'
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 relative bg-white overflow-hidden">
      <div className="gradient-blur gradient-blur-pink w-[400px] h-[400px] top-10 right-0"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Inquiries
          </h2>
          <p className="text-base text-slate-600">
            Answers to help you understand how our custom AI implementation works for your operations.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-indigo-600 hover:bg-slate-50/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={18} className={`shrink-0 ${isOpen ? 'text-indigo-600' : 'text-slate-400'}`} />
                    <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                  </div>
                  <ChevronDown 
                    size={18} 
                    className={`text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'transform rotate-180 text-indigo-600' : ''}`} 
                  />
                </button>

                {/* Answer box with height transition */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-slate-100' : 'max-h-0'}`}
                >
                  <div className="p-5 text-slate-600 text-sm sm:text-base leading-relaxed bg-slate-50/30">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
