import Link from 'next/link';
import { getBlogPosts, getBlogPostBySlug } from '@/lib/sanity';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: `${post.title} | AI Brainz Blog`,
    description: post.excerpt,
  };
}

function parseInlineMarkdown(text) {
  if (!text) return '';
  const parts = [];
  let currentIdx = 0;
  const boldRegex = /\*\*(.*?)\*\*/g;
  let match;
  let keyIndex = 0;

  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > currentIdx) {
      parts.push(text.substring(currentIdx, match.index));
    }
    parts.push(
      <strong key={keyIndex++} className="font-bold text-slate-950">
        {match[1]}
      </strong>
    );
    currentIdx = boldRegex.lastIndex;
  }

  if (currentIdx < text.length) {
    parts.push(text.substring(currentIdx));
  }

  return parts.length > 0 ? parts : text;
}

function renderMarkdown(content) {
  if (!content) return null;
  const blocks = content.split('\n\n').filter(Boolean);
  let keyIndex = 0;

  return blocks.map((block) => {
    const trimmed = block.trim();
    
    if (trimmed.startsWith('## ')) {
      return (
        <h2 key={keyIndex++} className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-8 mb-4 font-display leading-tight border-b border-slate-100 pb-2">
          {trimmed.substring(3)}
        </h2>
      );
    }
    
    if (trimmed.startsWith('### ')) {
      return (
        <h3 key={keyIndex++} className="text-xl sm:text-2xl font-bold text-slate-900 mt-6 mb-3 font-display leading-tight">
          {trimmed.substring(4)}
        </h3>
      );
    }
    
    if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
      const items = trimmed.split('\n').map(item => item.replace(/^[*-\s]+/, '').trim());
      return (
        <ul key={keyIndex++} className="list-disc pl-6 space-y-2.5 text-slate-700 my-4 text-sm sm:text-base">
          {items.map((item, itemIdx) => (
            <li key={itemIdx}>{parseInlineMarkdown(item)}</li>
          ))}
        </ul>
      );
    }
    
    if (trimmed.match(/^\d+\.\s/)) {
      const items = trimmed.split('\n').map(item => item.replace(/^\d+\.\s+/, '').trim());
      return (
        <ol key={keyIndex++} className="list-decimal pl-6 space-y-2.5 text-slate-700 my-4 text-sm sm:text-base">
          {items.map((item, itemIdx) => (
            <li key={itemIdx}>{parseInlineMarkdown(item)}</li>
          ))}
        </ol>
      );
    }

    return (
      <p key={keyIndex++} className="text-slate-700 leading-relaxed text-sm sm:text-base my-4">
        {parseInlineMarkdown(trimmed)}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="relative pt-32 pb-24 bg-grid-pattern min-h-screen">
      {/* Background Blurs */}
      <div className="gradient-blur gradient-blur-purple w-[450px] h-[450px] top-10 left-10"></div>
      <div className="gradient-blur gradient-blur-pink w-[400px] h-[400px] bottom-10 right-10"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Back Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-wider mb-8"
        >
          <ArrowLeft size={16} />
          <span>Back to Blog</span>
        </Link>

        {/* Post Meta */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-xs font-bold text-indigo-700 tracking-wide uppercase">
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Author metadata block */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 border-y border-slate-200/80 py-4">
            <div className="flex items-center gap-1.5">
              <User size={14} className="text-slate-400" />
              <span className="text-slate-800 font-bold">{post.author}</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-slate-400" />
              <span>{post.date}</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-slate-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Rich Content Area */}
        <div className="mt-8 prose prose-slate max-w-none">
          {renderMarkdown(post.content)}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-16 p-8 rounded-2xl glass-card border border-slate-200/80 bg-slate-50/20 text-center space-y-6 relative overflow-hidden">
          <div className="gradient-blur gradient-blur-blue w-[250px] h-[250px] -bottom-20 -right-20"></div>
          <div className="relative z-10 space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Ready to automate bottlenecks in your business?
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Book a free AI Audit Review with the AI Brainz team. We will identify exact manual processes to streamline.
            </p>
          </div>
          <div className="relative z-10">
            <Link href="/#contact" className="btn-primary px-6 py-3 rounded-full text-sm font-bold inline-block">
              Schedule Your Audit Review
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
}
