# Notice — Superposition hero + effet Lovable

## Fichiers livrés

| Fichier | Usage |
|---|---|
| `assets/cards-only-transparent.png` (1800×1040, 130 KB) | **Les 2 cartes seules, fond transparent** — à superposer sur ta propre photo dans Webflow |
| `assets/composition-transparent.png` (1800×1280, 1.1 Mo) | **Composition complète** (photo + cartes) fond transparent — glisse-la telle quelle dans un Image block |
| `assets/hero-cards-lovable.png` (900×520, fond dark green) | Version avec fond forest si besoin de bloc opaque |
| `assets/crate-produce.jpg` (294 KB) | La photo Lovable seule (à uploader dans Assets Webflow) |

---

## Option A — Composition en 1 image (la plus rapide, 30 s)

1. Panneau **Assets** Webflow → **Upload** → `composition-transparent.png`
2. Dans ton hero, ajoute un **Image block** → sélectionne l'image → largeur `100%`
3. Fini.

Limite : pas de responsive fin, l'image est figée.

---

## Option B — Recréation native (la fidèle Lovable, 15 min)

Structure des couches dans un Div Block `.hero-visual` (position: relative) :

```
.hero-visual (position: relative, aspect-ratio: 3/2)
├── Image block .hero-photo (position: absolute, inset: 0, object-fit: cover)
│    → filter: contrast(1.06) saturate(1.05), opacity: 0.88
├── Div .hero-overlay (position: absolute, inset: 0)
│    → background: linear-gradient(to top, #05312D 0%, rgba(5,49,45,0.2) 50%, transparent 100%)
├── Span .hero-tag "FRESH PRODUCE" (position: absolute, top: 16px, left: 16px)
│    → background: rgba(5,49,45,0.7), backdrop-filter: blur(6px)
├── Image block .hero-forecast (position: absolute, top: 20px, left: -10px, width: 54%)
│    → box-shadow: 0 40px 80px -30px rgba(0,0,0,0.55)
└── Image block .hero-order (position: absolute, bottom: -20px, right: -20px, width: 52%)
     → box-shadow: 0 40px 80px -30px rgba(0,0,0,0.55)
```

Pour les 2 cartes : découpe `cards-only-transparent.png` en 2 fichiers séparés dans Figma/Canva, ou utilise directement les 2 blocs comme des Image blocks avec la même image en background-position offset.

---

## L'EFFET Lovable — 3 couches à recréer dans Webflow

### 1. Gradient fondu sur la photo (indispensable, 2 min)

Rend la photo "fusionnée" avec le fond forest de la section hero :

- Ajoute un Div `.hero-overlay` en `position: absolute; inset: 0` par-dessus l'image
- Style : `background: linear-gradient(to top, #05312D 0%, rgba(5,49,45,0.2) 50%, transparent 100%)`
- Résultat : le bas de la photo se fond dans le fond dark green de la section

### 2. Parallax léger au scroll (optionnel, 5 min via IX2)

Effet doux quand on scrolle : la photo bouge légèrement plus lentement que les cartes.

- Sélectionne `.hero-photo` → panneau **Interactions (IX2)** → **New Trigger** → **Page** → **While Page is Scrolling**
- Action : `Move → Y axis: -20px` (déplace la photo de 20px vers le haut quand on scrolle jusqu'en bas de la section)

### 3. Fade-in au chargement (optionnel, 3 min via IX2)

Les cartes apparaissent en douceur quand la section entre dans le viewport :

- Sélectionne `.hero-forecast` → **Interactions** → **New Trigger** → **Element** → **Scroll Into View**
- Action **Initial state** : `Opacity 0`, `Move Y +16px`
- Action **On enter** : `Opacity 100%`, `Move Y 0px`, durée `500ms`, easing `Out Cubic`
- Répète sur `.hero-order` avec un délai de `120ms` (stagger)

---

## Ombres des cartes (critique pour le rendu premium)

Sur chaque carte, applique cette box-shadow dans le Style panel :

```css
box-shadow:
  0 40px 80px -30px rgba(0, 0, 0, 0.55),
  0 12px 24px -12px rgba(0, 0, 0, 0.30);
```

Dans Webflow : Style panel → **Effects** → **Shadows** → **+** → coche `Inset: off`, mets les valeurs ci-dessus (X: 0, Y: 40, Blur: 80, Spread: -30, Color: rgba noir 55%).

---

## Recommandation

Pour la démo Emilien 15h : **Option A** (composition en 1 image) — 30 s de mise en place.
Pour la production finale : **Option B** avec les 3 effets — 20 min, mais responsive et éditable.
