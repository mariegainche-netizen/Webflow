# Résolution native — Hamburger et drawer mobile

**Date** : 2026-09-20
**Site** : `test-8af0bb.design.webflow.com` — `consentio-v2-sept2026`
**Page ciblée** : Home 2 (mais la correction porte sur des classes globales → propage partout où ces classes sont utilisées)

**Objectif** : rendre le hamburger visible et fonctionnel sur tablet + mobile, en s'appuyant à 100 % sur le comportement natif du composant Navbar Webflow. **Zéro ligne de code custom.**

---

## Diagnostic du problème

Le composant Navbar Webflow natif (`NavbarWrapper`, `NavbarMenu`, `NavbarButton`) est déjà en place sur la page. Il devrait gérer nativement :
- Le hamburger visible sous 992px.
- Le drawer qui s'ouvre au clic.
- La fermeture au clic sur un lien.
- Le body scroll lock.

Or, deux CSS custom appliqués aux classes `.navigation-container-full` et `.navigation-menu` empêchaient le comportement natif de se déclencher :

| Classe | Breakpoint | CSS problématique | Effet |
|---|---|---|---|
| `.navigation-menu` | Tablet (medium, ≤991px) | pas de `display: none` (il restait en `inline-flex` hérité de la base) | Le menu reste visible en mobile → le hamburger natif Webflow ne se déclenche pas |
| `.navigation-container-full` | Tablet (medium, ≤991px) | `flex-direction: column` | Les enfants s'empilent verticalement en tablet au lieu de rester en ligne (logo à gauche, hamburger à droite) |

---

## Correction native — 2 clics dans le Designer

Reproductible manuellement, sans code, en moins de 30 secondes.

### Étape 1 — `.navigation-container-full` en Tablet

1. Ouvre le Designer sur n'importe quelle page qui utilise cette nav (ex : Home 2).
2. En haut du canvas, clique sur l'icône **Tablet** (le canvas passe à 991px, l'indicateur en haut à gauche affiche « Affects 991px and below »).
3. Dans le Navigator, clique sur l'élément `Navigation Container Full`.
4. Dans le Style panel (droite) :
   - Section **Layout → Direction** : passe de `Vertical` à **Horizontal** (icône flèche →).
   - Section **Layout → Justify** : sélectionne **Space between** (icône avec espace entre les 3 blocs).
   - Section **Layout → Align** : vérifie que c'est **Center** (icône ligne centrale horizontale).

### Étape 2 — `.navigation-menu` en Tablet

Toujours au breakpoint Tablet.

1. Dans le Navigator, clique sur l'élément `Navigation Menu` (le `NavbarMenu`, enfant de `Navigation Container Full`).
2. Dans le Style panel :
   - Section **Layout → Display** : clique sur **None** (dernière icône, œil barré).

C'est tout. Sauvegarde automatique.

---

## Comment vérifier que ça marche

1. En haut à droite du Designer, clique sur **Preview** (icône œil).
2. Redimensionne la fenêtre à moins de 992px (ou clique sur les icônes Tablet / Mobile en haut à côté du preview).
3. Tu dois voir :
   - Le logo à gauche.
   - Le hamburger à droite, sur la même ligne.
   - Les liens et les boutons desktop cachés.
4. Clique sur le hamburger.
5. Un drawer descend avec les liens de la nav et les 3 boutons empilés.
6. Clique à nouveau sur le hamburger (qui a changé en X ou reste identique selon config).
7. Le drawer se ferme.

Si tout ça marche → la correction native est validée. Publish vers staging (`test-8af0bb.webflow.io`).

---

## Pourquoi c'est mieux qu'une solution avec code custom

- **Aucune dépendance à un fichier externe** (pas de JS custom dans Site settings, pas de repo GitHub qui doit rester en ligne, pas de custom code à maintenir).
- **Tu peux le réparer seule** : 2 clics dans le Designer, aucune connaissance en JS requise.
- **Ne casse pas au duplicate de site** : le comportement natif Webflow suit toujours le composant Navbar.
- **Meilleure accessibilité** : ARIA, focus trap, escape key sont gérés par le runtime Webflow — pas besoin de les recoder.
- **Aucun coût de perf** : le runtime `webflow.js` est chargé de toute façon.

---

## Ce qui reste à faire (hors scope de cette correction)

Ces corrections sont **secondaires** et n'affectent pas le fonctionnement du hamburger. On les traitera dans une itération séparée ou dans une prochaine session.

1. **Doublon** dans `Navigation Menu` : 2 liens « For retailers ». Le deuxième doit devenir « For Suppliers ».
2. **Manque un 5e lien** : « Company » (référence Lovable v3).
3. **Styles boutons login** : actuellement roses (`#fb9acf`), devraient être outline avec bord fin et icône ↗.
4. **Style bouton « Book a demo »** : actuellement `#05312d` (vert foncé) avec `mix-blend-mode: color` et `color: #5c4ebd` (violet illisible) → à passer en variant lime ou forest selon la référence Lovable v3.
5. **Doublon Navbar** : sur Home 2 il y a deux `NavbarWrapper` (l'un caché, l'autre visible). Le caché est un résidu à supprimer.
6. **Header custom `consentio-header` inline** sur Home 2 : caché mais présent, résidu à supprimer.

---

## Si le hamburger ne s'affiche toujours pas après ces 2 clics

Ordre de diagnostic (5 minutes, sans code) :

1. **Vérifie le breakpoint** : tu dois vraiment être en Tablet ou plus petit. En Desktop, le hamburger est censé être caché.
2. **Vérifie que Preview est activé** : les interactions Navbar ne fonctionnent qu'en Preview ou sur le site publié, pas dans le Canvas d'édition.
3. **Vérifie qu'il n'y a pas d'override du `display` sur `.menu-button-2`** : sélectionne le `Menu Button 2` dans le Navigator, breakpoint Tablet, section Layout → Display. Ça doit être `Flex` ou `Block`, PAS `None`. Si c'est None, clique Flex.
4. **Vérifie que le NavbarMenu enfant `.w--open` reçoit bien du contenu** : ouvre le Preview, inspecte l'élément avec F12 sur la page publiée, clique sur le hamburger, regarde si la classe `w--nav-menu-open` apparaît sur le NavbarMenu.

Si aucun des 4 ne fonctionne, refais un screenshot du Style panel sur `.navigation-menu` et `.menu-button-2` au breakpoint Tablet et envoie-moi.
