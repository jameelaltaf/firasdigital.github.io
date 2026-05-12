import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary opacity-[0.07] blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary opacity-[0.07] blur-[140px] rounded-full" />
      </div>

      {/* Floating lightning bolt */}
      <div
        className="bolt-float absolute right-[-1rem] md:right-[4%] top-1/2 -translate-y-1/2 w-[180px] md:w-[280px] lg:w-[340px] opacity-60 pointer-events-none z-0"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <filter id="boltGlow">
              <feGaussianBlur stdDeviation="8" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M130 10 L40 180 L90 180 L70 330 L160 140 L110 140 Z"
            fill="url(#boltGrad)"
            filter="url(#boltGlow)"
            opacity="0.95"
          />
          <path
            d="M130 10 L40 180 L90 180 L70 330 L160 140 L110 140 Z"
            fill="none"
            stroke="rgba(192,132,252,0.35)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-8">
            Performance Marketing Agency
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.04] tracking-tight text-glow-primary">
            <span className="text-primary">We Don&apos;t Just</span>
            <br />
            Run Ads.{" "}
            <span className="text-on-surface">
              We Grow
              <br />
              Businesses.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 font-medium leading-relaxed">
            Performance-first digital marketing for ambitious brands ready to
            shift gears and dominate their category — across every channel that
            matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-secondary text-on-secondary font-black text-base hover:scale-105 transition-all active:scale-95 shadow-lg shadow-secondary/20"
            >
              Book a Free Audit
            </Link>
            <Link
              href="/#services"
              className="px-8 py-4 rounded-full border-2 border-on-surface/30 text-on-surface font-black text-base hover:border-primary hover:text-primary transition-all active:scale-95"
            >
              View Our Services →
            </Link>
          </div>
        </div>

        {/* Stat card */}
        <div className="mt-16 sm:mt-0 sm:absolute sm:bottom-12 sm:right-6 md:right-16 bg-surface-container-high rounded-2xl p-6 text-center border border-outline-variant/20 shadow-2xl animate-float">
          <span className="block font-black text-4xl text-secondary leading-none">10X</span>
          <span className="block text-on-surface-variant text-xs uppercase tracking-widest mt-1 font-bold">
            Average ROAS
          </span>
        </div>
      </div>
    </section>
  );
}
