import type { Metadata } from "next";
import MentionsContent from "./MentionsContent";

export const metadata: Metadata = {
  title: "Mentions légales | Twelvelin Formation",
  description: "Mentions légales, politique de confidentialité et conditions générales de Twelvelin Formation.",
};

export default function PageMentions() {
  return <MentionsContent />;
}
