import Link from "next/link";
import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "DTF Printers + Heat Presses Near Stafford, TX | Commercial Equipment | DTF Printer USA",
  description: "DTF printers and heat presses for Stafford and Houston-area print shops. 12-inch to 24-inch DTF printers and large-format hydraulic heat presses. Installation support available.",
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
              DTF Printers + Heat Presses Near Stafford, TX
            </h1>
            <p className="text-white/85 text-lg leading-relaxed mb-6 max-w-xl">
              Commercial DTF printers, large-format hydraulic heat presses, UV DTF equipment, and
              embroidery machines for Stafford-area shops and the broader Houston metro. Installation
              support available on every commercial configuration.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://dtfprinterusa.com/collections/dtf-printer"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-accent-orange hover:bg-orange-600 text-white font-bold px-6 py-3 rounded transition"
              >
                Browse DTF Printers
                <span aria-hidden>→</span>
              </a>
              <Link
                href="/dtf-supplies-near-stafford-tx"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-6 py-3 rounded transition no-underline"
              >
                Need Supplies Instead?
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <img
              src="https://dtfprinterusa.com/cdn/shop/files/DTF_Printer_1.png?v=1766530913"
              alt="24-inch DTF printer"
              className="rounded-xl shadow-2xl w-full max-w-md object-contain aspect-square bg-white p-4"
            />
          </div>
        </div>
      </section>

      <article className="max-w-container mx-auto px-6 py-14 grid lg:grid-cols-[1fr_300px] gap-10">
        <div className="prose prose-lg max-w-none prose-headings:text-navy prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h3:text-xl prose-h3:font-semibold prose-a:text-navy prose-a:font-semibold prose-p:text-body">
          <p>
            DTF Printer USA equips print shops, custom-apparel operators, and small-business buyers
            across Stafford, Sugar Land, Missouri City, Pearland, and the broader Houston metro with
            the commercial DTF printers, heat presses, UV DTF equipment, and embroidery machines that
            drive a working production floor. From a 12-inch desktop entry rig to a 24-inch commercial
            configuration with four or five Epson i3200 printheads, the high-ticket catalog covers
            every operational scale.
          </p>
          <p>
            For the supplies side (inks, films, powder, accessories, replacement parts), see the{" "}
            <Link href="/dtf-supplies-near-stafford-tx">DTF supplies near Stafford</Link> landing.
          </p>

          <h2>24-Inch Commercial DTF Printers</h2>
          <p>
            The 24-inch DTF printer is the production workhorse of the catalog. Multi-printhead
            configurations driven by Epson i3200 print heads handle the high-volume daily runs that
            mid-tier and growing print shops in the Houston metro need to stay ahead of order
            pipelines.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 my-6 not-prose">
            <ProductCard slug="24-inch-dtf-printer-4-epson-i3200-printheads" badge="Workhorse" />
            <ProductCard slug="24-inch-dtf-printer-5-epson-i3200-printheads" badge="High Volume" />
          </div>

          <h2>12-Inch and 16.5-Inch DTF Printers</h2>
          <p>
            For shops with desktop space constraints or operators building a first DTF rig before
            scaling, the 12-inch and 16.5-inch platforms cover the entry to mid-range tier.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 my-6 not-prose">
            <ProductCard slug="12-inch-dtf-printer-dual-epson-i1600-printheads" />
            <ProductCard slug="16-5-inch-all-one-dtf-printer-powder-shaker" badge="All-In-One" />
          </div>
          <p>
            The 16.5-inch all-in-one is a strong fit for Stafford-area buyers transitioning from
            heat-transfer-vinyl or sublimation workflows to DTF for the first time, because the
            integrated powder shaker simplifies the operational learning curve.
          </p>

          <h2>Hydraulic Heat Presses for Large-Format Production</h2>
          <p>
            For shops pressing larger-format DTF transfers (12x16 full-front prints, oversized
            graphics, and apparel laid flat on bigger platen surfaces), the hydraulic heat press is
            the right call over a clamshell or swing-away. Hydraulic presses deliver consistent
            pressure across the entire platen, which the manual presses cannot match on larger surface
            areas.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 my-6 not-prose">
            <ProductCard slug="24x32-hydraulic-heat-press-machine-large-format" badge="Large Format" />
            <ProductCard slug="20x24-hydraulic-heat-press-6-platens-industrial-use" badge="6 Platens" />
          </div>
          <p>
            Browse the full <A href="https://dtfprinterusa.com/collections/heat-presses">heat presses collection</A>{" "}
            for additional configurations across platen size and press mechanism.
          </p>

          <h2>UV DTF Printers for Hard-Surface Specialty Work</h2>
          <p>
            For shops expanding into hard-surface custom work (mugs, tumblers, phone cases, branded
            merchandise), the UV DTF platform opens applications the standard DTF transfer cannot
            serve.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 my-6 not-prose">
            <ProductCard slug="40x30cm-uv-flatbed-printer-dual-epson-i1600-printheads" />
            <ProductCard slug="60x90cm-uv-flatbed-printer-3-epson-i3200-printheads" badge="Large Bed" />
            <ProductCard slug="uv-cylindrical-printer-4-ricoh-gh220-printheads-bottles-tubes" badge="Cylindrical" />
            <ProductCard slug="12-inch-uv-embossing-printer-epson-dx7-printhead-embroidery-effect" badge="Embossing" />
          </div>
          <p>
            For Stafford-area shops adding hard-surface custom merchandise to a primarily
            apparel-focused business, the UV DTF platform is the equipment investment that opens the
            new revenue line.
          </p>

          <h2>Embroidery Machines for Multi-Method Shops</h2>
          <p>
            For shops running embroidery alongside DTF (a common mid-tier production setup), DTF
            Printer USA carries commercial embroidery configurations:
          </p>
          <div className="grid sm:grid-cols-3 gap-5 my-6 not-prose">
            <ProductCard slug="single-head-15-needle-embroidery-machine-cap-support" />
            <ProductCard slug="4-head-15-needle-commercial-embroidery-machine" />
            <ProductCard slug="6-head-15-needle-industrial-embroidery-machine" badge="Industrial" />
          </div>
          <p>
            Browse the full <A href="https://dtfprinterusa.com/collections/embroidery-machines">embroidery machines collection</A>{" "}
            for additional configurations.
          </p>

          <h2>Sublimation Printers for Polyester-Specialty Shops</h2>
          <p>
            For shops with significant polyester garment volume, sublimation often complements DTF as
            the right method for full-polyester production runs.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 my-6 not-prose">
            <ProductCard slug="75-inch-sublimation-printer-4-epson-i3200-printheads" badge="Wide Format" />
          </div>

          <h2>DTF Printer Setup Service for Stafford Buyers</h2>
          <p>
            For Stafford and Houston-area buyers committing to a new commercial DTF rig, professional
            installation cuts the time-to-first-production from weeks to days. The setup service covers
            calibration, RIP software configuration, and initial print-testing on your installed unit.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 my-6 not-prose">
            <ProductCard slug="dtf-printer-set-up-service" badge="Recommended" />
          </div>
          <p>
            For shops without an in-house technician, the setup service is the operational decision
            that prevents the most common new-equipment failure pattern: a perfectly good printer that
            takes weeks to dial in because the initial setup was rushed.
          </p>

          <h2>Need DTF Supplies for Your New Press?</h2>
          <p>
            Every DTF printer and heat press in the catalog above consumes the supplies covered on the{" "}
            <Link href="/dtf-supplies-near-stafford-tx">DTF supplies near Stafford</Link> landing. For
            new buyers committing to a fresh production setup, plan the starting supplies kit alongside
            the equipment order. A new DTF rig with the wrong supply selection produces failed prints.
            Order the equipment and the matching starter-kit supplies together, and the new shop hits
            production-ready status in the first week instead of the fourth.
          </p>

          <h2>Buying Equipment in Stafford and the Houston Metro</h2>
          <p>
            For commercial-tier equipment buyers, the operational questions matter as much as the
            price points. Throughput, maintenance cycles, supply compatibility, and operator training
            are all part of the buying decision. The DTF Printer USA team is available via the{" "}
            <A href="https://dtfprinterusa.com/pages/contact-us">contact page</A>{" "}
            for direct conversation on specific configurations before order placement.
          </p>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-6 lg:self-start space-y-6">
          <div className="bg-navy text-white rounded-lg p-5">
            <div className="text-xs uppercase tracking-widest text-accent-orange font-bold mb-2">Companion Page</div>
            <Link href="/dtf-supplies-near-stafford-tx" className="text-white font-bold text-lg hover:no-underline">
              ← DTF Supplies Near Stafford
            </Link>
            <p className="text-white/80 text-sm mt-2">
              The recurring consumables side: inks, films, powder, replacement parts.
            </p>
          </div>
          <div className="bg-white border border-surface-border rounded-lg p-5">
            <div className="text-xs uppercase tracking-widest text-navy font-bold mb-2">Equipment Categories</div>
            <ul className="space-y-2 text-sm">
              <li><a href="https://dtfprinterusa.com/collections/dtf-printer" target="_blank" rel="noreferrer">DTF Printers</a></li>
              <li><a href="https://dtfprinterusa.com/collections/heat-presses" target="_blank" rel="noreferrer">Heat Presses</a></li>
              <li><a href="https://dtfprinterusa.com/collections/embroidery-machines" target="_blank" rel="noreferrer">Embroidery</a></li>
              <li><a href="https://dtfprinterusa.com/products/dtf-printer-set-up-service" target="_blank" rel="noreferrer">Setup Service</a></li>
              <li><a href="https://dtfprinterusa.com/pages/contact-us" target="_blank" rel="noreferrer">Contact Sales</a></li>
            </ul>
          </div>
        </aside>
      </article>
    </>
  );
}
