export default function ValueProp() {
  return (
    <section className="s" data-anim="off" style={{ paddingTop: 0 }}>
      <div className="s-inner">
        <div className="s-head-center reveal">
          <div className="eyebrow">Why teams choose Ovlox</div>
          <h2 className="s-title">
            Replace the <span className="it">chaos</span> with{" "}
            <span className="it">clarity.</span>
          </h2>
        </div>
        <div className="vp-grid">
          <div className="vp-col bad reveal">
            <h4>Without Ovlox</h4>
            <ul className="vp-list">
              <li>
                <span className="mark">×</span>Status meetings every week
              </li>
              <li>
                <span className="mark">×</span>Manual reports written by hand
              </li>
              <li>
                <span className="mark">×</span>Tool-hopping to piece things
                together
              </li>
              <li>
                <span className="mark">×</span>Decisions based on guesswork
              </li>
            </ul>
          </div>
          <div className="vp-arrow reveal delay-1">→</div>
          <div className="vp-col good reveal delay-2">
            <h4>With Ovlox</h4>
            <ul className="vp-list">
              <li>
                <span className="mark">✓</span>Real-time visibility in one place
              </li>
              <li>
                <span className="mark">✓</span>AI-powered insights, written for
                you
              </li>
              <li>
                <span className="mark">✓</span>Risks flagged before they hit
              </li>
              <li>
                <span className="mark">✓</span>One source of truth for everyone
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
