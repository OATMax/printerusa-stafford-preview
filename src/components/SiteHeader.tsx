import Link from "next/link";

// Top promo strip + main nav row. Matches the reference dark-landing pattern:
// thin red promo bar, dark nav, big red "SHOP X" CTA on the right.
export default function SiteHeader({ ctaLabel = "Shop Supplies", ctaHref = "https://dtfprinterusa.com/collections/dtf-printing-supplies-sale" }: { ctaLabel?: string; ctaHref?: string }) {
  return (
    <>
      <div className="bg-accent-red text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider py-2">
        <div className="max-w-container mx-auto px-6 flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
          <span>Up to 55% Off DTF Supplies</span>
          <span className="opacity-50">·</span>
          <span>Free Shipping on Orders $500+</span>
          <span className="opacity-50">·</span>
          <span>Professional Setup Service Available</span>
        </div>
      </div>

      <header className="bg-ink-950 border-b border-ink-700">
        <div className="max-w-container mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <a href="https://dtfprinterusa.com/" className="block flex-shrink-0">
            <img
              src="https://dtfprinterusa.com/cdn/shop/files/DTFPRINTERUSA_Logo_cut.png?v=1771210229&width=300"
              alt="DTF Printer USA"
              width={150}
              height={68}
              className="h-12 sm:h-14 w-auto"
            />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider font-bold text-white/80">
            <a href="https://dtfprinterusa.com/collections/dtf-printer" className="hover:text-white">DTF Printers</a>
            <a href="https://dtfprinterusa.com/collections/heat-presses" className="hover:text-white">Heat Press</a>
            <a href="https://dtfprinterusa.com/collections/dtf-film" className="hover:text-white">DTF Film</a>
            <a href="https://dtfprinterusa.com/collections/dtf-transfer-powders" className="hover:text-white">Powder</a>
            <Link href="/dtf-supplies-near-stafford-tx" className="hover:text-white">Stafford Supplies</Link>
          </nav>
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-redHover text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider px-5 py-2.5 rounded transition"
          >
            {ctaLabel}
          </a>
        </div>
      </header>
    </>
  );
}
