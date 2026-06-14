import Link from 'next/link';
import { getBlogPosts } from '@/lib/sanity';
import { ArrowLeft, BookOpen, Clock, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Operations Blog | AI Brainz',
  description: 'Read how the AI Brainz agency uses custom-built automation, social listening, and research pipelines to manage our internal workflows.',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="relative pt-32 pb-24 bg-grid-pattern min-h-screen">
      {/* Background Blurs */}
      <div className="gradient-blur gradient-blur-purple w-[500px] h-[500px] -top-20 -left-20"></div>
      <div className="gradient-blur gradient-blur-blue w-[400px] h-[400px] bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-wider mb-8"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        {/* Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
            <BookOpen size={14} className="text-indigo-600" />
            <span>OPERATIONAL TRANSPARENCY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            How We Run AI Brainz <br />
            Using Our Own AI Systems.
          </h1>
          <p className="text-lg text-slate-600">
            We do not just advise. We operate our own growth pipelines using the same customer qualification, SEO, and follow-up templates we build for our clients.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 font-bold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-slate-900 leading-snug font-display hover:text-indigo-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Author & Date Card */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="font-bold text-slate-800">{post.author}</span>
                <div className="flex items-center gap-1 text-[11px]">
                  <Calendar size={12} className="text-slate-400" />
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
