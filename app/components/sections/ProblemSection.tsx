export default function ProblemSection() {
  return (
    <section className="s">
      <div className="s-inner">
        <div className="problem-wrap">
          <div className="chaos reveal">
            <div className="msg q1">
              <div className="from">#general · 9:14 AM</div>
              &quot;What&apos;s actually <b>done</b> for the demo Friday?&quot;
            </div>
            <div className="msg q2">
              <div className="from">PM · DM</div>
              &quot;Why is the checkout still <b>delayed</b>?&quot;
            </div>
            <div className="msg q3">
              <div className="from">CEO · 2:01 PM</div>
              &quot;Is this <b>going off track</b>? Need a status.&quot;
            </div>
            <div className="msg q4">
              <div className="from">Investor email</div>
              &quot;Quick update on shipping?&quot;
            </div>
            <div className="msg q5">
              <div className="from">Standup · async</div>
              &quot;What are devs even <b>working on</b>?&quot;
            </div>
          </div>
          <div className="problem-text reveal delay-1">
            <div className="eyebrow">The problem</div>
            <h2 className="s-title">
              Your project isn&apos;t broken.{" "}
              <span className="it">Your visibility is.</span>
            </h2>
            <p className="s-lede">
              Your data is scattered across tools. Your team speaks different
              &quot;languages.&quot; And decisions are being made without
              clarity.
            </p>
            <ul className="problem-list">
              <li>
                <span className="x">×</span>Status meetings that go nowhere
              </li>
              <li>
                <span className="x">×</span>Manual reports you write at 11pm
              </li>
              <li>
                <span className="x">×</span>Tool-hopping to piece together
                &quot;the truth&quot;
              </li>
              <li>
                <span className="x">×</span>Surprise delays nobody saw coming
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
