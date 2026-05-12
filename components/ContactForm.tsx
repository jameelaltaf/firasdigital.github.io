"use client";

import { useState, FormEvent } from "react";

const SERVICE_OPTIONS = [
  "Paid Ads",
  "SEO",
  "Social Media",
  "Website / CRO",
  "Other",
];

const COUNTRIES = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Kuwait",
  "Qatar",
  "Bahrain",
  "United Kingdom",
  "United States",
  "Canada",
  "India",
  "Pakistan",
  "Other",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function toggleService(s: string) {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) { setErrorMsg("Please enter your full name."); setStatus("error"); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErrorMsg("Please enter a valid email address."); setStatus("error"); return; }
    if (phone.trim().length < 7) { setErrorMsg("Please enter a valid phone number."); setStatus("error"); return; }
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          country,
          services: selectedServices,
          message,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-on-secondary font-black text-2xl mb-5">
          ✓
        </div>
        <h3 className="text-2xl font-black text-on-surface mb-3">Request Sent!</h3>
        <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours with a
          tailored growth strategy.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">
            Name *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
            autoComplete="name"
            className="form-input bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface text-sm placeholder:text-on-surface-variant/30 transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">
            Email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@company.com"
            required
            autoComplete="email"
            className="form-input bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface text-sm placeholder:text-on-surface-variant/30 transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">
            Phone *
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+971 50 000 0000"
            required
            autoComplete="tel"
            className="form-input bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface text-sm placeholder:text-on-surface-variant/30 transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">
            Country
          </label>
          <div className="relative">
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="form-input w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface text-sm transition-all appearance-none pr-10"
          >
            <option value="">Select country</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c} className="bg-surface-container">
                {c}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/40">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6" /></svg>
          </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">
          What do you need help with?
        </label>
        <div className="flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => toggleService(s)}
              className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                selectedServices.includes(s)
                  ? "bg-secondary/10 border-secondary/40 text-secondary"
                  : "bg-surface-container border-outline-variant/20 text-on-surface-variant hover:border-secondary/30 hover:text-on-surface"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">
          Message (Optional)
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your business and goals..."
          rows={4}
          className="form-input bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface text-sm placeholder:text-on-surface-variant/30 transition-all resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-error text-sm font-medium">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-secondary text-on-secondary py-4 rounded-full font-black text-base hover:brightness-110 transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Secure Your Free Consult →"}
      </button>
      <p className="text-center text-on-surface-variant/40 text-xs">
        We respond within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
