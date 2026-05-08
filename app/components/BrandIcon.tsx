import { BRAND_LOGOS, type BrandKey } from "@/app/lib/brand-logos";

type Props = {
  name: BrandKey;
  className?: string;
};

export default function BrandIcon({ name, className }: Props) {
  return (
    <span
      className={className}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: BRAND_LOGOS[name] }}
    />
  );
}
