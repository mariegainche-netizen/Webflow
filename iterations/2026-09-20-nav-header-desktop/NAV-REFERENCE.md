# Nav header — Spécifications extraites de Lovable v3

**Source** : `Exploration_Site_vitrine_Consentio_Last_Version.zip` (Lovable, projet React + TanStack Router + Tailwind + shadcn/ui).

Fichiers copiés dans `./lovable-v3-reference/` :
- `header.tsx` — le composant nav complet (desktop + drawer mobile).
- `logo.tsx` — le composant logo.
- `button.tsx` — les variants Button (default, outline, lime, etc.).
- `styles-tokens-extract.css` — les variables CSS (couleurs, container, spacings).

C'est la **source de vérité** pour toutes les décisions ci-dessous. Quand la checklist dit « valeur X », c'est extrait de ces fichiers, pas inventé.

---

## 1. Breakpoint pivot

**1024px** (Tailwind `lg`).

- ≥ 1024px → liens + boutons visibles, hamburger caché.
- < 1024px → liens + boutons cachés, hamburger visible + drawer overlay au clic.

**Attention** : le breakpoint Webflow « Tablet » par défaut est `991px et below`. Il faut donc customiser le breakpoint Webflow pour matcher 1024px, OU accepter une zone morte (991-1023px) où c'est encore mobile côté Lovable mais déjà desktop côté Webflow. Recommandation : **customiser le breakpoint tablet Webflow à 1023px** (Site settings → Breakpoints).

---

## 2. Structure DOM (desktop)

```
<header class="site" sticky top-0 z-50 backdrop-blur>
  <div class="container-page" flex h-18 items-center justify-between gap-4>
    <Logo />                                                          ← gauche
    <nav class="hidden lg:flex" gap-0.5>                              ← centre (5 liens)
      <a>For Retailers</a>
      <a>For Suppliers</a>
      <a>Customer Stories</a>
      <a>Resources</a>
      <a>Company</a>
    </nav>
    <div class="hidden lg:flex" gap-2>                                ← droite (3 boutons)
      <a class="loginClass">Klarys Login  <ExternalLink /></a>
      <a class="loginClass">Consentio Login  <ExternalLink /></a>
      <Button asChild>Book a demo</Button>
    </div>
    <button class="lg:hidden" size-11>                                ← hamburger (mobile)
      <Menu icon />
    </button>
  </div>
</header>
```

**Drawer mobile** (rendu en dehors du header à cause du backdrop-blur qui crée un containing block) :

```
<div fixed inset-0 z-[60] flex flex-col bg-background lg:hidden>
  <div container-page flex h-18 items-center justify-between border-b>
    <Logo />
    <button size-11><X icon /></button>
  </div>
  <div container-page flex-1 overflow-y-auto py-6>
    <div grid gap-1>
      [5 liens en gros — text-base font-bold text-forest, rounded-xl px-4 py-3]
    </div>
    <div mt-8 grid gap-3>
      [Klarys Login outline h-12]
      [Consentio Login outline h-12]
      [Book a demo Button size lg]
    </div>
  </div>
</div>
```

**Comportements** :
- Overlay lock le scroll du body (`document.body.style.overflow = "hidden"`).
- Overlay se ferme automatiquement au changement de route.
- Icône `X` pour fermer (bouton rond size 44px, text-forest).

---

## 3. Valeurs exactes

### Container

Depuis `styles.css` :

```css
@utility container-page {
  width: 100%;
  margin-inline: auto;
  max-width: 80rem;         /* 1280px */
  padding-inline: 1.25rem;  /* 20px sur mobile */

  @media (min-width: 1024px) {
    padding-inline: 2rem;   /* 32px sur desktop */
  }
}
```

### Hauteur header

`h-18` = **4.5rem = 72px**.

### Logo

Image PNG, hauteur `h-5` (20px) sur mobile, `h-[22px]` sur sm+ (≥640px). Largeur auto.

### Liens du centre (desktop)

```
Padding      : px-3 py-2  → 12px H · 8px V
Border radius: rounded-md → 6px
Text         : text-sm font-semibold → 14px · 600
Color        : text-foreground/70 (foreground à 70% d'opacité)
Hover        : text-forest (couleur pleine)
Active route : text-forest
Transition   : transition-colors (150ms par défaut)
Gap entre liens : gap-0.5 → 2px (très serré, les paddings font le reste)
```

### Boutons login (outline, desktop)

```
Height       : h-10 → 40px
Padding      : px-3 → 12px H, pas de padding V (height fixe)
Border radius: rounded-md → 6px
Border       : border border-border
Text         : text-sm font-semibold → 14px · 600
Color        : text-forest
Gap (texte↔icône) : gap-1.5 → 6px
Icône ExternalLink : size-3.5 → 14×14px
Hover        : border-forest/40 + bg-sand
Transition   : transition-colors
```

### Bouton "Book a demo" (desktop)

Utilise `<Button asChild>` sans variant → variant `default`.

```
Variant default:
Background   : bg-forest (vert foncé)
Text color   : text-forest-foreground (blanc cassé)
Hover        : bg-deep (encore plus foncé — cette variable existe dans le projet)
Height       : h-11 → 44px (size default)
Padding      : px-5 py-2 → 20px H · 8px V
Border radius: rounded-md → 6px
Text         : text-sm font-semibold → 14px · 600
Gap texte↔icône : gap-2 → 8px
Transition   : transition-all
```

**Note importante** : dans le header, "Book a demo" est en **vert foncé forest**, PAS en lime. Le lime (`variant="lime"`) est utilisé pour les CTA dans le corps de la page (hero, sections), pas dans la nav.

### Hamburger (mobile, <1024px)

```
Size         : size-11 → 44×44px
Layout       : inline-flex items-center justify-center
Border radius: rounded-md → 6px
Color        : text-forest
Icône Menu   : size-6 → 24×24px
Visibility   : lg:hidden (caché à partir de 1024px)
```

---

## 4. Palette de couleurs (extraite de styles.css)

Le projet Lovable utilise **OKLCH**. Voici les équivalents hex approximatifs pour reproduire dans Webflow. Les commentaires dans styles.css ligne 10 confirment `#07372D`, `#0D4A3A`, `#A4EF28` comme couleurs de marque.

| Variable Lovable | OKLCH | Hex approx | Usage |
|---|---|---|---|
| `--forest` | `oklch(0.298 0.055 166.5)` | **#0D4A3A** | Vert Consentio, texte foncé, background CTA principal |
| `--foreground` | `oklch(0.225 0.014 165)` | **#22302A** | Texte body |
| `--foreground/70` | (foreground à 70%) | **#22302AB3** | Texte liens nav (état non hover) |
| `--background` | `oklch(0.995 0.002 120)` | **#FDFDFC** | Fond page + fond header |
| `--border` | `oklch(0.906 0.005 150)` | **#E1E5E1** | Bord boutons outline, bord bas header au scroll |
| `--sand` | `oklch(0.968 0.007 120)` | **#F5F5EF** | Fond hover boutons login outline |
| `--forest-foreground` | `oklch(0.98 0.008 120)` | **#F9FAF7** | Texte sur fond forest (CTA "Book a demo") |
| `--lime` (hors nav) | `oklch(0.885 0.213 128.5)` | **#A4EF28** | CTA hero et body, PAS dans le header |
| `--lime-foreground` | `oklch(0.24 0.05 166)` | **#0F3529** | Texte sur fond lime |
| `--muted-foreground` | `oklch(0.512 0.014 162)` | **#6F7A72** | Texte secondaire |

**⚠️ Précision** : les hex ci-dessus sont des **approximations** OKLCH→sRGB. Pour la reproduction pixel-perfect, entrer les OKLCH directement dans Webflow si supporté (nouvelle UI supporte OKLCH), sinon utiliser un convertisseur en ligne officiel (ex : oklch.com) plutôt que ces approximations.

---

## 5. Fond du header (subtil mais important)

```css
bg-background/90        /* fond blanc à 90% opacité — semi-transparent */
backdrop-blur           /* filtre de flou sur ce qui est derrière */
border-b border-transparent  /* pas de bord au chargement */
scrolled && "border-border"  /* apparaît quand scroll > 8px */
transition-colors
```

Comportement : le header est **sticky top**, semi-transparent, avec un léger flou du contenu qui passe dessous. Une bordure fine apparaît en bas dès qu'on scrolle un peu.

En Webflow, cet effet se fait avec :
- `Position: Sticky` + `Top: 0`
- `Backgrounds → Background color`: la couleur `--background` à 90% d'opacité (utiliser le picker avec alpha).
- `Effects → Backdrop filter → Blur`: activer.
- La bordure au scroll : via une interaction IX2 (scroll trigger) OU du custom code `window.scrollY`.
