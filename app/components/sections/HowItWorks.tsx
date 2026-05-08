import BrandIcon from "@/app/components/BrandIcon";

export default function HowItWorks() {
  return (
    <section className="s" id="how" data-anim="off" style={{ paddingTop: 0 }}>
      <div className="s-inner">
        <div className="s-head-center reveal">
          <div className="eyebrow">How it works</div>
          <h2 className="s-title">
            Get started <span className="it">in minutes.</span>
          </h2>
        </div>
        <div className="steps">
          <div className="step reveal">
            <div className="step-n">01</div>
            <h4>Connect your tools</h4>
            <p>
              One click each. GitHub, Jira, Slack, Linear, Notion, and 25+ more.
              No CLI, no YAML.
            </p>
            <div className="step-vis">
              <div className="step-tools">
                <div className="step-tool">
                  <BrandIcon name="github" />
                </div>
                <div className="step-tool">
                  <BrandIcon name="jira" />
                </div>
                <div className="step-tool">
                  <BrandIcon name="slack" />
                </div>
                <div className="step-tool">
                  <BrandIcon name="linear" />
                </div>
                <div
                  className="step-tool"
                  style={{
                    background: "var(--accent)",
                    color: "#07070a",
                    borderColor: "var(--accent)",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="step reveal delay-1">
            <div className="step-n">02</div>
            <h4>Let Ovlox analyze</h4>
            <p>
              We process commits, tickets, and threads in real time. No setup.
              No tagging. It just works.
            </p>
            <div
              className="step-vis"
              style={{ textAlign: "left", alignItems: "stretch" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 11,
                  lineHeight: 1.7,
                }}
              >
                <div
                  className="typing-line t1"
                  style={{ color: "var(--accent-2)" }}
                >
                  › indexing 14,288 events…
                </div>
                <div
                  className="typing-line t2"
                  style={{ color: "var(--accent-2)" }}
                >
                  › linking PRs ↔ tickets…
                </div>
                <div
                  className="typing-line t3"
                  style={{ color: "var(--accent-2)" }}
                >
                  › generating digests…
                </div>
                <div className="typing-line t4">✓ ready</div>
              </div>
            </div>
          </div>
          <div className="step reveal delay-2">
            <div className="step-n">03</div>
            <h4>Get instant clarity</h4>
            <p>
              See progress, risks, and what shipped — clearly, and in plain
              English. Wherever your team is.
            </p>
            <div className="step-vis" style={{ padding: 0 }}>
              <div
                style={{
                  background: "var(--bg-2)",
                  border: "1px solid rgba(200,255,62,0.25)",
                  borderRadius: 8,
                  padding: 12,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  justifyContent: "center",
                  alignItems: "stretch",
                  boxShadow: "0 0 16px rgba(200,255,62,0.1)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: 9,
                    color: "var(--accent)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  ▎ TODAY&apos;S DIGEST
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--fg)",
                    lineHeight: 1.5,
                  }}
                >
                  3 PRs merged · 2 risks · checkout flow ready for QA Friday.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
