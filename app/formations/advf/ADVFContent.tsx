"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, Award, Clock, Users, CheckCircle, ArrowRight, BookOpen, Heart, Home, Info } from "lucide-react";
import PageHero from "@/components/UI/PageHero";
import FAQJsonLd from "@/components/seo/FAQJsonLd";
import Timeline from "@/components/UI/Timeline";
import Link from "next/link";

const timelineItems = [
  {
    period: "CCP 1",
    label: "Entretien du domicile",
    title: "Entretenir le logement et le linge d'un particulier",
    desc: "Apprenez à réaliser les prestations d'entretien du logement et du linge dans le respect des règles d'hygiène, de sécurité et des attentes du particulier.",
    details: [
      "Organiser son intervention",
      "Établir une relation professionnelle avec le particulier",
      "Entretenir le logement selon les techniques adaptées",
      "Entretenir le linge et respecter les consignes d'entretien",
      "Réaliser des travaux simples de couture",
      "Appliquer les écogestes et prévenir les risques",
    ],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    imageAlt: "Entretien du logement",
    color: "var(--emerald)",
  },
  {
    period: "CCP 2",
    label: "Accompagnement",
    title: "Accompagner la personne dans les actes essentiels du quotidien",
    desc: "Développez les compétences nécessaires pour accompagner les personnes dans leur vie quotidienne tout en favorisant leur autonomie et leur bien-être.",
    details: [
      "Créer une relation professionnelle avec la personne et son entourage",
      "Prévenir les risques et gérer les situations d'urgence",
      "Accompagner la toilette, l'habillage et les déplacements",
      "Aider à l'alimentation et aux actes essentiels",
      "Favoriser l'autonomie et le lien social",
      "Adapter son intervention aux situations de handicap",
    ],
    image: "https://images.unsplash.com/photo-1576765608866-5b51046452be?w=600&q=80",
    imageAlt: "Accompagnement d'une personne",
    color: "var(--gold)",
  },
  {
    period: "CCP 3",
    label: "Garde d'enfants",
    title: "Assurer le relais du parent dans la garde de l'enfant à domicile",
    desc: "Accompagnez l'enfant dans les actes de la vie quotidienne tout en garantissant sa sécurité, son développement et son épanouissement.",
    details: [
      "Définir le cadre de l'intervention avec le parent",
      "Assurer la sécurité et prévenir les risques",
      "Accompagner les apprentissages et la socialisation",
      "Organiser des activités adaptées",
      "Réaliser les gestes du quotidien : repas, toilette, coucher",
    ],
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80",
    imageAlt: "Garde d'enfant à domicile",
    color: "var(--emerald)",
  },
  {
    period: "Certification",
    label: "Titre Professionnel",
    title: "Validation des compétences et obtention du titre",
    desc: "À l'issue de la formation, les compétences sont évaluées conformément au référentiel officiel du Ministère du Travail.",
    details: [
      "Évaluations formatives tout au long du parcours",
      "Mise en situation professionnelle (1 h 15)",
      "Entretien technique avec le jury (50 min)",
      "Entretien final et dossier professionnel (15 min)",
      "Validation du certificat APS ASD ou SST",
      "Obtention du Titre Professionnel ADVF (RNCP 37715 - Niveau 3)",
    ],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
    imageAlt: "Certification professionnelle",
    color: "var(--gold)",
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

{/* Présentation de la formation */}
function PresentationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const items = [
    {
      title: "Un titre professionnel reconnu",
      desc: "Le Titre Professionnel Assistant de Vie aux Familles (ADVF) est une certification de niveau 3 enregistrée au RNCP (n°37715) délivrée par le Ministère du Travail.",
    },
    {
      title: "Un métier au cœur du quotidien",
      desc: "L’ADVF intervient auprès des enfants, des familles, des personnes âgées ou en situation de handicap pour les accompagner dans les actes essentiels et ordinaires de la vie quotidienne.",
    },
    {
      title: "Une mission d’accompagnement humain",
      desc: "L’assistant de vie contribue au bien-être des personnes accompagnées en respectant leurs habitudes, leurs choix et leur autonomie, dans une démarche de bientraitance.",
    },
    {
      title: "Une approche professionnelle",
      desc: "L’intervention à domicile repose sur des règles d’hygiène, de sécurité et de qualité de service, adaptées aux besoins de chaque situation.",
    },
  ];

  return (
    <section
      ref={ref}
      style={{ padding: "6rem 1.5rem", background: "white" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader
          tag="Formation"
          title="Présentation de la"
          accent="formation ADVF"
          subtitle="Le Titre Professionnel Assistant de Vie aux Familles forme des professionnels capables d’accompagner les personnes dans leur quotidien à domicile."
          inView={inView}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "1.5rem",
          }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 30px rgba(13,33,55,0.08)",
              }}
              style={{
                background: "var(--bg-light)",
                borderRadius: 18,
                padding: "2rem",
                border: "1px solid rgba(13,33,55,0.07)",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "var(--emerald-light)",
                  color: "var(--emerald)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.2rem",
                }}
              >
                <Info size={22} />
              </div>

              <h3
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "var(--navy)",
                  marginBottom: "0.8rem",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "var(--gray-text)",
                  lineHeight: 1.7,
                  fontSize: ".9rem",
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EvaluationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const evaluations = [
    {
      title: "Évaluations continues",
      desc: "Les compétences sont évaluées tout au long de la formation au travers d'évaluations formatives et certificatives afin de mesurer la progression du candidat.",
    },
    {
      title: "Mise en situation professionnelle",
      desc: "Une épreuve pratique de 1 h 15 permettant d'évaluer les compétences professionnelles dans des situations proches des conditions réelles d'exercice.",
    },
    {
      title: "Entretien avec le jury",
      desc: "L'évaluation finale comprend un entretien technique de 50 minutes suivi d'un entretien final de 15 minutes, incluant l'échange autour du dossier professionnel du candidat.",
    },
    {
      title: "Validation de la certification",
      desc: "La compétence relative à la prévention des risques est validée par la présentation d'un certificat APS ASD ou SST en cours de validité. Les épreuves sont organisées conformément au référentiel du Titre Professionnel Assistant de Vie aux Familles.",
    },
  ];

  return (
    <section
      style={{ padding: "6rem 1.5rem", background: "white" }}
      ref={ref}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader
          tag="Certification"
          title="Modalités"
          accent="d'évaluation"
          subtitle="Les compétences sont évaluées tout au long du parcours puis validées lors des épreuves finales du Titre Professionnel ADVF."
          inView={inView}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "1.5rem",
          }}
        >
          {evaluations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 30px rgba(13,33,55,0.08)",
              }}
              style={{
                background: "var(--bg-light)",
                borderRadius: 18,
                padding: "2rem",
                border: "1px solid rgba(13,33,55,0.07)",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "var(--gold-light)",
                  color: "var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.2rem",
                }}
              >
                <Award size={22} />
              </div>

              <h3
                style={{
                  fontFamily: "Syne,sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "var(--navy)",
                  marginBottom: "0.8rem",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "var(--gray-text)",
                  lineHeight: 1.7,
                  fontSize: ".9rem",
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{
            textAlign: "center",
            color: "var(--gray-text)",
            fontSize: ".9rem",
            marginTop: "2.5rem",
            fontStyle: "italic",
          }}
        >
          Durée totale des épreuves certificatives : <strong>2 h 20</strong>.
        </motion.p>
      </div>
    </section>
  );
}

function TeachingMethodsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const methods = [
    {
      title: "Cours théoriques contextualisés",
      desc: "Des apports théoriques permettant d'acquérir les connaissances indispensables aux métiers des services à la personne.",
    },
    {
      title: "Études de cas et mises en situation",
      desc: "Des exercices pratiques inspirés de situations professionnelles réelles afin de développer les compétences attendues.",
    },
    {
      title: "Analyse des pratiques",
      desc: "Des temps d'échange et de réflexion permettant d'améliorer sa posture professionnelle et d'adapter ses interventions.",
    },
    {
      title: "Accompagnement individualisé",
      desc: "Un suivi personnalisé tout au long de la formation pour accompagner la progression de chaque stagiaire.",
    },
    {
      title: "Outils numériques",
      desc: "Des supports et ressources numériques facilitant l'apprentissage, les révisions et le suivi pédagogique.",
    },
  ];

  return (
    <section
      style={{ padding: "6rem 1.5rem", background: "var(--bg-light)" }}
      ref={ref}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader
          tag="Pédagogie"
          title="Modalités"
          accent="pédagogiques"
          subtitle="La formation alterne apports théoriques et mises en situation professionnelles afin de favoriser l'acquisition progressive des compétences."
          inView={inView}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "1.5rem",
          }}
        >
          {methods.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 30px rgba(13,33,55,0.08)",
              }}
              style={{
                background: "white",
                borderRadius: 18,
                padding: "2rem",
                border: "1px solid rgba(13,33,55,0.07)",
                boxShadow: "0 2px 12px rgba(13,33,55,0.05)",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "var(--emerald-light)",
                  color: "var(--emerald)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.2rem",
                }}
              >
                <BookOpen size={22} />
              </div>

              <h3
                style={{
                  fontFamily: "Syne,sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "var(--navy)",
                  marginBottom: "0.8rem",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "var(--gray-text)",
                  lineHeight: 1.7,
                  fontSize: ".9rem",
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
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
        tag="Titre Professionnel"
        title="Formation ADVF —"
        titleAccent="Assistant de Vie aux Familles"
        subtitle="Préparez le Titre Professionnel Assistant de Vie aux Familles (RNCP 37715 – Niveau 3) et développez les compétences nécessaires pour accompagner les personnes dans les actes essentiels et ordinaires de la vie quotidienne."
        image="https://images.unsplash.com/photo-1576765608866-5b51046452be?w=1200&q=80"
        imageAlt="Formation Assistant de Vie aux Familles"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Formations" },
          { label: "ADVF" },
        ]}
        badgeIcon={<Shield size={12} />}
        badgeLabel="RNCP 37715 • Niveau 3"
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
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
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
      </section>

      {/* Présentation de la formation */}
      <PresentationSection />

      {/* Prérequis */}
      <section style={{ padding: "6rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader
            tag="Admission"
            title="Prérequis de la"
            accent="formation"
            subtitle="Cette formation est accessible à toute personne souhaitant exercer dans les métiers des services à la personne, sous réserve de remplir les prérequis suivants."
            inView={true}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                title: "Savoirs fondamentaux",
                desc: "Maîtriser les savoirs de base en français à l'oral et à l'écrit afin de communiquer efficacement avec les personnes accompagnées et les professionnels.",
              },
              {
                title: "Posture professionnelle",
                desc: "Être en capacité d'adopter une posture professionnelle fondée sur le respect, la bienveillance, la discrétion et la bientraitance.",
              },
              {
                title: "Hygiène et sécurité",
                desc: "Être en mesure d'appliquer les règles d'hygiène, de sécurité et de prévention des risques dans le cadre des interventions à domicile.",
              },
              {
                title: "Projet professionnel",
                desc: "Avoir un projet d'insertion, de reconversion ou d'évolution professionnelle dans le secteur des services à la personne.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: "var(--bg-light)",
                  borderRadius: 18,
                  padding: "2rem",
                  border: "1px solid rgba(13,33,55,0.08)",
                }}
              >
                <CheckCircle
                  size={22}
                  color="var(--emerald)"
                  style={{ marginBottom: "1rem" }}
                />

                <h3
                  style={{
                    fontFamily: "Syne,sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginBottom: "0.8rem",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "var(--gray-text)",
                    lineHeight: 1.7,
                    fontSize: ".92rem",
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Modalités Pédagogiques */}
      <TeachingMethodsSection />
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
          <EvaluationSection />
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
  question:"Quels sont les prérequis pour intégrer la formation ?",
  answer:"Il est nécessaire de maîtriser les savoirs de base en français à l'oral et à l'écrit et d'être en capacité de respecter les règles d'hygiène, de sécurité et de bientraitance."
  },
  {
  question:"Comment se déroule la certification ?",
  answer:"La certification comprend une mise en situation professionnelle de 1 h 15, un entretien technique de 50 minutes et un entretien final de 15 minutes devant un jury."
  },
  {
  question:"Quel diplôme obtient-on ?",
  answer:"Vous obtenez le Titre Professionnel Assistant de Vie aux Familles (RNCP 37715 - Niveau 3), délivré par le Ministère du Travail."
  },
  {
  question:"Quels sont les débouchés ?",
  answer:"Assistant de vie aux familles, auxiliaire de vie, aide à domicile ou garde d'enfants à domicile. Une poursuite d'études vers le DEAES est également possible."
  },
  {
  question:"Comment s'inscrire ?",
  answer:"Après le dépôt du dossier d'inscription, un entretien de motivation est organisé afin de valider votre projet professionnel."
  }
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
