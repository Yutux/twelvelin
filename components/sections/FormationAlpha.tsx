"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Mic, PenLine, Brain, Sparkles } from "lucide-react";
import Image from "next/image";

const niveaux = [
  { level: "A1", label: "Débutant", desc: "Alphabet, lecture syllabique, écriture simple du quotidien", icon: <PenLine size={16} />, price: "10€/h" },
  { level: "A2", label: "Élémentaire", desc: "Lecture de textes courts, rédaction de phrases simples", icon: <BookOpen size={16} />, price: "10€/h" },
  { level: "B1", label: "Intermédiaire", desc: "Compréhension de textes courants, expression structurée", icon: <Mic size={16} />, price: "12€/h" },
  { level: "B2", label: "Avancé", desc: "Argumentation, documents complexes, correspondance pro", icon: <Brain size={20} />, price: "14€/h" },
  { level: "C1", label: "Courant", desc: "Maîtrise complète, expression précise à l'écrit et à l'oral", icon: <Sparkles size={16} />, price: "15€/h" },
];

const colorAt = (i: number) => {
  const colors = ["#0E7C5B", "#1A8F6A", "#22A070", "#C9A84C", "#B8962A"];
  return colors[i] || "var(--emerald)";
};

export default function FormationAlpha() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="alpha" style={{ padding: "6rem 1.5rem", background: "white" }} ref={ref}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header avec image */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center", marginBottom: "4rem" }} className="alpha-header">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65 }}
            style={{ borderRadius: 20, overflow: "hidden", position: "relative", height: 300 }}>
            <Image src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80" alt="Cours d'alphabétisation" fill style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(13,33,55,0.4) 0%, transparent 70%)" }} />
            <div style={{ position: "absolute", top: "1rem", left: "1.2rem", background: "var(--gold)", color: "white", padding: "0.4rem 0.9rem", borderRadius: 8, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.04em" }}>
              À partir de 10€/heure
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <span style={{ color: "var(--gold)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Alphabétisation & FLE</span>
            <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, color: "var(--navy)", marginTop: "0.5rem", letterSpacing: "-0.02em" }}>
              Apprendre à lire,<br /><span style={{ color: "var(--emerald)" }}>écrire et parler.</span>
            </h2>
            <p style={{ color: "var(--gray-text)", fontSize: "1rem", lineHeight: 1.75, marginTop: "0.75rem" }}>
              Des cours individualisés du niveau A1 au C1, dispensés par des formateurs expérimentés. Progressez à votre rythme, en toute bienveillance.
            </p>
          </motion.div>
        </div>

        {/* Niveaux — timeline */}
        <div style={{ position: "relative", paddingLeft: 36 }}>
          <div style={{ position: "absolute", left: 20, top: 8, bottom: 8, width: 3, background: "linear-gradient(to bottom, var(--emerald), var(--gold))", borderRadius: 3 }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {niveaux.map((n, i) => (
              <motion.div key={n.level}
                initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
                {/* Dot */}
                <div style={{ position: "absolute", left: 9, width: 24, height: 24, borderRadius: "50%", background: colorAt(i), border: "3px solid white", boxShadow: `0 0 0 2px ${colorAt(i)}`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, flexShrink: 0 }} />

                {/* Card */}
                <motion.div whileHover={{ x: 5, boxShadow: "0 8px 30px rgba(13,33,55,0.1)" }} transition={{ duration: 0.18 }}
                  style={{ flex: 1, background: "var(--bg-light)", borderRadius: 14, padding: "1rem 1.4rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", border: "1px solid rgba(13,33,55,0.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", flex: 1 }}>
                    <div style={{ background: colorAt(i), color: "white", width: 42, height: 42, borderRadius: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "0.82rem", flexShrink: 0 }}>
                      {n.level}
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.15rem" }}>
                        <span style={{ color: colorAt(i) }}>{n.icon}</span>
                        <strong style={{ fontFamily: "Syne,sans-serif", color: "var(--navy)", fontSize: "0.95rem" }}>{n.label}</strong>
                      </div>
                      <p style={{ color: "var(--gray-text)", fontSize: "0.84rem", margin: 0 }}>{n.desc}</p>
                    </div>
                  </div>
                  <div style={{ flexShrink: 0, background: "white", border: `1px solid ${colorAt(i)}30`, padding: "0.3rem 0.85rem", borderRadius: 8 }}>
                    <span style={{ fontFamily: "Inter,sans-serif", fontWeight: 700, color: colorAt(i), fontSize: "0.95rem", letterSpacing: "0.01em" }}>{n.price}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.alpha-header{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
