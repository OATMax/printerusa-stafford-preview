import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DTF Printer USA — Stafford TX Landing Pages",
  description: "Preview of two cross-linked local landing pages drafted for DTF Printer USA, targeting Stafford TX and the southwest Houston metro.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink-900 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
