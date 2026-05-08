import type { Metadata } from "next";
import Navbar from "@/app/components/sections/Navbar";
import Footer from "@/app/components/sections/Footer";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch with the Ovlox team. We respond to every message — questions, feedback, partnerships, press.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Ovlox",
    description:
      "Talk to the team — questions, feedback, partnerships, press.",
    url: "/contact",
  },
};

const ArrowIcon = () => (
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
);

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="page-shell" data-anim="on">
        <section className="page-hero reveal in">
          <div className="page-eyebrow">Contact · We read every message</div>
          <h1 className="page-title">
            Talk to <span className="it">the team.</span>
          </h1>
          <p className="page-sub">
            Whether it&apos;s a question, a bug, a feature request, or a deal —
            we&apos;re a small team and we read every message ourselves.
          </p>
        </section>

        <div className="contact-grid reveal in delay-1">
          {/* Primary: email */}
          <div className="contact-card primary">
            <div className="ic-wrap">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="lbl">Email · fastest path</div>
            <h3>admin@learnwithstack.com</h3>
            <p>
              For anything — product questions, bug reports, billing, deals,
              press. We typically reply within one business day.
            </p>
            <a className="value" href="mailto:admin@learnwithstack.com">
              Send us an email <ArrowIcon />
            </a>
          </div>

          {/* Support */}
          <div className="contact-card">
            <div className="ic-wrap">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <div className="lbl">Support</div>
            <h3>Need help?</h3>
            <p>
              Stuck on a setup, integration, or invoice question? Email us with
              &quot;Support&quot; in the subject line and we&apos;ll prioritise it.
            </p>
            <a
              className="value"
              href="mailto:admin@learnwithstack.com?subject=Support%20-%20"
            >
              Open a support thread <ArrowIcon />
            </a>
          </div>

          {/* Press */}
          <div className="contact-card">
            <div className="ic-wrap">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8" />
                <path d="M15 18h-5" />
                <path d="M10 6h8v4h-8z" />
              </svg>
            </div>
            <div className="lbl">Press · Partnerships</div>
            <h3>Working on a story?</h3>
            <p>
              Press inquiries, partnership proposals, or investment outreach —
              email us with &quot;Press&quot; or &quot;Partnership&quot; in the subject.
            </p>
            <a
              className="value"
              href="mailto:admin@learnwithstack.com?subject=Press%20-%20"
            >
              Reach out <ArrowIcon />
            </a>
          </div>

          {/* Waitlist */}
          <div className="contact-card">
            <div className="ic-wrap">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="lbl">Sales · Early access</div>
            <h3>Want to use Ovlox?</h3>
            <p>
              We&apos;re onboarding teams in waves. Skip the email — drop your
              details on the waitlist and we&apos;ll be in touch with an invite.
            </p>
            <a className="value" href="/waitlist">
              Join the waitlist <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="legal-cta reveal" style={{ marginTop: 56 }}>
          <div className="legal-cta-text">
            <span className="l1">Based remote · Reply within 24h</span>
            <span className="l2">
              We&apos;re a small team — your message reaches a real human.
            </span>
          </div>
          <a
            className="btn btn-line"
            href="mailto:admin@learnwithstack.com"
          >
            admin@learnwithstack.com
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
