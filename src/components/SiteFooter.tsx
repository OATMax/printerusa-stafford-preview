// Dark footer matching the reference design.
export default function SiteFooter() {
  return (
    <footer className="bg-ink-950 border-t border-ink-700 text-white/80">
      <div className="max-w-container mx-auto px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <img
            src="https://dtfprinterusa.com/cdn/shop/files/DTFPRINTERUSA_Logo_cut.png?v=1771210229&width=300"
            alt="DTF Printer USA"
            className="h-12 mb-4 w-auto"
          />
          <p className="text-white/60 leading-relaxed">
            Commercial DTF printers, heat presses, supplies, and embroidery machines.
            Texas fulfillment, US-based support, same-day dispatch.
          </p>
        </div>

        <div>
          <div className="font-extrabold uppercase tracking-wider mb-3 text-white">Equipment</div>
          <ul className="space-y-1.5">
            <li><a className="hover:text-white" href="https://dtfprinterusa.com/collections/dtf-printer">DTF Printers</a></li>
            <li><a className="hover:text-white" href="https://dtfprinterusa.com/collections/heat-presses">Heat Presses</a></li>
            <li><a className="hover:text-white" href="https://dtfprinterusa.com/collections/embroidery-machines">Embroidery</a></li>
            <li><a className="hover:text-white" href="https://dtfprinterusa.com/products/dtf-printer-set-up-service">Setup Service</a></li>
          </ul>
        </div>

        <div>
          <div className="font-extrabold uppercase tracking-wider mb-3 text-white">Supplies</div>
          <ul className="space-y-1.5">
            <li><a className="hover:text-white" href="https://dtfprinterusa.com/collections/dtf-inks-t-shirts-hats">DTF Inks</a></li>
            <li><a className="hover:text-white" href="https://dtfprinterusa.com/collections/dtf-film">DTF Film</a></li>
            <li><a className="hover:text-white" href="https://dtfprinterusa.com/collections/dtf-transfer-powders">Transfer Powders</a></li>
            <li><a className="hover:text-white" href="https://dtfprinterusa.com/collections/dtf-printing-supplies-sale">All Supplies</a></li>
          </ul>
        </div>

        <div>
          <div className="font-extrabold uppercase tracking-wider mb-3 text-white">Local Landings</div>
          <ul className="space-y-1.5">
            <li><a className="hover:text-white" href="/dtf-supplies-near-stafford-tx">DTF Supplies — Stafford TX</a></li>
            <li><a className="hover:text-white" href="/dtf-printers-heat-presses-near-stafford-tx">DTF Printers + Presses — Stafford TX</a></li>
            <li><a className="hover:text-white" href="https://dtfprinterusa.com/pages/contact-us">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-700">
        <div className="max-w-container mx-auto px-6 py-3 text-xs text-white/40 flex flex-wrap items-center justify-between gap-2">
          <span>© DTF Printer USA. All rights reserved.</span>
          <span>Ships from Texas · Free shipping $500+</span>
        </div>
      </div>
    </footer>
  );
}
