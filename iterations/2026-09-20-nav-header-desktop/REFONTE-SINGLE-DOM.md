# Refonte single-DOM nav — Option 2

**Date** : 2026-09-20
**Motivation** : Marie a observé que la duplication de la nav (une pour desktop, une pour le drawer mobile) est un anti-pattern qui alourdit le Navigator et rend la maintenance risquée (oublier de synchroniser le drawer quand on ajoute un lien dans la nav desktop).

**Objectif** : un seul set de 5 liens + 3 boutons, qui se transforme visuellement en drawer sur mobile via CSS pur, sans dupliquer de DOM.

---

## Structure DOM finale

```
consentio-header (header sticky top, background rgba blanc semi-transparent)
└── consentio-header__inner (div, flex row space-between, h 68px, max-width 1440)
    ├── consentio-header__logo (link avec image)
    ├── consentio-header__panel (div, unique wrapper des liens et ctas)
    │   ├── consentio-header__panel-close (div avec icône X, visible mobile only)
    │   ├── consentio-header__nav (5 liens de navigation)
    │   │   ├── For Retailers → page /retailers
    │   │   ├── For Suppliers → page /suppliers
    │   │   ├── Customer Stories → page /customer-stories
    │   │   ├── Resources → /ressources (page à créer)
    │   │   └── Company → /entreprise (page à créer)
    │   └── consentio-header__ctas (3 boutons)
    │       ├── Consentio Login → https://app.consentio.co
    │       ├── Klarys Login → https://app.klarys.io
    │       └── Book a demo → /demander-une-demo (page à créer)
    └── consentio-header__burger (bouton avec icône hamburger, visible mobile only)
```

**Zéro duplication.** Un lien = un élément dans le DOM.

---

## Comportement responsive

### Desktop (≥992px)

- `consentio-header__panel` : `display: flex; flex-direction: row; align-items: center; gap: 24px`
- `consentio-header__panel-close` : `display: none`
- `consentio-header__nav` : `display: flex; flex-direction: row; gap: clamp(14px, 1.6vw, 26px)`
- `consentio-header__ctas` : `display: flex; flex-direction: row; gap: 10px`
- `consentio-header__burger` : `display: none`

**Résultat** : logo à gauche, panel inline (nav + ctas horizontal) au centre/droite, pas de burger.

### Tablet + Mobile (<992px)

- `consentio-header__panel` : `display: none` par défaut. `position: fixed; top: 76px; left: 16px; right: 16px; bottom: auto; padding: 48px 20px 20px; background: #fdfdfc; border: 1px solid #E4E6E1; border-radius: 12px; box-shadow: 0 12px 40px rgba(0,0,0,0.15); z-index: 60; max-height: calc(100vh - 92px); overflow-y: auto`
- Combo class `consentio-header__panel.is-open` : `display: flex; flex-direction: column`
- `consentio-header__panel-close` : `display: flex` (visible, 32×32 en position absolute top 12 right 12 du panel)
- `consentio-header__nav` : `display: flex; flex-direction: column; gap: 8px`
- `consentio-header__ctas` : `display: flex; flex-direction: column; gap: 12px`
- `consentio-header__burger` : `display: flex`

**Résultat** : logo à gauche, burger à droite. Au clic burger, le panel apparaît en card fixe sous le header, avec close en haut à droite du card, nav et ctas verticaux à l'intérieur.

---

## Interactions IX3

- **i-e324d33f** — « Toggle Consentio panel from burger » : clic sur burger → `toggleClass(is-open)` sur panel.
- **i-311c1e16** — « Toggle Consentio panel from close » : clic sur panel-close → `toggleClass(is-open)` sur panel.

Les deux boutons utilisent `toggleClass` sur le combo `consentio-header__panel.is-open` (spécificité CSS 0,2,0 qui gagne contre `display: none` du panel). Ouvre et ferme à chaque clic, sans blocage.

---

## Ce qui a été supprimé (nettoyage)

Anciennes classes supprimées :
- `consentio-header__drawer`
- `consentio-header__drawer-close`
- `consentio-header__drawer-inner`
- `consentio-header__drawer-link`
- `consentio-drawer-open` (remplacée par le combo `is-open`)

Anciens éléments supprimés :
- Tout le sous-arbre `consentio-header__drawer` (10 éléments : 1 drawer + 1 close + 1 image + 1 inner + 8 links)
- Le doublon logo vide (élément `aac50abf-...-cc57`)

Anciennes interactions IX3 supprimées :
- `i-b170279c` (ancien toggle burger vers drawer)
- `i-d5b47912` (ancien toggle close vers drawer)

Total : 7 nœuds DOM en moins, 5 classes CSS en moins, 2 IX3 obsolètes en moins.

---

## Comment ajouter/modifier un lien à l'avenir

**Une seule opération.** Plus de duplication.

### Ajouter un lien de nav
1. Ouvre le composant `Header Consentio`.
2. Sélectionne `consentio-header__nav`.
3. Ajoute un `Link Block` avec la classe `consentio-header__link`.
4. Onglet Settings → Link → sélectionne la page ou tape l'URL.

Ce nouveau lien apparaît automatiquement dans le drawer mobile (puisque c'est le même DOM, transformé visuellement par CSS).

### Modifier un lien existant
Idem, une seule opération, propage partout.

### Ajouter un bouton CTA
Dans `consentio-header__ctas`, ajoute un Link Block avec la classe voulue (`consentio-header__ghost` pour outline, `consentio-header__primary` pour solid).

---

## Vérification finale

1. **F5 dans le Designer**.
2. Ouvre le composant Header Consentio (double-clic).
3. Le Navigator doit être plus court : plus de sous-arbre `consentio-header__drawer`.
4. Passe en breakpoint Desktop : logo à gauche, nav + ctas + hamburger visibles selon la largeur.
5. Passe en Tablet ou Mobile : logo à gauche, hamburger à droite.
6. Preview → clic burger → panel apparaît en card compact sous le header, avec X en haut droite, 5 liens + 3 boutons empilés.
7. Clic X → panel se ferme.
8. Clic burger → panel se rouvre. Le va-et-vient fonctionne à chaque clic.
9. Clic For Retailers → redirige vers /retailers.

Si tout est bon → Publish staging → test sur téléphone.
