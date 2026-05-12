"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf: number;

    const moveDot = (x: number, y: number) => {
      if (!dotRef.current) return;
      dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      moveDot(mouseX, mouseY);
    };

    const setHover = (state: boolean) => {
      ringRef.current?.classList.toggle("cursor-ring--hover", state);
      dotRef.current?.classList.toggle("cursor-dot--hover", state);
    };

    const lerp = (from: number, to: number, t: number) => from + (to - from) * t;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.11);
      ringY = lerp(ringY, mouseY, 0.11);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const interactables = document.querySelectorAll(
      "a, button, [data-magnetic], input, textarea, select, label"
    );
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", () => setHover(true));
      el.addEventListener("mouseleave", () => setHover(false));
    });

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    raf = requestAnimationFrame(animate);

    if (dotRef.current) dotRef.current.style.opacity = "1";
    if (ringRef.current) ringRef.current.style.opacity = "1";

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ opacity: 0 }} aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" style={{ opacity: 0 }} aria-hidden="true" />
    </>
  );
}
