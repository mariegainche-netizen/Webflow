# Journal · Template Customer Stories (Webflow « Consentio 2026 »)

Référence : HTML Lovable de la page Agroponiente + zip Lovable (`src/components/v2/resource-detail.tsx`, `resource-card.tsx`, `kit.tsx`, `styles.css`, `data/resources.ts`, `data/site.ts`).
Couleurs : charte Webflow (voir `CLAUDE.md`), jamais les oklch Lovable. Police : Manrope partout, libellés compris.
Rien n'est publié : toutes les modifications sont dans le Designer ou en brouillon CMS.

Statut : tâche clôturée le 25/09/2026 (arbitrages de Marie intégrés).

## Fait

### Réglages globaux

| Élément | Avant | Après |
|---|---|---|
| Style de balise `h1` (tout le site) | `text-align: right` | `text-align: left` |
| Style de balise `body` (tout le site) | `font-family: Proxima nova` | `font-family: Manrope` |
| Classe `c9-h2` (titre de section de la Home) | `text-align: right` (gauche sur tablette) | `text-align: left` sur tous les formats |

Les autres classes alignées à droite sont des colonnes de chiffres (prix, quantités) : laissées telles quelles.
L'audit des autres polices du site (Lato, Quicksand, Proxima Nova, règle `b, strong` du code global) est pris en charge par une autre session : pas de modification du code custom global ici.

### Héros

- Styles repris de Lovable (grille 1,15fr / 1fr, H1 40/60/40 px, interligne 0,98, 800), couleurs liées aux variables « Vert charte » / « Lime charte ».
- Libellés (fil d'Ariane, badge, méta) en Manrope majuscules + interlettrage (plus de JetBrains Mono).
- Badge « Customer Story » + nom du client (champ Name) ; pastilles modules masquées.
- Ligne méta : `date · N min read`. Élément « Source brand » et son séparateur supprimés.

### Contexte

- Eyebrow avec point lime, nom du client en H2 (au lieu d'un 2e H1).
- Lignes : Client (Name), Location (Location detail), Spokesperson (Quote author name + role, nouvelle ligne), Modules (nouveau champ texte « Modules list »).
- KPI : nouvelle classe `cs-kpi`, colonnes automatiques selon le nombre de KPI renseignés.
- Citation : guillemets typographiques, filet lime, auteur en libellé.

### Article, cartes, CTA

- Article : largeur 46 rem ; intertitres (H2 ou H3 du CMS) 24 px avec filet entre parties ; citation du texte = encadré « pullout ».
- More customer stories : eyebrow ajouté ; carte reconstruite en classes `csl-*` (carte entière cliquable vers la fiche, ratio 21/9, logo, nom, titre, extrait 2 lignes, méta, flèche au survol). Les éléments liés au CMS ont été déplacés, pas recréés. Liste limitée à 4 + script qui retire la fiche en cours et garde 3 cartes.
- CTA : champ CMS « CTA headline » (repli sur « See how Consentio fits your needs ») ; bouton vers Request Demo ; vague en lime charte `#A3EA34` (au lieu de `#A4EF28`).

### Code de la page (Head + Footer du template)

- Règles « champ vide ⇒ bloc masqué » (classe Webflow `.w-dyn-bind-empty`, visibles sur le site publié uniquement) : méta, client, intro, image, logo, lignes d'infos, Spokesperson, Modules, Benefits, KPI, citation, article, cartes, titre CTA.
- Mise en forme du texte riche (`.cs-rich`), survol des cartes, extrait sur 2 lignes.

### Collection Customer Stories (brouillon, non publié)

Tout le contenu est dans les champs de la collection (rien en dur dans la page), pour l'export CSV.

| Champ | Changement |
|---|---|
| « CTA headline » (nouveau, texte) | Agroponiente et Coast Tropical : « Discover Consentio Magic Orders » ; Lagadec : « Try the Consentio online shop » ; autres : vide (titre par défaut) |
| « Modules list » (nouveau, texte) | Rempli pour les 8 fiches. Agroponiente : « Magic Orders, Consentio App, Hispatec ERP sync » (Lovable). Manor, Bell, Ultra Marine : modules Lovable. Autres : repris du champ Tags. Le champ Tags (référence) reste pour les filtres. |
| Body content | Agroponiente : texte complet de la maquette + encadré final. Manor, Bell Food Group, Ultra Marine : Context / The challenge / The solution / Approach, repris de Lovable (`data/site.ts`). |
| Read time | Manor, Bell Food Group, Ultra Marine : 1 (texte court). |

Non importé volontairement : les chiffres et citations de Manor, Bell et Ultra Marine dans Lovable sont marqués « DEMO CONTENT » et « demo quote » (fictifs). KPI, Benefits, Location et citation restent vides, donc masqués.

### Pages listing et Resources (sous-agent, vérifié)

- Customer Stories (listing) : séparateur « · » ajouté entre date et temps de lecture, « min » → « min read ». Aucune marque présente.
- Resources (listing) : carte vedette et grille déjà correctes ; attributs `data-meta` ajoutés.
- Resources Template : héros sans « · » caché ni emplacement de marque, « min » → « min read » (héros + cartes liées).
- Sur les 3 pages : attributs `data-meta` + CSS de page (temps de lecture vide ⇒ ni « min read » ni « · »). Aucun élément lié à « Source brand ».

## Arbitrages de Marie (25/09/2026)

- Manor, Bell Food Group, Ultra Marine : compléter avec le contenu Lovable → fait (hors contenu de démonstration).
- Modules : « faire au mieux » → champ texte par fiche, affiché comme dans Lovable.
- Fil d'Ariane : en anglais sur la version EN ; en français et en espagnol quand ces versions existeront.
- `c9-h2` aligné à droite : non voulu → corrigé à gauche.

## Vigilance

- Les champs « Stat 1 / Stat 2 » de Manor, Bell et Ultra Marine contiennent déjà des chiffres de démonstration Lovable (ex. « 70% less email back-and-forth », « 95% of orders sent to ERP automatically ») : à valider avec le client ou retirer avant publication.
- Versions FR / ES : traduire aussi « min read » (« min de lecture », « min de lectura ») et les eyebrows.
- Manrope : l'ajouter dans Site settings › Fonts (Google Fonts) pour que le Designer l'affiche.
- Resources (listing) : le code Head a été réécrit à partir d'une lecture faite en début de tâche ; si l'autre session a modifié ce code entre-temps, le vérifier.
