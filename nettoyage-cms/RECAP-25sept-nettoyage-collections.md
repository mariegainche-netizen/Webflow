# Nettoyage des collections CMS : plan du 25/09

> Inventaire via l'API Webflow le **24/09 au soir**, en lecture seule (rien n'a été modifié). Site **Consentio 2026** (`6aaaafd0271107b340148c86`). Bascule visée **lundi 28/09**.
> Complète le [nettoyage des pages](https://github.com/mariegainche-netizen/Webflow/blob/claude/peaceful-sagan-o1u9j9/nettoyage-pages/RECAP-25sept-nettoyage-pages.md) (demain 9 h 30) : même règle, **archiver d'abord, supprimer mi-octobre**.
> **Sheets de travail** : [Inventaire collections CMS · Consentio 2026](https://docs.google.com/spreadsheets/d/14n9_5hoakdAT5sYw2uUv3WWnwoAgH_kb1jGd7sXc1pU/edit) (1 ligne par collection, colonne « Validé par ») · [Tri des 95 articles du blog](https://docs.google.com/spreadsheets/d/1Xibzb15rkydZ9RyD3S8Lh44oXinQC6WmgjsMBLyoeYk/edit) (1 décision et 1 cible 301 par article)
> **Fichiers** : [`inventaire-collections-consentio-2026.csv`](inventaire-collections-consentio-2026.csv) (1 ligne par collection) · [`tri-95-articles-blog.csv`](tri-95-articles-blog.csv) (1 ligne par article) · [`redirections-301-cms.csv`](redirections-301-cms.csv) (lisible) · [`import-webflow-301-cms.csv`](import-webflow-301-cms.csv) (à importer lundi) · [`import-webflow-301-klarys.csv`](import-webflow-301-klarys.csv) (site klarys.io)

---

## ⚡ En bref

| Question | Réponse |
|---|---|
| Faut-il tout garder ? | **Non.** 4 collections sur 24 font le nouveau site. Les **20 autres** viennent de l'ancien site (2020-2023) : **363 items, dont 348 publiés**. Doublons, démos, salons 2021, anciennes équipes. |
| Comment nettoyer d'ici lundi ? | **Archiver, ne rien supprimer.** Les 363 items passent en « Archived » via l'API (≈ 5 min, réversible) : ils ne partent pas en ligne lundi. Suppression des collections **mi-octobre**, une fois les 404 propres. |
| Comment y voir clair ? | Le Sheet : 1 ligne par collection, 1 verdict, 1 cible, 1 règle 301. Dans Webflow : 4 collections au lieu de 24 après la suppression (option demain : préfixer les 20 anciennes « OLD · »). |
| Comment structurer ? | **2 collections de contenu** (Resources, Customer Stories) + **2 de données** (Product modules, Logos clients). 5 règles en section 4. |
| Synergies ? | Content Hubs = **116 copies sur 121** du blog et des podcasts · **34 articles** déjà repris dans Resources · **3 cas sur 4** de Use Cases déjà dans Customer Stories · **4 témoignages** rangés à tort dans Resources · **1 seul fichier 301** pour pages + CMS. |
| Nouvelles versions ? | **Oui, ciblées** : 13 anciens articles → **8 ressources** à réécrire (1 par semaine = 2 mois de contenu) · 20 articles fusionnés dans une ressource existante · 4 témoignages → Customer Stories (8 → 12). |
| Temps demain | **≈ 20 min à 10 h**, juste après le nettoyage des pages. |

---

## 1. Les 24 collections en un coup d'œil

| Verdict | Collections | Items | Publiés |
|---|---|---|---|
| ✅ Garder | Resources (55) · Customer Stories (8) · Product modules (5) · Retailers Logo (20) | 88 | 88 |
| 🔀 Fusionner | Blog Posts (95) → Resources · Use Cases (4) → Customer Stories · Ebooks (1) → Resources | 100 | 94 |
| 🗄 Archiver : doublons et démos | Content Hubs (121) · Blog Posts only- es (7) | 128 | 126 |
| 🗄 Archiver : obsolètes | New Features · Banners · Landing logos · Landing page -logos · FRuit attractions · Team in Fruit a & South summits · Office locations · Jobs · Integrations Tools · Integrations Categories | 41 | 34 |
| ❓ Archiver par défaut, à trancher | Podcasts (32) · Media (32) · Team Members (23) · Categorias kit digitals (7) | 94 | 94 |
| 🗑 Supprimer | Webinars (vide) | 0 | 0 |

<details>
<summary>Détail des 24 collections</summary>

| Collection | Items (publiés) | Dernier item | Verdict | Cible |
|---|---|---|---|---|
| Resources | 55 (55) | 09/2026 | Garder | +8 nouvelles versions · 4 témoignages → Customer Stories |
| Customer Stories | 8 (8) | 09/2026 | Garder | +4 témoignages → 12 stories |
| Product modules | 5 (5) | 09/2026 | Garder (données) | Modèle en noindex |
| Retailers Logo collections | 20 (20) | 09/2026 | Garder (données) | Renommer « Logos clients », modèle en noindex |
| Blog Posts | 95 (90) | 10/2025 | Fusionner → Resources | Voir section 5 et `tri-95-articles-blog.csv` |
| Content Hubs | 121 (119) | 04/2024 | Archiver | 116 doublons, 5 items obsolètes |
| Blog Posts only- es | 7 (7) | 01/2023 | Archiver | 5 articles de démo du gabarit Webflow + 2 « ACTUALIDAD » |
| Use Cases | 4 (3) | 06/2025 | Fusionner → Customer Stories | 3 déjà repris · Ame Haslé à ajouter |
| Ebooks | 1 (1) | 06/2021 | Fusionner → Resources (option) | Republier avec `pdf-download` s'il sert encore d'aimant à leads |
| Podcasts | 32 (32) | 07/2022 | À trancher | Série arrêtée en 2022 · option : 2-3 épisodes en ressources |
| Media | 32 (32) | 04/2021 | À trancher | Presse 2020-2021 · option : 6 logos statiques sur About Us |
| Team Members | 23 (23) | 12/2023 | À trancher | Anciennes équipes · option : équipe actuelle sur About Us |
| Categorias kit digitals | 7 (7) | 02/2022 | À trancher (ES) | Programme Kit Digital |
| Jobs | 7 (1) | 10/2022 | Archiver | 1 offre de stage 2022 encore publiée |
| Office locations | 2 (2) | 06/2021 | Archiver | San Francisco et Barcelona · Paris et Rennes absents |
| Integrations Tools | 6 (6) | 05/2020 | Archiver | Outlook, WhatsApp, Excel… (2020) |
| Integrations Categories | 5 (5) | 06/2020 | Archiver | Référencée par Integrations Tools |
| New Features | 2 (2) | 04/2021 | Archiver | 2 nouveautés produit 2021 |
| Banners | 2 (1) | 03/2022 | Archiver | Bandeau Kit Digital 2021 |
| FRuit attractions | 6 (6) | 09/2021 | Archiver | Landing salon 2021 |
| Team in Fruit a & South summits | 3 (3) | 12/2021 | Archiver | Équipe salons 2021 |
| Landing logos | 2 (2) | 09/2021 | Archiver | Logos salons 2021 |
| Landing page -logos | 6 (6) | 09/2021 | Archiver | E.Leclerc, Walmart, Greenery absents de Logos clients |
| Webinars | 0 (0) | — | Supprimer | Vide |

</details>

---

## 2. Demain 10 h : 5 étapes (≈ 20 min)

1. **Sauvegarde (1 min)** : celle de 9 h 30 suffit si rien n'a été publié entre-temps ; sinon Site settings › Backups › « Avant nettoyage CMS 25/09 ».
2. **Dire « go CMS » à Claude (1 min)**. Claude vérifie les Collection Lists restantes (section 10), puis archive via l'API les **363 items des 20 collections héritées** (≈ 5 min, réversible).
   - Sans Claude : CMS › collection › cocher tous les items › **Archive** (≈ 15 min).
3. **Vérifier (5 min)** : publier en **staging seulement**, puis Preview : Home, Retailers, Suppliers, Resources, Customer Stories (logos, cartes, stories).
4. **Message à Emilien (2 min)** : section 7, à grouper avec celui des pages. Sans réponse à 16 h : défaut appliqué (archivé).
5. **Option (5 min)** : renommer les 20 collections « OLD · Blog Posts »… (CMS › ⚙ de la collection › Collection name). Le slug et les URL ne changent pas.

⚠️ **Pas vendredi** : suppression de collections, import des 301 (lundi), réécriture d'articles, ajout ou suppression de champs.

---

## 3. Synergies

| Synergie | Gain |
|---|---|
| **Content Hubs** = copie du blog (84) et des podcasts (32) | Rien à migrer : archiver les 121 items |
| **Blog → Resources** : 34 articles déjà repris | 301 précises prêtes (28 slugs identiques, 6 slugs FR traduits) |
| **Blog → ressource existante** : 20 articles au sujet déjà couvert | 301 vers la ressource (ex. 3 articles « food loss » → *Food waste and losses* ; ISO 27001 + continuité d'activité → *Consentio achieved the ISO 27001 certification!*) |
| **Use Cases → Customer Stories** : Anecoop, Coast Tropical, Lagadec déjà repris | 3 × 301 · Ame Haslé à ajouter |
| **Resources → Customer Stories** : 4 témoignages rangés en articles (Vitale, Picvert, Ame Haslé, Alsum Farms) | **8 → 12 stories** sans rien écrire |
| **3 collections de logos → 1** « Logos clients » | 1 seul endroit pour les bandeaux ; E.Leclerc, Walmart, Greenery à ajouter après validation légale |
| **1 fichier 301** pour pages + CMS + existantes | 1 seul import lundi au lieu de ~170 saisies |
| **Nettoyer avant de traduire** | **63 contenus** à traduire en FR/ES au lieu de 451 items (÷ 7) |
| **Suppression mi-octobre** dans la même session que `/old/` | Pages d'abord, collections ensuite (dépendances) |

---

## 4. Structure cible (mi-octobre)

```
CMS : 4 collections au lieu de 24
├── Resources          /resources/…          contenu : articles, guides, e-book, news
├── Customer Stories   /customer-stories/…   contenu : cas clients Consentio + Klarys
├── Product modules    modèle en noindex      donnée : 5 modules (référencés par Customer Stories)
└── Logos clients      modèle en noindex      donnée : bandeaux Home, Retailers, Suppliers
Option si Emilien le veut : Team (About Us). Sinon : section statique.
```

**5 règles à transmettre**

1. **1 collection = 1 type de page publique.** Donnée sans page (logos, modules) → modèle en noindex + hors sitemap.
2. **Pas de collection par langue** (la Localization gère FR/ES) **ni par événement** (Resources, format news, ou page statique).
3. **Mêmes options** dans Resources et Customer Stories : audience, source-brand, country, industry.
4. **Nom anglais au pluriel**, slug = segment d'URL court.
5. **Product modules = pivot** : l'ajouter aussi à Resources pour afficher des « ressources liées » par module.

**Écarts actuels à corriger (après la bascule)**

| Champ | Resources | Customer Stories |
|---|---|---|
| `source-brand` | Klarys Blog / Consentio Blog | Consentio / Klarys |
| `audience` | Retailers / Suppliers · **0 sur 55 rempli** | Suppliers / Retailers / Both |
| `industry` | Option : Fresh food / Fresh produce | Texte libre + `category-badge` (6 filières) |
| `country` | **0 sur 55 rempli** | Rempli |
| `canonical-url` | Lien · **21 vers klarys.io** | Texte |

---

## 5. Nouvelles versions : quoi reprendre du blog

| # | Nouvelle ressource | Articles sources | Cible |
|---|---|---|---|
| 1 | Guide « Vendre ses F&L en ligne (B2B) » | 5 articles 2021-2022 (catalogues, e-commerce, où vendre…) | Fournisseurs |
| 2 | « ERP et produits frais » | *ERP for Fresh Produce* (2022) | Les deux · lien module Integrations |
| 3 | « Réussir la vente B2B en F&L » | *The guide to B2B sales success* (2021) | Fournisseurs |
| 4 | « Grossistes F&L : digitaliser la prise de commande » | *Fruit and vegetable wholesalers* (2021) | Fournisseurs |
| 5 | « Démarque en rayon F&L » | *Shrinkage: what it is and how to avoid it* (2021) | Distributeurs |
| 6 | « Contrôle qualité des F&L » | *What is quality control…* (2021) | Les deux |
| 7 | « Allonger la durée de vie des produits frais » | *How technology can help extend shelf life…* (2022) | Les deux |
| 8 | Reprise telle quelle | *The evolving roles…* + *Transparent solutions…* (2024) | Les deux |

- **Customer Stories** : Vitale (grossiste, Cavaillon), Picvert, Ame Haslé, Alsum Farms (US).
- **Rythme** : 1 par semaine = 2 mois de contenu sans partir de zéro.
- **À chaque publication** : ajouter la 301 précise **au-dessus** des règles génériques (Export › insérer la ligne › Import).
- Les 25 articles « Archiver » (grand public, actualités 2021-2023, newsletters ES) partent vers `/resources`.

---

## 6. Angles morts (vérifiés via l'API)

| # | Angle mort | Parade |
|---|---|---|
| 1 | **348 items hérités sont publiés** : lundi, ils partent en ligne avec les anciens modèles (ancien header, ancien formulaire Webflow → leads hors HubSpot). | Archiver vendredi (étape 2). |
| 2 | **Contenu dupliqué** : 34 articles existent 3 fois (`/blog/`, `/contenthub/`, `/resources/`). | Archiver + 301 précises. |
| 3 | **Démo publiée** : 5 articles du gabarit Webflow (« Why We Love Webflow… ») dans Blog Posts only- es. | Archiver. |
| 4 | **Import CSV des 301 = écrase toutes les redirections existantes**, et l'ordre du fichier = ordre d'exécution : une règle précise ajoutée après une générique ne se déclenche jamais. | Lundi : Export › 1 fichier (existantes + pages + CMS) › 1 import. Précises en haut, génériques en bas, `/old/(.*)` en dernier. |
| 5 | **Canonical Klarys** : 21 ressources déclarent un canonical vers klarys.io. Cohérent tant que klarys.io publie ces articles. | Le jour où klarys.io redirige : vider `canonical-url` (1 appel API), sinon boucle canonical ↔ 301 et aucune indexation sur consentio.co. |
| 6 | **klarys.io** : 23 redirections à poser sur le site Klarys (autre projet Webflow, hors de cet accès API). | [`import-webflow-301-klarys.csv`](import-webflow-301-klarys.csv), cibles en `https://consentio.co/…` à confirmer. |
| 7 | **Suppression irréversible**, sauf restauration d'un backup : le site entier revient en arrière, design compris. | Export CSV natif (CMS › collection › Export) juste avant chaque suppression, mi-octobre. |
| 8 | **Ordre de suppression** : les pages `/old/` contiennent des Collection Lists liées aux anciennes collections ; Integrations Tools référence Integrations Categories. | Pages `/old/` d'abord, puis Integrations Tools, puis Integrations Categories. |
| 9 | **Données personnelles** : 23 fiches Team Members (photos + LinkedIn, 2020-2023) publiées. | Archiver ; ne pas republier d'ex-salariés. |
| 10 | **Customer Stories** : Bell Food Group étiquetée « Consentio » alors que c'est un client Klarys ; Ultra Marine à vérifier. | Corriger `source-brand` (filtre par marque faux sinon). |
| 11 | **Tri fait sur le contenu, pas sur le trafic** (pas d'accès Search Console ; consentio.co bloqué depuis l'environnement Claude). | 10 min avant la suppression : Search Console › Performance › Pages, filtre `/blog/`, 12 mois. Article « Archiver » avec du trafic → « Nouvelle version ». |
| 12 | **fr.consentio.co** : 6 anciens slugs traduits (ex. `/blog/technologie-tracabilite-capteurs`). | Les 301 ne s'appliquent que si ce domaine est connecté au nouveau site. |
| 13 | **Locale anglaise en `/en-en/`** : les cibles 301 supposent l'anglais à la racine. | Préfixer les cibles si `/en-en/` reste (décision langue d'Emilien). |
| 14 | **Localisation** : chaque item existe aussi en ES et FR ; archiver dans la locale principale ne suffit peut-être pas. | Claude contrôle les 3 locales au « go CMS » (section 10). |
| 15 | **Kit Digital (ES)** : programme public espagnol. | Vérifier avec l'équipe ES qu'aucune obligation de publicité ne subsiste avant suppression. |
| 16 | **n8n et intégrations** : un workflow qui écrit dans une collection héritée échouera. | Chercher les ID de la section 10 dans n8n (2 min). |
| 17 | **Fin de mission lundi** : la suppression se fera sans toi. | Le Sheet sert de passation (colonne « Validé par »). |
| 18 | **Plan Webflow** : depuis le 13/05/2026, CMS et Business = **Premium** (40 collections, 20 000 items). | Pas de problème de quota ; le budget du récap du 15/09 (« Business + Localization × 2 ») est à mettre à jour. |

**Non vérifié** : trafic par page (Search Console), sitemap de la prod, et 4 Collection Lists (Retailers, Resources × 2, 3ᵉ liste du modèle Customer Stories) : Claude les contrôle au « go CMS » (quota API atteint le 24/09).

---

## 7. Message à Emilien (prêt à coller)

> Emilien, en complément du tri des pages : le CMS compte 24 collections, dont 20 héritées de l'ancien site (363 items, 2020-2023). Sans retour de ta part d'ici 16 h, j'applique ceci, réversible jusqu'à mi-octobre :
> - **Archivées** : Podcasts (32 épisodes, série arrêtée en 2022), Media (32 retombées presse 2020-2021), Team Members (23 fiches d'anciennes équipes), Kit Digital (7 catégories ES).
> - **2 questions** : garde-t-on une section équipe ou presse sur About Us ? Une obligation Kit Digital subsiste-t-elle côté Espagne ?
> - **Contenu** : 8 anciens articles à réécrire dans Resources (1 par semaine) et 4 témoignages clients à passer en Customer Stories (Vitale, Picvert, Ame Haslé, Alsum Farms).
>
> OK pour toi ?

---

## 8. Lundi (bascule) : les 301 du CMS en 10 min

1. Site settings › Publishing › 301 redirects › **Export** (redirections déjà présentes).
2. Assembler **1 seul CSV**, dans cet ordre : redirections existantes · 301 des pages (Sheet des pages) · [`import-webflow-301-cms.csv`](import-webflow-301-cms.csv) (106 précises puis 20 génériques) · `/old/(.*)` → `/` **en dernier**.
3. **Import** › publier › tester 10 URL (5 `/blog/…`, 2 `/contenthub/…`, 2 `/use/…`, 1 `/team/…`).
4. **Klarys** : [`import-webflow-301-klarys.csv`](import-webflow-301-klarys.csv) sur le site klarys.io le jour de sa bascule.

---

## 9. Après la bascule (équipe, mi-octobre)

1. **Semaines 1 à 4** : Search Console › Pages › 404 non résolues.
2. **Contenu** : 1 nouvelle version par semaine + les 4 Customer Stories.
3. **Structure** : harmoniser les options (section 4) · noindex des modèles Product modules et Logos clients · Product modules ajouté à Resources.
4. **Mi-octobre** : supprimer `/old/` (pages), puis les 20 collections (export CSV natif avant chaque suppression).
5. **Site test** `consentio-v2-sept2026` : ses 4 collections sont des copies anciennes (Resources : 11 items contre 55) → l'archiver.

---

## 10. Procédure « go CMS » (pour Claude)

1. Site `6aaaafd0271107b340148c86`. Relister les collections : 24 attendues. Tout item modifié après le 24/09 20 h → le signaler à Marie avant d'y toucher.
2. **Collection Lists** (`DynamoWrapper` › setting `source`) : aucune ne doit pointer vers une collection héritée.
   - Vérifié le 24/09 : Home → Customer Stories · Suppliers → Retailers Logo · modèle Customer Stories → Product modules (× 2) · About Us et Klarys joins Consentio : aucune liste.
   - À vérifier : Retailers (1 liste), Resources (2), modèle Customer Stories (3ᵉ liste), page Customer Stories, modèle Resources, 3 pages Request Demo, composants Header 2026, Footer 2026, CTA Next Step.
3. `data_cms_tool › update_collection_items` : `isArchived: true` pour tous les items des 20 collections ci-dessous, 100 items maximum par appel.
   - 400 « Missing fields » → renvoyer les valeurs actuelles des champs requis (Blog Posts : `post-body`, `main-image`, `post-date`, `blogs-idiomas`, `idiomas`, `read-time` · Jobs : `location`, `job-summary`, `job-description` · Media : `article-quote`, `importance-number` · Podcasts : `read-time` · Banners : `notification-message`, `how-many-days-until-cookie-expiration` · Integrations Tools : `category-2`, `category-3`). Item incomplet → le lister pour un archivage manuel dans le Designer.
4. **Locales** : contrôler avec `allCmsLocales: true`. Si des variantes ES (`6ab3931c47df4db39f2813c8`) ou FR (`6ab4e73e0693f92128a485cb`) restent non archivées, les archiver locale par locale.
5. Relister : **363 items archivés** attendus. Rollback = même appel avec `isArchived: false`.
6. **Pas de publication sans l'accord de Marie**, et staging uniquement.

| Collection héritée | ID | Items |
|---|---|---|
| Blog Posts | `6aaaafd0271107b340148d93` | 95 |
| Content Hubs | `6aaaafd0271107b340148d9a` | 121 |
| Blog Posts only- es | `6aaaafd0271107b340148d9e` | 7 |
| Use Cases | `6aaaafd0271107b340148d5f` | 4 |
| Ebooks | `6aaaafd0271107b340148d4b` | 1 |
| Podcasts | `6aaaafd0271107b340148d99` | 32 |
| Webinars | `6aaaafd0271107b340148cee` | 0 |
| Media | `6aaaafd0271107b340148d96` | 32 |
| Team Members | `6aaaafd0271107b340148d9c` | 23 |
| Jobs | `6aaaafd0271107b340148d35` | 7 |
| Office locations | `6aaaafd0271107b340148d94` | 2 |
| Integrations Tools | `6aaaafd0271107b340148d7b` | 6 |
| Integrations Categories | `6aaaafd0271107b340148d9d` | 5 |
| New Features | `6aaaafd0271107b340148c8d` | 2 |
| Banners | `6aaaafd0271107b340148ca3` | 2 |
| Categorias kit digitals | `6aaaafd0271107b340148d9b` | 7 |
| FRuit attractions | `6aaaafd0271107b340148d95` | 6 |
| Team in Fruit a & South summits | `6aaaafd0271107b340148d97` | 3 |
| Landing logos | `6aaaafd0271107b340148d0c` | 2 |
| Landing page -logos | `6aaaafd0271107b340148d98` | 6 |

Collections conservées (ne pas toucher) : Resources `6ab38c2d7da8705b11f01e5f` · Customer Stories `6ab3a0a99759d62f86280b85` · Product modules `6ab3a099a10f2540aaa498ef` · Retailers Logo collections `6ab3a781b58a494d156ea4f7`.
