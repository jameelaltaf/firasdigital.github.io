"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe() {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubscribed(true);
    setEmail("");
  }
  return (
    <footer className="bg-surface-container-low pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-outline-variant/10">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <div className="text-2xl font-black tracking-tighter">
              <span className="text-white">Firas Digital</span><span className="text-secondary">.</span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
              Transforming performance marketing through technical excellence and
              radical transparency. We grow businesses.
            </p>
            <div className="flex gap-5">
              <a
                href="#"
                className="text-on-surface-variant hover:text-secondary transition-colors text-sm font-medium"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-on-surface-variant hover:text-secondary transition-colors text-sm font-medium"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-on-surface-variant hover:text-secondary transition-colors text-sm font-medium"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h6 className="text-on-surface font-bold uppercase tracking-widest text-xs">
              Navigation
            </h6>
            {["/#services", "/#why-us", "/#process", "/#testimonials"].map(
              (href) => {
                const label = href.replace("/#", "").replace("-", " ");
                return (
                  <Link
                    key={href}
                    href={href}
                    className="text-on-surface-variant hover:text-secondary transition-colors text-sm capitalize"
                  >
                    {label}
                  </Link>
                );
              }
            )}
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-5">
            <h6 className="text-on-surface font-bold uppercase tracking-widest text-xs">
              Subscribe
            </h6>
            <p className="text-on-surface-variant text-xs leading-relaxed">
              Growth insights, direct to your inbox.
            </p>
            {subscribed ? (
              <p className="text-secondary text-xs font-bold">You&apos;re subscribed!</p>
            ) : (
              <div className="flex bg-surface-container rounded-full overflow-hidden p-1 border border-outline-variant/20">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                  placeholder="your@email.com"
                  aria-label="Email address"
                  className="bg-transparent border-none flex-1 px-4 py-2 text-on-surface text-xs outline-none placeholder:text-on-surface-variant/40"
                />
                <button
                  type="button"
                  onClick={handleSubscribe}
                  className="bg-secondary text-on-secondary px-4 py-2 rounded-full font-bold text-xs hover:brightness-110 transition-all"
                >
                  Go
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-on-surface-variant/40 text-xs">
            © 2024 Firas Digital. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-on-surface-variant/40 hover:text-on-surface-variant text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-on-surface-variant/40 hover:text-on-surface-variant text-xs transition-colors">
              Terms of Service
            </a>
            <Link href="/contact" className="text-on-surface-variant/40 hover:text-secondary text-xs transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
