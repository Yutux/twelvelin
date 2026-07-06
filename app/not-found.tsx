import type { Metadata } from "next";
import NotFoundContent from "./NotFoundContent";

export const metadata: Metadata = {
  title: "Page introuvable — Twelvelin Formation",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundContent />;
}