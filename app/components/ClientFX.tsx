"use client";

import { useEffect, useRef } from "react";

export default function ClientFX() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const partsEl = particlesRef.current;
    if (partsEl) {
      const colors = ["#c8ff3e", "#4af3d9", "#a78bff"];
      const frag = document.createDocumentFragment();
      for (let i = 0; i < 16; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        p.style.left = Math.random() * 100 + "vw";
        p.style.animationDuration = 14 + Math.random() * 14 + "s";
        p.style.animationDelay = -Math.random() * 24 + "s";
        const c = colors[i % 3];
        p.style.background = c;
        p.style.boxShadow = `0 0 10px ${c}aa`;
        p.style.opacity = (0.4 + Math.random() * 0.4).toString();
        const size = 2 + Math.random() * 2 + "px";
        p.style.width = size;
        p.style.height = size;
        p.style.willChange = "transform, opacity";
        p.style.transform = "translate3d(0, 110vh, 0)";
        frag.appendChild(p);
      }
      partsEl.appendChild(frag);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => {
      if (!el.classList.contains("in")) io.observe(el);
    });

    return () => {
      io.disconnect();
      if (partsEl) partsEl.innerHTML = "";
    };
  }, []);

  return (
    <>
      <div className="aurora" aria-hidden="true">
        <div className="blob3" />
      </div>
      <div className="particles" aria-hidden="true" ref={particlesRef} />
    </>
  );
}
