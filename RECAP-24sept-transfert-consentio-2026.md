# Récap 24/09 : site test → Consentio 2026 → maquette Lovable

> Audit du 23/09 au soir via l'API Webflow, en lecture seule (rien n'a été modifié).
> **Référence = site test** `consentio-v2-sept2026` · **Nouveau site** `Consentio 2026` · **Maquette** = export Lovable du 21/09 (repo, branche `claude/charming-ride-fs49bc`, le projet live est inaccessible depuis Claude).
> **Go-live visé : lundi 28/09** (fin de mission). Consigne Emilien du 17/09 : toutes les pages à 80-90 % avant de peaufiner.

---

## ⚡ Réponses courtes

| Question | Réponse |
|---|---|
| Encore une grande différence ? | **Site test → 2026 : non sur le contenu.** 16 pages sur 17 ont leur équivalent, textes transférés à 97 % (Home), 94 % (Retailers), 100 % (Suppliers), pages légales identiques. **Oui sur les liens** : le copier-coller entre sites a vidé les liens internes (≈ 30 à rebrancher). **Lovable → 2026 : 82 % des sections existent** ; les vrais écarts sont Company (page legacy), la page Klarys absente, les contenus de démo et la langue. |
| Transfert terminé ? | **Non.** Le contenu est transféré (16 pages sur 17, textes à 94-100 %, CMS identique ou plus complet). Restent ≈ 30 liens à rebrancher, le header, la langue, la police Manrope à vérifier, 1 section masquée, les contenus de démo et le SEO. |
| Pages restantes | **13 pages + 3 composants** : 1 à créer (Klarys joins Consentio), 12 à modifier (dont Company à refaire) + composants Header 2026, Footer 2026, CTA Next Step. **+ 11 pages héritées à trancher** (FAQ, Pricing, etc.). |

---

## 1. Transfert site test → Consentio 2026, page par page

| Page du site test | Page Consentio 2026 | Statut | Textes retrouvés | À corriger |
|---|---|---|---|---|
| **Home 2** `/home-2` (vraie base) | Home `/` | 🟡 | **97 %** | 6 liens vidés, slider ERP non conforme, 5 textes en français, placeholder « Eyebrow » affiché |
| Home `/` (ancien embed Lovable) | aucune | ⚪ voulu | 0 % | rien à migrer, à archiver côté test |
| Retailers | `/retailers` | 🟡 | **94 %** (≈ 100 % avec les textes passés dans les composants) | hero sans lien, `#contact`, `#book-demo`, Section 2 (bandeau logos distributeurs) **masquée** |
| Suppliers | `/suppliers` | 🟡 | **100 %** | 9 liens vers `/book-demo` qui n'existe pas (404), hero et CTA final sans lien |
| Book a demo `/book-a-demo` | Request Demo `/request-demo` (URL legacy conservée) | 🟡 | formulaire HubSpot | script HubSpot + choix du formulaire FR/ES/EN dans l'Embed de la page ; titre et texte masqués par CSS ; bloc « What happens next » mi-anglais mi-français |
| Customer Stories + template | idem | ✅ | CMS identique : 8 stories, 41 champs | lien retour du template en `#` ; stories de démo (voir P1) |
| Resources + template | idem (publiée depuis le 23/09 17:36) | ✅ en mieux | 11 → **55 articles** (54 avec corps) | header et footer pointent encore vers OLD - Resources |
| Product modules · Retailers Logo (templates CMS) | idem | ✅ | 5 = 5 · 20 = 20 | ces templates génèrent 25 pages publiques inutiles |
| Cookie policy · DPA · Legal notice · Privacy · Terms | `/legal/*` | ✅ | **identiques** (même texte, mêmes titres) | encarts « LEGAL APPROVAL REQUIRED », lien DPA absent, tableau de l'annexe cookies absent, téléphone ≠ lien |
| 404 | aucune page 404 visible via l'API | ❓ | | à vérifier dans Pages › Utility pages ; sur le test, « Back to homepage » pointe vers Home 2 |

---

## 2. Ce qui est fait ✅ (vérifié via l'API)

- **Home 2026** construite à partir de Home 2 : mêmes sections, même ordre, mêmes classes `c2-*`.
- **Composants** : Header 2026, Footer 2026 et CTA Next Step sont des Components (plus de header/footer collés dans les pages).
- **Workflow « How it works »** reconstruit en natif, 6 étapes ; les étapes 05 et 06 sont bien différenciées (retour Emilien du 21/09 ✅).
- **Retailers** : marges réduites, 104 → 64 px en desktop, 64 → 48 px en tablette (retour du 21/09 ✅).
- **Suppliers** : inversion image/texte testée sur le module Webshop (retour du 21/09 ✅, Magic Orders pas encore inversé).
- **Suppliers complet** : FAQ (6 questions), 6 résultats opérationnels, 4 bénéfices + bouton sur Magic Orders et Webshop.
- **CMS publié** : 8 Customer Stories, 55 Resources, 5 Product modules, 20 logos distributeurs.
- **Cas clients de la Home** : seuls Manor, Mytilimer, Anecoop et Agroponiente sont cochés `featured-on-home` (décision du 21/09 ✅).
- **Collection Customer Stories identique sur les 2 sites** : 41 champs, dont lieu, 3 bénéfices et 3 KPI préparés le 23/09 ; les 5 stories fournisseurs sont complètes (corps, lieu, bénéfices, SEO).
- **Resources plus complet dans 2026 que dans le test** : 55 articles dont 54 avec corps (le test n'en avait que 11).
- **Logos distributeurs (CMS)** : les positions 7 à 20 suivent exactement la liste d'Emilien (Manor Fresh → Ultramarine Food).
- **Pages légales** : le texte anglais de consentio.co est repris à l'identique sur les 5 pages (retour du 21/09 ✅).
- **Footer** : copyright « © 2026 Consentio. », lien uniquement sur l'adresse e-mail (retour du 21/09 ✅, mais le lien est en `#`).
- **Filtres Customer Stories et Resources** : gérés par des scripts de page (catégories, audience, « Both », clavier).
- **Code custom de page** : celui de Home 2 est reporté (slider partenaires, workflow natif) ; Swiper.js reporté sur Retailers.
- **Tracking déjà en place dans 2026** (hérité du site de prod) : Cookiebot, Google Tag Manager `GTM-WJCD98F`, GA4 `G-FDRE8RZ30V`, ActiveCampaign. Rien ne sera perdu à la bascule côté tracking.

---

## 3. Reste à faire

### P1 · Bloquant pour le go-live (à attaquer demain matin)

1. **Rebrancher les liens vidés** (Designer › sélectionner le lien › ⚙ Settings › Link › Page) :
   - **Home (6)** : hero « Book a demo → » et CTA final « Demander une démo » → Request Demo · « Explore Consentio for retailers → » et « For retailer → » → Retailers · « Explore Consentio for suppliers → » et « For suppliers → » → Suppliers. Supprimer les attributs `href` personnalisés restés sur ces boutons.
   - **Suppliers (11)** : « Explore Magic Orders », « Explore Webshop », « Talk integration » et les 6 logos ERP pointent vers `/book-demo` → Request Demo · hero « Book a demo → » et CTA final « Book a demo » → Request Demo.
   - **Retailers (3)** : hero « Book a demo → » → Request Demo · « Discuss an integration → » (`#contact`) → Request Demo · bouton du composant **CTA Next Step** (`#book-demo`) → Request Demo (Components › CTA Next Step : la correction vaut pour toutes les pages).
   - **Header 2026** : « Resources » pointe vers **OLD - Resources** → nouvelle page `/resources`.
   - **Footer 2026** : « Articles and guides » → `/resources` · « ERP integration » (`#`) → `/retailers#integration` · adresse e-mail (`#`) → `mailto:hello@consentio.co` · « Klarys joins Consentio » (`#`) → la future page Klarys.
   - **Template Customer Stories** : lien retour (`#`) → `/customer-stories`.
2. **Header 2026** : ajouter **Consentio Login puis Klarys Login** (ordre validé le 17/09 : Consentio avant Klarys), avec la classe `login_signup_link` pour que le script d'attribution du site (footer) ajoute les paramètres UTM aux liens de connexion. Puis supprimer l'ancien header masqué sur la Home.
3. **Contenus à risque, à retirer avant publication** :
   - **Textes alternatifs faux** sur 9 logos du bandeau de la Home (Priméale décrit comme « Logo E.Leclerc », Intermarché comme « Logo ALDI », Manor comme « Logo Greenyard », etc.).
   - Encarts **« LEGAL APPROVAL REQUIRED »** affichés sur Legal notice et Privacy policy.
   - **3 témoignages de démo** sur Suppliers (Camille Ferrand, Marc Oberli, Elena Ruiz : `DEMO CONTENT` dans la maquette).
   - **Stories Bell Food Group et Ultra Marine** : chiffres de démo, corps vide, toujours publiées → passer en brouillon. **Manor** reste en Home (client réel) mais ses chiffres sont ceux de la démo (« 70% less email back-and-forth ») → remplacer par le vrai cas Klarys.
   - **SEO** : descriptions Retailers et Suppliers avec des affirmations non validées (« Trusted by Carrefour, E.Leclerc and ALDI », « 1,000+ » alors que la Home dit 3,200+).
4. **Langue, à trancher avec Emilien** :
   - la racine est déclarée **FR** mais contient le texte **anglais** (310 chaînes sur 315) ; les locales EN et ES n'ont **aucune traduction** et affichent donc ce contenu ;
   - ⚠️ avant de traduire la locale FR, copier l'anglais dans la locale EN, sinon la version EN affichera le français ;
   - ⚠️ **Weglot** (ancien outil de traduction du site de prod) est encore chargé sur tout le site 2026, avec des balises hreflang manuelles mal formées (guillemets typographiques) : à retirer du code du site (Site settings › Custom code › Head) avant d'activer les locales Webflow, sinon double traduction.
5. **Police et couleurs, à vérifier en Preview** : le bloc « Consentio Design System » du code du site test (chargement de **Manrope** + variables `--c-forest`, `--c-lime`…) n'est **pas** dans le code du site 2026. Si les textes ne s'affichent pas en Manrope : Site settings › Fonts › Google Fonts › Manrope (400 à 800), ou recopier le bloc dans le Head du site.

### P2 · Qualité et contenus

6. **Company** : `/company/about-us` est l'ancienne page legacy (66 H1, grille de 24 personnes, « 1,000 leaders »). À reconstruire selon la maquette (hero, Why now, Expertise, European footprint, bloc Klarys, CTA final) dès que le texte d'Emilien est prêt.
7. **Créer `/klarys-joins-consentio`** (5 sections dans la maquette), puis y relier le footer et le bloc Klarys de Company.
8. **Home** :
   - slider ERP : retirer Cegid (et Oracle), ajouter SIGEM, SAGE, Produce Pro, ORISHA, COPILOTE (déjà dans les assets). Ordre cible : SAP, SIGEM, Stepcom, SAGE, Produce Pro, ORISHA, Infor, Microsoft, MS Dynamics, COPILOTE ;
   - placeholder « Eyebrow » affiché, 5 textes en français (« Voir comment ça marche ↓ », « Il faut une plateforme conçue pour ça. », etc.) ;
   - cartes des cas clients en `#` → lier à la page du cas (Current Customer Story) ;
   - title SEO legacy « Trade Fruits & Vegetables online | Consentio » → title de la maquette.
9. **Bandeau clients de la Home** : il est statique (11 logos + 5 emplacements vides) alors que la collection Retailers Logo contient les 20 logos dans l'ordre d'Emilien → brancher une Collection List comme sur Retailers, ou compléter à la main.
10. **Retailers** : Section 2 (logos distributeurs, CMS + Swiper) masquée → voulu ? Sinon ⚙ Settings › Visibility. Aligner les 9 logos ERP sur la liste des autres pages. Ajouter la carte « Buying workspace » du hero et le point « Supplier offers spread across email, phone and messaging » (section « Problem »).
11. **Suppliers** : inverser aussi Magic Orders si le test Webshop est validé · remplacer l'illustration générée par IA (retour du 21/09, pas encore fait).
12. **Templates CMS** : ouvrir 1 article et 1 story en Preview pour vérifier que les textes par défaut Webflow (« Heading », Lorem ipsum) ne s'affichent pas.
13. **Customer Stories** : compléter Manor (corps, bénéfices, KPI : cas Klarys `manor-seafood-digitalization`) · `video-url` vide partout alors qu'Emilien veut la vidéo Manor (Tony Pidoula) sur le site · `open-graph-image` vide pour les 8 stories.
14. **404** aux couleurs Consentio avec les illustrations de Romain (pastèque, citron), bouton « Back to homepage » → Home.
15. **Filtres** : tester Customer Stories et Resources sur le site publié (les scripts ne tournent pas dans le Designer).

### P3 · Nettoyage avant bascule

16. **Home** : supprimer la section masquée qui charge l'ancien connected-flow via jsDelivr **depuis la branche GitHub `claude/wizardly-cannon-xpo6is`** (si la branche bouge ou disparaît, le script casse).
17. **Code du site hérité de la prod** : la règle CSS qui force **Quicksand** sur tous les `b` et `strong` (le gras des nouvelles pages ne sera pas en Manrope) ; le script de pop-up (`.pop-up`, `.body-15`) qui lève une erreur sur les pages sans pop-up.
18. **Pages publiées à dépublier ou rediriger** : OLD - Resources, Terms & conditions Copy, OLD - For Producers, dossier `/old/` (49 pages dont 40 publiées), 8 brouillons BACKUP/OLD.
19. **Templates CMS qui génèrent des pages publiques inutiles** : Product modules (5 URL) et Retailers Logo (20 URL) → désactiver ou exclure du sitemap.
20. **Composants hérités** : 14 anciens composants du site de prod (Navbar, Footer, Header N, Footer N, Demo CTA, Testimonials, newsletter…) à supprimer une fois `/old/` nettoyé.
21. **11 pages héritées à trancher** : FAQ, Pricing, Use Cases, Join us, For Wholesalers, Amazon Seller Central Automation, 3 × Form Contact, Terms & conditions, Data processing agreement (garder ces 2 dernières : le footer 2026 y renvoie).
22. **Resources** : 55 articles dans le CMS contre 20 dans la maquette, dont « Procsea becomes Klarys » que la maquette excluait → décider lesquels garder.

---

## 4. Grandes différences maquette Lovable → Consentio 2026

| Route Lovable | Page 2026 | Statut | Sections présentes | Écart principal |
|---|---|---|---|---|
| `/` | Home | 🟡 | 9/9 | liens, logos, textes FR, title SEO |
| `/retailers` | Retailers | 🟡 | 10/10 | carte « Buying workspace » du hero absente, 1 point sur 6 dans « Problem », logos ERP différents |
| `/suppliers` | Suppliers | 🟡 | 14/14 | visuel du hero absent, témoignages de démo, 6 logos ERP sur 8 |
| `/company` | About Us (legacy) | ❌ | 2/8 | page à refaire |
| `/platform` | aucune | n/a | n/a | redirige vers `/retailers` dans la maquette : rien à créer |
| `/resources` + `/:slug` | Resources + template | 🟡 | 3/3 · 5/6 | 55 articles au lieu de 20, bloc média (webinar) absent du template |
| `/customer-stories` + `/:slug` | Customer Stories + template | 🟡 | 3/3 · 5/5 | onglet « All » en plus, lien retour en `#`, stories de démo |
| `/book-demo` | Request Demo `/request-demo` | 🟡 | 2/2 | formulaire HubSpot à la place des 11 champs, bloc « What happens next » mi-anglais mi-français |
| `/klarys-joins-consentio` | aucune | ❌ | 0/5 | **à créer** |
| 3 pages légales | `/legal/*` | 🟡 | 3/3 | encarts « LEGAL APPROVAL REQUIRED », lien DPA absent, tableau de l'annexe cookies absent, téléphone ≠ lien |
| **Total** | 12 routes sur 13 | | **56/68 (82 %)** | |

> Fidélité mesurée : 52 %, **sous-estimée**. L'API de contenu ne remonte pas le texte des boutons, des listes ni des toggles : une vérification croisée a retrouvé sur Suppliers la FAQ, les résultats et les blocs Magic Orders et Webshop que l'audit Lovable croyait absents.

---

## 5. Collections CMS et code vs fichiers des sessions précédentes

| Collection | Référence (sessions précédentes) | Site test | Consentio 2026 | Écart |
|---|---|---|---|---|
| **Customer Stories** | NOTICE (15 champs) → `CLAUDE.md` (28 champs) → Sheet `customer-stories_a-completer` (+ lieu, 3 bénéfices, 3 KPI) | 41 champs · 8 stories | **identique** : 41 champs · 8 stories | 7 champs ne sont plus obligatoires dans 2026 (industry, category-badge, cover-image, card-title, excerpt, stat-1, audience) |
| ↳ remplissage | 8 stories attendues | 5 stories fournisseurs complètes | idem | **Manor, Bell, Ultra Marine** : ni corps, ni bénéfices, ni KPI, ni SEO · Coast Tropical sans KPI · `video-url`, `open-graph-image`, `pdf-download` vides pour les 8 |
| **Resources** | Sheet de Robin, onglet 2 (43 articles) | 11 articles (2 avec corps) | **55 articles (54 avec corps)** | 2026 plus complet que le test · le champ `category-badge-2` (test) s'appelle `category-badge` (2026) : à répercuter dans les imports CSV et n8n |
| **Product modules** | `product-modules-template.csv` (5) | 5 | 5 | ✅ |
| **Retailers Logo** | Sheet « Logos carrousel » (14 logos, ordre d'Emilien) | 20 logos | 20 logos | ✅ positions 7 à 20 = ordre d'Emilien ; les 6 distributeurs (Carrefour → Anecoop) passent devant |
| **Filtres** | `CLAUDE.md` (Finsweet CMS Filter) | Finsweet Attributes v2 chargé dans le Head du site ; filtre Resources bugué (sélecteur `.Button` en majuscule) | Finsweet **non chargé** ; filtres gérés par des scripts de page maison | à tester sur le site publié |

- ✅ **Bonne nouvelle** : dans Webflow, Coast Tropical et Mytilimer ont les bonnes données. L'erreur (KPI de Mytilimer sur la ligne Coast Tropical) n'existe que dans le Sheet `customer-stories_a-completer`. **Ne pas réimporter ce Sheet tel quel**, sinon Coast Tropical sera écrasé.
- ✅ **Corps des articles (`body-content`) : rien n'a été perdu** (vérifié texte par texte le 24/09 au matin). Les 5 corps des Customer Stories et les 2 corps Resources du site test sont identiques dans 2026. Dans 2026, 54 articles Resources sur 55 ont un corps (médiane ≈ 2 600 caractères) ; seul « Procsea becomes Klarys » n'en a pas. La colonne `body-content` du Sheet de Robin est vide parce que les textes ont été collés directement dans Webflow (limite de caractères des cellules Google Sheets).
- **20 anciennes collections** héritées du site de prod dans 2026 (Blog Posts, Webinars, Ebooks, Use Cases, Team Members, etc.) : à garder tant que les pages `/old/` et le blog legacy existent, à trier à la bascule.

**Code custom du site (Site settings › Custom code)**

| Bloc | Site test | Consentio 2026 | Action |
|---|---|---|---|
| Manrope + variables `--c-*` + CSS marquee | ✅ Head | ❌ absent | P1 : vérifier la police en Preview |
| Finsweet Attributes v2 | ✅ Head | ❌ absent | inutile si les scripts de page suffisent |
| Cookiebot, GTM, GA4, ActiveCampaign | ❌ | ✅ | garder |
| Script d'attribution UTM (`.login_signup_link`) | ❌ | ✅ Footer | classe à mettre sur les nouveaux boutons Login |
| Weglot + hreflang manuels | ❌ | ✅ | retirer avant d'activer les locales Webflow |
| CSS Quicksand sur `b`/`strong`, script pop-up | ❌ | ✅ | nettoyer (P3) |

---

## 6. Pièges à anticiper

- **Copier-coller entre deux sites Webflow = liens vidés.** Toute page transférée doit être recontrôlée lien par lien en Preview.
- **Pas de page `/book-demo` ni `/book-a-demo` dans 2026** : la page démo est `/request-demo`. Au go-live, ajouter les 301 `/book-demo` et `/book-a-demo` → `/request-demo` en filet de sécurité.
- **Bascule du plan** (échange support Webflow du 17/09) : transférer le plan CMS de Consentio vers le nouveau site **seulement le jour J** (sinon consentio.co passe en Starter). Formulaires et apps ne suivent pas : à reconfigurer, avec les 301 et la Search Console. Le tracking, lui, est déjà dans le code du site 2026.
- **Weglot + Webflow Localization = double traduction** : retirer Weglot avant d'activer les locales.
- **Sheet `customer-stories_a-completer`** : la ligne **Coast Tropical** contient les KPI et bénéfices de **Mytilimer** (« 76 Mussel producers connected », « 4x »). À corriger avant tout import.
- **Ne jamais réimporter le Sheet de Robin tel quel** : sa colonne `body-content` est vide et 11 de ses 43 slugs ne correspondent plus à ceux de 2026 (ex. `technologie-tracabilite-blockchain` → `technology-traceability-blockchain`). Un réimport risque soit d'effacer les corps collés à la main, soit de créer des doublons. Si un réimport est nécessaire : supprimer la colonne `body-content` du CSV (ou ne pas la mapper) et vérifier les slugs.
- **Traduction FR des pages légales** : la version française des CGU existe déjà dans la page BACKUP - Terms & conditions (texte EN + FR) → la reprendre pour la locale FR au lieu de retraduire.
- **Emilien doit encore livrer** le texte de Company dans Lovable (repasse du 21/09) : ne pas perdre de temps sur le contenu de Company avant.

---

## 7. Fichiers de référence

**Repo `mariegainche-netizen/Webflow`** (9 PR en brouillon, aucune fusionnée) :

| Fichier | Branche · PR | Rôle |
|---|---|---|
| `NOTICE-Collection-CustomerStories.md` | `wizardly-cannon` · #1 | schéma Customer Stories + Product modules, Collection List, import CSV |
| `customer-stories-template.csv`, `product-modules-template.csv` | `wizardly-cannon` · #1 | gabarits d'import CMS |
| `CLAUDE.md` | `gracious-curie` · #7 | schéma Customer Stories à 28 champs, options audience/source-brand, classes `cs-*`, filtre Finsweet |
| `lovable-reference/` | `charming-ride` · #3 | export de la maquette Lovable (21/09) |
| `RECAP-logo-slider-22sept.md` | `clever-fermat` · #6 | Logo Slider (10 logos ERP), Swiper Retailers |
| `request-demo-embed.html` | `gracious-ride` · #8 | formulaires HubSpot FR/ES/EN de `/request-demo` |

**Drive** : Sheet de Robin « Customer Stories Consentio & Klarys » (8 stories + 43 articles) · `customer-stories_a-completer` (lieu, 3 bénéfices, 3 KPI) · « Logos carrousel (Manor Fresh → Ultramarine Food) » · notes des repasses du 17/09 et du 21/09 · « Notes - Repasse site web 21/09/2026 » (Emilien) · « Échange avec Webflow - Plan CMS (17 septembre 2026) ».
