# Journal · Template Customer Stories (Webflow « Consentio 2026 »)

Référence : HTML Lovable de la page Agroponiente + zip Lovable (`src/components/v2/resource-detail.tsx`, `resource-card.tsx`, `kit.tsx`, `styles.css`, `data/resources.ts`).
Couleurs : charte Webflow (voir `CLAUDE.md`), jamais les oklch Lovable. Police : Manrope partout, libellés compris.
Rien n'est publié : toutes les modifications sont dans le Designer ou en brouillon CMS.

## Fait

### Réglages globaux

| Élément | Avant | Après |
|---|---|---|
| Style de balise `h1` (tout le site) | `text-align: right` | `text-align: left` |
| Style de balise `body` (tout le site) | `font-family: Proxima nova` | `font-family: Manrope` |

L'audit des autres polices du site (Lato, Quicksand, Proxima Nova, règle `b, strong` du code global) est pris en charge par une autre session : pas de modification du code custom global ici.

### Héros

- Styles repris de Lovable (grille 1,15fr / 1fr, H1 40/60/40 px, interligne 0,98, 800), couleurs liées aux variables « Vert charte » / « Lime charte ».
- Libellés (fil d'Ariane, badge, méta) en Manrope majuscules + interlettrage (plus de JetBrains Mono).
- Badge « Customer Story » + nom du client (champ Name) ; pastilles modules masquées.
- Ligne méta : `date · N min read`. Élément « Source brand » et son séparateur supprimés.

### Contexte

- Eyebrow avec point lime, nom du client en H2 (au lieu d'un 2e H1).
- Lignes : Client (Name), Location (Location detail), Spokesperson (Quote author name + role, nouvelle ligne), Modules (liste « , »).
- KPI : nouvelle classe `cs-kpi`, colonnes automatiques selon le nombre de KPI renseignés.
- Citation : guillemets typographiques, filet lime, auteur en libellé.

### Article, cartes, CTA

- Article : largeur 46 rem ; intertitres (H2 ou H3 du CMS) 24 px avec filet entre parties ; citation du texte = encadré « pullout ».
- More customer stories : eyebrow ajouté ; carte reconstruite en classes `csl-*` (carte entière cliquable vers la fiche, ratio 21/9, logo, nom, titre, extrait 2 lignes, méta, flèche au survol). Les éléments liés au CMS ont été déplacés, pas recréés. Liste limitée à 4 + script qui retire la fiche en cours et garde 3 cartes.
- CTA : champ CMS « CTA headline » créé (repli sur « See how Consentio fits your needs ») ; bouton vers Request Demo ; vague en lime charte `#A3EA34` (au lieu de `#A4EF28`).

### Code de la page (Head + Footer du template)

- Règles « champ vide ⇒ bloc masqué » (classe Webflow `.w-dyn-bind-empty`, visibles sur le site publié uniquement) : méta, client, intro, image, logo, lignes d'infos, Spokesperson, Modules, Benefits, KPI, citation, article, cartes, titre CTA.
- Mise en forme du texte riche (`.cs-rich`), survol des cartes, extrait sur 2 lignes.

### CMS (brouillon, non publié)

- Agroponiente : corps de texte aligné sur la maquette Lovable (paragraphes complets + encadré final) ; CTA headline « Discover Consentio Magic Orders ».
- Coast Tropical : CTA headline « Discover Consentio Magic Orders ». Lagadec : « Try the Consentio online shop ».

### Pages listing et Resources

Ligne méta des cartes et du héros Resources : traitée en parallèle (marque retirée, « min read » et « · » conditionnels, attributs `data-meta` + CSS au niveau de chaque page).

## Points ouverts pour Marie

- Fil d'Ariane : Lovable affiche « Toutes les customer stories » (FR) sur une page EN ; conservé en « All customer stories ».
- Manor, Bell Food Group, Ultra Marine : fiches très incomplètes (pas de corps, KPI, benefits, temps de lecture). Leurs blocs vides sont masqués ; faut-il aussi les retirer des listes tant qu'elles ne sont pas complétées ?
- Modules : la CMS lie des « Product modules » génériques ; Lovable affiche des modules propres à chaque story (ex. « Magic Orders, Consentio App, Hispatec ERP sync »).
- Police Manrope : chargée par le code custom global. L'ajouter aussi dans Site settings › Fonts (Google Fonts) pour que le Designer l'affiche.
- La vague du CTA de la Home utilise probablement le même lime approximatif `#A4EF28` : à vérifier.
