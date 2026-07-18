import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://dynah-sweet-treat.vercel.app/"
  ),
  title: "Dynah Sweet Treats | Best Smoky Jollof in FTD",
  description:
    "Home-cooked jollof, fried rice, pasta and small chops on Ifetedo Campus, UNIOSUN. Order on WhatsApp for pickup or delivery.",
  openGraph: {
    title: "Dynah Sweet Treats",
    description: "Better food, better meal — order on WhatsApp for pickup or delivery.",
    images: ["/og-image.jpg"],
    siteName: "Dynah Sweet Treats",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynah Sweet Treats",
    description: "Better food, better meal — order on WhatsApp for pickup or delivery.",
    images: ["/og-image.jpg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: "Dynah Sweet Treats",
    description:
      "Home-cooked jollof, fried rice, pasta and small chops on Ifetedo Campus, UNIOSUN. Order on WhatsApp for pickup or delivery.",
    servesCuisine: ["Nigerian", "African"],
    priceRange: "₦₦",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ifetedo Campus, UNIOSUN",
      addressLocality: "Ifetedo",
      addressRegion: "Osun State",
      addressCountry: "NG",
    },
    servesCoffee: false,
    acceptsReservations: false,
    menu: "/menu",
    image: "/og-image.jpg",
    telephone: "+2348074349520",
    hasMenu: {
      "@type": "Menu",
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Rice & Mains",
          hasMenuItem: [
            { "@type": "MenuItem", name: "Smoky Jollof Rice" },
            { "@type": "MenuItem", name: "Fried Rice" },
            { "@type": "MenuItem", name: "Pasta" },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Small Chops",
          hasMenuItem: [{ "@type": "MenuItem", name: "Small Chops Platter" }],
        },
      ],
    },
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}