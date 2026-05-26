import { PRODUCTS, ProductSlug, formatPrice } from "@/products";

// Reference-style product card: dark surface, image up top with optional badge,
// title, big price, optional sale strike, big red "Order" CTA at the bottom.
export default function ProductCard({
  slug,
  badge,
  cta = "Order Now",
  blurb,
}: {
  slug: ProductSlug;
  badge?: string;
  cta?: string;
  blurb?: string;
}) {
  const product = PRODUCTS[slug];
  if (!product) return null;
  const href = `https://dtfprinterusa.com/products/${slug}`;
  const onSale = product.compareAt && product.compareAt > product.price;
  const pct = onSale
    ? Math.round(((product.compareAt! - product.price) / product.compareAt!) * 100)
    : null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col bg-ink-800 border border-ink-700 rounded-xl overflow-hidden hover:border-accent-red/70 hover:shadow-2xl hover:shadow-accent-red/10 transition no-underline"
    >
      <div className="relative aspect-square bg-white overflow-hidden">
        {badge && (
          <div className="absolute top-3 left-3 z-10 bg-accent-yellow text-ink-900 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
            ★ {badge}
          </div>
        )}
        {pct !== null && (
          <div className="absolute top-3 right-3 z-10 bg-accent-red text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
            -{pct}%
          </div>
        )}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-contain p-5 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-1 p-4 gap-2">
        <div className="text-[15px] font-extrabold text-white leading-tight line-clamp-2 min-h-[2.6em]">
          {product.title}
        </div>
        {blurb && <div className="text-xs text-white/55 leading-snug line-clamp-3">{blurb}</div>}
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-accent-yellow text-xl font-extrabold">{formatPrice(product.price)}</span>
          {onSale && (
            <span className="text-white/40 text-sm line-through">{formatPrice(product.compareAt!)}</span>
          )}
        </div>
        <div className="mt-2 inline-flex items-center justify-center gap-1.5 bg-accent-red group-hover:bg-accent-redHover text-white text-xs font-extrabold uppercase tracking-wider px-4 py-2.5 rounded transition">
          {cta} <span aria-hidden>→</span>
        </div>
      </div>
    </a>
  );
}
