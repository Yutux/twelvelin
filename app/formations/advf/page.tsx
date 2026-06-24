import type { Metadata } from "next";
import ADVFContent from "./ADVFContent";

export const metadata: Metadata = {
  title: "Formation ADVF | Twelvelin Formation",
  description: "Formation Auxiliaire de Vie aux Familles certifiante. Cursus 9 mois ou 3-6 mois, en ligne et en présentiel. Titre professionnel RNCP reconnu par l'État.",
};

export default function PageADVF() {
  return <ADVFContent />;
}
