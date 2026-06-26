import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/UI/CookieBanner";
import ConditionalAnalytics from "@/components/UI/ConditionalAnalytics";
import { SpeedInsights } from "@vercel/speed-insights/next"

const BASE_URL = "https://twelvelin.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // Titre avec template — chaque page peut écrire juste son propre titre
  title: {
    default: "Twelvelin Formation | ADVF & Alphabétisation à Paris",
    template: "%s | Twelvelin Formation",
  },

  description:
    "Organisme de formation certifié par l'État à Paris. Formation ADVF (Auxiliaire de Vie aux Familles) certifiante et cours d'alphabétisation A1→C1. En ligne et présentiel.",

  // Mots-clés (moins importants qu'avant mais utiles)
  keywords: [
    "formation ADVF Paris",
    "auxiliaire de vie aux familles",
    "formation certifiante aide à domicile",
    "cours alphabétisation Paris",
    "formation FLE Paris",
    "organisme formation certifié état",
    "titre professionnel RNCP",
    "cours français débutant Paris",
  ],

  authors: [{ name: "Twelvelin Formation", url: BASE_URL }],
  creator: "Twelvelin Formation",
  publisher: "Twelvelin Formation",

  // Open Graph — partage sur réseaux sociaux
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "Twelvelin Formation",
    title: "Twelvelin Formation | ADVF & Alphabétisation à Paris",
    description:
      "Organisme de formation certifié par l'État. Formation ADVF certifiante et cours d'alphabétisation A1→C1 à Paris. En ligne et présentiel.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Twelvelin Formation — ADVF & Alphabétisation à Paris",
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: "Twelvelin Formation | ADVF & Alphabétisation à Paris",
    description:
      "Organisme de formation certifié par l'État. Formation ADVF et cours d'alphabétisation A1→C1.",
    images: ["/opengraph-image"],
  },

  // Canonical + robots
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icônes
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  // Vérification Google Search Console — à remplir Phase 2
  // verification: {
  //   google: "XXXXXXXXXXXXXXXXXXXX",
  // },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <a href="#main" className="skip-link">Aller au contenu</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <CookieBanner />
        <ConditionalAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}