# Fix — Liens du drawer + toggle qui refonctionne à chaque clic

**Date** : 2026-09-20
**Symptômes signalés par Marie** :
1. Cliquer sur « For Retailers » ou « For Suppliers » dans le drawer ne redirige nulle part.
2. Une fois le drawer fermé (clic X), un nouveau clic sur le hamburger n'ouvre plus rien.

---

## Fix 1 — Liens du drawer

### Cause racine

Lors de la construction du drawer, les 5 liens de navigation ont été créés avec `linkType: url` pointant vers des chemins **français inventés** (`/pour-les-distributeurs`, `/pour-les-fournisseurs`, `/cas-clients`, `/ressources`, `/entreprise`, `/demander-une-demo`) qui **ne correspondent à aucun slug de page existant** sur le site Webflow.

Les slugs des pages réelles sont en anglais :
- Retailers → `/retailers`
- Suppliers → `/suppliers`
- Customer Stories → `/customer-stories`
- Home 2 → `/home-2`
- (les autres pages, à créer)

### Correction appliquée

Les 3 liens qui correspondent à une page existante ont été basculés en `linkType: page` avec le pageId direct :

| Lien | Élément id | linkType → | Cible |
|---|---|---|---|
| For Retailers | `0a0b80a7-1b9d-895f-3c00-f2422d0b9d66` | `page` | pageId `6aabe6b7730eb6bd2010a764` (page `Retailers`, slug `/retailers`) |
| For Suppliers | `75e0a749-4c80-2e1d-40df-4d3f0b34b694` | `page` | pageId `6aabe6d6c42b0be0e237f900` (page `Suppliers`, slug `/suppliers`) |
| Customer Stories | `4a6c40d7-195a-27d4-9c4c-ee1c7c0e8f9c` | `page` | pageId `6aad5d99161f7a5e94a7b0f9` (page `Customer Stories`, slug `/customer-stories`) |

### Ce qui reste à faire (à ta charge Marie)

Trois liens du drawer pointent vers des pages qui **n'existent pas encore** dans ton projet Webflow. Ils gardent leur URL actuelle mais renvoient une 404.

| Lien | URL actuelle | Action à prendre |
|---|---|---|
| Resources | `/ressources` | Créer la page « Resources » (Add page → slug `resources`) puis venir mettre à jour le lien en `linkType: page` |
| Company | `/entreprise` | Créer la page « Company » (slug `company`) puis mettre à jour le lien |
| Book a demo | `/demander-une-demo` | Créer la page « Book a demo » (slug `book-demo`) puis mettre à jour le lien |

Alternative : si tu ne veux pas encore de vraies pages, tu peux mettre le lien en `#` temporairement (les liens ne redirigent nulle part mais évitent la 404).

### Comment reproduire toi-même

Dans le Designer, sur chaque lien concerné :
1. Sélectionne le lien dans le drawer.
2. Onglet **Settings** (droite) → section `Link`.
3. Change `Link type` : de `URL` à `Page`.
4. Dans le dropdown `Page`, sélectionne la page cible.
5. Save.

---

## Fix 2 — Toggle du drawer

### Cause racine

Les deux interactions IX3 initiales utilisaient `Set style > display: flex` pour ouvrir et `Set style > display: none` pour fermer. Le trigger était `wf:click` avec `control: "restart"`.

Le problème : sur un `Set` avec toujours la même valeur cible (`display: flex`), l'interaction devient inerte au 2e clic parce que le style inline est déjà celui demandé. Webflow considère la timeline « déjà à sa fin ».

### Correction appliquée

Bascule vers un mécanisme `toggleClass` :

1. **Nouvelle classe globale** créée : `.consentio-drawer-open` (id `dee4c54d-543f-2fef-71d4-6f2957157b0a`), avec juste `display: flex`.
2. Les **2 anciennes interactions IX3 supprimées** (`i-46ce50fc` open, `i-430bec25` close).
3. **2 nouvelles interactions IX3 créées** :
   - `i-b170279c` — « Toggle Consentio drawer from burger » : clic sur hamburger → `toggleClass(consentio-drawer-open)` sur le drawer.
   - `i-d5b47912` — « Toggle Consentio drawer from close » : clic sur bouton X → `toggleClass(consentio-drawer-open)` sur le drawer.

Comportement attendu :
- État initial : drawer sans la classe → `display: none` (via `.consentio-header__drawer`).
- Clic hamburger → ajoute `.consentio-drawer-open` → `display: flex` (via la classe toggle qui a une priorité CSS suffisante).
- Clic X → retire la classe → retour `display: none`.
- Nouveau clic hamburger → ajoute la classe → `display: flex`.
- Etc. Toujours dans les deux sens.

### Comment reproduire toi-même

Dans le Designer :

**Étape A — Créer la classe toggle**
1. Sélectionne le drawer.
2. Style panel → clique dans le sélecteur de classe (au-dessus de « Inheriting X selectors »).
3. Tape `consentio-drawer-open` → Entrée (Webflow crée la classe).
4. Applique : Layout → Display → `Flex`.

**Étape B — Recréer les 2 interactions**
1. Sélectionne le hamburger.
2. Onglet Interactions (droite) → supprime l'ancienne interaction s'il en reste une.
3. `+ New interaction` → Type : `Mouse click` → nomme `Toggle drawer from burger`.
4. Action → `Set class` → target : le drawer → operation : `Toggle class` → classe : `consentio-drawer-open`.
5. Save.
6. Répète pour le bouton X (nomme l'interaction `Toggle drawer from close`).

---

## Vérification finale

1. **F5 dans le Designer**.
2. Ouvre le composant Header Consentio.
3. Preview → mobile → clic hamburger → drawer s'ouvre.
4. Clic X → drawer se ferme.
5. Clic hamburger à nouveau → drawer se rouvre. Bingo si oui.
6. Teste For Retailers → doit rediriger vers `/retailers`.
7. Idem pour For Suppliers et Customer Stories.

Publish staging et test sur téléphone.
