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
