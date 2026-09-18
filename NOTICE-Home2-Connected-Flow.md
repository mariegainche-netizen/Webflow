# Connected Flow — Section auto-play stepper (Home 2)

**Objectif :** poser la section « One workflow, from demand plan to synchronized order data » dans la page **Home 2**, avec les 5 étapes (Forecast / Collect / Allocation / Order execution / Modular approach) qui défilent **automatiquement** toutes les 4,5 s.

## Ce que ça fait

- 5 étapes affichées à gauche · visuel dynamique à droite
- **Auto-play** dès que la section entre dans le viewport (IntersectionObserver, seuil 35 %)
- Pause automatique quand la section sort de l'écran ou l'onglet passe en arrière-plan
- Clic ou clavier sur une étape → force l'étape et redémarre le compte à rebours
- Respecte `prefers-reduced-motion` (pas d'auto-play si l'utilisateur l'a désactivé)
- **Aucune action requise** de la part du visiteur

## Intégration Webflow — 3 étapes · 2 minutes

### 1) Dans ta section vide de Home 2

- Ajoute un bloc **Embed** (Add > Embed)
- Colle ce contenu (fichier `snippet-connected-flow-embed.html` du repo) :

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mariegainche-netizen/Webflow@claude/wizardly-cannon-xpo6is/assets/connected-flow.min.css">
<div data-cflow-mount></div>
<script src="https://cdn.jsdelivr.net/gh/mariegainche-netizen/Webflow@claude/wizardly-cannon-xpo6is/assets/connected-flow.min.js" defer></script>
```

- Sauvegarde l'Embed
- **Preview** (⇧ + . dans le Designer)

### 2) Vérifier

- Attendre 2-3 s (jsDelivr peut mettre quelques secondes au premier chargement)
- La section doit apparaître sur fond vert forêt
- Scroller jusqu'à la voir → l'étape 01 est active, puis 02 après 4,5 s, etc.
- Console (F12) : aucune erreur rouge

### 3) Publier

- **Publish** → Publish to Selected Domains
- Ouvre l'URL live pour valider

---

## Personnaliser le contenu

Pour changer les textes, titres, étapes ou visuels : édite le fichier `assets/connected-flow.fragment.html` du repo GitHub, commit, push. Puis dans Webflow, ajoute `?v=2` (ou `v=3`, `v=4`…) à la fin des 2 URLs jsDelivr de l'Embed pour forcer le refresh :

```html
<link ... connected-flow.min.css?v=2">
<script ... connected-flow.min.js?v=2" defer></script>
```

Pourquoi ? jsDelivr cache les fichiers de branche ~12 h. Le paramètre `?v=x` casse le cache immédiatement.

## Changer la durée entre étapes

Dans `assets/connected-flow.min.js`, ligne 3 : `INT=4500` (ms). Passe à 3500 pour plus rapide, 6000 pour plus lent. Push → bump `?v=x`.

---

## Debug express si rien ne s'affiche

| Symptôme | Cause probable | Fix |
|---|---|---|
| Section vide, rien ne charge | URL jsDelivr KO | Ouvrir `https://cdn.jsdelivr.net/gh/mariegainche-netizen/Webflow@claude/wizardly-cannon-xpo6is/assets/connected-flow.min.css` dans le navigateur. Si 404 → vérifier que le repo GitHub est public et la branche existe. |
| CSS chargé mais pas de contenu | HTML fragment KO | Console F12 → onglet Network → chercher `connected-flow.fragment.html`. Si 404 : idem. |
| Section affichée mais pas d'auto-play | JS bloqué par Webflow | Vérifier que l'Embed est bien **dans** la section (pas dans le Header custom code). Vérifier aussi qu'aucun autre script ne throw dans la console avant le nôtre. |
| Auto-play s'arrête après 1-2 étapes | Timer clear par une autre lib | Console F12 → chercher les erreurs. Rare. |
| Ancienne version après update | Cache jsDelivr | Ajouter `?v=X` à la fin des URLs et republier. |

---

## Ce qui est autonome et ce qui ne l'est pas

**Autonome** (fonctionne partout sans dépendance) :
- Le CSS est **scopé** sur `.cflow` — aucun conflit possible avec le reste du site Webflow
- Les variables couleur (`--cf-forest`, `--cf-lime`…) sont redéclarées localement
- Aucune dépendance à jQuery, Webflow.js, GSAP, etc.

**Hérité du site** (utilise ce qui est déjà là) :
- La font **Manrope** — déjà chargée par Webflow via Google Fonts, sinon fallback système
- Rien d'autre

---

## Fichiers dans le repo

| Fichier | Rôle |
|---|---|
| `snippet-connected-flow-embed.html` | Le bloc à coller dans l'Embed Webflow (3 lignes) |
| `assets/connected-flow.min.css` | Le CSS scopé (servi par jsDelivr) |
| `assets/connected-flow.fragment.html` | Le HTML de la section (servi par jsDelivr, fetch par le JS) |
| `assets/connected-flow.min.js` | Le mount + auto-play (servi par jsDelivr) |
| `NOTICE-Home2-Connected-Flow.md` | Cette notice |
