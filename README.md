# Twelvelin Formation — Site vitrine

Site vitrine multi-pages pour Twelvelin Formation, organisme certifié ADVF et alphabétisation.

## Stack

- **Next.js 16** — App Router
- **TypeScript** + **Tailwind CSS v4**
- **Framer Motion** — animations
- **React Hook Form** — formulaire de contact

---

## Lancer en local

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Déploiement automatique (CI/CD)

| Événement | Action |
|---|---|
| push sur `main` | Deploy **production** Vercel |
| Pull Request | Deploy **preview** + lien commenté sur la PR |

### Étape 1 — Créer le repo GitHub

```bash
git init
git add .
git commit -m "feat: initial commit Phase 1"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/twelvelin-formation.git
git push -u origin main
```

### Étape 2 — Connecter Vercel

```bash
npm install -g vercel
vercel login
vercel
# Suivre les instructions
# Un fichier .vercel/project.json est créé
cat .vercel/project.json
# { "orgId": "xxx", "projectId": "yyy" }
```

### Étape 3 — Ajouter les secrets GitHub

**GitHub repo → Settings → Secrets and variables → Actions → New repository secret**

| Secret | Où le trouver |
|---|---|
| `VERCEL_TOKEN` | vercel.com → Account Settings → Tokens → Create |
| `VERCEL_ORG_ID` | `.vercel/project.json` → champ `orgId` |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` → champ `projectId` |

### Étape 4 — Workflow en place

```bash
git add .
git commit -m "fix: update contact info"
git push origin main
# → Deploy automatique en ~2 min
```

---

## Structure

```
twelvelin/
├── .github/workflows/deploy.yml   # CI/CD
├── app/
│   ├── page.tsx                   # Home one-page
│   ├── formations/advf/
│   ├── formations/alphabetisation/
│   ├── nous-contacter/
│   └── mentions-legales/
├── components/
│   ├── layout/ (Navbar, Footer)
│   ├── sections/ (Hero, Stats, ADVF, Alpha, HowItWorks, Contact)
│   └── ui/ (PageHero, Timeline)
└── public/logo.png
```

---

## Phase 2 — Checklist

- [ ] Formulaire connecté via Resend
- [ ] Vraies coordonnées client
- [ ] Vrai logo + photos
- [ ] Nom de domaine custom
- [ ] SEO (sitemap, og:image)
- [ ] Mentions légales complètes (SIRET réel)
