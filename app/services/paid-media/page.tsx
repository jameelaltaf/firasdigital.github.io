import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Paid Media Management | Meta, Google & TikTok Ads | Firas Digital",
  description:
    "Drive 10X ROAS with precision paid media management. Expert Meta Ads, Google Ads, TikTok Ads & LinkedIn campaigns for ambitious brands in UAE and globally.",
  keywords: [
    "paid media management",
    "Meta ads",
    "Google ads",
    "TikTok ads",
    "LinkedIn ads",
    "performance marketing",
    "ROAS",
    "UAE digital marketing",
    "paid advertising agency",
  ],
  openGraph: {
    title: "Paid Media Management | Meta, Google & TikTok Ads | Firas Digital",
    description:
      "Drive 10X ROAS with precision paid media management across Meta, Google, TikTok, LinkedIn and more.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paid Media Management | Firas Digital",
    description:
      "Drive 10X ROAS with precision paid media management across Meta, Google, TikTok, LinkedIn and more.",
  },
};

const faqs = [
  {
    q: "What is paid media management?",
    a: "Paid media management is the strategic planning, execution, and optimisation of paid advertising campaigns across digital platforms such as Meta (Facebook & Instagram), Google, TikTok, LinkedIn, Snapchat, Pinterest, and more. A paid media manager handles everything from audience research and creative strategy to campaign setup, budget allocation, A/B testing, and ongoing performance optimisation. The goal is to maximise return on ad spend (ROAS) while minimising wasted budget. At Firas Digital, our paid media management service includes full-funnel strategy — from awareness campaigns at the top of the funnel through to retargeting and conversion campaigns — ensuring every dirham or dollar you spend works as hard as possible to drive measurable business results.",
  },
  {
    q: "How long before I see results from paid ads?",
    a: "Most paid media campaigns begin generating traffic and leads within the first 48–72 hours of launch, though meaningful, optimised results typically emerge within the first 30 days. The first two weeks are a learning phase where the ad platform's algorithm gathers data on which audiences, creatives, and placements perform best. Weeks 3–4 see performance improve as we apply data-driven optimisations. By month two, you'll have a well-calibrated campaign delivering consistent results. That said, factors such as your industry, offer, competition, and budget all influence the timeline. Our team provides transparent weekly reporting so you always know exactly where your campaigns stand and what we're doing to improve performance.",
  },
  {
    q: "What platforms do you run ads on?",
    a: "We manage campaigns across all major paid media platforms including Meta Ads (Facebook & Instagram), Google Ads (Search, Display, Shopping, YouTube), TikTok Ads, LinkedIn Ads, Snapchat Ads, Pinterest Ads, Reddit Ads, Amazon Ads, Microsoft Ads (Bing), Spotify Ads, and programmatic display networks. Our platform recommendation always starts with understanding where your target audience spends their time and what stage of the buying journey they're in. B2B clients often benefit most from LinkedIn and Google Search, while DTC e-commerce brands frequently see the highest ROAS from Meta and TikTok. We build multi-platform strategies that ensure comprehensive market coverage and strong attribution.",
  },
  {
    q: "How do you measure paid media success?",
    a: "Success measurement in paid media goes far beyond clicks and impressions. At Firas Digital, we establish clear KPIs aligned with your business objectives before any campaign launches. Primary metrics we track include Return on Ad Spend (ROAS), Cost Per Acquisition (CPA), Cost Per Lead (CPL), Click-Through Rate (CTR), Conversion Rate, and Revenue Attributed. We use advanced tracking setups including Meta Pixel, Google Tag Manager, GA4, and server-side tracking where applicable to ensure accurate attribution even in a cookieless environment. Clients receive a live dashboard and weekly performance reports in plain language — no jargon, just the numbers that move your business.",
  },
  {
    q: "What is a good ROAS?",
    a: "A 'good' ROAS varies significantly by industry, business model, and margins. For e-commerce, a 3–4X ROAS is considered baseline viable, while 6–10X is considered strong. For lead generation businesses, cost per lead and lead quality matter more than ROAS. At Firas Digital, we've delivered an average 10X ROAS across our client portfolio, though this varies by sector. In fashion e-commerce, we've achieved 12–15X ROAS; in B2B services, we focus on cost per qualified lead. We always start by understanding your unit economics — margins, customer lifetime value, and acceptable CAC — then work backwards to set realistic ROAS targets that make your paid media genuinely profitable.",
  },
  {
    q: "How much should I spend on paid advertising?",
    a: "The right paid advertising budget depends on your business goals, competitive landscape, and the platforms you intend to use. As a general rule, most of our clients start with a minimum monthly ad spend of AED 10,000–15,000 (approximately $3,000–4,000 USD) to give the algorithm enough data to optimise effectively. Too small a budget means limited learning and inconsistent results. We recommend allocating 10–20% of your target revenue for paid acquisition, scaling as your ROAS improves. During our free strategy audit, we analyse your market, competitors' estimated spend, and your margins to recommend a specific budget that will give your campaigns the best chance of delivering a profitable return from day one.",
  },
  {
    q: "Do you offer creative services for ads?",
    a: "Yes, our paid media service includes full creative production. We've learned that the creative — the actual ad image, video, or copy — accounts for up to 70% of an ad's performance. Our in-house creative team produces static graphics, short-form video ads (reels, TikTok-style content), carousel ads, and UGC-style content designed specifically to perform on each platform. All creatives are built with a performance-first mindset: strong hooks in the first 3 seconds, clear value propositions, and compelling calls-to-action. We continuously A/B test creative variations and replace underperformers with new iterations based on data, not guesswork.",
  },
  {
    q: "How do you target the right audience?",
    a: "Audience targeting is one of the most critical — and complex — elements of paid media success. Our approach combines several methodologies: first-party data activation (uploading your existing customer lists to create lookalike audiences), interest and behavioural targeting based on platform data, contextual keyword targeting on Google and Microsoft, custom intent audiences, and retargeting of website visitors and video viewers at different funnel stages. On Meta, we use broad audience strategies combined with creative that self-selects the right viewers, leveraging Meta's AI to find high-value users. We also implement full-funnel segmentation — different messages for cold audiences, warm prospects, and past customers — ensuring we never show the same ad to someone at different stages of their journey.",
  },
];

const benefits = [
  { title: "10X Average ROAS", desc: "Across 200+ brands managed, we consistently deliver returns that make paid media your most profitable growth channel." },
  { title: "Full-Funnel Strategy", desc: "From awareness to conversion and retention — we build campaigns that work at every stage of the customer journey." },
  { title: "Creative Production Included", desc: "Performance-first ad creatives — static, video, and UGC — produced and tested by our in-house creative team." },
  { title: "Real-Time Reporting", desc: "Live dashboards and weekly plain-language reports. No jargon — just the numbers that move your business." },
  { title: "Multi-Platform Coverage", desc: "From Meta and Google to TikTok, LinkedIn, Snapchat, and programmatic — we go where your audience is." },
  { title: "Dedicated Strategist", desc: "A senior paid media specialist owns your account, backed by a full team of analysts, creatives, and data engineers." },
];

const process = [
  { step: "01", title: "Audit & Strategy", desc: "We audit your existing accounts (if any), analyse your market and competitors, define KPIs, and build a full-funnel paid media strategy aligned with your business objectives." },
  { step: "02", title: "Campaign Architecture", desc: "We structure campaigns with precision — the right campaign types, ad sets, audiences, and budget allocation to maximise learnings and minimise wasted spend from day one." },
  { step: "03", title: "Creative Production", desc: "Our creative team produces platform-native ad assets — video, static, carousel, UGC — each built with performance in mind. Multiple variations ready for A/B testing at launch." },
  { step: "04", title: "Launch & Optimise", desc: "Campaigns go live with daily monitoring. We optimise bids, budgets, audiences, and creatives continuously, scaling what works and cutting what doesn't." },
  { step: "05", title: "Scale & Report", desc: "As performance data accumulates, we scale winning campaigns aggressively. Weekly reports keep you informed; monthly strategy reviews keep us aligned with your evolving goals." },
];

const platforms = ["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads", "Snapchat Ads", "Pinterest Ads", "YouTube Ads", "Amazon Ads", "Microsoft Ads", "Spotify Ads", "Reddit Ads", "Programmatic"];
const stats = [
  { value: "10X", label: "Average ROAS" },
  { value: "200+", label: "Brands Managed" },
  { value: "AED 50M+", label: "Ad Spend Managed" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Paid Media Management",
      "description": "Expert paid media management across Meta, Google, TikTok, LinkedIn and more. We deliver an average 10X ROAS for ambitious brands.",
      "provider": { "@type": "Organization", "name": "Firas Digital", "url": "https://firasdigital.com" },
      "areaServed": ["UAE", "Global"],
      "serviceType": "Paid Advertising Management",
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": { "@type": "Answer", "text": faq.a },
      })),
    },
  ],
};

export default function PaidMediaPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-outline-variant/10 flex items-center justify-between px-6 md:px-12 py-4">
        <Link href="/" className="text-xl font-black text-primary tracking-tighter">Firas Digital<span className="text-secondary">.</span></Link>
        <Link href="/contact" className="flex items-center gap-2 text-sm font-bold text-on-surface hover:text-secondary transition-colors">Book Free Audit →</Link>
      </header>
      <nav className="px-6 md:px-12 py-4 max-w-6xl mx-auto" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs text-on-surface-variant/50">
          <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
          <li>/</li>
          <li><Link href="/#services" className="hover:text-secondary transition-colors">Services</Link></li>
          <li>/</li>
          <li className="text-on-surface-variant">Paid Media</li>
        </ol>
      </nav>
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-blue-600 opacity-[0.06] blur-[140px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600 opacity-[0.05] blur-[120px] rounded-full" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">Paid Media Management</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-on-surface leading-[1.04] tracking-tight mb-6 max-w-4xl">Dominate Every<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">High-Intent Platform</span></h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">Precision paid media management across Meta, Google, TikTok, LinkedIn and beyond. We engineer campaigns that deliver an average 10X ROAS for ambitious brands.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-secondary text-on-secondary font-black text-base hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-secondary/25">Book Free Audit</Link>
            <Link href="/#services" className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-on-surface/20 text-on-surface font-black text-base hover:border-secondary hover:text-secondary transition-all active:scale-95">View All Services →</Link>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-surface-container-low">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-6">What is Paid Media Management?</h2>
          <div className="text-on-surface-variant leading-relaxed space-y-4">
            <p>Paid media management is the discipline of planning, executing, and continuously optimising paid advertising campaigns across digital platforms to drive measurable business results. Unlike organic channels that take months to build, paid media delivers immediate reach and traffic — but only when managed with precision and expertise.</p>
            <p>At Firas Digital, paid media management is not about running ads — it is about engineering profit. We begin with a deep analysis of your business model, target audiences, competitive landscape, and unit economics. This foundation informs a full-funnel campaign architecture that reaches potential customers at every stage of their journey: cold audiences discovering your brand for the first time, warm prospects who have engaged with your content, and high-intent users ready to convert.</p>
            <p>Our paid media team manages campaigns across Meta Ads (Facebook and Instagram), Google Ads (Search, Display, Shopping, YouTube), TikTok Ads, LinkedIn Ads, Snapchat Ads, Pinterest, Reddit, Amazon Ads, Microsoft Ads, Spotify, and programmatic display networks. Every platform requires different strategies, creative formats, bidding approaches, and audience methodologies — and our specialists are certified and experienced across all of them.</p>
            <p>Across 200+ brands and AED 50M+ in ad spend managed, Firas Digital has developed a proven system for delivering an average 10X return on ad spend — making paid media your most reliable and scalable growth engine.</p>
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-4">Why Choose Firas Digital for Paid Media?</h2>
          <p className="text-on-surface-variant mb-12 max-w-2xl">Every advantage our clients get when they work with us.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg>
                </div>
                <h3 className="font-black text-on-surface">{b.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-surface-container-low">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-4">Our Paid Media Process</h2>
          <p className="text-on-surface-variant mb-12 max-w-2xl">A systematic approach engineered for consistent, scalable results.</p>
          <div className="flex flex-col gap-6">
            {process.map((p) => (
              <div key={p.step} className="flex gap-6 items-start bg-surface-container rounded-2xl p-6 border border-outline-variant/20">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-purple-500 flex-shrink-0 w-12">{p.step}</span>
                <div><h3 className="font-black text-on-surface text-lg mb-2">{p.title}</h3><p className="text-sm text-on-surface-variant leading-relaxed">{p.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-4">Platforms We Manage</h2>
          <p className="text-on-surface-variant mb-10 max-w-2xl">We run campaigns where your audience actually is — across every major paid channel.</p>
          <div className="flex flex-wrap gap-3">
            {platforms.map((p) => (<span key={p} className="px-4 py-2 rounded-full bg-surface-container border border-outline-variant/20 text-sm font-bold text-on-surface-variant hover:text-secondary hover:border-secondary/30 transition-colors">{p}</span>))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-gradient-to-r from-blue-950/50 via-purple-950/50 to-background border-y border-outline-variant/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (<div key={s.label}><div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">{s.value}</div><div className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">{s.label}</div></div>))}
        </div>
      </section>
      <section className="py-20 px-6 bg-surface-container-low">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-4">Frequently Asked Questions</h2>
          <p className="text-on-surface-variant mb-12 max-w-2xl">Everything you need to know about our paid media management service.</p>
          <div className="flex flex-col gap-6">
            {faqs.map((faq, i) => (<div key={i} className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20"><h3 className="font-black text-on-surface mb-3 text-base">{faq.q}</h3><p className="text-sm text-on-surface-variant leading-relaxed">{faq.a}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-on-surface mb-6">Ready to 10X Your ROAS?</h2>
          <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">Book a free 30-minute paid media audit. We&apos;ll analyse your current campaigns (or lack thereof) and show you exactly what&apos;s leaving money on the table.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-secondary text-on-secondary font-black text-lg hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-secondary/20">Book Your Free Audit</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
