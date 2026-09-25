# Estimation du reste à faire et prolongation au 2/10 : Consentio 2026

> Session du **25/09, de 11 h 45 à 12 h 30**. Contrôles via l'API Webflow en **lecture seule** : rien n'a été modifié. Site **Consentio 2026** (`6aaaafd0271107b340148c86`).
> Contexte : fin de mission prévue **lundi 28/09 au soir**, prolongation proposée jusqu'au **vendredi 2/10**. Question de Marie : 4 jours de plus suffisent-ils, formation d'Emilien comprise ?
> **Prochaine étape** : nouvelle session avec l'accès au site de prod consentio.co (section 5).

---

## 🔄 Mise à jour du 25/09 à 12 h 20 : réponses de Marie

| # | Réponse de Marie | Conséquence |
|---|---|---|
| 1 | Anglais à la racine `/` | Retirer le sous-dossier `en-en` de la langue principale (Site settings › Localization) **avant** le CSV final des 301. FR `/fr-fr/` et ES `/es-es/` inchangés : le script du formulaire HubSpot ne bouge pas. |
| 2 | Pages statiques **+ 8 cas clients** traduits ; 55 articles en anglais | + 2 à 3 h. Articles chiffrés à part (ci-dessous). |
| 3 | Aucun relecteur espagnol identifié | À demander à Emilien (équipe ES, 1 h 30 mardi ou mercredi). Sans relecteur : ES non publié le jour J, reporté après le 2/10. |
| 4 | Aucun accès (DNS, site klarys.io, GTM, GA4, Search Console, HubSpot, Cookiebot) : c'est Emilien | Emilien devient le **chemin critique**. Sans accès mardi 12 h : il fait le tracking lui-même avec une checklist (≈ 2 h pour lui, ≈ 3 h de moins pour Marie). |
| 5 | Question pas comprise | Claude vérifie lui-même dans la nouvelle session : domaines connectés au site actuel (fr.consentio.co = Weglot ou site Webflow séparé). |
| 6 | Images avec du texte anglais : Home, Suppliers, Retailers, peut-être Resources et Customer Stories | Inventaire des images à texte via l'API dans la nouvelle session, validation par Marie. Manquent : sources des schémas Magic Orders et Webshop, captures de l'appli en FR et ES. |
| 7 | Éléments de Klarys joins Consentio attendus d'Emilien | Date limite lundi 12 h, sinon le planning glisse. |
| 8 | Emilien modifiera seulement des textes et des articles | Option A : formation 1 h 30, rôle d'éditeur de contenu suffisant. |

- **Estimation mise à jour** : ≈ 44 h (36 à 53 h) pour 39 à 44 h disponibles → ça tient à 8 h par jour, **sans marge**. Au premier blocage, appliquer la liste « à couper » (4 à 6 h). Le risque principal devient **le délai de réponse d'Emilien** : 8 éléments dépendent de lui.
- **Les 55 articles** (chiffrage demandé) : ≈ 22 000 mots par langue → relecture FR 6 à 8 h (≈ 1 jour de Marie) + ≈ 1 jour d'un relecteur ES + 4 à 6 h de traduction par Claude via l'API. **Ne rentre pas dans les 4 jours.** Options : A) 2ᵉ vague après la mise en ligne, par lots de 10 (reco) · B) 1 jour de plus (lundi 5/10) pour avoir le FR au lancement.
- **Pièges CMS** : 21 articles ont un `canonical-url` vers klarys.io → leurs versions FR et ES ne seraient pas indexées tant que ce champ n'est pas vidé. Filtres de Resources et Customer Stories = scripts maison : à retester en FR et ES.
- **Message groupé à Emilien** proposé à Marie à 12 h 20 : décisions d'ici lundi 9 h, accès d'ici mardi 12 h, relecteur ES, plan Webflow avec Localization, gestionnaire du DNS joignable jeudi 14 h-16 h, créneaux go/no-go et formation.

---

## ⚡ En bref

| Question | Réponse |
|---|---|
| Lundi 28 au soir ? | **Impossible** : ≈ 11 h disponibles, alors qu'une mise en ligne en anglais seul demande déjà ≈ 20 h. |
| Vendredi 2/10 ? | **Oui, c'est le minimum réaliste** : charge de 34 à 50 h (médiane ≈ 42 h) pour 39 h (7 h par jour) à 44 h (8 h par jour) disponibles. |
| Conditions | Traduction limitée aux pages statiques (CMS en anglais) · décisions d'Emilien d'ici lundi 9 h · accès d'ici mardi 12 h · relecteur espagnol natif réservé mardi ou mercredi. Sans elles, il manque ≈ 1 jour. |
| Mise en ligne | **Jeudi 1ᵉʳ/10, 14 h-16 h** · go/no-go jeudi 12 h · formation d'Emilien vendredi matin (2 h). |
| Méthode | 7 h utiles par jour (bas de la fourchette 7-9 h de Marie). Temps des récaps précédents × 1,5 : c'étaient des temps de manipulation pure (le nettoyage prévu « 20 min à 9 h 30 » n'était pas lancé à 11 h 50). |

---

## 1. Estimation par tâche

| # | Tâche | Temps de Marie | Part de Claude (API, en parallèle) | Bloqué par |
|---|---|---|---|---|
| 1 | Nettoyage des pages et du CMS hérités | 1 à 1,5 h | 55 pages et 363 items archivés en 2 appels | OK d'Emilien sur 9 pages |
| 2 | Redirections : un seul CSV, klarys.io, fr.consentio.co, tests | 3 à 4 h | CSV assemblé et trié | choix sur `/en-en/`, accès prod, DNS, site Klarys |
| 3 | Traductions FR et ES : ≈ 13 pages, 3 composants, SEO | 7 à 10 h | traduction via l'API avec un glossaire (≈ 4 h) | relecteur ES (2 à 3 h de son temps) |
| 4 | Images et mockups : 4 à 6 visuels × 2 langues | 2 à 4 h | nouvelles images FR/ES des visuels à source HTML | sources Figma ou Canva, captures de l'appli |
| 5 | Carrousels de logos (clients et ERP, 3 pages) | 2 à 3 h | | validation légale des logos clients |
| 6 | Company : photo et finitions | 1 à 2 h | | photo, chiffres validés |
| 7 | Klarys joins Consentio | 1 à 1,5 h | | éléments de Marie |
| 8 | llms.txt (nom exact, avec un s) | 0,5 h | adresses mises à jour | OK d'Emilien |
| 9 | Tracking : GA4 et GTM, HubSpot, Search Console, Cookiebot | 3 à 5 h | code prêt à coller | accès GTM, GA4, Search Console, HubSpot admin |
| 10 | Landing pages démo : FAQ, metas, 9 tests de formulaire | 2 à 3 h | FAQ rédigée, metas via l'API | validation de la FAQ et des témoignages |
| 11 | Absent de la liste de Marie : metas SEO, encarts « LEGAL APPROVAL REQUIRED », 4 témoignages de démo, Bell Food Group et Ultra Marine vides, chiffres de démo sur Manor | 2 à 3 h | metas via l'API | décisions d'Emilien |
| 12 | Recette du staging, bascule, contrôles du lendemain | 6 à 8 h | checklist et plan de retour arrière | plan Webflow, droits sur le domaine |
| 13 | Formation d'Emilien et passation | 3 à 4 h | guide et document de passation | créneau avec Emilien |
| | **Total** | **34 à 50 h** | | |

- **Hors périmètre** : traduire les 55 articles et les 8 cas clients = **+ 8 à 12 h** (surtout de la relecture) ; les 8 cas clients seuls = + 2 à 3 h.
- **À couper en premier en cas de retard (4 à 6 h)** : bandeau logos mis à jour à la main au lieu du CMS · suivi avancé des conversions après le 2/10 · seulement les 3 visuels les plus visibles · pages légales ES laissées en anglais.

---

## 2. Planning

| Jour | Contenu | h |
|---|---|---|
| Ven. 25 après-midi | Nettoyage · un seul message à Emilien (décisions et accès) · carrousels | 4 |
| Lun. 28 | Company · Klarys · landing pages démo · ligne 11 · **textes anglais figés à 18 h** | 8 |
| Mar. 29 | Claude traduit FR et ES le matin, Marie fait les images · relecture FR et mise en page · l'ES part chez le relecteur | 8 |
| Mer. 30 | Tracking · corrections ES · redirections (CSV final) · llms.txt | 8 |
| Jeu. 1ᵉʳ/10 | Recette EN, FR et ES sur 3 formats d'écran · go/no-go 12 h · **mise en ligne 14 h-16 h** · tests · Search Console | 7 |
| Ven. 2/10 | Contrôles du lendemain · **formation d'Emilien (2 h)** · passation · marge ≈ 2 h 30 | 7 |

- **Formation (2 h)** : modifier textes et images · ajouter un article ou un cas client · publier · gérer FR et ES · poser une 301 · ce qu'il ne faut pas toucher (classes, composants).
- **Pas de mise en ligne le dernier jour ni un vendredi** : jeudi 14 h laisse 1,5 jour de corrections avec Marie encore là.

---

## 3. Angles morts (vérifiés via l'API le 25/09 à 11 h 50)

1. **Anglais publié sous `/en-en/`** : locale principale `en-US`, sous-dossier `en-en`, `redirect: true` → la racine `/` redirige vers `/en-en/`. Les 189 redirections préparées (166 Consentio + 23 klarys.io) et le llms.txt visent la racine → chaque redirection en déclencherait une 2ᵉ. **Décision n° 1.** Reco : anglais à la racine. Si FR et ES changent de sous-dossier, adapter le script du formulaire HubSpot (il lit `/fr-fr` et `/es-es`).
2. **Nettoyage pas lancé** : 114 pages dont 93 hors brouillon, **40 pages `/old/` publiées** ; items CMS hérités non archivés (contrôlé sur Blog Posts et Content Hubs). Le staging a été publié à 11 h 22 : ils y sont en ligne.
3. **Site de prod consentio.co invisible avec l'accès Webflow actuel** : seuls le site test et Consentio 2026 sont autorisés, aucun domaine connecté. Le plan transféré doit inclure la **Localization**, sinon FR et ES ne sont pas publiables sur consentio.co.
4. **Tracking du code du site** : Cookiebot (blocage auto), GTM `GTM-WJCD98F`, GA4 `G-FDRE8RZ30V` en direct, ActiveCampaign (`vgo`), script UTM `.login_signup_link`. **Aucun code de suivi HubSpot** (seuls les formulaires sont intégrés) ; suivi des envois du formulaire démo absent du code (à vérifier dans GTM) ; double comptage GA4 possible si GTM l'envoie aussi. Ajouter HubSpot = mettre à jour Cookiebot et la politique cookies.
5. **FR et ES activées** : à la bascule, `/fr-fr/` et `/es-es/` partent en ligne même non traduites. Home en FR : 8 nœuds localisés (images seulement) sur 358 → traduction pas commencée.
6. **Pas de style par langue** : un bouton FR ou ES qui déborde → raccourcir la traduction. Tout texte anglais modifié après traduction est à retraduire à la main.
7. **klarys.io et fr.consentio.co** : les 301 de klarys.io ne tiennent que si le site Klarys reste hébergé ; si fr.consentio.co est le sous-domaine Weglot, il casse à la fin de l'abonnement, et les 301 Webflow ne distinguent pas le sous-domaine. Après la bascule : « Changement d'adresse » dans la Search Console (klarys.io → consentio.co).
8. **Agenda Google de Marie vide jusqu'au 2/10** : 3 rendez-vous à poser avec Emilien (décisions lundi 9 h, go/no-go jeudi 12 h, formation vendredi matin) + son siège Webflow.
9. **Réseau de l'environnement Claude** : refus de `consentio-app-c521bebf45c1cd999680ab383.webflow.io`, `www.consentio.co`, `fr.consentio.co` (et `klarys.io`). Les autoriser permettrait de crawler les liens et de tester les 301 automatiquement.
10. **Après le 2/10** : responsables des 404, des leads HubSpot, de la Search Console et de la suppression de `/old/` mi-octobre. Contrat : avenant de prolongation à signer avant la fin du CDD (à confirmer avec les RH).

---

## 4. Questions posées le 25/09 (réponses : mise à jour de 12 h 20, en haut)

1. URL anglaise : A) racine `/` (reco) · B) garder `/en-en/`.
2. Traduction au go-live : A) pages statiques, CMS en anglais (reco) · B) + 8 cas clients · C) + 55 articles.
3. Relecture espagnole : qui, et quel créneau mardi ou mercredi ?
4. Accès manquants : site de prod (admin) · DNS consentio.co · site klarys.io · GTM · GA4 · Search Console · HubSpot (admin) · Cookiebot.
5. fr.consentio.co : A) sous-domaine Weglot · B) site Webflow séparé · C) inconnu.
6. Images : nombre de visuels à traduire, sources Magic Orders et Webshop, captures de l'appli en FR et ES.
7. Klarys joins Consentio : éléments attendus et date (au plus tard lundi 12 h).
8. Emilien : A) contenus seulement (formation 1 h 30) · B) mise en page aussi (3 h).

---

## 5. Nouvelle session : audit du site de prod (pour Claude)

**Pourquoi une nouvelle session** : les connecteurs sont lus au démarrage d'une session. Marie reconnecte Webflow sur claude.ai (Connecteurs) en cochant **les 4 sites** : Consentio 2026, le site test, le site actuel consentio.co et klarys.io.

**Procédure, en lecture seule. Aucune modification ni publication sur la prod ou sur Klarys sans l'accord explicite de Marie.**

1. `data_sites_tool › list_sites` : identifier le site de prod et le site Klarys. Vérifier que Consentio 2026 et le site test sont toujours autorisés.
2. `get_site` sur la prod : `customDomains` (consentio.co, www, fr ?) et `locales` → trancher la question fr.consentio.co (Webflow ou Weglot).
3. `data_pages_tool › list_pages` (offset 0 et 100) et collections CMS publiées : liste exhaustive des URL de la prod. Croiser avec `nettoyage-pages/inventaire-pages-consentio-2026.csv` (branche `claude/peaceful-sagan-o1u9j9`) et `nettoyage-cms/import-webflow-301-cms.csv` (branche `claude/peaceful-curie-z086t0`). Toute URL sans cible = ligne à ajouter au CSV unique.
4. `data_scripts_tool › get_site_freeform_code` sur la prod : Weglot, tracking réellement en ligne (HubSpot ?), écarts avec Consentio 2026.
5. `data_forms_tool › list_forms` et `list_site_form_submissions` (30 derniers jours) : formulaires Webflow encore utilisés, donc leads qui sortiraient de HubSpot à la bascule.
6. Klarys : étapes 1 à 3, puis compléter `nettoyage-cms/import-webflow-301-klarys.csv`.
7. Les 301 existantes ne sont pas lisibles via l'API : export manuel par Marie (Site settings › Publishing › 301 redirects).
8. Mettre à jour les sections 1 à 3 de ce récap avec les résultats.
