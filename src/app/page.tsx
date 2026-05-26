import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="max-w-container mx-auto px-6 py-16">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-widest accent-orange font-extrabold mb-4">
            ★ Stafford TX · Houston Metro
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-[1.05] mb-6 text-white">
            DTF Printer USA · Stafford TX Landing Pages
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Two cross-linked Stafford-area landing pages for DTF Printer USA. One for the
            recurring-supply buyer, one for the high-ticket equipment buyer.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          <Link
            href="/dtf-supplies-near-stafford-tx"
            className="block p-6 rounded-xl bg-ink-800 border border-ink-700 hover:border-accent-red transition no-underline"
          >
            <div className="text-xs uppercase tracking-wider accent-yellow font-extrabold mb-3">Supplies Landing</div>
            <div className="text-2xl font-extrabold text-white mb-3">DTF Supplies Near You in Stafford, TX</div>
            <div className="text-sm text-white/65">Inks, films, transfer powders, replacement parts. Recurring consumables for working DTF shops.</div>
            <div className="mt-4 inline-flex items-center gap-2 text-accent-red font-extrabold uppercase tracking-wider text-xs">View Page →</div>
          </Link>
          <Link
            href="/dtf-printers-heat-presses-near-stafford-tx"
            className="block p-6 rounded-xl bg-ink-800 border border-ink-700 hover:border-accent-red transition no-underline"
          >
            <div className="text-xs uppercase tracking-wider accent-yellow font-extrabold mb-3">Equipment Landing</div>
            <div className="text-2xl font-extrabold text-white mb-3">DTF Printers + Heat Presses in Stafford, TX</div>
            <div className="text-sm text-white/65">12-inch to 24-inch DTF printers, hydraulic heat presses, UV DTF, embroidery, sublimation.</div>
            <div className="mt-4 inline-flex items-center gap-2 text-accent-red font-extrabold uppercase tracking-wider text-xs">View Page →</div>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
