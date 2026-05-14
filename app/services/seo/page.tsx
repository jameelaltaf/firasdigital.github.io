import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SEO Services | Technical SEO & Content Strategy | Firas Digital",
  description:
    "Dominate search rankings with data-driven SEO. Technical SEO, content authority building, and link acquisition that doubles organic traffic in 60 days.",
  keywords: ["SEO services", "technical SEO", "content strategy", "link building", "local SEO UAE", "organic traffic growth", "search engine optimisation", "SEO agency Dubai", "keyword research"],
  openGraph: {
    title: "SEO Services | Technical SEO & Content Strategy | Firas Digital",
    description: "Dominate search rankings with data-driven SEO. Technical SEO, content authority building, and link acquisition that doubles organic traffic in 60 days.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services | Firas Digital",
    description: "Dominate search rankings with data-driven SEO that doubles organic traffic in 60 days.",
  },
};

const faqs = [
  { q: "How long does SEO take to show results?", a: "SEO is a compounding investment rather than an instant switch, but that doesn't mean results take forever. At Firas Digital, our clients typically see measurable improvements in rankings and organic traffic within 30–60 days of implementation — particularly for technical fixes and on-page optimisation. More competitive keywords and broader authority building take 3–6 months to show full impact. The important distinction is that once SEO results arrive, they compound: unlike paid ads that stop the moment you pause spend, organic rankings continue driving free traffic indefinitely. We have doubled organic traffic for clients within 60 days by identifying and resolving critical technical issues and targeting high-opportunity, lower-competition keywords first, creating early wins while building long-term authority." },
  { q: "What is technical SEO?", a: "Technical SEO refers to the optimisation of a website's infrastructure to ensure search engines can efficiently crawl, index, and understand its content. It encompasses a wide range of elements including site speed and Core Web Vitals (Google's official page experience signals), mobile-friendliness, proper URL structure and canonicalisation, XML sitemaps, robots.txt configuration, structured data and schema markup, fixing crawl errors and broken links, managing duplicate content, implementing HTTPS, optimising site architecture and internal linking, and ensuring JavaScript-rendered content is accessible to search bots. Technical SEO is the foundation on which all other SEO work is built — even the best content won't rank if search engines struggle to crawl and index your site. Our technical audits often uncover hidden issues costing clients thousands in lost organic traffic." },
  { q: "What's the difference between on-page and off-page SEO?", a: "On-page SEO refers to all optimisations made directly on your website to improve its relevance and quality signals for target keywords. This includes crafting compelling title tags and meta descriptions, optimising heading structure (H1–H6), ensuring keyword-rich but natural content, optimising images with alt text, improving internal linking, and enhancing content depth and comprehensiveness. Off-page SEO, by contrast, refers to actions taken outside your website to build its authority and trustworthiness in the eyes of search engines. The primary off-page factor is backlinks — links from other reputable websites pointing to yours — which signal to Google that your content is trusted and authoritative. We also consider brand mentions, social signals, and digital PR as part of a comprehensive off-page strategy. Both are essential and work synergistically: great on-page SEO amplifies the value of off-page authority signals." },
  { q: "How do you build backlinks?", a: "Link building at Firas Digital uses only white-hat, sustainable methodologies that build long-term authority without risking Google penalties. Our link acquisition strategy encompasses several proven techniques: digital PR — creating genuinely newsworthy content and data studies that journalists and bloggers naturally want to cite; guest posting — contributing high-quality expert articles to authoritative publications in your industry; resource link building — creating comprehensive resources (guides, tools, datasets) that become natural citation sources; broken link building — identifying broken links on high-authority sites and offering our client's content as a replacement; competitor backlink analysis — identifying where competitors get links and pursuing the same opportunities; and relationship-based outreach to industry publications, trade associations, and relevant directories. Every link we build is contextually relevant, from a domain with genuine authority, and adds value to the linking page's readers." },
  { q: "Do you do local SEO for UAE businesses?", a: "Yes, local SEO for UAE businesses is a core part of our service offering. Local SEO is critical for any business with a physical presence or service area in the UAE — whether you're in Dubai, Abu Dhabi, Sharjah, or across the Emirates. Our local SEO work includes optimising and actively managing your Google Business Profile (formerly Google My Business), building consistent NAP (Name, Address, Phone) citations across UAE-specific directories, generating and managing customer reviews, creating location-specific landing pages, implementing local schema markup, and building local backlinks from UAE-based publications and business directories. We also optimise for Arabic language queries and understand the unique search behaviour of audiences in the Gulf region, which differs meaningfully from Western markets." },
  { q: "How do you measure SEO success?", a: "SEO success measurement should always connect to business outcomes, not just vanity metrics. At Firas Digital, we track a comprehensive set of KPIs including organic search traffic (sessions, users, and new visitors from organic channels), keyword rankings for target terms across positions 1–3, 1–10, and first page, organic conversion rate and leads or revenue attributed to organic search, Domain Authority and backlink profile growth, Core Web Vitals and technical health scores, crawl coverage and indexation rates, and click-through rates from search results pages. We use GA4 for traffic and conversion tracking, Google Search Console for technical health and keyword performance, Ahrefs and SEMrush for competitive intelligence and backlink analysis, and Screaming Frog for technical audits. Monthly reports connect all metrics to your business goals." },
  { q: "What is keyword research and why does it matter?", a: "Keyword research is the systematic process of identifying the search terms your target customers use when looking for products or services like yours, understanding the search intent behind those queries, assessing the competition for ranking, and estimating the traffic potential. It forms the strategic foundation of every SEO campaign. Without rigorous keyword research, you risk creating content and optimising pages for terms that either nobody searches for, have no commercial intent, or are dominated by competitors with far greater authority. Our keyword research goes beyond volume and difficulty to identify intent clusters — understanding whether a searcher is in awareness, consideration, or decision mode — allowing us to create content that matches exactly what the user needs at that moment, which is what Google's algorithms reward with top rankings." },
  { q: "Can SEO work alongside paid ads?", a: "Absolutely — in fact, SEO and paid advertising are most powerful when run together as part of an integrated digital marketing strategy. Paid search data provides invaluable insights for SEO: ad campaigns can quickly test which keywords and messages convert best before you invest heavily in organic content. Organic rankings provide a safety net when CPC prices rise, reducing your dependence on paid traffic for profitability. Together, owning both paid and organic positions for your key search terms doubles your visibility, increases brand trust (users see you twice on the same results page), and ultimately drives more qualified traffic than either channel alone. At Firas Digital, our paid media and SEO teams collaborate closely, sharing keyword intelligence, conversion data, and audience insights to make both channels more effective." },
];

const benefits = [
  { title: "340% Avg. Traffic Growth", desc: "Our clients see dramatic increases in organic search traffic, delivering compounding returns that grow over time without ongoing ad spend." },
  { title: "Technical SEO Excellence", desc: "We fix the foundational issues — Core Web Vitals, crawlability, site architecture — that silently cost you rankings every day." },
  { title: "Content Authority Building", desc: "Comprehensive content strategies that establish your brand as the definitive authority in your niche, driving backlinks naturally." },
  { title: "Aggressive Link Acquisition", desc: "White-hat link building that builds genuine authority through digital PR, guest posting, and resource-based link earning." },
  { title: "60-Day Results", desc: "We prioritise quick wins — targeting high-opportunity, lower-competition terms first while building long-term authority in parallel." },
  { title: "Full Transparency", desc: "Monthly reports in plain language, live keyword ranking dashboards, and direct access to your dedicated SEO strategist." },
];

const process = [
  { step: "01", title: "Technical Audit", desc: "We conduct a comprehensive technical audit covering 200+ ranking factors — identifying crawl issues, speed problems, indexation gaps, and structural issues costing you rankings." },
  { step: "02", title: "Keyword Strategy", desc: "Deep keyword research and intent mapping across your full service offering. We identify gaps, opportunities, and a prioritised roadmap targeting the highest-impact search terms first." },
  { step: "03", title: "On-Page Optimisation", desc: "We optimise every element on your pages — titles, meta descriptions, headings, content depth, internal linking, schema markup — to maximise relevance for target keywords." },
  { step: "04", title: "Content Creation", desc: "Our SEO content team creates authoritative, comprehensive content assets — pillar pages, topic clusters, and supporting articles — designed to rank and convert." },
  { step: "05", title: "Link Acquisition", desc: "Systematic off-page authority building through digital PR, guest posting, and outreach campaigns. Every link is contextually relevant and from genuinely authoritative sources." },
];

const platforms = ["Google Search Console", "GA4", "Ahrefs", "SEMrush", "Screaming Frog", "Moz", "SurferSEO", "Clearscope", "Schema.org", "Google PageSpeed Insights", "Core Web Vitals", "BrightLocal"];
const stats = [{ value: "340%", label: "Avg. Traffic Growth" }, { value: "60 days", label: "To See Results" }, { value: "Page 1", label: "Rankings Delivered" }];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", "name": "SEO Services", "description": "Data-driven SEO services including technical SEO, content strategy, and link building that doubles organic traffic in 60 days.", "provider": { "@type": "Organization", "name": "Firas Digital", "url": "https://firasdigital.com" }, "areaServed": ["UAE", "Global"], "serviceType": "Search Engine Optimisation" },
    { "@type": "FAQPage", "mainEntity": faqs.map((faq) => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) },
  ],
};

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-outline-variant/10 flex items-center justify-between px-6 md:px-12 py-4">
        <Link href="/" className="text-xl font-black text-primary tracking-tighter">Firas Digital<span className="text-secondary">.</span></Link>
        <Link href="/contact" className="flex items-center gap-2 text-sm font-bold text-on-surface hover:text-secondary transition-colors">Book Free Audit →</Link>
      </header>
      <nav className="px-6 md:px-12 py-4 max-w-6xl mx-auto" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs text-on-surface-variant/50">
          <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li><li>/</li>
          <li><Link href="/#services" className="hover:text-secondary transition-colors">Services</Link></li><li>/</li>
          <li className="text-on-surface-variant">SEO</li>
        </ol>
      </nav>
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-secondary opacity-[0.06] blur-[140px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-600 opacity-[0.05] blur-[120px] rounded-full" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-6">SEO Services</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-on-surface leading-[1.04] tracking-tight mb-6 max-w-4xl">Dominate Search.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-400">Own Your Category.</span></h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">Data-driven SEO that combines technical excellence, content authority building, and aggressive link acquisition to double your organic traffic in 60 days.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-secondary text-on-secondary font-black text-base hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-secondary/25">Book Free Audit</Link>
            <Link href="/#services" className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-on-surface/20 text-on-surface font-black text-base hover:border-secondary hover:text-secondary transition-all active:scale-95">View All Services →</Link>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-surface-container-low">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-6">What is SEO and Why Does It Matter?</h2>
          <div className="text-on-surface-variant leading-relaxed space-y-4">
            <p>Search Engine Optimisation (SEO) is the practice of improving your website's visibility in organic (non-paid) search results on Google and other search engines. When someone searches for a product or service you offer, appearing on page one — ideally in the top three results — can be the difference between a thriving business and one that&apos;s invisible online. Over 90% of all search traffic goes to page one results, and the top three positions capture approximately 60% of all clicks.</p>
            <p>Unlike paid advertising, which stops the moment you pause your budget, SEO is a compounding investment. Rankings and domain authority you build today continue to drive traffic, leads, and revenue for years. At Firas Digital, we think of SEO as the highest-leverage, highest-ROI channel in digital marketing — and our results back that up: we have delivered an average 340% increase in organic traffic for our clients, with many seeing significant ranking improvements within 60 days of engagement.</p>
            <p>Our SEO methodology is built on three pillars. First, technical excellence: we ensure your website is perfectly structured for search engine crawlers — fast, mobile-friendly, properly indexed, and free of technical errors that silently suppress rankings. Second, content authority: we develop comprehensive content strategies that position your brand as the definitive expert in your niche. Third, link acquisition: we build high-quality backlinks from authoritative, relevant domains through ethical, white-hat techniques that build sustainable authority.</p>
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-4">Why Choose Firas Digital for SEO?</h2>
          <p className="text-on-surface-variant mb-12 max-w-2xl">The unfair advantages our clients gain through our SEO programme.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (<div key={i} className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20 flex flex-col gap-3"><div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-green-500 flex items-center justify-center flex-shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0b0e17" strokeWidth="2.2" strokeLinecap="round"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg></div><h3 className="font-black text-on-surface">{b.title}</h3><p className="text-sm text-on-surface-variant leading-relaxed">{b.desc}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-surface-container-low">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-4">Our SEO Process</h2>
          <p className="text-on-surface-variant mb-12 max-w-2xl">A proven, systematic methodology that delivers consistent, compounding results.</p>
          <div className="flex flex-col gap-6">{process.map((p) => (<div key={p.step} className="flex gap-6 items-start bg-surface-container rounded-2xl p-6 border border-outline-variant/20"><span className="text-3xl font-black text-secondary flex-shrink-0 w-12">{p.step}</span><div><h3 className="font-black text-on-surface text-lg mb-2">{p.title}</h3><p className="text-sm text-on-surface-variant leading-relaxed">{p.desc}</p></div></div>))}</div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-4">Tools & Platforms We Use</h2>
          <p className="text-on-surface-variant mb-10 max-w-2xl">Enterprise-grade SEO tools to ensure no opportunity is missed.</p>
          <div className="flex flex-wrap gap-3">{platforms.map((p) => (<span key={p} className="px-4 py-2 rounded-full bg-surface-container border border-outline-variant/20 text-sm font-bold text-on-surface-variant hover:text-secondary hover:border-secondary/30 transition-colors">{p}</span>))}</div>
        </div>
      </section>
      <section className="py-16 px-6 bg-gradient-to-r from-secondary/5 via-green-900/10 to-background border-y border-outline-variant/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">{stats.map((s) => (<div key={s.label}><div className="text-4xl md:text-5xl font-black text-secondary mb-2">{s.value}</div><div className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">{s.label}</div></div>))}</div>
      </section>
      <section className="py-20 px-6 bg-surface-container-low">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-4">Frequently Asked Questions</h2>
          <p className="text-on-surface-variant mb-12 max-w-2xl">Everything you need to know about our SEO services.</p>
          <div className="flex flex-col gap-6">{faqs.map((faq, i) => (<div key={i} className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20"><h3 className="font-black text-on-surface mb-3 text-base">{faq.q}</h3><p className="text-sm text-on-surface-variant leading-relaxed">{faq.a}</p></div>))}</div>
        </div>
      </section>
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-on-surface mb-6">Ready to Dominate Search?</h2>
          <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">Book a free SEO audit. We&apos;ll analyse your current organic performance, identify the biggest opportunities, and show you exactly what it will take to dominate your category in search.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-secondary text-on-secondary font-black text-lg hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-secondary/20">Book Your Free SEO Audit</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
