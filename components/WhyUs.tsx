const pillars = [
  {
    num: "01",
    title: "Multi-Channel Expertise",
    desc: "We operate across every platform simultaneously — no silos, no gaps, no wasted budget.",
  },
  {
    num: "02",
    title: "Data-Driven Decisions",
    desc: "Every penny is accounted for with rigorous attribution modelling and real-time performance data.",
  },
  {
    num: "03",
    title: "Full-Funnel Thinking",
    desc: "From awareness to retention — we optimise the entire customer lifecycle, not just clicks.",
  },
  {
    num: "04",
    title: "Transparent Reporting",
    desc: "Real-time dashboards. No jargon. No smoke and mirrors. Just the numbers that matter.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-32 bg-background relative overflow-hidden" id="why-us">
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary opacity-[0.04] blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-xl mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
            Why Partner With Us
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-primary mb-6 tracking-tighter leading-[1.05]">
            Why Partner
            <br />
            <span className="text-on-surface">With Us?</span>
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            We move past vanity metrics to focus on what actually moves the
            needle for your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className={`fade-up p-8 border border-outline-variant/20 rounded-2xl hover:bg-surface-container hover:border-outline-variant/40 transition-all duration-300 ${
                i % 2 === 1 ? "sm:mt-0 md:mt-8" : ""
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-secondary font-black text-3xl mb-5 block">
                {p.num}
              </span>
              <h4 className="text-base font-bold text-on-surface mb-3">{p.title}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
