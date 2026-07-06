"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Monitor, Users, Award, Clock, CheckCircle, Shield, ArrowRight, Send } from "lucide-react";
import Image from "next/image";

const cursus = [
  {
    tag: "Cursus complet", duration: "9 mois", color: "var(--emerald)", bgColor: "var(--emerald-light)",
    modalite: "En ligne + présentiel",
    points: ["Modules théoriques en e-learning", "Stages pratiques en présentiel", "Accompagnement individuel hebdomadaire", "Préparation à la certification RNCP"],
    icon: <Award size={22} />,
  },
  {
    tag: "Accéléré", duration: "3 à 6 mois", color: "var(--gold)", bgColor: "var(--gold-light)",
    modalite: "Mixte — adapté à votre profil",
    points: ["Idéal pour les professionnels expérimentés", "Planning adapté à vos disponibilités", "Validation des acquis d'expérience", "Accès complet aux modules e-learning"],
    icon: <Clock size={22} />,
  },
];

export default function FormationADVF() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="advf" style={{ padding: "6rem 1.5rem", background: "var(--bg-light)" }} ref={ref}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center", marginBottom: "4rem" }} className="advf-header">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span style={{ color: "var(--emerald)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Formation professionnelle</span>
            <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, color: "var(--navy)", marginTop: "0.5rem", letterSpacing: "-0.02em" }}>
              Auxiliaire de Vie<br />aux Familles
            </h2>
            <p style={{ color: "var(--gray-text)", fontSize: "1rem", lineHeight: 1.7, marginTop: "0.75rem" }}>
              Devenez un professionnel reconnu de l&apos;aide à la personne. Deux parcours certifiants, adaptés à votre situation.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
              {[
                { icon: <Monitor size={14} />, label: "E-learning inclus" },
                { icon: <Users size={14} />, label: "Présentiel disponible" },
                { icon: <Shield size={14} />, label: "Certifié par l'État" },
              ].map((m, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "white", padding: "0.5rem 0.9rem", borderRadius: 8, fontSize: "0.82rem", color: "var(--navy)", fontWeight: 500, boxShadow: "0 1px 6px rgba(13,33,55,0.08)" }}>
                  <span style={{ color: "var(--emerald)" }}>{m.icon}</span> {m.label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: 0.15 }}
            style={{ borderRadius: 20, overflow: "hidden", position: "relative", height: 280 }}>
            <Image src="https://images.unsplash.com/photo-1576765608866-5b51046452be?w=800&q=80" alt="Auxiliaire de vie aux familles" fill style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,33,55,0.5) 0%, transparent 60%)" }} />
            <div style={{ position: "absolute", bottom: "1rem", left: "1.2rem", background: "var(--gold)", color: "white", padding: "0.4rem 0.9rem", borderRadius: 8, fontSize: "0.8rem", fontWeight: 700 }}>
              Titre professionnel RNCP
            </div>
          </motion.div>
        </div>

        {/* Cards cursus */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.5rem" }}>
          {cursus.map((c, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(13,33,55,0.12)" }}
              style={{ background: "white", borderRadius: 20, padding: "2rem", border: "1px solid rgba(13,33,55,0.07)", boxShadow: "0 4px 20px rgba(13,33,55,0.06)", transition: "box-shadow 0.2s" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                <div>
                  <span style={{ background: c.color, color: "white", fontSize: "0.7rem", fontWeight: 700, padding: "0.25rem 0.7rem", borderRadius: 100, letterSpacing: "0.05em", textTransform: "uppercase" }}>{c.tag}</span>
                  <h3 style={{ fontFamily: "Syne,sans-serif", fontSize: "1.7rem", fontWeight: 800, color: "var(--navy)", margin: "0.6rem 0 0.15rem", letterSpacing: "-0.02em" }}>{c.duration}</h3>
                  <span style={{ color: "var(--gray-text)", fontSize: "0.83rem" }}>{c.modalite}</span>
                </div>
                <div style={{ background: c.bgColor, color: c.color, borderRadius: 12, padding: "0.7rem", display: "flex" }}>{c.icon}</div>
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem" }}>
                {c.points.map(p => (
                  <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.87rem", color: "var(--navy)", marginBottom: "0.6rem" }}>
                    <CheckCircle size={14} color={c.color} style={{ flexShrink: 0, marginTop: 2 }} /> {p}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Link href="/formations/advf"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", color: c.color, fontWeight: 600, fontSize: "0.82rem", textDecoration: "none", padding: "0.5rem 0.9rem", borderRadius: 8, border: `1px solid ${c.color}30`, background: `${c.color}08`, transition: "background 0.15s", whiteSpace: "nowrap" }}
                  onMouseEnter={e => e.currentTarget.style.background = `${c.color}18`}
                  onMouseLeave={e => e.currentTarget.style.background = `${c.color}08`}>
                  <ArrowRight size={14} /> En savoir plus
                </Link>
                <Link href="/nous-contacter"
                  title="Demander un devis"
                  style={{ background: c.color, color: "white", padding: "0.55rem 0.75rem", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "opacity 0.15s", flexShrink: 0 }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                  Demander un devis
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.advf-header{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
