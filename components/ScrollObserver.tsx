"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const attach = (el: Element) => {
      if (!el.hasAttribute("data-io")) {
        el.setAttribute("data-io", "1");
        io.observe(el);
      }
    };

    document.querySelectorAll(".fade-up").forEach(attach);

    const mo = new MutationObserver(() => {
      document.querySelectorAll(".fade-up:not([data-io])").forEach(attach);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
