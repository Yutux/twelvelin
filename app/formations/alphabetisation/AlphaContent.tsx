"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Shield, ArrowRight, CheckCircle, Star } from "lucide-react";
import PageHero from "@/components/UI/PageHero";
import Timeline from "@/components/UI/Timeline";
import Link from "next/link";

const timelineItems = [
  {
    period: "Niveau A1",
    label: "Débutant",
    title: "Les premières bases — lire & écrire",
    desc: "Découverte de l'alphabet, reconnaissance des lettres et premiers mots. Point de départ accessible à tous, même sans aucune base.",
    details: [
      "Alphabet et phonétique de base",
      "Reconnaissance visuelle des lettres",
      "Écriture des premiers mots courants",
      "Chiffres, couleurs, jours de la semaine",
    ],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    imageAlt: "Apprentissage de l'alphabet",
    color: "#0E7C5B",
  },
  {
    period: "Niveau A2",
    label: "Élémentaire",
    title: "La vie quotidienne en français",
    desc: "Construction de phrases simples pour les besoins du quotidien : se présenter, faire des courses, comprendre les panneaux.",
    details: [
      "Phrases simples du quotidien",
      "Lecture de textes courts",
      "Rédaction d'un message ou d'une note",
      "Compréhension orale basique",
    ],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80",
    imageAlt: "Lecture quotidienne",
    color: "#1A8F6A",
  },
  {
    period: "Niveau B1",
    label: "Intermédiaire",
    title: "S'exprimer avec confiance",
    desc: "Compréhension de textes courants et capacité à s'exprimer sur des sujets familiers de façon claire et structurée.",
    details: [
      "Compréhension de textes variés",
      "Expression écrite structurée",
      "Conversation fluide sur le quotidien",
      "Rédaction de lettres simples",
    ],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
    imageAlt: "Cours intermédiaire de français",
    color: "#22A070",
  },
  {
    period: "Niveau B2",
    label: "Avancé",
    title: "Argumenter & rédiger avec aisance",
    desc: "Maîtrise de textes complexes, capacité à défendre un point de vue et à rédiger des documents professionnels.",
    details: [
      "Lecture de documents complexes",
      "Argumentation écrite et orale",
      "Correspondance professionnelle",
      "Compréhension de médias francophones",
    ],
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&q=80",
    imageAlt: "Rédaction avancée",
    color: "#C9A84C",
  },
  {
    period: "Niveau C1",
    label: "Courant",
    title: "Maîtrise complète du français",
    desc: "Expression précise et nuancée à l'écrit comme à l'oral. Niveau adapté aux exigences professionnelles et académiques les plus élevées.",
    details: [
      "Expression précise et nuancée",
      "Textes longs et spécialisés",
      "Maîtrise des registres de langue",
      "Aisance dans tous les contextes",
    ],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
    imageAlt: "Maîtrise avancée du français",
    color: "#B8962A",
  },
];

const avantages = [
  { icon: "🎯", title: "Cours individualisés", desc: "Chaque apprenant progresse à son propre rythme, selon ses besoins et objectifs." },
  { icon: "❤️", title: "Ambiance bienveillante", desc: "Nos formateurs créent un cadre rassurant où l'erreur fait partie de l'apprentissage." },
  { icon: "📅", title: "Horaires flexibles", desc: "Planifiez vos cours selon vos disponibilités, le soir, le matin ou le week-end." },
  { icon: "📍", title: "En ligne ou en présentiel", desc: "Choisissez la formule qui vous convient, sans contrainte géographique." },
];

export default function AlphaContent() {
  const timelineRef = useRef(null);
  const avantagesRef = useRef(null);
  const ctaRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-60px" });
  const avantagesInView = useInView(avantagesRef, { once: true, margin: "-60px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <>
      <PageHero
        tag="Alphabétisation & FLE"
        title="Apprendre à lire, écrire"
        titleAccent="et parler français."
        subtitle="Des cours individualisés du niveau A1 au C1, dispensés par des formateurs expérimentés. À votre rythme, en toute bienveillance, à partir de 10€/heure."
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80"
        imageAlt="Cours d'alphabétisation"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Formations" }, { label: "Alphabétisation" }]}
        badgeIcon={<BookOpen size={12} />}
        badgeLabel="Niveaux A1 → C1 — À partir de 10€/h"
      />

      {/* Prix rapide */}
      <section style={{ padding: "3rem 1.5rem", background: "white", borderBottom: "1px solid rgba(13,33,55,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "1.5rem" }}>
          {[
            { level: "A1 — A2", price: "10€/h", color: "#0E7C5B" },
            { level: "B1", price: "12€/h", color: "#22A070" },
            { level: "B2", price: "14€/h", color: "#C9A84C" },
            { level: "C1", price: "15€/h", color: "#B8962A" },
          ].map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ textAlign: "center", padding: "1.5rem 1rem", background: "var(--bg-light)", borderRadius: 14, border: `1px solid ${p.color}22` }}>
              <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1.6rem", color: p.color }}>{p.price}</div>
              <div style={{ fontSize: "0.85rem", color: "var(--gray-text)", marginTop: "0.3rem" }}>Niveau {p.level}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline chronologique */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--bg-light)" }} ref={timelineRef}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={timelineInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{ color: "var(--gold)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Programme</span>
            <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 800, color: "var(--navy)", marginTop: "0.5rem", letterSpacing: "-0.02em" }}>
              Votre progression <span style={{ color: "var(--emerald)" }}>de A1 à C1</span>
            </h2>
            <p style={{ color: "var(--gray-text)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 500, margin: "0.75rem auto 0" }}>
              Chaque niveau s&apos;appuie sur le précédent. Vous entrez où vous en êtes et avancez à votre rythme.
            </p>
          </motion.div>
          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* Avantages */}
      <section style={{ padding: "6rem 1.5rem", background: "white" }} ref={avantagesRef}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={avantagesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ color: "var(--emerald)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Notre méthode</span>
            <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 800, color: "var(--navy)", marginTop: "0.5rem", letterSpacing: "-0.02em" }}>
              Pourquoi choisir <span style={{ color: "var(--emerald)" }}>Twelvelin ?</span>
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.2rem" }}>
            {avantages.map((a, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} animate={avantagesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(13,33,55,0.1)" }}
                style={{ background: "var(--bg-light)", borderRadius: 16, padding: "1.8rem", border: "1px solid rgba(13,33,55,0.06)" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{a.icon}</div>
                <h3 style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--navy)", marginBottom: "0.5rem" }}>{a.title}</h3>
                <p style={{ color: "var(--gray-text)", fontSize: "0.85rem", lineHeight: 1.65 }}>{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--navy)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ display: "flex", justifyContent: "center", gap: "0.3rem", marginBottom: "1.5rem" }}>
              {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="var(--gold)" color="var(--gold)" />)}
            </div>
            <blockquote style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(1.1rem,2.5vw,1.4rem)", fontWeight: 700, color: "white", lineHeight: 1.6, marginBottom: "1.5rem", fontStyle: "italic" }}>
              &ldquo;En 6 mois, je suis passée du niveau A1 au B1. Les formateurs sont patients et bienveillants. Je peux enfin lire les lettres de mes enfants.&rdquo;
            </blockquote>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.8rem" }}>
              <div style={{ width: 42, height: 42, borderRadius: "50%", background: "var(--emerald)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Syne,sans-serif", fontWeight: 800, color: "white" }}>F</div>
              <div style={{ textAlign: "left" }}>
                <div style={{ color: "white", fontWeight: 600, fontSize: "0.9rem" }}>Fatima M.</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem" }}>Apprenante — Niveau A1 → B1</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--bg-light)", textAlign: "center" }} ref={ctaRef}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={ctaInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <Shield size={32} color="var(--gold)" style={{ marginBottom: "1rem" }} />
            <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 800, color: "var(--navy)", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
              Commencez dès cette semaine
            </h2>
            <p style={{ color: "var(--gray-text)", lineHeight: 1.7, marginBottom: "2rem" }}>
              Un test de niveau gratuit pour identifier où vous en êtes et construire votre parcours personnalisé.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/nous-contacter"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "var(--emerald)", color: "white", padding: "0.9rem 1.8rem", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>
                Test de niveau gratuit <ArrowRight size={16} />
              </Link>
              <Link href="/nous-contacter"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "white", color: "var(--navy)", padding: "0.9rem 1.8rem", borderRadius: 10, fontWeight: 600, textDecoration: "none", fontSize: "0.95rem", border: "1px solid rgba(13,33,55,0.15)" }}>
                <CheckCircle size={16} color="var(--emerald)" /> Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
