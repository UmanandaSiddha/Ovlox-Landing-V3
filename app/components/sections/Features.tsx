import BrandIcon from "@/app/components/BrandIcon";
import { BRAND_LABELS, type BrandKey } from "@/app/lib/brand-logos";

const compatTiles: BrandKey[] = [
  "github",
  "jira",
  "slack",
  "linear",
  "notion",
  "asana",
  "gitlab",
  "figma",
];

export default function Features() {
  return (
    <section className="s" id="features" data-anim="off" style={{ paddingTop: 0 }}>
      <div className="s-inner">
        <div className="s-head-center reveal">
          <div className="eyebrow">What Ovlox does</div>
          <h2 className="s-title">
            Your project intelligence <span className="it">layer.</span>
          </h2>
          <p className="s-lede">
            Five things working together so your team always knows where things
            stand — without another meeting.
          </p>
        </div>

        <div className="features">
          {/* F1 sync */}
          <div className="feature reveal">
            <div className="feature-text">
              <div className="feature-num">
                <span className="accent">01</span> &nbsp;/&nbsp; Real-time
                integration
              </div>
              <h3>
                Everything synced. <span className="it">Nothing missed.</span>
              </h3>
              <p>
                Connect Ovlox to GitHub, Jira, Slack, and the other 25+ tools
                your team uses. We pull and sync activity automatically — your
                whole team is always aligned.
              </p>
              <ul>
                <li>Bi-directional sync, not just read-only</li>
                <li>Updates land in seconds, not on a cron</li>
                <li>One unified timeline across every tool</li>
              </ul>
            </div>
            <div className="vis">
              <div className="vis-bar">
                <div className="dot" />
                sync · live · 14 sources
              </div>
              <div className="vis-body">
                <div className="sync">
                  <svg
                    className="lines"
                    viewBox="0 0 400 360"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="lg" x1="0" x2="1">
                        <stop
                          offset="0%"
                          stopColor="rgba(200,255,62,0.1)"
                        />
                        <stop offset="50%" stopColor="#c8ff3e" />
                        <stop
                          offset="100%"
                          stopColor="rgba(200,255,62,0.1)"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      className="line-path"
                      d="M40,60 C 140,60 160,180 200,180"
                      stroke="url(#lg)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      className="line-path"
                      d="M40,160 C 140,160 160,180 200,180"
                      stroke="url(#lg)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      className="line-path"
                      d="M40,260 C 140,260 160,180 200,180"
                      stroke="url(#lg)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      className="line-path"
                      d="M360,60 C 260,60 240,180 200,180"
                      stroke="url(#lg)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      className="line-path"
                      d="M360,160 C 260,160 240,180 200,180"
                      stroke="url(#lg)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      className="line-path"
                      d="M360,260 C 260,260 240,180 200,180"
                      stroke="url(#lg)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                  <div className="sync-col">
                    <div className="sync-node">
                      <BrandIcon name="github" className="ic" />
                      GitHub<small>sync</small>
                    </div>
                    <div className="sync-node">
                      <BrandIcon name="jira" className="ic" />
                      Jira<small>sync</small>
                    </div>
                    <div className="sync-node">
                      <BrandIcon name="slack" className="ic" />
                      Slack<small>sync</small>
                    </div>
                  </div>
                  <div className="sync-hub">
                    <div className="ovlox-dot">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 6 4 12 9 18" />
                        <polyline points="15 6 20 12 15 18" />
                      </svg>
                    </div>
                  </div>
                  <div className="sync-col">
                    <div className="sync-node">
                      <BrandIcon name="linear" className="ic" />
                      Linear<small>sync</small>
                    </div>
                    <div className="sync-node">
                      <BrandIcon name="notion" className="ic" />
                      Notion<small>sync</small>
                    </div>
                    <div className="sync-node">
                      <BrandIcon name="asana" className="ic" />
                      Asana<small>sync</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* F2 ai translation */}
          <div className="feature flip reveal">
            <div className="vis">
              <div className="vis-bar">
                <div className="dot" />
                ovlox-ai · translating commits
              </div>
              <div className="vis-body">
                <div className="trans">
                  <div className="trans-block">
                    <div className="lbl">commit · auth-service @ a3f1b2c</div>
                    <div className="trans-code">
                      <span className="c">{"// refactor token rotation"}</span>
                      <br />
                      <span className="k">async function</span>{" "}
                      <span className="f">refreshSession</span>(
                      <span className="k">token</span>) {"{"}
                      <br />
                      &nbsp;&nbsp;<span className="k">const</span> sig ={" "}
                      <span className="k">await</span> verify(
                      <span className="k">token</span>);
                      <br />
                      &nbsp;&nbsp;<span className="k">if</span> (!sig.valid){" "}
                      <span className="k">throw new</span>{" "}
                      <span className="f">AuthError</span>(
                      <span className="s">&apos;expired&apos;</span>);
                      <br />
                      &nbsp;&nbsp;<span className="k">return</span> rotate(sig);
                      <br />
                      {"}"}
                    </div>
                  </div>
                  <div className="trans-arrow">
                    <span className="pill-i">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                      Translated by Ovlox
                    </span>
                  </div>
                  <div className="trans-block">
                    <div className="lbl">plain english</div>
                    <div className="trans-out">
                      Maya tightened how users stay signed in. After this
                      change, <b>expired sessions are caught earlier</b> and
                      users are asked to re-authenticate cleanly — instead of
                      seeing a generic error.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-text">
              <div className="feature-num">
                <span className="accent">02</span> &nbsp;/&nbsp; AI-powered
                clarity
              </div>
              <h3>
                Understand your project —{" "}
                <span className="it">without being technical.</span>
              </h3>
              <p>
                Ovlox translates commits, PRs, and tasks into plain summaries
                anyone on the team can read. Engineers get deeper insights.
                Founders get clarity without the jargon.
              </p>
              <ul>
                <li>Per-commit and per-PR plain-English summaries</li>
                <li>Daily and weekly digests, written for you</li>
                <li>
                  Ask questions in natural language: &quot;what shipped?&quot;
                </li>
              </ul>
            </div>
          </div>

          {/* F3 risk */}
          <div className="feature reveal">
            <div className="feature-text">
              <div className="feature-num">
                <span className="accent">03</span> &nbsp;/&nbsp; Proactive risk
                detection
              </div>
              <h3>
                Catch problems{" "}
                <span className="it">before they become disasters.</span>
              </h3>
              <p>
                Our AI watches timelines, code activity, and workflow patterns
                to surface anomalies before they slip the sprint. Stay ahead of
                blockers — instead of explaining them.
              </p>
              <ul>
                <li>Spot delays before they happen</li>
                <li>Flag risky code changes and stale reviews</li>
                <li>Get nudges in the channels you already live in</li>
              </ul>
            </div>
            <div className="vis">
              <div className="vis-bar">
                <div className="dot" />
                risk-engine · scanning 47 signals
              </div>
              <div className="vis-body">
                <div className="risks-vis">
                  <div className="risk-line">
                    <div className="rl-name">checkout</div>
                    <div className="rl-bar">
                      <div
                        className="rl-fill"
                        style={{
                          width: "84%",
                          background:
                            "linear-gradient(to right, #ff5b6e, #ff8a3d)",
                          animationDelay: "0s",
                        }}
                      />
                    </div>
                    <div className="rl-val" style={{ color: "var(--danger)" }}>
                      HIGH
                    </div>
                  </div>
                  <div className="risk-line">
                    <div className="rl-name">payments</div>
                    <div className="rl-bar">
                      <div
                        className="rl-fill"
                        style={{
                          width: "62%",
                          background:
                            "linear-gradient(to right, #ff8a3d, #ffb84d)",
                          animationDelay: ".1s",
                        }}
                      />
                    </div>
                    <div className="rl-val" style={{ color: "var(--warn)" }}>
                      MED
                    </div>
                  </div>
                  <div className="risk-line">
                    <div className="rl-name">auth</div>
                    <div className="rl-bar">
                      <div
                        className="rl-fill"
                        style={{
                          width: "32%",
                          background:
                            "linear-gradient(to right, #6fb6ff, #c8ff3e)",
                          animationDelay: ".2s",
                        }}
                      />
                    </div>
                    <div className="rl-val" style={{ color: "var(--info)" }}>
                      LOW
                    </div>
                  </div>
                  <div className="risk-line">
                    <div className="rl-name">onboarding</div>
                    <div className="rl-bar">
                      <div
                        className="rl-fill"
                        style={{
                          width: "18%",
                          background:
                            "linear-gradient(to right, #c8ff3e, #7cf66f)",
                          animationDelay: ".3s",
                        }}
                      />
                    </div>
                    <div
                      className="rl-val"
                      style={{ color: "var(--accent-2)" }}
                    >
                      OK
                    </div>
                  </div>
                  <div className="risk-line">
                    <div className="rl-name">infra</div>
                    <div className="rl-bar">
                      <div
                        className="rl-fill"
                        style={{
                          width: "14%",
                          background:
                            "linear-gradient(to right, #c8ff3e, #7cf66f)",
                          animationDelay: ".4s",
                        }}
                      />
                    </div>
                    <div
                      className="rl-val"
                      style={{ color: "var(--accent-2)" }}
                    >
                      OK
                    </div>
                  </div>
                  <div className="risk-line">
                    <div className="rl-name">docs-site</div>
                    <div className="rl-bar">
                      <div
                        className="rl-fill"
                        style={{
                          width: "48%",
                          background:
                            "linear-gradient(to right, #ffb84d, #ff8a3d)",
                          animationDelay: ".5s",
                        }}
                      />
                    </div>
                    <div className="rl-val" style={{ color: "var(--warn)" }}>
                      MED
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* F4 + F5 pair */}
          <div className="feat-pair">
            <div
              className="feature reveal"
              style={{ gridTemplateColumns: "1fr", padding: 36 }}
            >
              <div className="feature-text">
                <div className="feature-num">
                  <span className="accent">04</span> &nbsp;/&nbsp; Universal
                  compatibility
                </div>
                <h3>
                  Works with your stack —{" "}
                  <span className="it">now and later.</span>
                </h3>
                <p>
                  No need to rip out your tools. Ovlox slips into the workflow
                  you already have, and grows with you as your stack changes.
                </p>
              </div>
              <div className="vis">
                <div className="vis-bar">
                  <div className="dot" />
                  30+ tools, one layer
                </div>
                <div className="vis-body">
                  <div className="compat">
                    {compatTiles.map((t) => (
                      <div className="compat-tile" key={t}>
                        <BrandIcon name={t} />
                        <div className="name">
                          {BRAND_LABELS[t].toLowerCase()}
                        </div>
                      </div>
                    ))}
                    <div
                      className="compat-tile plus"
                      style={{ gridColumn: "span 4" }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                      <div className="name">+ 24 more</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="feature reveal delay-1"
              style={{ gridTemplateColumns: "1fr", padding: 36 }}
            >
              <div className="feature-text">
                <div className="feature-num">
                  <span className="accent">05</span> &nbsp;/&nbsp; Tailored
                  insights
                </div>
                <h3>
                  The right insights —{" "}
                  <span className="it">for the right people.</span>
                </h3>
                <p>
                  Different roles need different views. Devs see commits.
                  Managers see progress. Founders see the big picture. All from
                  the same source of truth.
                </p>
              </div>
              <div className="vis">
                <div className="vis-bar">
                  <div className="dot" />
                  same data · 3 lenses
                </div>
                <div className="vis-body">
                  <div className="roles">
                    <div className="role-card">
                      <div className="role-av">D</div>
                      <div>
                        <div className="role-name">Developer</div>
                        <div className="role-view">
                          commit-level · diffs · review queue
                        </div>
                      </div>
                    </div>
                    <div className="role-card">
                      <div className="role-av">M</div>
                      <div>
                        <div className="role-name">Manager</div>
                        <div className="role-view">
                          velocity · blockers · sprint progress
                        </div>
                      </div>
                    </div>
                    <div className="role-card hi">
                      <div className="role-av">F</div>
                      <div>
                        <div className="role-name">Founder</div>
                        <div className="role-view">
                          what shipped · what&apos;s at risk · why
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
