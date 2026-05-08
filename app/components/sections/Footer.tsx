import Image from "next/image";
import Link from "next/link";
import SectionLink from "@/app/components/SectionLink";

export default function Footer() {
  return (
    <footer>
      <div className="ft-inner">
        <div className="ft-brand">
          <Link className="brand" href="/">
            <Image
              src="/brand/ovlox_logo.svg"
              alt="Ovlox"
              height={50}
              width={90}
              priority
            />
          </Link>
          <div>
            The project intelligence layer for fast-moving teams. Your single
            source of truth.
          </div>
        </div>
        <div className="ft-col">
          <h5>Product</h5>
          <ul>
            <li>
              <SectionLink section="features">Features</SectionLink>
            </li>
            <li>
              <Link href="/coming-soon">Integrations</Link>
            </li>
            <li>
              <Link href="/coming-soon">Pricing</Link>
            </li>
            <li>
              <Link href="/coming-soon">Changelog</Link>
            </li>
          </ul>
        </div>
        <div className="ft-col">
          <h5>Company</h5>
          <ul>
            <li>
              <Link href="/coming-soon">About</Link>
            </li>
            <li>
              <Link href="/coming-soon">Blog</Link>
            </li>
            <li>
              <Link href="/coming-soon">Careers</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="ft-col">
          <h5>Resources</h5>
          <ul>
            <li>
              <Link href="/coming-soon">Docs</Link>
            </li>
            <li>
              <Link href="/coming-soon">API</Link>
            </li>
            <li>
              <Link href="/coming-soon">Status</Link>
            </li>
            <li>
              <Link href="/coming-soon">Security</Link>
            </li>
          </ul>
        </div>
        <div className="ft-col">
          <h5>Legal</h5>
          <ul>
            <li>
              <Link href="/terms-of-service">Terms</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy</Link>
            </li>
            <li>
              <Link href="/coming-soon">DPA</Link>
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
