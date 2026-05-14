import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Firas Digital — Get Your Free Strategy Session",
  description:
    "Ready to grow? Brief us on your goals and we'll engineer the path to scale. Book your free strategy session today.",
};

const features = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Creative Velocity",
    desc: "Batch-producing high-engagement assets at the speed of social trends.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Precision Reporting",
    desc: "Real-time dashboards with zero jargon — just the numbers that move your business.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface-container-low">
      {/* Topbar */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-outline-variant/10 flex items-center justify-between px-6 md:px-12 py-4">
        <Link
          href="/"
          className="group text-xl font-black tracking-tighter transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span className="text-white group-hover:text-primary transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,136,181,0.6)]">
            Firas Digital
          </span>
          <span className="text-secondary group-hover:text-white transition-colors duration-300">.</span>
        </Link>
        <a
          href="https://wa.me/971500000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant hover:text-secondary transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.093.541 4.063 1.487 5.776L.057 23.7a.5.5 0 00.609.61l5.973-1.407A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.943 9.943 0 01-5.071-1.383l-.361-.214-3.742.882.888-3.706-.235-.375A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          WhatsApp Us
        </a>
      </header>

      {/* Hero strip */}
      <section className="bg-background py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-primary opacity-[0.06] blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
              Performance Marketing Engine
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-on-surface mb-5 leading-[1.06] tracking-tight">
              Grow Your Brand<br />
              <span className="text-primary">with Firas Digital</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              We engineer high-conversion digital ecosystems that turn attention
              into revenue. Brief us on your objectives and we&apos;ll engineer the
              path to scale.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Trusted by 200+ brands", "Avg. 10X ROAS", "Dedicated strategist"].map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-2 text-xs font-semibold text-on-surface-variant bg-surface-container px-4 py-2 rounded-full border border-outline-variant/20"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c9f236" strokeWidth="2.5">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Visual card grid */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20 flex flex-col gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  {f.icon}
                </div>
                <h4 className="text-sm font-bold text-on-surface">{f.title}</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">{f.desc}</p>
              </div>
            ))}
            <div className="bg-secondary rounded-2xl p-6 flex flex-col gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#465800" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              <span className="font-black text-on-secondary text-sm leading-snug">Precision<br />Reporting</span>
            </div>
            <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/20 flex flex-col justify-center gap-1">
              <span className="font-black text-3xl text-primary leading-none">24/7</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">
                Active Monitoring
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform strip */}
      <div className="bg-surface-container border-y border-outline-variant/10 py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40">
            Authorized Partner Ecosystem
          </span>
          <div className="flex gap-6 md:gap-10 flex-wrap justify-center">
            {["META", "Google", "TikTok", "LinkedIn", "Snapchat", "Pinterest", "Reddit", "Spotify"].map(
              (p) => (
                <span
                  key={p}
                  className="text-sm font-bold text-on-surface-variant/30 hover:text-on-surface-variant transition-colors cursor-default"
                >
                  {p}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Main content: form + sidebar */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact form */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-5">
              Request Intelligence
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-3 tracking-tight">
              Let&apos;s build your{" "}
              <span className="text-primary">growth engine.</span>
            </h2>
            <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">
              Brief us on your objectives and we&apos;ll engineer the path to scale.
            </p>
            <ContactForm />
          </div>

          {/* WhatsApp card + features */}
          <div className="flex flex-col gap-5 md:sticky md:top-24">
            <div className="bg-surface-container rounded-2xl p-8 border border-outline-variant/20 flex flex-col gap-5">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#465800" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.093.541 4.063 1.487 5.776L.057 23.7a.5.5 0 00.609.61l5.973-1.407A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.943 9.943 0 01-5.071-1.383l-.361-.214-3.742.882.888-3.706-.235-.375A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
              </div>
              <h3 className="text-xl font-black text-on-surface">Instant Access</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Skip the queue. Connect directly with our lead strategists via
                WhatsApp for immediate deployment.
              </p>
              <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-secondary text-on-secondary px-6 py-3 rounded-full font-bold text-sm hover:brightness-110 transition-all active:scale-95"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.093.541 4.063 1.487 5.776L.057 23.7a.5.5 0 00.609.61l5.973-1.407A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.943 9.943 0 01-5.071-1.383l-.361-.214-3.742.882.888-3.706-.235-.375A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                WhatsApp Now
              </a>
              <p className="text-center text-on-surface-variant/40 text-xs">
                We typically reply within the hour
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container rounded-2xl p-5 border border-outline-variant/20 flex flex-col gap-2">
                <span className="text-3xl font-black text-primary leading-none">200+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">
                  Brands Scaled
                </span>
              </div>
              <div className="bg-surface-container rounded-2xl p-5 border border-outline-variant/20 flex flex-col gap-2">
                <span className="text-3xl font-black text-secondary leading-none">10X</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">
                  Avg. ROAS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand footer */}
      <footer className="bg-background border-t border-outline-variant/10 py-5 px-6 flex items-center justify-center gap-8 flex-wrap">
        <span className="text-on-surface-variant/30 text-xs">
          © 2024 Firas Digital. All rights reserved.
        </span>
        <a href="#" className="text-on-surface-variant/30 hover:text-on-surface-variant text-xs transition-colors">
          Privacy Policy
        </a>
        <a href="#" className="text-on-surface-variant/30 hover:text-on-surface-variant text-xs transition-colors">
          Terms of Service
        </a>
      </footer>
    </div>
  );
}
