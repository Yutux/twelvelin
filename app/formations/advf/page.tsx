import type { Metadata } from "next";
import ADVFContent from "./ADVFContent";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Formation ADVF Paris — Auxiliaire de Vie aux Familles",
  description:
    "Formation ADVF certifiante à Paris. Cursus 9 mois (complet) ou 3-6 mois (accéléré). Titre professionnel RNCP reconnu par l'État. En ligne + présentiel. Tarif sur devis.",
  alternates: { canonical: "https://twelvelin.fr/formations/advf" },
  openGraph: {
    title: "Formation ADVF Paris | Twelvelin Formation",
    description:
      "Devenez Auxiliaire de Vie aux Familles. Cursus certifiant 9 mois ou accéléré 3-6 mois. Titre RNCP reconnu par l'État.",
    url: "https://twelvelin.fr/formations/advf",
  },
};

export default function PageADVF() {
  return (
    <>
      <JsonLd type="course-advf" />
      <ADVFContent />
    </>
  );
}
