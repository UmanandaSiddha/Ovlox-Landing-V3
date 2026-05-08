export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-inner">
        <h2 className="reveal">
          Stop guessing. <span className="it">Start knowing.</span>
        </h2>
        <p className="reveal delay-1">
          Join teams running projects with clarity, not chaos.
        </p>
        <div className="cta-btns reveal delay-2">
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
          <a href="#" className="btn btn-line btn-lg">
            Book a demo
          </a>
        </div>
        <div className="hero-trust reveal delay-3" style={{ marginTop: 28 }}>
          <span className="dot" />
          <span>Free forever for solo developers · No credit card</span>
        </div>
      </div>
    </section>
  );
}
