"use client";

import { useRouter, usePathname } from "next/navigation";
import type { ReactNode, MouseEventHandler } from "react";

type Props = {
  section: string;
  children: ReactNode;
  className?: string;
};

export default function SectionLink({ section, children, className }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const target = `/?section=${section}`;

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();

    if (pathname === "/") {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", target);
      }
    } else {
      router.push(target);
    }
  };

  return (
    <a href={target} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
