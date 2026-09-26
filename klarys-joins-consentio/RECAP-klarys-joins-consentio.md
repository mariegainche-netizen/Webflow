# Klarys joins Consentio : récap de session

Sessions du 24 et du 26/09/2026, site Webflow « Consentio 2026 » (`6aaaafd0271107b340148c86`).

## Statut

- **Page « Klarys joins Consentio » passée en V2 le 26/09 et publiée sur le domaine de test.** La nouvelle version Lovable (`klarys-next.tsx`, bouton V2) remplace la V1 sur la même page : même URL, même SEO. Marie a décoché Draft et publié le site le 26/09 à 15 h 45 pour voir le rendu sur webflow.io.
- **Photo du CEO** : la photo Lovable, mise en place par Marie dans le Designer le 26/09 (asset `6ab7d09835960d164f51aabf`).
- **Composant partagé « CTA Next Step »** : 4 props ajoutés (eyebrow masquable, lien secondaire optionnel), sans effet sur les 2 autres pages qui l’utilisent.
- **Charte** : vert, lime, deep et texte foncé Lovable corrigés sur tout le site les 24 et 26/09 (section 4).
- **About Us non touchée** : elle relève de la session « Company Page Creation ».
- **Vidéo Manor** : élément Video natif de Webflow, ajouté par Marie le 26/09 et vérifié en ligne. Il remplace mes essais (élément personnalisé `iframe`, puis Code Embed), qui ne s’affichaient pas sur le site publié.

## 1. La page

| Réglage | Valeur |
|---|---|
| Nom | Klarys joins Consentio |
| Slug | `klarys-joins-consentio` (URL publiée : `/en-en/klarys-joins-consentio`) |
| ID page | `6ab4ed0fc1f440501102f46b` |
| Statut | Publiée sur le domaine de test (Draft décoché par Marie le 26/09 à 15 h 45) |
| Version | V2 (Lovable `klarys-next.tsx`), en place depuis le 26/09 |
| SEO title | Klarys joins Consentio \| One fresh food procurement platform |
| Meta description | Klarys and Consentio have joined forces to build one integrated platform for fresh food procurement and supplier collaboration. |
| Open Graph | Titre et description copiés du SEO, image `seafood-packing.jpg` |

### Structure V2 (de haut en bas)

| # | Bloc | Contenu | ID élément |
|---|---|---|---|
| 1 | Header 2026 | Composant (instance) | `0f53e460-eb72-44bb-f046-4f06cfd4187b` |
| 2 | Hero `kl-hero` | H1 invisible « Klarys is now part of Consentio. », libellé « Announcement », portrait et citation de Guillaume Humbert, ligne verte | section `5dd88848-7a4c-2a23-3392-15c214f13a97`, citation `4a7cfecb-f398-cff9-e06e-e12b966ecda0` |
| 3 | 01 « What is Klarys? » `kl-section is-deep` | 3 paragraphes, vidéo Manor et sa légende | section `2f52cfbb-3010-90d9-d03b-86ee2d0e582d`, grille `27862d0d-e379-1355-1242-1d6963b5b183` |
| 4 | 02 Continuité `kl-section is-warm` | « For existing customers and users », texte, 3 bénéfices | section `63b781a1-ff53-08d1-ec54-a140994f0dd3` |
| 5 | CTA Next Step | Composant : titre « Discover now how Consentio and Klarys help thousands of companies. », eyebrow masqué, bouton « Book a demo », lien « Discover Consentio for retailers » | `688d7304-9935-d555-621a-8d5b3b887e1f` |
| 6 | Footer 2026 | Composant (instance) | `8bcdd768-2b5d-716b-6adf-66f59dcf7a4f` |

- **100 % Webflow natif** : 0 script, 0 embed de code. La vidéo est l’élément Video natif, la ligne verte un élément personnalisé (Custom Element `svg`), modifiable dans le panneau Settings. Les animations sont des Interactions natives (section 5).
- Contenus : textes de la V2 Lovable, en anglais.
- Retiré de la V1 : image de fond du hero et son voile, titre visible, texte d’accroche et 2 boutons du hero, section « Klarys and Consentio, converging » (cartes et ligne), liste à puces de la continuité, ligne des bénéfices.

### Liens

- CTA Next Step, bouton « Book a demo » : lien URL `/request-demo` (inchangé).
- CTA Next Step, lien secondaire « Discover Consentio for retailers » : lien URL `/retailers`. Via l’API, les props de lien n’acceptent que le type URL.
- Le hero V2 n’a plus de bouton : le seul lien vers la page Retailers est désormais sous le CTA.
- Footer 2026 (composant partagé, présent sur toutes les pages) : le lien « Klarys joins Consentio » pointe vers cette page.

### Images et vidéo

- Portrait : photo Lovable de Guillaume Humbert (asset `6ab7d09835960d164f51aabf`, remplacée par Marie dans le Designer le 26/09), texte alternatif « Guillaume Humbert, CEO ». Cadrage rond centré (`object-position: 50% 50%`).
- Vidéo : témoignage Manor, élément Video natif (`fb61ab80-6533-7d37-78b7-aafd7a517211`) dans le cadre `kl-video-frame`, URL `https://youtu.be/dhKXULAqtdU`, titre « Testimony of Manor, major Swiss retailer using Klarys ». Webflow génère lui-même l’iframe et son format 16:9.
- Image de partage (OG) : `seafood-packing.jpg`, asset `6ab4ebeb94eb6de7ff706177`.

### Responsive (desktop first)

- Jusqu’à 991 px : marges `2.5rem 1.25rem`, H2 `2.25rem`, portrait de 6 rem, citation en `1.25rem`, grille « What is Klarys? » et bénéfices sur 1 colonne.
- Jusqu’à 767 px : H2 `1.875rem`, portrait au-dessus de la citation.
- Jusqu’à 479 px : dans le CTA, le lien secondaire passe sous le bouton.

## 2. Charte appliquée (officielle Consentio)

| Rôle sur la page | Couleur charte | Remplace (Lovable) |
|---|---|---|
| Dark Green : fond du hero, titres | `#05312D` | forest |
| Deep : fond de la section 01 | `#0A3E36` | deep `oklch(0.21 …)` |
| Sand : fond de la section Continuité | `#F5F6F1` | warm |
| Electric Green : points, ligne, anneau du portrait | `#A3EA34` | lime `#A4EF28` |
| Light Fresh Green : texte sur fond vert | `#F3FCEB` | |
| Neutral Black : texte courant | `#161616` | |
| Muted : texte secondaire | `#5C6B65` | |
| Border : filets | `#E4E6E1` | |

- Opacités : uniquement 90, 60, 20 et 10 %. Les opacités Lovable (85, 80, 75, 70, 65, 50, 45, 40, 30, 15 et 5 %) sont ramenées au palier charte le plus proche : anneau du portrait et légendes à 60 %, texte de « What is Klarys? » à 90 %.
- Typographie : Manrope uniquement. Les libellés et légendes en monospace de Lovable passent en Manrope 600. La citation est en italique : Manrope n’ayant pas d’italique, le navigateur incline le texte, exactement comme sur Lovable, qui utilise aussi Manrope.
- Variables de couleur de la charte (panneau Variables, collection « default ») : « Vert charte » `#05312D`, « Lime charte » `#A3EA34`, « Deep charte » `#0A3E36` et « Noir charte » `#161616`. Les deux dernières ont été créées le 26/09. Modifier une variable met à jour toutes les classes qui l’utilisent.

## 3. Classes (préfixe `kl-`)

La V2 utilise 24 classes et 7 combos, toutes natives (panneau Style). Miroir CSS : `kl-classes.css`. Structure HTML : `sections.html`.

- **Hero** : `kl-hero`, `kl-flow-hero`, `kl-flow-path` (et son combo `is-drawn`), `kl-sr-only` (H1 invisible), `kl-quote`, `kl-portrait`, `kl-blockquote`, `kl-quote-caption`
- **Communes** : `kl-container`, `kl-label`, `kl-dot`, `kl-section`, `kl-num`, `kl-h2`, `kl-text`
- **What is Klarys?** : `kl-about-grid`, `kl-video`, `kl-video-frame` (bordure, arrondi et fond du cadre de la vidéo), `kl-video-caption`
- **Continuité** : `kl-split` (marge haute d’1 rem ajoutée), `kl-benefits`, `kl-benefits-grid`, `kl-benefit`, `kl-benefit-title`
- **Combos** : `is-drawn` (sur `kl-flow-path`, ajouté par les Interactions), `is-dark` (sur `kl-label`, `kl-num`, `kl-h2` et `kl-text`, ce dernier créé le 26/09), `is-deep` et `is-warm` (sur `kl-section`)
- **Composant CTA Next Step** : `c10-link` (lien secondaire, créé le 26/09)
- **Classes V1 plus utilisées** (18 classes et 1 combo) : `kl-hero-img`, `kl-hero-overlay`, `kl-h1`, `kl-lead`, `kl-ctas`, `kl-btn-outline`, `kl-head`, `kl-converge`, `kl-flow-converge`, `kl-converge-grid`, `kl-card` (et `is-accent`), `kl-card-title`, `kl-node`, `kl-node-dot`, `kl-flow-benefits`, `kl-list`, `kl-list-item`, `kl-list-text`. Elles restent dans Webflow et dans la section V1 de `kl-classes.css` (section 8, point 14).
- **Réutilisée ailleurs sur le site** : `btn-lime-1`, qui n’est plus sur cette page.

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
- Contrôle final par recherche côté Webflow (styles de base, breakpoints et états) : 0 occurrence de `#07372D`, `#A4EF28` et `#0D4A3A`, formes rgba comprises, dans les couleurs, les dégradés et les ombres. `#12211C` ne reste que dans 3 classes `cpy-*` (section 8, point 8).
- Détail ligne par ligne : `correction-couleurs-hors-charte.csv` (74 valeurs, même format que le CSV du vert). La colonne origine distingue « déjà corrigé avant le 26/09 » et « corrigé le 26/09 ».

## 5. Animations (Interactions natives Webflow)

4 Interactions en V2, dans le panneau Interactions du Designer (page Klarys). Valeurs Lovable reprises à l’identique : fondu avec montée de 18 px en 0,7 s, courbe `power4.out` (équivalente au `cubic-bezier(0.22, 1, 0.36, 1)` de Lovable), mêmes délais.

| Interaction | Déclenchement | Effet | ID |
|---|---|---|---|
| Klarys · Hero · apparition au chargement | Chargement de la page | Tracé de la ligne ; libellé puis portrait et citation, à 0 et 0,06 s | `i-1ab3eb6f` |
| Klarys · What is Klarys? · apparition au scroll | Haut de la grille `kl-about-grid` à 85 % de l’écran | Texte puis vidéo, à 0 et 0,08 s | `i-990ab9ea` |
| Klarys · Continuité · apparition au scroll | Haut du bloc `kl-split` à 85 % de l’écran | Colonne titre puis colonne texte, à 0 et 0,08 s | `i-2f6ef855` |
| Klarys · Bénéfices · apparition au scroll | Haut du bloc `kl-benefits` à 85 % de l’écran | Bénéfices 01, 02 et 03 à 0, 0,08 et 0,16 s | `i-24185e98` |

- **Parallaxe supprimée** (`i-cf72443d`) : la V2 n’a plus d’image de fond dans le hero.
- **Une seule lecture** : les apparitions ne se rejouent pas quand on remonte la page.
- **Tracé de la ligne sans script** : la classe `kl-flow-path` masque le trait (`stroke-dasharray` et `stroke-dashoffset` à 1, avec l’attribut `pathLength="1"`). L’Interaction ajoute le combo `is-drawn` (offset à 0) et la transition CSS de la classe dessine le trait en 2,2 s.
- **Mouvement réduit** (réglage d’accessibilité du visiteur) : les apparitions s’affichent directement dans leur état final. Le tracé de la ligne joue quand même (2,2 s), comme sur Lovable.
- Les 2 autres Interactions visibles sur la page (« Toggle Consentio panel from burger » et « from close ») appartiennent au header partagé : non touchées.

## 6. Écarts assumés par rapport à Lovable (V2)

- **Vidéo** : élément Video natif de Webflow au lieu de l’iframe youtube-nocookie de Lovable. Il passe par youtube.com (via Embedly) : YouTube peut déposer ses cookies dès l’affichage de la page, et pas seulement au clic. À valider avec la politique cookies du site. Pour changer de vidéo : sélectionner l’élément Video, puis coller la nouvelle URL dans ses réglages.
- **H1** : la V2 Lovable n’en a pas. Il est gardé pour le SEO et l’accessibilité, mais invisible à l’écran (classe `kl-sr-only`).
- **CTA final** : composant existant « CTA Next Step », avec son image cagette au lieu des tomates (hands-market) de Lovable. Un seul CTA est ainsi maintenu pour tout le site.
- **Espacement** : le titre « What is Klarys? » est à 1,5 rem sous le « 01 » (1 rem dans Lovable), pour réutiliser `kl-h2` sans nouvelle variante.
- **Déclenchement des animations** : Lovable lance une apparition quand 15 % du bloc est visible ; Webflow, quand le haut du bloc atteint 85 % de l’écran. Le rendu est quasi identique.
- **Fonds** : Deep de la charte `#0A3E36` pour la section 01 et Sand `#F5F6F1` pour la continuité, au lieu des tons Lovable.

## 7. About Us : nettoyage

- En début de session, un hero et des classes `c2-co-*` avaient été posés par erreur sur About Us. Tout a été retiré, et About Us reste à la session « Company Page Creation ».
- La page « BACKUP - About Us draft » (`6ab4dec592adff6d620d732a`), créée par cette session, ne sert plus. Elle est à supprimer à la main (Pages, roue dentée, Delete), car l’API ne permet pas de supprimer une page.

## 8. Pièges et à faire

1. **Photo du CEO** : réglée. Pour la changer plus tard, sélectionner le portrait du hero, puis Replace image dans le panneau Settings. La classe `kl-portrait` garde le cadrage rond et l’anneau lime, et le texte alternatif reste « Guillaume Humbert, CEO ».
2. **Historique de la case Draft et du domaine de test.**
   - 24/09 : une modification SEO et OG faite via l’API a décoché la case Draft de 12 h 50 à 13 h 33 (heure de Paris). Le site a été publié à 13 h 03, pendant cette fenêtre.
   - 26/09 : case de nouveau trouvée décochée à 9 h 44. Ce n’est pas l’effet d’une écriture d’éléments via l’API (testé) : c’est probablement un réglage de page modifié entre le 24/09 à 13 h 33 et le 26/09 à 9 h 29, par une autre session ou à la main. Le site a été publié à 8 h 50 : si la case était déjà décochée, la V1 de la page est en ligne sur le domaine de test `webflow.io`, à l’adresse `/en-en/klarys-joins-consentio`.
   - Remise en brouillon le 26/09 à 9 h 48, puis décochée par Marie à 15 h 45 et site publié : la V2 est en ligne sur `webflow.io`, versions `/fr-fr/` et `/es-es/` comprises (en anglais). Pour la retirer, recocher Draft puis republier.
   - Aucun domaine personnalisé n’est connecté : rien n’est visible sur consentio.co.
3. **Publier la page en même temps que le site.** Le lien « Klarys joins Consentio » du footer (composant partagé, toutes les pages) pointe vers cette page. Si le site est publié alors qu’elle est en brouillon, ce lien renvoie une 404.
4. **Réglages de page via l’API.** Toute modification SEO ou OG faite via l’API sans `draft: true` décoche la case Draft. Après chaque intervention automatisée, revérifier cette case. Les écritures d’attributs sur les éléments, elles, ne la touchent pas (testé le 26/09).
5. **Langues FR et ES.** Le site a 3 langues : anglais en langue principale (`/en-en/`), espagnol (`/es-es/`) et français (`/fr-fr/`). La page existe donc aussi en `/fr-fr/` et `/es-es/`, avec le texte anglais tant qu’elle n’est pas traduite. Deux options : la traduire (possible via l’outil de localisation) ou ne pas la publier dans ces langues. Point prévu le lundi 28/09 à 13 h.
6. **Liens URL du CTA.** Le bouton `/request-demo` et le lien secondaire `/retailers` du composant CTA Next Step sont des liens URL : ils ne suivent pas la langue et passent par une redirection vers `/en-en/`. Pour les fiabiliser, les passer en liens de type page dans le Designer (instance CTA, panneau Props). Le Designer accepte le type page, contrairement à l’API.
7. **Composant CTA Next Step** (partagé, 3 pages). Props ajoutés le 26/09 :
   - « Afficher l’eyebrow » (oui par défaut) ;
   - « Afficher le lien secondaire » (non par défaut), « Lien secondaire texte » et « Lien secondaire ».
   Les 2 autres pages ne changent pas. Sur Klarys : eyebrow masqué, lien secondaire affiché. La description du composant le mentionne.
8. **Session Company.**
   - Son bouton « Read the announcement » doit pointer vers la page « Klarys joins Consentio » (lien de type page).
   - Ses classes `cpy-*` utilisent encore la palette Lovable, hors charte : `#F8F9F3` (11 classes), `#606964` (8), `#DEE1DE` (4), `#12211C` (3), `#F1FAF2`, `#FDFEFC` et `#0E4633` (1 chacune), et une police monospace (12 classes). Seuls le vert et le lime y ont été corrigés : à reprendre à la fin de sa session.
   - Si elle crée de nouvelles classes avec l’ancien vert, le lime ou le texte foncé Lovable, refaire un contrôle à la fin de sa session.
9. **Hors charte restant** (signalé, non modifié) :
   - **Police monospace** héritée de Lovable (par exemple JetBrains Mono) dans 57 classes, dont 45 hors `cpy-*` : numéros, badges et étiquettes des classes `c2-*` à `c9-*` et `rs-feat-*`. La charte impose Manrope : à passer en Manrope 600 comme sur la page Klarys, après validation.
   - **Classes `c6-al*`** : créées le 26/09 au matin par une autre session, avec la palette Lovable (texte foncé et police monospace). Le texte foncé y est corrigé ; si cette session continue, repasser derrière elle.
   - **Opacité 95 %** : second arrêt des dégradés `c10-bg 2` à `c10-bg 5` (`rgba(5,49,45,0.95)`), hors paliers charte. À passer à 90 % pour une charte stricte.
   - **Couleurs du template d’origine** dans les swatches du site : Orange `#F99D1E` (très utilisé), Yellow Green `#98C93C`, Dark Slate Grey `#00453F`, Teal `#00867A`, Chocolate `#EC7505`, les violets `dark`, `medium` et `light`, Seashell et Light Cyan. À trier : les classes qui les utilisent relèvent peut-être d’anciennes pages.
10. **Police Manrope** : installée dans les paramètres du site (Fonts), confirmé par Marie le 26/09.
11. **Assets disponibles pour la session Company** : `warehouse-dawn` (`6ab4e0a75dd5c4ada0775022`), `buyer-data` (`6ab4e0a7f92b3dd4ce53f1bd`) et `seafood-packing` (`6ab4ebeb94eb6de7ff706177`).
12. **Page « BACKUP - About Us draft »** : à supprimer (voir la section 7 plus haut).
13. **Les fichiers de ce dossier sont des miroirs.** Webflow fait foi : on modifie dans le Designer, et `kl-classes.css` et `sections.html` ne se mettent pas à jour tout seuls. Les Interactions n’y figurent pas : leur liste est en section 5.
14. **Classes V1 inutilisées** (section 3). Si la V1 n’est plus utile, Style Manager > Clean up les supprime en un clic. Cette commande ne retire que les classes qu’aucun élément du site n’utilise.
15. **Animations : ce qui peut surprendre.**
    - **Ligne invisible dans le Designer** : normal, le trait n’est dessiné qu’à l’affichage de la page, quand l’Interaction ajoute `is-drawn`. Pour la retoucher, la sélectionner dans le Navigator. Ne pas retirer la classe `kl-flow-path` ni l’attribut `pathLength="1"` : sans eux, le trait est coupé ou ne s’anime plus.
    - **Flash possible au chargement** : le libellé et la citation du hero peuvent s’afficher une fraction de seconde avant leur animation. Si c’est visible en Preview, régler leur Initial Appearance (opacité 0) dans le panneau Interactions : l’API ne permet pas de le faire.
    - **Éléments ciblés un par un** : un bloc supprimé puis recréé, ou dupliqué, n’est plus animé. Il faut le re-cibler dans le panneau Interactions.
    - **Mouvement réduit strict** (option) : pour couper aussi le tracé de 2,2 s, ajouter dans le code personnalisé de la page (Head) : `<style>@media (prefers-reduced-motion: reduce) { .kl-flow-path { transition: none; } }</style>`. Ce n’est pas un script, mais c’est hors Designer.
16. **Contrôle en Preview et sur webflow.io** (republier après chaque modification) : desktop, tablette (991 px et moins) et mobile (767 px et moins). À vérifier : portrait et citation du hero, lecture de la vidéo Manor, lien secondaire du CTA, portrait au-dessus de la citation sur mobile, apparitions décalées et tracé de la ligne du hero.

## Fichiers du dossier

| Fichier | Contenu |
|---|---|
| `RECAP-klarys-joins-consentio.md` | Ce récap |
| `kl-classes.css` | Miroir des classes V2 (24 classes, 7 combos), de `c10-link` et des breakpoints ; section à part pour les classes V1 inutilisées |
| `sections.html` | Structure HTML des 3 sections natives V2 |
| `correction-vert-05312D.csv` | Détail des 106 valeurs de vert corrigées (24/09) |
| `correction-couleurs-hors-charte.csv` | Détail des 74 valeurs lime, deep et texte foncé (26/09) |
| `klarys-desktop.png`, `klarys-mobile.png` | Rendus V2 de contrôle : maquette locale avec l’ancienne photo provisoire et sans vidéo, pas une capture Webflow |
