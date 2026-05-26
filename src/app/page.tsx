import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-container mx-auto px-6 py-12">
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-4 leading-tight">
          DTF Printer USA — Stafford TX Landing Pages
        </h1>
        <p className="text-body text-lg leading-relaxed">
          Two cross-linked local landing pages drafted for the DTF Printer USA site,
          targeting Stafford TX and the southwest Houston metro
          (Fort Bend County, Sugar Land, Missouri City, Pearland).
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6 mt-10">
        <Link
          href="/dtf-supplies-near-stafford-tx"
          className="block p-6 rounded-lg border border-surface-border hover:border-navy hover:shadow-lg transition no-underline bg-white"
        >
          <div className="text-xs uppercase tracking-wider text-accent-orange font-bold mb-2">Supplies</div>
          <div className="text-xl font-bold text-navy mb-2">DTF Supplies Near Stafford, TX</div>
          <div className="text-sm text-body">Inks, films, transfer powders, replacement parts. Lower-ticket recurring consumables.</div>
        </Link>
        <Link
          href="/dtf-printers-heat-presses-near-stafford-tx"
          className="block p-6 rounded-lg border border-surface-border hover:border-navy hover:shadow-lg transition no-underline bg-white"
        >
          <div className="text-xs uppercase tracking-wider text-accent-orange font-bold mb-2">Equipment</div>
          <div className="text-xl font-bold text-navy mb-2">DTF Printers + Heat Presses Near Stafford, TX</div>
          <div className="text-sm text-body">12-inch and 24-inch DTF printers, hydraulic heat presses, UV DTF, embroidery, sublimation.</div>
        </Link>
      </div>
    </div>
  );
}
