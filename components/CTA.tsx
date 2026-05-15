import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Glow accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-primary opacity-[0.06] blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-secondary opacity-[0.08] blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
          Ready to Shift Gears?
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-background mb-8 tracking-tight leading-[1.05]">
          Stop burning your budget
          <br />
          and start building your legacy.
        </h2>
        <p className="text-background/60 text-xl mb-12 max-w-2xl mx-auto font-medium">
          Let&apos;s build a strategy tailored to your business. No fluff — just results.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-secondary text-on-secondary px-8 sm:px-12 py-4 sm:py-5 rounded-full font-black text-base sm:text-xl hover:scale-105 transition-transform shadow-xl shadow-secondary/20 active:scale-95"
        >
          Get Your Free Strategy Session
        </Link>
      </div>
    </section>
  );
}
