import Link from "next/link";

// Mirrors the real DTF Printer USA header pattern: promo marquee + logo-search-cart row.
// Logo + nav follow live-site spacing (1370px max-width container, Poppins, navy palette).
export default function SiteHeader() {
  return (
    <>
      {/* Promo marquee — copies the real-site banner copy + orange accent */}
      <div className="bg-accent-orange text-white text-xs font-semibold py-2">
        <div className="max-w-container mx-auto px-6 flex items-center justify-center gap-3 tracking-wide">
          <svg className="w-3 h-3 fill-current" viewBox="0 0 506.53 510.69"><path d="M500.7,27.62q-36.6,35-73.12,70.12-51.12,49.06-102.29,98.1a55.94,55.94,0,0,1-5.33,4c3.14,2.3,5.08,3.77,7.06,5.18,29.3,21,58.69,42,87.82,63.22a21,21,0,0,1,7.21,10.15c2.13,7-1.16,12.82-8.35,16.79Q383.18,312,352.54,328.66L59.88,488.36a297,297,0,0,1-35,20A23.59,23.59,0,0,1,20,510.11h0a19.7,19.7,0,0,1-4.67.58,15.23,15.23,0,0,1-9.59-3.19c-.18-.13-.34-.28-.51-.43a1.49,1.49,0,0,1-.14-.12l-.58-.55L4.19,506a16.25,16.25,0,0,1-4.08-9.31,16.08,16.08,0,0,1-.11-1.8A13.51,13.51,0,0,1,.57,491a18.36,18.36,0,0,1,5.26-7.94q33.48-32,66.89-64.15,67.46-65.28,135-130.49a49.09,49.09,0,0,1,5.42-3.89c-8.41-6.07-15.5-11.2-22.62-16.3l-79.41-57c-12.42-8.92-11.34-21.75,2.4-28.48L481.61,2.37C493.53-3.47,505,1.88,506.42,14,507.08,19.56,504.66,23.84,500.7,27.62Z"/></svg>
          <span>Up to 55% Off on DTF Printing Supplies</span>
          <span className="text-white/70">·</span>
          <span>Free Shipping Over $500</span>
        </div>
      </div>

      <header className="bg-white border-b border-surface-border">
        <div className="max-w-container mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <a href="https://dtfprinterusa.com/" className="block flex-shrink-0">
            <img
              src="https://dtfprinterusa.com/cdn/shop/files/DTFPRINTERUSA_Logo_cut.png?v=1771210229&width=300"
              alt="DTF Printer USA"
              width={180}
              height={81}
              className="h-14 sm:h-16 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-body">
            <a href="https://dtfprinterusa.com/collections/dtf-printer" className="hover:text-navy">DTF Printers</a>
            <a href="https://dtfprinterusa.com/collections/heat-presses" className="hover:text-navy">Heat Presses</a>
            <a href="https://dtfprinterusa.com/collections/dtf-printing-supplies-sale" className="hover:text-navy">Supplies</a>
            <a href="https://dtfprinterusa.com/collections/embroidery-machines" className="hover:text-navy">Embroidery</a>
            <a href="https://dtfprinterusa.com/pages/contact-us" className="hover:text-navy">Contact</a>
          </nav>

          <div className="flex items-center gap-3 text-sm">
            <a
              href="https://dtfprinterusa.com/pages/contact-us"
              className="hidden sm:inline-flex bg-navy text-white font-semibold px-4 py-2 rounded hover:bg-navy-700 transition"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </header>

      {/* Preview banner — slim, only on the preview deploy */}
      <div className="bg-surface-alt border-b border-surface-border">
        <div className="max-w-container mx-auto px-6 py-2 text-xs text-surface-muted flex items-center justify-between gap-4">
          <span>
            <span className="font-semibold text-navy">PREVIEW</span> — proposed landing pages drafted 2026-05-26. Final lives on the main site at dtfprinterusa.com.
          </span>
          <div className="hidden sm:flex items-center gap-4">
            <Link href="/dtf-supplies-near-stafford-tx" className="hover:text-navy">Supplies (Stafford)</Link>
            <Link href="/dtf-printers-heat-presses-near-stafford-tx" className="hover:text-navy">Printers + Presses (Stafford)</Link>
          </div>
        </div>
      </div>
    </>
  );
}
