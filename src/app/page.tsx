import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-ink-900 mb-6">
        DTF Printer USA — Stafford TX Landing Pages
      </h1>
      <p className="text-ink-600 text-lg mb-8">
        Preview of two cross-linked local landing pages drafted for the DTF Printer USA Shopify site,
        targeting Stafford TX and the southwest Houston metro (Fort Bend County / Sugar Land / Missouri City / Pearland).
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        <Link
          href="/dtf-supplies-near-stafford-tx"
          className="block p-6 rounded-lg border border-ink-300 hover:border-brand-500 hover:shadow-md transition no-underline"
        >
          <div className="text-xs uppercase tracking-wider text-brand-600 font-semibold mb-2">Page 1</div>
          <div className="text-xl font-bold text-ink-900 mb-2">DTF Supplies Near Stafford, TX</div>
          <div className="text-sm text-ink-500">Inks, films, transfer powders, replacement parts. Lower-ticket recurring consumables.</div>
        </Link>
        <Link
          href="/dtf-printers-heat-presses-near-stafford-tx"
          className="block p-6 rounded-lg border border-ink-300 hover:border-brand-500 hover:shadow-md transition no-underline"
        >
          <div className="text-xs uppercase tracking-wider text-brand-600 font-semibold mb-2">Page 2</div>
          <div className="text-xl font-bold text-ink-900 mb-2">DTF Printers + Heat Presses Near Stafford, TX</div>
          <div className="text-sm text-ink-500">12-inch and 24-inch DTF printers, hydraulic heat presses, UV DTF, embroidery, sublimation. High-ticket equipment.</div>
        </Link>
      </div>
      <div className="mt-12 p-4 bg-brand-50 border border-brand-200 rounded text-sm text-ink-700">
        <strong>Preview note:</strong> these pages link to real products on the live DTF Printer USA Shopify site. All product URLs are verified. Content drafted 2026-05-26. Final pages will be implemented on the main site at <a href="https://dtfprinterusa.com" target="_blank" rel="noreferrer">dtfprinterusa.com</a>.
      </div>
    </div>
  );
}
