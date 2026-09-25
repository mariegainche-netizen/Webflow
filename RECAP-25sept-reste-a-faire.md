# Reste à faire au 25/09 : Consentio 2026

> Contrôle du **24/09 entre 17 h 30 et 18 h 15** via l'API Webflow, en lecture seule (rien n'a été modifié). Base de comparaison : [RECAP-24sept-transfert-consentio-2026.md](RECAP-24sept-transfert-consentio-2026.md), dont la numérotation des points est reprise.
> **13 pages modifiées le 24/09** entre 10 h 26 et 17 h 30 (dernière : Home). Une correction faite après 17 h 30 n'apparaît pas ici.
> Go-live visé : **lundi 28/09**.

---

## 🔄 Mise à jour du 25/09 à 9 h 50 (pages modifiées hier de 18 h à 18 h 10 et ce matin de 9 h 07 à 9 h 26)

Le contrôle express prévu à 7 h 45 n'a pas tourné : le rappel de 8 h 30 contenait la liste d'hier soir. Voici l'écart constaté à 9 h 50.

**Corrigé depuis hier 18 h ✅**
- **Request Demo × 3** : les 9 textes de « What happens next » sont en anglais, avec une étape 2 adaptée à chaque page (« retailer team », « supplier team ») ; témoignage Steven Michel (E.Leclerc Sodijour) ajouté sur Request Demo Retailers.
- **Home** : « Explore Consentio for retailers → » et « Explore Consentio for suppliers → » reliés ; « See how it works ↓ » relié à sa section.
- **Retailers** : « Discuss an integration → » relié à `/request-demo`.
- **Customer Stories et Resources** : bouton du CTA final relié à `/request-demo`.
- **Header 2026** : Klarys Login pointe maintenant vers `https://klarys.app/accounts/login/`.

**Corrigé via l'API à 11 h 15, à la demande de Marie ✅** (vérifié)
- **Composant CTA Next Step** : bouton relié à Request Demo (corrige Retailers et Klarys joins Consentio).
- **Template Customer Stories** : « ← All customer stories » → Customer Stories · CTA → Request Demo. **Template Resources** : CTA → Request Demo.
- **Suppliers** : « Explore supplier solutions → » → section des 2 modules (`#extend`).
- **Footer 2026** : Klarys Login → `https://klarys.app/accounts/login/`, comme le header.
- **Attributs `href` supprimés** : CTA de Customer Stories et de Resources, CTA des 2 templates, « Discuss an integration → », « Demander une démo ».
- **Home, textes repris de la maquette** : « Stable · Predictable · Structured », « Fresh needs workflows built for daily decisions and execution. », « For fresh food suppliers », et « Two sides, one tempo » à la place de « Eyebrow ».
- Non faisable via l'API : les liens des cartes CMS (Current Resource, Current Customer Story) et le texte de « Demander une démo » (le bouton contient une icône que l'API effacerait).

**Fait par Marie dans le Designer (confirmé à 11 h 20) ✅**
- Liens des cartes CMS : Resources (carte à la une et grille), cas clients de la Home, cartes « autres stories » et « autres articles » des 2 templates.
- Home : « Book a demo » à la place de « Demander une démo », ancien header masqué supprimé, textes alternatifs des 9 logos corrigés.
- **Reste** : classe `login_signup_link` sur les 2 logins, 4 témoignages de démo (Suppliers × 3, About Us × 1), Bell Food Group et Ultra Marine en brouillon, publication puis test en Preview, et les décisions d'Emilien.

**Toujours ouvert ❌** (P1 en premier)
- **Resources** : flèche ↗ des cartes toujours en `#` ; carte à la une et image des cartes à tester en Preview.
- **Composant CTA Next Step** : bouton toujours sans lien (Retailers, Klarys joins Consentio).
- **Template Customer Stories** (modifié à 9 h 26, peut-être en cours) : lien retour, CTA « Contact our sales team » et cartes « autres stories » toujours en `#`. **Template Resources** : pas retouché (CTA et cartes en `#`).
- **Home** : cartes des cas clients en `#`, attribut `href="/book-demo"` sur « Demander une démo », ancien header masqué (avec les anciennes URL françaises `/pour-les-distributeurs`, `/entreprise`…), 4 textes en français, placeholder « Eyebrow », slider ERP (Cegid et Oracle toujours là).
- **Header 2026** : classe `login_signup_link` toujours absente des 2 logins.
- **Suppliers** : 3 témoignages de démo toujours en place ; **nouveau** : le bouton « Explore supplier solutions → » du hero n'a pas de lien.
- **About Us** : les 4 textes « [TO BE CONFIRMED…] » sont toujours visibles.
- **Request Demo Retailers** : FAQ toujours côté fournisseurs · **Request Demo** : meta description toujours vide.
- SEO de Home, Retailers et Suppliers inchangé · OLD - Resources, Terms & conditions Copy et OLD - For Producers toujours publiées.

**Nouveaux pièges ⚠️**
- **Liens en URL au lieu de liens Page** : les liens corrigés ce matin sont saisis en URL (`/retailers`, `/suppliers`, `/request-demo`). Ils fonctionnent, mais ne suivront ni un changement de slug ni les versions `/fr-fr` et `/es-es` une fois les langues activées. Préférer ⚙ Settings › Link › **Page**.
- **Double `href`** : sur les CTA de Customer Stories et Resources, et sur « Discuss an integration → », l'ancien attribut personnalisé (`#book-demo`, `#contact`) est resté à côté du nouveau lien. Le supprimer (⚙ Settings › Custom attributes), sinon le navigateur peut garder l'ancien.
- **Footer** : Klarys Login pointe encore vers `app.klarys.io`, alors que le header pointe vers `klarys.app/accounts/login/` → aligner les deux.

---

## ⚡ En bref

| Question | Réponse |
|---|---|
| Transfert site test → 2026 terminé ? | **Contenu : oui. Finition : non.** Restent 17 liens, 2 réglages de composants, les contenus de démo et le choix de la langue. |
| Corrigé le 24/09 | **21 des 26 liens** listés hier (Suppliers 11/11, Footer 18/18, Header 9/9) · **3 pages créées** (Klarys joins Consentio, Request Demo Retailers, Request Demo Suppliers) · **About Us reconstruite** · Weglot retiré · Manrope chargée. |
| Pages restantes | **0 à créer · 13 à retoucher + 2 composants.** Le contenu se concentre sur 4 pages (Home, Retailers, Suppliers, About Us) ; les 9 autres demandent 1 à 7 corrections chacune. |
| Nouveau point critique | **Page Resources : les cartes des articles pointent vers `#`** (carte à la une et grille). À confirmer en Preview en premier : si c'est le cas, aucun des 55 articles n'est accessible depuis `/resources`. |
| Écart avec Lovable | Les 2 grosses absences sont comblées (Company refaite, page Klarys créée). Restent les contenus de démo, les logos ERP, la carte « Buying workspace » et le visuel IA. |
| Temps estimé | **P1 ≈ 1 h 15 de Designer** + 3 décisions d'Emilien (langue racine, chiffres clés, témoignages). Tout compris ≈ 2 h 15. |

---

## 1. Corrigé le 24/09 ✅ (vérifié via l'API)

- **Suppliers** : les 11 liens (hero, Explore Magic Orders, Explore Webshop, Talk integration, 6 logos ERP, CTA final) → **Request Demo Suppliers** ; « Explore customer stories » → Customer Stories.
- **Home** : hero « Book a demo → », CTA final « Demander une démo », « Become a partner → » et les 7 logos ERP → Request Demo · « For retailer → » → Retailers · « For suppliers → » → Suppliers · « Voir comment ça marche ↓ » traduit en « See how it works ↓ ».
- **Retailers** : hero « Book a demo → » → **Request Demo Retailers**.
- **Header 2026** (9 liens sur 9) : Resources → nouvelle page `/resources` · Company → About Us · boutons **Consentio Login puis Klarys Login** ajoutés (ordre validé le 17/09).
- **Footer 2026** (18 liens sur 18) : Articles and guides → Resources · ERP integration → section `#integration` de Suppliers · adresse e-mail en `mailto:` · Klarys joins Consentio · Contact et Book a demo → Request Demo · 2 logins · 5 pages légales.
- **Template Resources** : lien retour « ← All resources » → Resources.
- **Cartes de la page Customer Stories** : bien liées au CMS (contrairement à celles de Resources).
- **Templates CMS** : les textes par défaut (« Lorem ipsum », « This is some text inside of a div block. », bloc CLIENT et KPI du template Resources) sont tous dans des blocs **masqués**, et le corps (rich text) est lié au CMS → point 12 d'hier **levé**.
- **3 pages créées et publiées** : Klarys joins Consentio (hero, convergence, bloc clients existants, CTA), Request Demo Retailers et Request Demo Suppliers (hero dédié, même formulaire HubSpot FR/ES/EN que Request Demo).
- **About Us reconstruite** (mission, approche, équipe, bloc Consentio et Klarys, impact, témoignage, double CTA) · title SEO « Company | Consentio » · l'ancienne version est gardée en brouillon (BACKUP - About Us).
- **Code du site** : Weglot et balises hreflang retirés · Manrope chargée via Google Fonts · moteur d'animations de la maquette ajouté (`data-reveal`, `data-draw`, `data-parallax`, `data-zoom`, `data-float`).

---

## 2. Reste à faire

### P1 · Bloquant pour le go-live (demain matin)

1. **17 liens à brancher** (Designer › sélectionner le lien › ⚙ Settings › Link) :

| Page | Élément | Cible |
|---|---|---|
| **Resources** | carte à la une (`rs-feat`), image et flèche ↗ des cartes (`cs-card-media`, `cs-card-arrow`) | **Current Resource** (dans la Collection List : 1 réglage vaut pour toutes les cartes) |
| Resources, Customer Stories, 2 templates | bouton du CTA final (« Book a demo → » ou « Contact our sales team → ») | Page › Request Demo |
| Composant **CTA Next Step** | bouton : **aucun lien** depuis le retrait de `#book-demo` | Page › Request Demo (corrige Retailers et Klarys joins Consentio) |
| Template Customer Stories | « ← All customer stories » | Page › Customer Stories |
| Templates Customer Stories et Resources | image et flèche ↗ des cartes « autres stories » et « autres articles » | Current Customer Story · Current Resource |
| Home | « Explore Consentio for retailers → » · « Explore Consentio for suppliers → » | Retailers · Suppliers |
| Home | cartes des cas clients | Current Customer Story |
| Retailers | « Discuss an integration → » (toujours `#contact`) | Request Demo Retailers |

   - Puis **supprimer les attributs `href` personnalisés** (⚙ Settings › Custom attributes) : `href="#"` sur les cartes, `href="#book-demo"` sur les 4 CTA copiés, `href="/book-demo"` sur « Demander une démo » (Home).
   - ⚠️ Le composant CTA Next Step n'a **pas de propriété Lien** : toutes ses instances iront vers la même page. Pour envoyer Retailers vers Request Demo Retailers, lui ajouter une propriété Link (« Lien bouton », défaut Request Demo).
2. **Header 2026** :
   - ajouter la classe `login_signup_link` aux 2 boutons Login (sans elle, le script d'attribution du site n'ajoute pas les UTM) ;
   - supprimer l'**ancien header masqué** toujours présent en haut de la Home.
3. **Contenus à risque** (rien n'a été retiré depuis hier, et About Us en ajoute) :
   - **About Us, 4 textes provisoires visibles** : « [TO BE CONFIRMED — photo of the founding team or people in the field (growers, wholesalers)] », « [TO BE CONFIRMED — exact number of customers] fresh produce businesses trust us » (titre H2), « [TO BE CONFIRMED — permission to use the name] », « [Screenshot of the Consentio mobile and web app, with an up-to-date product catalogue] ».
   - **About Us, chiffres à valider** : « a team of 55 professionals across Madrid, Barcelona, Rennes and Zurich », « ten retailers and nearly 3,000 growers, cooperatives and wholesalers », « In June 2026 » (date du rapprochement).
   - **Témoignages de démo** : Camille Ferrand, Marc Oberli et Elena Ruiz toujours sur Suppliers ; **Camille Ferrand est réutilisée sur About Us**.
   - **9 textes alternatifs faux** sur le bandeau logos de la Home, inchangés (Priméale = « Logo E.Leclerc », Agroponiente = « Logo Intermarché », Biocoop = « Logo METRO », Manor = « Logo Greenyard », Monoprix = « Logo Carrefour », Saveol = « Logo ALDI »…).
   - **Bell Food Group et Ultra Marine** toujours publiées sans corps ni KPI ; **Manor** garde les chiffres de démo (CMS non modifié depuis le 23/09 à 18 h 47).
   - **Encarts « LEGAL APPROVAL REQUIRED »** : pages légales non modifiées depuis le 23/09.
   - **SEO Retailers et Suppliers** inchangé (« Trusted by Carrefour, E.Leclerc and ALDI », « Join 1,000+ fresh produce suppliers »).
4. **Langue** (Weglot retiré ✅) :
   - trancher la locale racine (déclarée FR, contenu anglais) ;
   - **13 textes en français** sur des pages anglaises : Home (4) « Stable · Prédictable · Structured », « Il faut une plateforme conçue pour ça. », « Producteurs / Fournisseurs », « Demander une démo » ; les 3 pages Request Demo (3 × 3) : les étapes de « What happens next » (« Nous étudions votre demande et votre contexte opérationnel. », « Un expert de l'équipe distributeurs ou fournisseurs vous contacte. », « Nous préparons une démo centrée sur vos catégories et vos processus. ») ;
   - ⚠️ le formulaire HubSpot choisit sa langue d'après l'URL (`/fr-fr` → FR, `/es-es` → ES, sinon EN). Si la racine devient la version française, adapter ce test dans l'Embed, sinon la page française affichera le formulaire anglais.
5. **Police** : Manrope chargée ✅. Reste à vérifier en Preview que le **gras** est en Manrope : la règle Quicksand sur `b` et `strong` est toujours dans le code du site (point 17).

### P2 · Qualité et contenus

6. **About Us** : structure faite ✅. Restent les textes provisoires et les chiffres (point 3), un lien vers Klarys joins Consentio dans le bloc « Consentio and Klarys », et « 124 connected partners » (About Us) à aligner sur « 124 partners invited » (story Lagadec).
7. **Klarys joins Consentio** : créée et reliée au footer ✅ ; seul le bouton du CTA final reste sans lien (point 1). Photo du hero générée par IA (`seafood-packing.jpg`, aussi sur About Us) : remplacement suivi dans une autre session, validation prévue demain à 9 h.
8. **Home** :
   - slider ERP inchangé : Cegid et Oracle toujours présents ; SIGEM, SAGE, Produce Pro, ORISHA et COPILOTE absents (ordre cible : SAP, SIGEM, Stepcom, SAGE, Produce Pro, ORISHA, Infor, Microsoft, MS Dynamics, COPILOTE) ;
   - placeholder « Eyebrow » toujours affiché au-dessus des blocs retailers et suppliers ;
   - title et description SEO de l'ancien site (« Trade Fruits & Vegetables online | Consentio »).
9. **Bandeau clients de la Home** : toujours statique (11 logos) alors que la collection Retailers Logo contient les 20 logos dans l'ordre d'Emilien.
10. **Retailers** : Section 2 (logos distributeurs, CMS + Swiper) **toujours masquée** · carte « Buying workspace » du hero et point « Supplier offers spread across email, phone and messaging » toujours absents · logos ERP à aligner.
11. **Suppliers** : les 15 images sont identiques à hier → illustration générée par IA toujours en place, Magic Orders pas inversé.
12. ~~Templates CMS~~ : levé (voir section 1).
13. **Customer Stories (CMS)**, inchangé depuis le 23/09 : Manor (corps, bénéfices, KPI et SEO vides), Coast Tropical sans KPI, `video-url` et `open-graph-image` vides pour les 8. **Nouveau** : le champ `order` est en doublon (2 = Bell et Mytilimer, 3 = Ultra Marine et Anecoop, 4 = Coast Tropical et Agroponiente) → ordre d'affichage imprévisible sur `/customer-stories`. La Home n'est pas touchée (Manor 1, Mytilimer 2, Anecoop 3, Agroponiente 4).
14. **404** : toujours invisible via l'API → vérifier dans Pages › Utility pages.
15. **Filtres** : Customer Stories (All, Retailers, Suppliers) et Resources (4 catégories) à tester sur le site publié. L'onglet « All » de Customer Stories n'a pas de valeur de filtre : vérifier qu'il réaffiche les 8 stories.

Nouveau point P2 :

23. **Request Demo** : Request Demo Retailers reprend la FAQ fournisseurs (« Your master catalogue can be mapped to each customer's references… ») → réécrire les 6 questions côté acheteurs · Request Demo (générique) : meta description vide.

### P3 · Nettoyage avant bascule

16. **Home** : la section masquée qui contient l'Embed de l'ancien connected-flow (jsDelivr) est toujours là.
17. **Code du site** : règle Quicksand sur `b` et `strong` et script de pop-up toujours présents.
18. **OLD - Resources, Terms & conditions Copy et OLD - For Producers toujours publiées** · 1 brouillon de plus (BACKUP - About Us).
19. à 22. Inchangés : templates Product modules et Retailers Logo publics, 14 composants hérités, 11 pages héritées à trancher, tri des 55 articles.

Nouveau point P3 :

24. **Header 2026** : 7 propriétés de composant apparemment inutilisées (Link 1 à 6 et Link 9, les liens du header pointent bien vers les pages). Link 6 vaut encore `/entreprise`, une URL qui n'existe pas → les supprimer pour qu'aucun lien n'y soit relié par erreur.

---

## 3. Pages et composants restants

| Page ou composant | Reste à faire | Temps estimé |
|---|---|---|
| Home | 3 liens, 4 textes FR, « Eyebrow », slider ERP, 9 alt, ancien header, section masquée, SEO | ≈ 45 min |
| Resources | 4 liens (3 sur les cartes + CTA) | ≈ 5 min |
| Retailers | 1 lien, Section 2, « Buying workspace », 1 point de la section Problem | ≈ 30 min |
| Suppliers | 3 témoignages, image IA, Magic Orders | selon décisions |
| About Us | 4 textes provisoires, chiffres, témoignage, lien Klarys, photo IA | ≈ 15 min + validation |
| Request Demo × 3 | 9 textes FR, FAQ Retailers, meta description | ≈ 20 min |
| Customer Stories | 1 lien (CTA) · champ `order` du CMS | ≈ 5 min |
| Templates Customer Stories et Resources | 7 liens | ≈ 10 min |
| Legal notice, Privacy policy | encarts « LEGAL APPROVAL REQUIRED » | validation juridique |
| Composant CTA Next Step | lien du bouton (+ propriété Link) | ≈ 5 min |
| Composant Header 2026 | classe `login_signup_link` × 2 | ≈ 2 min |

---

## 4. Pièges à anticiper

- **Composant ≠ copies** : corriger le composant CTA Next Step règle Retailers et Klarys, pas les 4 copies détachées (Customer Stories, Resources, 2 templates). Les traiter une par une, ou les remplacer par le composant.
- **Attributs `href` personnalisés** : hérités du collage HTML, ils peuvent écraser le lien Webflow. Après chaque correction, vérifier ⚙ Settings › Custom attributes et supprimer `href`.
- **Même formulaire HubSpot sur les 3 pages Request Demo** : pour séparer les leads acheteurs et fournisseurs dans HubSpot, segmenter sur la page de soumission (URL `/request-demo-retailers` ou `/request-demo-suppliers`, ou titre « Book a demo for retailers » / « Book a demo for suppliers »), par exemple avec une liste active ou un workflow qui remplit une propriété « Segment ».
- **Chiffres clés** : 3 chiffres différents pour les fournisseurs (≈ 3 000 sur About Us, 3 200+ sur la Home, 1 000+ dans le SEO Suppliers) et 55 personnes sur About Us. Faire valider une seule fiche de chiffres par Emilien avant de corriger les pages.
- **Modifications en cours** : templates et Home modifiés jusqu'à 17 h 30. Si quelqu'un corrige ce soir, certains points seront déjà faits : un contrôle rapide est programmé demain à 7 h 45, avant le rappel de 8 h 30.
