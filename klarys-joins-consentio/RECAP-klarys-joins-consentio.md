# Klarys joins Consentio : récap de session

Session du 24/09/2026, site Webflow « Consentio 2026 » (`6aaaafd0271107b340148c86`).

## Statut

- **Page « Klarys joins Consentio » construite et câblée, repassée en brouillon.** À vérifier en Preview, puis publication par Marie.
- **Vert corrigé sur tout le site** : 94 classes et 106 valeurs passées de `#07372D` à `#05312D`. Contrôle final : 0 occurrence restante.
- **About Us non touchée** : elle relève de la session « Company Page Creation ».
- **⚠ À lire avant de publier** : la page a probablement été mise en ligne sur le domaine de test par la publication de 13 h 03 (voir « Pièges et à faire », point 1).

## 1. La page

| Réglage | Valeur |
|---|---|
| Nom | Klarys joins Consentio |
| Slug | `klarys-joins-consentio` (URL publiée : `/en-en/klarys-joins-consentio`) |
| ID page | `6ab4ed0fc1f440501102f46b` |
| Statut | Brouillon (Draft coché) |
| SEO title | Klarys joins Consentio \| One fresh food procurement platform |
| Meta description | Klarys and Consentio have joined forces to build one integrated platform for fresh food procurement and supplier collaboration. |
| Open Graph | Titre et description copiés du SEO, image `seafood-packing.jpg` |

### Structure (de haut en bas)

| # | Bloc | Type | ID élément |
|---|---|---|---|
| 1 | Header 2026 | Composant (instance) | `0f53e460-eb72-44bb-f046-4f06cfd4187b` |
| 2 | Hero : « Klarys is now part of Consentio. » | Section native `kl-hero` | `5dd88848-7a4c-2a23-3392-15c214f13a97` |
| 3 | 01 Convergence : « Klarys and Consentio, converging. » | Section native `kl-section is-deep` | `2f52cfbb-3010-90d9-d03b-86ee2d0e582d` |
| 4 | 02 Bénéfices (3 colonnes) | Section native `kl-section` | `51b6d609-be5d-977f-1df5-1b339267b624` |
| 5 | Continuité : « For existing customers and users » | Section native `kl-section is-warm` | `63b781a1-ff53-08d1-ec54-a140994f0dd3` |
| 6 | CTA Next Step | Composant (instance) avec props | `688d7304-9935-d555-621a-8d5b3b887e1f` |
| 7 | Footer 2026 | Composant (instance) | `8bcdd768-2b5d-716b-6adf-66f59dcf7a4f` |

- **100 % Webflow natif** : 0 script, 0 embed de code. Les 3 lignes vertes décoratives sont des éléments SVG natifs (Custom Element), modifiables dans le panneau Settings.
- Contenus : textes de la dernière version Lovable, en anglais.

### Liens

- Hero, bouton lime `btn-lime-1` « Discover Consentio for retailers » : page Retailers (lien de type page).
- Hero, bouton contour `kl-btn-outline` « Contact the team » : page Request Demo (lien de type page).
- CTA Next Step : titre « See Consentio on your own categories. », texte masqué, bouton « Book a demo », lien URL `/request-demo` (via l’API, la prop lien du composant n’accepte que le type URL).
- Footer 2026 (composant partagé, présent sur toutes les pages) : le lien « Klarys joins Consentio » pointe désormais vers cette page.

### Images

- Hero et image de partage (OG) : `seafood-packing.jpg`, asset `6ab4ebeb94eb6de7ff706177`.

### Responsive (desktop first)

- Jusqu’à 991 px : marges `2.5rem 1.25rem`, H1 `3.75rem`, H2 `2.25rem`, grilles passées sur 1 colonne, lignes décoratives de la convergence et des bénéfices masquées.
- Jusqu’à 767 px : H1 `2.5rem`, H2 `1.875rem`.

## 2. Charte appliquée (officielle Consentio)

| Rôle sur la page | Couleur charte | Remplace (Lovable) |
|---|---|---|
| Dark Green : fond du hero, titres | `#05312D` | forest |
| Deep : fond de la section 01 | `#0A3E36` | deep `oklch(0.21 …)` |
| Sand : fond de la section Continuité | `#F5F6F1` | warm |
| Electric Green : points, lignes, bouton | `#A3EA34` | lime `#A4EF28` |
| Light Fresh Green : texte sur fond vert | `#F3FCEB` | |
| Neutral Black : texte courant | `#161616` | |
| Muted : texte secondaire | `#5C6B65` | |
| Border : filets | `#E4E6E1` | |

- Opacités : uniquement 90, 60, 20 et 10 %. Les opacités Lovable (85, 80, 75, 50, 40, 30, 15 et 5 %) sont ramenées au palier charte le plus proche.
- Typographie : Manrope uniquement. Les labels en monospace de Lovable passent en Manrope 600, capitales, interlettrage `0.22em`.

## 3. Classes créées (préfixe `kl-`)

32 classes et 6 combos, toutes natives (panneau Style). Miroir CSS : `kl-classes.css`. Structure HTML : `sections.html`.

- **Hero** : `kl-hero`, `kl-hero-img`, `kl-hero-overlay`, `kl-flow-hero`
- **Communes** : `kl-container`, `kl-label`, `kl-dot`, `kl-h1`, `kl-lead`, `kl-ctas`, `kl-btn-outline` (avec état hover), `kl-section`, `kl-num`, `kl-head`, `kl-h2`
- **Convergence** : `kl-converge`, `kl-flow-converge`, `kl-converge-grid`, `kl-card`, `kl-card-title`, `kl-node`, `kl-node-dot`
- **Bénéfices** : `kl-benefits`, `kl-flow-benefits`, `kl-benefits-grid`, `kl-benefit`, `kl-benefit-title`
- **Continuité** : `kl-split`, `kl-text`, `kl-list`, `kl-list-item` (avec état natif `last-child`), `kl-list-text`
- **Combos** : `is-dark` (sur `kl-label`, `kl-num` et `kl-h2`), `is-deep` et `is-warm` (sur `kl-section`), `is-accent` (sur `kl-card`)
- **Réutilisée** : `btn-lime-1`, le bouton lime existant du site

## 4. Correction du vert sur tout le site

- Demande : repasser toutes les classes du site sur le vert officiel `#05312D` au lieu de `#07372D`.
- Résultat : **94 classes corrigées, 106 valeurs** :
  - 89 classes existantes (101 valeurs) ;
  - 5 classes `cpy-*` créées par la session Company pendant la passe (5 valeurs).
- Propriétés touchées : `color` (56), `background-color` (21), bordures (21), `background-image` (6), `-webkit-text-stroke-color` (2).
- Opacités conservées : `rgba(7,55,45,x)` devient `rgba(5,49,45,x)`.
- Variables Webflow : aucune ne contenait l’ancien vert.
- Contrôle final : 0 occurrence de `#07372D` ou `rgba(7,55,45,…)`, styles de base, breakpoints et états compris.
- Détail ligne par ligne : `correction-vert-05312D.csv`, avec le séparateur « ; » et les colonnes classe, propriété, ancienne valeur, nouvelle valeur et origine. Il s’importe directement dans Google Sheets.

## 5. Écarts assumés par rapport à Lovable

- **Pas d’animations JS** (parallaxe du hero, tracé animé des lignes, apparitions au scroll) : la page est statique, sans script. Ces effets sont faisables ensuite en Interactions natives Webflow.
- **CTA final** : c’est le composant existant « CTA Next Step », avec l’image caisse fixe du composant au lieu de l’image hands-market de Lovable. Un seul CTA est ainsi maintenu pour tout le site.
- **Lien secondaire** : « Discover Consentio for retailers » n’est pas repris sous le CTA, puisqu’il figure déjà dans le hero.
- **Section 01** : elle utilise le Deep de la charte, `#0A3E36`, au lieu du deep Lovable.

## 6. About Us : nettoyage

- En début de session, un hero et des classes `c2-co-*` avaient été posés par erreur sur About Us. Tout a été retiré, et About Us reste à la session « Company Page Creation ».
- La page « BACKUP - About Us draft » (`6ab4dec592adff6d620d732a`), créée par cette session, ne sert plus. Elle est à supprimer à la main (Pages, roue dentée, Delete), car l’API ne permet pas de supprimer une page.

## 7. Pièges et à faire

1. **La page est probablement déjà en ligne sur le domaine de test.**
   - Le 24/09, une modification SEO et OG faite via l’API a retiré la case Draft : la page est restée hors brouillon de 12 h 50 à 13 h 33 (heure de Paris).
   - Le site a été publié à 13 h 03, pendant cette fenêtre. La page est donc très probablement visible sur le domaine de test `webflow.io` du site, à l’adresse `/en-en/klarys-joins-consentio`. Le site n’a aucun domaine personnalisé connecté, donc rien n’est visible sur consentio.co.
   - Elle est de nouveau en brouillon : la prochaine publication du site la retirera, sauf si la case Draft est décochée avant.
2. **Publier la page en même temps que le site.** Le lien « Klarys joins Consentio » du footer (composant partagé, toutes les pages) pointe vers cette page. Si le site est publié alors qu’elle est en brouillon, ce lien renvoie une 404.
3. **Réglages de page via l’API.** Toute modification SEO ou OG faite via l’API sans `draft: true` décoche la case Draft. Après chaque intervention automatisée, revérifier cette case.
4. **Langues FR et ES.** Le site a 3 langues : anglais en langue principale (`/en-en/`), espagnol (`/es-es/`) et français (`/fr-fr/`). La page existe donc aussi en `/fr-fr/` et `/es-es/`, avec le texte anglais tant qu’elle n’est pas traduite. Deux options : la traduire (possible via l’outil de localisation) ou ne pas la publier dans ces langues.
5. **Lien URL du CTA.** Le lien `/request-demo` du composant CTA Next Step est un lien URL : il ne suit pas la langue et passe par une redirection vers `/en-en/`. Pour le fiabiliser, le passer en lien de type page dans le Designer (instance CTA, panneau Props, champ Lien, page Request Demo). Le Designer accepte le type page, contrairement à l’API.
6. **Session Company.**
   - Son bouton « Read the announcement » doit pointer vers la page « Klarys joins Consentio » (lien de type page).
   - Ses classes `cpy-*` utilisent la palette Lovable, hors charte : `#F8F9F3`, `#12211C`, `#606964`, `#021E14`, `#0E4633`, `#F1FAF2`, `#FDFEFC`, `#DEE1DE` et une police monospace. Seul le vert a été corrigé.
   - Si elle crée de nouvelles classes en `#07372D` après la passe du 24/09, refaire un contrôle à la fin de sa session.
7. **Couleurs hors charte restantes** (non traitées, hors demande) :
   - `#A4EF28`, le lime Lovable, dans 36 classes : à passer en `#A3EA34`. Exemples : `c5-offers__badge`, `c2-offer-price--best`, `c8-cta`, `cs-quote`, `c5-offers__cta`, `Block Quote 4` à `8`, `erp-slider__btn` et plusieurs `cpy-*`.
   - `#0D4A3A` dans 5 classes (`c10-bg 2` à `5`, `consentio-header__burger`) : à passer en Deep `#0A3E36`.
8. **Police Manrope.** Pendant la construction, Webflow a signalé : « Font "Manrope" could not be installed or is unavailable ». Il faut vérifier dans Site settings, Fonts, que Manrope est installée (Google Fonts, graisses 400 à 800). Sinon, le texte s’affiche dans une police de secours. L’ajout prend environ 1 min.
9. **Assets disponibles pour la session Company** : `warehouse-dawn` (`6ab4e0a75dd5c4ada0775022`), `buyer-data` (`6ab4e0a7f92b3dd4ce53f1bd`) et `seafood-packing` (`6ab4ebeb94eb6de7ff706177`).
10. **Page « BACKUP - About Us draft »** : à supprimer (voir le point 6 plus haut).
11. **Les fichiers de ce dossier sont des miroirs.** Webflow fait foi : on modifie dans le Designer, et `kl-classes.css` et `sections.html` ne se mettent pas à jour tout seuls.
12. **Contrôle en Preview** : desktop, tablette (991 px et moins) et mobile (767 px et moins).

## Fichiers du dossier

| Fichier | Contenu |
|---|---|
| `RECAP-klarys-joins-consentio.md` | Ce récap |
| `kl-classes.css` | Miroir des 32 classes `kl-*`, des combos et des breakpoints |
| `sections.html` | Structure HTML des 4 sections natives |
| `correction-vert-05312D.csv` | Détail des 106 valeurs corrigées |
| `klarys-desktop.png`, `klarys-mobile.png` | Rendus de contrôle : maquette locale, pas une capture Webflow |
