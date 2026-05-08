import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/sections/Navbar";
import Footer from "@/app/components/sections/Footer";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Coming soon",
  description:
    "This page is on the roadmap. Join the Ovlox waitlist to get notified when it lands.",
  alternates: { canonical: "/coming-soon" },
  robots: { index: false, follow: true },
};

export default function ComingSoonPage() {
  return (
    <>
      <Navbar />
      <main className="page-shell center" data-anim="on">
        <div className="cs-wrap reveal in">
          <div className="cs-card">
            <div className="cs-pill">
              <span className="tag">SOON</span>
              <span>We&apos;re building this in the open</span>
            </div>

            <h1 className="cs-title">
              On the way. <span className="it">Worth the wait.</span>
            </h1>

            <p className="cs-sub">
              This page is on the roadmap. Drop into the waitlist and we&apos;ll
              email you the moment it&apos;s live — alongside everything else
              we&apos;re shipping.
            </p>

            <div className="cs-timeline">
              <div className="cs-step done">
                <div className="lbl">✓ done</div>
                <div className="name">Roadmap defined</div>
              </div>
              <div className="cs-step active">
                <div className="lbl">in progress</div>
                <div className="name">Currently building</div>
              </div>
              <div className="cs-step">
                <div className="lbl">queued</div>
                <div className="name">Public launch</div>
              </div>
            </div>

            <div className="cs-cta">
              <Link href="/waitlist" className="btn btn-primary btn-lg">
                Join the waitlist
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/" className="btn btn-line btn-lg">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
