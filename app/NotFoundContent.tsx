"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Home, BookOpen, Phone } from "lucide-react";

export default function NotFoundContent() {
  return (
    <section style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 60%, #0D3D2C 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "6rem 1.5rem", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(201,168,76,0.06)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(14,124,91,0.07)", pointerEvents: "none" }} />

      <div style={{ textAlign: "center", position: "relative", zIndex: 1, maxWidth: 560 }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(6rem,15vw,10rem)", fontWeight: 800, color: "rgba(255,255,255,0.06)", lineHeight: 1, display: "block", letterSpacing: "-0.04em" }}>
            404
          </span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
          style={{ marginTop: "-2rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", color: "var(--gold)", padding: "0.4rem 0.9rem", borderRadius: 100, fontSize: "0.78rem", fontWeight: 700, marginBottom: "1.5rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Page introuvable
          </div>

          <h1 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 800, color: "white", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            Cette page n&apos;existe pas
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
            La page que vous recherchez a peut-être été déplacée ou supprimée. Voici quelques liens utiles pour continuer.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: 340, margin: "0 auto" }}>
          {[
            { href: "/", icon: <Home size={16} />, label: "Retour à l'accueil", primary: true },
            { href: "/formations/advf", icon: <BookOpen size={16} />, label: "Formation ADVF", primary: false },
            { href: "/nous-contacter", icon: <Phone size={16} />, label: "Nous contacter", primary: false },
          ].map((l, i) => (
            <Link key={i} href={l.href}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                background: l.primary ? "var(--emerald)" : "rgba(255,255,255,0.07)",
                color: "white", padding: "0.85rem 1.5rem", borderRadius: 10,
                fontWeight: l.primary ? 700 : 500, fontSize: "0.9rem", textDecoration: "none",
                border: l.primary ? "none" : "1px solid rgba(255,255,255,0.12)",
                transition: "opacity 0.15s, transform 0.15s",
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = ""; }}>
              {l.icon} {l.label} {l.primary && <ArrowRight size={14} />}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}