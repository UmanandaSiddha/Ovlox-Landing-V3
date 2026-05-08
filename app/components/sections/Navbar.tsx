import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
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
          </span> */}
          {/* <span className="brand-name">
            Ovlox<span className="dev">.dev</span>
          </span> */}
        </a>
        <div className="nav-links">
          <a href="#product">Product</a>
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#docs">Docs</a>
        </div>
        <div className="nav-spacer" />
        <div className="nav-cta">
          <a href="#" className="btn btn-ghost">
            Sign in
          </a>
          <a href="#" className="btn btn-primary">
            Get started
          </a>
        </div>
      </div>
    </nav>
  );
}
