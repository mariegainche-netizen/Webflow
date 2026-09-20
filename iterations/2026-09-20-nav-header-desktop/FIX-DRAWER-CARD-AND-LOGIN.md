# Fix — Drawer en card compact et Login réapparus dans le drawer

**Date** : 2026-09-20
**Symptômes signalés par Marie** :
1. Le fond blanc du drawer prenait tout l'écran → pas esthétique.
2. Les 2 boutons `Consentio Login` et `Klarys Login` ne s'affichaient pas dans le drawer.

---

## Problème 1 — Login manquants dans le drawer

**Cause racine** : la classe `.consentio-header__ghost` avait été mise en `display: none` au breakpoint tablet dans une modif précédente, pour cacher les 2 boutons Login dans les ctas desktop en mode mobile. Mais cette même classe est réutilisée par les 2 boutons Login **dans le drawer** — donc ils étaient cachés partout.

**Fix** : retirer `display: none` de `.consentio-header__ghost` au breakpoint tablet. Les 2 boutons ghost dans les ctas desktop restent cachés grâce à leur parent `.consentio-header__ctas` qui est lui-même en `display: none` en tablet. Le principe : quand un parent est caché, ses enfants le sont automatiquement, indépendamment de leurs propres styles.

## Problème 2 — Fond blanc plein écran

**Cause racine** : `.consentio-header__drawer` était configuré comme overlay full-screen (`position: fixed; top/right/bottom/left: 0`), ce qui couvre tout le viewport.

**Fix** : transformation en **card compact** qui descend juste sous le header :

| Propriété | Valeur |
|---|---|
| `position` | `fixed` |
| `top` | `76px` (juste sous le header 68px + 8px de marge) |
| `left` | `16px` |
| `right` | `16px` |
| `bottom` | `auto` (hauteur s'adapte au contenu) |
| `max-height` | `calc(100vh - 92px)` (évite débordement en bas) |
| `padding` | 20px sur les 4 côtés |
| `border-radius` | 12px sur les 4 coins |
| `border` | 1px solid `#E4E6E1` sur les 4 côtés |
| `box-shadow` | `0 12px 40px rgba(0,0,0,0.15)` (ombre douce) |
| `overflow-y` | `auto` (scroll interne si contenu déborde) |

Sur `.consentio-header__drawer-inner` :
- `margin-top` : 16px (au lieu de 72px, plus compact)
- `gap` : 8px entre items (au lieu de 24px)
- `max-width` : supprimé (le card s'adapte)

---

## Comment le reproduire toi-même dans le Designer

### Retirer le display none sur `.consentio-header__ghost` en tablet

1. Sélectionne un `consentio-header__ghost` dans le Navigator (par exemple Consentio Login).
2. Passe au breakpoint **Tablet**.
3. Style panel → section Layout → Display.
4. Si le point à côté de `Display` est orange (override actif), clic droit → **Reset** ou clic sur le point pour retirer l'override.

Résultat : les ghost buttons restent cachés en tablet dans les ctas (parent en display none) mais visibles dans le drawer.

### Transformer le drawer en card

Sélectionne `consentio-header__drawer` dans le Navigator, breakpoint Desktop (main) :

**Position** :
- `Position` : Fixed
- `Top` : 76px
- `Left` : 16px
- `Right` : 16px
- `Bottom` : Auto (efface la valeur)

**Size** :
- `Max height` : `calc(100vh - 92px)`

**Spacing** :
- Padding : 20px sur les 4 côtés (efface `24px` si présent)

**Borders** :
- Border radius : 12px sur les 4 coins
- Border : 1px solid, color `#E4E6E1`, sur les 4 côtés

**Effects → Shadows** :
- `+` Outside → X:0, Y:12, Blur:40, Spread:0, Color: `rgba(0,0,0,0.15)`

**Sur `consentio-header__drawer-inner`** :
- Spacing → Margin top : 16px
- Layout → Gap : 8px
- Size → Max width : efface (revient à Auto)

---

## Structure visuelle attendue en mobile

```
┌──────────────────────────────┐
│ [Logo]              [🍔]     │  ← header sticky
└──────────────────────────────┘
    ┌────────────────────┐        ← 16px marge
    │             [X]    │        ← card avec bordure, radius, ombre
    │  For Retailers     │
    │  For Suppliers     │
    │  Customer Stories  │
    │  Resources         │
    │  Company           │
    │  Consentio Login   │        ← ghost visible
    │  Klarys Login      │        ← ghost visible
    │  [Book a demo]     │
    │                    │
    └────────────────────┘
```

Le card s'adapte à la hauteur du contenu. Pas de fond blanc qui s'étend jusqu'en bas.

---

## Alternative si tu veux plus tard

- **Fond opaque semi-transparent AUTOUR du card** (effet "modal") : ajouter un ::before ou un wrapper avec `background: rgba(0,0,0,0.4)` — nécessite un peu plus de structure.
- **Animation slide-down** : dans les interactions IX3, remplacer `Set display flex` par une animation Move Y de -20px → 0 avec fade opacity 0 → 100%, duration 200ms.
- **Fermeture au clic hors du card** : nécessite un overlay parent qui capture le clic — plus de structure à créer.

Rester simple pour l'instant, ajuster ensuite selon retour d'usage.
