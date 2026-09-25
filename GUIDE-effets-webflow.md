# Effets du site Consentio 2026 : les reproduire toute seule

> Mis en place le 24/09/2026. Effets repris de la maquette Lovable (apparition au scroll, cascade, ligne qui se dessine, parallaxe, zoom photo).
> **Les effets ne se voient que sur le site publié** (staging `webflow.io` ou prod), jamais dans le Designer.

---

## ⚡ En 30 secondes

- Le « moteur » est déjà installé **une fois pour tout le site** : Site settings › Custom code (bloc `EFFETS CONSENTIO` dans Head **et** dans Footer).
- Pour animer un élément : tu lui ajoutes **un attribut** dans le Designer. Zéro code.
- Sans JavaScript, ou si le visiteur a demandé « moins d'animations » : tout s'affiche normalement, sans effet.

---

## 1. Les 6 attributs

| Effet | Name | Value | Où le poser |
|---|---|---|---|
| Apparition au scroll (fondu + montée 18 px) | `data-reveal` | délai en ms, ex. `120` (vide = 0) | n'importe quel bloc |
| **Cascade** (les enfants arrivent l'un après l'autre) | `data-reveal-stagger` | écart en ms : `80` (sections), `60` (hero, listes) | le **parent direct** des éléments à animer |
| Ligne verte qui se dessine | `data-draw` | vide (ou délai en ms) | le `svg` de la vague (`c2-hero-wave`, `c10-wave`) |
| Parallaxe photo | `data-parallax` | `14` (px) | le **cadre** de la photo, pas l'image |
| Zoom au survol | `data-zoom` | vide | le cadre (overflow hidden) qui contient l'image |
| Flottement lent | `data-float` | vide, ou `2` pour décaler | une carte posée sur une photo |

---

## 2. Pas à pas : 30 s par élément

1. Designer › sélectionne l'élément (Navigator : touche **Z**).
2. Panneau **⚙ Element settings** (touche **D**) › **Custom attributes** › **+**.
3. Name `data-reveal-stagger` · Value `80` › Entrée.
4. **Publish** › staging › vérifie en **navigation privée** (évite le cache).

---

## 3. Recette pour une nouvelle page (5 min)

| Zone | Élément à sélectionner | Attribut |
|---|---|---|
| Hero | la colonne de texte (div qui contient eyebrow, H1, texte, boutons) | `data-reveal-stagger` = `60` |
| Hero | le visuel (photo, cartes) | `data-reveal` = `120` |
| Hero | la vague `c2-hero-wave` | `data-draw` |
| Chaque section | son conteneur (`c2-wrap`, `s3-container`, `c4-container`…) | `data-reveal-stagger` = `80` |
| Grille de cartes **enfant direct** de ce conteneur | la grille | `data-reveal-stagger` = `60` ou `80` → les cartes arrivent une par une |
| Liste CMS | l'élément **Collection List** (pas le Collection List Wrapper) | `data-reveal-stagger` = `80` |
| CTA final | rien : le composant **CTA Next Step** est déjà équipé | — |
| Cadre photo (`overflow: hidden`) | le cadre, pas l'image | `data-zoom` (vide) |

### ⏱ Chrono 5 min : exemple réel, page About Us (22 attributs)

**0:00 → 0:30 · Préparation**
- Designer › page About Us › Navigator (**Z**) › panneau Settings (**D**) : il reste ouvert tout le long.
- Réflexe : pour chaque élément ci-dessous, clic dans le Navigator › Custom attributes › **+** › Name › Value › Entrée (≈ 10 s).

**0:30 → 1:15 · Hero (section `cpy-hero`)**

| Élément (Navigator) | Name | Value |
|---|---|---|
| `cpy-flow-hero` (le svg de la ligne) | `data-draw` | vide |
| `cpy-hero-copy` (colonne de texte) | `data-reveal-stagger` | `60` |
| `cpy-media` (colonne photo) | `data-reveal` | `120` |
| `cpy-photo` (dans `cpy-media`) | `data-zoom` | vide |

**1:15 → 4:00 · Sections 01 à 05 + bloc final** : 1 attribut sur le conteneur, 1 sur la grille, 1 sur chaque ligne ou photo

| Section | Élément | Name | Value |
|---|---|---|---|
| 01 `cpy-sec-light` | `cpy-container` · puis `cpy-grid-2` | `data-reveal-stagger` | `80` · `80` |
| 02 `cpy-sec-deep` | `cpy-flow-top` | `data-draw` | vide |
| 02 | `cpy-center` (le conteneur n'a qu'un enfant : on descend d'un cran) | `data-reveal-stagger` | `80` |
| 03 `cpy-sec-light` | `cpy-container` · puis chaque `cpy-story` | `data-reveal-stagger` | `80` · `80` |
| 03 | chaque `cpy-photo` (2) | `data-zoom` | vide |
| 04 `cpy-sec-tint` | `cpy-container` · puis `cpy-impact-grid` | `data-reveal-stagger` | `80` · `60` |
| 05 `cpy-sec-sand` | `cpy-container` · puis `cpy-avis-grid` | `data-reveal-stagger` | `80` · `80` |
| 05 | `cpy-btn-row` (bouton sous les avis) | `data-reveal` | `400` : il arrive après les cartes |
| Final `cpy-final` | `cpy-flow-final` | `data-draw` | vide |
| Final | `cpy-container` · puis `cpy-final-grid` | `data-reveal-stagger` | `80` · `80` |
| Final | `cpy-photo` | `data-zoom` | vide |

**4:00 → 5:00 · Publier et vérifier**
- **Publish** › staging uniquement › page en **navigation privée**.
- Scroll lent : chaque section arrive en cascade, les 3 lignes vertes se tracent, survol d'une photo = zoom léger.
- Volontairement sans effet : l'image de fond du bloc final (`cpy-final-bg`, plein cadre : une parallaxe ferait apparaître un bord vide).

---

## 4. Pièges à éviter

- **Double animation** : pas de `data-reveal` sur un élément qui a déjà une interaction Webflow (panneau ⚡). Cas actuel : section chiffres de la Home (`c2-stats`, « Scroll interaction 3 »), laissée telle quelle.
- **Cascade dans cascade** : OK seulement si la grille est l'**enfant direct** du conteneur animé. Plus profond → double fondu.
- **Parallaxe sur une image de fond plein cadre** : un bord vide apparaît. Toujours sur un cadre photo avec `overflow: hidden`.
- **Bouton sous une grille en cascade** : sans réglage, il arrive en même temps que la 1re carte. Lui poser `data-reveal` = `400` pour qu'il arrive en dernier.
- **Flottement** : pas sur un élément qui a déjà une transformation (rotation, échelle) dans le Style panel.
- **Header, footer, pop-ups, formulaire HubSpot** : ne rien animer.
- **« Rien ne bouge »** : page bien publiée ? navigation privée ? « Réduire les animations » activé sur ton ordinateur (Windows : Paramètres › Accessibilité › Effets visuels ; Mac : Réglages › Accessibilité › Affichage) ? Console F12 sans erreur rouge ?

---

## 5. Désactiver

- Un élément : supprimer son attribut.
- Tout le site : supprimer les 2 blocs `EFFETS CONSENTIO` dans Site settings › Custom code (Head + Footer), puis Publish.

> Alternative 100 % Webflow : panneau **Interactions (⚡)** › + › Scroll into view › preset « Slide in up ». Plus long (élément par élément) et moins homogène : garder les attributs.

---

## 6. Hero de la Home : ce qui a changé

| | Avant | Après |
|---|---|---|
| Visuel | image PNG aplatie `composition-transparent.png` (1,16 Mo) | vraie photo `hero-crate-produce.webp` (199 Ko) + 2 cartes en éléments Webflow natifs |
| Textes des cartes | figés dans l'image : non traduisibles, non indexés | modifiables dans le Designer, traduisibles FR/ES (Localization) |
| Défaut | l'étiquette « FRESH PRODUCE » masquait le titre de la carte Forecast | étiquette déplacée en haut à droite de la photo |
| Effets | aucun | cascade du texte, ligne dessinée, parallaxe + zoom photo, cartes qui arrivent puis flottent, courbe du graphique qui se trace |
| Mobile portrait | image réduite, textes illisibles | photo seule (cartes masquées) |

- Classes créées : `c2-hv-*` (visuel) · combos `is-forecast`, `is-order`, `is-lime`, `is-muted`, `is-strong`, `is-last`.
- Ancien bloc **masqué, pas supprimé** : `OLD hero image PNG (masquée, à supprimer après validation)`.
- Source du visuel : `effets-consentio/hero-home-visuel.html` + `.css` (repo).

---

## 7. Pages déjà équipées (24/09)

| Page | Effets posés |
|---|---|
| **Home** | hero natif (cascade texte, ligne, photo parallaxe + zoom, cartes qui arrivent puis flottent, courbe tracée) + 7 sections (logos, Why fresh, workflow, Two sides, cas clients CMS, intégrations, CTA final) |
| **Retailers** | hero + 8 sections (problème, workflow, 4 modules, intégration, déploiement) |
| **Suppliers** | hero + 12 sections (cartes, résultats, Magic Orders, Webshop, FAQ, photos, CTA final) |
| **Customer Stories** · **Resources** | hero, filtres, cartes CMS en cascade, CTA final |
| **Modèles CMS** (cas client, article) | en-tête en cascade, corps de texte, liste « à lire aussi », CTA final |
| **Klarys joins Consentio** | hero + 3 sections |
| **About Us** | hero (cascade texte, photo, ligne) + sections 01 à 05 + bloc final : 13 cascades, 3 lignes tracées, zoom au survol sur 4 photos, bouton des avis décalé (détail § 3) |
| **Composant CTA Next Step** | cascade + ligne : vaut pour toutes les pages qui l'utilisent |
| Volontairement sans effet | Request Demo (formulaire affiché sans délai), pages légales, header, footer |
| Pas touché | section chiffres de la Home (interaction Webflow existante) · brouillon « BACKUP - About Us » |

---

## 8. Carrousels de logos (Home · Suppliers)

> Mis en place le 25/09/2026. Ordre de référence : doc « Commentaires divers site web » (Emilien).

- **Une seule collection** pour les deux carrousels : CMS › **Retailers Logo collections** (1 item = 1 logo).
- Le carrousel de la Home est une **copie** de celui de Suppliers : logos gris, défilement continu, pause au survol.
- L'ancien bandeau couleur de la Home est **masqué, pas supprimé** : `OLD logos couleur (masqué, à supprimer après validation)`.

| Je veux… | Dans l'item CMS du logo |
|---|---|
| l'afficher sur la Home | `Show in Home carousel` = ON · `Order (Home)` = sa position (1 = premier) |
| l'afficher sur Suppliers | `Show in Suppliers carousel` = ON · `Order (Suppliers)` = sa position |
| le retirer d'un carrousel | switch correspondant sur OFF (ne pas supprimer l'item : il sert peut-être à l'autre page) |
| ajouter un logo | New item › Name · Logo (PNG fond transparent) · switches · positions |

**Pièges**
- **3 langues** : chaque item existe en EN, FR et ES. Changer une position ou un switch dans **les 3 langues** (sélecteur de langue en haut du CMS), sinon l'ordre diffère selon la version.
- **Logo sans image = invisible** (filtre « Logo is set ») : cas de **Deterra**, positions déjà réservées (19 Home, 8 Suppliers). Il suffit d'ajouter son image dans l'item.
- **Deux logos à la même position** : leur ordre n'est pas garanti. Insérer un logo = décaler les suivants de +1.
- **Rien ne change sur le site** : les modifications CMS ne se voient qu'après **Publish**.
- Le défilement est codé dans **Page settings › Custom code** de chaque page (Home : Head · Suppliers : Head + Footer). Ne pas le copier dans les Site settings : les logos seraient dupliqués deux fois.

**Ordre en place**
- Home (24) : Coast Tropical · Monoprix · Carrefour · Priméale · Intermarché · Agroponiente · Biocoop · Anecoop · Manor Fresh · Blue Whale · Savéol · Kultive · Rougeline · Hoogsteder · Grupo Clasol · Pomelos MBC · Bell · Solarenn · Deterra · Maison Reynaud · Mytilimer · The Greenery · Ultramarine Food · Perle du Nord
- Suppliers (21, fournisseurs uniquement) : Coast Tropical · Priméale · Agroponiente · Anecoop · Blue Whale · Savéol · Kultive · Deterra · Rougeline · Hoogsteder · Grupo Clasol · Everest Fresh · Pomelos MBC · Bell · Solarenn · Maui Fresh International · Perle du Nord · The Greenery · Maison Reynaud · Mytilimer · Ultramarine Food

---

## 9. Fichiers du repo

| Fichier | Rôle |
|---|---|
| `effets-consentio/effets-head.html` | bloc Head installé (police Manrope, états de départ, activation) |
| `effets-consentio/effets-footer.html` | bloc Footer installé (moteur commenté) |
| `effets-consentio/hero-home-visuel.html` / `.css` | visuel natif du hero (HTML + CSS envoyés à Webflow) |
| `effets-consentio/hero-crate-produce.webp` | photo du hero (asset Webflow `6ab5294af0884069047d39e6`) |
