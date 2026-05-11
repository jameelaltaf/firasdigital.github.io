import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 11px)",
        }}
        aria-hidden="true"
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-on-primary opacity-10 blur-[80px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        <span className="inline-block px-4 py-1.5 rounded-full bg-on-primary/10 border border-on-primary/20 text-on-primary text-xs font-bold uppercase tracking-widest mb-8">
          Ready to Shift Gears?
        </span>
        <h2 className="text-5xl md:text-7xl font-black text-on-primary mb-8 tracking-tight leading-[1.05]">
          Stop burning your budget
          <br />
          and start building your legacy.
        </h2>
        <p className="text-on-primary/70 text-xl mb-12 max-w-2xl mx-auto font-medium">
          Let&apos;s build a strategy tailored to your business. No fluff — just results.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-secondary text-on-secondary px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-xl shadow-secondary/20 active:scale-95"
        >
          Get Your Free Strategy Session
        </Link>
      </div>
    </section>
  );
}
