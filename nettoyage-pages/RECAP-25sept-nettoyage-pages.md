# Nettoyage des pages Webflow : plan du 25/09

> Inventaire via l'API Webflow le **24/09 à 18 h 40**, en lecture seule (rien n'a été modifié). Site **Consentio 2026** (`6aaaafd0271107b340148c86`). Bascule visée **lundi 28/09**.
> **Sheet de travail** : [Inventaire pages Webflow · Consentio 2026](https://docs.google.com/spreadsheets/d/1-aiMtUWXwPKmHppIybLx6sSavzw58Vh1AKd5UN1ido0/edit) · **CSV avec les ID Webflow** : [`inventaire-pages-consentio-2026.csv`](inventaire-pages-consentio-2026.csv)

---

## ⚡ En bref

| Question | Réponse |
|---|---|
| Faut-il tout garder ? | **Non.** 15 pages sur 114 font le nouveau site. **64** sont des archives, copies ou tests, dont **43 encore publiées**. 9 anciennes pages sont à trancher. Le reste : 24 modèles CMS et 2 pages utilitaires. |
| Comment nettoyer d'ici lundi ? | **Dépublier et ranger, ne rien supprimer.** Règle unique : tout ce qui n'est pas le nouveau site passe en brouillon dans le dossier `/old/`. **55 pages**, 1 appel API (≈ 1 min, réversible). |
| Comment y voir clair ? | Le Sheet : 1 ligne par page, 1 décision, 1 cible 301. Dans Webflow : `/old/` replié → **24 pages visibles** au lieu de 88 pages statiques, **19** après les décisions d'Emilien. |
| Pourquoi ne pas supprimer tout de suite ? | Suppression impossible via l'API (Designer, page par page) · restaurer un backup Webflow remet **tout le site** en arrière · des sauvegardes contiennent encore du contenu utile (CGU en français). |
| Temps demain | **≈ 20 min** à 9 h 30, avant les liens P1. |

---

## 1. Ce que contient le panneau Pages (114 entrées)

| Groupe | Pages | Publiées | Décision |
|---|---|---|---|
| 1. Nouveau site | 15 | 15 | Garder |
| 2. À trancher (Emilien) | 9 | 9 | Défaut proposé, section 7 |
| 3. Copies et sauvegardes de septembre (7 BACKUP, 4 OLD) | 11 | 1 | Brouillon + `/old/` |
| 4. Anciennes pages hors `/old/` | 4 | 2 | Brouillon + `/old/` |
| 5. Archive `/old/` héritée de la prod | 49 | **40** | Brouillon |
| 6. Modèles CMS du nouveau site | 4 | 4 | Garder (2 en noindex) |
| 7. Modèles CMS hérités | 20 | 20 | Après la bascule |
| 8. Pages utilitaires (404, Password) | 2 | 2 | Ne pas toucher |

---

## 2. Demain 9 h 30 : 4 étapes (≈ 20 min)

1. **Sauvegarde (2 min)** : Site settings › Backups › créer une sauvegarde nommée « Avant nettoyage pages 25/09 ».
2. **Dire « go nettoyage » à Claude (1 min)**. Claude vérifie d'abord qu'aucun lien du nouveau site ne pointe vers une page à archiver, puis, en 1 appel API :
   - passe **43 pages publiées** en brouillon (40 de `/old/` + OLD - For Producers, OLD - Resources, Terms & conditions Copy) ;
   - range **15 pages** dans `/old/` (7 BACKUP, 4 OLD, Terms & conditions Copy, OLD - Resources, 2 brouillons légaux de 2024).
   - Sans Claude : ⚙ de chaque page › Draft, puis Parent folder › old (≈ 25 min).
3. **Vérifier (5 min)** : panneau Pages › replier `/old/` et le glisser tout en bas → il reste le nouveau site + les 9 pages à trancher. Publier en **staging seulement** (webflow.io), puis Preview : cliquer tous les liens du Header et du Footer.
4. **Envoyer le message à Emilien (2 min)** : section 7, à grouper avec les 3 décisions déjà attendues (langue racine, chiffres clés, témoignages). Sans réponse à 16 h : appliquer le défaut.

⚠️ **Pas vendredi** : suppression définitive, Style Manager › Clean Up, suppression de collections CMS ou de composants, publication en production.

---

## 3. Structure cible du panneau Pages

```
Pages statiques
├── Home                        /
├── Retailers                   /retailers
├── Suppliers                   /suppliers
├── Customer Stories            /customer-stories
├── Resources                   /resources
├── Klarys joins Consentio      /klarys-joins-consentio
├── Request Demo                /request-demo
├── Request Demo Retailers      /request-demo-retailers
├── Request Demo Suppliers      /request-demo-suppliers
├── company/  About Us          /company/about-us
├── legal/    5 pages légales   /legal/…
└── old/      ARCHIVE : 100 % brouillons, replié, tout en bas
Pages utilitaires : 404, Password
Pages CMS : Resources, Customer Stories · Product modules et Retailers Logo (noindex) · 20 modèles hérités (après la bascule)
```

**Conventions à transmettre à l'équipe**

- **Un dossier = un segment d'URL** (`/company/`, `/legal/`). Ranger une page **publiée** dans un dossier change son URL : brouillon d'abord, dossier ensuite.
- **Plus de « Copy », « OLD » ou « BACKUP » à la racine** : une copie de travail = brouillon dans `/old/`, ou une sauvegarde Webflow.
- **Nom de page = libellé du menu**, slug court en anglais.
- Le dossier `solutions/` sera vide après le tri (For Wholesalers à trancher) → le supprimer après la bascule.

---

## 4. Angles morts (vérifiés via l'API)

| # | Angle mort | Parade |
|---|---|---|
| 1 | **40 pages de `/old/` sont publiées**, pas en brouillon : elles partent en ligne à chaque publication (webflow.io aujourd'hui, consentio.co lundi). Le site 2026 étant une copie de la prod du 16/09, elles sont très probablement **déjà en ligne sur la prod** (`/old/test`, `/old/all-enric`…). | Étape 2 de demain. Contrôle en 10 s : chercher `site:consentio.co/old` dans Google. |
| 2 | **Dépublier = 404 à la bascule** pour toute page qui existe sur la prod (Google, anciens e-mails, posts LinkedIn, QR codes de salons). | Onglet 301 ci-dessous : 28 règles + 9 selon Emilien + `/book-demo` et `/book-a-demo`, puis la règle générique `/old/(.*)` → `/` **en dernier**. À saisir le jour J (Site settings › Publishing › 301 redirects), en plus de celles déjà présentes sur la prod. |
| 3 | **Ancien formulaire de contact Webflow** (composant, 6 champs) sur les **9 pages à trancher** et **7 modèles CMS hérités**, dont l'ancien blog. Au transfert du plan, les formulaires ne suivent pas : ces leads arriveraient dans Webflow › Forms, pas dans HubSpot. | Dépublier par défaut ; pour ce qui reste en ligne, reconfigurer les notifications le jour J ou remplacer par le formulaire HubSpot. |
| 4 | **Des sauvegardes contiennent du contenu utile** : BACKUP - Terms & conditions contient la version FR des CGU ; Terms & conditions Copy a une meta description en français. | Brouillon + `/old/`, **aucune suppression** avant la traduction FR. |
| 5 | **Deux projets Webflow actifs** : le site test `consentio-v2-sept2026` a encore été modifié ce matin (Home 2, 10 h 09) et le `CLAUDE.md` du repo le désigne toujours comme « site actif ». | Corriger le `CLAUDE.md` (site actif = Consentio 2026) ; renommer le site test « ARCHIVE, ne pas modifier » après la bascule. |
| 6 | **La page 404 existe bien dans l'API** (id `6aaaafd0271107b340148c55`, modifiée le 23/09 à 19 h 54) : elle est dans la 2ᵉ page de résultats, la liste s'arrêtant à 100 par appel. | Point P2 n° 14 « 404 invisible via l'API » levé. |
| 7 | **Collections de données** : Product modules (5) et Retailers Logo (20) génèrent **25 pages publiques** inutiles. | Réglages du modèle CMS › SEO : exclure du sitemap + balise noindex. |
| 8 | **Conversions** : si un déclencheur GTM (`GTM-WJCD98F`) ou un objectif GA4 repose sur une URL (`/request-demo`, page de remerciement…), `/request-demo-retailers` et `/request-demo-suppliers` ne le déclenchent pas. | Vérifier les déclencheurs GTM avant lundi. |
| 9 | **`/old/unsubscribe`** : si un ancien e-mail ActiveCampaign y renvoie, la désinscription casse (obligation RGPD). | Vérifier dans ActiveCampaign avant la bascule ; sinon 301 vers une page de désinscription valide. |
| 10 | **Fin de mission lundi** : la suppression définitive se fera sans toi. | Le Sheet sert de passation (colonne « Validé par ») + section 6. |

**Non vérifié** : le sitemap de la prod (consentio.co et fr.consentio.co sont bloqués par le réseau de l'environnement Claude) et le trafic par page (pas d'accès GA4 ni Search Console). Les cibles 301 reposent sur l'équivalence de contenu, pas sur le trafic.

---

## 5. Redirections 301 au go-live

Où : Site settings › Publishing › 301 redirects, le jour de la bascule. Règle générique en dernier.

<details>
<summary>Voir les 40 règles</summary>

| Ancienne URL | Nouvelle URL | Quand |
|---|---|---|
| `/automation` | `/` | si Emilien valide la dépublication |
| `/company/form-contact` | `/request-demo` | si Emilien valide la dépublication |
| `/company/form-contact-seller` | `/request-demo-retailers` | si Emilien valide la dépublication |
| `/company/form-contact-supplier` | `/request-demo-suppliers` | si Emilien valide la dépublication |
| `/faq` | `/request-demo` | si Emilien valide la dépublication |
| `/join-us` | `/company/about-us` | si Emilien valide la dépublication |
| `/pricing` | `/request-demo` | si Emilien valide la dépublication |
| `/solutions/for-wholesalers` | `/suppliers` | si Emilien valide la dépublication |
| `/use-cases` | `/customer-stories` | si Emilien valide la dépublication |
| `/legal/terms-and-conditions-copy` | `/legal/terms-and-conditions` | à la bascule |
| `/old-resources` | `/resources` | à la bascule |
| `/old/blog` | `/resources` | à la bascule |
| `/old/company/about-consentio` | `/company/about-us` | à la bascule |
| `/old/company/faq` | `/request-demo` | à la bascule |
| `/old/company/impact` | `/company/about-us` | à la bascule |
| `/old/company/integrations` | `/suppliers` | à la bascule |
| `/old/company/join-us` | `/company/about-us` | à la bascule |
| `/old/company/press` | `/company/about-us` | à la bascule |
| `/old/company/team` | `/company/about-us` | à la bascule |
| `/old/consolidation-ebook` | `/resources` | à la bascule |
| `/old/contact` | `/request-demo` | à la bascule |
| `/old/content-hub` | `/resources` | à la bascule |
| `/old/download-optimize-management-fruit-vegetables` | `/resources` | à la bascule |
| `/old/ebook` | `/resources` | à la bascule |
| `/old/erp` | `/suppliers` | à la bascule |
| `/old/features` | `/` | à la bascule |
| `/old/form` | `/request-demo` | à la bascule |
| `/old/job-form` | `/company/about-us` | à la bascule |
| `/old/l/customer-testimonial-supermarket` | `/customer-stories` | à la bascule |
| `/old/l/customer-testimonial-supermarket-buyer` | `/customer-stories` | à la bascule |
| `/old/legal/terms-condtions` | `/legal/terms-and-conditions` | à la bascule |
| `/old/magic-orders` | `/suppliers` | à la bascule |
| `/old/optimize-management-fruit-vegetables` | `/resources` | à la bascule |
| `/old/solutions/for-producers` | `/suppliers` | à la bascule |
| `/old/solutions/for-supermarkets` | `/retailers` | à la bascule |
| `/old/solutions/for-wholesalers` | `/suppliers` | à la bascule |
| `/old/temoignage-client` | `/customer-stories` | à la bascule |
| `/book-demo` | `/request-demo` | à la bascule (anciens liens, cf. récap du 24/09) |
| `/book-a-demo` | `/request-demo` | à la bascule (anciens liens, cf. récap du 24/09) |
| `/old/(.*)` | `/` | EN DERNIER : filet de sécurité pour les autres pages /old/ |

</details>

---

## 6. Après la bascule (équipe, mi-octobre)

1. **Supprimer définitivement `/old/`** (64 pages), dans le Designer, page par page, une fois la prod stable.
2. **Chantier CMS** : 20 collections héritées. Blog Posts : 301 `/blog/(.*)` → `/resources/%1` seulement si les slugs sont identiques, sinon règle par article.
3. **Supprimer les 14 composants hérités** (Navbar, Footer, Demo CTA…) une fois `/old/` vidé.
4. **Style Manager › Clean Up** : ⚠️ supprime aussi les classes utilisées seulement dans des Embeds HTML ou ajoutées par un script. Vérifier avant.
5. **Archiver le site test** `consentio-v2-sept2026`.
6. **Search Console** : suivre les 404 (rapport Pages) pendant 4 semaines.

---

## 7. Message à Emilien (prêt à coller)

> Emilien, pour la bascule de lundi, 9 anciennes pages sont encore en ligne. Sans retour de ta part d'ici vendredi 16 h, j'applique ceci :
> - **Dépubliées + redirigées** : FAQ → Request Demo · Pricing → Request Demo · Use Cases → Customer Stories · For Wholesalers → Suppliers · Amazon Seller Central Automation (hors sujet) → accueil.
> - **Gardées en ligne pour l'instant** : Join us (une offre est-elle ouverte ?) · Form Contact, Form Contact supplier, Form Contact seller (créées en juillet : utilisées dans une campagne ou un e-mail en cours ?).
>
> OK pour toi ?

---

## 8. Procédure « go nettoyage » (pour Claude)

1. Site `6aaaafd0271107b340148c86` · dossier `/old/` = `6aaaafd0271107b340148d0a`.
2. Relister les pages (2 appels : offset 0 et 100). Toute page modifiée après le 24/09 18 h 40 → la signaler à Marie avant d'y toucher.
3. Vérifier les liens des 15 pages « Nouveau site » et des composants Header 2026, Footer 2026, CTA Next Step : aucun lien vers une page dont l'« Action demain » commence par « Passer » ou « Ranger ».
4. `data_pages_tool › bulk_update_pages` (1 appel, 55 pages) : `draft: true` pour « Passer en brouillon… », `parentFolderId: 6aaaafd0271107b340148d0a` pour « …ranger dans /old/ ».
5. Relister, contrôler, cocher « Fait » dans le Sheet. **Pas de publication sans l'accord de Marie**, et staging uniquement.
