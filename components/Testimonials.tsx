"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

function TiltCard({ children, className }: { children: ReactNode; className: string }) {
  const ref = useRef<HTMLDivElement>(null);
  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    el.style.transform = `perspective(700px) rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 8}deg) scale(1.02)`;
    el.style.transition = "transform 0.05s linear";
  }
  function onLeave() {
    if (ref.current) {
      ref.current.style.transform = "";
      ref.current.style.transition = "transform 0.5s cubic-bezier(0.23,1,0.32,1)";
    }
  }
  return <div ref={ref} className={className} onMouseMove={onMove} onMouseLeave={onLeave}>{children}</div>;
}

const testimonials = [
  { quote: "Firas Digital took our ROAS from a stagnant 2.1x to a consistent 7.8x in under three months. They are true masters of their craft.", name: "Sarah Chen", role: "CMO, Acuris Tech", initials: "SC", color: "bg-primary/10 text-primary" },
  { quote: "The most transparent agency I've ever worked with. The data they provide is actionable and has completely shifted our focus on what matters.", name: "Marcus Torres", role: "Founder, Nu Melo Wear", initials: "MT", color: "bg-secondary/10 text-secondary" },
  { quote: "Within 60 days our organic traffic doubled. Their SEO strategy is methodical and the results speak louder than any pitch deck ever could.", name: "Rania Al-Hassan", role: "Director, Bloom Retail", initials: "RA", color: "bg-violet-500/10 text-violet-400" },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-tertiary" id="testimonials">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-background/8 text-background/50 text-xs font-bold uppercase tracking-widest mb-5">Client Stories</span>
          <h2 className="text-4xl md:text-6xl font-black text-background leading-tight">What our <span className="text-primary">partners</span> say.</h2>
          <p className="text-on-tertiary mt-4 text-lg max-w-lg">We don&apos;t have clients — we have growth partners. Their success is our only metric.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TiltCard key={i} className="fade-up bg-white p-8 rounded-3xl shadow-sm border border-background/5 flex flex-col gap-5 relative overflow-hidden cursor-default">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-3xl" />
              <div className="flex gap-0.5 text-primary text-lg">{[...Array(5)].map((_, s) => <span key={s}>★</span>)}</div>
              <p className="text-background/80 text-base italic leading-relaxed flex-1 relative z-10">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-auto relative z-10">
                <div className={`w-10 h-10 rounded-full ${t.color} font-black text-xs flex items-center justify-center flex-shrink-0`}>{t.initials}</div>
                <div>
                  <p className="text-background font-black text-sm">{t.name}</p>
                  <p className="text-background/50 text-xs font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
