import Link from "next/link";

const posts = [
  {
    category: "Paid Media",
    categoryStyle: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    title: "Why Your Meta Ads Are Underperforming (And How to Fix It in 7 Days)",
    excerpt:
      "Most brands leave 40–60% of their Meta ad performance on the table. Here’s the exact diagnostic framework we use to identify the 5 most common campaign killers.",
    readTime: "8 min read",
    date: "Jan 2025",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    category: "SEO",
    categoryStyle: "text-secondary bg-secondary/10 border-secondary/20",
    title: "The Technical SEO Audit That Doubled Our Client’s Traffic in 60 Days",
    excerpt:
      "A step-by-step breakdown of the 200-point technical audit that uncovered 14 critical issues silently costing a Dubai SaaS company thousands in lost organic traffic every month.",
    readTime: "12 min read",
    date: "Jan 2025",
    gradient: "from-secondary to-green-400",
  },
  {
    category: "CRO",
    categoryStyle: "text-primary bg-primary/10 border-primary/20",
    title: "The 5-Second Website Test: What Your Homepage Is Really Communicating",
    excerpt:
      "In 5 seconds, a visitor decides whether they trust you. We analysed 200+ landing pages to find the exact elements that make or break that critical first impression.",
    readTime: "6 min read",
    date: "Dec 2024",
    gradient: "from-primary to-purple-500",
  },
];

export default function Blog() {
  return (
    <section className="py-32 bg-surface-container-low relative" id="blog">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-5">
              Growth Intelligence →
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-on-surface leading-tight tracking-tight">
              Insights that actually{" "}
              <span className="text-primary">move the needle.</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="group flex items-center gap-2 text-on-surface-variant font-bold hover:text-secondary transition-colors text-sm pb-1"
          >
            View all articles
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="fade-up bg-surface-container rounded-3xl overflow-hidden border border-outline-variant/20 flex flex-col hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`h-1 w-full bg-gradient-to-r ${post.gradient}`} />

              <div className="p-8 flex flex-col gap-4 flex-1">
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${post.categoryStyle}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-on-surface-variant/40 text-xs font-medium">
                    {post.date}
                  </span>
                </div>

                <h3 className="text-lg font-black text-on-surface leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-on-surface-variant leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10 mt-auto">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40">
                    {post.readTime}
                  </span>
                  <Link
                    href="/blog"
                    className="text-xs font-bold text-secondary hover:text-secondary/80 transition-colors flex items-center gap-1"
                  >
                    Read article
                    <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}