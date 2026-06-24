"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Shield } from "lucide-react";

const sections = [
  {
    title: "1. Éditeur du site",
    content: `Le site twelvelin.fr est édité par :

**Twelvelin Formation**
Forme juridique : [À compléter]
Adresse : 12 rue de la Formation, 75000 Paris
Téléphone : 01 23 45 67 89
Email : contact@twelvelin.fr
N° de déclaration d'activité de formation : 11 75 XXXXXXXX
N° SIRET : [À compléter]

Directeur de la publication : [Nom du responsable]`,
  },
  {
    title: "2. Hébergement",
    content: `Ce site est hébergé par :

**Vercel Inc.**
440 N Barranca Ave #4133
Covina, CA 91723, États-Unis
Site : https://vercel.com`,
  },
  {
    title: "3. Propriété intellectuelle",
    content: `L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de Twelvelin Formation, sauf mentions contraires.

Toute reproduction, distribution, modification ou utilisation de ces contenus, sous quelque forme que ce soit, sans autorisation écrite préalable de Twelvelin Formation, est strictement interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.`,
  },
  {
    title: "4. Données personnelles & RGPD",
    content: `Twelvelin Formation collecte des données personnelles via le formulaire de contact (nom, email, téléphone, message) dans le but exclusif de répondre à vos demandes.

**Vos droits :**
- Droit d'accès à vos données
- Droit de rectification
- Droit à l'effacement ("droit à l'oubli")
- Droit à la limitation du traitement
- Droit à la portabilité

Pour exercer ces droits, contactez-nous à : contact@twelvelin.fr

Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679), vos données ne sont jamais revendues à des tiers.`,
  },
  {
    title: "5. Cookies",
    content: `Ce site n'utilise pas de cookies de tracking ou publicitaires. Seuls des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être déposés, sans nécessiter votre consentement préalable (article 82 de la loi Informatique et Libertés).`,
  },
  {
    title: "6. Liens hypertextes",
    content: `Le site peut contenir des liens vers des sites tiers. Twelvelin Formation n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leur politique de confidentialité.`,
  },
  {
    title: "7. Limitation de responsabilité",
    content: `Twelvelin Formation s'efforce d'assurer l'exactitude et la mise à jour des informations publiées sur ce site. Cependant, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des informations diffusées. L'utilisation des informations disponibles sur ce site se fait sous l'entière responsabilité de l'utilisateur.`,
  },
  {
    title: "8. Droit applicable",
    content: `Les présentes mentions légales sont soumises au droit français. Tout litige relatif à l'utilisation du site sera soumis à la compétence exclusive des tribunaux français.`,
  },
];

function renderContent(text: string) {
  return text.split("\n").map((line, i) => {
    if (line.startsWith("**") && line.endsWith("**")) {
      return <strong key={i} style={{ color: "var(--navy)", display: "block", marginTop: "0.75rem", marginBottom: "0.25rem" }}>{line.replace(/\*\*/g, "")}</strong>;
    }
    if (line.startsWith("- ")) {
      return <li key={i} style={{ marginLeft: "1.2rem", marginBottom: "0.3rem", color: "var(--gray-text)", fontSize: "0.92rem" }}>{line.slice(2)}</li>;
    }
    if (line.trim() === "") return <br key={i} />;
    return <span key={i} style={{ display: "block", color: "var(--gray-text)", fontSize: "0.92rem", lineHeight: 1.75 }}>{line}</span>;
  });
}

export default function MentionsContent() {
  return (
    <>
      {/* Mini hero */}
      <section style={{ background: "var(--navy)", padding: "8rem 1.5rem 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(201,168,76,0.06)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "2rem" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}>
              Accueil
            </Link>
            <ChevronRight size={13} color="rgba(255,255,255,0.3)" />
            <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.82rem" }}>Mentions légales</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.05 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", color: "var(--gold)", padding: "0.4rem 0.9rem", borderRadius: 100, fontSize: "0.78rem", fontWeight: 700, marginBottom: "1.2rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            <Shield size={12} /> Informations légales
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "white", letterSpacing: "-0.03em" }}>
            Mentions légales
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginTop: "0.75rem" }}>
            Dernière mise à jour : janvier 2025
          </motion.p>
        </div>
      </section>

      {/* Contenu */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--bg-light)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {/* Table des matières */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ background: "white", borderRadius: 16, padding: "1.8rem 2rem", marginBottom: "3rem", border: "1px solid rgba(13,33,55,0.07)", boxShadow: "0 4px 20px rgba(13,33,55,0.06)" }}>
            <h2 style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--navy)", marginBottom: "1rem" }}>
              Sommaire
            </h2>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {sections.map((s, i) => (
                <li key={i}>
                  <a href={`#section-${i}`}
                    style={{ color: "var(--emerald)", fontSize: "0.88rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--emerald)"}>
                    <ChevronRight size={13} /> {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {sections.map((s, i) => (
              <motion.div key={i} id={`section-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                style={{ background: "white", borderRadius: 16, padding: "2rem", border: "1px solid rgba(13,33,55,0.07)", boxShadow: "0 2px 12px rgba(13,33,55,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: i % 2 === 0 ? "var(--emerald-light)" : "var(--gold-light)", color: i % 2 === 0 ? "var(--emerald)" : "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "0.8rem", flexShrink: 0 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "var(--navy)" }}>
                    {s.title.replace(/^\d+\.\s/, "")}
                  </h2>
                </div>
                <div>{renderContent(s.content)}</div>
              </motion.div>
            ))}
          </div>

          {/* Back home */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--emerald)", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--emerald)"}>
              ← Retour à l&apos;accueil
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
