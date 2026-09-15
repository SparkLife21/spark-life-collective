import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Outfit, Playfair_Display, Yellowtail } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getSiteUrl, site } from "@/lib/site";
import "./globals.css";

const holla = Yellowtail({
  variable: "--font-holla",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const condensed = Barlow_Condensed({
  variable: "--font-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const agrandir = Outfit({
  variable: "--font-agrandir",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description:
    "Spark Life Collective is a 501(c)(3) nonprofit offering Christ-centered experiences, resources, and training for individuals, churches, and organizations.",
  applicationName: site.name,
  keywords: [
    "Spark Life Collective",
    "nonprofit ministry",
    "virtual retreat",
    "Root & Rise",
    "Christian retreat",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#EEEEE9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${holla.variable} ${display.variable} ${condensed.variable} ${agrandir.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-navy">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
