import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Nous contacter | Twelvelin Formation",
  description: "Contactez Twelvelin Formation pour toute question sur nos formations ADVF ou alphabétisation. Notre équipe répond sous 24h.",
};

export default function PageContact() {
  return <ContactContent />;
}