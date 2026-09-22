# Claude – Contexte projet Consentio/Klarys Webflow

## Contexte
- **User** : Marie Gainche, Growth Marketer chez Consentio (mission CDD 2 semaines, sept. 2026)
- **Mission** : fusion des sites `fr.consentio.co` (Consentio) + `klarys.io/en` (Klarys) sur Webflow
- **Site Webflow actif** : `test-8af0bb.design.webflow.com` (id : `6aa9284e2c3f1f5923e96572`)
- **Nom interne** : `consentio-v2-sept2026`
- **Stack** : Webflow · Finsweet CMS Filter · n8n · HubSpot · Google Workspace

## Style de réponse attendu
- **Français**, direct, actionnable, solution la plus rapide en premier
- **Ponctuation française stricte** : `« »` avec espaces insécables, espace avant `:` `;` `!` `?`
- **Jamais de tirets doubles** `--`
- **Google Sheets** : formules FR (séparateur `;`, fonctions FR)
- Anticipe les pièges avant qu'ils arrivent
- Bullet points avec métriques si pertinent, pas d'intro/conclusion creuse

---

## Skills Webflow MCP — cheatsheet réutilisable

### Setup session
1er appel à un tool Webflow renvoie un `session_id` (`ses_...`) à réutiliser sur TOUS les appels suivants.

### Formats d'appel qui posent souvent problème

**Tous les tools** attendent :
- `session_id` (obligatoire après le 1er)
- `actions` (array), chaque action a un `label` + une clé opération

**data_cms_tool** — clé `collection_id` (snake_case), pas `collectionId`
```json
{"label":"list","get_collection_list":{"siteId":"..."}}
```
Note : `get_collection_list` utilise `siteId` (camelCase), les autres utilisent `collection_id`.

**Update Image field** : format objet obligatoire avec `fileId` + `url` + `alt`
```json
"company-logo": {"fileId": "asset_id", "url": "https://...", "alt": "..."}
```
Passer juste `"asset_id"` renvoie null silencieusement.

**Update CMS item** : passer TOUS les champs required (industry, name, slug, audience, category-badge, cover-image, card-title, excerpt, stat-1), sinon 400 « Missing fields ».

**data_style_tool** — `create_style` / `update_style` :
- `property_name` + `property_value` (pas `name` + `value`)
- `update_style` : clé `style_name` (pas `name`)

**data_element_builder** :
- `parent_element_id` = objet `{component, element}` (pas string)
- `element_schema.type` doit être exactement une des valeurs enum : `DivBlock` (pas `Block`), `Section`, `Heading`, `TextBlock`, `Paragraph`, `Button`, `TextLink`, `LinkBlock`, `Image`, `RichText`, `Blockquote`, `HtmlEmbed`, `CMSCollection`…
- `settings` = array de `{key, static_text: {value}}` ou `static_link: {...}` etc.

**data_element_tool** — `set_style` :
- `style_names` (array) — n'applique que des classes DÉJÀ existantes
- Pour créer une nouvelle classe : `data_style_tool.create_style` d'abord

### Bindings CMS depuis MCP
Les bindings CMS pour éléments créés via MCP dans un template page échouent avec « Element is not inside a CMS context ».
**Workaround** : créer avec `static_text: {value: "[BIND: nom-du-champ]"}` en placeholder, puis binder manuellement dans le Designer.

### Assets Webflow (logos)
Dossier logos clients : `Retailers/Suppliers` (id : `6aad3cfbf6e5ae95d29a850e`) — 40+ logos disponibles.
Autres dossiers : `ERP logos`, `Legal`.

---

## Collection Customer Stories

- **Collection ID** : `6aaaa9eaa4ef2ec5101405cb`
- **Locale ID** : `6aaaa9e9b498ff08c62f3714`
- **Page listing** : `6aad5d99161f7a5e94a7b0f9` (`/customer-stories`)
- **Template article** : `6aaaa9eaa4ef2ec5101405d1` (`/customer-stories/[slug]`)

### Champs (28 au total)
- Requis : `name`, `slug`, `industry`, `category-badge` (Option), `cover-image`, `card-title`, `excerpt`, `stat-1`, `audience` (Option)
- Optionnels : `stat-2`, `tags` (multi-ref → Product modules), `featured-on-home`, `order`, `body-content` (RichText), `published-date`, `company-logo`, `read-time`, `original-article-url`, `client-quote`, `quote-author-name`, `quote-author-role`, `quote-author-photo`, `video-url`, `pdf-download`, `seo-meta-title`, `seo-meta-description`, `open-graph-image`, `canonical-url`, `source-brand` (Option: Consentio/Klarys), `country` (Option)

### Options `audience`
- Suppliers : `76f932908b5682cdc586588af241fe63`
- Retailers : `f8d9125a7adde7cd21ef1acde7f29b2b`
- Both : `2cae17cb8737f828869a3d28d6259c9e`

### Options `source-brand`
- Consentio : `bc1b890586ce5e0ad37ce14d8173dd86`
- Klarys : `7a8d0ad7fbeb5be56a8df03908b89d37`

### Classes CSS custom (préfixe `cs-`)
Toutes créées et appliquées sur la page listing. Modifiables dans le Designer via Style Panel :
- `cs-card` (Link Block) — carte : blanc, radius 16px, border, hover
- `cs-card-media` — wrapper image (position relative)
- `cs-card-cover` — image cover : 220px, object-fit cover
- `cs-card-logo` — logo overlay top-left : fond blanc, ombre
- `cs-card-badge` — pill catégorie : vert clair `#EAF3EC`
- `cs-card-title` — H3 : vert Consentio, weight 700
- `cs-card-excerpt` — paragraphe : gris `#555`
- `cs-card-meta` — meta ligne : flex gap 8px
- `cs-cards-grid` — grille 3 colonnes desktop
- `cs-audience-hidden` — display:none pour le Text Block Finsweet
- `Button` (base) + combo `is-active` — filtres pill vert Consentio

### Couleurs brand
- Vert Consentio principal : `#0F3B2E`
- Vert clair badge : `#EAF3EC`
- Gris texte : `#555555`
- Gris meta : `#888888`
- Border card : `#EAEAEA`

---

## Finsweet CMS Filter — setup type

**Script** (Site Settings → Custom code → Footer) :
```html
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js"></script>
```

**Attributs à poser** :
- Collection List : `fs-cmsfilter-element="list"`
- Chaque item : un Text Block bindé au champ, avec `fs-cmsfilter-field="nom-du-champ"` (peut être display:none)
- Boutons filtres : `fs-cmsfilter-field="nom-du-champ"` + `fs-cmsfilter-active="is-active"` — la VALEUR filtrée = le texte visible du bouton
- Bouton reset ("All") : `fs-cmsfilter-element="reset"` + `fs-cmsfilter-active="is-active"`

**Piège classique** : mettre `fs-cmsfilter-field="Retailers"` au lieu de `fs-cmsfilter-field="audience"` — le field name est le nom du CHAMP CMS, pas la valeur.

Les filtres ne marchent QUE sur le site publié, pas dans le Designer.

---

## Google Sheets Consentio

- **Sheet principal customer stories** : `183yvofDnT92FLohYIrmhTqUkt1NLlARzRqtxnN09X68`
- Contient : 8 customer stories + ~40 articles blog (Klarys + Consentio)
- Recommandation : **1 sheet, 2 onglets** (Customer Stories / Resources) → 2 Collections Webflow séparées

---

## Réseau
- `klarys.io` **bloqué** par le proxy sortant de l'environnement Claude → impossible de scraper les articles source. Utiliser copier-coller manuel si contenu à récupérer.
