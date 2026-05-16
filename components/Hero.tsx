"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const PHRASES = [
  "We Grow Businesses.",
  "We Build Brands.",
  "We Drive Results.",
  "We Dominate Markets.",
];

function useTypewriter() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = PHRASES[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charCount === phrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charCount === 0) {
      setIsDeleting(false);
      setPhraseIdx((i) => (i + 1) % PHRASES.length);
    } else {
      timeout = setTimeout(
        () => setCharCount((c) => (isDeleting ? c - 1 : c + 1)),
        isDeleting ? 38 : 78
      );
    }
    return () => clearTimeout(timeout);
  }, [charCount, isDeleting, phraseIdx]);

  return PHRASES[phraseIdx].slice(0, charCount);
}

function useParallax(ref: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        ref.current.style.transform = `translateY(${-window.scrollY * 0.28}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);
}

function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - t, 3);
          setCount(Math.round(ease * target));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function PuffyBolt() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  useParallax(parallaxRef);

  const boltPath = "M 118,22 C 132,14 150,22 146,42 L 122,188 L 157,188 C 170,188 174,203 166,217 L 126,352 C 121,366 104,372 90,362 C 76,352 77,337 85,327 L 90,212 L 56,212 C 40,212 34,197 42,183 C 46,175 57,169 69,169 L 88,40 C 92,20 108,12 118,22 Z";

  return (
    <div ref={parallaxRef} className="select-none pointer-events-none" aria-hidden="true">
      <div className="bolt-float w-full h-full">
        <svg
          viewBox="0 0 190 385"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="puffBase" x1="85%" y1="0%" x2="15%" y2="100%">
              <stop offset="0%" stopColor="#ffd6ea" />
              <stop offset="40%" stopColor="#ff88b5" />
              <stop offset="100%" stopColor="#c8005a" />
            </linearGradient>

            <radialGradient id="puffHL" cx="36%" cy="28%" r="52%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.72)" />
              <stop offset="55%" stopColor="rgba(255,255,255,0.12)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>

            <radialGradient id="limeSpot" cx="62%" cy="51%" r="22%">
              <stop offset="0%" stopColor="rgba(201,242,54,0.55)" />
              <stop offset="100%" stopColor="rgba(201,242,54,0)" />
            </radialGradient>

            <radialGradient id="rimDark" cx="50%" cy="90%" r="45%">
              <stop offset="0%" stopColor="rgba(0,0,0,0.30)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>

            <filter id="puffGlow" x="-50%" y="-20%" width="200%" height="145%">
              <feGaussianBlur stdDeviation="22" result="g" />
              <feMerge><feMergeNode in="g" /><feMergeNode in="g" /></feMerge>
            </filter>

            <filter id="edgeSoft">
              <feGaussianBlur stdDeviation="1.5" />
            </filter>
          </defs>

          <path d={boltPath} fill="#ff88b5" filter="url(#puffGlow)" opacity="0.40" />
          <path d={boltPath} fill="none" stroke="#ff88b5" strokeWidth="6" filter="url(#edgeSoft)" opacity="0.30" />
          <path d={boltPath} fill="url(#puffBase)" />
          <path d={boltPath} fill="url(#puffHL)" />
          <path d={boltPath} fill="url(#limeSpot)" />
          <path d={boltPath} fill="url(#rimDark)" />
          <ellipse cx="105" cy="48" rx="18" ry="10" fill="rgba(255,255,255,0.22)" transform="rotate(-30 105 48)" />
        </svg>
      </div>
    </div>
  );
}

export default function Hero() {
  const typeText = useTypewriter();
  const { count: roasCount, ref: roasRef } = useCountUp(10);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-[-5%] w-[540px] h-[540px] bg-primary opacity-[0.08] blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-[-5%] w-[500px] h-[500px] bg-secondary opacity-[0.06] blur-[140px] rounded-full" />
        <div className="absolute top-[55%] left-[30%] w-[300px] h-[300px] bg-violet-600 opacity-[0.05] blur-[100px] rounded-full" />
      </div>
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="flex flex-col gap-7">
            <span className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Performance Marketing Agency
            </span>
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.04] tracking-tight text-glow-primary mb-1">
                <span className="text-primary">We Don&apos;t Just</span>
                <br />
                <span className="text-on-surface">Run Ads.</span>
              </h1>
              <div className="min-h-[2.8rem] sm:min-h-[3.5rem] lg:min-h-[4rem] mt-3">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary whitespace-nowrap overflow-hidden text-ellipsis">
                  {typeText}
                  <span className="typing-cursor" />
                </span>
              </div>
            </div>
            <p className="text-base md:text-lg text-on-surface-variant max-w-lg leading-relaxed font-medium">
              Performance-first digital marketing for ambitious brands ready to shift gears and dominate their category — across every channel that matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="group relative px-8 py-4 rounded-full bg-secondary text-on-secondary font-black text-base overflow-hidden hover:scale-105 transition-all active:scale-95 shadow-lg shadow-secondary/25" data-magnetic>
                <span className="relative z-10">Book a Free Audit</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              </Link>
              <Link href="/#services" className="px-8 py-4 rounded-full border-2 border-on-surface/20 text-on-surface font-black text-base hover:border-primary hover:text-primary transition-all active:scale-95">
                View Our Services →
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              {["Trusted by 200+ brands", "Avg. 10X ROAS", "24/7 monitoring"].map((b) => (
                <span key={b} className="flex items-center gap-1.5 text-xs font-semibold text-on-surface-variant/60 bg-surface-container/50 px-3 py-1.5 rounded-full border border-outline-variant/15">
                  <span className="text-secondary text-[10px]">✦</span>
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center items-center h-[420px] sm:h-[460px] md:h-[520px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[200px] sm:w-[240px] md:w-[260px] lg:w-[290px] h-full">
                <PuffyBolt />
              </div>
            </div>
            <div className="absolute bottom-4 right-0 sm:right-4 bg-surface-container-high/90 backdrop-blur-xl rounded-2xl px-6 py-5 text-center border border-outline-variant/20 shadow-2xl animate-float z-10">
              <span ref={roasRef} className="block font-black text-4xl text-secondary leading-none">{roasCount}X</span>
              <span className="block text-on-surface-variant text-[10px] uppercase tracking-widest mt-1.5 font-bold">Average ROAS</span>
            </div>
            <div className="absolute top-8 left-0 sm:left-4 bg-surface-container-high/80 backdrop-blur-xl rounded-2xl px-5 py-4 border border-outline-variant/20 shadow-xl z-10" style={{ animation: "float 7s ease-in-out infinite reverse" }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-secondary text-xs font-black">↑</span>
                </div>
                <div>
                  <span className="block text-on-surface font-black text-sm">+340%</span>
                  <span className="block text-on-surface-variant text-[10px] uppercase tracking-widest">Avg. Traffic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
