import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import FormationADVF from "@/components/sections/FormationADVF";
import FormationAlpha from "@/components/sections/FormationAlpha";
import HowItWorks from "@/components/sections/HowItWorks";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FormationADVF />
      <FormationAlpha />
      <HowItWorks />
      <Contact />
    </>
  );
}
