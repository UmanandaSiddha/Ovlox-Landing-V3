export default function ICP() {
  return (
    <section className="s" data-anim="off" style={{ paddingTop: 0 }}>
      <div className="s-inner">
        <div className="s-head-center reveal">
          <div className="eyebrow">Built for</div>
          <h2 className="s-title">
            Teams that need clarity, <span className="it">fast.</span>
          </h2>
        </div>
        <div className="icp">
          <div className="icp-card reveal">
            <div className="icp-ic">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <h4>Non-technical founders &amp; PMs</h4>
            <p>
              Understand progress without decoding tech jargon. Make confident
              decisions, faster — without bothering the engineering team.
            </p>
          </div>
          <div className="icp-card reveal delay-1">
            <div className="icp-ic">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h4>Engineering leaders</h4>
            <p>
              Track execution, reduce risk, and improve delivery speed. See
              where your team is unblocked — and where it isn&apos;t.
            </p>
          </div>
          <div className="icp-card reveal delay-2">
            <div className="icp-ic">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h4>Scaling teams</h4>
            <p>
              Unify visibility as your team and stack grow. One layer that
              holds, even when you&apos;re shipping a new product every quarter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
