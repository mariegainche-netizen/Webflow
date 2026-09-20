# Fix — Le drawer sortait uniquement dans la bande du header

**Date** : 2026-09-20
**Symptôme observé par Marie** : au clic sur le hamburger, le drawer s'affiche mais uniquement à l'intérieur de la bande du header (pas en plein écran comme attendu).

---

## Cause racine

La classe `.consentio-header` (le `<header>` racine du composant) portait :

```css
backdrop-filter: blur(10px);
```

Cette propriété (comme `filter`, `transform`, `perspective`, `will-change` ou `contain`) crée un **nouveau containing block** pour tous ses descendants en `position: fixed`.

Résultat : notre drawer `.consentio-header__drawer` en `position: fixed; top: 0; right: 0; bottom: 0; left: 0` se cale sur le `.consentio-header` (qui fait ~68px de haut) au lieu du viewport entier. D'où le rendu confiné dans la bande du header.

Cette limitation CSS est documentée dans le code source Lovable v3 qui l'évite en sortant explicitement le drawer du `<header>` :

```jsx
{/* Mobile drawer — kept OUTSIDE the header: the header's backdrop-blur
    creates a containing block, which would trap this fixed overlay. */}
```

---

## Correction appliquée

Retrait de `backdrop-filter: blur(10px)` sur `.consentio-header` breakpoint main.

**Effet visuel perdu** : au scroll, le contenu qui passe sous le header ne devient plus flou. C'est un effet cosmétique marginal.

**Effet fonctionnel gagné** : le drawer sort correctement en overlay plein viewport au clic sur le hamburger.

Le header reste :
- Sticky top (`position: sticky; top: 0`)
- Fond blanc semi-transparent (`background-color: rgba(255,255,255,0.94)`)
- Bordure basse fine (`border-bottom: 1px solid #E4E6E1`)
- z-index 50

---

## Comment le reproduire toi-même

Dans le Designer :

1. Sélectionne l'élément `consentio-header` (le `<header>` racine du composant).
2. Passe au breakpoint **Desktop** (le style est défini en breakpoint main).
3. Style panel → section **Effects** (dépliée) → section **Backdrop filter**.
4. Clique sur la propriété **Blur** et **supprime-la** (bouton `-` ou clic-droit → Remove property).

---

## Alternative que tu peux retenter plus tard si tu tiens à l'effet de flou

Si tu veux absolument garder l'effet `backdrop-filter: blur(10px)`, il faut **sortir le drawer du composant Header Consentio** et le placer directement au niveau body sur chaque page qui utilise le header. C'est ce que fait Lovable v3.

Étapes (pour info, à faire si tu changes d'avis) :
1. Créer un nouveau composant `Consentio Drawer` séparé qui contient uniquement le div drawer + son contenu.
2. Sur chaque page (Home 2, Retailers, Suppliers, Customer Stories, Legal Notice, Privacy Policy, Cookie Policy) : insérer une instance de `Consentio Drawer` au niveau body, à côté du header (pas dedans).
3. Recâbler les 2 interactions IX3 : le hamburger du composant Header doit maintenant cibler l'instance du Drawer sur la même page, pas un élément à l'intérieur du composant.

Beaucoup plus de travail (7 pages × 2 opérations, plus la restructuration des IX3), pour gagner un effet visuel marginal. Reco : rester sur la version sans `backdrop-filter`.

---

## Comment vérifier que le fix marche

1. **F5 dans le Designer** (sans ça, ton Designer garde l'ancienne version en cache).
2. Ouvre Home 2 (ou n'importe quelle page qui utilise le composant Header Consentio).
3. Passe en breakpoint **Mobile portrait**.
4. Clique **Preview** (icône œil en haut à droite).
5. Clique sur le hamburger.
6. Le drawer plein écran doit maintenant descendre depuis le haut jusqu'en bas de l'écran, couvrir tout le viewport, avec le bouton X en haut à droite, les 5 liens et les 3 boutons empilés au centre.

Si oui → Publish en staging → teste sur ton téléphone.
