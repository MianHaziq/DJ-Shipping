import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import { company } from "@/lib/data";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.djshipping.net"),
  title: {
    default: "DJ Shipping — Premier Freight Forwarding & Customs Clearance",
    template: "%s | DJ Shipping",
  },
  description:
    "DJ Shipping: 25 years of end-to-end supply chain excellence. Licensed customs clearance, global air & ocean freight forwarding, and land transportation across Pakistan and worldwide.",
  keywords: [
    "freight forwarding Pakistan",
    "customs clearance Lahore",
    "air freight",
    "ocean freight",
    "logistics Pakistan",
    "DJ Shipping",
  ],
  openGraph: {
    title: "DJ Shipping — Premier Freight Forwarding & Customs Clearance",
    description:
      "25 years of licensed customs clearance and global freight forwarding across Pakistan and worldwide.",
    type: "website",
    siteName: company.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="min-h-dvh bg-paper text-ink antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-200 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  );
}
