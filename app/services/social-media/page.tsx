import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import ServiceTabs from "@/components/ServiceTabs";
import type { ServiceTab } from "@/components/ServiceTabs";

const socialMediaTabs: ServiceTab[] = [
  {
    id: "discipline",
    label: "The Discipline",
    title: "Social media that builds real communities and drives real revenue",
    body: "Social Media Management is the strategic discipline of building and maintaining your brand's presence across platforms in a way that earns attention, builds trust, and converts followers into paying customers. In 2025, the brands winning on social aren't the ones posting most frequently — they're the ones creating content that stops the scroll, sparks conversation, and builds an audience that genuinely cares about what they do next.",
    stat: { value: "12M+", label: "Organic Reach Delivered" },
  },
  {
    id: "approach",
    label: "Our Approach",
    title: "Platform-native content engineered for engagement and growth",
    body: "We create content built specifically for each platform's algorithm, audience behaviour, and creative formats — not repurposed assets dumped across channels. Instagram reels, TikTok-native short form, LinkedIn thought leadership, Twitter engagement plays, and Snapchat Stories all require distinct strategies. Our content team researches your audience, studies your competitors' content performance, and develops a bespoke strategy that positions your brand as a category leader.",
    stat: { value: "4.8X", label: "Avg. Engagement Rate" },
  },
  {
    id: "results",
    label: "Your Results",
    title: "A brand that people follow, share, and buy from",
    body: "Our social media clients typically see 3–5X engagement rate improvements within the first 60 days, alongside meaningful follower growth from their target audience. Beyond vanity metrics, we connect social activity to business outcomes — tracking link clicks, lead form completions, DM inquiries, and attributed revenue. Social media done right becomes a full-funnel channel: building awareness at the top, nurturing consideration in the middle, and converting at the bottom.",
    stat: { value: "60 days", label: "To Measurable Growth" },
  },
];

export const metadata: Metadata = {
  title: "Social Media Management | Content Creation & Growth | Firas Digital",
  description:
    "Elevate your brand with scroll-stopping social media content. Community management, influencer strategy, and viral content creation across Instagram, TikTok & LinkedIn.",
  keywords: [
    "social media management",
    "content creation agency",
    "Instagram management",
    "TikTok marketing",
    "LinkedIn management",
    "social media agency UAE",
    "community management",
    "influencer marketing",
    "brand social media",
  ],
  openGraph: {
    title: "Social Media Management | Content Creation & Growth | Firas Digital",
    description:
      "Elevate your brand with scroll-stopping social media content. Community management, influencer strategy, and viral content creation across Instagram, TikTok & LinkedIn.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Management | Firas Digital",
    description:
      "Scroll-stopping content and community management across Instagram, TikTok, LinkedIn and more.",
  },
};

const faqs = [
  {
    q: "What does social media management include?",
    a: "Our social media management service is comprehensive — it covers every aspect of building and maintaining a powerful brand presence on social platforms. This includes social media strategy development aligned with your business objectives; content planning and editorial calendar management; professional content creation (photography, videography, graphic design, and copywriting); platform-native content formatting for each channel's unique requirements; community management (responding to comments, DMs, and brand mentions); hashtag strategy and optimisation; paid social amplification to boost organic content performance; influencer identification and collaboration; monthly analytics reporting and strategy reviews; and crisis communications support if needed. We manage your brand's social presence as if it were our own — with the same care, creativity, and strategic rigour we bring to our own channels.",
  },
  {
    q: "Which platforms do you manage?",
    a: "We manage social media presence across all major platforms including Instagram (feed posts, Stories, Reels, and Live), TikTok (short-form video content and trends), LinkedIn (company page management, thought leadership content, and employee advocacy programmes), Facebook (page management, group management, and event promotion), YouTube (channel management, Shorts, and long-form video strategy), X/Twitter (real-time engagement and brand voice), Pinterest (visual content strategy for relevant brands), and Snapchat (Story content and Spotlight). We recommend the platforms that make most sense for your specific business, audience demographics, and goals — not every business needs to be everywhere, and spreading too thin is a common and costly mistake.",
  },
  {
    q: "How many posts per week do you create?",
    a: "Content volume is tailored to your specific platform strategy, audience, and budget. As a guide, our management packages typically include 3–5 Instagram feed posts per week, daily or near-daily Stories, 3–5 TikTok videos per week (short-form video requires higher frequency than static content), 3–4 LinkedIn posts per week for B2B clients, and 2–3 Facebook posts per week. We prioritise quality over quantity — a brand that posts three genuinely excellent, highly-engaging pieces of content per week will consistently outperform one posting mediocre content daily. All content calendars are shared with you two weeks in advance for review and approval before any content goes live.",
  },
  {
    q: "Do you handle comments and DMs?",
    a: "Yes, community management — including responding to comments, direct messages, story replies, and brand mentions — is a core part of our social media management service. We handle all inbound community interactions during business hours, with rapid response times that keep your audience engaged and your brand reputation protected. For time-sensitive or complex queries, we have clear escalation protocols that bring in your internal team when needed, and we maintain detailed brand voice guidelines so every response sounds authentically like your brand. We also proactively engage with your audience — commenting on relevant posts, engaging with followers' content, and participating in conversations within your brand's community — which the algorithm rewards with greater organic reach.",
  },
  {
    q: "What's your content creation process?",
    a: "Our content creation process is strategic, collaborative, and built around creating content that actually performs — not just content that fills a calendar. We begin each engagement with a deep brand and audience discovery session: understanding your brand voice, visual identity, content pillars, target audience personas, and content that has historically resonated or flopped. From this foundation, we build a content strategy and monthly calendar that maps content types to your business objectives and audience preferences. Our in-house creative team then produces each piece of content — whether that is a stylised Reel, a data-driven LinkedIn thought leadership post, a branded graphic, or a TikTok trend adaptation — with your brand guidelines as the foundation and performance as the north star. All content is reviewed and approved by your team before scheduling.",
  },
  {
    q: "How do you measure social media success?",
    a: "Social media measurement should be connected to business outcomes, not just engagement vanity metrics. At Firas Digital, we track and report on a layered set of KPIs. At the awareness level: reach, impressions, follower growth rate, and share of voice. At the engagement level: engagement rate (likes, comments, shares, saves relative to reach), video completion rates, Story retention rates, and click-through rates. At the conversion level: website traffic attributed to social, lead forms completed, and revenue attributed through social touchpoints where trackable. We provide monthly analytics reports in plain language with clear commentary on what drove performance, what underperformed and why, and what the content strategy for the coming month will focus on as a result.",
  },
  {
    q: "Do you work with influencers?",
    a: "Yes, influencer marketing is an integrated part of our social media offering. We manage the full influencer marketing process from identification through to reporting: identifying and vetting relevant influencers across micro (10K–100K), macro (100K–1M), and mega (1M+) tiers based on audience authenticity, engagement quality, and relevance to your brand; negotiating rates and contracts; briefing creators with clear brand guidelines and campaign objectives; reviewing and approving content before publication; managing deliverables and timelines; and reporting on campaign performance. In markets like the UAE, influencer marketing is particularly powerful — we have existing relationships with key regional content creators across lifestyle, business, food, fitness, beauty, and tech verticals.",
  },
  {
    q: "Can social media management work for B2B brands?",
    a: "Absolutely — and it is significantly underutilised by B2B companies, which represents a major competitive opportunity. LinkedIn is the most obvious B2B social platform, but we see strong results for B2B brands on Instagram (for brand building and talent attraction), YouTube (for educational content and thought leadership), and increasingly on TikTok (for humanising the brand and reaching decision-makers who consume social content outside work hours). Our B2B social media approach focuses on thought leadership content — positioning your founders and executives as credible voices in your industry — educational content that demonstrates your expertise and attracts inbound interest, client success stories and case studies that build trust with potential buyers, and community engagement in relevant professional groups and conversations. B2B buying cycles are long, and social media is the most cost-effective channel for staying top-of-mind throughout that journey.",
  },
];

const benefits = [
  {
    title: "Scroll-Stopping Creative",
    desc: "Our in-house creative team produces platform-native content that captures attention in the first second — the only second that counts.",
  },
  {
    title: "Strategy-Led Approach",
    desc: "Every post serves a purpose. Our content is mapped to business objectives, funnel stages, and audience insights — never posted just to fill a calendar.",
  },
  {
    title: "Full Community Management",
    desc: "We handle every comment, DM, and mention as an extension of your brand — protecting your reputation and building genuine community.",
  },
  {
    title: "Influencer Network",
    desc: "Access to a curated network of authentic creators in the UAE and globally. We manage the entire influencer marketing process end-to-end.",
  },
  {
    title: "Algorithm Expertise",
    desc: "We stay ahead of platform algorithm changes so your content keeps performing even as social platforms evolve their reach mechanics.",
  },
  {
    title: "Transparent Reporting",
    desc: "Monthly reports that go beyond vanity metrics to show the real business impact of your social media investment.",
  },
];

const process = [
  { step: "01", title: "Brand & Audience Discovery", desc: "Deep dive into your brand voice, visual identity, audience personas, competitive landscape, and historical content performance to build the strategic foundation for everything we create." },
  { step: "02", title: "Strategy & Content Planning", desc: "Development of your social media strategy, platform-specific approaches, content pillars, posting frequency, and monthly editorial calendar — all aligned with your business objectives." },
  { step: "03", title: "Content Creation", desc: "Our creative team produces all content — video, photography, graphics, copy — in advance with a two-week buffer for your review and approval before anything goes live." },
  { step: "04", title: "Publishing & Community Management", desc: "Scheduled publishing at optimal times for each platform, active community management, and real-time engagement to build genuine audience relationships." },
  { step: "05", title: "Analytics & Optimisation", desc: "Monthly performance reviews connecting content performance to business outcomes, followed by strategy refinements based on what the data tells us audiences respond to most." },
];

const platforms = ["Instagram", "TikTok", "LinkedIn", "Facebook", "YouTube", "X (Twitter)", "Pinterest", "Snapchat", "Threads", "Canva Pro", "Adobe Creative Suite", "Later", "Hootsuite"];

const stats = [
  { value: "340%", label: "Avg. Engagement Growth" },
  { value: "200+", label: "Brands Managed" },
  { value: "50M+", label: "Content Impressions Delivered" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Social Media Management",
      "description": "Full-service social media management including content creation, community management, influencer marketing, and analytics across Instagram, TikTok, LinkedIn and more.",
      "provider": {
        "@type": "Organization",
        "name": "Firas Digital",
        "url": "https://firasdigital.com",
      },
      "areaServed": ["UAE", "Global"],
      "serviceType": "Social Media Management",
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
    },
  ],
};

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Topbar */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-outline-variant/10 flex items-center justify-between px-6 md:px-12 py-4">
        <Link href="/" className="group text-xl font-black tracking-tighter transition-all duration-300 hover:scale-105 active:scale-95">
          <span className="text-white group-hover:text-primary transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,136,181,0.6)]">Firas Digital</span><span className="text-secondary group-hover:text-white transition-colors duration-300">.</span>
        </Link>
        <Link href="/contact" className="flex items-center gap-2 text-sm font-bold text-on-surface hover:text-secondary transition-colors">
          Book Free Audit →
        </Link>
      </header>

      {/* Breadcrumb */}
      <nav className="px-6 md:px-12 py-4 max-w-6xl mx-auto" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs text-on-surface-variant/50">
          <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
          <li>/</li>
          <li><Link href="/#services" className="hover:text-secondary transition-colors">Services</Link></li>
          <li>/</li>
          <li className="text-on-surface-variant">Social Media Management</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-orange-500 opacity-[0.06] blur-[140px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary opacity-[0.05] blur-[120px] rounded-full" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
            Social Media Management
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-on-surface leading-[1.04] tracking-tight mb-6 max-w-4xl">
            Stop the Scroll.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-primary">Own the Feed.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
            Community-led social media growth with scroll-stopping content creation. We build, grow, and manage your brand&apos;s presence across Instagram, TikTok, LinkedIn and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-secondary text-on-secondary font-black text-base hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-secondary/25">
              Book Free Audit
            </Link>
            <Link href="/#services" className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-on-surface/20 text-on-surface font-black text-base hover:border-orange-400 hover:text-orange-400 transition-all active:scale-95">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* What is Social Media Management */}
      <section className="py-20 px-6 bg-surface-container-low">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-6">What is Social Media Management?</h2>
          <ServiceTabs tabs={socialMediaTabs} />
          <div className="text-on-surface-variant leading-relaxed space-y-4">
            <p>
              Social media management is the strategic, creative, and operational discipline of building and maintaining a brand&apos;s presence across social media platforms. Done properly, it is one of the most powerful tools for building brand awareness, establishing authority, driving community engagement, and generating inbound leads. Done poorly — with inconsistent posting, generic content, and no strategy — it is a significant waste of resource and an opportunity missed.
            </p>
            <p>
              At Firas Digital, social media management is not about posting for the sake of posting. It begins with a rigorous strategy: understanding your brand voice, your target audience&apos;s platform behaviour and content preferences, your competitive landscape, and the specific business objectives — whether that&apos;s brand awareness, community growth, lead generation, or direct social commerce. This strategy drives every content decision, from the platforms we prioritise to the formats we produce and the frequency we publish.
            </p>
            <p>
              Content creation is where most social media management falls short. Generic, template-driven content does not build brands — original, platform-native, genuinely valuable or entertaining content does. Our in-house creative team specialises in producing content that is designed for the specific platform it will live on: not the same post reformatted for each channel, but content created from the ground up for Instagram Reels, TikTok, LinkedIn, and each platform&apos;s unique consumption context and algorithm preferences.
            </p>
            <p>
              We also manage the full community side of social — responding to comments and DMs, engaging proactively with your audience, managing influencer relationships, and monitoring your brand&apos;s reputation across social channels. A brand that responds quickly and authentically to its community builds trust that no amount of advertising can buy. Combined with our paid social amplification of top-performing organic content, the result is a social media presence that delivers measurable business impact — not just impressive follower counts.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-4">Why Choose Firas Digital for Social Media?</h2>
          <p className="text-on-surface-variant mb-12 max-w-2xl">What our clients get that sets us apart from every other social media agency.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-primary flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <h3 className="font-black text-on-surface">{b.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-surface-container-low">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-4">Our Social Media Management Process</h2>
          <p className="text-on-surface-variant mb-12 max-w-2xl">Strategy-first, creative-led, and data-optimised at every step.</p>
          <div className="flex flex-col gap-6">
            {process.map((p) => (
              <div key={p.step} className="flex gap-6 items-start bg-surface-container rounded-2xl p-6 border border-outline-variant/20">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-primary flex-shrink-0 w-12">{p.step}</span>
                <div>
                  <h3 className="font-black text-on-surface text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-4">Platforms & Tools We Use</h2>
          <p className="text-on-surface-variant mb-10 max-w-2xl">Every major social platform, managed with professional-grade tools.</p>
          <div className="flex flex-wrap gap-3">
            {platforms.map((p) => (
              <span key={p} className="px-4 py-2 rounded-full bg-surface-container border border-outline-variant/20 text-sm font-bold text-on-surface-variant hover:text-orange-400 hover:border-orange-400/30 transition-colors">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-gradient-to-r from-orange-950/30 via-primary/5 to-background border-y border-outline-variant/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-primary mb-2">{s.value}</div>
              <div className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-surface-container-low">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-4">Frequently Asked Questions</h2>
          <p className="text-on-surface-variant mb-12 max-w-2xl">Everything you need to know about our social media management service.</p>
          <div className="flex flex-col gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20">
                <h3 className="font-black text-on-surface mb-3 text-base">{faq.q}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-on-surface mb-6">Ready to Own Your Feed?</h2>
          <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">
            Book a free social media audit. We&apos;ll review your current social presence, identify the biggest growth opportunities, and build you a custom social media growth strategy.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-secondary text-on-secondary font-black text-lg hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-secondary/20">
            Book Your Free Social Audit
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
