# Checklist — Corrections nav header

Étapes exactes à reproduire dans le Designer Webflow (`test-8af0bb.design.webflow.com`, page `Home 2`).

**Source de vérité pour toutes les valeurs** : `NAV-REFERENCE.md` (extrait du ZIP Lovable v3). Ne pas inventer, ne pas dévier.

**Objectif** : reproduire la nav Lovable v3 pixel-cohérente sur Webflow, avec desktop propre, tablet/mobile qui affichent le hamburger, et drawer qui s'ouvre au clic.

---

## ⚠️ Règles de sécurité — à lire AVANT de toucher quoi que ce soit

### R1 — Ne jamais inventer une nouvelle classe. Réutiliser l'existant.

Avant chaque édition, dans le **Style panel**, clique dans le champ **Style selector**. Tape le début du nom que tu veux : Webflow affiche l'autocomplete de toutes les classes déjà définies dans le projet. Si une classe existante correspond → utilise-la.

Ne crée une nouvelle classe QUE si aucune existante ne colle. Dans ce cas, note-la dans `NOTES.md` pour tracer.

### R2 — Vérifier « qui d'autre utilise cette classe » avant de la modifier.

Regarde en haut du Style selector : `X on this page`. Si > 1, la modif va toucher plusieurs éléments. Menu `⋯` → `Select all with this class` pour voir où.

Pour personnaliser UN seul élément sans casser les autres → **combo class** (Style selector → `+` → nom `is-outline`, `is-primary`, etc.).

### R3 — Utiliser les Variables du projet, jamais de valeurs en dur.

Ouvre le champ de valeur, tape le début du nom d'une variable. Toutes les couleurs et espacements de `NAV-REFERENCE.md` doivent d'abord être cherchés dans les Variables Webflow existantes. S'ils n'existent pas encore, il faudra les créer avec les noms exacts de la référence (`forest`, `foreground`, `background`, `border`, `sand`, `forest-foreground`).

### R4 — Ne pas éditer un `Component` sans avoir vérifié son usage.

Si un élément est enveloppé dans un composant (icône orange dans le Navigator), toute modif interne se propage sur toutes les pages qui l'utilisent.

### R5 — Un breakpoint à la fois, sans jamais toucher au desktop base par erreur.

Après chaque édition à un breakpoint tablet/mobile, repasse à **Desktop** et vérifie visuellement. Si un style desktop a bougé → `Cmd/Ctrl+Z` immédiatement.

### R6 — Breakpoint pivot = 1024px, pas 991px.

Lovable v3 utilise `lg = 1024px`. Le Tablet Webflow par défaut est `991px et below`. Il y a donc une zone morte 992-1023px si on ne fait rien.

**À faire en tout premier** : Site settings (icône engrenage haut gauche) → `Breakpoints` → change le breakpoint tablet pour qu'il commence à `1023px`. Si Webflow ne le permet pas facilement, garde 991 et note-le dans NOTES.md — la zone morte sera un compromis à documenter.

---

## Correction 1 — Container et layout desktop

### 1.1 — `Navigation Container Full`

Sélectionne l'élément dans le Navigator.

**Style panel → Layout** :
- `Display` → **Flex**
- `Direction` → **Horizontal**
- `Align` → **Center**
- `Justify` → **Space between**
- `Gap` → tape `4` (en px) — soit **4px**, matche `gap-4` Tailwind = 16px si on veut être strict. **Prends 16px** (Tailwind gap-4 = 1rem = 16px). Correction : Tailwind gap-4 = 1rem = **16px**.

**Style panel → Size** :
- `Width` → `100%`
- `Max W` → `1280` PX (= 80rem de la référence)
- `Height` → **72** PX (= h-18 de la référence)
- Les autres champs restent Auto / None.

**Style panel → Spacing** :
- `MARGIN` : haut/bas `0`, gauche/droite **Auto** (pour centrer).
- `PADDING` : haut/bas `0` (la hauteur fixe suffit), gauche/droite **32** PX sur desktop.

**Note** : sur mobile portrait (<768px), la référence utilise `padding-inline: 1.25rem` = **20px**. On ajustera au breakpoint mobile.

---

### 1.2 — Vérifier que le Header parent (`Navigation`) fait sticky top

Sélectionne l'élément `Navigation` (le parent direct de `Navigation Container Full`, celui qui joue le rôle de `<header>` Lovable).

**Style panel → Position** :
- `Position` → **Sticky**
- `Top` → `0`
- `Z-index` → `50`
- `Width` → `100%`

**Style panel → Backgrounds** :
- `Background color` → variable `background` avec alpha `90%` (ou hex `#FDFDFC` à 90% opacité)

**Style panel → Effects → Backdrop filter** :
- `+` → `Blur` → tape la valeur qui rend bien (Lovable utilise `backdrop-blur` = 8px Tailwind par défaut, mais essaie 12px pour un effet plus visible).

**Style panel → Borders** :
- `Border bottom` → 1px solid, couleur `transparent` par défaut. On rajoutera l'apparition au scroll en Correction 6 (optionnel).

---

### 1.3 — `Navigation Menu` (wrapper des 5 liens)

Sélectionne l'élément dans le Navigator.

**Style panel → Layout** :
- `Display` → **Flex**
- `Direction` → **Horizontal**
- `Align` → **Center**
- `Gap` → **2** PX (Tailwind `gap-0.5` = 0.125rem = 2px — c'est très serré, les paddings internes des liens font le reste de la respiration).

---

### 1.4 — `Div Block 4` (wrapper des 3 boutons droite)

Sélectionne l'élément dans le Navigator.

**Style panel → Layout** :
- `Display` → **Flex**
- `Direction` → **Horizontal**
- `Align` → **Center**
- `Gap` → **8** PX (Tailwind `gap-2` = 0.5rem = 8px).

---

## Correction 2 — Contenu des liens du centre (5 liens, plus de doublon)

Aujourd'hui il y a 4 liens dans `Navigation Menu` (dont un doublon « For retailers ») → il en faut **5**, dans cet ordre exact :

| # | Texte | URL |
|---|---|---|
| 1 | `For Retailers` | `/retailers` |
| 2 | `For Suppliers` | `/suppliers` |
| 3 | `Customer Stories` | `/customer-stories` |
| 4 | `Resources` | `/resources` |
| 5 | `Company` | `/company` |

Actions :
1. Renomme le doublon `For retailers` → `For Suppliers`, change son URL vers `/suppliers`.
2. Ajoute un 5e `Navigation Link` : dans le Navigator, clic droit sur un `Navigation Link` existant → `Duplicate`. Renomme-le `Company`, URL `/company`. Vérifie qu'il est bien à la fin de `Navigation Menu`.

**Style de chaque `Navigation Link`** (à appliquer une fois sur la classe, propage aux 5) :

**Style panel → Spacing** :
- `PADDING` : haut/bas **8** PX, gauche/droite **12** PX (`px-3 py-2`).

**Style panel → Backgrounds / Borders** :
- `Border radius` → **6** PX (`rounded-md`).

**Style panel → Typography** :
- Font size → **14** PX (`text-sm`).
- Weight → **600** (`font-semibold`).
- Color → variable `foreground` avec alpha **70%** (ou `#22302AB3`).

**State Hover** (State dropdown → `Hover`) :
- Color → variable `forest` (100% opacité, `#0D4A3A`).

**Transitions** (revenir en state `None`, section `Effects → Transitions`) :
- `+` → Property `Color`, Duration `150ms`, Easing `Ease`.

---

## Correction 3 — Boutons login outline (Klarys + Consentio)

Ces 2 boutons doivent devenir des boutons **outline** (bord fin, fond blanc, texte forest, icône ↗ à droite).

Aujourd'hui ce sont des `Navigation Button 2` en style plein. Deux approches :

**Option A (recommandée)** : créer une combo class `is-outline` sur `Navigation Button 2`.
- Sélectionne le premier bouton login (Klarys).
- Dans le Style selector, à droite de `Navigation Button 2`, tape `is-outline` → Enter (Webflow crée la combo).
- Sur cette combo `Navigation Button 2.is-outline`, applique les styles ci-dessous.
- Répète : sélectionne le 2e bouton login (Consentio), et via le Style selector, ajoute la combo class `is-outline` (Webflow la propose dans l'autocomplete).

**Styles à appliquer sur `Navigation Button 2.is-outline`** :

**Size** :
- `Height` → **40** PX (`h-10`).

**Spacing** :
- `PADDING` : haut/bas `0` (height fixe), gauche/droite **12** PX (`px-3`).

**Backgrounds** :
- `Background color` → **Transparent** (ou blanc si le header devient transparent au scroll).

**Borders** :
- `Border` : all sides, 1px solid, couleur variable `border` (ou `#E1E5E1`).
- `Border radius` → **6** PX (`rounded-md`).

**Typography** :
- Font size → **14** PX.
- Weight → **600**.
- Color → variable `forest` (ou `#0D4A3A`).

**Layout (pour l'icône ↗ à droite du texte)** :
- Display → **Flex**, Direction Horizontal, Align Center.
- Gap → **6** PX (`gap-1.5`).

**Icône ExternalLink ↗** :
- À l'intérieur du bouton, après le texte, insère un élément `Embed` (E dans la palette Add) ou un `Icon` si tu utilises un pack d'icônes Webflow.
- Contenu SVG (colle dans un Embed) :
```html
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M15 3h6v6"/>
  <path d="M10 14 21 3"/>
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
</svg>
```

**State Hover** (`Hover`) :
- `Border color` → variable `forest` avec alpha `40%` (ou `#0D4A3A66`).
- `Background color` → variable `sand` (ou `#F5F5EF`).

**Transitions** (state None, Effects → Transitions) :
- `+` Property `All`, Duration `150ms`, Easing `Ease`.

---

## Correction 4 — Bouton "Book a demo" (solid forest, PAS lime)

Le 3e bouton `Book a demo` reste sans combo class (variant default du Button Lovable = `bg-forest text-forest-foreground hover:bg-deep`).

Sélectionne le bouton `Book a demo`. Vérifie qu'il n'a **pas** la combo class `is-outline` (sinon retire-la : Style selector → clic sur `is-outline` → `Remove class`).

**Sur `Navigation Button 2` (classe de base)** :

**Size** :
- `Height` → **44** PX (`h-11`).

**Spacing** :
- `PADDING` : haut/bas `0`, gauche/droite **20** PX (`px-5`).

**Backgrounds** :
- `Background color` → variable `forest` (ou `#0D4A3A`).

**Borders** :
- `Border` → none.
- `Border radius` → **6** PX.

**Typography** :
- Font size → **14** PX.
- Weight → **600**.
- Color → variable `forest-foreground` (blanc cassé, ou `#F9FAF7`).

**State Hover** :
- `Background color` → une teinte encore plus foncée que forest. Si une variable `deep` ou `forest-dark` existe dans le projet, prends-la. Sinon crée-la avec la valeur hex `#07372D` (extrait ligne 10 des commentaires styles.css : « `#07372D primary dark green` »).

**Transitions** (state None) :
- `+` Property `All`, Duration `150ms`, Easing `Ease`.

**⚠️ Attention** : puisque `Navigation Button 2` est la classe de base et qu'elle est aussi utilisée par les boutons login (avec la combo `.is-outline`), toutes les propriétés que tu poses sur la classe de base sans combo (background, color) vont s'appliquer aussi aux login **avant** que la combo `.is-outline` override. La combo doit override ces propriétés (background transparent, color forest, border visible). Vérifie visuellement dans le canvas que les 3 boutons sont corrects.

Si tu vois que les login se cassent en modifiant la classe de base, l'alternative propre est : mettre le style forest solid sur une combo class `is-primary`, et n'appliquer `is-primary` qu'au bouton Book a demo. Les login gardent `is-outline`. La classe de base reste minimale (juste layout flex, height, radius, transitions).

**Recommandation** : va sur cette approche à 2 combo classes (`is-outline` pour login, `is-primary` pour Book a demo). C'est plus propre et robuste.

---

## Correction 5 — Responsive (visibilité + layout tablet/mobile)

### 5.1 — Passer au breakpoint Tablet

En haut du canvas, clique sur l'icône Tablet (le canvas passe à 991px ou selon ton breakpoint custom).

### 5.2 — Cacher les éléments desktop

- `Navigation Menu` → **Display: None**
- `Div Block 4` → **Display: None**

### 5.3 — Afficher et positionner le hamburger

- `Menu Button 2` → **Display: Flex**
- `Menu Button 2` → **Size: 44×44px** (Width 44, Height 44) — `size-11` de la référence.
- `Menu Button 2` → **Align content center / Justify content center** (l'icône est centrée dedans).
- `Menu Button 2` → **Border radius 6px**.
- `Menu Button 2` → **Color: variable forest** (pour la couleur SVG de l'icône).
- `Icon` (enfant) → taille **24×24px** (`size-6`).

### 5.4 — Vérifier le layout `Navigation Container Full` sur tablet

Le problème observé au screenshot 820px : logo centré et hamburger empilé dessous, au lieu d'être sur la même ligne.

Sélectionne `Navigation Container Full`, breakpoint Tablet :
- Vérifie que `Display` est bien encore `Flex` et **pas** `Block`. Si le point à côté est orange (override), reset : clic sur le point → `Reset`.
- Vérifie que `Direction` est bien `Horizontal`.
- Vérifie que `Justify` est bien `Space between`.
- Vérifie que `Height` est encore `72px`.

Résultat attendu : logo à gauche, hamburger à droite, sur la même ligne, hauteur 72px.

### 5.5 — Adapter le padding container sur mobile

Passe au breakpoint **Mobile portrait** (icône mobile en portrait).

Sélectionne `Navigation Container Full` :
- `PADDING` gauche/droite → **20** PX (Lovable utilise `padding-inline: 1.25rem` = 20px sous 1024px).

### 5.6 — Vérifier la cascade mobile L et mobile P

Passe successivement à Mobile L puis Mobile P. Vérifie visuellement :
- Logo à gauche, hamburger à droite.
- Liens et boutons desktop cachés.
- Rien qui déborde.

Si un breakpoint casse alors que le précédent était bon → un override existe. Sélectionne l'élément, cherche la propriété avec un point orange, clic → `Reset`.

### 5.7 — Retour desktop pour vérifier qu'on n'a rien cassé

Passe à Desktop. Vérifie :
- `Navigation Menu` : visible (Display Flex).
- `Div Block 4` : visible (Display Flex).
- `Menu Button 2` : caché (Display None).

Si le hamburger apparaît sur desktop → tu as édité au mauvais breakpoint. Sur `Menu Button 2` en Desktop, force `Display: None`.

---

## Correction 6 — Drawer mobile (le clic hamburger doit ouvrir un overlay)

C'est le problème « le menu ne s'affiche pas » que tu as mentionné.

Lovable v3 rend un overlay `fixed inset-0 z-[60] flex flex-col bg-background` au clic sur le hamburger, avec :
- Logo + bouton fermer (X) en haut.
- Les 5 liens en gros.
- Les 3 boutons (Klarys, Consentio, Book a demo) en pleine largeur.
- Body scroll locked pendant l'ouverture.

### 6.1 — Créer l'élément drawer dans le Navigator

À l'intérieur de `Navigation` (au même niveau que `Navigation Container Full`, PAS dedans — le backdrop-blur du header crée un containing block qui pigerait un overlay fixed enfant), ajoute un `Div` :

- Nom de classe → `Mobile Drawer` (nouveau, on n'a pas d'équivalent existant).
- **Position: Fixed**, `Top: 0`, `Right: 0`, `Bottom: 0`, `Left: 0` (inset 0).
- **Z-index: 60**.
- **Display: Flex**, Direction Vertical.
- **Background color: variable `background`** (blanc opaque, PAS semi-transparent — c'est un vrai overlay opaque).
- **Display: None** au chargement (on l'ouvrira via interaction).

**À l'intérieur du `Mobile Drawer`** :

1. Un `Div` header du drawer :
   - Display Flex Horizontal, Align Center, Justify Space between.
   - Height 72px, padding H 20px (ou responsive selon breakpoint).
   - Border bottom 1px solid variable `border`.
   - Contient : copie du Logo à gauche, un `Close Button` (bouton rond 44px avec icône X) à droite.

2. Un `Div` contenu :
   - Flex 1, overflow-y Auto, padding V 24px, padding H 20px.
   - Contient d'abord un `Div` avec les 5 liens (Display Grid, gap 4px, chaque lien : text-base font-bold color forest, padding 12px 16px, border-radius 12px).
   - Puis un `Div` avec les 3 boutons (Display Grid, gap 12px, margin top 32px, chaque bouton hauteur 48px, pleine largeur).

### 6.2 — Créer les 2 interactions IX2

**Interaction 1 : Ouverture du drawer**
- Sélectionne `Menu Button 2`.
- Onglet **Interactions** (droite).
- Element trigger → `Mouse click (tap)`.
- Action → `Start an animation` → New timed animation → `Open drawer`.
- Dans l'animation `Open drawer` :
  - Ajoute une action `Show/Hide` sur l'élément `Mobile Drawer` → Display `Flex`.
  - (Optionnel) Ajoute une action Style block sur `body` pour `Overflow: Hidden` (pour locker le scroll — dans Webflow c'est plus limité, l'astuce est d'ajouter une classe `is-drawer-open` sur body et de gérer via CSS custom code).

**Interaction 2 : Fermeture du drawer**
- Sélectionne le `Close Button` à l'intérieur de `Mobile Drawer`.
- Element trigger → `Mouse click (tap)`.
- Action → `Start an animation` → `Close drawer`.
- Dans l'animation `Close drawer` :
  - Show/Hide sur `Mobile Drawer` → Display `None`.

**Bonus : fermer le drawer au clic sur un lien**
- Sélectionne chaque `Link` à l'intérieur du drawer.
- Ajoute la même interaction que le Close Button, ou groupe-les via une classe et un event delegation.
- Alternative custom code plus simple (voir 6.3).

### 6.3 — Alternative : custom code (plus léger que IX2)

Si tu préfères éviter IX2, ajoute dans Site settings → Custom code → Footer :

```html
<script>
(function () {
  const btn = document.querySelector('[data-drawer-toggle]');
  const closeBtn = document.querySelector('[data-drawer-close]');
  const drawer = document.querySelector('[data-drawer]');
  const links = drawer ? drawer.querySelectorAll('a') : [];

  function open() {
    drawer.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    btn.setAttribute('aria-expanded', 'true');
  }
  function close() {
    drawer.style.display = 'none';
    document.body.style.overflow = '';
    btn.setAttribute('aria-expanded', 'false');
  }

  if (btn) btn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  links.forEach((a) => a.addEventListener('click', close));
})();
</script>
```

Puis, dans Webflow :
- Sur `Menu Button 2` → onglet Settings → Custom attributes → `data-drawer-toggle` (pas de valeur).
- Sur `Close Button` → `data-drawer-close`.
- Sur `Mobile Drawer` → `data-drawer`.
- Sur `Mobile Drawer` → Display `None` au chargement (via Style panel).

Cette approche marche partout, ne casse pas au duplicate de projet, et est ~10 lignes de JS. **Recommandé** pour Marie.

---

## Publier

En haut à droite, clique sur **Publish**.

- Coche **UNIQUEMENT** `test-8af0bb.webflow.io` (staging).
- **NE PAS** cocher `fr.consentio.co` ni `klarys.io` tant que Marie n'a pas validé.

Clique `Publish to selected domains`. Attends ~30 secondes.

Ouvre `test-8af0bb.webflow.io` dans un nouvel onglet. Tests à faire :

- [ ] Desktop 1440px : nav complète, 5 liens, 3 boutons (2 outline + 1 solid forest), logo à gauche, tout aligné.
- [ ] Desktop 1024px : idem, pas de hamburger.
- [ ] Tablet 900px : hamburger visible à droite, logo à gauche, pas de liens, pas de boutons.
- [ ] Mobile 480px : idem tablet, padding container à 20px.
- [ ] Clic hamburger → drawer full-screen s'ouvre avec logo, X en haut, 5 liens en gros, 3 boutons en pleine largeur.
- [ ] Body scroll bien lock pendant le drawer ouvert.
- [ ] Clic X ou clic sur un lien → drawer se ferme.
- [ ] Hover sur les liens desktop → passe de foreground/70 à forest (150ms).
- [ ] Hover sur les boutons login → fond passe à sand, bord à forest/40.
- [ ] Hover sur Book a demo → fond passe à deep (plus foncé).

---

## Si tu bloques

Reprends la conversation ici et donne-moi :
1. Le breakpoint où tu bloques.
2. Ce que tu vois vs ce qui est attendu.
3. Un screenshot du Designer sur l'élément en question.

Je te guiderai précisément sur l'action à faire dans le panneau Style.
