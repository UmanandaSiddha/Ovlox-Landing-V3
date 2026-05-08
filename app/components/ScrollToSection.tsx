"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollToSection() {
  const sp = useSearchParams();
  const section = sp.get("section");

  useEffect(() => {
    if (!section) return;
    const el = document.getElementById(section);
    if (!el) return;
    // Wait one frame so layout is finalized after route change.
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "auto", block: "start" });
    });
  }, [section]);

  return null;
}
