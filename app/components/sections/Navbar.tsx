import Image from "next/image";
import Link from "next/link";
import SectionLink from "@/app/components/SectionLink";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link className="brand" href="/">
          <Image
            src="/brand/ovlox_logo.svg"
            alt="Ovlox"
            height={50}
            width={90}
            priority
          />
        </Link>
        <div className="nav-links">
          <SectionLink section="product">Product</SectionLink>
          <SectionLink section="features">Features</SectionLink>
          <SectionLink section="how">How it works</SectionLink>
          <Link href="/coming-soon">Pricing</Link>
          <Link href="/coming-soon">Docs</Link>
        </div>
        <div className="nav-spacer" />
        <div className="nav-cta">
          <Link href="/coming-soon" className="btn btn-ghost">
            Sign in
          </Link>
          <Link href="/waitlist" className="btn btn-primary">
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
}
