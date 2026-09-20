# Webflow — Consentio & Klarys

Repo qui héberge le code custom (CSS, JS, HTML embed) injecté dans les projets Webflow Consentio et Klarys, servi via **jsDelivr** (CDN gratuit qui pointe directement vers GitHub).

## Structure du repo

```
Webflow/
├── README.md                              ← ce fichier (carte du repo)
├── consentio-styles.css                   ← CSS source (lisible)
├── consentio-styles.min.css               ← CSS minifié (servi en prod via jsDelivr)
├── consentio-embed-all-in-one.html        ← embed complet à coller dans Webflow
├── consentio-embed-part1.html             ← embed découpé partie 1
├── consentio-embed-part2.html             ← embed découpé partie 2
├── body-only-content.html                 ← contenu body seul (sans <head>)
├── consentio-home-en.html                 ← version anglaise de la home
├── GUIDE-integration-webflow.md           ← guide pas-à-pas pour intégrer dans Webflow
├── RECAP-demain-matin.md                  ← récap session initiale (v1)
└── iterations/                            ← une itération = une session de travail
    └── 2026-09-20-nav-header-desktop/     ← ex : session du 20 sept sur la nav desktop
        ├── NOTES.md                       ← contexte, ce qu'on a observé
        └── CHECKLIST.md                   ← étapes à reproduire dans Webflow
```

## Comment ça marche

1. **Les fichiers à la racine** sont figés — ils sont référencés par jsDelivr dans le Designer Webflow (`<link>` dans Head custom code). Ne PAS les déplacer sans mettre à jour l'URL dans Webflow.

2. **Le dossier `iterations/`** est le journal de bord. À chaque nouvelle session de travail (correction bug, nouvelle section, refonte…), on crée un sous-dossier daté avec :
   - `NOTES.md` — le contexte, ce qu'on a observé, les décisions prises
   - `CHECKLIST.md` — les étapes exactes à reproduire dans le Designer Webflow
   - éventuellement des fichiers `.html`, `.css`, `.js` spécifiques à cette itération

## URL jsDelivr en prod

Le CSS est servi depuis la branche `claude/webflow-lovable-mockup-lygkt4` :

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mariegainche-netizen/Webflow@claude/webflow-lovable-mockup-lygkt4/consentio-styles.min.css">
```

Cette URL est stable tant que la branche existe et que les fichiers `.css` restent à la racine.

## Ajouter une nouvelle itération (pour reproduire seule)

```bash
# 1. Créer le dossier daté
mkdir -p iterations/YYYY-MM-DD-nom-court-du-sujet

# 2. Créer NOTES.md et CHECKLIST.md (copier depuis une itération précédente)
cp iterations/2026-09-20-nav-header-desktop/NOTES.md iterations/YYYY-MM-DD-nom-court-du-sujet/
cp iterations/2026-09-20-nav-header-desktop/CHECKLIST.md iterations/YYYY-MM-DD-nom-court-du-sujet/

# 3. Éditer les 2 fichiers avec le contexte du jour
# 4. Commit + push
git add iterations/YYYY-MM-DD-nom-court-du-sujet/
git commit -m "Iteration YYYY-MM-DD — sujet"
git push
```

## Convention de nommage des itérations

`YYYY-MM-DD-sujet-court-en-kebab-case`

Exemples :
- `2026-09-20-nav-header-desktop`
- `2026-09-25-footer-multilingue`
- `2026-10-02-fusion-klarys-en`
