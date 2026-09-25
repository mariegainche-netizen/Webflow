# Consentio · Règles projet (à respecter dans toutes les sessions)

## Charte graphique Consentio : à garder EXACTE (règle prioritaire)

- Toujours utiliser les couleurs de la charte Consentio définies dans Webflow, jamais des approximations !
  - Vert charte : `#05312D` (variable Webflow « Vert charte », `--vert-charte`)
  - Lime charte : `#A3EA34` (variable Webflow « Lime charte », `--lime-charte`)
  - Off-white (texte sur fond vert, fonds clairs) : `#F5F6F1`
  - Texte foncé : `#12211C` · texte secondaire : `#5F6964` · filets : `rgba(5,49,45,0.1)`
- Dans Webflow, lier les couleurs aux variables « Vert charte » / « Lime charte » plutôt que de saisir des hex.
- Le code Lovable (zip « Exploration Site vitrine Consentio ») sert de référence pour la structure, les tailles et les espacements uniquement : ne jamais reprendre ses couleurs oklch (`#093627`, `#AEF23C`, etc.).
- Typographie : **Manrope partout**, sans exception (400 à 800), y compris les libellés techniques (méta, eyebrows, badges : Manrope en majuscules + interlettrage). Pas de JetBrains Mono ni d'autre police, même si le code Lovable en utilise.

## Règles de gabarit validées par Marie (CMS Customer Stories / Resources)

- Ligne méta des fiches (héros + cartes) : `date · temps de lecture` uniquement. La marque (« Consentio » / « Klarys ») ne doit jamais apparaître, ni dans les cartes, ni dans le héros, ni sur la page Resources.
- Temps de lecture vide ⇒ ni « min read », ni séparateur « · ».
- Champ CMS vide ⇒ bloc correspondant masqué (visibilité conditionnelle) : Location, KPI, Benefits, citation, etc.
- Titres (H1 des héros) alignés à gauche, jamais à droite : corriger à la source (style de balise ou classe), pas élément par élément.
- Toute correction de style doit être généralisée via la classe ou la balise concernée quand le problème se répète sur le site.
- Contenu des fiches stocké dans les champs de la collection CMS, jamais en dur dans la page (export CSV à venir).
- Libellés du gabarit (fil d'Ariane « All customer stories », « min read », eyebrows) : en anglais sur la version EN ; à traduire en français et en espagnol quand les versions FR et ES existeront.

## Contexte technique

- Site Webflow principal : « Consentio 2026 » (site ID `6aaaafd0271107b340148c86`).
- Pas de publication sans accord explicite de Marie.
- Le code Lovable contient du contenu de démonstration (chiffres et citations marqués « DEMO CONTENT » ou « demo quote ») : ne jamais le présenter comme du contenu client réel.
