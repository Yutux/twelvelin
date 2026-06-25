import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Nous contacter — Demande d'information ou d'inscription",
  description:
    "Contactez Twelvelin Formation à Paris pour toute question sur nos formations ADVF ou alphabétisation. Réponse sous 24h. Formulaire en ligne ou par téléphone.",
  alternates: { canonical: "https://twelvelin.fr/nous-contacter" },
};

export default function PageContact() {
  return <ContactContent />;
}
