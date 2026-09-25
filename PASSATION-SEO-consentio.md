# Fiche de passation SEO : site Consentio 2026

> À remettre à la personne qui reprend le site après la mise en ligne (formation d'Emilien prévue vendredi 2/10). État au 25/09.

## Où en est le site

- Site Webflow **Consentio 2026** (`6aaaafd0271107b340148c86`) · langue principale **EN** · FR et ES activées mais **non traduites**.
- Mise en ligne prévue : **jeudi 1ᵉʳ/10, 14 h-16 h** (go/no-go jeudi 12 h), d'après le planning du 25/09.
- Documents (dépôt GitHub `mariegainche-netizen/Webflow`) :
  - `SEO-nouvelles-pages-25sept.md` : titles, descriptions, images de partage, textes alternatifs ;
  - `REDIRECTIONS-301-25sept.md` + `REDIRECTIONS-301-ajouts.csv` : contrôle croisé et 5 redirections à ajouter ;
  - `nettoyage-cms/` (branche `claude/peaceful-curie-z086t0`) : fichiers de référence des 301 ;
  - `RECAP-25sept-reste-a-faire.md` (branche `claude/magical-mendel-y9zbix`) : corrections du site ;
  - `NOTES-multilingue-consentio2026.md` (branche `claude/gracious-ride-wcxn0p`) : langues et formulaires HubSpot.

## Accès à transmettre (à vérifier un par un)

| Outil | Ce qu'il faut | Remarque |
|---|---|---|
| Webflow | workspace Consentio : sites Consentio 2026 et Klarys | droits Designer + Site settings |
| Google Search Console | propriété du domaine de prod | à créer si absente (validation DNS) |
| GA4 et GTM | `G-FDRE8RZ30V` et `GTM-WJCD98F` | hérités du site actuel (récap du 24/09) |
| HubSpot | portail `144242237`, 3 formulaires FR, EN, ES | leads des 3 pages Request Demo |
| Weglot | compte du site actuel | garder pour le FR ou résilier (décision) |
| Cookiebot | bannière cookies | héritée du site actuel |
| DNS | consentio.co, fr.consentio.co, klarys.io | qui y a accès ? |

## Le jour J

1. Connecter le domaine de prod au site Consentio 2026 et le définir comme domaine par défaut.
2. Site settings › SEO : **Disable Webflow subdomain indexing** = ON · **Global canonical tag URL** = domaine de prod.
3. Importer le **CSV unique des 301** assemblé mercredi (fichiers du nettoyage CMS + 5 ajouts de `REDIRECTIONS-301-ajouts.csv`), après avoir exporté les 301 existantes.
4. **Publish**.
5. Tester : Home, Retailers, Suppliers, Request Demo (1 formulaire HubSpot de test), les 2 anciennes URL redirigées, la bannière cookies.
6. Search Console : soumettre `/sitemap.xml`, demander l'indexation de Home, Retailers et Suppliers.

## Les 2 semaines suivantes

| Quand | Quoi | Où |
|---|---|---|
| J+1, J+3, J+7, J+14 | erreurs 404 et pages exclues | Search Console › Pages |
| J+7 | clics et impressions : marque + 5 pages clés | Search Console › Performances |
| J+7 | leads des 3 pages Request Demo | HubSpot |
| au fil de l'eau | chaque 404 remontée → 1 redirection 301 | Webflow › 301 redirects |

## Reste à décider ou à faire

- **Traduction FR et ES** (pages et metas), puis sort de fr.consentio.co.
- **Chiffres clés et témoignages** à valider par Emilien, puis ajout dans les metas.
- **Accord légal** : logos clients, encarts « LEGAL APPROVAL REQUIRED ».
- **Nettoyage** des pages héritées (`/old/`, anciens templates CMS) : 1 redirection par page supprimée.
- **Visuel de partage** 1200 × 630 px aux couleurs de Consentio.
- **Données structurées** « Organization » (annexe B du document SEO).

## Qui reprend quoi

| Sujet | Responsable |
|---|---|
| Webflow et SEO | [à nommer] |
| Search Console et GA4 | [à nommer] |
| HubSpot (formulaires, leads) | [à nommer] |
| Traductions FR et ES | [à nommer] |
