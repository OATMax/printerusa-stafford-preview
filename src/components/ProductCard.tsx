import { PRODUCTS } from "@/products";

type ProductSlug = keyof typeof PRODUCTS;

// Mirrors the real DTF Printer USA product card pattern: square image,
// title below, "View" CTA, hover state.
export default function ProductCard({
  slug,
  badge,
}: {
  slug: ProductSlug;
  badge?: string;
}) {
  const product = PRODUCTS[slug];
  if (!product) return null;
  const href = `https://dtfprinterusa.com/products/${slug}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block bg-white border border-surface-border rounded-lg overflow-hidden hover:shadow-lg hover:border-navy/40 transition no-underline"
    >
      <div className="relative aspect-square bg-surface-alt overflow-hidden">
        {badge && (
          <div className="absolute top-3 left-3 z-10 bg-accent-red text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded">
            {badge}
          </div>
        )}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="text-sm font-semibold text-body line-clamp-2 min-h-[2.6em] group-hover:text-navy transition">
          {product.title}
        </div>
        <div className="mt-3 text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1 group-hover:gap-2 transition-all">
          View product
          <span aria-hidden>→</span>
        </div>
      </div>
    </a>
  );
}
