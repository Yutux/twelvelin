import type { Metadata } from "next";
import AlphaContent from "./AlphaContent";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Cours de français Paris — Niveaux A1 à B1",
  description:
    "Cours de français (FLE) à Paris. Niveaux A1, A2, B1. À partir de 10€/heure. Formateurs expérimentés et bienveillants. En ligne et présentiel.",
  alternates: { canonical: "https://twelvelin.fr/formations/alphabetisation" },
  openGraph: {
    title: "Cours de français Paris A1→B1 | Twelvelin Formation",
    description:
      "Apprenez à lire, écrire et parler français. Niveaux A1 à B1. À partir de 10€/h. Cours individualisés à Paris.",
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
