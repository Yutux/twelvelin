import type { Metadata } from "next";
import AlphaContent from "./AlphaContent";

export const metadata: Metadata = {
  title: "Formation Alphabétisation | Twelvelin Formation",
  description: "Cours d'alphabétisation et de français langue étrangère (FLE) de A1 à C1. À partir de 10€/h, avec des formateurs expérimentés et bienveillants.",
};

export default function PageAlpha() {
  return <AlphaContent />;
}
