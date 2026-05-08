import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/sections/Navbar";
import Footer from "@/app/components/sections/Footer";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review Ovlox's terms of service outlining usage guidelines, responsibilities, and conditions for accessing the Ovlox platform.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: "Terms of Service | Ovlox",
    description:
      "Usage guidelines, responsibilities, and conditions for accessing the Ovlox platform.",
    url: "/terms-of-service",
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
    title: "Agreement to Terms",
    body: (
      <p>
        By accessing or using Ovlox.dev (&quot;the Service&quot;), you agree to be
        bound by these Terms of Service (&quot;Terms&quot;). If you disagree with
        any part of these terms, then you may not access the Service.
      </p>
    ),
  },
  {
    num: "02",
    title: "Description of Service",
    body: (
      <p>
        Ovlox.dev provides a platform that helps founders and non-technical
        stakeholders understand their website&apos;s progress by tracking updates
        from development tools like GitHub, Jira, and Slack, and presenting
        them in a clear, understandable format.
      </p>
    ),
  },
  {
    num: "03",
    title: "User Accounts",
    body: (
      <p>
        When you create an account with us, you must provide information that
        is accurate, complete, and current at all times. You are responsible
        for safeguarding the password and for all activities that occur under
        your account.
      </p>
    ),
  },
  {
    num: "04",
    title: "Acceptable Use",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service for any illegal purpose or in violation of any laws</li>
          <li>Violate or infringe upon the rights of others</li>
          <li>Transmit any harmful code, viruses, or malicious software</li>
          <li>Attempt to gain unauthorized access to the Service or related systems</li>
          <li>Interfere with or disrupt the Service or servers connected to the Service</li>
          <li>Use the Service to transmit spam, unsolicited messages, or advertising</li>
        </ul>
      </>
    ),
  },
  {
    num: "05",
    title: "Intellectual Property Rights",
    body: (
      <p>
        The Service and its original content, features, and functionality are
        and will remain the exclusive property of Ovlox.dev and its licensors.
        The Service is protected by copyright, trademark, and other laws. Our
        trademarks and trade dress may not be used without our prior written
        consent.
      </p>
    ),
  },
  {
    num: "06",
    title: "Third-Party Services",
    body: (
      <p>
        Our Service may integrate with third-party services such as GitHub,
        Jira, Slack, and others. Your use of these third-party services is
        subject to their respective terms of service and privacy policies. We
        are not responsible for the practices of these third-party services.
      </p>
    ),
  },
  {
    num: "07",
    title: "Disclaimer",
    body: (
      <p>
        The information on this Service is provided on an &quot;as is&quot;
        basis. To the fullest extent permitted by law, Ovlox.dev excludes all
        representations, warranties, and conditions relating to our Service and
        the use of this Service.
      </p>
    ),
  },
  {
    num: "08",
    title: "Limitation of Liability",
    body: (
      <p>
        In no event shall Ovlox.dev, nor its directors, employees, partners,
        agents, suppliers, or affiliates, be liable for any indirect,
        incidental, special, consequential, or punitive damages, including
        without limitation, loss of profits, data, use, goodwill, or other
        intangible losses, resulting from your use of the Service.
      </p>
    ),
  },
  {
    num: "09",
    title: "Termination",
    body: (
      <p>
        We may terminate or suspend your account and bar access to the Service
        immediately, without prior notice or liability, for any reason
        whatsoever, including without limitation if you breach the Terms.
      </p>
    ),
  },
  {
    num: "10",
    title: "Changes to Terms",
    body: (
      <p>
        We reserve the right, at our sole discretion, to modify or replace
        these Terms at any time. If a revision is material, we will provide at
        least 30 days notice prior to any new terms taking effect.
      </p>
    ),
  },
  {
    num: "11",
    title: "Contact Information",
    body: (
      <>
        <p>If you have any questions about these Terms of Service, please contact us:</p>
        <a className="legal-mail" href="mailto:admin@learnwithstack.com">
          admin@learnwithstack.com
        </a>
      </>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="page-shell" data-anim="on">
        <section className="page-hero reveal in">
          <div className="page-eyebrow">Legal · Terms</div>
          <h1 className="page-title">
            Terms of <span className="it">Service.</span>
          </h1>
          <p className="page-sub">
            The rules of the road. Usage guidelines, responsibilities, and
            conditions for accessing the Ovlox platform.
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
            <div className="frame-tab active">terms-of-service.md</div>
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
            <span className="l1">Need clarification on these terms?</span>
            <span className="l2">
              Reach out and we&apos;ll walk you through the details.
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
