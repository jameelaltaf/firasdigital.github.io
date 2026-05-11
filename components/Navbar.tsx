"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#process", label: "Process" },
  { href: "/#testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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
            className="text-2xl font-black text-primary tracking-tighter"
          >
            Firas Digital<span className="text-secondary">.</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
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
