# Icônes hamburger et close — Uploadées comme assets Webflow

**Date** : 2026-09-20
**Objectif** : remplacer les 2 Code Embed SVG inline par 2 assets uploadés dans Webflow, insérés comme éléments `Image` natifs. Rendre la maintenance accessible aux non-développeurs.

---

## Ce qui a été fait

### 1. Fichiers SVG versionnés dans le repo

- `iterations/2026-09-20-nav-header-desktop/icons/hamburger.svg` — 3 lignes horizontales, viewBox 24×24, stroke `#0d4a3a`.
- `iterations/2026-09-20-nav-header-desktop/icons/close.svg` — 2 lignes croisées (X), viewBox 24×24, stroke `#0d4a3a`.

Ces fichiers sont la source de vérité. Pour modifier une icône, on édite le SVG, on commit, on re-uploade l'asset dans Webflow.

### 2. Upload dans les assets Webflow

Les 2 SVG ont été uploadés via l'API Data Webflow :

| Fichier | Asset ID | URL hébergée |
|---|---|---|
| `icon-hamburger.svg` | `6aafd4d3efbfa59359204883` | `https://cdn.prod.website-files.com/6aa9284e2c3f1f5923e96572/6aafd4d3efbfa59359204883_icon-hamburger.svg` |
| `icon-close.svg` | `6aafd4d38885994c9f27cba1` | `https://cdn.prod.website-files.com/6aa9284e2c3f1f5923e96572/6aafd4d38885994c9f27cba1_icon-close.svg` |

Tu les vois dans le panneau **Assets** (icône dossier dans la barre gauche du Designer) → cherche `icon-hamburger` et `icon-close`.

### 3. Éléments Image insérés dans le composant

Dans `consentio-header__burger` : un élément `Image` pointant vers `icon-hamburger` (alt : « Ouvrir le menu »).
Dans `consentio-header__drawer-close` : un élément `Image` pointant vers `icon-close` (alt : « Fermer le menu »).

### 4. Nettoyage

- 2 Code Embed SVG supprimés.
- 3 divs CSS burger + 2 divs CSS close (créés dans une itération intermédiaire) supprimés.
- 2 styles inutilisés supprimés : `consentio-header__burger-line`, `consentio-header__close-line`.
- `consentio-header__burger` : `flex-direction: column` et `gap: 5px` retirés (l'Image se centre grâce à `justify-content: center` + `align-items: center` déjà en place).

---

## Comment modifier une icône (pour non-développeur)

### Option A — Modifier via le repo (versionné, historisé)

1. Ouvre le fichier `iterations/2026-09-20-nav-header-desktop/icons/hamburger.svg` (ou `close.svg`) dans le repo GitHub.
2. Édite le contenu SVG (change la couleur `stroke="#0d4a3a"`, ajoute une forme, etc.). Si tu ne sais pas éditer un SVG à la main, utilise Figma ou un outil comme SVGOMG.
3. Commit + push.
4. Va dans le Designer Webflow → Assets → clique sur l'ancien `icon-hamburger` → **Replace** → colle l'URL jsDelivr du nouveau SVG : `https://cdn.jsdelivr.net/gh/mariegainche-netizen/Webflow@claude/loving-hawking-pabtgy/iterations/2026-09-20-nav-header-desktop/icons/hamburger.svg`.

### Option B — Uploader directement dans Webflow (rapide, non versionné)

1. Ouvre le Designer → **Assets** (barre gauche).
2. Clique sur l'ancien asset `icon-hamburger` → bouton **Replace file** → choisis le nouveau SVG depuis ton ordinateur.
3. Toutes les instances de cette image sur le site sont automatiquement mises à jour.

Option A conservée = historique dans Git, tu peux revenir en arrière. Option B = plus rapide mais aucune trace.

---

## Points à savoir sur les SVG uploadés

- **La couleur est figée** dans le fichier SVG (`stroke="#0d4a3a"`). Si tu veux changer la couleur de l'icône, il faut regénérer le SVG avec la nouvelle couleur et re-uploader.
- **La taille est fixée à 24×24 pixels** dans le viewBox. Le fichier fait ~300 octets, très léger.
- **L'accessibilité** est prévue : `role="img"` et `aria-label` sur le SVG source, `alt` sur l'élément Image Webflow (« Ouvrir le menu » / « Fermer le menu »).

---

## Vérification finale

1. **F5 dans le Designer**.
2. Ouvre le composant Header Consentio.
3. Passe en breakpoint Tablet ou Mobile portrait.
4. Le hamburger doit afficher un icône 3 lignes propre.
5. Preview → clic hamburger → drawer s'ouvre.
6. Icône X en haut à droite du drawer, clic dessus → drawer se ferme.

Si tout est bon → Publish staging → test sur téléphone.
