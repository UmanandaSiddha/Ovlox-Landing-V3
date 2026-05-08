import BrandIcon from "@/app/components/BrandIcon";
import {
  ALL_BRANDS,
  BRAND_LABELS,
  type BrandKey,
} from "@/app/lib/brand-logos";

export default function IntegrationsMarquee() {
  const items: BrandKey[] = [...ALL_BRANDS, ...ALL_BRANDS];
  return (
    <section className="integrations" data-anim="off">
      <div className="int-label mono">
        — CONNECTS WITH THE TOOLS YOUR TEAM ALREADY USES —
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {items.map((t, i) => (
            <div className="int" key={`${t}-${i}`}>
              <div className="lg">
                <BrandIcon name={t} />
              </div>
              {BRAND_LABELS[t]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
