import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/sections/Navbar";
import Footer from "@/app/components/sections/Footer";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for doesn't exist on Ovlox.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="page-shell center" data-anim="on">
        <div className="nf-wrap reveal in">
          <div className="nf-bar">
            <span className="x">×</span>
            <span>404 · route not found in source of truth</span>
          </div>
          <div className="nf-code">404</div>
          <h1 className="nf-title">
            We couldn&apos;t find that page.
          </h1>
          <p className="nf-sub">
            The link is broken, the page moved, or it never existed in the first
            place. Let&apos;s get you back on track.
          </p>
          <div className="nf-cta">
            <Link href="/" className="btn btn-primary btn-lg">
              Take me home
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
            <Link href="/waitlist" className="btn btn-line btn-lg">
              Join the waitlist
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
