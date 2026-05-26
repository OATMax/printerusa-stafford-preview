import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import Faq from "@/components/Faq";
import { PRODUCTS, formatPrice } from "@/products";

export const metadata: Metadata = {
  title: "DTF Supplies Near You in Stafford, TX | Ink, Film, Powder | DTF Printer USA",
  description: "DTF inks, transfer films, adhesive powder, and cleaning supplies shipped fast to Stafford TX, Sugar Land, Missouri City, and the Houston metro. Production-ready consumables from DTF Printer USA.",
};

const inkP = PRODUCTS["dtf-white-ink-1-liter"];
const paperP = PRODUCTS["a4-dtf-paper"];
const liqP = PRODUCTS["dtf-moisturizing-liquid"];
const pumpP = PRODUCTS["replacement-3w-ink-pump"];
const cheapestPrinter = PRODUCTS["12-inch-dtf-printer-dual-epson-i1600-printheads"];
const cheapestPress = PRODUCTS["24x32-hydraulic-heat-press-machine-large-format"];
const proPrinter = PRODUCTS["24-inch-dtf-printer-4-epson-i3200-printheads"];
const industrialPress = PRODUCTS["20x24-hydraulic-heat-press-6-platens-industrial-use"];

export default function Page() {
  return (
    <>
      <SiteHeader ctaLabel="Shop Supplies" ctaHref="https://dtfprinterusa.com/collections/dtf-printing-supplies-sale" />

      {/* HERO */}
      <section className="bg-ink-900 border-b border-ink-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-900 to-ink-800 opacity-80" aria-hidden />
        <div className="max-w-container mx-auto px-6 py-14 sm:py-20 grid lg:grid-cols-2 gap-10 items-center relative">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] accent-yellow font-extrabold mb-4 flex items-center gap-2">
              ★ Stafford, TX <span className="text-white/30">·</span> Houston Metro
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-[1.02] mb-6 text-white">
              DTF Supplies <span className="accent-yellow">Near You</span> in <span className="accent-orange">Stafford, TX</span>
            </h1>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              Premium DTF inks, transfer films, and adhesive powder for Stafford print shops,
              Houston-area decorators, and Fort Bend County t-shirt businesses. Epson i3200
              and i1600 compatible. Shipped fast from US warehouses so your production never
              waits on out-of-state suppliers.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="https://dtfprinterusa.com/collections/dtf-printing-supplies-sale"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-redHover text-white font-extrabold uppercase tracking-wider text-sm px-7 py-4 rounded transition"
              >
                Shop DTF Supplies <span aria-hidden>→</span>
              </a>
              <Link
                href="/dtf-printers-heat-presses-near-stafford-tx"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-extrabold uppercase tracking-wider text-sm px-7 py-4 rounded transition no-underline"
              >
                Need a Printer or Heat Press?
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-3 max-w-md">
              <Stat value={formatPrice(inkP.price)} label="Ink Starting / Liter" />
              <Stat value={formatPrice(paperP.price)} label="DTF Paper Starting" />
              <Stat value={formatPrice(liqP.price)} label="Maintenance Starting" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-3 -right-3 z-10 bg-accent-yellow text-ink-900 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-xl">★ Best Value</div>
            <div className="bg-white rounded-2xl shadow-2xl shadow-black/40 p-6">
              <img
                src={inkP.image}
                alt="DTF inks and supplies"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TOP DTF SUPPLIES */}
      <section className="border-b border-ink-700">
        <div className="max-w-container mx-auto px-6 py-16">
          <div className="max-w-2xl mb-10">
            <div className="text-xs uppercase tracking-[0.2em] accent-orange font-extrabold mb-3">★ Stafford's Top DTF Supplies</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white mb-3">
              Everything Your <span className="accent-yellow">Stafford Shop</span> Needs to Print.
            </h2>
            <p className="text-white/65 text-base leading-relaxed">
              Real product. Real specs. Real fast shipping to Stafford, Sugar Land, Missouri City,
              and the Houston metro.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <ProductCard slug="dtf-white-ink-1-liter" badge="Top Seller" cta="Order Ink" blurb="1-liter DTF white-ink bottle. Epson i3200 + i1600 compatible. Calibrated for production runs." />
            <ProductCard slug="a4-dtf-paper" badge="Test + Sample" cta="Order Paper" blurb="A4 DTF paper for sample runs, color tests, and small-format jobs before committing to roll orders." />
            <ProductCard slug="dtf-moisturizing-liquid" badge="Capping Station" cta="Order Solution" blurb="Capping-station hydration to keep your printhead alive between print runs. Mandatory in any maintenance routine." />
            <ProductCard slug="replacement-3w-ink-pump" badge="Service Part" cta="Order Pump" blurb="Replacement 3W ink pump. The part that fails first in most ink-feed problems. Stock one on the shelf." />
          </div>
        </div>
      </section>

      {/* CMYK COLOR SWATCH ROW */}
      <section className="border-b border-ink-700 bg-ink-950">
        <div className="max-w-container mx-auto px-6 py-16">
          <div className="max-w-2xl mb-10">
            <div className="text-xs uppercase tracking-[0.2em] accent-orange font-extrabold mb-3">★ DTF Ink Full Set</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white mb-3">
              Single-Color Ink & <span className="accent-yellow">Full Sets</span>.
            </h2>
            <p className="text-white/65 text-base leading-relaxed">
              Replace a single color or stock the full set. Every color uses the same DTF
              formulation, calibrated for Epson i3200 and i1600 printheads.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { code: "W", name: "White Ink", bg: "bg-swatch-w", color: "text-ink-900" },
              { code: "C", name: "Cyan Ink", bg: "bg-swatch-c", color: "text-white" },
              { code: "M", name: "Magenta Ink", bg: "bg-swatch-m", color: "text-white" },
              { code: "Y", name: "Yellow Ink", bg: "bg-swatch-y", color: "text-ink-900" },
              { code: "K", name: "Black Ink", bg: "bg-swatch-k", color: "text-white" },
            ].map((s) => (
              <a
                key={s.code}
                href="https://dtfprinterusa.com/collections/dtf-inks-t-shirts-hats"
                target="_blank"
                rel="noreferrer"
                className={`group ${s.bg} ${s.color} rounded-xl p-5 flex flex-col items-start justify-between aspect-[5/6] no-underline hover:scale-[1.02] transition border border-white/10 shadow-lg`}
              >
                <div className="text-5xl font-extrabold leading-none">{s.code}</div>
                <div>
                  <div className="text-sm font-extrabold uppercase tracking-wider">{s.name}</div>
                  <div className="text-xs font-bold opacity-70 mt-1">From {formatPrice(inkP.price)}</div>
                  <div className="mt-2 text-[10px] uppercase tracking-wider font-bold opacity-80 group-hover:opacity-100">Order →</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-b border-ink-700">
        <div className="max-w-container mx-auto px-6 py-16">
          <div className="max-w-2xl mb-10">
            <div className="text-xs uppercase tracking-[0.2em] accent-orange font-extrabold mb-3">★ Why Stafford Shops Buy From Us</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white mb-3">
              Real Specs. <span className="accent-yellow">Fast US Shipping.</span> No Surprises.
            </h2>
            <p className="text-white/65 text-base leading-relaxed">
              Stafford print shops, Houston decorators, and Fort Bend County t-shirt businesses
              use DTF Printer USA as their consumables supplier because the supply chain does not
              stop when you need to print today.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Feature title="Ships From US Warehouses" body="Inks, films, and powders ship on standard freight. Most Stafford 77477 / 77497 orders arrive within one to three business days." />
            <Feature title="Epson i3200 + i1600 Spec" body="Ink chemistry is calibrated for the i3200 and i1600 printhead platforms most commercial DTF shops actually run." />
            <Feature title="Real Production Volume" body="The same consumables Houston metro mid-tier shops burn through on daily production runs. Not hobbyist quantities." />
            <Feature title="Texas-Local Fulfillment" body="No waiting on out-of-state suppliers when your press is down. Stock the buffer and the buffer ships fast." />
          </div>
        </div>
      </section>

      {/* CROSSLINK TO PRINTERS PAGE (RED) */}
      <section className="bg-accent-red text-white">
        <div className="max-w-container mx-auto px-6 py-14 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-extrabold mb-3 opacity-80">★ Ready to Upgrade Your Stafford Shop?</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-3">
              DTF Printers & Heat Presses for Stafford, TX
            </h2>
            <p className="text-white/90 max-w-2xl leading-relaxed text-base">
              Commercial DTF printers from {formatPrice(cheapestPrinter.price)}. Hydraulic heat
              presses from {formatPrice(cheapestPress.price)}. Production-grade equipment with the
              same fast Texas shipping as our supplies. Whether you are starting a new Stafford
              print shop or scaling a Houston-area apparel brand, we have the gear.
            </p>
          </div>
          <Link
            href="/dtf-printers-heat-presses-near-stafford-tx"
            className="inline-flex items-center gap-2 bg-white text-accent-red font-extrabold uppercase tracking-wider text-sm px-7 py-4 rounded hover:bg-white/90 transition no-underline whitespace-nowrap"
          >
            Shop Printers & Presses <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="bg-accent-redHover">
          <div className="max-w-container mx-auto px-6 py-4 grid sm:grid-cols-4 gap-3 text-xs sm:text-sm font-bold">
            <a href="https://dtfprinterusa.com/products/16-5-inch-all-one-dtf-printer-powder-shaker" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 rounded p-3 no-underline">
              <span className="opacity-70 uppercase tracking-wider text-[10px] block mb-1">★ Entry Level</span>
              16.5&quot; All-in-One Printer
              <span className="block mt-1 text-accent-yellow font-extrabold">From {formatPrice(PRODUCTS["16-5-inch-all-one-dtf-printer-powder-shaker"].price)}</span>
            </a>
            <a href={`https://dtfprinterusa.com/products/24-inch-dtf-printer-4-epson-i3200-printheads`} target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 rounded p-3 no-underline">
              <span className="opacity-70 uppercase tracking-wider text-[10px] block mb-1">★ Pro Production</span>
              24&quot; 4-Head Printer
              <span className="block mt-1 text-accent-yellow font-extrabold">From {formatPrice(proPrinter.price)}</span>
            </a>
            <a href="https://dtfprinterusa.com/products/24x32-hydraulic-heat-press-machine-large-format" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 rounded p-3 no-underline">
              <span className="opacity-70 uppercase tracking-wider text-[10px] block mb-1">★ Heat Press</span>
              24×32 Hydraulic
              <span className="block mt-1 text-accent-yellow font-extrabold">{formatPrice(cheapestPress.price)}</span>
            </a>
            <a href="https://dtfprinterusa.com/products/20x24-hydraulic-heat-press-6-platens-industrial-use" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 rounded p-3 no-underline">
              <span className="opacity-70 uppercase tracking-wider text-[10px] block mb-1">★ Industrial</span>
              20×24 6-Platen Press
              <span className="block mt-1 text-accent-yellow font-extrabold">{formatPrice(industrialPress.price)}</span>
            </a>
          </div>
        </div>
      </section>

      {/* AREA SERVED */}
      <section className="border-b border-ink-700">
        <div className="max-w-container mx-auto px-6 py-16 grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] accent-orange font-extrabold mb-3">★ Serving Stafford & Greater Houston</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white mb-4">
              From <span className="accent-yellow">Beltway 8</span> to Sugar Land, We Ship.
            </h2>
            <p className="text-white/70 leading-relaxed">
              DTF Printer USA ships DTF inks, films, powders, and cleaning supplies to Stafford
              and the entire Houston metro. From the Beltway 8 industrial corridor to Sugar Land,
              Missouri City, Pearland, and the Highway 59 / I-69 freight route between them, your
              Stafford print shop, t-shirt brand, or apparel decorator gets fast US fulfillment
              without sourcing overseas.
            </p>
          </div>
          <div className="bg-ink-800 border border-ink-700 rounded-xl p-6">
            <div className="text-xs uppercase tracking-wider accent-yellow font-extrabold mb-4">Cities We Ship To</div>
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
            <div className="text-xs uppercase tracking-[0.2em] accent-orange font-extrabold mb-3">★ DTF Supplies FAQ</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white mb-3">
              Stafford Print Shop <span className="accent-yellow">Questions, Answered.</span>
            </h2>
          </div>
          <Faq items={[
            {
              q: "Where can I buy DTF supplies near Stafford, TX?",
              a: "DTF Printer USA ships DTF inks, transfer films, adhesive powder, and cleaning supplies to Stafford and the entire Houston metro from US warehouses. Most Stafford 77477 and 77497 addresses receive orders within one to three business days on standard freight.",
            },
            {
              q: "What DTF supplies do you carry?",
              a: "The full range of working-shop consumables: DTF white ink and CMYK ink in 1-liter bottles, A4 DTF paper for sample runs, DTF transfer powders across grain sizes, capping-station moisturizing liquid, replacement ink pumps, and the broader supplies sale catalog for parts and accessories.",
            },
            {
              q: "Are your inks compatible with my Epson i3200 or i1600 printer?",
              a: "Yes. DTF Printer USA ink chemistry is calibrated for both the Epson i3200 and i1600 printhead platforms. These are the same printheads most commercial DTF shops in the Houston metro run, so the ink set fits the equipment without recalibration.",
            },
            {
              q: "How fast can I get DTF supplies to Stafford?",
              a: "Standard freight to Stafford 77477 and 77497 typically arrives within one to three business days from order. For shops in immediate need of a replenishment, contact the DTF Printer USA team for expedited shipping options.",
            },
            {
              q: "Do you offer free shipping?",
              a: "Free shipping kicks in on orders over $500 across the supplies catalog. The exact threshold is posted in each product listing.",
            },
          ]} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-accent-red text-white">
        <div className="max-w-container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">
            Stock Your <span className="accent-yellow">Stafford Shop</span> with DTF Supplies Today.
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed mb-7">
            DTF white ink and CMYK. A4 DTF paper. Transfer powder. Capping-station maintenance.
            Order today and ship from Texas. Free shipping on orders $500+.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://dtfprinterusa.com/collections/dtf-printing-supplies-sale"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-accent-red font-extrabold uppercase tracking-wider text-sm px-7 py-4 rounded hover:bg-white/90 transition no-underline"
            >
              Shop All Supplies <span aria-hidden>→</span>
            </a>
            <Link
              href="/dtf-printers-heat-presses-near-stafford-tx"
              className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-extrabold uppercase tracking-wider text-sm px-7 py-4 rounded transition no-underline"
            >
              See Printers & Heat Presses
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

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-ink-800 border border-ink-700 rounded-xl p-5">
      <div className="w-9 h-9 bg-accent-red rounded-md flex items-center justify-center text-white font-extrabold mb-4">★</div>
      <div className="text-white font-extrabold mb-2 text-base">{title}</div>
      <div className="text-white/65 text-sm leading-relaxed">{body}</div>
    </div>
  );
}
