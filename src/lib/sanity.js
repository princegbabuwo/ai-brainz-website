import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';

let client = null;
if (projectId) {
  client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  });
}

// Fallback high-quality blog posts derived from your agency write-up
const FALLBACK_POSTS = [
  {
    title: 'How We Built an AI-Powered Business Discovery & Outreach Pipeline',
    slug: 'ai-powered-discovery-outreach',
    excerpt: 'How AI Brainz uses structured research algorithms to identify businesses that need AI automation most, moving beyond generic spam.',
    date: 'June 12, 2026',
    author: 'AI Brainz Team',
    category: 'Sales Automation',
    readTime: '5 min read',
    content: `
At AI Brainz, AI is not just a service we sell. It is part of how we operate. We run our own agency using the same principles we implement for our clients. One of our core systems is an AI-assisted prospecting pipeline that helps us identify businesses in high-value markets where AI implementation can create a meaningful operational improvement.

## The Problem with Traditional Outreach

Instead of randomly reaching out to businesses with generic, template messages, we believe in relevance. Traditional outreach is loud, spammy, and rarely addresses a business's actual bottlenecks. We designed our discovery system to solve this by performing structured, data-driven research *before* any contact is made.

## How the AI Pipeline Works

Our custom discovery system evaluates signals from potential prospects to assess where AI can be most useful. These signals include:

*   **Communication Gaps**: Slow response times on contact forms or chat widgets.
*   **Sales Response Speed**: Gaps between an initial enquiry and a consultation booking.
*   **Website Friction**: Unclear navigation, lack of interactive scheduling, or sparse FAQs.
*   **Repetitive Operations**: Areas like customer onboarding or appointment booking that run on manual input.

## Structured Research & Pain-Point Mapping

Once a business is identified, the system maps potential use cases (such as automated follow-up sequences, appointment booking assistants, or client onboarding assistants). This allows us to approach each business with a clear, personalized strategy deck and video showing:

1.  The exact friction points we observed.
2.  Where prospects are dropping off.
3.  How a simple AI system can improve lead response or internal workflow.

By using AI to analyze public data and map operational bottlenecks, we ensure every outreach message is valuable, contextual, and highly relevant.
    `
  },
  {
    title: 'Solving the Follow-Up Leak: Why Most Leads Fail to Convert',
    slug: 'solving-lead-followup-leak',
    excerpt: 'Most sales opportunities are not lost at first contact. Learn how we use AI workflows to automate reminders and personalization.',
    date: 'June 10, 2026',
    author: 'AI Brainz Team',
    category: 'Workflow Operations',
    readTime: '4 min read',
    content: `
Most sales opportunities are not lost because a business lacks ambition or service quality. They are lost because their lead follow-up is slow, inconsistent, or simply forgotten. Leads come in, but manual follow-up is delayed; customer support answers depend entirely on human availability.

At AI Brainz, we use AI-supported workflows to manage follow-up intelligently, both for our own growth and for our clients.

## The Cost of Delayed Response

Studies show that responding to a lead within the first 5 minutes increases the chance of qualification by over 390%. Yet, the average business takes hours, if not days, to respond. In today’s market, prospects expect immediate replies. If they have to wait, they will move on to a competitor.

## Automating the Sales Sequence Without Feeling Robotic

We build AI Sales and Booking systems that bridge this gap. Our AI lead follow-up systems operate on structured rules:

*   **Immediate Qualification**: Capturing prospect data via intelligent interest forms and scoring their readiness instantly.
*   **Contextual Personalization**: Generating replies that address the prospect's specific answers instead of using a generic template.
*   **Intelligent Follow-Up**: Automating multi-step sequences that share relevant case studies, answer FAQs, and direct prospects back to booking a call.

## Post-Meeting Intelligence

Our follow-up systems don't stop at the initial booking. During consultation calls, we use AI-assisted note-taking to capture pain points, objections, and requirements. 

Immediately after a call, the system compiles requirements, outputs recommended next steps, and updates the CRM. This ensures that the momentum of the sales conversation is preserved, reducing friction and lead drop-offs throughout the sales cycle.
    `
  },
  {
    title: 'Search Everywhere Optimization: The Future of Content Discovery',
    slug: 'search-everywhere-optimization-seo',
    excerpt: 'Why modern SEO is moving beyond Google into AI engines, social platforms, and multi-channel discovery—and how to prepare.',
    date: 'June 8, 2026',
    author: 'AI Brainz Team',
    category: 'SEO & Content',
    readTime: '6 min read',
    content: `
Discovery has fundamentally changed. People no longer find businesses solely through traditional search engines. They discover brands through AI search engines (like ChatGPT, Gemini, and Perplexity), niche communities (like Reddit and Quora), social media platforms (LinkedIn, TikTok, YouTube), and newsletters.

That is why we believe modern SEO is moving beyond search engines into **Search Everywhere Optimization** (SEO) and **LLM Optimization** (LLMO).

## What is LLM Optimization?

LLM Optimization (or Generative Engine Optimization) is the process of structuring your public business data and web content so that AI scrapers and language models can easily find, summarize, and recommend your business when answering user queries.

AI engines don't look at traditional keywords the same way Google does. They look for:

1.  **Topical Authority**: Depth of knowledge on specific implementation questions.
2.  **Structured Text**: Clean Markdown, metadata, and crawlable site maps.
3.  **Dedicated LLM Files**: Standard files like \`llms.txt\` and \`robots.txt\` that explicitly state the site's capabilities, services, and APIs for AI scrapers.

## Our Content and Listening System

To capture multi-platform discovery, AI Brainz operates a content pipeline designed for multi-channel publishing:

*   **AI Social Listening**: Monitoring public discussions where owners are actively asking questions about business automation or sales bottlenecks.
*   **Targeted Content Repurposing**: Generating high-quality blog posts, scripts, and social guides answering real, observed questions.
*   **Clear Meta Structures**: Generating dynamic sitemaps and indexing pages on a set schedule to ensure search engines and LLM engines are updated simultaneously.

By optimizing your website for both human readers (using clean, concise copy) and AI platforms (using structured data), you position your business to be recommended wherever your prospects are looking.
    `
  }
];

export async function getBlogPosts() {
  if (client) {
    try {
      const query = `*[_type == "post"] | order(publishedAt desc) {
        title,
        "slug": slug.current,
        excerpt,
        "date": publishedAt,
        "author": author->name,
        category,
        content
      }`;
      const posts = await client.fetch(query);
      if (posts && posts.length > 0) {
        return posts.map(p => ({
          ...p,
          date: new Date(p.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }),
          readTime: `${Math.ceil((p.content?.length || 0) / 1000) || 3} min read`
        }));
      }
    } catch (err) {
      console.warn('Failed to fetch from Sanity CMS, using fallback blog posts:', err);
    }
  }
  return FALLBACK_POSTS;
}

export async function getBlogPostBySlug(slug) {
  if (client) {
    try {
      const query = `*[_type == "post" && slug.current == $slug][0] {
        title,
        "slug": slug.current,
        excerpt,
        "date": publishedAt,
        "author": author->name,
        category,
        content
      }`;
      const post = await client.fetch(query, { slug });
      if (post) {
        return {
          ...post,
          date: new Date(post.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }),
          readTime: `${Math.ceil((post.content?.length || 0) / 1000) || 3} min read`
        };
      }
    } catch (err) {
      console.warn(`Failed to fetch slug ${slug} from Sanity CMS, using fallback:`, err);
    }
  }
  return FALLBACK_POSTS.find(p => p.slug === slug) || null;
}
