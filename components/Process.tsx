const steps = [
  { num: 1, label: "Audit", desc: "Deep dive into your current performance data and competitive landscape." },
  { num: 2, label: "Strategy", desc: "Crafting the bespoke roadmap for your growth across every channel." },
  { num: 3, label: "Launch", desc: "Deploying high-impact creative and landing with surgical precision." },
  { num: 4, label: "Optimise", desc: "Relentless testing to refine and improve ROAS week over week." },
  { num: 5, label: "Scale", desc: "Pushing to maximum market share and sustainable long-term growth.", active: true },
];

export default function Process() {
  return (
    <section className="py-32 bg-surface-container-low" id="process">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
            Our Methodology
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-on-surface mb-5">
            The Kinetic Engine
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            Our proven methodology for taking brands from stagnant to stellar.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[38px] left-0 right-0 h-px bg-outline-variant/20 z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="fade-up text-center group">
                <div
                  className={`w-[76px] h-[76px] rounded-full border-4 flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110 ${
                    step.active
                      ? "border-secondary bg-secondary/10"
                      : "border-outline-variant/30 bg-background group-hover:border-secondary/60"
                  }`}
                >
                  <span
                    className={`font-black text-2xl ${
                      step.active ? "text-secondary" : "text-on-surface/60 group-hover:text-secondary"
                    }`}
                  >
                    {step.num}
                  </span>
                </div>
                <h5
                  className={`text-xs font-black uppercase tracking-widest mb-2 ${
                    step.active ? "text-secondary" : "text-on-surface"
                  }`}
                >
                  {step.label}
                </h5>
                <p className="text-on-surface-variant text-xs px-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
