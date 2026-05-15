const cases = [
  {
    tag: "E-Commerce Fashion",
    gradient: "from-blue-500 to-purple-600",
    tagBg: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    headline: "From 2.1X to 12X ROAS in 90 days",
    challenge:
      "Stagnant ROAS, rising CPCs, and zero structured creative testing across Meta and TikTok. Every campaign was a guess.",
    approach:
      "Rebuilt campaign architecture from scratch. Launched 40+ creative variants in week one using our performance creative system. Installed a weekly creative testing flywheel.",
    metrics: [
      { value: "12X", label: "ROAS" },
      { value: "−48%", label: "CPA" },
      { value: "AED 2.4M", label: "90-Day Revenue" },
    ],
  },
  {
    tag: "B2B SaaS — Dubai",
    gradient: "from-secondary to-green-400",
    tagBg: "bg-secondary/10 border-secondary/20 text-secondary",
    headline: "Zero to Page 1: 340% organic traffic in 60 days",
    challenge:
      "100% paid traffic dependency with zero organic presence. Every lead cost money. No content strategy, no technical foundation.",
    approach:
      "Full 200-point technical audit revealed 14 critical indexation issues. Keyword architecture built from scratch. 12 cornerstone content pieces deployed in 45 days.",
    metrics: [
      { value: "340%", label: "Traffic Growth" },
      { value: "28", label: "Page 1 Keywords" },
      { value: "60", label: "Days to Results" },
    ],
  },
  {
    tag: "Hospitality — UAE",
    gradient: "from-primary to-purple-500",
    tagBg: "bg-primary/10 border-primary/20 text-primary",
    headline: "0.8% to 2.7% conversion rate — same traffic budget",
    challenge:
      "Website converting at 0.8%. Spending AED 80K/month on ads but 99.2% of visitors left without booking. Revenue was capped.",
    approach:
      "Full CRO audit using GA4, heatmaps, and session recordings. 14 A/B test variants across 3 key pages. New landing pages for every paid traffic source.",
    metrics: [
      { value: "3.4X", label: "Conversion Lift" },
      { value: "+218%", label: "Monthly Bookings" },
      { value: "92", label: "Core Web Vitals" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="py-32 bg-background relative" id="case-studies">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-secondary opacity-[0.04] blur-[140px] rounded-full" />
      </div>
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-5">
              Proof of Work →
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-on-surface leading-tight tracking-tight">
              Results that{" "}
              <span className="text-secondary">speak louder</span>
              <br />than any pitch deck.
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-xs text-sm leading-relaxed">
            Real numbers from real clients. Names changed for confidentiality — results are not.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div
              key={i}
              className="fade-up bg-surface-container rounded-3xl p-6 sm:p-8 border border-outline-variant/20 flex flex-col gap-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span
                className={`self-start px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${c.tagBg}`}
              >
                {c.tag}
              </span>

              <h3 className="text-lg sm:text-xl font-black text-on-surface leading-snug">
                {c.headline}
              </h3>

              <div className="flex flex-col gap-3 text-sm">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 block mb-1">
                    Challenge
                  </span>
                  <p className="text-on-surface-variant leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 block mb-1">
                    What We Did
                  </span>
                  <p className="text-on-surface-variant leading-relaxed">{c.approach}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-auto pt-4 border-t border-outline-variant/10">
                {c.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div
                      className={`text-xl font-black text-transparent bg-clip-text bg-gradient-to-r ${c.gradient} leading-none mb-1`}
                    >
                      {m.value}
                    </div>
                    <div className="text-[9px] font-bold uppercase tracking-widest text-on-surface-variant/40 leading-tight">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all text-sm"
          >
            Get results like these for your business
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
