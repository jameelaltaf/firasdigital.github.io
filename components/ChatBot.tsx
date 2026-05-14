"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
  timestamp: Date;
  buttons?: string[];
  linkButton?: { label: string; href: string };
};

const BOT_RESPONSES: Record<string, { text: string; buttons?: string[]; linkButton?: { label: string; href: string }; action?: string }> = {
  "Our Services": {
    text: "We specialize in 4 core areas: **Paid Media** (Meta, Google, TikTok), **SEO**, **Web Design & CRO**, and **Social Media Management**. Which interests you most?",
    buttons: ["Paid Media", "SEO", "Web Design", "Social Media"],
  },
  "Paid Media": {
    text: "Our Paid Media team manages campaigns across Meta, Google, TikTok, LinkedIn, Snapchat & more. We've delivered an average 10X ROAS for our clients. Want to see if we're a fit?",
    buttons: ["Book Free Audit", "See Results"],
  },
  "SEO": {
    text: "Our SEO strategy combines technical SEO, content authority building, and aggressive link acquisition. We've doubled organic traffic for clients in 60 days. Ready to dominate search?",
    buttons: ["Book Free Audit", "Talk to a Human"],
  },
  "Web Design": {
    text: "We design high-converting landing pages and full websites built for CRO from day one. Every pixel is tested. Want a free CRO audit?",
    buttons: ["Book Free Audit", "Talk to a Human"],
  },
  "Social Media": {
    text: "We create scroll-stopping content and manage your brand's presence across Instagram, TikTok, LinkedIn, and more. Community-led growth that converts.",
    buttons: ["Book Free Audit", "Talk to a Human"],
  },
  "Pricing & Packages": {
    text: "Our packages start from AED 5,000/month depending on scope. We custom-build every engagement. The best way to get a quote is a free 30-min strategy call.",
    buttons: ["Book Free Audit", "Talk to a Human"],
  },
  "Book Free Audit": {
    text: "Perfect! Let's get you booked in. Click below to fill in a quick brief and we'll schedule your free strategy session within 24 hours.",
    linkButton: { label: "Book Your Free Audit →", href: "/contact" },
  },
  "Our Results": {
    text: "Across 200+ brands: Average 10X ROAS on paid media, 340% average organic traffic growth, 60-day SEO results. Want proof for your industry?",
    buttons: ["Book Free Audit", "Talk to a Human"],
  },
  "Talk to a Human": {
    text: "Absolutely! You can reach our team directly on WhatsApp or fill in a brief and we'll call you back.",
    buttons: ["WhatsApp Us", "Fill Brief"],
  },
  "See Results": {
    text: "Across 200+ brands: Average 10X ROAS on paid media, 340% average organic traffic growth, 60-day SEO results. Want proof for your industry?",
    buttons: ["Book Free Audit", "Talk to a Human"],
  },
  "WhatsApp Us": {
    text: "Opening WhatsApp...",
    action: "whatsapp",
  },
  "Fill Brief": {
    text: "Redirecting you to our brief form...",
    action: "contact",
  },
};

const INITIAL_BUTTONS = ["Our Services", "Pricing & Packages", "Book Free Audit", "Talk to a Human", "Our Results"];

function formatText(text: string) {
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

function formatTime(date: Date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [msgCounter, setMsgCounter] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize with greeting on open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 0,
          role: "bot",
          text: "👋 Hey! I'm Firas AI. How can I help you grow your business today?",
          timestamp: new Date(),
          buttons: INITIAL_BUTTONS,
        },
      ]);
      setMsgCounter(1);
    }
  }, [isOpen, messages.length]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  function handleQuickReply(label: string) {
    const userId = msgCounter;
    setMessages((prev) => [
      ...prev,
      { id: userId, role: "user", text: label, timestamp: new Date() },
    ]);
    setMsgCounter((c) => c + 1);

    const response = BOT_RESPONSES[label];
    if (!response) return;

    if (response.action === "whatsapp") {
      window.open("https://wa.me/971500000000", "_blank");
    } else if (response.action === "contact") {
      window.location.href = "/contact";
      return;
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length,
          role: "bot",
          text: response.text,
          timestamp: new Date(),
          buttons: response.buttons,
          linkButton: response.linkButton,
        },
      ]);
      setMsgCounter((c) => c + 1);
    }, 600);
  }

  function handleSend() {
    const text = inputValue.trim();
    if (!text) return;
    setInputValue("");

    setMessages((prev) => [
      ...prev,
      { id: msgCounter, role: "user", text, timestamp: new Date() },
    ]);
    setMsgCounter((c) => c + 1);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length,
          role: "bot",
          text: "Got it! Let me connect you with the right person.",
          timestamp: new Date(),
          buttons: ["Book Free Audit", "Talk to a Human"],
        },
      ]);
      setMsgCounter((c) => c + 1);
    }, 700);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <>
      {/* Chat panel */}
      <div
        className={`fixed bottom-24 right-4 sm:right-6 z-[9990] transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
        style={{ width: "min(380px, calc(100vw - 2rem))" }}
        aria-live="polite"
        aria-label="Firas AI Chat"
      >
        <div
          className="flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/20"
          style={{ height: "520px", background: "#0f1220" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 bg-surface-container border-b border-outline-variant/10 flex-shrink-0">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
              style={{ background: "#c9f236", color: "#0b0e17" }}
            >
              FA
            </div>
            <div>
              <div className="font-black text-on-surface text-sm">Firas AI</div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] text-on-surface-variant/60 font-semibold">Online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col gap-2 ${msg.role === "user" ? "items-end" : "items-start"}`}>
                {msg.role === "bot" && (
                  <div className="flex items-end gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black flex-shrink-0"
                      style={{ background: "#c9f236", color: "#0b0e17" }}
                    >
                      FA
                    </div>
                    <div className="flex flex-col gap-1">
                      <div
                        className="rounded-2xl rounded-bl-sm px-4 py-3 text-sm leading-relaxed max-w-[260px]"
                        style={{ background: "#1a1f35", color: "#eff0fd" }}
                      >
                        {formatText(msg.text)}
                      </div>
                      <span className="text-[10px] text-on-surface-variant/30 ml-1">{formatTime(msg.timestamp)}</span>
                    </div>
                  </div>
                )}
                {msg.role === "user" && (
                  <div className="flex flex-col items-end gap-1">
                    <div
                      className="rounded-2xl rounded-br-sm px-4 py-3 text-sm leading-relaxed max-w-[260px] font-medium"
                      style={{ background: "#c9f236", color: "#0b0e17" }}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-on-surface-variant/30 mr-1">{formatTime(msg.timestamp)}</span>
                  </div>
                )}

                {/* Quick reply buttons */}
                {msg.role === "bot" && msg.buttons && msg.buttons.length > 0 && (
                  <div className="ml-8 flex flex-wrap gap-2">
                    {msg.buttons.map((btn) => (
                      <button
                        key={btn}
                        onClick={() => handleQuickReply(btn)}
                        className="px-3 py-1.5 rounded-full text-xs font-bold border transition-all hover:scale-105 active:scale-95"
                        style={{
                          borderColor: "rgba(201,242,54,0.4)",
                          color: "#c9f236",
                          background: "rgba(201,242,54,0.05)",
                        }}
                      >
                        {btn}
                      </button>
                    ))}
                  </div>
                )}

                {/* Link button */}
                {msg.role === "bot" && msg.linkButton && (
                  <div className="ml-8">
                    <Link
                      href={msg.linkButton.href}
                      className="inline-block px-4 py-2 rounded-full text-xs font-black transition-all hover:brightness-110 active:scale-95"
                      style={{ background: "#c9f236", color: "#0b0e17" }}
                    >
                      {msg.linkButton.label}
                    </Link>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 px-4 py-3 border-t border-outline-variant/10 flex-shrink-0" style={{ background: "#0f1220" }}>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 bg-surface-container rounded-full px-4 py-2.5 text-sm text-on-surface border border-outline-variant/20 outline-none placeholder:text-on-surface-variant/40 focus:border-secondary/50 transition-colors"
              style={{ cursor: "text" }}
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all hover:brightness-110 active:scale-95 disabled:opacity-30"
              style={{ background: "#c9f236" }}
              aria-label="Send message"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0b0e17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-6 right-4 sm:right-6 z-[9991] w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 active:scale-95"
        style={{ background: "#c9f236" }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b0e17" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0b0e17" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
      </button>
    </>
  );
}
