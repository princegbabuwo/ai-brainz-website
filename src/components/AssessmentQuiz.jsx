'use client';

import { useState } from 'react';
import { Sparkles, ArrowRight, RefreshCw, BarChart, CheckCircle2, ChevronRight } from 'lucide-react';

const QUESTIONS = [
  {
    id: 'industry',
    title: 'What is your primary industry?',
    options: [
      { label: 'Professional Services (Consulting, Finance, Legal)', value: 'services', weight: 3 },
      { label: 'Agencies & Consulting', value: 'agency', weight: 4 },
      { label: 'Real Estate & Property Development', value: 'realestate', weight: 4 },
      { label: 'Local Services (Home, Health, Contracting)', value: 'local', weight: 2 },
      { label: 'E-commerce & Retail Services', value: 'ecommerce', weight: 3 },
      { label: 'SaaS & Tech Startups', value: 'saas', weight: 5 }
    ]
  },
  {
    id: 'bottleneck',
    title: "What is your team's biggest operational bottleneck?",
    options: [
      { label: 'Delayed follow-up with incoming leads', value: 'leads', weight: 5 },
      { label: 'Repeating manual support answers/FAQs', value: 'support', weight: 4 },
      { label: 'Manual data entry & copy-pasting between apps', value: 'data', weight: 5 },
      { label: 'Friction booking & scheduling consultations', value: 'booking', weight: 3 },
      { label: 'Maintaining consistent SEO & content output', value: 'content', weight: 3 }
    ]
  },
  {
    id: 'hours',
    title: 'How many hours does your team lose to manual tasks weekly?',
    options: [
      { label: 'Less than 10 hours', value: 'low', weight: 2 },
      { label: '10 to 25 hours', value: 'medium', weight: 4 },
      { label: '25 to 50 hours', value: 'high', weight: 7 },
      { label: 'Over 50 hours (Significant lag)', value: 'critical', weight: 10 }
    ]
  },
  {
    id: 'ai_usage',
    title: 'What is your current level of AI integration?',
    options: [
      { label: 'We do not use AI currently', value: 'none', weight: 1 },
      { label: 'Basic tools (ChatGPT/Gemini for manual tasks)', value: 'basic', weight: 3 },
      { label: 'Semi-automated (using simple Zapier or prebuilt bots)', value: 'semi', weight: 5 },
      { label: 'Fully integrated (AI handles customer chats/workflows)', value: 'full', weight: 8 }
    ]
  }
];

export default function AssessmentQuiz() {
  const [step, setStep] = useState(-1); // -1: Intro, 0-3: Questions, 4: Results
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setAnswers({});
    setScore(0);
    setStep(0);
  };

  const handleSelect = (questionId, option) => {
    const updatedAnswers = { ...answers, [questionId]: option.value };
    setAnswers(updatedAnswers);

    // Calculate score accumulator on the fly
    const currentQuestion = QUESTIONS[step];
    
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate final score
      let totalWeight = 0;
      let maxPossible = 0;
      
      QUESTIONS.forEach((q) => {
        const selectedOption = q.options.find(opt => opt.value === updatedAnswers[q.id]);
        if (selectedOption) {
          totalWeight += selectedOption.weight;
        }
        maxPossible += Math.max(...q.options.map(opt => opt.weight));
      });

      const finalPercentage = Math.round((totalWeight / maxPossible) * 100);
      setScore(finalPercentage);
      setStep(QUESTIONS.length);
    }
  };

  const resetQuiz = () => {
    setStep(-1);
  };

  // Dynamic recommendations depending on bottleneck & score
  const getRecommendation = () => {
    const bn = answers.bottleneck;
    const hrs = answers.hours;

    let title = "High-Impact AI Optimization Opportunity";
    let desc = "Your business is primed for automation. Automating workflows can immediately free up bandwidth.";

    if (bn === 'leads') {
      title = "AI Sales & Response Pipeline";
      desc = "Since lead response delay is your primary bottleneck, we recommend launching a 24/7 AI Sales Assistant. Responding to leads within 2 minutes can boost conversions by up to 300%.";
    } else if (bn === 'support') {
      title = "AI Support & Knowledge Base Agent";
      desc = "Since customer FAQ repetition is draining your time, a custom-trained support agent synced to your business guidelines can handle 70%+ of inbound inquiries instantly, preserving human resources for complex cases.";
    } else if (bn === 'data') {
      title = "Workflow Automation & CRM Sync";
      desc = "Your team is losing time to manual data-entry. Connecting your marketing forms, CRM, and task managers via custom Zapier/Make.com webhooks will prevent errors and speed up operations.";
    } else if (bn === 'booking') {
      title = "AI Appointment Booking Assistant";
      desc = "Eliminating back-and-forth booking friction with an automated calendar flow will increase qualified meeting bookings. We recommend syncing automated scheduling reminders to reduce no-shows.";
    } else if (bn === 'content') {
      title = "AI Content & Search Everywhere Pipeline";
      desc = "Building a content scheduling pipeline will allow you to repurpose authority articles across Google, LinkedIn, and AI discovery engines with minimal effort.";
    }

    if (hrs === 'critical' || hrs === 'high') {
      desc += " Given that your team loses over 25 hours weekly, an initial AI pilot project will yield returns in less than 14 days.";
    }

    return { title, desc };
  };

  return (
    <div id="quiz" className="py-20 relative overflow-hidden bg-slate-50/50">
      <div className="gradient-blur gradient-blur-pink w-[500px] h-[500px] bottom-0 right-10"></div>
      
      <div className="max-w-2xl mx-auto px-6 relative z-10">
        
        {/* Card wrapper */}
        <div className="glass-card rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-lg min-h-[400px] flex flex-col justify-between relative bg-white/90">
          
          {/* Step -1: Introduction */}
          {step === -1 && (
            <div className="space-y-6 my-auto text-center">
              <div className="inline-flex p-3 bg-indigo-50 text-indigo-600 rounded-2xl mb-2">
                <Sparkles size={28} className="animate-pulse" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                AI Integration Assessment
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Take this 2-minute quiz to evaluate your current business efficiency level. Discover exactly where AI automation can save hours and double lead conversion.
              </p>
              <button 
                onClick={startQuiz}
                className="btn-primary w-full sm:w-auto px-8 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 mt-4 cursor-pointer"
              >
                <span>Start Free Assessment</span>
                <ArrowRight size={18} />
              </button>
            </div>
          )}

          {/* Steps 0 to 3: Questions */}
          {step >= 0 && step < QUESTIONS.length && (
            <div className="space-y-6 flex-1 flex flex-col justify-between">
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-4">
                  <span>AI READINESS ASSESSMENT</span>
                  <span>QUESTION {step + 1} OF {QUESTIONS.length}</span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1 bg-slate-100 rounded-full mb-6 overflow-hidden">
                  <div 
                    className="h-full bg-indigo-600 transition-all duration-300"
                    style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                  ></div>
                </div>

                {/* Question title */}
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 leading-tight">
                  {QUESTIONS[step].title}
                </h4>

                {/* Options list */}
                <div className="grid grid-cols-1 gap-3">
                  {QUESTIONS[step].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSelect(QUESTIONS[step].id, option)}
                      className="text-left w-full p-4 rounded-xl border border-slate-200/80 bg-white hover:bg-slate-50 hover:border-indigo-500/50 hover:shadow-sm font-medium text-slate-700 flex items-center justify-between group transition-all cursor-pointer"
                    >
                      <span className="text-sm sm:text-base">{option.label}</span>
                      <ChevronRight size={16} className="text-slate-300 group-hover:text-indigo-600 transition-colors shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Back navigation */}
              <div className="pt-6 border-t border-slate-100 flex justify-between">
                <button
                  onClick={resetQuiz}
                  className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-wider"
                >
                  Cancel
                </button>
                {step > 0 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-wider"
                  >
                    Go Back
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Step 4: Results */}
          {step === QUESTIONS.length && (
            <div className="space-y-6 my-auto">
              <div className="text-center space-y-4">
                <div className="inline-flex p-3.5 bg-emerald-50 text-emerald-600 rounded-full">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Assessment Complete
                </h3>
              </div>

              {/* Progress gauge */}
              <div className="bg-slate-50/80 rounded-2xl border border-slate-100 p-6 flex flex-col sm:flex-row items-center gap-6">
                <div className="relative flex items-center justify-center shrink-0">
                  {/* Circle SVG */}
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="#f1f5f9" strokeWidth="8" fill="transparent" />
                    <circle cx="48" cy="48" r="40" stroke="#6366f1" strokeWidth="8" fill="transparent"
                      strokeDasharray={251.2}
                      strokeDashoffset={251.2 - (251.2 * score) / 100}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <span className="absolute text-xl font-extrabold text-indigo-700">{score}%</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide flex items-center gap-1.5">
                    <BarChart size={16} className="text-indigo-600" />
                    <span>AI Efficiency Rating</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Your readiness score indicates that automating manual bottlenecks can unlock significant conversion growth.
                  </p>
                </div>
              </div>

              {/* Recommendation details */}
              <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100/60 space-y-2">
                <h4 className="font-bold text-indigo-900 text-base">
                  Recommended First Step: {getRecommendation().title}
                </h4>
                <p className="text-sm text-indigo-950/80 leading-relaxed">
                  {getRecommendation().desc}
                </p>
              </div>

              {/* Action items */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="#book"
                  onClick={() => setStep(-1)}
                  className="btn-primary text-center px-6 py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2 flex-1"
                >
                  <span>Book Free Opportunity Review</span>
                  <ArrowRight size={16} />
                </a>
                <button
                  onClick={startQuiz}
                  className="btn-secondary text-center px-6 py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RefreshCw size={16} />
                  <span>Retake Quiz</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
