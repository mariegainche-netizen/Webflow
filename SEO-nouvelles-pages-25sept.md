# SEO des nouvelles pages : à valider le lundi 28/09 à 16 h 45

> Audit du 24/09 au soir via l'API Webflow, en **lecture seule** (rien n'a été modifié). Site **Consentio 2026**, langue principale **EN** → metas en anglais. FR et ES : après traduction des pages.
> **Rien ne sera écrit dans Webflow sans ton OK.** Mise en ligne prévue **jeudi 1ᵉʳ/10 (14 h-16 h)**, d'après le planning du 25/09.
> Recontrôlé le 25/09 à 18 h 30 : titles, descriptions et images de partage **inchangés** depuis la veille.
> ⚠️ Après la reconnexion de Webflow lundi à 8 h 30, les anciennes sessions perdent l'accès : **appliquer depuis la nouvelle session** (ce document suffit, les IDs sont en annexe A).

---

## ⚡ En bref

| Question | Réponse |
|---|---|
| Pages concernées | **10 pages + 2 templates CMS** : Home, Retailers, Suppliers, About Us, 3 × Request Demo, Klarys joins Consentio, Customer Stories, Resources + templates Resources et Customer Stories |
| Déjà correct | **Klarys joins Consentio** (title, description, image de partage) · titles des 2 pages Request Demo Retailers et Suppliers (`noindex`) · description de Customer Stories |
| À corriger | **6 titles** (+ 4 pages légales) · **6 descriptions** · **8 pages sans image de partage** (Open Graph), + celle de la Home à remplacer · **2 templates CMS vides** (55 articles + 8 cas clients sans title ni description) · **11 textes alternatifs** (10 logos + 1 image en français) |
| Temps | **10 min de lecture** + **2 min** si j'applique via l'API (recommandé) ou 25 min de copier-coller · **+ 15 min de Designer** (templates CMS, logos) |
| Risques hors metas | redirections (CSV unique mercredi), FR et ES non traduits, anglais publié sous `/en-en/`, fr.consentio.co via Weglot (§ 7) |

---

## 1. Validation en 3 étapes

1. Lire les § 2 à 6 et répondre dans la session Claude : **« OK tout »** ou **« OK sauf Home : … »**.
2. **Option A (recommandée)** : Claude applique via l'API en 1 appel, depuis la nouvelle session (titles, descriptions, images de partage, textes alternatifs des assets, sitemap) → **2 min, zéro copier-coller**.
   **Option B** : copier-coller dans Pages › ⚙ Page settings › SEO settings, puis Open Graph settings → 25 min.
3. **Designer** (impossible via l'API) : templates CMS (§ 4) et alt des logos (§ 5) → 15 min. Puis **Publish › staging uniquement** et contrôle en navigation privée.

---

## 2. Title et meta description des pages (EN)

Règles appliquées : title **50 à 60 caractères**, description **120 à 155**, sujet de la page en tête, marque en fin, **aucun chiffre ni nom de client non validé** (ils s'affichent dans Google).

### Home `/`
- Actuel : « Trade Fruits & Vegetables online | Consentio » (ancien site) · description de 170 caractères, tronquée par Google.
- **Title** (55) :
```
Consentio | The Operating Platform for Fresh Food Trade
```
- **Description** (153) :
```
Consentio connects fresh food buyers and suppliers across forecasting, sourcing, orders and execution in one workflow, synced with your ERP. Book a demo.
```
- Pourquoi : reprend le H1 ; la Home se positionne d'abord sur la recherche « Consentio », d'où la marque en tête.

### Retailers `/retailers`
- Actuel : title correct mais générique · description avec « Trusted by Carrefour, E.Leclerc and ALDI » (non validé).
- **Title** (57) :
```
Fresh Food Procurement Platform for Retailers | Consentio
```
- **Description** (146) :
```
Plan demand, run supplier consultations, compare offers, allocate volumes and generate orders from one buying workspace that complements your ERP.
```

### Suppliers `/suppliers`
- Actuel : **title bon, conservé** · description avec « Join 1,000+ fresh produce suppliers » (la Home dit 3,200+ et About Us près de 3,000).
- **Title** (57), inchangé :
```
Consentio for Suppliers | Sell Fresh Produce to Retailers
```
- **Description** (151) :
```
Answer retailer consultations, receive orders, confirm shipments and invoice in one place. Automate orders from your other customers with Magic Orders.
```

### About Us `/company/about-us`
- Actuel : « Company | Consentio » (19 caractères, ne dit rien).
- **Title** (51) :
```
About Consentio | Built by Fresh Food Trade Experts
```
- **Description** (149) :
```
Consentio and Klarys now work as one team to make fresh food trade simpler for growers, wholesalers and retail buyers. Discover our story and impact.
```

### Request Demo `/request-demo` (la seule page de démo indexée)
- Actuel : « Request Demo » sans marque · description **vide**.
- **Title** (52) :
```
Book a Demo of Consentio | Fresh Food Trade Platform
```
- **Description** (144) :
```
Book a demo tailored to your fresh categories. Tell us about your buying or sales workflows and a Consentio specialist will prepare it with you.
```

### Customer Stories `/customer-stories`
- **Title** (54) :
```
Fresh Food Customer Stories & Case Studies | Consentio
```
- Description : **inchangée** (126 caractères, déjà bonne).

### Resources `/resources`
- Actuel : « Resources | Consentio » · description de 55 caractères.
- **Title** (52) :
```
Fresh Food Procurement Insights & Guides | Consentio
```
- **Description** (138) :
```
Articles, guides and operational insights for buying and sales teams working with fresh produce, seafood, meat and other fresh categories.
```

### Pages légales : ajouter la marque au title (descriptions déjà bonnes)

| Page | Title actuel | Title proposé |
|---|---|---|
| Legal notice | Legal notice | `Legal Notice \| Consentio` |
| Privacy policy | Privacy policy | `Privacy Policy \| Consentio` |
| Cookie policy | Cookie policy | `Cookie Policy \| Consentio` |
| Data processing agreement | Data processing agreement | `Data Processing Agreement \| Consentio` |

### On ne touche pas

| Page | Pourquoi |
|---|---|
| Klarys joins Consentio | title (60), description (127) et image de partage déjà en place |
| Request Demo Retailers et Suppliers | pages `noindex` : leur title (« Book a demo for retailers / suppliers ») peut servir à segmenter les leads dans HubSpot. Le changer casserait ce tri. Segmenter plutôt sur l'URL de soumission. |

---

## 3. Image de partage (Open Graph) : LinkedIn, Slack, WhatsApp, e-mails

- **Constat** : seules la Home (image de l'ancien site) et Klarys en ont une. Les autres pages s'afficheront **sans visuel** quand l'équipe partagera le lancement sur LinkedIn.
- **Proposition** : OG title et OG description = **Same as SEO** (case à cocher) + une photo déjà dans les assets, en **JPG** (éviter le WebP : LinkedIn l'affiche mal).

| Page | Image proposée |
|---|---|
| Home, Retailers, About Us, Customer Stories, Resources, Request Demo, Request Demo Retailers | `hands-market.jpg` (mains qui choisissent des tomates au marché) |
| Suppliers, Request Demo Suppliers | `warehouse-produce.jpg` (palettes de produits frais) |
| Klarys joins Consentio | ⚠️ image actuelle = la photo **générée par IA** qui doit être remplacée à 9 h → mettre la nouvelle photo aussi en image de partage |

- Mieux, en P2 : **un visuel de marque 1200 × 630 px** (logo + accroche) à demander au graphiste, réutilisable partout.

---

## 4. Templates CMS (Designer uniquement, 5 min)

**Constat** : title et description **vides** sur les 2 templates → les **55 articles** et les **8 cas clients** n'ont ni title ni description maîtrisés (risque : titre générique identique partout, Google réécrit à sa façon).

Chemin : Pages › **Resources Template** › ⚙ › SEO settings › **+ Add field** (même chose sur **Customer Stories Template**).

| Template | Title tag | Meta description | Open Graph |
|---|---|---|---|
| Resources Template | champ `Name` + texte ` \| Consentio` | champ `Excerpt` | Same as SEO · image = champ `Cover image` |
| Customer Stories Template | champ `Name` + texte ` customer story \| Consentio` | champ `Excerpt` | Same as SEO · image = champ `Cover image` |

- Pourquoi `Name` et `Excerpt` plutôt que les champs `SEO meta title` et `SEO meta description` : ceux-ci sont vides sur une partie des fiches (Manor notamment), et un champ vide donne une balise vide.
- Vérifier en Preview sur **1 article et 1 cas client** que le title ne dépasse pas trop 60 caractères.
- Images des cartes CMS (Home, Customer Stories, Resources) : alt vide → ⚙ de l'image › Alt text › lier au champ **`Cover alt`**.

---

## 5. Textes alternatifs des images

### Home : bandeau logos (10 alt faux sur 11)

Designer › Home › image du bandeau › ⚙ › **Alt text** (10 s par logo). Correspondance vérifiée d'après le nom des fichiers.

| # | Fichier | Alt actuel | Alt correct |
|---|---|---|---|
| 1 | Logo_Carrefour | Logo Carrefour | ✅ inchangé |
| 2 | logo-primeale | Logo E.Leclerc | `Logo Priméale` |
| 3 | Intermarché | Logo ALDI | `Logo Intermarché` |
| 4 | logo-agroponiente | Logo Intermarché | `Logo Agroponiente` |
| 5 | logo-Biocoop | Logo METRO | `Logo Biocoop` |
| 6 | logo-anecoop | Logo Kroger (placeholder) | `Logo Anecoop` |
| 7 | manorlogo | Logo Greenyard | `Logo Manor` |
| 8 | logo-coast-citrus | Logo Coast Tropical (placeholder) | `Logo Coast Tropical` (fichier nommé « coast-citrus » : à confirmer) |
| 9 | monoprixlogo | Logo Carrefour | `Logo Monoprix` |
| 10 | Logo_Blue_Whale | Logo E.Leclerc | `Logo Blue Whale` |
| 11 | logo-saveol | Logo ALDI | `Logo Savéol` |

⚠️ Ces logos restent soumis à l'accord légal (« APPROVAL REQUIRED »).

### Autres images

| Page | Image | Actuel | Proposé | Comment |
|---|---|---|---|---|
| Home (hero) | composition-transparent.png | « Caisse de produits frais Consentio » (en français) | `Consentio crate filled with fresh produce` | Designer |
| Header (toutes les pages) | logo Consentio | vide (hérite de l'asset) | `Consentio` | API, sur l'asset |
| Suppliers, About Us | hands-market.jpg | vide (hérite de l'asset) | `Hands selecting fresh tomatoes at a market stall` | API, sur l'asset |
| Suppliers | warehouse-produce.jpg | vide (hérite de l'asset) | `Pallets of fresh produce staged for dispatch in a supplier warehouse` | API, sur l'asset |
| About Us | photo de l'entrepôt à l'aube | vide (hérite de l'asset) | `Warehouse at dawn, produce being prepared for distribution` | API, sur l'asset |

Le reste est bon : Suppliers, About Us et les 3 Request Demo ont des alt descriptifs en anglais ✅. Chaque page a **un seul H1** ✅.

---

## 6. Indexation : ce que Google verra lundi

| Point | Constat | Action | Comment |
|---|---|---|---|
| Sitemap | **88 pages** déclarées, dont les 2 Request Demo `noindex` et une quarantaine de pages héritées | exclure les 2 `noindex` tout de suite, les héritées selon la décision ci-dessous | API, 1 appel |
| Templates inutiles | Product modules (5 URL) et Retailers Logo (20 URL) publics | `<meta name="robots" content="noindex">` dans le code du template + fiches exclues du sitemap | Designer 2 min + API |
| Pages héritées publiées | dossier `/old/` (≈ 40 pages, **déjà en ligne sur le site actuel**), 3 copies de la Home avec le même title, « Test », « NPS »… + une vingtaine de templates CMS de l'ancien site | pris en charge par le **nettoyage des pages (lundi 9 h 30)** et des **collections (10 h)** : chaque page dépubliée qui existe sur la prod reçoit une 301 | sessions « nettoyage » |
| Sous-domaine de staging | le `….webflow.io` peut être indexé | Site settings › SEO › **Disable Webflow subdomain indexing** : ON | toi, 10 s |
| Canonical | aucun domaine de prod connecté | à la bascule : Site settings › SEO › **Global canonical tag URL** = domaine de prod | toi, 10 s |

---

## 7. Angles morts et mises en garde

1. **Le plus gros risque SEO de la mise en ligne, ce sont les redirections, pas les metas.** Correction du 25/09 : les pages de `/old/` y sont **déjà sur le site actuel**, elles ne créent pas de 404. Les points de vigilance : 2 pages de solution peut-être renommées (`/solutions/for-supermarkets`, `/solutions/for-producers`), les articles en double, klarys.io et fr.consentio.co. → `REDIRECTIONS-301-25sept.md` : 94 règles sur 99 déjà prêtes dans les fichiers du nettoyage CMS, 5 à ajouter au CSV unique de mercredi.
2. **Articles en double** : les anciens articles (`/blog/…`, collection Blog Posts) et leurs versions reprises dans Resources (`/resources/…`) coexisteront → 301 de l'ancien vers le nouveau, puis dépublier l'ancien.
3. **FR et ES publiés mais non traduits** : `/fr-fr/…` et `/es-es/…` affichent l'anglais avec les mêmes metas → contenu en triple et balises hreflang incohérentes. La traduction des pages statiques est prévue mardi et mercredi : **traduire les metas en même temps** (je les prépare à partir des versions EN validées). Toute langue non relue le jour J reste désactivée.
4. **Chiffres et noms de clients** : ils s'affichent dans Google et sur LinkedIn. Trois chiffres « fournisseurs » coexistent (1,000+, près de 3,000, 3,200+) → mes propositions n'en contiennent aucun ; on les ajoutera quand Emilien aura validé **une seule** fiche de chiffres.
5. **Ne renommer aucun slug** des nouvelles pages : header, footer, formulaires HubSpot et e-mails y pointent.
6. **Anglais publié sous `/en-en/`** : la racine redirige vers `/en-en/`, ce qui double chaque redirection et brouille le canonical. Retrait prévu **lundi 10 h 20** (« Anglais à la racine »). Au passage, la langue principale est déclarée `en-US` (cible américaine) : « English » sans région serait plus juste, sans urgence.
7. **Attentes réalistes** : de bonnes metas améliorent le **taux de clic**, pas le classement à elles seules. Après une migration, une baisse de trafic de 2 à 4 semaines est normale **si** les 301 sont en place ; sans 301, la perte peut durer.
8. **Le jour J** : Google Search Console › soumettre `sitemap.xml`, demander l'indexation de Home, Retailers et Suppliers, puis surveiller les 404 pendant 2 semaines. Le suivi GA4 et GTM hérité du site de prod est déjà en place ✅.
9. **Canonical des articles Klarys** : 21 ressources pointent leur canonical vers klarys.io (relevé du nettoyage CMS) → Google les attribue à klarys.io tant qu'il n'est pas vidé. À vider le jour où klarys.io redirige.
10. **Données structurées (P2)** : bloc JSON-LD « Organization » sur la Home (annexe B), à valider.

---

## 8. Décisions d'Emilien

Déjà prévues lundi (message groupé de 8 h 50 et point de 16 h) : fiche de chiffres unique, domaine de prod, accès et DNS. Deux compléments :
1. Metas **sans chiffres ni noms de clients** jusqu'à validation de la fiche de chiffres : oui ?
2. **fr.consentio.co (Weglot)** : garder en attendant `/fr-fr/`, ou couper le jour J ?

---

## Annexe A : IDs Webflow (pour l'application via l'API)

Site `6aaaafd0271107b340148c86` (Consentio 2026).

| Page | ID |
|---|---|
| Home | `6aaaafd0271107b340148ce0` |
| Retailers | `6aaaafd0271107b340148cf0` |
| Suppliers | `6aaaafd0271107b340148d04` |
| About Us | `6aaaafd0271107b340148d05` |
| Request Demo | `6aaaafd0271107b340148d09` |
| Request Demo Retailers | `6ab5333bfe2d2a021592fcc1` |
| Request Demo Suppliers | `6ab5333b000e757cf619798e` |
| Klarys joins Consentio | `6ab4ed0fc1f440501102f46b` |
| Customer Stories | `6ab3eafee2e82eb1347bc7f2` |
| Resources | `6ab3fe194064421e7a0ba9bb` |
| Resources Template | `6ab38c2d7da8705b11f01e65` |
| Customer Stories Template | `6ab3a0a99759d62f86280b8b` |
| Product modules Template | `6ab3a099a10f2540aaa498f5` |
| Retailers Logo collections Template | `6ab3a782b58a494d156ea531` |
| Legal notice · Privacy · Cookie · DPA | `…d24` · `…d25` · `…d26` · `…d22` (préfixe `6aaaafd0271107b340148`) |

| Asset | ID |
|---|---|
| hands-market.jpg | `6ab3a935df46fd328aa68e49` |
| warehouse-produce.jpg | `6ab3a9260f79ece2af99d7d4` |
| logo Consentio (header) | `6ab39872575f3dfb3e103292` |
| photo de l'entrepôt à l'aube | `6ab4e1e58c030d8e4d237b7e` |

## Annexe B : JSON-LD « Organization » pour la Home (P2, à valider)

À coller dans Page settings de la Home › Custom code › Inside `<head>` (ou via l'API). Remplacer les 2 valeurs entre crochets.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Consentio",
  "url": "[URL du domaine de prod]",
  "logo": "[URL du logo Consentio]",
  "description": "B2B platform connecting fresh food buyers and suppliers, from forecasting and sourcing to orders and execution.",
  "sameAs": ["https://www.linkedin.com/company/consentio/"]
}
</script>
```

⚠️ URL LinkedIn à confirmer avant publication.
