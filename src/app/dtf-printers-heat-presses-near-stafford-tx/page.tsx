import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import Faq from "@/components/Faq";
import { PRODUCTS, formatPrice } from "@/products";

export const metadata: Metadata = {
  title: "DTF Printers & Heat Presses Near You in Stafford, TX | Commercial Equipment | DTF Printer USA",
  description: "Commercial DTF printers, hydraulic heat presses, UV DTF, embroidery, and sublimation equipment for Stafford TX and the Houston metro. Production-grade machines with US-based support.",
};

const heroPrinter = PRODUCTS["24-inch-dtf-printer-4-epson-i3200-printheads"];
const cheapestPrinter = PRODUCTS["12-inch-dtf-printer-dual-epson-i1600-printheads"];
const cheapestPress = PRODUCTS["24x32-hydraulic-heat-press-machine-large-format"];
const setupSvc = PRODUCTS["dtf-printer-set-up-service"];
const inkP = PRODUCTS["dtf-white-ink-1-liter"];

export default function Page() {
  return (
    <>
      <SiteHeader ctaLabel="Shop Equipment" ctaHref="https://dtfprinterusa.com/collections/dtf-printer" />

      {/* HERO */}
      <section className="bg-ink-900 border-b border-ink-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-900 to-ink-800 opacity-80" aria-hidden />
        <div className="max-w-container mx-auto px-6 py-14 sm:py-20 grid lg:grid-cols-2 gap-10 items-center relative">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] accent-yellow font-extrabold mb-4 flex items-center gap-2">
              ★ Stafford, TX <span className="text-white/30">·</span> Houston Metro Print Equipment
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-[1.02] mb-6 text-white">
              DTF Printers & Heat Presses <span className="accent-yellow">Near You</span> in <span className="accent-orange">Stafford, TX</span>
            </h1>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              Commercial DTF printers from {formatPrice(cheapestPrinter.price)} and hydraulic
              heat presses from {formatPrice(cheapestPress.price)} for Stafford, Houston, and
              Fort Bend County print shops. Production-grade equipment with Epson i3200 printheads,
              US-based installation support, and Texas-fast shipping.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="https://dtfprinterusa.com/collections/dtf-printer"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-redHover text-white font-extrabold uppercase tracking-wider text-sm px-7 py-4 rounded transition"
              >
                Shop DTF Printers <span aria-hidden>→</span>
              </a>
              <a
                href="https://dtfprinterusa.com/collections/heat-presses"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-extrabold uppercase tracking-wider text-sm px-7 py-4 rounded transition no-underline"
              >
                Shop All Presses
              </a>
            </div>
            <div className="grid grid-cols-3 gap-3 max-w-md">
              <Stat value={formatPrice(cheapestPrinter.price)} label="Printer Starting" />
              <Stat value={formatPrice(cheapestPress.price)} label="Heat Press Starting" />
              <Stat value={formatPrice(setupSvc.price)} label="Setup Service" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-3 -right-3 z-10 bg-accent-yellow text-ink-900 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-xl">★ Most Popular</div>
            <div className="bg-white rounded-2xl shadow-2xl shadow-black/40 p-6">
              <img
                src={heroPrinter.image}
                alt={heroPrinter.title}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL DTF PRINTERS */}
      <section className="border-b border-ink-700">
        <div className="max-w-container mx-auto px-6 py-16">
          <div className="max-w-2xl mb-10">
            <div className="text-xs uppercase tracking-[0.2em] accent-orange font-extrabold mb-3">★ Commercial DTF Printers</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white mb-3">
              Production-Grade <span className="accent-yellow">DTF Printers</span> for Stafford Shops.
            </h2>
            <p className="text-white/65 text-base leading-relaxed">
              From 12-inch desktop platforms to 24-inch four and five-printhead commercial rigs.
              Every machine ships with Epson i3200 or i1600 printheads and DTF Printer USA setup
              support available.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <ProductCard slug="12-inch-dtf-printer-dual-epson-i1600-printheads" badge="Entry Level" cta="Order Printer" blurb="Desktop-class 12-inch DTF with dual i1600 printheads. Home-based shops and variable-schedule operators." />
            <ProductCard slug="16-5-inch-all-one-dtf-printer-powder-shaker" badge="All-in-One" cta="Order Printer" blurb="16.5-inch integrated printer + powder shaker. No separate powdering station. Easiest first DTF rig." />
            <ProductCard slug="24-inch-dtf-printer-4-epson-i3200-printheads" badge="Workhorse" cta="Order Printer" blurb="24-inch commercial DTF with 4 Epson i3200 printheads. The production workhorse for mid-tier shops." />
            <ProductCard slug="24-inch-dtf-printer-5-epson-i3200-printheads" badge="High Volume" cta="Order Printer" blurb="24-inch with 5 i3200 printheads. Higher-throughput configuration for upper-end small-business volume." />
          </div>
        </div>
      </section>

      {/* HEAT PRESSES */}
      <section className="border-b border-ink-700 bg-ink-950">
        <div className="max-w-container mx-auto px-6 py-16">
          <div className="max-w-2xl mb-10">
            <div className="text-xs uppercase tracking-[0.2em] accent-orange font-extrabold mb-3">★ Hydraulic Heat Presses</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white mb-3">
              Hydraulic <span className="accent-yellow">Heat Presses</span> for Large-Format Production.
            </h2>
            <p className="text-white/65 text-base leading-relaxed">
              Consistent pressure across the entire platen, which manual clamshells cannot match
              on larger surface areas. Built for full-back prints, hoodie kangaroo pockets, and
              bulk-order bar uniform production.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <ProductCard slug="24x32-hydraulic-heat-press-machine-large-format" badge="Large Format" cta="Order Press" blurb="24×32 hydraulic heat press. Largest platen in the catalog, full-back prints, hoodie pockets, bulk-order shirt sets." />
            <ProductCard slug="20x24-hydraulic-heat-press-6-platens-industrial-use" badge="6 Platens" cta="Order Press" blurb="20×24 with six platens for parallel pressing. The right machine for shops running high-volume order cycles." />
          </div>
        </div>
      </section>

      {/* UV DTF */}
      <section className="border-b border-ink-700">
        <div className="max-w-container mx-auto px-6 py-16">
          <div className="max-w-2xl mb-10">
            <div className="text-xs uppercase tracking-[0.2em] accent-orange font-extrabold mb-3">★ UV DTF Equipment</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white mb-3">
              UV DTF <span className="accent-yellow">Hard-Surface</span> Printers.
            </h2>
            <p className="text-white/65 text-base leading-relaxed">
              For shops expanding into mugs, tumblers, phone cases, and branded merchandise. UV
              DTF opens applications standard DTF cannot serve.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <ProductCard slug="40x30cm-uv-flatbed-printer-dual-epson-i1600-printheads" cta="Order Printer" blurb="40×30 cm UV flatbed with dual i1600 printheads. Entry to mid-tier UV flatbed for hard-surface applications." />
            <ProductCard slug="60x90cm-uv-flatbed-printer-3-epson-i3200-printheads" badge="Large Bed" cta="Order Printer" blurb="60×90 cm UV flatbed with 3 i3200 printheads. Larger format for bulk hard-surface production." />
            <ProductCard slug="uv-cylindrical-printer-4-ricoh-gh220-printheads-bottles-tubes" badge="Cylindrical" cta="Order Printer" blurb="UV cylindrical printer with 4 Ricoh GH220 printheads. Bottles, tumblers, and cylindrical-surface printing." />
            <ProductCard slug="12-inch-uv-embossing-printer-epson-dx7-printhead-embroidery-effect" badge="Embossing" cta="Order Printer" blurb="12-inch UV embossing for textured-finish output that mimics embroidery without the stitch time." />
          </div>
        </div>
      </section>

      {/* EMBROIDERY + SUBLIMATION */}
      <section className="border-b border-ink-700 bg-ink-950">
        <div className="max-w-container mx-auto px-6 py-16">
          <div className="max-w-2xl mb-10">
            <div className="text-xs uppercase tracking-[0.2em] accent-orange font-extrabold mb-3">★ Embroidery + Sublimation</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white mb-3">
              Multi-Method <span className="accent-yellow">Shop Equipment</span>.
            </h2>
            <p className="text-white/65 text-base leading-relaxed">
              For mid-tier shops running embroidery and sublimation alongside DTF, the commercial
              configurations below complement the DTF lineup.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <ProductCard slug="single-head-15-needle-embroidery-machine-cap-support" cta="Order Machine" blurb="Single-head 15-needle commercial embroidery with cap support. Entry-level commercial embroidery." />
            <ProductCard slug="4-head-15-needle-commercial-embroidery-machine" cta="Order Machine" blurb="4-head 15-needle commercial embroidery. Multi-head parallel production for growing shops." />
            <ProductCard slug="6-head-15-needle-industrial-embroidery-machine" badge="Industrial" cta="Order Machine" blurb="6-head 15-needle industrial embroidery. High-volume configuration for production-floor scale." />
            <ProductCard slug="75-inch-sublimation-printer-4-epson-i3200-printheads" badge="Wide Format" cta="Order Printer" blurb="75-inch sublimation with 4 i3200 printheads. Wide-format sublimation for fabric-roll runs and full garments." />
          </div>
        </div>
      </section>

      {/* SETUP SERVICE CALLOUT */}
      <section className="border-b border-ink-700">
        <div className="max-w-container mx-auto px-6 py-16 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] accent-orange font-extrabold mb-3">★ Setup Service for Stafford Buyers</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white mb-3">
              Skip the <span className="accent-yellow">Calibration Headache</span>.
            </h2>
            <p className="text-white/70 leading-relaxed text-base max-w-2xl">
              For Stafford and Houston-area buyers committing to a new commercial DTF rig,
              professional installation cuts time-to-first-production from weeks to days. Setup
              service covers calibration, RIP software configuration, and initial print-testing
              on your installed unit.
            </p>
          </div>
          <a
            href={`https://dtfprinterusa.com/products/dtf-printer-set-up-service`}
            target="_blank"
            rel="noreferrer"
            className="bg-ink-800 border border-ink-700 hover:border-accent-red rounded-xl p-5 flex flex-col gap-1.5 no-underline transition group min-w-[260px]"
          >
            <div className="text-[10px] uppercase tracking-wider accent-yellow font-extrabold">★ Recommended</div>
            <div className="text-white font-extrabold text-base">DTF Printer Set-Up Service</div>
            <div className="text-accent-yellow text-2xl font-extrabold">{formatPrice(setupSvc.price)}</div>
            <div className="mt-2 inline-flex items-center justify-center gap-1.5 bg-accent-red group-hover:bg-accent-redHover text-white text-xs font-extrabold uppercase tracking-wider px-4 py-2.5 rounded transition">
              Add Setup <span aria-hidden>→</span>
            </div>
          </a>
        </div>
      </section>

      {/* CROSSLINK TO SUPPLIES (RED) */}
      <section className="bg-accent-red text-white">
        <div className="max-w-container mx-auto px-6 py-14 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-extrabold mb-3 opacity-80">★ Don't Forget the Consumables</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-3">
              DTF Supplies for Your New Stafford Press
            </h2>
            <p className="text-white/90 max-w-2xl leading-relaxed text-base">
              A new DTF rig with the wrong supplies produces failed prints. Order the equipment
              and the matching starter-kit supplies together. White ink from {formatPrice(inkP.price)}.
              Films, transfer powders, capping-station moisturizer, replacement parts.
            </p>
          </div>
          <Link
            href="/dtf-supplies-near-stafford-tx"
            className="inline-flex items-center gap-2 bg-white text-accent-red font-extrabold uppercase tracking-wider text-sm px-7 py-4 rounded hover:bg-white/90 transition no-underline whitespace-nowrap"
          >
            Shop Stafford Supplies <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* AREA SERVED */}
      <section className="border-b border-ink-700">
        <div className="max-w-container mx-auto px-6 py-16 grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] accent-orange font-extrabold mb-3">★ Serving Stafford & Greater Houston</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white mb-4">
              Commercial Equipment Direct to <span className="accent-yellow">Your Shop Floor</span>.
            </h2>
            <p className="text-white/70 leading-relaxed">
              DTF Printer USA ships commercial DTF printers, heat presses, UV DTF equipment, and
              embroidery machines directly to the Stafford and Houston metro. From the Beltway 8
              industrial corridor to Sugar Land, Missouri City, Pearland, and the Highway 59 /
              I-69 freight route between them, your new equipment ships with installation support
              available on most configurations.
            </p>
          </div>
          <div className="bg-ink-800 border border-ink-700 rounded-xl p-6">
            <div className="text-xs uppercase tracking-wider accent-yellow font-extrabold mb-4">Cities We Equip</div>
            <div className="grid grid-cols-2 gap-2 text-sm text-white/80">
              {["Stafford 77477", "Stafford 77497", "Sugar Land", "Missouri City", "Houston", "Pearland", "Richmond", "Rosenberg", "Bellaire", "Meadows Place", "Sienna", "Katy"].map((c) => (
                <div key={c} className="flex items-center gap-2"><span className="text-accent-red">✓</span> {c}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-ink-700 bg-ink-950">
        <div className="max-w-container mx-auto px-6 py-16">
          <div className="max-w-2xl mb-8">
            <div className="text-xs uppercase tracking-[0.2em] accent-orange font-extrabold mb-3">★ Equipment Buyer FAQ</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white mb-3">
              Stafford Equipment <span className="accent-yellow">Questions, Answered.</span>
            </h2>
          </div>
          <Faq items={[
            {
              q: "Where can I buy commercial DTF printers near Stafford, TX?",
              a: "DTF Printer USA ships commercial DTF printers from 12-inch desktop to 24-inch industrial configurations directly to Stafford TX and the Houston metro. Installation support is available on most configurations, and the setup service covers calibration, RIP software, and initial print-testing.",
            },
            {
              q: "What size DTF printer do I need for my Stafford shop?",
              a: "Sizing depends on your projected production volume. The 12-inch desktop platform fits home-based operations and variable-schedule shops. The 16.5-inch all-in-one removes the manual-powdering step for first-time DTF buyers. The 24-inch with 4 or 5 Epson i3200 printheads is the production workhorse for mid-tier shops scaling daily volume.",
            },
            {
              q: "Do you offer financing for commercial DTF equipment?",
              a: "Contact the DTF Printer USA team via the contact page for current financing options on commercial configurations. Setup service availability and lead times vary by configuration.",
            },
            {
              q: "What is the difference between hydraulic and clamshell heat presses?",
              a: "Hydraulic presses deliver consistent pressure across the entire platen surface, which manual clamshells cannot match on larger formats. For full-back prints, hoodie pockets, and bulk-order sets, the hydraulic configuration is the right call. For small chest-print runs, a standard clamshell works.",
            },
            {
              q: "Do you ship to Sugar Land and Missouri City?",
              a: "Yes. DTF Printer USA ships commercial equipment to Stafford, Sugar Land, Missouri City, Pearland, Richmond, Rosenberg, Bellaire, Meadows Place, Sienna, Katy, and the broader Houston metro. Standard freight applies to most configurations.",
            },
          ]} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-accent-red text-white">
        <div className="max-w-container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">
            Build Your <span className="accent-yellow">Stafford DTF Shop</span> Today.
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed mb-7">
            Commercial DTF printers. Hydraulic heat presses. UV DTF equipment. Embroidery
            machines. Shipped from Texas with US-based installation support.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://dtfprinterusa.com/collections/dtf-printer"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-accent-red font-extrabold uppercase tracking-wider text-sm px-7 py-4 rounded hover:bg-white/90 transition no-underline"
            >
              Shop All Printers <span aria-hidden>→</span>
            </a>
            <Link
              href="/dtf-supplies-near-stafford-tx"
              className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-extrabold uppercase tracking-wider text-sm px-7 py-4 rounded transition no-underline"
            >
              See Stafford Supplies
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-ink-800 border border-ink-700 rounded-lg p-3">
      <div className="text-accent-yellow font-extrabold text-xl sm:text-2xl leading-none">{value}</div>
      <div className="text-[10px] sm:text-xs text-white/55 uppercase tracking-wider mt-1.5 font-bold leading-tight">{label}</div>
    </div>
  );
}
