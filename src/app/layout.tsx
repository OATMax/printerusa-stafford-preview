import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DTF Printer USA — Stafford TX Landing Pages Preview",
  description: "Preview of two local landing pages drafted for DTF Printer USA, targeting Stafford TX and the southwest Houston metro.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-ink-900 text-white">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-white hover:no-underline hover:text-brand-200">
              DTF Printer USA
            </Link>
            <nav className="flex flex-wrap gap-6 text-sm">
              <Link href="/dtf-supplies-near-stafford-tx" className="text-brand-100 hover:text-white hover:no-underline">
                DTF Supplies (Stafford)
              </Link>
              <Link href="/dtf-printers-heat-presses-near-stafford-tx" className="text-brand-100 hover:text-white hover:no-underline">
                DTF Printers + Heat Presses (Stafford)
              </Link>
              <a href="https://dtfprinterusa.com/" className="text-brand-100 hover:text-white hover:no-underline" target="_blank" rel="noreferrer">
                ↗ Main site
              </a>
            </nav>
          </div>
          <div className="bg-brand-700 text-brand-50 text-xs py-2">
            <div className="max-w-6xl mx-auto px-6">
              Preview only — content drafted 2026-05-26. Final pages will live on the main Shopify site.
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-ink-900 text-brand-100 mt-16">
          <div className="max-w-6xl mx-auto px-6 py-8 grid sm:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-white font-semibold mb-2">DTF Printer USA</div>
              <div className="text-ink-300">Commercial DTF printers, heat presses, supplies, and embroidery machines. Direct shipping nationwide.</div>
            </div>
            <div>
              <div className="text-white font-semibold mb-2">Local Landings</div>
              <ul className="space-y-1">
                <li><Link className="text-brand-100 hover:text-white" href="/dtf-supplies-near-stafford-tx">DTF Supplies Near Stafford TX</Link></li>
                <li><Link className="text-brand-100 hover:text-white" href="/dtf-printers-heat-presses-near-stafford-tx">DTF Printers + Heat Presses Near Stafford TX</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-white font-semibold mb-2">Main Site</div>
              <ul className="space-y-1">
                <li><a className="text-brand-100 hover:text-white" href="https://dtfprinterusa.com/collections/dtf-printer" target="_blank" rel="noreferrer">DTF Printers</a></li>
                <li><a className="text-brand-100 hover:text-white" href="https://dtfprinterusa.com/collections/heat-presses" target="_blank" rel="noreferrer">Heat Presses</a></li>
                <li><a className="text-brand-100 hover:text-white" href="https://dtfprinterusa.com/collections/dtf-printing-supplies-sale" target="_blank" rel="noreferrer">Supplies</a></li>
                <li><a className="text-brand-100 hover:text-white" href="https://dtfprinterusa.com/pages/contact-us" target="_blank" rel="noreferrer">Contact</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
