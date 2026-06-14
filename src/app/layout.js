import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AI Brainz | Custom AI Automation & Growth Systems",
  description: "AI Brainz designs and implements custom AI-powered systems for lead follow-up, sales assistant, customer support, and multi-channel SEO. Scale your operations without complexity.",
  metadataBase: new URL("https://ai-brainz.com"),
  keywords: ["AI Automation", "AI Sales Agent", "AI Support Bot", "Workflow Automation", "LLM Optimization", "Search Everywhere Optimization", "AI Integration"],
  openGraph: {
    title: "AI Brainz | Custom AI Automation & Growth Systems",
    description: "AI Brainz designs and implements custom AI-powered systems for lead follow-up, sales assistant, customer support, and multi-channel SEO.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Brainz | Custom AI Automation & Growth Systems",
    description: "Scale your business operations with practical AI-powered pipelines. Free Opportunity Review.",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#fbfbfd] text-slate-900 antialiased">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
