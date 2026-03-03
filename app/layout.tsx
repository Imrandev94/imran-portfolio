import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Imrandev® — Création de sites web modernes et performants",
  description:
    "Je conçois des sites vitrines modernes, rapides et optimisés SEO, adaptés à votre activité. Livraison en 7 à 21 jours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
