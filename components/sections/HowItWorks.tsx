"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, ClipboardList, BookOpen, Award } from "lucide-react";

const steps = [
  { num: "01", icon: <Phone size={26} />, title: "Contact", desc: "Prenez contact avec nos conseillers par téléphone, email ou via le formulaire. On analyse votre situation ensemble.", color: "var(--emerald)" },
  { num: "02", icon: <ClipboardList size={26} />, title: "Inscription", desc: "Choisissez votre formation, validez votre dossier et finalisez votre inscription. L'équipe vous accompagne à chaque étape.", color: "var(--gold)" },
  { num: "03", icon: <BookOpen size={26} />, title: "Formation", desc: "Suivez vos modules en ligne à votre rythme et participez aux sessions en présentiel selon votre cursus.", color: "var(--emerald)" },
  { num: "04", icon: <Award size={26} />, title: "Certification", desc: "Passez votre examen de certification. Obtenez votre titre reconnu par l'État et valorisez-le sur le marché de l'emploi.", color: "var(--gold)" },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="etapes" style={{ padding: "6rem 1.5rem", background: "var(--navy)", position: "relative", overflow: "hidden" }} ref={ref}>
      {/* Déco */}
      <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(201,168,76,0.05)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(14,124,91,0.06)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ color: "var(--gold)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Votre parcours
          </span>
          <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, color: "white", marginTop: "0.5rem", letterSpacing: "-0.02em" }}>
            Comment ça marche ?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 480, margin: "0.75rem auto 0" }}>
            De la première prise de contact à l&apos;obtention de votre certification, on vous accompagne à chaque étape.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.5rem", position: "relative" }}>
          {/* Ligne connecteur desktop */}
          <div style={{ position: "absolute", top: 40, left: "12.5%", right: "12.5%", height: 2, background: "linear-gradient(to right, var(--emerald), var(--gold), var(--emerald), var(--gold))", opacity: 0.25, pointerEvents: "none" }} className="connector-line" />

          {steps.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, padding: "2rem 1.5rem", transition: "box-shadow 0.2s", cursor: "default" }}>
              {/* Icône */}
              <div style={{ width: 60, height: 60, borderRadius: 16, background: `${s.color}22`, border: `1px solid ${s.color}44`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, marginBottom: "1.2rem" }}>
                {s.icon}
              </div>

              {/* Numéro */}
              <span style={{ fontFamily: "Syne,sans-serif", fontSize: "0.72rem", fontWeight: 800, color: s.color, letterSpacing: "0.1em", display: "block", marginBottom: "0.4rem" }}>
                ÉTAPE {s.num}
              </span>

              <h3 style={{ fontFamily: "Syne,sans-serif", fontSize: "1.3rem", fontWeight: 800, color: "white", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
                {s.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.87rem", lineHeight: 1.7, margin: 0 }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:768px){.connector-line{display:none!important;}}`}</style>
    </section>
  );
}
