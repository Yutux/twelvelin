# Twelvelin Formation — Site vitrine

Site vitrine professionnel multi-pages pour **Twelvelin Formation**, organisme certifié par l'État spécialisé en formation ADVF et cours d'alphabétisation à Paris.

---

## Sommaire

1. [Stack technique](#stack-technique)
2. [Structure du projet](#structure-du-projet)
3. [Installation en local](#installation-en-local)
4. [Variables d'environnement](#variables-denvironnement)
5. [Déploiement (CI/CD)](#déploiement-cicd)
6. [Pages du site](#pages-du-site)
7. [SEO](#seo)
8. [Cookies & Analytics](#cookies--analytics)
9. [Formulaire de contact](#formulaire-de-contact)
10. [Checklist Phase 2](#checklist-phase-2)

---

## Stack technique

| Technologie | Version | Rôle |
|---|---|---|
| **Next.js** | 16 | Framework principal — App Router |
| **TypeScript** | 5 | Typage statique |
| **Tailwind CSS** | v4 | Styles utilitaires |
| **Framer Motion** | — | Animations et transitions |
| **React Hook Form** | — | Gestion et validation des formulaires |
| **Resend** | — | Envoi d'emails transactionnels |
| **Vercel Analytics** | — | Analytics RGPD-friendly sans cookies |
| **Lucide React** | — | Icônes |

---

## Structure du projet

```
twelvelin/
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD — deploy automatique sur Vercel
│
├── app/
│   ├── layout.tsx              # Layout global (Navbar, Footer, cookies, analytics)
│   ├── page.tsx                # Page d'accueil (one-page)
│   ├── not-found.tsx           # Page 404 personnalisée
│   ├── sitemap.ts              # Sitemap XML généré automatiquement
│   ├── robots.ts               # robots.txt généré automatiquement
│   ├── opengraph-image.tsx     # Image og:image dynamique (1200×630)
│   │
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # API Route — envoi email via Resend
│   │
│   ├── formations/
│   │   ├── advf/               # Page dédiée formation ADVF
│   │   └── alphabetisation/    # Page dédiée alphabétisation
│   │
│   ├── nous-contacter/         # Page contact standalone
│   └── mentions-legales/       # Mentions légales + politique de confidentialité
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Navigation responsive avec dropdown
│   │   └── Footer.tsx          # Pied de page avec liens
│   │
│   ├── sections/               # Sections de la page d'accueil
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── FormationADVF.tsx   # Aperçu ADVF → lien page dédiée
│   │   ├── FormationAlpha.tsx  # Aperçu Alpha → lien page dédiée
│   │   ├── HowItWorks.tsx
│   │   └── Contact.tsx
│   │
│   ├── ui/                     # Composants réutilisables
│   │   ├── PageHero.tsx        # Hero des pages internes
│   │   ├── Timeline.tsx        # Timeline chronologique animée
│   │   ├── CookieBanner.tsx    # Bannière consentement cookies
│   │   ├── CookiePreferencesButton.tsx
│   │   └── ConditionalAnalytics.tsx
│   │
│   └── seo/                    # Données structurées
│       ├── JsonLd.tsx          # EducationalOrganization + Course
│       └── FAQJsonLd.tsx       # FAQPage schema
│
├── lib/
│   └── emailTemplates.ts       # Templates HTML des emails (admin + confirmation)
│
├── public/
│   └── logo.png                # Logo (à remplacer par le vrai)
│
├── .env.example                # Template des variables d'environnement
├── .env.local                  # Variables locales — NE PAS commiter
└── next.config.ts              # Config Next.js (domaines images autorisés)
```

---

## Installation en local

### Prérequis
- Node.js 20+
- npm 9+

### Étapes

```bash
# 1. Extraire l'archive
tar -xzf twelvelin.tar.gz
cd twelvelin

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.example .env.local
# → Remplir .env.local avec les vraies valeurs (voir section suivante)

# 4. Lancer en développement
npm run dev
# → http://localhost:3000

# 5. Build de production (vérification)
npm run build
npm start
```

---

## Variables d'environnement

Créer un fichier `.env.local` à la racine (ne jamais commiter ce fichier) :

```bash
# Clé API Resend — https://resend.com/api-keys
RESEND_API_KEY=re_XXXXXXXXXXXXXXXXXXXXXXXXXX

# Email qui reçoit les demandes du formulaire de contact
CONTACT_EMAIL=contact@twelvelin.fr

# Nom et email expéditeur (doit correspondre à un domaine vérifié sur Resend)
CONTACT_FROM=Twelvelin Formation <noreply@twelvelin.fr>
```

### Sur Vercel (production)

Aller dans **Vercel → Settings → Environment Variables** et ajouter les 3 variables ci-dessus.

> ⚠️ Le domaine `twelvelin.fr` doit être vérifié sur Resend pour pouvoir envoyer depuis `noreply@twelvelin.fr`. Sans ça, utiliser `onboarding@resend.dev` en développement.

---

## Déploiement (CI/CD)

Le pipeline GitHub Actions se déclenche automatiquement à chaque push.

### Mise en place (une seule fois)

**Étape 1 — Créer le repo GitHub**

```bash
git init
git add .
git commit -m "feat: initial commit"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/twelvelin-formation.git
git push -u origin main
```

**Étape 2 — Connecter Vercel**

```bash
npm install -g vercel
vercel login
vercel
# Suivre les instructions — Next.js est détecté automatiquement
```

R�cupérer les identifiants :

```bash
cat .vercel/project.json
# → { "orgId": "xxx", "projectId": "yyy" }
```

**Étape 3 — Ajouter les secrets GitHub**

Aller dans : **GitHub repo → Settings → Secrets and variables → Actions**

| Secret | Où le trouver |
|---|---|
| `VERCEL_TOKEN` | vercel.com → Account Settings → Tokens → Create |
| `VERCEL_ORG_ID` | `.vercel/project.json` → champ `orgId` |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` → champ `projectId` |

### Workflow automatique

| Événement | Action |
|---|---|
| `push` sur `main` | ✅ Build + deploy en **production** |
| Pull Request | ✅ Build + deploy en **preview** + lien commenté sur la PR |
| Échec du build | ❌ Notification GitHub — le deploy est bloqué |

```bash
# Exemple — modifier un texte et déployer
git add .
git commit -m "fix: mise à jour coordonnées client"
git push origin main
# → Site mis à jour en production en ~2 minutes
```

---

## Pages du site

| URL | Description | Type |
|---|---|---|
| `/` | Page d'accueil — one-page avec toutes les sections | Statique |
| `/formations/advf` | Page complète formation ADVF avec timeline et FAQ | Statique |
| `/formations/alphabetisation` | Page complète alphabétisation A1→C1 | Statique |
| `/nous-contacter` | Formulaire de contact standalone | Statique |
| `/mentions-legales` | Mentions légales et politique de confidentialité | Statique |
| `/api/contact` | API d'envoi d'email (formulaire → Resend) | Serverless |
| `/sitemap.xml` | Sitemap pour Google | Auto-généré |
| `/robots.txt` | Directives pour les robots | Auto-généré |
| `/opengraph-image` | Image de partage 1200×630 | Edge function |

---

## SEO

Le site intègre une stratégie SEO complète.

### Ce qui est en place

- **Metadata par page** — `title`, `description`, `canonical`, `og:image` spécifiques à chaque page
- **Open Graph** — partage optimisé sur LinkedIn, Facebook, WhatsApp
- **Twitter Card** — aperçu enrichi sur X/Twitter
- **sitemap.xml** — soumis à Google Search Console
- **robots.txt** — crawl autorisé sur toutes les pages
- **JSON-LD `EducationalOrganization`** — Google reconnaît l'organisme (adresse, téléphone, horaires)
- **JSON-LD `Course`** — fiches formations avec prix, durée, mode (en ligne / présentiel)
- **JSON-LD `FAQPage`** — questions/réponses affichables directement dans Google

### À faire en Phase 2

1. **Google Search Console** — vérifier le domaine et soumettre le sitemap
   - Ajouter le code de vérification dans `app/layout.tsx` :
   ```ts
   verification: { google: "VOTRE_CODE_VERIFICATION" }
   ```

2. **Google Business Profile** — créer/revendiquer la fiche locale du client (gratuit, indispensable pour le SEO local à Paris)

3. **Remplacer les images Unsplash** par les vraies photos du client pour le SEO image

---

## Cookies & Analytics

### Fonctionnement

- La bannière apparaît **1 seconde** après la première visite
- Le choix est sauvegardé dans le `localStorage` sous la clé `twelvelin_cookie_consent`
- Vercel Analytics **ne se charge que si** l'utilisateur a accepté les cookies analytics
- L'utilisateur peut modifier ses préférences à tout moment via **"Gérer mes cookies"** dans le footer

### Types de cookies

| Type | Obligatoire | Description |
|---|---|---|
| Nécessaires | ✅ Toujours actifs | Fonctionnement du site, formulaire |
| Analytics (Vercel) | ❌ Optionnel | Pages visitées, durée — sans données personnelles |

### Conformité RGPD

- Aucun tracker chargé avant consentement
- Consentement explicite et granulaire
- Révocable à tout moment
- Politique de confidentialité dans les mentions légales

---

## Formulaire de contact

### Architecture

```
Utilisateur remplit le formulaire
        ↓
Validation côté client (React Hook Form)
        ↓
POST /api/contact
        ↓
Validation côté serveur
        ↓
Resend envoie 2 emails en parallèle :
  ├── Email admin → CONTACT_EMAIL (coordonnées + message + bouton répondre)
  └── Email confirmation → utilisateur (accusé de réception)
        ↓
R�ponse JSON { success: true } → message de succès affiché
```

### Gestion des erreurs

- Si l'email admin échoue → erreur affichée à l'utilisateur, aucun email envoyé
- Si l'email de confirmation échoue → erreur loggée silencieusement, l'utilisateur voit quand même le succès
- Données invalides → message d'erreur précis retourné (400)

### Templates emails

Les templates sont dans `lib/emailTemplates.ts` :
- `adminEmailHtml()` — email reçu par Twelvelin avec un bouton "Répondre directement"
- `confirmationEmailHtml()` — email de confirmation avec les prochaines étapes

---

## Checklist Phase 2

Ce qui reste à compléter une fois les infos client reçues.

### Contenu client

- [ ] Remplacer le logo `/public/logo.png` par le vrai logo HD
- [ ] Mettre à jour l'adresse réelle dans `lib/emailTemplates.ts`, `components/layout/Footer.tsx` et `components/seo/JsonLd.tsx`
- [ ] Mettre à jour le téléphone et l'email réels (mêmes fichiers)
- [ ] Compléter les mentions légales — SIRET, forme juridique, nom du responsable dans `app/mentions-legales/MentionsContent.tsx`
- [ ] Remplacer le N° déclaration d'activité fictif `11 75 XXXXXXXX`
- [ ] Remplacer les photos Unsplash par les vraies photos du client
- [ ] Ajouter les réseaux sociaux dans `components/seo/JsonLd.tsx` (champ `sameAs`)

### Technique

- [ ] Vérifier le domaine `twelvelin.fr` sur **Resend** pour l'envoi d'emails
- [ ] Ajouter les variables d'environnement sur **Vercel** (`RESEND_API_KEY`, `CONTACT_EMAIL`, `CONTACT_FROM`)
- [ ] Connecter le domaine `twelvelin.fr` sur **Vercel → Settings → Domains**
- [ ] Vérifier la propriété sur **Google Search Console** et soumettre le sitemap
- [ ] Créer la fiche **Google Business Profile** du client
- [ ] Ajouter le code de vérification Google dans `app/layout.tsx`
- [ ] Mettre à jour l'URL de base `https://twelvelin.fr` si le domaine change (chercher dans `app/sitemap.ts`, `app/robots.ts`, `app/layout.tsx`, `components/seo/JsonLd.tsx`)

---

## Commandes utiles

```bash
npm run dev        # Lancer en développement sur localhost:3000
npm run build      # Build de production (vérifie TypeScript + génère les pages)
npm start          # Lancer le build de production en local
npm run lint       # Vérifier le code avec ESLint
```

---

## Auteur

Développé par **[Ton prénom/nom ou pseudo GitHub]**
Contact : [ton email]
