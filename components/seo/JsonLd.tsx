// Composant server — pas besoin de "use client"
// Google lit ces données pour afficher des résultats enrichis

const BASE_URL = "https://twelvelin.fr";

const schemas = {
  // Schéma principal — affiché sur la home et toutes les pages
  organization: {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${BASE_URL}/#organization`,
    name: "Twelvelin Formation",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    image: `${BASE_URL}/opengraph-image`,
    description:
      "Organisme de formation certifié par l'État, spécialisé en formation ADVF (Auxiliaire de Vie aux Familles) et cours d'alphabétisation A1→C1 à Paris.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 rue de la Formation",
      addressLocality: "Paris",
      postalCode: "75000",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-1-23-45-67-89",
      contactType: "customer service",
      availableLanguage: "French",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
    sameAs: [
      // À remplir Phase 2 — LinkedIn, Facebook du client
      // "https://www.linkedin.com/company/twelvelin",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "Déclaration d'activité de formation professionnelle",
      credentialCategory: "certification",
    },
  },

  // Schéma formation ADVF
  "course-advf": {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${BASE_URL}/formations/advf#course`,
    name: "Formation Auxiliaire de Vie aux Familles (ADVF)",
    description:
      "Formation professionnelle certifiante ADVF. Deux cursus disponibles : 9 mois (complet) ou 3 à 6 mois (accéléré). Titre professionnel RNCP reconnu par l'État. Formation en ligne et en présentiel à Paris.",
    url: `${BASE_URL}/formations/advf`,
    image: "https://images.unsplash.com/photo-1576765608866-5b51046452be?w=800&q=80",
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${BASE_URL}/#organization`,
      name: "Twelvelin Formation",
    },
    educationalCredentialAwarded: "Titre professionnel ADVF — RNCP",
    occupationalCredentialAwarded: "Auxiliaire de Vie aux Familles",
    timeToComplete: "P9M", // ISO 8601 — 9 mois
    availableLanguage: "fr",
    inLanguage: "fr",
    courseMode: ["online", "onsite"],
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        name: "Cursus complet ADVF — 9 mois",
        courseMode: ["online", "onsite"],
        duration: "P9M",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
          description: "Tarif sur devis",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "CourseInstance",
        name: "Cursus accéléré ADVF — 3 à 6 mois",
        courseMode: ["online", "onsite"],
        duration: "P3M",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
          description: "Tarif sur devis",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  },

  // Schéma cours alphabétisation
  "course-alpha": {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${BASE_URL}/formations/alphabetisation#course`,
    name: "Cours d'alphabétisation et de français — Niveaux A1 à C1",
    description:
      "Cours d'alphabétisation et de français langue étrangère (FLE) à Paris. Niveaux A1, A2, B1, B2 et C1. Cours individualisés à partir de 10€/heure. Formateurs expérimentés.",
    url: `${BASE_URL}/formations/alphabetisation`,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${BASE_URL}/#organization`,
      name: "Twelvelin Formation",
    },
    availableLanguage: "fr",
    inLanguage: "fr",
    courseMode: ["online", "onsite"],
    hasCourseInstance: [
      { "@type": "CourseInstance", name: "Alphabétisation A1 — Débutant", offers: { "@type": "Offer", price: "10", priceCurrency: "EUR", priceSpecification: { "@type": "UnitPriceSpecification", price: "10", priceCurrency: "EUR", unitText: "HOUR" } } },
      { "@type": "CourseInstance", name: "Alphabétisation A2 — Élémentaire", offers: { "@type": "Offer", price: "10", priceCurrency: "EUR", priceSpecification: { "@type": "UnitPriceSpecification", price: "10", priceCurrency: "EUR", unitText: "HOUR" } } },
      { "@type": "CourseInstance", name: "Alphabétisation B1 — Intermédiaire", offers: { "@type": "Offer", price: "12", priceCurrency: "EUR", priceSpecification: { "@type": "UnitPriceSpecification", price: "12", priceCurrency: "EUR", unitText: "HOUR" } } },
      { "@type": "CourseInstance", name: "Alphabétisation B2 — Avancé", offers: { "@type": "Offer", price: "14", priceCurrency: "EUR", priceSpecification: { "@type": "UnitPriceSpecification", price: "14", priceCurrency: "EUR", unitText: "HOUR" } } },
      { "@type": "CourseInstance", name: "Français C1 — Courant", offers: { "@type": "Offer", price: "15", priceCurrency: "EUR", priceSpecification: { "@type": "UnitPriceSpecification", price: "15", priceCurrency: "EUR", unitText: "HOUR" } } },
    ],
  },
};

type SchemaType = keyof typeof schemas;

export default function JsonLd({ type }: { type: SchemaType }) {
  const schema = schemas[type];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
