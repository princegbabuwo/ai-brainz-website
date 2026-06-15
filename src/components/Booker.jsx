'use client';

export default function Booker() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "https://cal.com/toye-brainz-cal/ai-audit";
  
  // Ensure we append the embed=true parameter to hide Cal.com's header/footer layout
  const embedUrl = calLink.includes('?') 
    ? `${calLink}&embed=true` 
    : `${calLink}?embed=true`;

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

        {/* Booker Iframe container */}
        <div className="glass-card rounded-2xl border border-slate-200/80 shadow-lg bg-white overflow-hidden h-[650px]">
          <iframe
            src={embedUrl}
            className="w-full h-full border-0"
            allow="camera; microphone; autoplay; clipboard-write"
            title="Cal.com Booking Widget"
          />
        </div>

      </div>
    </div>
  );
}
