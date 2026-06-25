"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, Award, Clock, Users, CheckCircle, ArrowRight, BookOpen, Heart, Home } from "lucide-react";
import PageHero from "@/components/UI/PageHero";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import Timeline from "@/components/UI/Timeline";
import Link from "next/link";

const timelineItems = [
  {
    period: "Mois 1-2",
    label: "Fondamentaux",
    title: "Découverte du métier & bases théoriques",
    desc: "Introduction au rôle de l'auxiliaire de vie, cadre légal, éthique professionnelle et premiers gestes.",
    details: [
      "Rôle et missions de l'ADVF",
      "Cadre juridique et déontologie",
      "Hygiène et prévention des risques",
      "Communication avec les bénéficiaires",
    ],
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
    imageAlt: "Formation théorique ADVF",
    color: "var(--emerald)",
  },
  {
    period: "Mois 3-4",
    label: "Aide à domicile",
    title: "Entretien du cadre de vie",
    desc: "Apprentissage pratique des techniques d'entretien, gestion du domicile et organisation des tâches.",
    details: [
      "Techniques de nettoyage et d'entretien",
      "Gestion du linge et repassage",
      "Préparation et équilibre des repas",
      "Organisation et planification",
    ],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    imageAlt: "Aide à domicile",
    color: "var(--gold)",
  },
  {
    period: "Mois 5-6",
    label: "Accompagnement",
    title: "Accompagnement des personnes",
    desc: "Soutien aux personnes fragilisées, personnes âgées, enfants et situations de dépendance.",
    details: [
      "Accompagnement des personnes âgées",
      "Aide aux actes de la vie quotidienne",
      "Soutien à la parentalité",
      "Gestion des situations d'urgence",
    ],
    image: "https://images.unsplash.com/photo-1576765608866-5b51046452be?w=600&q=80",
    imageAlt: "Accompagnement personne âgée",
    color: "var(--emerald)",
  },
  {
    period: "Mois 7-8",
    label: "Stage pratique",
    title: "Immersion en milieu professionnel",
    desc: "Mise en pratique des compétences acquises directement auprès de bénéficiaires réels, en situation professionnelle.",
    details: [
      "Stage en structure agréée",
      "Suivi par un tuteur professionnel",
      "Rapport de stage et évaluation",
      "Bilan de compétences",
    ],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    imageAlt: "Stage pratique en milieu professionnel",
    color: "var(--gold)",
  },
  {
    period: "Mois 9",
    label: "Certification",
    title: "Évaluation finale & certification",
    desc: "Passage des épreuves de certification pour l'obtention du titre professionnel RNCP reconnu par l'État.",
    details: [
      "Révisions et préparation intensive",
      "Épreuves théoriques et pratiques",
      "Jury de certification officiel",
      "Obtention du titre RNCP",
    ],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
    imageAlt: "Cérémonie de certification",
    color: "var(--emerald)",
  },
];

const metiers = [
  { icon: <Heart size={22} />, title: "Aide à domicile", desc: "Assistance aux personnes âgées ou handicapées dans leur quotidien" },
  { icon: <Home size={22} />, title: "Employé familial", desc: "Gestion du domicile et soutien aux familles" },
  { icon: <Users size={22} />, title: "Garde d'enfants", desc: "Accompagnement et éveil des jeunes enfants à domicile" },
  { icon: <BookOpen size={22} />, title: "Assistant de vie", desc: "Soutien global aux personnes en situation de dépendance" },
];

function SectionHeader({ tag, title, accent, subtitle, inView }: { tag: string; title: string; accent?: string; subtitle?: string; inView: boolean }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
      style={{ textAlign: "center", marginBottom: "3.5rem" }}>
      <span style={{ color: "var(--emerald)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{tag}</span>
      <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 800, color: "var(--navy)", marginTop: "0.5rem", letterSpacing: "-0.02em" }}>
        {title} {accent && <span style={{ color: "var(--emerald)" }}>{accent}</span>}
      </h2>
      {subtitle && <p style={{ color: "var(--gray-text)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 520, margin: "0.75rem auto 0" }}>{subtitle}</p>}
    </motion.div>
  );
}

export default function ADVFContent() {
  const timelineRef = useRef(null);
  const metiersRef = useRef(null);
  const ctaRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-60px" });
  const metiersInView = useInView(metiersRef, { once: true, margin: "-60px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <>
      <PageHero
        tag="Formation professionnelle"
        title="Formation ADVF —"
        titleAccent="Auxiliaire de Vie aux Familles"
        subtitle="Une formation certifiante reconnue par l'État pour exercer un métier porteur de sens. Deux rythmes disponibles pour s'adapter à votre situation."
        image="https://images.unsplash.com/photo-1576765608866-5b51046452be?w=1200&q=80"
        imageAlt="Formation ADVF"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Formations" }, { label: "ADVF" }]}
        badgeIcon={<Shield size={12} />}
        badgeLabel="Certifié par l'État — Titre RNCP"
      />

      {/* Deux cursus */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--bg-light)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.5rem" }}>
            {[
              {
                tag: "Cursus complet", duration: "9 mois", color: "var(--emerald)", bg: "var(--emerald-light)",
                icon: <Award size={24} />,
                desc: "Le parcours certifiant idéal pour une reconversion professionnelle complète. Formation théorique en ligne + stage en présentiel.",
                points: ["Tout profil accepté", "Formation e-learning flexible", "Stage pratique encadré", "Titre professionnel RNCP"],
              },
              {
                tag: "Cursus accéléré", duration: "3 à 6 mois", color: "var(--gold)", bg: "var(--gold-light)",
                icon: <Clock size={24} />,
                desc: "Pour les professionnels expérimentés du secteur souhaitant valider leurs acquis et obtenir la certification officielle.",
                points: ["Expérience professionnelle requise", "Validation des acquis d'expérience", "Planning adapté à vos dispo", "Certification accélérée"],
              },
            ].map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(13,33,55,0.12)" }}
                style={{ background: "white", borderRadius: 20, padding: "2rem", border: "1px solid rgba(13,33,55,0.07)", boxShadow: "0 4px 20px rgba(13,33,55,0.06)" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                  <div>
                    <span style={{ background: c.color, color: "white", fontSize: "0.7rem", fontWeight: 700, padding: "0.25rem 0.7rem", borderRadius: 100, textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.tag}</span>
                    <h3 style={{ fontFamily: "Syne,sans-serif", fontSize: "2rem", fontWeight: 800, color: "var(--navy)", margin: "0.6rem 0 0.2rem", letterSpacing: "-0.02em" }}>{c.duration}</h3>
                  </div>
                  <div style={{ background: c.bg, color: c.color, borderRadius: 12, padding: "0.7rem", display: "flex" }}>{c.icon}</div>
                </div>
                <p style={{ color: "var(--gray-text)", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>{c.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem" }}>
                  {c.points.map(p => (
                    <li key={p} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.86rem", color: "var(--navy)", marginBottom: "0.5rem" }}>
                      <CheckCircle size={14} color={c.color} /> {p}
                    </li>
                  ))}
                </ul>
                <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "1.2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <p style={{ fontSize: "0.72rem", color: "var(--gray-text)" }}>Tarif</p>
                    <p style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, color: "var(--navy)" }}>Sur devis</p>
                  </div>
                  <Link href="/nous-contacter" style={{ background: c.color, color: "white", padding: "0.6rem 1.2rem", borderRadius: 8, fontWeight: 600, fontSize: "0.85rem", textDecoration: "none" }}>
                    Demander un devis
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline chronologique */}
      <section style={{ padding: "6rem 1.5rem", background: "white" }} ref={timelineRef}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader tag="Programme" title="Le déroulé de votre" accent="formation en 9 mois"
            subtitle="Un parcours progressif et structuré, de la théorie à la certification officielle."
            inView={timelineInView} />
          <Timeline items={timelineItems} />
          <motion.p initial={{ opacity: 0 }} animate={timelineInView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
            style={{ textAlign: "center", color: "var(--gray-text)", fontSize: "0.85rem", marginTop: "3rem", fontStyle: "italic" }}>
            * Le cursus accéléré (3-6 mois) adapte ce programme selon votre profil et vos acquis professionnels.
          </motion.p>
        </div>
      </section>

      {/* Débouchés métiers */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--bg-light)" }} ref={metiersRef}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader tag="Débouchés" title="Les métiers" accent="qui s'ouvrent à vous"
            subtitle="Avec le titre ADVF, vous accédez à des postes stables et valorisés dans le secteur de l'aide à la personne."
            inView={metiersInView} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "1.2rem" }}>
            {metiers.map((m, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} animate={metiersInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(13,33,55,0.1)" }}
                style={{ background: "white", borderRadius: 16, padding: "1.8rem 1.5rem", textAlign: "center", border: "1px solid rgba(13,33,55,0.07)", boxShadow: "0 2px 12px rgba(13,33,55,0.05)" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: "var(--emerald-light)", color: "var(--emerald)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                  {m.icon}
                </div>
                <h3 style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--navy)", marginBottom: "0.5rem" }}>{m.title}</h3>
                <p style={{ color: "var(--gray-text)", fontSize: "0.84rem", lineHeight: 1.6 }}>{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — affiché dans Google */}
      <FAQSection />

      {/* CTA */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--navy)", textAlign: "center" }} ref={ctaRef}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={ctaInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 800, color: "white", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
              Prêt à commencer<br /><span style={{ color: "var(--gold)" }}>votre formation ADVF ?</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "2rem" }}>
              Nos conseillers étudient votre profil et vous orientent vers le cursus le plus adapté à votre situation.
            </p>
            <Link href="/nous-contacter"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "var(--emerald)", color: "white", padding: "0.95rem 2rem", borderRadius: 10, fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
              Demander un rendez-vous <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

const faqItems = [
  {
    question: "Quelle est la durée de la formation ADVF ?",
    answer: "La formation ADVF est disponible en deux cursus : un cursus complet de 9 mois pour les personnes souhaitant une reconversion complète, et un cursus accéléré de 3 à 6 mois pour les professionnels déjà expérimentés dans le secteur de l'aide à la personne.",
  },
  {
    question: "La formation ADVF est-elle reconnue par l'État ?",
    answer: "Oui, la formation ADVF de Twelvelin Formation est certifiée par l'État. Elle permet d'obtenir le titre professionnel ADVF inscrit au Répertoire National des Certifications Professionnelles (RNCP), reconnu dans toute la France.",
  },
  {
    question: "Peut-on suivre la formation ADVF en ligne ?",
    answer: "Oui, la formation comprend des modules théoriques disponibles en e-learning, accessibles à votre rythme. La partie pratique se déroule en présentiel, sous forme de stages dans des structures agréées.",
  },
  {
    question: "Quels sont les débouchés après une formation ADVF ?",
    answer: "Après la formation ADVF, vous pouvez exercer comme aide à domicile, employé familial, garde d'enfants, ou assistant de vie auprès de personnes âgées ou en situation de dépendance. Le secteur de l'aide à la personne recrute activement et offre des emplois stables.",
  },
  {
    question: "Quel est le prix de la formation ADVF ?",
    answer: "Le tarif de la formation ADVF est établi sur devis, en fonction de votre profil et du cursus choisi. Contactez-nous pour obtenir une proposition personnalisée adaptée à votre situation.",
  },
];

function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section style={{ padding: "6rem 1.5rem", background: "white" }} ref={ref}>
      <FAQJsonLd items={faqItems} />
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ marginBottom: "3rem", textAlign: "center" }}>
          <span style={{ color: "var(--emerald)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Questions fréquentes</span>
          <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(1.6rem,3.5vw,2.2rem)", fontWeight: 800, color: "var(--navy)", marginTop: "0.5rem", marginBottom: "0", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            Tout savoir sur la formation ADVF
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqItems.map((item, i) => (
            <FAQItem key={i} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ item, index, inView }: { item: { question: string; answer: string }; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      style={{ background: "var(--bg-light)", borderRadius: 14, overflow: "hidden", border: "1px solid rgba(13,33,55,0.07)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", padding: "1.2rem 1.5rem", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
      >
        <span style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "var(--navy)" }}>{item.question}</span>
        <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: "50%", background: open ? "var(--emerald)" : "rgba(13,33,55,0.08)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s", color: open ? "white" : "var(--navy)", fontSize: "1.1rem", lineHeight: 1 }}>
          {open ? "−" : "+"}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ overflow: "hidden" }}
      >
        <p style={{ padding: "0 1.5rem 1.2rem", color: "var(--gray-text)", fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>
          {item.answer}
        </p>
      </motion.div>
    </motion.div>
  );
}
