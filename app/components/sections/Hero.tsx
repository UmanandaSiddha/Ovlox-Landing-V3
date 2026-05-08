import BrandIcon from "@/app/components/BrandIcon";

export default function Hero() {
  return (
    <header className="hero">
      <div className="float-logos">
        <div className="float-logo fl1">
          <BrandIcon name="github" />
        </div>
        <div className="float-logo fl2">
          <BrandIcon name="jira" />
        </div>
        <div className="float-logo fl3">
          <BrandIcon name="slack" />
        </div>
        <div className="float-logo fl4">
          <BrandIcon name="linear" />
        </div>
        <div className="float-logo fl5">
          <BrandIcon name="notion" />
        </div>
        <div className="float-logo fl6">
          <BrandIcon name="figma" />
        </div>
      </div>

      <div className="hero-inner">
        <a href="#" className="pill reveal in">
          <span className="pill-tag">NEW</span>
          <span>Ovlox AI now writes your weekly project digest</span>
          <span className="pill-arrow">→</span>
        </a>
        <h1 className="hero-title reveal in delay-1">
          Your project&apos;s <span className="accent">single source</span> of
          truth.
        </h1>
        <p className="hero-sub reveal in delay-2">
          Stop chasing updates across GitHub, Jira, and Slack. Ovlox unifies
          everything and tells you exactly what&apos;s happening —{" "}
          <b>in plain English</b>.
        </p>
        <div className="hero-cta reveal in delay-3">
          <a href="#" className="btn btn-primary btn-lg">
            Get started free
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
          </a>
          <a href="#how" className="btn btn-line btn-lg">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            See how it works
          </a>
        </div>
        <div className="hero-trust reveal in delay-4">
          <span className="dot" />
          <span>
            Built for founders, engineering leaders, and fast-moving teams
          </span>
        </div>

        <div className="product reveal" id="product">
          <div className="product-frame">
            <div className="frame-titlebar">
              <div className="frame-dots">
                <div className="frame-dot r" />
                <div className="frame-dot y" />
                <div className="frame-dot g" />
              </div>
              <div className="frame-tabs">
                <div className="frame-tab active">Atlas-Frontend</div>
                <div className="frame-tab">Payments-API</div>
                <div className="frame-tab">+</div>
              </div>
              <div className="frame-url">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                ovlox.dev/p/atlas-frontend
              </div>
            </div>

            <div className="product-body">
              <aside className="pb-sidebar">
                <div className="pb-section">Workspace</div>
                <div className="pb-item active">
                  <svg
                    className="ic"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                  Overview
                </div>
                <div className="pb-item">
                  <svg
                    className="ic"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v18h18" />
                    <polyline points="7 14 11 10 15 13 21 7" />
                  </svg>
                  Velocity
                </div>
                <div className="pb-item">
                  <svg
                    className="ic"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2 2 7l10 5 10-5-10-5z" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                  Stack <span className="badge">7</span>
                </div>
                <div className="pb-item">
                  <svg
                    className="ic"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  Risks <span className="badge">3</span>
                </div>
                <div className="pb-item">
                  <svg
                    className="ic"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Timeline
                </div>
                <div className="pb-section">Connected</div>
                <div className="pb-item">
                  <BrandIcon name="github" className="brand-ic" />
                  GitHub
                </div>
                <div className="pb-item">
                  <BrandIcon name="jira" className="brand-ic" />
                  Jira
                </div>
                <div className="pb-item">
                  <BrandIcon name="slack" className="brand-ic" />
                  Slack
                </div>
                <div className="pb-item">
                  <BrandIcon name="linear" className="brand-ic" />
                  Linear
                </div>
              </aside>

              <main className="pb-main">
                <div className="pb-h">
                  <div>
                    <h2>Atlas Frontend — Sprint 24</h2>
                    <div className="pb-h-sub">
                      Last synced 2 minutes ago · 14 contributors
                    </div>
                  </div>
                  <div className="meta">on track · 78%</div>
                </div>

                <div className="ai-card">
                  <div className="ai-head">
                    <span className="pulse" />
                    Ovlox AI · Project digest
                  </div>
                  <div className="ai-body">
                    Sprint 24 is <b>78% done</b> and on track for Friday.
                    Backend velocity is up 12%, but the new checkout flow has
                    stalled — <b>3 PRs awaiting review for 2+ days</b>. I&apos;d
                    unblock @sara before tomorrow standup.
                  </div>
                </div>

                <div className="stat-row">
                  <div className="stat">
                    <div className="stat-l">Sprint progress</div>
                    <div className="stat-v">78%</div>
                    <div className="stat-d up">▲ +14% wk</div>
                  </div>
                  <div className="stat">
                    <div className="stat-l">PRs merged</div>
                    <div className="stat-v">42</div>
                    <div className="stat-d up">▲ +8</div>
                  </div>
                  <div className="stat">
                    <div className="stat-l">Blocked tasks</div>
                    <div className="stat-v">3</div>
                    <div className="stat-d down">▼ +2</div>
                  </div>
                  <div className="stat">
                    <div className="stat-l">Cycle time</div>
                    <div className="stat-v">2.1d</div>
                    <div className="stat-d flat">— flat</div>
                  </div>
                </div>

                <div className="feed">
                  <div className="feed-item">
                    <div className="feed-ic">
                      <BrandIcon name="github" />
                    </div>
                    <div className="feed-text">
                      @maya merged{" "}
                      <span className="mono">
                        #412 fix(auth): refresh token rotation
                      </span>{" "}
                      <span className="muted">into main</span>
                    </div>
                    <div className="feed-time">2m</div>
                  </div>
                  <div className="feed-item">
                    <div className="feed-ic">
                      <BrandIcon name="jira" />
                    </div>
                    <div className="feed-text">
                      <b>ATL-218</b> moved to{" "}
                      <span className="muted">In Review</span> · checkout v2
                      polish
                    </div>
                    <div className="feed-time">14m</div>
                  </div>
                  <div className="feed-item">
                    <div className="feed-ic">
                      <BrandIcon name="slack" />
                    </div>
                    <div className="feed-text">
                      @dev-team thread: &quot;
                      <span className="muted">
                        staging is flaking on the payments hook
                      </span>
                      &quot;
                    </div>
                    <div className="feed-time">31m</div>
                  </div>
                  <div className="feed-item">
                    <div className="feed-ic">
                      <BrandIcon name="linear" />
                    </div>
                    <div className="feed-text">
                      @sara opened{" "}
                      <span className="mono">
                        ENG-418 feat(checkout): apple pay sheet
                      </span>{" "}
                      <span className="muted">+1,204 −38</span>
                    </div>
                    <div className="feed-time">1h</div>
                  </div>
                </div>
              </main>

              <aside className="pb-right">
                <h3>Detected risks</h3>
                <div className="risk">
                  <div className="risk-h">
                    <span className="risk-tag high">High</span>
                  </div>
                  <div className="risk-title">
                    Checkout flow PRs stalled 2+ days
                  </div>
                  <div className="risk-meta">3 PRs · 2 reviewers</div>
                  <div className="risk-bar">
                    <div
                      className="risk-bar-fill"
                      style={{ width: "82%", background: "var(--danger)" }}
                    />
                  </div>
                </div>
                <div className="risk">
                  <div className="risk-h">
                    <span className="risk-tag med">Medium</span>
                  </div>
                  <div className="risk-title">
                    Velocity dipping on Payments-API
                  </div>
                  <div className="risk-meta">−18% wk over wk</div>
                  <div className="risk-bar">
                    <div
                      className="risk-bar-fill"
                      style={{ width: "56%", background: "var(--warn)" }}
                    />
                  </div>
                </div>
                <div className="risk">
                  <div className="risk-h">
                    <span className="risk-tag low">Low</span>
                  </div>
                  <div className="risk-title">Test coverage trending down</div>
                  <div className="risk-meta">81% · target 85%</div>
                  <div className="risk-bar">
                    <div
                      className="risk-bar-fill"
                      style={{ width: "28%", background: "var(--info)" }}
                    />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
