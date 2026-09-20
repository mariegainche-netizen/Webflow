# Iteration 2026-09-20 — Nav header desktop

## Contexte

Projet Webflow : `consentio-v2-sept20` (URL Designer : `test-8af0bb.design.webflow.com`)
Page : `Home 2`
Locale observée : ES-ES puis desktop 1212px

## Ce qu'on a observé

Dans le Designer, à 1212px (desktop) :

1. **La nav header n'est pas bien répartie horizontalement.**
   Les éléments s'étalent bord à bord sans respiration. Le container `Navigation Container Full` n'a ni `max-width` ni padding horizontal, donc à mesure que la fenêtre s'agrandit, les liens et boutons se collent aux bords de l'écran.

2. **Les boutons « Consentio login », « Klarys login » et « Book a demo » ont perdu leurs effets hover.**
   Cause probable : le projet `consentio-v2-sept20` est une duplication d'un autre projet Webflow. Les **interactions IX2 ne se copient pas** entre projets Webflow — c'est un piège classique de la plateforme. Les styles CSS (state Hover) ont pu aussi être perdus si les combo classes n'ont pas suivi.

3. **Bonus repéré** : « For retailers » apparaît **en doublon** dans la nav. L'un des deux doit probablement être « For suppliers » (côté producteurs) ou « For buyers ».

4. **Régression responsive** : le bouton hamburger (`Menu Button 2`) ne s'affiche plus sur les breakpoints tablet / mobile landscape / mobile portrait. Sur ces devices, il n'y a plus AUCUN accès à la navigation. Bloquant pour publier. Cause probable : `Display: None` sur `Menu Button 2` hérité de tous les breakpoints, ou `Navigation Menu` + `Div Block 4` restés en `Flex` (au lieu de `None`) sur les breakpoints sous desktop.

5. **Layout tablet cassé** (observé à 820px, breakpoint tablet « Affects 991px and below ») : le logo est **centré** au lieu d'être à gauche, et le `Menu Button 2` est empilé **en dessous** du logo, centré, au lieu d'être à droite sur la même ligne. Cause probable : sur `Navigation Container Full` au breakpoint tablet, le `Display: Flex` a été perdu au profit d'un `Display: Block`, OU le `Justify: Space between` est devenu `Center` — la cascade desktop → tablet n'a pas suivi.

## Structure actuelle de la nav (Navigator)

```
Body
└── Navigation
    └── Navigation
        └── Navigation Container Full          ← container à corriger
            ├── Brand
            │   └── 01_CONSENTIO_LogoColor.png
            ├── Navigation Menu
            │   ├── Navigation Link (For retailers)      ← doublon à corriger
            │   ├── Navigation Link (For retailers)      ← doublon à corriger
            │   ├── Navigation Link (Customer stories)
            │   └── Navigation Link (Resources)
            ├── Div Block 4                     ← wrapper des 3 boutons
            │   ├── Navigation Button 2 (Consentio login)
            │   ├── Navigation Button 2 (Klarys login)
            │   └── Navigation Button 2 (Book a demo)
            └── Menu Button 2 (hamburger mobile)
                └── Icon
```

## Référence visuelle (source de vérité)

Mockup Lovable qui définit le rendu attendu :
**https://preview--explo-consentio-v3.lovable.app/**

Code source du mockup Lovable (fourni par Marie sous forme de ZIP) extrait dans `./lovable-v3-reference/` :
- `header.tsx` — composant nav complet.
- `logo.tsx` — composant logo.
- `button.tsx` — variants de bouton (default, outline, lime, etc.).
- `styles-tokens-extract.css` — variables CSS (couleurs, container, spacings).

Toutes les specs consolidées sont dans `NAV-REFERENCE.md`.

Éléments à reproduire à l'identique sur la nav header du Webflow :

**Structure nav desktop (fond blanc, texte noir/foncé) :**
- Gauche : logo `Consentio` (icône C verte + wordmark).
- Centre : 5 liens dans l'ordre → `For Retailers` · `For Suppliers` · `Customer Stories` · `Resources` · `Company`.
- Droite : 3 boutons dans l'ordre →
  1. `Klarys Login ↗` — style **outline** (bordure fine, fond blanc, texte foncé, icône external link ↗ à droite).
  2. `Consentio Login ↗` — style **outline** identique au précédent.
  3. `Book a demo` — style **solid** lime vif (couleur type `#B8F55B` / vert citron), texte foncé, pas d'icône.

**Container :**
- Max-width centré, padding horizontal généreux.
- Fond blanc pur (pas transparent, pas coloré).
- Nav séparée visuellement du hero vert (elle est au-dessus, pas dedans).

**Delta vs le Webflow actuel :**
- Le Webflow a « For retailers » en doublon → doit être remplacé par « For Suppliers ».
- Il manque le lien « Company » (5e lien).
- Les 2 boutons login sont pleins (fond coloré) → doivent passer en outline avec icône ↗.
- Le « Book a demo » est vert foncé → doit passer en lime vif type `#B8F55B`.

## Décisions prises

- On CORRIGE dans Webflow directement pour le layout, la répartition, et la visibilité responsive (tout est natif).
- On garde 3 boutons dans la nav (pas de dropdown « Log in ▾ »), conforme au mockup Lovable.
- On aligne labels, ordre, styles et couleurs sur le mockup Lovable → il fait référence.
- On ne crée aucune nouvelle classe : on réutilise `Navigation Link`, `Navigation Button 2` existantes, avec **combo classes** (`.is-outline`, `.is-primary`) si besoin de variants — à confirmer sur place selon ce qui existe déjà dans le projet.

Voir `CHECKLIST.md` pour les étapes reproductibles.
