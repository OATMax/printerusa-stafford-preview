// Mirrors the real DTF Printer USA footer pattern: navy background, brand columns, trust strip.
export default function SiteFooter() {
  return (
    <footer className="bg-navy text-white mt-16">
      <div className="max-w-container mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <img
            src="https://dtfprinterusa.com/cdn/shop/files/DTFPRINTERUSA_Logo_cut.png?v=1771210229&width=300"
            alt="DTF Printer USA"
            className="h-14 mb-4 w-auto"
          />
          <p className="text-white/80 leading-relaxed">
            Commercial DTF printers, heat presses, supplies, and embroidery machines.
            Direct shipping nationwide with installation support.
          </p>
        </div>

        <div>
          <div className="font-bold uppercase tracking-wider mb-3 text-white">Equipment</div>
          <ul className="space-y-2 text-white/80">
            <li><a className="hover:text-white" href="https://dtfprinterusa.com/collections/dtf-printer">DTF Printers</a></li>
            <li><a className="hover:text-white" href="https://dtfprinterusa.com/collections/heat-presses">Heat Presses</a></li>
            <li><a className="hover:text-white" href="https://dtfprinterusa.com/collections/embroidery-machines">Embroidery Machines</a></li>
            <li><a className="hover:text-white" href="https://dtfprinterusa.com/products/dtf-printer-set-up-service">Setup Service</a></li>
          </ul>
        </div>

        <div>
          <div className="font-bold uppercase tracking-wider mb-3 text-white">Supplies</div>
          <ul className="space-y-2 text-white/80">
            <li><a className="hover:text-white" href="https://dtfprinterusa.com/collections/dtf-inks-t-shirts-hats">DTF Inks</a></li>
            <li><a className="hover:text-white" href="https://dtfprinterusa.com/collections/dtf-film">DTF Film</a></li>
            <li><a className="hover:text-white" href="https://dtfprinterusa.com/collections/dtf-transfer-powders">Transfer Powders</a></li>
            <li><a className="hover:text-white" href="https://dtfprinterusa.com/collections/dtf-printing-supplies-sale">All Supplies</a></li>
          </ul>
        </div>

        <div>
          <div className="font-bold uppercase tracking-wider mb-3 text-white">Local Landings</div>
          <ul className="space-y-2 text-white/80">
            <li><a className="hover:text-white" href="/dtf-supplies-near-stafford-tx">DTF Supplies near Stafford TX</a></li>
            <li><a className="hover:text-white" href="/dtf-printers-heat-presses-near-stafford-tx">DTF Printers + Heat Presses near Stafford TX</a></li>
          </ul>
          <div className="font-bold uppercase tracking-wider mb-3 text-white mt-6">Help</div>
          <ul className="space-y-2 text-white/80">
            <li><a className="hover:text-white" href="https://dtfprinterusa.com/pages/contact-us">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="max-w-container mx-auto px-6 py-4 text-xs text-white/60 flex flex-wrap items-center justify-between gap-2">
          <span>© DTF Printer USA. All rights reserved.</span>
          <span>Free shipping over $500 · Houston metro direct delivery</span>
        </div>
      </div>
    </footer>
  );
}
