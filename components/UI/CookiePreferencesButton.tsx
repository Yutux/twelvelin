"use client";
import { Cookie } from "lucide-react";

export default function CookiePreferencesButton() {
  const handleOpen = () => {
    localStorage.removeItem("twelvelin_cookie_consent");
    window.dispatchEvent(new CustomEvent("openCookieBanner"));
  };

  return (
    <button
      onClick={handleOpen}
      style={{
        background: "none", border: "none", cursor: "pointer",
        display: "flex", alignItems: "center", gap: "0.35rem",
        color: "rgba(255,255,255,0.3)", fontSize: "0.78rem",
        fontFamily: "Inter,sans-serif", padding: 0,
        transition: "color 0.2s",
      }}
      onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
      onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}
    >
      <Cookie size={12} /> Gérer mes cookies
    </button>
  );
}