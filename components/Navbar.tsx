"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const serviceLinks = [
  { href: "/services/paid-media", label: "Paid Media", desc: "Meta, Google, TikTok & more" },
  { href: "/services/seo", label: "SEO", desc: "Technical SEO & content strategy" },
  { href: "/services/web-design-cro", label: "Web Design & CRO", desc: "Conversion-first websites" },
  { href: "/services/social-media", label: "Social Media", desc: "Content creation & growth" },
];

const navLinks = [
  { href: "/#why-us", label: "Why Us" },
  { href: "/#process", label: "Process" },
  { href: "/#testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "glass-nav bg-background/90 shadow-[0_20px_40px_rgba(0,0,0,0.3)] py-3 border-b border-white/5"
            : "py-5"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto">
          <Link
            href="/"
            className="group text-2xl font-black tracking-tighter transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="text-white group-hover:text-primary transition-colors duration-300 drop-shadow-none group-hover:drop-shadow-[0_0_12px_rgba(255,136,181,0.6)]">
              Firas Digital
            </span>
            <span className="text-secondary group-hover:text-white transition-colors duration-300">.</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {/* Services dropdown */}
            <li
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="text-on-surface-variant hover:text-primary transition-colors font-semibold tracking-tight relative group flex items-center gap-1"
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
              </button>

              {/* Dropdown panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-surface-container-high border border-outline-variant/20 rounded-2xl shadow-2xl overflow-hidden transition-all duration-200 ${
                  servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="p-2">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-surface-container transition-colors group/item"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="text-sm font-bold text-on-surface group-hover/item:text-primary transition-colors">{s.label}</span>
                      <span className="text-xs text-on-surface-variant/60">{s.desc}</span>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-outline-variant/10 px-4 py-3">
                  <Link
                    href="/#services"
                    className="text-xs font-bold text-secondary hover:text-secondary/80 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            </li>

            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-on-surface-variant hover:text-primary transition-colors font-semibold tracking-tight relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-transparent border-2 border-secondary text-secondary px-6 py-2 rounded-full font-bold hover:bg-secondary hover:text-on-secondary transition-all active:scale-95 duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Burger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-background z-40 flex items-center justify-center transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 text-center">
          <li>
            <Link
              href="/#services"
              className="text-3xl font-black text-on-surface hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-3xl font-black text-on-surface hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="mt-4 inline-block bg-secondary text-on-secondary px-8 py-3 rounded-full font-black text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
