import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="ft-inner">
        <div className="ft-brand">
          <a className="brand" href="#">
            <Image src="/brand/ovlox_logo.svg" alt="Ovlox" height={50} width={90} priority />
            {/* <span className="brand-mark">
              <svg
                width="18"
                height="18"
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
            </span>
            <span className="brand-name">
              Ovlox<span className="dev">.dev</span>
            </span> */}
          </a>
          <div>
            The project intelligence layer for fast-moving teams. Your single
            source of truth.
          </div>
        </div>
        <div className="ft-col">
          <h5>Product</h5>
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Changelog</a>
            </li>
          </ul>
        </div>
        <div className="ft-col">
          <h5>Company</h5>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="ft-col">
          <h5>Resources</h5>
          <ul>
            <li>
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
          </ul>
        </div>
        <div className="ft-col">
          <h5>Legal</h5>
          <ul>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">DPA</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="ft-bottom">
        <div>© 2026 Ovlox.dev — All rights reserved.</div>
        <div className="ft-tag">
          ovlox.dev — your project&apos;s single source of truth
        </div>
      </div>
    </footer>
  );
}
