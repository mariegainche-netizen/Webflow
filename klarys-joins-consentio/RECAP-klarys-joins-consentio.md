# Klarys joins Consentio : récap de session

Sessions du 24 et du 26/09/2026, site Webflow « Consentio 2026 » (`6aaaafd0271107b340148c86`).

## Statut

- **Page « Klarys joins Consentio » construite, câblée et animée, en brouillon.** À vérifier en Preview, puis publication par Marie.
- **Vert corrigé sur tout le site (24/09)** : 94 classes et 106 valeurs passées de `#07372D` à `#05312D`.
- **Autres couleurs hors charte corrigées (26/09)** : Deep Lovable `#0D4A3A` (5 classes) et texte foncé Lovable `#12211C` (11 classes). Le lime Lovable `#A4EF28` avait déjà été corrigé par une autre session. Contrôle côté Webflow : 0 occurrence restante de `#07372D`, `#A4EF28` et `#0D4A3A` (section 4).
- **Animations Lovable reproduites en Interactions natives (26/09)** : 5 Interactions Webflow, 0 script (section 5).
- **About Us non touchée** : elle relève de la session « Company Page Creation ».
- **⚠ À lire avant de publier** : la case Draft a été retrouvée décochée le 24/09 puis le 26/09, et le site a été publié pendant ces fenêtres. La page est probablement visible sur le domaine de test (« Pièges et à faire », point 1). Elle est de nouveau en brouillon depuis le 26/09 à 9 h 48.

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

- **100 % Webflow natif** : 0 script, 0 embed de code. Les 3 lignes vertes décoratives sont des éléments SVG natifs (Custom Element), modifiables dans le panneau Settings. Les animations sont des Interactions natives (section 5).
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
- Variables de couleur de la charte (panneau Variables, collection « default ») : « Vert charte » `#05312D`, « Lime charte » `#A3EA34`, « Deep charte » `#0A3E36` et « Noir charte » `#161616`. Les deux dernières ont été créées le 26/09. Modifier une variable met à jour toutes les classes qui l’utilisent.

## 3. Classes créées (préfixe `kl-`)

33 classes et 7 combos, toutes natives (panneau Style). Miroir CSS : `kl-classes.css`. Structure HTML : `sections.html`.

- **Hero** : `kl-hero`, `kl-hero-img`, `kl-hero-overlay`, `kl-flow-hero`
- **Communes** : `kl-container`, `kl-label`, `kl-dot`, `kl-h1`, `kl-lead`, `kl-ctas`, `kl-btn-outline` (avec état hover), `kl-section`, `kl-num`, `kl-head`, `kl-h2`
- **Convergence** : `kl-converge`, `kl-flow-converge`, `kl-converge-grid`, `kl-card`, `kl-card-title`, `kl-node`, `kl-node-dot`
- **Bénéfices** : `kl-benefits`, `kl-flow-benefits`, `kl-benefits-grid`, `kl-benefit`, `kl-benefit-title`
- **Continuité** : `kl-split`, `kl-text`, `kl-list`, `kl-list-item` (avec état natif `last-child`), `kl-list-text`
- **Animation** : `kl-flow-path`, posée sur les 3 tracés SVG
- **Combos** : `is-dark` (sur `kl-label`, `kl-num` et `kl-h2`), `is-deep` et `is-warm` (sur `kl-section`), `is-accent` (sur `kl-card`), `is-drawn` (sur `kl-flow-path`, ajouté par les Interactions)
- **Réutilisée** : `btn-lime-1`, le bouton lime existant du site

## 4. Correction des couleurs sur tout le site

### Vert : `#07372D` devient `#05312D` (24/09)

- Demande : repasser toutes les classes du site sur le vert officiel `#05312D` au lieu de `#07372D`.
- Résultat : **94 classes corrigées, 106 valeurs** :
  - 89 classes existantes (101 valeurs) ;
  - 5 classes `cpy-*` créées par la session Company pendant la passe (5 valeurs).
- Propriétés touchées : `color` (56), `background-color` (21), bordures (21), `background-image` (6), `-webkit-text-stroke-color` (2).
- Opacités conservées : `rgba(7,55,45,x)` devient `rgba(5,49,45,x)`.
- Variables Webflow : aucune ne contenait l’ancien vert.
- Détail ligne par ligne : `correction-vert-05312D.csv`, avec le séparateur « ; » et les colonnes classe, propriété, ancienne valeur, nouvelle valeur et origine. Il s’importe directement dans Google Sheets.

### Lime, Deep et texte foncé Lovable (26/09)

- **Lime `#A4EF28`** : déjà corrigé avant le 26/09 par une autre session, dans 36 classes (54 valeurs), qui utilisent maintenant la variable « Lime charte » ou `#A3EA34` en dur. Rien à refaire.
- **Deep `#0D4A3A`**, corrigé dans 5 classes (9 valeurs) :
  - `consentio-header__burger` : les 4 bordures et la couleur, liées à la variable « Deep charte » ;
  - `c10-bg 2` à `c10-bg 5` : premier arrêt du dégradé, de `rgba(13,74,58,0.9)` à `rgba(10,62,54,0.9)`, soit le Deep charte à 90 %.
- **Texte foncé `#12211C`**, corrigé dans 11 classes, liées à la variable « Noir charte » (Neutral Black `#161616`) : `c2-section`, `c3-section`, `c4-section`, `c5-section`, `c6-section`, `c8-section`, `c9-section`, `book-demo__step`, `csl-card`, `c6-al` et `c6-al-sup-price`.
- Contrôle final par recherche côté Webflow (styles de base, breakpoints et états) : 0 occurrence de `#07372D`, `#A4EF28` et `#0D4A3A`, formes rgba comprises, dans les couleurs, les dégradés et les ombres. `#12211C` ne reste que dans 3 classes `cpy-*` (section 8, point 6).
- Détail ligne par ligne : `correction-couleurs-hors-charte.csv` (74 valeurs, même format que le CSV du vert). La colonne origine distingue « déjà corrigé avant le 26/09 » et « corrigé le 26/09 ».

## 5. Animations (Interactions natives Webflow)

5 Interactions, dans le panneau Interactions du Designer (page Klarys). Valeurs Lovable reprises à l’identique : fondu avec montée de 18 px en 0,7 s, courbe `power4.out` (équivalente au `cubic-bezier(0.22, 1, 0.36, 1)` de Lovable), mêmes délais.

| Interaction | Déclenchement | Effet | ID |
|---|---|---|---|
| Klarys · Hero · apparition au chargement | Chargement de la page | Tracé de la ligne ; label, H1, texte et boutons à 0, 0,06, 0,12 et 0,18 s | `i-1ab3eb6f` |
| Klarys · Hero · parallaxe image | Scroll, lié à la position | L’image descend de 0 à 18 px pendant que le hero sort de l’écran | `i-cf72443d` |
| Klarys · Convergence · apparition au scroll | Haut du bloc `kl-converge` à 85 % de l’écran | Tracé de la ligne ; cartes Klarys, Consentio et « broader platform » à 0, 0,1 et 0,2 s | `i-990ab9ea` |
| Klarys · Bénéfices · apparition au scroll | Haut du bloc `kl-benefits` à 85 % de l’écran | Tracé de la ligne ; bénéfices 01, 02 et 03 à 0, 0,08 et 0,16 s | `i-24185e98` |
| Klarys · Continuité · apparition au scroll | Haut du bloc `kl-split` à 85 % de l’écran | Colonne titre puis colonne texte, à 0 et 0,08 s | `i-2f6ef855` |

- **Une seule lecture** : les apparitions ne se rejouent pas quand on remonte la page.
- **Tracé des lignes sans script** : la classe `kl-flow-path` masque le trait (`stroke-dasharray` et `stroke-dashoffset` à 1, avec l’attribut `pathLength="1"` sur chaque tracé). L’Interaction ajoute le combo `is-drawn` (offset à 0) et la transition CSS de la classe dessine le trait en 2,2 s.
- **Mouvement réduit** (réglage d’accessibilité du visiteur) : les apparitions s’affichent directement dans leur état final et la parallaxe est coupée. Le tracé des lignes joue quand même (2,2 s), comme sur Lovable.
- **Nettoyage** : les attributs `data-draw` et `data-reveal-stagger` hérités de Lovable, sans effet dans Webflow, ont été retirés des 6 éléments qui les portaient.
- Les 2 autres Interactions visibles sur la page (« Toggle Consentio panel from burger » et « from close ») appartiennent au header partagé : non touchées.

## 6. Écarts assumés par rapport à Lovable

- **Animations** : mêmes éléments animés, mêmes durées, délais et courbes. Deux différences mineures de déclenchement, pour un rendu quasi identique :
  - Lovable lance le tracé quand 15 % de la ligne est visible ; Webflow, quand le haut du bloc atteint 85 % de l’écran ;
  - la parallaxe Lovable calcule un décalage continu de −18 à +18 px ; Webflow fait glisser l’image de 0 à 18 px pendant la sortie du hero.
- **CTA final** : c’est le composant existant « CTA Next Step », avec l’image caisse fixe du composant au lieu de l’image hands-market de Lovable. Un seul CTA est ainsi maintenu pour tout le site.
- **Lien secondaire** : « Discover Consentio for retailers » n’est pas repris sous le CTA, puisqu’il figure déjà dans le hero.
- **Section 01** : elle utilise le Deep de la charte, `#0A3E36`, au lieu du deep Lovable.

## 7. About Us : nettoyage

- En début de session, un hero et des classes `c2-co-*` avaient été posés par erreur sur About Us. Tout a été retiré, et About Us reste à la session « Company Page Creation ».
- La page « BACKUP - About Us draft » (`6ab4dec592adff6d620d732a`), créée par cette session, ne sert plus. Elle est à supprimer à la main (Pages, roue dentée, Delete), car l’API ne permet pas de supprimer une page.

## 8. Pièges et à faire

1. **La page a probablement été en ligne sur le domaine de test.**
   - 24/09 : une modification SEO et OG faite via l’API a décoché la case Draft de 12 h 50 à 13 h 33 (heure de Paris). Le site a été publié à 13 h 03, pendant cette fenêtre.
   - 26/09 : case de nouveau trouvée décochée à 9 h 44. Ce n’est pas l’effet d’une écriture d’éléments via l’API (testé) : c’est probablement un réglage de page modifié entre le 24/09 à 13 h 33 et le 26/09 à 9 h 29, par une autre session ou à la main. Le site a été publié à 8 h 50 : si la case était déjà décochée, la page est en ligne sur le domaine de test `webflow.io`, à l’adresse `/en-en/klarys-joins-consentio`, dans sa version sans animations.
   - Remise en brouillon le 26/09 à 9 h 48 : la prochaine publication du site la retirera du domaine de test. Si la case avait été décochée volontairement, il suffit de la décocher à nouveau.
   - Aucun domaine personnalisé n’est connecté : rien n’est visible sur consentio.co.
2. **Publier la page en même temps que le site.** Le lien « Klarys joins Consentio » du footer (composant partagé, toutes les pages) pointe vers cette page. Si le site est publié alors qu’elle est en brouillon, ce lien renvoie une 404.
3. **Réglages de page via l’API.** Toute modification SEO ou OG faite via l’API sans `draft: true` décoche la case Draft. Après chaque intervention automatisée, revérifier cette case. Les écritures d’attributs sur les éléments, elles, ne la touchent pas (testé le 26/09).
4. **Langues FR et ES.** Le site a 3 langues : anglais en langue principale (`/en-en/`), espagnol (`/es-es/`) et français (`/fr-fr/`). La page existe donc aussi en `/fr-fr/` et `/es-es/`, avec le texte anglais tant qu’elle n’est pas traduite. Deux options : la traduire (possible via l’outil de localisation) ou ne pas la publier dans ces langues. Point prévu à partir du lundi 28/09.
5. **Lien URL du CTA.** Le lien `/request-demo` du composant CTA Next Step est un lien URL : il ne suit pas la langue et passe par une redirection vers `/en-en/`. Pour le fiabiliser, le passer en lien de type page dans le Designer (instance CTA, panneau Props, champ Lien, page Request Demo). Le Designer accepte le type page, contrairement à l’API.
6. **Session Company.**
   - Son bouton « Read the announcement » doit pointer vers la page « Klarys joins Consentio » (lien de type page).
   - Ses classes `cpy-*` utilisent encore la palette Lovable, hors charte : `#F8F9F3` (11 classes), `#606964` (8), `#DEE1DE` (4), `#12211C` (3), `#F1FAF2`, `#FDFEFC` et `#0E4633` (1 chacune), et une police monospace (12 classes). Seuls le vert et le lime y ont été corrigés : à reprendre à la fin de sa session.
   - Si elle crée de nouvelles classes avec l’ancien vert, le lime ou le texte foncé Lovable, refaire un contrôle à la fin de sa session.
7. **Hors charte restant** (signalé, non modifié) :
   - **Police monospace** héritée de Lovable (par exemple JetBrains Mono) dans 57 classes, dont 45 hors `cpy-*` : numéros, badges et étiquettes des classes `c2-*` à `c9-*` et `rs-feat-*`. La charte impose Manrope : à passer en Manrope 600 comme sur la page Klarys, après validation.
   - **Classes `c6-al*`** : créées le 26/09 au matin par une autre session, avec la palette Lovable (texte foncé et police monospace). Le texte foncé y est corrigé ; si cette session continue, repasser derrière elle.
   - **Opacité 95 %** : second arrêt des dégradés `c10-bg 2` à `c10-bg 5` (`rgba(5,49,45,0.95)`), hors paliers charte. À passer à 90 % pour une charte stricte.
   - **Couleurs du template d’origine** dans les swatches du site : Orange `#F99D1E` (très utilisé), Yellow Green `#98C93C`, Dark Slate Grey `#00453F`, Teal `#00867A`, Chocolate `#EC7505`, les violets `dark`, `medium` et `light`, Seashell et Light Cyan. À trier : les classes qui les utilisent relèvent peut-être d’anciennes pages.
8. **Police Manrope.** Pendant la construction, Webflow a signalé : « Font "Manrope" could not be installed or is unavailable ». Il faut vérifier dans Site settings, Fonts, que Manrope est installée (Google Fonts, graisses 400 à 800). Sinon, le texte s’affiche dans une police de secours. L’ajout prend environ 1 min.
9. **Assets disponibles pour la session Company** : `warehouse-dawn` (`6ab4e0a75dd5c4ada0775022`), `buyer-data` (`6ab4e0a7f92b3dd4ce53f1bd`) et `seafood-packing` (`6ab4ebeb94eb6de7ff706177`).
10. **Page « BACKUP - About Us draft »** : à supprimer (voir la section 7 plus haut).
11. **Les fichiers de ce dossier sont des miroirs.** Webflow fait foi : on modifie dans le Designer, et `kl-classes.css` et `sections.html` ne se mettent pas à jour tout seuls. Les Interactions n’y figurent pas : leur liste est en section 5.
12. **Animations : ce qui peut surprendre.**
    - **Lignes invisibles dans le Designer** : normal, le trait n’est dessiné qu’à l’affichage de la page, quand l’Interaction ajoute `is-drawn`. Pour retoucher une ligne, la sélectionner dans le Navigator. Ne pas retirer la classe `kl-flow-path` ni l’attribut `pathLength="1"` : sans eux, le trait est coupé ou ne s’anime plus.
    - **Flash possible au chargement** : le label, le H1, le texte et les boutons du hero peuvent s’afficher une fraction de seconde avant leur animation. Si c’est visible en Preview, régler leur Initial Appearance (opacité 0) dans le panneau Interactions : l’API ne permet pas de le faire.
    - **Éléments ciblés un par un** : un bloc supprimé puis recréé, ou dupliqué, n’est plus animé. Il faut le re-cibler dans le panneau Interactions.
    - **Parallaxe** : garder l’agrandissement à 108 % de `kl-hero-img`. Sans lui, une bande vide apparaît en haut du hero pendant le scroll.
    - **Mouvement réduit strict** (option) : pour couper aussi le tracé de 2,2 s, ajouter dans le code personnalisé de la page (Head) : `<style>@media (prefers-reduced-motion: reduce) { .kl-flow-path { transition: none; } }</style>`. Ce n’est pas un script, mais c’est hors Designer.
13. **Contrôle en Preview** : desktop, tablette (991 px et moins) et mobile (767 px et moins). Animations à vérifier : apparition du hero au chargement, parallaxe au scroll, tracé des 3 lignes, apparitions décalées des cartes, des bénéfices et des colonnes. Sur tablette et mobile, les lignes de la convergence et des bénéfices sont masquées : c’est voulu.

## Fichiers du dossier

| Fichier | Contenu |
|---|---|
| `RECAP-klarys-joins-consentio.md` | Ce récap |
| `kl-classes.css` | Miroir des 33 classes `kl-*`, des 7 combos et des breakpoints |
| `sections.html` | Structure HTML des 4 sections natives |
| `correction-vert-05312D.csv` | Détail des 106 valeurs de vert corrigées (24/09) |
| `correction-couleurs-hors-charte.csv` | Détail des 74 valeurs lime, deep et texte foncé (26/09) |
| `klarys-desktop.png`, `klarys-mobile.png` | Rendus de contrôle : maquette locale, pas une capture Webflow |
