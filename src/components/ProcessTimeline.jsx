import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const ROADMAP = [
  {
    title: '01: Pain-Point Mapping',
    description: 'We pinpoint exactly where you are losing leads, hours, or operational efficiency (e.g. slow response, repetitive support questions).',
    tag: 'Bottlenecks mapped',
    image: '/process/pain-point-mapping.jpg',
    imageAlt: 'Pain point mapping and bottleneck analysis',
  },
  {
    title: '02: System Recommendation',
    description: 'We outline the simplest, highest-impact AI solution to start with. We focus on launching a clean pilot project rather than complex bloat.',
    tag: 'Pilot scope approved',
    image: '/process/system-recommendation.jpg',
    imageAlt: 'Stakeholder system recommendation and strategy alignment',
  },
  {
    title: '03: Build & Integration',
    description: 'We configure and program the AI workflows, connecting them directly to your existing systems (website, CRM, WhatsApp, email).',
    tag: 'Connected to your stack',
    image: '/process/build-and-integration.jpg',
    imageAlt: 'Software build and AI workflow integration',
  },
  {
    title: '04: Testing & Optimization',
    description: 'Before pushing live, we run extensive tests on the assistant’s tone, instructions accuracy, error fallbacks, and sync latency.',
    tag: 'Quality checks complete',
    image: '/process/testing-and-optimisation.jpg',
    imageAlt: 'AI testing, auditing, and performance optimization',
  },
  {
    title: '05: Launch & Expansion',
    description: 'The system runs autonomously. We analyze early logs to tune performance and then expand automation into additional business areas.',
    tag: 'Ready to scale',
    image: '/process/launch-and-expansion.jpg',
    imageAlt: 'Autonomous system launch and scalable expansion',
  },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="ambient-glow glow-blue w-[420px] h-[420px] -top-24 right-0"></div>
      <div className="ambient-glow glow-purple w-[320px] h-[320px] bottom-0 left-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700">
            <span>OUR ONBOARDING ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Get You Automating
          </h2>
          <p className="text-base text-slate-600">
            From analysis to deployment, our process is designed to implement practical AI systems quickly, with zero coding overhead on your team.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-14">
          {ROADMAP.map((group, index) => {
            const flip = index % 2 === 1;

            return (
              <div
                key={group.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className={`${flip ? 'lg:col-start-7 lg:order-2' : ''} lg:col-span-6`}>
                  <div className="max-w-xl">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
                      {group.title}
                    </h3>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className={`${flip ? 'lg:col-start-1 lg:row-start-1' : ''} lg:col-span-6`}>
                  <div className="relative min-h-[250px] sm:min-h-[290px] overflow-visible">
                    <div className="relative h-[250px] sm:h-[290px] overflow-hidden rounded-2xl border border-indigo-100/80 bg-white p-5 shadow-lg shadow-indigo-100/40 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={group.image}
                          alt={group.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 520px, 100vw"
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <div className={`absolute ${flip ? 'left-4 sm:left-8' : 'right-4 sm:right-8'} -bottom-4 inline-flex max-w-[88%] items-center gap-2 rounded-xl border border-slate-200 bg-white/95 backdrop-blur-sm px-4 py-3 text-xs font-extrabold text-slate-700 shadow-md`}>
                      <CheckCircle2 size={18} className="text-indigo-600 shrink-0" />
                      <span>{group.tag}</span>
                    </div>
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
