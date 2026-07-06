import type { Metadata } from "next";
import AlphaContent from "./AlphaContent";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Cours Alphabétisation Paris — Niveaux A1 à C1",
  description:
    "Cours d'alphabétisation et de français (FLE) à Paris. Niveaux A1, A2, B1, B2, C1. À partir de 10€/heure. Formateurs expérimentés et bienveillants. En ligne et présentiel.",
  alternates: { canonical: "https://twelvelin.fr/formations/alphabetisation" },
  openGraph: {
    title: "Cours Alphabétisation Paris A1→C1 | Twelvelin Formation",
    description:
      "Apprenez à lire, écrire et parler français. Niveaux A1 à C1. À partir de 10€/h. Cours individualisés à Paris.",
    url: "https://twelvelin.fr/formations/alphabetisation",
  },
};

export default function PageAlpha() {
  return (
    <>
      <JsonLd type="course-alpha" />
      <AlphaContent />
    </>
  );
}
