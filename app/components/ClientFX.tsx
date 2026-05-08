"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type IdleCb = (deadline: { didTimeout: boolean; timeRemaining: () => number }) => void;
type IdleScheduler = (cb: IdleCb, opts?: { timeout: number }) => number;

export default function ClientFX() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // One-time setup: low-end detection, particle creation, visibility listener.
  useEffect(() => {
    const partsEl = particlesRef.current;

    const lowEnd =
      (navigator.hardwareConcurrency || 8) <= 4 ||
      (typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    if (lowEnd) {
      document.documentElement.classList.add("lowfx");
    }

    const buildParticles = () => {
      if (!partsEl) return;
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
        p.style.transform = "translate3d(0, 110vh, 0)";
        frag.appendChild(p);
      }
      partsEl.appendChild(frag);
    };

    const ric = (window as unknown as { requestIdleCallback?: IdleScheduler })
      .requestIdleCallback;
    const idleHandle = lowEnd
      ? 0
      : ric
      ? ric(() => buildParticles(), { timeout: 1000 })
      : (window.setTimeout(buildParticles, 200) as unknown as number);

    const onVisibility = () => {
      document.documentElement.dataset.tabHidden = document.hidden
        ? "true"
        : "false";
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      const cic = (window as unknown as {
        cancelIdleCallback?: (h: number) => void;
      }).cancelIdleCallback;
      if (cic) cic(idleHandle);
      else window.clearTimeout(idleHandle);
      if (partsEl) partsEl.innerHTML = "";
    };
  }, []);

  // Re-attach scroll observers on every route change so new pages'
  // [data-anim] / .reveal nodes get picked up.
  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            reveal.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => {
      if (!el.classList.contains("in")) reveal.observe(el);
    });

    const anim = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          (e.target as HTMLElement).dataset.anim = e.isIntersecting
            ? "on"
            : "off";
        });
      },
      { rootMargin: "200px 0px 200px 0px", threshold: 0 }
    );
    document.querySelectorAll<HTMLElement>("[data-anim]").forEach((el) => {
      anim.observe(el);
    });

    return () => {
      reveal.disconnect();
      anim.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <div className="aurora" aria-hidden="true">
        <div className="blob3" />
      </div>
      <div className="particles" aria-hidden="true" ref={particlesRef} />
    </>
  );
}
