import type { Metadata } from "next";
import Navbar from "@/app/components/sections/Navbar";
import Footer from "@/app/components/sections/Footer";
import WaitlistForm from "./WaitlistForm";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Join the waitlist",
  description:
    "Be one of the first to use Ovlox — your project's single source of truth. Built for founders, engineering leaders, and fast-moving teams.",
  alternates: { canonical: "/waitlist" },
  openGraph: {
    title: "Join the Ovlox waitlist",
    description:
      "Be one of the first to use Ovlox — your project's single source of truth.",
    url: "/waitlist",
  },
};

const perks = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15 8.5 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 8.5 12 2" />
      </svg>
    ),
    title: "Early access — no waitlist after that",
    body: "First wave of users gets in before public launch and keeps access forever.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    title: "Direct line to the founders",
    body: "Talk to the people building Ovlox. Roadmap input, fast bug fixes, real conversations.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Founder-friendly pricing",
    body: "Locked-in early access pricing — significantly below what we'll charge at GA.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <polyline points="7 14 11 10 15 13 21 7" />
      </svg>
    ),
    title: "Shape what ships next",
    body: "Vote on roadmap items, request integrations, get features built for your team.",
  },
];

export default function WaitlistPage() {
  return (
    <>
      <Navbar />
      <main className="page-shell" data-anim="on">
        <section className="page-hero reveal in">
          <div className="page-eyebrow">Early access · Limited seats</div>
          <h1 className="page-title">
            Get in early. <span className="it">Build with us.</span>
          </h1>
          <p className="page-sub">
            We&apos;re onboarding founders, engineering leaders, and fast-moving
            teams in waves. Drop your details and we&apos;ll send your invite the
            moment your seat is ready.
          </p>
        </section>

        <div className="wl-grid reveal in delay-1">
          <div className="wl-card">
            <div className="frame-titlebar">
              <div className="frame-dots">
                <div className="frame-dot r" />
                <div className="frame-dot y" />
                <div className="frame-dot g" />
              </div>
              <div className="frame-tab active">join.waitlist</div>
              <div className="frame-spacer" />
              <div className="frame-status">
                <span className="live" /> accepting signups
              </div>
            </div>
            <div className="wl-card-body">
              <div className="wl-card-head">
                <h2>Tell us a bit about you</h2>
                <p>Takes 30 seconds. We&apos;ll only email about Ovlox.</p>
              </div>
              <WaitlistForm />
            </div>
          </div>

          <aside className="wl-side">
            <h3 className="wl-side-h">What you get</h3>
            {perks.map((p, i) => (
              <div className="wl-perk" key={i}>
                <div className="wl-perk-ic">{p.icon}</div>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
