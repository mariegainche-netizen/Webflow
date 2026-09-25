# Multilingue — site Webflow « Consentio 2026 » (état au 24/09/2026)

## Situation
- Langue principale Webflow : **FR** (racine `/`), langues secondaires **ES** (`/es-es`) et **EN** (`/en-us`), toutes activées.
- Les textes enregistrés dans la langue principale sont **en anglais** (textes fournis en EN).
- **Weglot retiré** du Head du site le 24/09/2026 (script + init + 4 anciennes balises hreflang). Compte Weglot non touché (site actuel).
- Conséquence : les 3 versions affichent l'anglais (ES et EN vides → reprennent la langue principale). Seul le formulaire HubSpot change de langue.

## Formulaire HubSpot (page `/request-demo`)
- Portail 144242237, région eu1. Langue déduite **de l'URL uniquement** (`/es-es`, `/en-us`, sinon FR).
- FR = `ca0ea91c-a8b6-4ae7-802b-e64fa310516e` · ES = `f705925c-3f85-453d-9c21-6aab9b3cac29` · EN = `4e689804-5174-4575-a0c6-1228f1675a25`
- Test : `?lang=fr|es|en` force la langue.
- Code : `request-demo-hubspot-only.html`.

## Reste à faire
1. Feu vert Emilien : langue principale → EN, FR et ES en secondaires (Site settings → Localization).
2. Traduire FR et ES (traduction auto Webflow + relecture).
3. Ajouter un sélecteur de langue Webflow (Locale List) dans la navbar.
4. Vérifier les classes `.only-fr/.only-es/.only-en` (règles CSS écrites pour Weglot, `html[lang="fr"]` ne correspond plus à `fr-FR`).
5. Request Demo : 3 étapes du bloc vert en EN (textes Lovable) une fois l'EN en langue principale.
6. Site test : formulaire ES = `f705925c…` ; police du formulaire HubSpot.

## Mise à jour 24/09 après-midi
- Langues échangées : **EN principale** (`/en-en`), FR `/fr-fr`, ES `/es-es`. Script du formulaire adapté (FR/ES selon le sous-dossier, EN sinon).
- 3 pages de démo, même formulaire HubSpot :
  - `/request-demo` (générique, indexée)
  - `/request-demo-retailers` (message centrales d'achat, `noindex`)
  - `/request-demo-suppliers` (message producteurs et grossistes, `noindex`)
- Bandeau photo + titre H1 blanc (classes `rd-hero-banner*`, dégradé `c10-bg-fade`, ligne `c10-wave`).
- Colonne droite : photo + « What happens next » + 3 étapes, sans cadre vert.
- À faire : retirer titre et intro des 3 formulaires dans HubSpot ; FAQ distributeurs à rédiger ; traduire les 3 pages en FR et ES.

## État fin de journée 24/09
- 3 pages de démo : bandeau (libellé + H1 personnalisé, sans sous-titre), formulaire à gauche, photo à droite, « What happens next » en 3 colonnes sous le formulaire.
- Témoignage E.Leclerc (Steven Michel, citation courte mot pour mot) sur `/request-demo-retailers` uniquement : accord à confirmer.
- Page Suppliers : 11 boutons de démo pointent vers `/request-demo-suppliers` (10 anciens liens `/book-demo` cassés corrigés).
- Demain : 2 témoignages réels validés par Emilien (distributeur + fournisseur), FAQ distributeurs, vérification mobile, Publish, traduction FR/ES.

### 25/09 : témoignage fournisseur
- `/request-demo-suppliers` : témoignage Antoine Caruana (Les Paysans de Rougeline), validé par Emilien, ajouté sous la photo (version EN, locale principale).
- Original FR à coller dans la locale FR lors de la traduction.
- Poste d'Antoine Caruana manquant (seule l'entreprise est affichée).
- Grille `book-demo__grid` : `minmax(0, 5fr) minmax(0, 7fr)`, espace entre colonnes 48px (photo + témoignage à gauche, formulaire plus large à droite), validé par Marie. Une seule colonne sur tablette et mobile.
- Citation E.Leclerc à remplacer (témoignage distributeur attendu d'Emilien). Ne pas publier avant.
