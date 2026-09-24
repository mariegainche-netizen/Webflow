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

---

## 4. Pièges à éviter

- **Double animation** : pas de `data-reveal` sur un élément qui a déjà une interaction Webflow (panneau ⚡). Cas actuel : section chiffres de la Home (`c2-stats`, « Scroll interaction 3 »), laissée telle quelle.
- **Cascade dans cascade** : OK seulement si la grille est l'**enfant direct** du conteneur animé. Plus profond → double fondu.
- **Parallaxe sur une image de fond plein cadre** : un bord vide apparaît. Toujours sur un cadre photo avec `overflow: hidden`.
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

## 7. Fichiers du repo

| Fichier | Rôle |
|---|---|
| `effets-consentio/effets-head.html` | bloc Head installé (police Manrope, états de départ, activation) |
| `effets-consentio/effets-footer.html` | bloc Footer installé (moteur commenté) |
| `effets-consentio/hero-home-visuel.html` / `.css` | visuel natif du hero (HTML + CSS envoyés à Webflow) |
| `effets-consentio/hero-crate-produce.webp` | photo du hero (asset Webflow `6ab5294af0884069047d39e6`) |
