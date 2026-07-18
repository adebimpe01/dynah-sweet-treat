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
  title: "Dynah Sweet Treats | Best Smoky Jollof in FTD",
  description:
    "Home-cooked jollof, fried rice, pasta and small chops on Ifetedo Campus, UNIOSUN. Order on WhatsApp for pickup or delivery.",
  openGraph: {
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
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}