# NOTICE — Collection CMS « Customer Stories »

Objectif : remplacer le bloc statique de 3 cards par une Collection List Webflow, alimentée via l'onglet CMS.

---

## Pièges à connaître avant de commencer

- **Plan Webflow requis** : Basic n'a **pas de CMS**. Il faut passer au moins en **CMS** (29 €/mois) ou en **Business** (49 €/mois). Comme Business + Localization est déjà prévu après validation Emilien, on active tout d'un coup.
- **1 collection = 1 URL template** : dès qu'on crée la collection, Webflow génère automatiquement `/customer-stories/[slug]` (la page template). On récupère aussi `/customer-stories` comme index — à laisser pour l'instant, on la remplira plus tard.
- **Slug immuable** : changer un slug casse tous les liens qui pointent dessus. Fixe-les proprement dès la création (kebab-case, sans accent : `bell-food-group`, pas `Bell Food Group`).
- **Locales** : la collection est créée dans la locale primaire (EN). Les traductions FR/ES se font item par item, champ par champ, après activation de Localization. Ne crée **pas** trois collections séparées par langue.
- **Tags = collection séparée** : si tu veux filtrer/rechercher plus tard, les tags doivent être une deuxième collection référencée (Multi-reference). Sinon Option field suffit pour l'affichage.

---

## Structure de la collection

**Nom** : `Customer Stories`
**Singular name** : `Customer story`
**Slug de la collection** : `customer-stories`

### Champs à créer

| # | Nom du champ (Webflow) | Type | Requis | Slug auto | Usage dans la card |
|---|---|---|---|---|---|
| 1 | Name | Plain text (défaut) | ✅ | `name` | `.story-name` (ex. « Manor ») |
| 2 | Slug | Slug (défaut) | ✅ | `slug` | URL `/customer-stories/manor` |
| 3 | Industry | Plain text | ✅ | `industry` | `.story-industry` (ex. « Food retail ») |
| 4 | Category badge | Option | ✅ | `category-badge` | `.story-badge` overlay image |
| 5 | Cover image | Image | ✅ | `cover-image` | `.story-media img` |
| 6 | Cover alt | Plain text | ⭕ | `cover-alt` | attribut `alt` image (accessibilité) |
| 7 | Card title | Plain text | ✅ | `card-title` | `.story-title` (le gros titre bold) |
| 8 | Excerpt | Plain text (multi-line, ~180 char) | ✅ | `excerpt` | `.story-excerpt` |
| 9 | Stat 1 | Plain text | ✅ | `stat-1` | 1er `<li>` `.story-stats` |
| 10 | Stat 2 | Plain text | ⭕ | `stat-2` | 2e `<li>` `.story-stats` |
| 11 | Tags | Multi-reference → Product modules | ⭕ | `tags` | `.story-tag` (voir bloc « Tags » ci-dessous) |
| 12 | Featured on home | Switch | ⭕ | `featured-on-home` | filtre la Collection List |
| 13 | Order | Number | ⭕ | `order` | tri manuel |
| 14 | Body content | Rich text | ⭕ | `body-content` | corps de la page template (à faire plus tard) |
| 15 | Published date | Date/Time | ⭕ | `published-date` | tri par défaut |

### Option field « Category badge » — valeurs à préremplir

- `Fresh produce`
- `Meat and poultry`
- `Seafood`
- `Dairy`
- `Bakery`
- `Beverages`

### Collection secondaire « Product modules » (pour les tags)

Crée d'abord cette petite collection **avant** le champ Tags de Customer Stories.

**Nom** : `Product modules` · Singular : `Product module` · Slug : `product-modules`

Champs :

| Nom | Type | Requis |
|---|---|---|
| Name | Plain text | ✅ |
| Slug | Slug | ✅ |

Items à créer (5 lignes) :

- `Offers and allocation`
- `Orders and collaboration`
- `Integrations`
- `Data and intelligence`
- `Logistics`

C'est ça qui alimente les pills grises en bas des cards. Avantage : si demain tu renommes « Data and intelligence » en « Analytics », un seul endroit à changer.

---

## Étapes dans Webflow Designer

### 1. Créer la collection « Product modules » (2 min)

1. Panneau **CMS Collections** (icône base de données à gauche)
2. **+ New Collection** → `Product modules`
3. Le champ `Name` et `Slug` existent par défaut, tu n'as rien d'autre à ajouter
4. **Create Collection**
5. Onglet **Collections → Product modules → + New Item** : crée les 5 items listés ci-dessus. **Publish**.

### 2. Créer la collection « Customer Stories » (5 min)

1. **+ New Collection** → `Customer Stories`
2. Pour chaque champ du tableau plus haut :
   - **+ Add New Field**
   - Choisir le type (colonne « Type »)
   - Nommer exactement comme dans la colonne « Nom du champ »
   - Cocher **Required** si ✅
   - Pour **Category badge** : type **Option** → clic **+ Add Option** et coller les 6 valeurs
   - Pour **Tags** : type **Multi-reference** → **Reference Collection** = `Product modules`
3. **Create Collection**

### 3. Créer les 3 premiers items (10 min)

Onglet **Customer Stories → + New Item**, remplir avec les données ci-dessous puis **Save & Publish**.

**Item 1 — Manor**

- Name : `Manor`
- Slug : `manor` (auto-généré, à vérifier)
- Industry : `Food retail`
- Category badge : `Fresh produce`
- Cover image : upload `assets/hands-market.jpg` (ou une vraie photo Manor si tu en as)
- Cover alt : `Fresh produce market`
- Card title : `Digitalizing fresh food purchasing and supplier collaboration`
- Excerpt : `A centralized platform to simplify exchanges between buyers and suppliers and improve control across purchasing operations.`
- Stat 1 : `70% less email back-and-forth`
- Stat 2 : `3x faster offer collection`
- Tags : ☑️ `Offers and allocation`, ☑️ `Orders and collaboration`
- Featured on home : ✅ ON
- Order : `1`

**Item 2 — Bell Food Group**

- Name : `Bell Food Group`
- Slug : `bell-food-group`
- Industry : `Fresh food manufacturing`
- Category badge : `Meat and poultry`
- Cover image : upload une photo viande/volaille
- Card title : `Connecting fresh food operations with enterprise systems`
- Excerpt : `Structured workflows, automated notifications and digital processes designed to complement existing ERP environments.`
- Stat 1 : `95% of orders sent to ERP automatically`
- Stat 2 : `Zero manual re-keying`
- Tags : ☑️ `Orders and collaboration`, ☑️ `Integrations`
- Featured on home : ✅ ON
- Order : `2`

**Item 3 — Ultra Marine**

- Name : `Ultra Marine`
- Slug : `ultra-marine`
- Industry : `Seafood`
- Category badge : `Seafood`
- Cover image : upload une photo poisson
- Card title : `Aggregating offers and automating operational flows`
- Excerpt : `Real-time supplier offer consolidation combined with the automation of logistics and financial workflows.`
- Stat 1 : `Offers consolidated in real time`
- Stat 2 : `60% faster order-to-invoice cycle`
- Tags : ☑️ `Offers and allocation`, ☑️ `Orders and collaboration`, ☑️ `Data and intelligence`
- Featured on home : ✅ ON
- Order : `3`

---

## Remplacer le bloc statique par la Collection List (7 min)

Deux méthodes selon comment la Home est construite aujourd'hui :

### Méthode A — Home reconstruite en éléments natifs Webflow (recommandé, la Home 2 FR)

1. Ouvrir la Home dans le Designer
2. Repérer la `<section>` Customer Stories → sélectionner le div `.stories-grid`
3. **Supprimer les 3 cards statiques**
4. **Add Element → CMS → Collection List** → glisser à la place
5. Panneau **Collection List Settings** → **Source** = `Customer Stories`
6. **Limit items** = `3`
7. **Sort** = `Order` ascending (ou `Published date` descending)
8. **Filter** = `Featured on home` is `On`
9. Sur le wrapper de la Collection List, appliquer la classe `stories-grid`
10. Sur le Collection Item, appliquer la classe `story-card` et le tag HTML `Article`
11. À l'intérieur de la Collection Item, reconstruire la structure :
    - Link Block `.story-media` avec **Settings → Link → Current item** → attribut `href` sera `/customer-stories/[slug]` automatiquement
      - Image `.story-media img` → **Get image from** `Cover image`, **Alt** `Cover alt`
      - Text Block `.story-badge` → **Get text from** `Category badge`
    - Div `.story-body`
      - Heading H3 `.story-name` → `Name`
      - Text Block `.story-industry` → `Industry`
      - Heading H4 `.story-title` → `Card title`
      - Paragraph `.story-excerpt` → `Excerpt`
      - Div `.story-stats` (balise HTML `ul`)
        - Text Block `<li>` → `Stat 1`
        - Text Block `<li>` → `Stat 2` (settings **Conditional Visibility** : cacher si `Stat 2` est empty)
      - Div `.story-tags` contenant une **Collection List imbriquée** → source = `Tags` (multi-reference) → Text Block `.story-tag` liant `Name`
      - Link Block `.story-link` → Current item → texte statique « Read customer story »

Les classes CSS existantes (`.story-card`, `.story-media`, `.story-body`…) sont **déjà stylées** via `consentio-styles.min.css` : rien à re-styliser dans Webflow, il suffit d'appliquer les mêmes noms de classes.

### Méthode B — Home en Embed HTML (la Home V3, temporaire)

L'Embed ne peut pas lire le CMS. Deux options :

1. **Sortir la section Customer Stories de l'Embed** et la reconstruire en natif juste en dessous, en suivant la Méthode A. Le reste de la page reste en Embed.
2. Ou coder un fetch de l'API Webflow CMS côté client (surcouche pénible, à éviter pour un MVP).

Recommandé : Méthode B option 1.

---

## Page template `/customer-stories/[slug]`

Auto-générée par Webflow au moment où tu crées la collection. Pour l'instant on la laisse minimale :

1. Panneau **Pages → CMS Collection Pages → Customer story Template**
2. H1 lié à `Name`
3. Sous-titre lié à `Industry`
4. Hero image liée à `Cover image`
5. Rich Text lié à `Body content`
6. Publier vide → les 3 URLs `/customer-stories/manor`, `/bell-food-group`, `/ultra-marine` existeront et ne 404 pas

On enrichira cette page plus tard, une fois le contenu client rédigé.

---

## Import CSV en masse

Deux fichiers dans le repo à côté de cette notice :

- `product-modules-template.csv` — la petite collection des tags (5 lignes)
- `customer-stories-template.csv` — la collection principale, avec les 3 items déjà remplis (Manor, Bell, Ultra Marine) + 6 items vides pré-slugués (Carrefour, E.Leclerc, ALDI, Intermarché, METRO, Kroger) prêts à être complétés

### Pièges CSV Webflow à connaître

- **Ordre obligatoire** : importer `product-modules-template.csv` **en premier**, sinon la colonne `tags` de Customer Stories n'aura rien à référencer.
- **Multi-reference dans une cellule** : Webflow attend les **noms** des items (pas les slugs), séparés par un **point-virgule** `;`. Exemple : `Offers and allocation;Orders and collaboration`. C'est ce qui est déjà mis dans le template.
- **Booléens Switch** : `true` / `false` (pas `1`/`0`, pas `oui`/`non`).
- **Champ Option** : la valeur doit **exister exactement** dans les options que tu as créées (respect de la casse et de l'orthographe). Si tu ajoutes `Dairy` dans le CSV mais que l'option Dairy n'existe pas encore côté Webflow, l'import échoue sur cette ligne.
- **Images** : Webflow ne peut importer que des **URLs directes publiques** (`https://…/photo.jpg`). Si tu n'as pas d'hébergement, laisse la colonne `cover-image` vide et upload manuellement après l'import via l'interface CMS (drag & drop dans chaque item).
- **Slug immuable** : mets un slug propre dès le CSV, ne renomme pas après. Kebab-case, sans accent : `intermarche` pas `Intermarché`.
- **Encoding** : sauvegarde en **UTF-8** (par défaut sous Numbers/Excel avec « Enregistrer sous → CSV UTF-8 »). Sinon les accents/caractères spéciaux cassent.
- **Séparateur** : Webflow attend une **virgule** `,`. Si Excel FR t'exporte avec `;` (par défaut FR), reconfigure l'export ou remplace le séparateur avant l'import. Les valeurs qui contiennent une virgule doivent être entre `"…"` (déjà géré dans le template pour Bell Food Group).
- **Limite** : 10 000 lignes par import. Largement de la marge.

### Étapes d'import (Webflow Designer)

**1. Import des Product modules**

1. CMS → **Product modules** → bouton **⋯** en haut à droite → **Import CSV**
2. Sélectionner `product-modules-template.csv`
3. Mapping automatique (colonnes `name` et `slug` reconnues)
4. **Import** → **Publish** les 5 items

**2. Import des Customer Stories**

1. CMS → **Customer Stories** → **⋯ → Import CSV**
2. Sélectionner `customer-stories-template.csv`
3. Mapper chaque colonne CSV au champ Webflow correspondant :

| Colonne CSV | → Champ Webflow |
|---|---|
| `name` | Name |
| `slug` | Slug |
| `industry` | Industry |
| `category-badge` | Category badge (Option) |
| `cover-image` | Cover image (Image, URL) — vide si upload manuel |
| `cover-alt` | Cover alt |
| `card-title` | Card title |
| `excerpt` | Excerpt |
| `stat-1` | Stat 1 |
| `stat-2` | Stat 2 |
| `tags` | Tags → **séparateur `;`** |
| `featured-on-home` | Featured on home (Switch) |
| `order` | Order |
| `body-content` | Body content (Rich text) |
| `published-date` | Published date |

4. Cocher **Draft** ou **Publish** selon si tu veux publier tout de suite
5. **Import**
6. Webflow affiche un rapport : lignes importées, ignorées, avec erreurs. **Corrige les rouges** et réimporte uniquement ces lignes.

### Workflow de remplissage recommandé

Comme tu vas avoir beaucoup de cas clients (Carrefour, E.Leclerc, ALDI, Intermarché, METRO, Kroger + les 3 déjà présents), le plus efficace :

1. Ouvrir `customer-stories-template.csv` dans **Google Sheets** (Fichier → Importer → **avec virgule** en séparateur)
2. Remplir les lignes ligne à ligne (une par client)
3. Uploader les 9 images sur un **Google Drive public** ou directement dans les **Assets Webflow** (Assets → Upload) — pour Assets Webflow tu récupères ensuite l'URL en cliquant sur l'asset dans le panneau
4. Coller les URLs dans la colonne `cover-image`
5. Fichier → Télécharger → **Valeurs séparées par des virgules (.csv)**
6. Réimporter dans Webflow → les items existants sont **mis à jour** (matching sur le slug) et les nouveaux sont créés

Pratique : le même CSV sert pour la création initiale ET les mises à jour, tant que les slugs ne bougent pas.

### Localisation FR / ES

L'import CSV ne fait qu'importer la locale primaire (EN). Pour FR et ES, deux options une fois Localization activé :

- **A. Traduction champ par champ dans l'interface** : ouvrir chaque item, switcher la locale en haut, retraduire les champs traduisibles (Name reste identique, Card title/Excerpt/Stat 1/Stat 2 se traduisent). Compter ~3 min par item par langue.
- **B. Export → traduire → réimport par locale** : plus rapide sur du volume. Webflow ne le supporte nativement que sur Enterprise ; sur Business il faut passer par des extensions comme **PowerImporter** ou **Weglot** (payant). Pour 9 items, la Méthode A suffit.

---

## Checklist de validation avant push staging

- [ ] Les 3 cards s'affichent bien avec image + badge overlay + stats + tags
- [ ] Le hover soulève la card et zoome légèrement l'image
- [ ] Le lien de la card entière pointe bien vers `/customer-stories/[slug]` du bon item
- [ ] La section reste dark (fond forest), les cards sont blanches
- [ ] Mobile : les cards passent en 1 colonne, tout est lisible
- [ ] `Stat 2` masqué proprement si l'item n'en a qu'une
