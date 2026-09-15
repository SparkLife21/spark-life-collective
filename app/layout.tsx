import type { Metadata, Viewport } from "next";
import { Cinzel, Outfit, Yellowtail } from "next/font/google";
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

const mango = Cinzel({
  variable: "--font-mango",
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
    "Spark Life Collective is a 501(c)(3) nonprofit ministry offering free virtual retreats, funded by donations so the content stays accessible regardless of ability to pay.",
  applicationName: site.name,
  keywords: [
    "Spark Life Collective",
    "nonprofit ministry",
    "virtual retreat",
    "Root & Rise",
    "Christian retreat",
    "free retreat",
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
  themeColor: "#023550",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${holla.variable} ${mango.variable} ${agrandir.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-navy font-sans text-paper">
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
