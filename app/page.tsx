import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import FormationADVF from "@/components/sections/FormationADVF";
import FormationAlpha from "@/components/sections/FormationAlpha";
import HowItWorks from "@/components/sections/HowItWorks";
import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Twelvelin Formation | ADVF & Alphabétisation à Paris",
  description:
    "Organisme de formation certifié par l'État à Paris. Formation ADVF certifiante (9 mois ou 3-6 mois) et cours d'alphabétisation A1→C1 à partir de 10€/h.",
  alternates: { canonical: "https://twelvelin.fr" },
};

export default function Home() {
  return (
    <>
      <JsonLd type="organization" />
      <Hero />
      <Stats />
      <FormationADVF />
      <FormationAlpha />
      <HowItWorks />
      <Contact />
    </>
  );
}