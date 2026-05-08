import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/sections/Navbar";
import Footer from "@/app/components/sections/Footer";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Ovlox's privacy policy to understand how we collect, use, and protect your data when using our project intelligence platform.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Ovlox",
    description:
      "How Ovlox collects, uses, and protects your data when using our project intelligence platform.",
    url: "/privacy-policy",
  },
};

const LAST_UPDATED = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

type Section = {
  num: string;
  title: string;
  body: React.ReactNode;
};

const sections: Section[] = [
  {
    num: "01",
    title: "Introduction",
    body: (
      <p>
        Welcome to Ovlox.dev (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
        We are committed to protecting your privacy and ensuring you have a
        positive experience on our website and in using our products and
        services. This Privacy Policy explains how we collect, use, disclose,
        and safeguard your information when you visit our website.
      </p>
    ),
  },
  {
    num: "02",
    title: "Information We Collect",
    body: (
      <>
        <p>We collect information that you provide directly to us, including:</p>
        <ul>
          <li>Name and contact information (email address, phone number)</li>
          <li>Company information and job title</li>
          <li>Information you provide when you register for our services or sign up for our waitlist</li>
          <li>Communications you send to us, including customer support inquiries</li>
        </ul>
        <p>
          We also automatically collect certain information when you visit our
          website, such as your IP address, browser type, device information,
          and usage patterns.
        </p>
      </>
    ),
  },
  {
    num: "03",
    title: "How We Use Your Information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process your registrations and manage your account</li>
          <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Monitor and analyze trends, usage, and activities</li>
          <li>Detect, prevent, and address technical issues and security threats</li>
        </ul>
      </>
    ),
  },
  {
    num: "04",
    title: "Information Sharing and Disclosure",
    body: (
      <>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. We may share your information only in the following
          circumstances:
        </p>
        <ul>
          <li>With service providers who assist us in operating our website and conducting our business</li>
          <li>When required by law or to respond to legal process</li>
          <li>To protect our rights, privacy, safety, or property</li>
          <li>In connection with a business transfer or merger</li>
        </ul>
      </>
    ),
  },
  {
    num: "05",
    title: "Data Security",
    body: (
      <p>
        We implement appropriate technical and organizational security measures
        to protect your personal information against unauthorized access,
        alteration, disclosure, or destruction. However, no method of
        transmission over the Internet or electronic storage is 100% secure.
      </p>
    ),
  },
  {
    num: "06",
    title: "Your Rights",
    body: (
      <>
        <p>You have the right to:</p>
        <ul>
          <li>Access and receive a copy of your personal information</li>
          <li>Correct inaccurate or incomplete information</li>
          <li>Request deletion of your personal information</li>
          <li>Object to or restrict processing of your information</li>
          <li>Opt-out of marketing communications at any time</li>
        </ul>
      </>
    ),
  },
  {
    num: "07",
    title: "Cookies and Tracking Technologies",
    body: (
      <p>
        We use cookies and similar tracking technologies to track activity on
        our website and hold certain information. You can instruct your browser
        to refuse all cookies or to indicate when a cookie is being sent.
      </p>
    ),
  },
  {
    num: "08",
    title: "Contact Us",
    body: (
      <>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <a className="legal-mail" href="mailto:admin@learnwithstack.com">
          admin@learnwithstack.com
        </a>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="page-shell" data-anim="on">
        <section className="page-hero reveal in">
          <div className="page-eyebrow">Legal · Privacy</div>
          <h1 className="page-title">
            Privacy <span className="it">Policy.</span>
          </h1>
          <p className="page-sub">
            How we collect, use, and protect your information when you visit
            ovlox.dev or use our project intelligence platform.
          </p>
          <div className="page-meta">
            <span className="dot" />
            Last updated: {LAST_UPDATED}
          </div>
        </section>

        <article className="page-frame reveal in delay-1">
          <div className="frame-titlebar">
            <div className="frame-dots">
              <div className="frame-dot r" />
              <div className="frame-dot y" />
              <div className="frame-dot g" />
            </div>
            <div className="frame-tab active">privacy-policy.md</div>
            <div className="frame-spacer" />
            <div className="frame-status">
              <span className="live" /> live document
            </div>
          </div>

          <div className="page-frame-body">
            <div className="legal-prose">
              {sections.map((s) => (
                <section className="legal-section" key={s.num}>
                  <div className="legal-num">{s.num}</div>
                  <div>
                    <h2>{s.title}</h2>
                    {s.body}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </article>

        <div className="legal-cta reveal">
          <div className="legal-cta-text">
            <span className="l1">Have a privacy question?</span>
            <span className="l2">
              We respond to privacy inquiries within 5 business days.
            </span>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Contact us
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
        </div>
      </main>
      <Footer />
    </>
  );
}
