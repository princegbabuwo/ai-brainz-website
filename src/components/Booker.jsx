'use client';

import dynamic from 'next/dynamic';


const BookerEmbed = dynamic(
  () => import('@calcom/atoms').then((mod) => mod.BookerEmbed),
  { ssr: false }
);


// Helper function to parse calLink
function parseCalLink(urlStr) {
  const defaultVal = { calUsername: "toye-brainz-cal", eventSlug: "ai-audit" };
  if (!urlStr) return defaultVal;

  try {
    const cleaned = urlStr.replace(/https?:\/\/(www\.)?cal\.com\//i, '').split('/');
    const username = cleaned[0] || defaultVal.calUsername;
    const eventSlug = cleaned[1] || defaultVal.eventSlug;
    return { calUsername: username, eventSlug: eventSlug };
  } catch (e) {
    console.error("Failed to parse cal.com link:", e);
    return defaultVal;
  }
}

export default function Booker() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;
  const { calUsername, eventSlug } = parseCalLink(calLink);

  return (
    <div id="book" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Gradients */}
      <div className="gradient-blur gradient-blur-blue w-[400px] h-[400px] top-10 left-10"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Header */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Schedule Your Free AI Audit
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            Book a 30-minute consultation call. We will review your business model, identify manual bottlenecks, and recommend the best first AI pilot.
          </p>
        </div>

        {/* Booker Embed container */}
        <div className="glass-card rounded-2xl p-4 sm:p-6 border border-slate-200/80 shadow-lg bg-white/80">
          <BookerEmbed
            eventSlug={eventSlug}
            view="month_view"
            username={calUsername}
            customClassNames={{
              bookerContainer: "border-0 shadow-none bg-transparent rounded-lg",
            }}
            onCreateBookingSuccess={() => {
              console.log("booking created successfully");
            }}
          />
        </div>

      </div>
    </div>
  );
}
