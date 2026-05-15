const testimonials = [
  {
    quote:
      "Firas Digital took our ROAS from a stagnant 2.1x to a consistent 7.8x in under three months. They are true masters of their craft.",
    name: "Sarah Chen",
    role: "CMO, Acuris Tech",
    initials: "SC",
  },
  {
    quote:
      "The most transparent agency I've ever worked with. The data they provide is actionable and has completely shifted our focus on what matters.",
    name: "Marcus Torres",
    role: "Founder, Nu Melo Wear",
    initials: "MT",
  },
  {
    quote:
      "Within 60 days our organic traffic doubled. Their SEO strategy is methodical and the results speak louder than any pitch deck ever could.",
    name: "Rania Al-Hassan",
    role: "Director, Bloom Retail",
    initials: "RA",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-tertiary" id="testimonials">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-background/8 text-background/50 text-xs font-bold uppercase tracking-widest mb-5">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-background leading-tight">
            What our{" "}
            <span className="text-primary">partners</span> say.
          </h2>
          <p className="text-on-tertiary mt-4 text-lg max-w-lg">
            We don&apos;t have clients — we have growth partners. Their success is our only metric.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="fade-up bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-background/5 flex flex-col gap-6 hover:-translate-y-1 transition-transform duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, s) => (
                  <span key={s} className="text-lg">★</span>
                ))}
              </div>
              <p className="text-background/80 text-base italic leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-background text-secondary font-black text-xs flex items-center justify-center flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-background font-black text-sm">{t.name}</p>
                  <p className="text-background/50 text-xs font-bold uppercase tracking-widest">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
