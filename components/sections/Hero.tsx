"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{
      background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 60%, #0D3D2C 100%)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "7rem 1.5rem 4rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Déco dorée */}
      <div style={{ position: "absolute", top: -120, right: -120, width: 500, height: 500, borderRadius: "50%", background: "rgba(201,168,76,0.06)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -80, left: -80, width: 350, height: 350, borderRadius: "50%", background: "rgba(14,124,91,0.08)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "30%", right: "8%", width: 180, height: 180, borderRadius: "50%", background: "rgba(201,168,76,0.04)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="hero-grid">
        {/* LEFT */}
        <div>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", color: "var(--gold)", padding: "0.4rem 0.9rem", borderRadius: 100, fontSize: "0.78rem", fontWeight: 700, marginBottom: "1.5rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            <Shield size={12} /> Certifié par l&apos;État
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
            style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(2.2rem,5vw,3.6rem)", fontWeight: 800, color: "white", lineHeight: 1.08, marginBottom: "1.5rem", letterSpacing: "-0.03em" }}>
            Votre avenir<br />
            <span style={{ color: "var(--gold)" }}>commence ici.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            style={{ color: "rgba(255,255,255,0.68)", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "2rem", maxWidth: 460 }}>
            Formations ADVF certifiantes et cours d&apos;alphabétisation adaptés à votre rythme. En ligne et en présentiel, avec un accompagnement personnalisé.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#advf"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--emerald)", color: "white", padding: "0.9rem 1.8rem", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: "0.95rem", transition: "transform 0.15s,box-shadow 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(14,124,91,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
              Voir les formations <ArrowRight size={16} />
            </a>
            <a href="#contact"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.08)", color: "white", padding: "0.9rem 1.8rem", borderRadius: 10, fontWeight: 600, textDecoration: "none", fontSize: "0.95rem", border: "1px solid rgba(255,255,255,0.18)", transition: "background 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}>
              Nous contacter
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "1.2rem", marginTop: "2rem" }}>
            {["Formations certifiantes", "Certifié par l'État", "Suivi personnalisé"].map(t => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "rgba(255,255,255,0.55)", fontSize: "0.83rem" }}>
                <CheckCircle size={13} color="var(--gold)" /> {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {/* Image principale */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ borderRadius: 20, overflow: "hidden", position: "relative", height: 260, border: "1px solid rgba(255,255,255,0.1)" }}>
            <Image src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80" alt="Formation professionnelle" fill style={{ objectFit: "cover", opacity: 0.85 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,33,55,0.7) 0%, transparent 60%)" }} />
            <div style={{ position: "absolute", bottom: "1rem", left: "1.2rem", right: "1.2rem", display: "flex", gap: "0.5rem" }}>
              {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="var(--gold)" color="var(--gold)" />)}
              <span style={{ color: "white", fontSize: "0.82rem", marginLeft: "0.3rem" }}>+200 apprenants formés</span>
            </div>
          </motion.div>

          {/* Cards parcours */}
          {[
            { tag: "Cursus complet", title: "ADVF — 9 mois", desc: "Reconversion professionnelle complète avec titre RNCP.", color: "var(--emerald)" },
            { tag: "Accéléré", title: "ADVF — 3 à 6 mois", desc: "Pour les professionnels expérimentés souhaitant se certifier.", color: "var(--gold)" },
          ].map((card, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.28)" }}
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "1.2rem 1.4rem", display: "flex", alignItems: "center", gap: "1rem", backdropFilter: "blur(8px)", cursor: "default" }}>
              <div style={{ width: 4, height: 40, borderRadius: 4, background: card.color, flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: card.color, letterSpacing: "0.06em", textTransform: "uppercase" }}>{card.tag}</span>
                <p style={{ fontFamily: "Syne,sans-serif", color: "white", fontWeight: 700, fontSize: "1rem", margin: "0.2rem 0 0.2rem" }}>{card.title}</p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.82rem" }}>{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:768px){.hero-grid{grid-template-columns:1fr!important;gap:2.5rem!important;}}`}</style>
    </section>
  );
}
