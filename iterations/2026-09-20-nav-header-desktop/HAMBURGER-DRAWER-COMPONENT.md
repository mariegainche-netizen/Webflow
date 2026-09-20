# Hamburger + drawer natifs sur le composant Header Consentio

**Date** : 2026-09-20
**Site** : `consentio-v2-sept2026` (`test-8af0bb`)
**Composant modifié** : `Header Consentio` (id `aac50abf-4721-2768-f552-fe147fcacc55`, propagé sur 6 instances : Home 2 + Retailers + Suppliers + Customer Stories + Legal Notice + Privacy Policy + Cookie Policy)

**Objectif atteint** : hamburger visible sous 992px + drawer overlay qui s'ouvre au clic, entièrement natif Webflow (styles + interactions IX3), zéro custom code JS.

---

## Vue d'ensemble de ce qui a été fait

### Sur la page Home 2

1. Le `NavbarWrapper` Webflow natif cassé a été **caché** (`visibility: false`, réversible — pas supprimé).
2. Une nouvelle **instance du composant `Header Consentio`** a été insérée en tête de body.

### Sur le composant `Header Consentio` (partagé, se propage sur les 6 instances)

3. Ajout de 5 nouvelles classes CSS BEM (cohérentes avec le nommage existant `consentio-header__*`).
4. Ajout responsive : burger visible <992px, nav + ctas cachés <992px.
5. Construction de deux nouveaux éléments enfants dans le composant :
   - `Header Consentio__burger` (DivBlock avec SVG icône hamburger, à l'intérieur de `consentio-header__inner`)
   - `Header Consentio__drawer` (DivBlock overlay full-screen fixed, frère de `consentio-header__inner`, contient close + 5 liens + 3 boutons)
6. Création de deux interactions IX3 :
   - **Open Consentio drawer** — click sur burger → drawer `display: flex`
   - **Close Consentio drawer** — click sur close → drawer `display: none`

---

## Structure DOM finale du composant `Header Consentio`

```
consentio-header (header)
├── consentio-header__inner (div)
│   ├── consentio-header__logo (link, vide)
│   ├── consentio-header__logo (link, avec image)
│   ├── consentio-header__nav (nav)                          [caché sous 992px]
│   │   ├── For Retailers
│   │   ├── For Suppliers
│   │   ├── Customer Stories
│   │   ├── Resources
│   │   └── Company
│   ├── consentio-header__ctas (div)                         [caché sous 992px]
│   │   ├── Consentio Login
│   │   ├── Klarys Login
│   │   └── Book a demo
│   └── consentio-header__burger (div)                       [caché ≥992px, visible <992px]
│       └── SVG icône hamburger (3 lignes horizontales)
└── consentio-header__drawer (div)                           [display none par défaut, flex quand ouvert]
    ├── consentio-header__drawer-close (div)
    │   └── SVG icône X
    └── consentio-header__drawer-inner (div)
        ├── For Retailers
        ├── For Suppliers
        ├── Customer Stories
        ├── Resources
        ├── Company
        ├── Consentio Login
        ├── Klarys Login
        └── Book a demo
```

---

## Comment vérifier que ça marche

1. Ouvre le Designer sur Home 2.
2. Passe au breakpoint **Mobile portrait** (icône mobile en portrait, en haut du canvas).
3. Tu dois voir :
   - Le logo Consentio.
   - Le hamburger à droite (bordure verte foncée, 44×44, coins arrondis 8px).
   - Les liens et boutons desktop cachés.
4. Clique sur **Preview** (icône œil, en haut à droite du Designer).
5. Clique sur le hamburger dans le canvas Preview → un drawer full-screen blanc doit descendre avec les 5 liens + 3 boutons.
6. Clique sur le X en haut à droite du drawer → il se ferme.
7. Test aussi en breakpoint Tablet (le hamburger doit toujours apparaître).
8. Passe en breakpoint Desktop → le hamburger doit disparaître, les liens et boutons desktop réapparaissent.

Si tout fonctionne → **Publish** vers `test-8af0bb.webflow.io` et teste sur un vrai téléphone.

---

## Comment le reproduire toi-même sans moi

### Étape A — Créer les 5 classes CSS

Dans le Designer, sur n'importe quel élément, ouvre le Style panel, tape le nom de la classe dans le sélecteur, appuie Entrée pour créer. Puis applique les propriétés dans le Style panel.

| Classe | Section | Propriétés |
|---|---|---|
| `consentio-header__burger` | Layout | `display: none`, `align-items: center`, `justify-content: center` |
|  | Size | `width: 44px`, `height: 44px` |
|  | Borders | all sides 1px solid `#0d4a3a`, radius 8px |
|  | Backgrounds | color `transparent` |
|  | Typography | color `#0d4a3a` |
|  | Effects | `cursor: pointer` (dans Custom code du style) |
| `consentio-header__drawer` | Position | `Fixed`, top/right/bottom/left `0`, z-index `60` |
|  | Layout | `display: none`, `flex-direction: column` |
|  | Spacing | padding 24px sur les 4 côtés |
|  | Backgrounds | color `#fdfdfc` (blanc token background Lovable) |
|  | Layout | `overflow-y: auto` |
| `consentio-header__drawer-close` | Position | `Absolute`, top 20px, right 20px |
|  | Layout | `display: flex`, `align-items: center`, `justify-content: center` |
|  | Size | `width: 44px`, `height: 44px` |
|  | Backgrounds | `transparent` |
|  | Typography | color `#0d4a3a`, cursor `pointer` |
| `consentio-header__drawer-inner` | Layout | `display: flex`, `flex-direction: column`, `gap: 24px` |
|  | Spacing | `margin-top: 72px`, `margin: 0 auto` |
|  | Size | `max-width: 600px`, `width: 100%` |
| `consentio-header__drawer-link` | Layout | `display: block` |
|  | Spacing | padding 12px 16px |
|  | Typography | color `#0d4a3a`, size 18px, weight 700, text-decoration none |
|  | Backgrounds | radius 8px |

### Étape B — Ajouter les 2 propriétés responsive au breakpoint Tablet

Passe en breakpoint **Tablet**. Sur chaque classe, ajoute `display` :

| Classe | Display en Tablet |
|---|---|
| `consentio-header__burger` | **Flex** |
| `consentio-header__nav` | **None** |
| `consentio-header__ctas` | **None** |

### Étape C — Construire les éléments dans le composant

Ouvre le composant `Header Consentio` (double-clic dessus dans le canvas ou depuis le panneau Components).

À l'intérieur de `consentio-header__inner`, après `consentio-header__ctas`, ajoute :

- Un `Div Block`. Classe : `consentio-header__burger`. Attribut DOM ID : `consentio-burger`.
  - Dedans : un `HTML Embed` avec ce contenu :
    ```html
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="4" x2="20" y1="6" y2="6"></line>
      <line x1="4" x2="20" y1="12" y2="12"></line>
      <line x1="4" x2="20" y1="18" y2="18"></line>
    </svg>
    ```

Après `consentio-header__inner` (frère, pas enfant), ajoute :

- Un `Div Block`. Classe : `consentio-header__drawer`. Attribut DOM ID : `consentio-drawer`.
  - Dedans, 2 enfants :
    - Un `Div Block`. Classe : `consentio-header__drawer-close`. Attribut DOM ID : `consentio-drawer-close`. Contient un `HTML Embed` avec un SVG icône X (adapte le SVG hamburger en changeant les 3 lignes pour 2 lignes croisées).
    - Un `Div Block`. Classe : `consentio-header__drawer-inner`. Contient 8 `Link Block` :
      - 5 avec classe `consentio-header__drawer-link` (liens vers /pour-les-distributeurs, /pour-les-fournisseurs, /cas-clients, /ressources, /entreprise).
      - 2 avec classe `consentio-header__ghost` (liens vers https://app.consentio.co et https://app.klarys.io).
      - 1 avec classe `consentio-header__primary` (lien vers /demander-une-demo).

### Étape D — Créer les 2 interactions IX3

Onglet **Interactions** (droite du Designer, à côté de Style et Settings).

**Interaction 1 : Open Consentio drawer**
1. Sélectionne l'élément `consentio-header__burger` dans le canvas.
2. Panneau Interactions → **+ New interaction**.
3. Type : **Click**.
4. Trigger : **Mouse click (tap)**.
5. Nommer l'interaction : `Open Consentio drawer`.
6. Ajouter une action :
   - Action type : **Set style**.
   - Target : sélectionne `consentio-header__drawer` (l'élément).
   - Property : **Display**.
   - Value : **Flex**.
   - Timing : 0s.
7. Sauve.

**Interaction 2 : Close Consentio drawer**
1. Sélectionne l'élément `consentio-header__drawer-close`.
2. Panneau Interactions → **+ New interaction**.
3. Type : Click.
4. Nommer : `Close Consentio drawer`.
5. Action : Set style → target `consentio-header__drawer` → Display → **None** → 0s.

---

## Ce qui reste optionnel (améliorations futures)

1. **Body scroll lock** quand le drawer est ouvert : Webflow IX3 ne fournit pas d'action native pour `body.style.overflow = "hidden"`. Ce serait ~3 lignes de JS custom si tu veux, mais fonctionnellement le drawer marche sans.
2. **Fermer le drawer au clic sur un lien** : ajouter une action Set style sur chaque `consentio-header__drawer-link` pour fermer le drawer avant que le lien navigue. Reproductible via IX3 (chaque lien reçoit une action Hide sur le drawer). 8 interactions à créer, un peu répétitif mais possible.
3. **Animation fade in/out du drawer** au lieu d'apparition instantanée : dans les interactions IX3, remplacer `Set display flex` par `Fade in opacity 0 → 100%` avec duration `200ms`. Plus fluide visuellement.
4. **Doublon de logo** dans le composant : il y a un `consentio-header__logo` vide + un avec l'image. À nettoyer plus tard.
5. **Refresh du Preview** : après avoir modifié le composant, il faut parfois quitter et rouvrir le Preview pour que les interactions IX3 soient reprises.

---

## Si le drawer ne s'ouvre pas au clic (Preview ou publié)

Ordre de diagnostic :

1. **Vérifie le breakpoint** : le hamburger n'est visible que sous 992px. En desktop, il est censé être caché.
2. **Vérifie que tu es en Preview ou sur le site publié** — les interactions IX3 ne s'exécutent pas dans le Canvas d'édition normal.
3. **Vérifie les 2 interactions dans le panneau Interactions** :
   - Sélectionne `consentio-header__burger` → Interactions → tu dois voir « Open Consentio drawer » listée.
   - Sélectionne `consentio-header__drawer-close` → Interactions → tu dois voir « Close Consentio drawer ».
4. **Inspecte l'élément** en Preview ou site publié (F12 → onglet Elements) : au clic sur le burger, le style inline du drawer doit passer de `display: none` à `display: flex`. Si tu ne vois pas ce changement, l'interaction ne s'exécute pas.
5. **Consulte la console navigateur** (F12 → Console) : si tu vois une erreur en rouge parlant de `webflow.js` ou `ix3`, note-la et remonte-moi.

---

## Références techniques

- Composant Header Consentio : id `aac50abf-4721-2768-f552-fe147fcacc55`.
- Burger element id (dans le composant) : `725d7ba9-4327-5846-7285-29ea579ace3d`.
- Drawer element id (dans le composant) : `4f284996-0475-4b8b-c7d8-991c16e5f123`.
- Drawer close element id (dans le composant) : `41d04a24-788f-e24e-8c21-ed9b4f12c8b6`.
- Interaction Open : `i-46ce50fc`.
- Interaction Close : `i-430bec25`.
- Instance du composant sur Home 2 : `8b9b3802-981b-fcee-70a9-d8fd1baf019c` (elementId dans la page).
- NavbarWrapper cassé caché sur Home 2 : `adbf6078-d130-8372-bd36-bcaae022c3fe`.
