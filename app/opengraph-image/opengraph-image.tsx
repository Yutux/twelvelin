import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Twelvelin Formation — ADVF & Alphabétisation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0D2137 0%, #1A3A5C 60%, #0D3D2C 100%)",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Cercle déco haut droite */}
        <div style={{
          position: "absolute", top: -80, right: -80,
          width: 400, height: 400, borderRadius: "50%",
          background: "rgba(201,168,76,0.08)",
          display: "flex",
        }} />

        {/* Cercle déco bas gauche */}
        <div style={{
          position: "absolute", bottom: -60, left: -60,
          width: 300, height: 300, borderRadius: "50%",
          background: "rgba(14,124,91,0.10)",
          display: "flex",
        }} />

        {/* Badge certifié */}
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          background: "rgba(201,168,76,0.15)",
          border: "1px solid rgba(201,168,76,0.4)",
          borderRadius: 100,
          padding: "8px 20px",
          width: "fit-content",
          marginBottom: 32,
        }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#C9A84C", display: "flex" }} />
          <span style={{ color: "#C9A84C", fontSize: 18, fontWeight: 700, letterSpacing: "0.06em" }}>
            CERTIFIÉ PAR L&apos;ÉTAT
          </span>
        </div>

        {/* Titre */}
        <div style={{
          fontSize: 72, fontWeight: 800,
          color: "white", lineHeight: 1.05,
          letterSpacing: "-0.03em",
          marginBottom: 24,
          display: "flex",
          flexDirection: "column",
        }}>
          <span>Twelvelin</span>
          <span style={{ color: "#C9A84C" }}>Formation</span>
        </div>

        {/* Sous-titre */}
        <div style={{
          fontSize: 26, color: "rgba(255,255,255,0.65)",
          lineHeight: 1.5, marginBottom: 48, maxWidth: 600,
          display: "flex",
        }}>
          Formation ADVF certifiante & Cours d&apos;alphabétisation A1→C1 · Paris
        </div>

        {/* Pills formations */}
        <div style={{ display: "flex", gap: 16 }}>
          {[
            { label: "ADVF 9 mois", color: "#0E7C5B" },
            { label: "ADVF 3-6 mois", color: "#0E7C5B" },
            { label: "Alpha A1→C1", color: "#C9A84C" },
            { label: "À partir de 10€/h", color: "#C9A84C" },
          ].map((pill) => (
            <div key={pill.label} style={{
              background: `${pill.color}22`,
              border: `1px solid ${pill.color}55`,
              borderRadius: 8,
              padding: "10px 20px",
              color: pill.color,
              fontSize: 18,
              fontWeight: 600,
              display: "flex",
            }}>
              {pill.label}
            </div>
          ))}
        </div>

        {/* URL */}
        <div style={{
          position: "absolute", bottom: 48, right: 80,
          color: "rgba(255,255,255,0.3)", fontSize: 20,
          display: "flex",
        }}>
          twelvelin.fr
        </div>
      </div>
    ),
    { ...size }
  );
}