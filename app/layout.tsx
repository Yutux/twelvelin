import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Twelvelin Formation | ADVF & Alphabétisation",
  description: "Organisme de formation spécialisé en ADVF et alphabétisation. Formations en ligne et en présentiel, certifiantes et accessibles.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <a href="#main" className="skip-link">Aller au contenu</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
