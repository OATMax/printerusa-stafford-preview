import Link from "next/link";
import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "DTF Supplies Near Stafford, TX: Inks, Films, Powder, Accessories | DTF Printer USA",
  description: "DTF supplies for Stafford and Fort Bend County print shops: inks, films, transfer powders, and accessories. Direct ship from DTF Printer USA to Houston metro. No minimums.",
};

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noreferrer" className="text-navy font-semibold underline decoration-navy/30 hover:decoration-navy">{children}</a>
);

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-container mx-auto px-6 py-14 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-accent-orange font-bold mb-3">
              Stafford TX · Fort Bend County · Houston Metro
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
              DTF Supplies Near Stafford, TX
            </h1>
            <p className="text-white/85 text-lg leading-relaxed mb-6 max-w-xl">
              Inks, films, transfer powders, and accessories shipped same-week to Stafford,
              Sugar Land, Missouri City, and the broader southwest Houston metro. The recurring
              consumables every working DTF shop burns through, in one direct catalog.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://dtfprinterusa.com/collections/dtf-printing-supplies-sale"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-accent-orange hover:bg-orange-600 text-white font-bold px-6 py-3 rounded transition"
              >
                Browse Supplies Catalog
                <span aria-hidden>→</span>
              </a>
              <Link
                href="/dtf-printers-heat-presses-near-stafford-tx"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-6 py-3 rounded transition no-underline"
              >
                Looking for Printers + Presses?
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <img
              src="https://dtfprinterusa.com/cdn/shop/files/1_12eb7a02-1c53-4fb2-877c-5ff5a4a9e429.jpg?v=1771958097"
              alt="DTF supplies"
              className="rounded-xl shadow-2xl w-full max-w-md object-cover aspect-square bg-white"
            />
          </div>
        </div>
      </section>

      <article className="max-w-container mx-auto px-6 py-14 grid lg:grid-cols-[1fr_300px] gap-10">
        <div className="prose prose-lg max-w-none prose-headings:text-navy prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h3:text-xl prose-h3:font-semibold prose-a:text-navy prose-a:font-semibold prose-p:text-body">
          <p>
            DTF Printer USA serves print shops, custom-apparel operators, and small-business owners
            across Stafford, Sugar Land, Missouri City, and the broader Fort Bend County and southwest
            Houston metro with same-week direct shipping on every DTF supply we carry. From white-ink
            resupply to film-roll restocking to adhesive powder bulk orders, the catalog below covers
            every consumable a working DTF print shop burns through.
          </p>
          <p>
            For the high-ticket side of the catalog (DTF printers, heat presses, UV equipment, and
            embroidery machines), see the <Link href="/dtf-printers-heat-presses-near-stafford-tx">DTF printers and heat presses near Stafford</Link> landing.
          </p>

          <h2>DTF Inks for Stafford Print Shops</h2>
          <p>
            The single highest-burn consumable in any DTF shop is the ink supply. White-ink underbase
            is the layer that lets DTF transfers print full-opacity on dark garments, and it gets
            consumed at roughly twice the rate of CMYK ink on most production runs.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 my-6 not-prose">
            <ProductCard slug="dtf-white-ink-1-liter" />
            <a
              href="https://dtfprinterusa.com/collections/dtf-inks-t-shirts-hats"
              target="_blank"
              rel="noreferrer"
              className="bg-surface-alt border-2 border-dashed border-navy/30 rounded-lg p-6 flex flex-col justify-center text-center hover:bg-navy/5 transition no-underline"
            >
              <div className="text-xs uppercase tracking-wider font-bold text-navy mb-2">Collection</div>
              <div className="font-semibold text-body group-hover:text-navy">DTF Inks — White + CMYK</div>
              <div className="text-sm text-surface-muted mt-2">Full 1-liter refill bottles. i3200 + i1600 compatible.</div>
              <div className="mt-3 text-xs font-bold uppercase tracking-wider text-navy">Browse →</div>
            </a>
          </div>
          <p>
            For shops running daily production volumes, stock a two-week ink buffer minimum so a single
            delayed order never stops the press. Inks ship from DTF Printer USA fulfillment with direct
            delivery to Stafford-area addresses on standard ground freight.
          </p>

          <h2>DTF Films + Carrier Sheets</h2>
          <p>
            The PET carrier film is the second-highest-burn consumable. Film selection affects everything
            from print resolution to wash durability, and stocking the right weight for your application
            profile is the operational decision behind every successful production run.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 my-6 not-prose">
            <ProductCard slug="a4-dtf-paper" />
            <a
              href="https://dtfprinterusa.com/collections/dtf-film"
              target="_blank"
              rel="noreferrer"
              className="bg-surface-alt border-2 border-dashed border-navy/30 rounded-lg p-6 flex flex-col justify-center text-center hover:bg-navy/5 transition no-underline"
            >
              <div className="text-xs uppercase tracking-wider font-bold text-navy mb-2">Collection</div>
              <div className="font-semibold text-body">Full DTF Film Lineup</div>
              <div className="text-sm text-surface-muted mt-2">Roll widths and weights for every press setup.</div>
              <div className="mt-3 text-xs font-bold uppercase tracking-wider text-navy">Browse →</div>
            </a>
          </div>

          <h2>DTF Transfer Powders and Adhesives</h2>
          <p>
            The adhesive powder is what bonds your DTF print to the garment fiber. Powder selection
            matters: different grain sizes produce different hand-feel and different wash-durability
            profiles, and matching the powder to your fabric profile is part of the calibration
            discipline every working shop builds.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 my-6 not-prose">
            <ProductCard slug="dtf-moisturizing-liquid" />
            <a
              href="https://dtfprinterusa.com/collections/dtf-transfer-powders"
              target="_blank"
              rel="noreferrer"
              className="bg-surface-alt border-2 border-dashed border-navy/30 rounded-lg p-6 flex flex-col justify-center text-center hover:bg-navy/5 transition no-underline"
            >
              <div className="text-xs uppercase tracking-wider font-bold text-navy mb-2">Collection</div>
              <div className="font-semibold text-body">DTF Transfer Powders</div>
              <div className="text-sm text-surface-muted mt-2">Adhesive powders across grain sizes for cotton, poly, and blends.</div>
              <div className="mt-3 text-xs font-bold uppercase tracking-wider text-navy">Browse →</div>
            </a>
          </div>
          <p>
            For shops running mixed-application production (cotton + polyester + blends), keep at
            least two powder grain sizes in active inventory rather than committing to a single
            profile.
          </p>

          <h2>Replacement Parts and Maintenance Supplies</h2>
          <p>
            A clogged printhead is the most expensive recoverable failure in any DTF shop, and the
            recovery depends on having the maintenance supplies on hand the moment a problem surfaces.
            DTF Printer USA carries the replacement parts and consumables that keep your press alive:
          </p>
          <div className="grid sm:grid-cols-2 gap-5 my-6 not-prose">
            <ProductCard slug="replacement-3w-ink-pump" />
            <ProductCard slug="dtf-printer-set-up-service" />
          </div>
          <p>
            For shops with no in-house technician, the set-up service is the difference between a
            printer running smoothly from day one and a printer that takes weeks to dial in.
          </p>

          <h2>Same-Week Shipping to Stafford and the Houston Metro</h2>
          <p>
            DTF Printer USA fulfillment ships supplies on standard freight to Stafford-area addresses
            with direct delivery. The Fort Bend County and southwest Houston metro is one of the most
            efficient delivery corridors in our coverage area: Stafford, Sugar Land, Missouri City,
            Pearland, and the Highway 59 / I-69 corridor between them all see same-week shipping
            turnaround on the full supplies catalog.
          </p>
          <p>
            For shops in immediate need of a replenishment,{" "}
            <A href="https://dtfprinterusa.com/pages/contact-us">contact the DTF Printer USA team</A>{" "}
            for expedited shipping options on critical supply orders.
          </p>

          <h2>Beyond Supplies: DTF Printers, Heat Presses, and Setup Service</h2>
          <p>
            The DTF supplies catalog is the recurring-purchase side of any DTF shop&apos;s operating
            budget. For the upstream equipment that consumes those supplies, the{" "}
            <Link href="/dtf-printers-heat-presses-near-stafford-tx">DTF printers and heat presses landing page for the Stafford area</Link>{" "}
            covers the high-ticket catalog.
          </p>

          <h2>Why Buy From DTF Printer USA</h2>
          <p>
            DTF Printer USA carries the same consumables and equipment that mid-range and commercial
            DTF shops across the Houston metro rely on for daily production. Free shipping kicks in on
            orders over a threshold posted in each product listing. Setup support is available for
            buyers in the Stafford and Houston metro. Customer service is responsive to direct contact
            via the{" "}
            <A href="https://dtfprinterusa.com/pages/contact-us">contact page</A>.
          </p>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-6 lg:self-start space-y-6">
          <div className="bg-navy text-white rounded-lg p-5">
            <div className="text-xs uppercase tracking-widest text-accent-orange font-bold mb-2">Companion Page</div>
            <Link href="/dtf-printers-heat-presses-near-stafford-tx" className="text-white font-bold text-lg hover:no-underline">
              DTF Printers + Heat Presses Near Stafford →
            </Link>
            <p className="text-white/80 text-sm mt-2">
              High-ticket catalog: 12-inch to 24-inch DTF printers, hydraulic heat presses, UV DTF, embroidery.
            </p>
          </div>
          <div className="bg-white border border-surface-border rounded-lg p-5">
            <div className="text-xs uppercase tracking-widest text-navy font-bold mb-2">Quick Links</div>
            <ul className="space-y-2 text-sm">
              <li><a href="https://dtfprinterusa.com/collections/dtf-inks-t-shirts-hats" target="_blank" rel="noreferrer">DTF Inks</a></li>
              <li><a href="https://dtfprinterusa.com/collections/dtf-film" target="_blank" rel="noreferrer">DTF Film</a></li>
              <li><a href="https://dtfprinterusa.com/collections/dtf-transfer-powders" target="_blank" rel="noreferrer">Transfer Powders</a></li>
              <li><a href="https://dtfprinterusa.com/collections/dtf-printing-supplies-sale" target="_blank" rel="noreferrer">All Supplies</a></li>
              <li><a href="https://dtfprinterusa.com/pages/contact-us" target="_blank" rel="noreferrer">Contact Sales</a></li>
            </ul>
          </div>
        </aside>
      </article>
    </>
  );
}
