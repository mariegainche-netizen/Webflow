# Projet Webflow Consentio — mémoire de session

Fichier chargé automatiquement par Claude Code à chaque session dans ce repo.
Il évite à Marie de recoller le contexte projet à chaque fois.

## Qui / quoi

- **Marie Gainche**, Growth Marketer CDD 2 semaines chez Consentio (Sept. 2026, Barcelone/Paris)
- **Consentio** — plateforme B2B tout-en-un pour produits frais (F&L), +7 000 utilisateurs, 4 pays, clients GMS (Carrefour, E.Leclerc, ALDI, Intermarché, METRO, Kroger)
- **Klarys** (klarys.io) — plateforme eProcurement produits frais (F&L, viande, poisson) acquise par Consentio, basée à Rennes. Clients Manor, Bell Food Group.
- **Mission** : audit + fusion des deux sites Webflow (fr.consentio.co + klarys.io/en) en un site unique multilingue

## Stack

Webflow · n8n · HubSpot · Google Workspace · Google Sheets

## URLs de référence

| Lieu | URL |
|---|---|
| **Webflow staging (site en construction)** | https://test-8af0bb.webflow.io |
| Page ES en cours (exemple d'entrée) | https://test-8af0bb.webflow.io/es-es/retailers |
| **Projet Lovable (maquette source)** | https://lovable.dev/projects/880e25e8-2309-4bce-928d-5f03ab2cdd2e |
| Site legacy Consentio | https://fr.consentio.co |
| Site legacy Klarys | https://klarys.io/en |

## Source de vérité design : dossier `lovable-reference/`

Le projet Lovable (TanStack Start + React + TypeScript + Tailwind + shadcn/ui) est copié dans `lovable-reference/`. C'est la **référence design** pour construire chaque page Webflow.

### Structure des pages Lovable → à porter dans Webflow

| Route Lovable | Composant principal | Destination Webflow |
|---|---|---|
| `/` | `components/v2/home.tsx` | Home ✅ livrée J1 (voir `consentio-home-en.html`) |
| `/retailers` | `components/v2/retailers.tsx` (387 l) + `retailers-erp-section.tsx` | For Retailers (en cours) |
| `/suppliers` | `components/v2/suppliers.tsx` (580 l) | For Suppliers |
| `/company` | `components/v2/company.tsx` (437 l) | Company |
| `/platform` | (route mince) | Platform |
| `/resources` + `/resources/:slug` | `resources.tsx`, `resource-detail.tsx`, `resource-card.tsx` | Resources hub + détails |
| `/customer-stories` + `/:slug` | `customer-stories.tsx`, `story-card.tsx` | Case studies |
| `/book-demo` | — | Book a demo (form HubSpot) |
| `/klarys-joins-consentio` | — | Page annonce fusion |
| Legal : `/legal-notice`, `/privacy-policy`, `/cookie-policy` | `legal-page.tsx` | Legal |

### Composants visuels réutilisables (v2/)

`hero-variant`, `trust-strip`, `partner-logos-section`, `kit`, `connected-flow`, `allocation-visual`, `execution-visual`, `deployment-visual`, `forecast-chart` (SVG), `fragmentation-visual`, `integration-architecture`.

### Contenu et data

- `lovable-reference/src/content/en.ts` — copie anglaise (source primaire)
- `lovable-reference/src/data/site.ts` — nav, footer, meta
- `lovable-reference/src/data/resources.ts` — resources
- `lovable-reference/src/assets/logos/` — logos partenaires (carrefour, intermarché, monoprix, biocoop, bell-food-group, manor, agroponiente, blue-whale, primeale, saveol, solarenn, rougeline, mytilimer, ultra-marine, clasol, coast-citrus, coast-tropical, kultive, everest-fresh, reynaud, lagadec-primeurs)
- `lovable-reference/src/assets/v2/` — photos hero/section (buyer-desk, crate-produce, cucumber, hands-market, seafood-line, vine-tomato, warehouse-dawn)

## Design system Consentio — CHARTE OFFICIELLE

**Font** : Manrope (400/500/600/700/800) via Google Fonts

### Palette officielle (identique sur toutes les pages, ne jamais en inventer d'autres — seulement variants 90/60/20/10 % opacité autorisés)

| Nom | Hex | Variable CSS | Usage |
|---|---|---|---|
| Consentio **Dark Green** | `#05312D` | `--forest` | Fond sections sombres, titres, boutons secondaires |
| Consentio **Electric Green** | `#A3EA34` | `--lime` | Accent CTA, pastilles, points actifs |
| Consentio **Light Fresh Green** | `#F3FCEB` | `--fresh` | Fond neutre alternatif, badges soft |
| Consentio **Neutral Black** | `#161616` | `--neutral-black` / `--ink` | Texte principal |
| Consentio **Orange** | `#FF8B00` | `--orange` / `--amber` | Accent secondaire, warnings, KPI d'attention |
| Consentio **Yellow** | `#FFCE00` | `--yellow` | Highlight, badges, notifications |
| Consentio **Mild Red** | `#F9603D` | `--mild-red` | Erreurs, alertes destructives |

### Variables dérivées (compatibilité + confort)

- `--deep: #0A3E36` — variant clair du forest
- `--lime-fg: #05312D` — texte sur fond lime
- `--sand: #F5F6F1` — fond de page (variante du fresh)
- `--muted: #5C6B65` — texte secondaire, labels aide
- `--border: #E4E6E1` — bordures champs, cartes
- `--fg-on-forest: #F3FCEB` — texte sur fond forest
- `--fg-on-forest-muted: #B7C4BE` — texte secondaire sur fond forest

Tokens complets : `consentio-styles.css`.

## Livrables déjà dans le repo

| Fichier | Rôle |
|---|---|
| `consentio-home-en.html` | Home EN standalone (référence de rendu) |
| `body-only-content.html` | Home EN prêt à coller dans un Embed Webflow |
| `consentio-embed-all-in-one.html` | Fallback : CSS + HTML + JS en un seul Embed |
| `consentio-embed-part1.html` / `part2.html` | Fallback : découpe en 2 Embeds |
| `consentio-styles.css` / `.min.css` | Feuille de style Consentio (servie via jsDelivr) — charte officielle |
| `consentio-book-demo-en.html` | Book a demo EN standalone (référence de rendu) |
| `consentio-book-demo-embed.html` | Book a demo EN prêt à coller dans un Embed Webflow |
| `GUIDE-integration-webflow.md` | Guide pas à pas intégration Webflow (home) |
| `GUIDE-book-a-demo.md` | Guide book-a-demo : création form HubSpot + intégration Webflow |
| `RECAP-demain-matin.md` | Récap J2 (Home Webflow staging) |

**HubSpot** — Portal ID Consentio : `144242237` (région `eu1`).

**CSS servi via jsDelivr** :
`https://cdn.jsdelivr.net/gh/mariegainche-netizen/Webflow@<branch>/consentio-styles.min.css`
(remplacer `<branch>` par la branche courante — actuellement `claude/charming-ride-fs49bc`)

## Roadmap 10 jours (rappel)

| Jour | Livrable | Statut |
|---|---|---|
| J1 | Home EN HTML | ✅ |
| J2 | Home Webflow staging + validation Emilien | ✅ |
| J3 | Style Guide + Header/Footer symbols + activation Localization FR/ES | En cours |
| J4 | For Retailers EN | À faire |
| J5 | For Suppliers EN | À faire |
| J6 | Book a demo (HubSpot embed, Portal `144242237`) ✅ livré + Company → 5 pages MVP | Book a demo ✅ |
| J7 | Traduction FR + peuplement Webflow FR | À faire |
| J8 | Traduction ES + peuplement Webflow ES | À faire |
| J9 | QA multi-langue, hreflang, redirections, SEO, Cookies | À faire |
| J10 | Publication prod | À faire |

## Conventions de travail (préférences Marie)

- Réponses **directes, actionnables** — solution la plus rapide en premier
- Anticipe les pièges avant qu'ils arrivent
- Code simple et commenté (Webflow custom code, JS, expressions n8n)
- Google Sheets : formules **françaises**, séparateur `;`
- **Ponctuation française stricte** : « » avec espaces insécables, espace avant `:` `;` `!` `?` — jamais de tirets doubles `--`
- Bullet points avec métriques si pertinent, pas d'intro creuse, pas de conclusion récapitulative
- **Français par défaut**, anglais uniquement si le livrable final l'exige

## Mise à jour du dossier `lovable-reference/`

Quand Marie fournit un nouveau zip export Lovable :

1. Unzip dans `/tmp/claude-0/.../scratchpad/lovable-export/`
2. Remplacer le contenu de `lovable-reference/src/`, `lovable-reference/public/` et les fichiers meta (`package.json`, `roadmap.md`, `AGENTS.md`, `README.md`, `components.json`, `tsconfig.json`, `vite.config.ts`) par les nouveaux
3. Supprimer `src/routeTree.gen.ts` (généré) et `bun.lock` (trop lourd, pas utile en référence)
4. Commit avec message `MAJ export Lovable YYYY-MM-DD`

## Angles morts à surveiller (rappel J2)

- Photos hero : Unsplash placeholder → remplacer par vraies photos Consentio
- Logos Trust strip : validation légale « APPROVAL REQUIRED »
- KPI (3 200+ fournisseurs, 10+ ans) : valider avec le commercial
- Cookies RGPD : Cookiebot ou Axeptio avant go-live prod
- Redirections 301 depuis fr.consentio.co et klarys.io : J9
