import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import ServiceTabs from "@/components/ServiceTabs";
import type { ServiceTab } from "@/components/ServiceTabs";

const webDesignTabs: ServiceTab[] = [
  {
    id: "discipline",
    label: "The Discipline",
    title: "Web design that converts visitors into customers from the first pixel",
    body: "Web Design & CRO is the science and art of building digital experiences that don't just look impressive — they systematically convert visitors into leads, customers, and repeat buyers. Every design decision, from layout and hierarchy to colour, copy, and call-to-action placement, is informed by user psychology, conversion data, and continuous testing. Beautiful without performance is decoration; performance without beauty is friction. We deliver both.",
    stat: { value: "3.4X", label: "Avg. Conversion Lift" },
  },
  {
    id: "approach",
    label: "Our Approach",
    title: "Data-driven design, not opinionated aesthetics",
    body: "We begin every project with a conversion audit — analysing your existing traffic, heatmaps, session recordings, and funnel data to identify exactly where visitors drop off and why. This data informs our design hypotheses, which we validate through A/B and multivariate testing before finalising. The result is a website that isn't designed to win awards — it's designed to win customers. We build for Core Web Vitals, mobile-first performance, and accessibility alongside conversion.",
    stat: { value: "92", label: "Avg. CWV Score" },
  },
  {
    id: "results",
    label: "Your Results",
    title: "More revenue from your existing traffic, before you spend more on ads",
    body: "Our clients typically see conversion rate improvements of 2–4X within the first 90 days. This means the same paid media budget, the same organic traffic, the same email list — delivering dramatically more revenue. A site converting at 4% instead of 1% is effectively a 4X reduction in your customer acquisition cost across every channel. CRO is the highest-leverage investment you can make if you're already driving meaningful traffic.",
    stat: { value: "+218%", label: "Avg. Revenue Uplift" },
  },
];

export const metadata: Metadata = {
  title: "Web Design & CRO Services | Conversion-First Websites | Firas Digital",
  description:
    "High-converting websites and CRO strategies that turn clicks into clients. Scientific A/B testing, UX optimisation, and landing pages built for performance.",
  keywords: [
    "web design agency",
    "CRO services",
    "conversion rate optimisation",
    "landing page design",
    "UX design",
    "A/B testing",
    "website redesign",
    "high-converting websites",
    "UI/UX design UAE",
  ],
  openGraph: {
    title: "Web Design & CRO Services | Conversion-First Websites | Firas Digital",
    description:
      "High-converting websites and CRO strategies that turn clicks into clients. Scientific A/B testing, UX optimisation, and landing pages built for performance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & CRO | Firas Digital",
    description:
      "High-converting websites and CRO strategies that turn clicks into clients.",
  },
};

const faqs = [
  {
    q: "What is CRO (Conversion Rate Optimisation)?",
    a: "Conversion Rate Optimisation (CRO) is the systematic process of increasing the percentage of website visitors who take a desired action — whether that's making a purchase, submitting a lead form, booking a call, signing up for a newsletter, or any other conversion goal. CRO is rooted in data and scientific methodology: rather than redesigning a website based on aesthetic preferences or gut instincts, we use user behaviour analytics, heatmaps, session recordings, and A/B testing to identify exactly why visitors are leaving without converting, and then implement and test changes that remove friction and drive more completions. Even a modest 1% improvement in conversion rate can dramatically increase revenue without spending an extra dirham on advertising — making CRO one of the highest-ROI investments a business can make.",
  },
  {
    q: "How long does a website redesign take?",
    a: "The timeline for a website redesign at Firas Digital depends on the scope and complexity of the project. A focused landing page or small website (5–10 pages) typically takes 3–6 weeks from kick-off to launch, including discovery, design, development, and testing phases. A full website redesign for a medium-sized business (20–50 pages) typically takes 8–12 weeks. Enterprise-scale projects with complex integrations, custom functionality, and extensive content requirements can take 3–6 months. We always structure projects in phases to ensure you have early visibility into the design direction before we move to development. Our process includes a rigorous QA and performance testing phase before any site goes live, ensuring Core Web Vitals scores, accessibility standards, and conversion tracking are all in order.",
  },
  {
    q: "Do you build on specific platforms?",
    a: "We are platform-agnostic and work with the technology that best suits your business needs and goals. For marketing-led websites and landing pages, we frequently build with Next.js, Webflow, and WordPress with performance-optimised configurations. For e-commerce, we work extensively with Shopify (including Shopify Plus for enterprise) and WooCommerce. For enterprise clients with custom requirements, we build fully bespoke solutions. We always recommend the platform based on your team's technical capabilities, scalability needs, content management requirements, and integration ecosystem — not on what's easiest for us. Regardless of platform, all sites we build are optimised for speed (targeting 90+ Core Web Vitals scores), SEO, and conversion from day one.",
  },
  {
    q: "What's the difference between UX and CRO?",
    a: "UX (User Experience) design is the broader discipline of designing digital products that are intuitive, enjoyable, and easy to use. UX encompasses information architecture, navigation design, interaction patterns, accessibility, and the overall experience of using a website or app. CRO is a more specific, commercially-focused practice that uses quantitative data and experimentation to improve conversion rates on specific pages or flows. While UX focuses on the quality of the overall experience, CRO focuses on measurable business outcomes. In practice, the two are deeply interconnected: poor UX almost always leads to poor conversion rates, and CRO testing often surfaces UX problems. At Firas Digital, we integrate both disciplines into every project — our designers think about user experience, and our CRO specialists test whether those design decisions actually improve the metrics that matter.",
  },
  {
    q: "How do you know what to test on my website?",
    a: "We use a data-driven prioritisation framework to identify the highest-impact testing opportunities on your website. The process begins with comprehensive analytics analysis in GA4 — identifying which pages have the highest drop-off rates, which traffic sources convert worst, and where users abandon key funnels. We layer in heatmap and click-map data to see where users' attention actually goes on the page versus where it should go. Session recordings reveal exact friction points — where users get confused, hesitate, or give up. We also conduct expert heuristic evaluations comparing your pages against proven CRO principles and best practices. From this research, we build a prioritised testing backlog ordered by potential impact, ease of implementation, and statistical validity. Tests are designed with clear hypotheses, control and variant versions, and run until statistical significance is reached.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes, website redesigns are one of our most common engagements. Before touching a single pixel, we conduct a thorough audit of your current site — analysing your analytics for conversion data, identifying high-performing pages to preserve and strengthen, and understanding what's working so we don't throw the baby out with the bathwater. Many redesigns destroy organic rankings and conversion performance by failing to properly migrate content, maintain URL structures, or understand what made the original site effective. Our redesign process is surgical: we preserve what works, fix what doesn't, and layer in performance improvements throughout. Post-launch, we monitor key metrics closely in the first 30 days to quickly address any issues and optimise the new experience.",
  },
  {
    q: "Do you offer landing page design for ads?",
    a: "Absolutely — high-converting landing pages for paid advertising campaigns are a core specialty of our web design and CRO team. Landing pages for ads are fundamentally different from regular website pages: they need to maintain message match with the ad that sent the user there, eliminate all distractions and navigation that could lead users away from the conversion goal, build trust rapidly through social proof and clear value propositions, and drive a single, clear call-to-action with minimal friction. We design and build dedicated landing pages for every major campaign, often running multiple variants from day one for rapid A/B testing. Our landing pages consistently achieve 2–4X higher conversion rates compared to sending ad traffic to generic website pages.",
  },
  {
    q: "What makes a high-converting website?",
    a: "A high-converting website is the result of many interconnected elements working together seamlessly. The most critical factors include: clear and compelling value proposition communicated within the first five seconds of visiting; message match — the website delivers exactly what the ad, email, or search result promised; social proof — visible, credible reviews, case studies, testimonials, and trust signals from recognisable brands or media; fast loading speed — every additional second of load time reduces conversions by 7-12%; mobile optimisation — with 60-70% of web traffic now mobile, a poor mobile experience kills conversions; a clear hierarchy that guides the eye toward the primary conversion goal; friction-free forms with only essential fields; and clear, benefit-led calls-to-action that tell visitors exactly what to do next and why. Every site we build is engineered with all these factors from day one, not bolted on as afterthoughts.",
  },
];

const benefits = [
  {
    title: "Conversion-First Design",
    desc: "Every design decision is made with conversion in mind. Beautiful and effective — because aesthetics without performance is just art.",
  },
  {
    title: "Scientific A/B Testing",
    desc: "Structured experimentation that removes guesswork. We test, we learn, we improve — continuously, not sporadically.",
  },
  {
    title: "90+ Core Web Vitals",
    desc: "Every site we build achieves top performance scores — faster sites rank better, convert better, and provide better user experiences.",
  },
  {
    title: "CRO From Day One",
    desc: "Unlike agencies that build first and optimise later, we integrate conversion principles into every design decision from the start.",
  },
  {
    title: "Landing Pages That Convert",
    desc: "Ad-specific landing pages designed to maintain message match and drive a single conversion action — routinely 2-4X more effective than homepages.",
  },
  {
    title: "Full Handover & Training",
    desc: "Complete documentation, CMS training, and ongoing support so your team can manage and update the site confidently after launch.",
  },
];

const process = [
  { step: "01", title: "Discovery & Research", desc: "We audit your current site, analyse competitors, review your analytics, map user journeys, and interview stakeholders to understand your business goals, audience, and conversion opportunities." },
  { step: "02", title: "UX Strategy & Wireframes", desc: "Information architecture, user flow mapping, and low-fidelity wireframes establish the conversion-optimised structure before any visual design begins. No surprises in the design phase." },
  { step: "03", title: "Visual Design", desc: "High-fidelity designs aligned with your brand, conversion best practices, and platform constraints. Multiple iterations based on your feedback until the design is exactly right." },
  { step: "04", title: "Development & QA", desc: "Pixel-perfect development with performance optimisation built in. Comprehensive QA across devices and browsers, tracking setup, and accessibility checks before any launch." },
  { step: "05", title: "Launch & CRO Testing", desc: "Post-launch monitoring, Core Web Vitals verification, and the beginning of our structured A/B testing programme to continuously improve conversion rates beyond launch day." },
];

const platforms = ["Next.js", "Webflow", "WordPress", "Shopify", "Shopify Plus", "React", "Figma", "GA4", "Hotjar", "VWO", "Optimizely", "Google Optimize"];

const stats = [
  { value: "2-4X", label: "Conversion Lift" },
  { value: "90+", label: "Core Web Vitals Score" },
  { value: "3-6 wks", label: "Average Launch Time" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Web Design & CRO Services",
      "description": "High-converting website design and conversion rate optimisation. Scientific A/B testing, UX design, and landing pages built for performance.",
      "provider": {
        "@type": "Organization",
        "name": "Firas Digital",
        "url": "https://firasdigital.com",
      },
      "areaServed": ["UAE", "Global"],
      "serviceType": "Web Design and Conversion Rate Optimisation",
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

export default function WebDesignCROPage() {
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
          <li className="text-on-surface-variant">Web Design & CRO</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-primary opacity-[0.06] blur-[140px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600 opacity-[0.05] blur-[120px] rounded-full" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Web Design & CRO
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-on-surface leading-[1.04] tracking-tight mb-6 max-w-4xl">
            Websites Built to<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Convert, Not Just Impress.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
            Scientific CRO methodology and world-class design combined. Every pixel tested. Every element optimised. Websites that turn your traffic into revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-secondary text-on-secondary font-black text-base hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-secondary/25">
              Book Free CRO Audit
            </Link>
            <Link href="/#services" className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-on-surface/20 text-on-surface font-black text-base hover:border-primary hover:text-primary transition-all active:scale-95">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* What is Web Design & CRO */}
      <section className="py-20 px-6 bg-surface-container-low">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-6">What is Web Design & CRO?</h2>
          <ServiceTabs tabs={webDesignTabs} />
          <div className="text-on-surface-variant leading-relaxed space-y-4">
            <p>
              Web design and Conversion Rate Optimisation (CRO) are two disciplines that, when combined, transform your website from a digital brochure into a high-performing revenue engine. Most businesses spend heavily on driving traffic to their website — through ads, SEO, social media, and email — but fail to capitalise on that traffic because their website isn&apos;t built to convert. Firas Digital solves this.
            </p>
            <p>
              Our web design philosophy is conversion-first by default. Unlike traditional design agencies that prioritise aesthetics and then retrofit CRO principles later, we integrate conversion thinking into every design decision from the very first wireframe. This means clear visual hierarchies that guide users toward your conversion goal, message-matched landing pages that continue the narrative started by your ads, trust signals placed strategically at the exact moments of user hesitation, and frictionless forms and checkout flows that eliminate every unnecessary barrier between a visitor and a conversion.
            </p>
            <p>
              Our CRO service goes beyond design to implement a rigorous, data-driven testing programme. We use heatmaps, session recordings, user surveys, and GA4 analytics to understand exactly how real users behave on your site — where they click, where they scroll, where they hesitate, and where they leave. From this behavioural data, we generate specific hypotheses about what changes would improve conversion rates, then run structured A/B tests to validate those hypotheses with statistical confidence before rolling out any permanent changes.
            </p>
            <p>
              The compounding effect of systematic CRO is extraordinary. A 1% improvement in conversion rate on a website receiving 10,000 monthly visitors means 100 additional conversions every month — without increasing your ad spend by a single dirham. That is new revenue generated from the traffic you are already paying for. Over 12 months of structured testing, our clients typically see 2–4X improvements in their primary conversion rates, fundamentally transforming the economics of their marketing spend.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-4">Why Choose Firas Digital for Web Design & CRO?</h2>
          <p className="text-on-surface-variant mb-12 max-w-2xl">The advantages that make our approach categorically different.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center flex-shrink-0">
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
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-4">Our Web Design & CRO Process</h2>
          <p className="text-on-surface-variant mb-12 max-w-2xl">From discovery to continuous optimisation — a rigorous, results-driven methodology.</p>
          <div className="flex flex-col gap-6">
            {process.map((p) => (
              <div key={p.step} className="flex gap-6 items-start bg-surface-container rounded-2xl p-6 border border-outline-variant/20">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary to-purple-500 flex-shrink-0 w-12">{p.step}</span>
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
          <p className="text-on-surface-variant mb-10 max-w-2xl">The best tools for every part of the design and optimisation process.</p>
          <div className="flex flex-wrap gap-3">
            {platforms.map((p) => (
              <span key={p} className="px-4 py-2 rounded-full bg-surface-container border border-outline-variant/20 text-sm font-bold text-on-surface-variant hover:text-primary hover:border-primary/30 transition-colors">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary/5 via-purple-900/10 to-background border-y border-outline-variant/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 mb-2">{s.value}</div>
              <div className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-surface-container-low">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-4">Frequently Asked Questions</h2>
          <p className="text-on-surface-variant mb-12 max-w-2xl">Everything you need to know about our web design and CRO services.</p>
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
          <h2 className="text-3xl md:text-5xl font-black text-on-surface mb-6">Ready for a Website That Works?</h2>
          <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">
            Book a free CRO audit. We&apos;ll analyse your current website conversion performance, identify the biggest revenue leaks, and show you the roadmap to a higher-converting website.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-secondary text-on-secondary font-black text-lg hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-secondary/20">
            Book Your Free CRO Audit
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
