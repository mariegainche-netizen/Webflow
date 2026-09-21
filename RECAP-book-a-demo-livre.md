# Book a demo — livré, ce qui est en place, comment modifier

**Page** : `/book-demo` sur `test-8af0bb.webflow.io`
**Site publié en staging** : oui

---

## Ce que j'ai fait, en 4 points simples

### 1. J'ai créé 12 classes dans ton Style Guide

Toutes préfixées `book-demo__` pour que tu les repères d'un coup dans le panneau Style Manager. Tu peux les retrouver dans **Designer → panneau Styles (icône pinceau à droite) → tape `book-demo` dans la barre de recherche**.

| Classe | Rôle | Comment la modifier |
|---|---|---|
| `book-demo__section` | Le grand cadre gris (Sand) autour de la page | Change `background-color` pour changer le fond, `padding-top`/`padding-bottom` pour l'espacement |
| `book-demo__container` | La zone centrée max 1200 px | `max-width` pour la largeur max, `padding-left/right` pour les marges intérieures |
| `book-demo__grid` | Le layout 2 colonnes (formulaire + aside) | `grid-template-columns` — actuellement `1fr 0.75fr` (form plus large que aside) |
| `book-demo__card` | La carte blanche du formulaire | `background-color`, `border-radius`, `padding` |
| `book-demo__title` | Le H1 « Let's discuss... » | `font-size`, `color` (actuellement Dark Green `#05312D`) |
| `book-demo__lead` | Le paragraphe sous le titre | `color`, `font-size`, `max-width` |
| `book-demo__aside` | La carte vert forêt à droite | `background-color`, `padding` |
| `book-demo__aside-title` | H2 « What happens next » | `font-size`, `color` |
| `book-demo__steps` | Container des 3 étapes | `grid-row-gap` (espace entre étapes) |
| `book-demo__step` | Une étape (pastille + texte) | `grid-column-gap` (espace pastille/texte), `color` du texte |
| `book-demo__step-num` | La pastille lime numérotée | `background-color`, `width`/`height` (28 px), `color` du chiffre |
| `book-demo__step-text` | Le texte de l'étape | rien de spécifique (hérite de `book-demo__step`) |

**Responsive** : j'ai ajouté des overrides sur **Tablet** (`medium`) et **Mobile** (`small`) pour :
- La grille passe en 1 colonne en dessous de 991 px (Tablet et moins)
- Les paddings de la Section et de la Card se réduisent en mobile
- La taille du titre H1 se réduit en Tablet (1.875rem) puis en Mobile (1.5rem)

Tu vois ces overrides dans le Designer en cliquant sur les icônes Tablet/Mobile en haut du canvas, puis en sélectionnant la classe.

### 2. J'ai construit la page dans le Designer

Ouvre le **Navigator** (panneau à gauche, icône 3 lignes horizontales). Tu vas voir :

```
Body
├── Header Consentio (symbol)
├── Footer Consentio (symbol)
└── Section .book-demo__section          ← ⚠ POSITIONNÉE EN BAS, à remonter (voir point 4)
    └── Div .book-demo__container
        └── Div .book-demo__grid
            ├── Div .book-demo__card
            │   ├── H1 .book-demo__title              → « Let's discuss your fresh food operations. »
            │   ├── Paragraph .book-demo__lead        → « Tell us about your organization... »
            │   └── Embed (HTML Embed)                → contient le form HubSpot (voir point 3)
            └── Div .book-demo__aside
                ├── H2 .book-demo__aside-title        → « What happens next »
                └── Div .book-demo__steps
                    ├── Div .book-demo__step
                    │   ├── Text .book-demo__step-num    → « 1 »
                    │   └── Text .book-demo__step-text   → « We review your request... »
                    ├── Div .book-demo__step
                    │   ├── « 2 »
                    │   └── « A specialist from... »
                    └── Div .book-demo__step
                        ├── « 3 »
                        └── « We prepare a demo... »
```

**Chaque texte est éditable directement** dans le Designer en double-cliquant dessus.

### 3. Le formulaire HubSpot — 2 endroits seulement

Le form HubSpot vit à **2 endroits distincts**, tous les deux dans ton contrôle direct :

**A. Le script loader HubSpot est dans le Head Code de la page `/book-demo`**

Où le voir : **panneau Pages → clic droit sur `Book a demo` → Page settings → onglet Custom Code → champ « Inside `<head>` tag »**.

Contenu :
```html
<script charset="utf-8" type="text/javascript" src="https://js-eu1.hsforms.net/forms/embed/v2.js"></script>
```

C'est tout. Ce script charge la librairie HubSpot pour la page. Si tu veux qu'il soit dispo sur toutes les pages (utile quand tu auras d'autres forms), tu peux le déplacer dans **Site Settings → Custom Code → Head Code** (mais ce n'est pas obligatoire).

**B. L'appel du form + son style sont dans le bloc Embed de la carte**

Où le voir : dans le Navigator, clique sur l'élément **Embed** à l'intérieur de `.book-demo__card` (juste après le paragraphe). Double-clic → l'éditeur de code s'ouvre.

Le contenu est structuré en 3 blocs, dans cet ordre :

1. **La cible d'injection** — un seul `<div>` où HubSpot va poser le form :
   ```html
   <div id="hubspot-form-target"></div>
   ```

2. **La surcharge CSS** — bloc `<style>` qui applique la charte Consentio au form HubSpot (couleurs, radius, focus vert, etc.). Chaque règle CSS commence par le sélecteur `#hubspot-form-target .hs-form` — c'est comme ça que tu identifies les règles de surcharge.

   **Si un jour le form s'affiche mal** : commente ce bloc `<style>` (ajoute `/*` au début et `*/` à la fin) → le form reprend le style HubSpot par défaut, et tu vois quel est le problème.

3. **L'appel du form** — le snippet HubSpot :
   ```html
   <script>
     hbspt.forms.create({
       portalId: "144242237",
       formId: "bef45b86-123e-4d12-b436-7f1229ad84a5",
       region: "eu1",
       target: "#hubspot-form-target"
     });
   </script>
   ```
   Si tu changes de form (autre landing, form FR/ES plus tard), tu ne modifies que le `formId`.

### 4. Un seul geste manuel à faire — 5 secondes

L'API Webflow ne me laisse pas insérer un élément entre 2 composants **Symbol** (Header et Footer). J'ai donc créé la section en fin de page, tu dois la remonter à sa place :

1. Ouvre le **Navigator** (panneau à gauche)
2. Trouve `Section` avec la classe **`book-demo__section`** (elle est en dernier, sous le Footer)
3. **Drag-and-drop** cette Section, glisse-la **entre le Header Consentio et le Footer Consentio**
4. **Ctrl/Cmd + S** pour sauvegarder
5. **Publish to Staging** (icône globe en haut à droite → coche `test-8af0bb.webflow.io`)

Ordre final voulu dans le Navigator :
```
Body
├── Header Consentio
├── Section .book-demo__section
└── Footer Consentio
```

---

## Ce qui reste à faire côté HubSpot (rappel)

Ton form HubSpot `bef45b86-123e-4d12-b436-7f1229ad84a5` doit contenir les 11 champs + case RGPD listés dans `GUIDE-book-a-demo.md` (Partie 1). Si tu n'as pas encore créé tous les champs, le form s'affichera avec seulement ceux existants — pas grave, ajoute les autres au fur et à mesure côté HubSpot, ça se met à jour côté page sans rien toucher ici.

Point HubSpot à vérifier : **Form builder → Style & preview → Form style = `Default (raw HTML)`**. Si le form a un thème custom HubSpot, la surcharge CSS ne s'applique pas.

---

## Où trouver l'aperçu

- **Designer, mode Preview** : icône œil en haut à droite → tu vois la page rendue mais tant que tu n'as pas remonté la Section, elle s'affichera en bas.
- **Staging URL** : `https://test-8af0bb.webflow.io/book-demo` — même chose, remonte la Section d'abord.
- **En Designer** : les Embeds apparaissent en placeholder gris. Le rendu réel du form HubSpot ne s'affiche qu'en Preview et en Publish (pas dans le Designer).

---

## En cas de problème

| Symptôme | Où regarder |
|---|---|
| Le form HubSpot ne s'affiche pas | Console navigateur (F12) → onglet Console. Cherche `hbspt is not defined` (loader manquant) ou `Form not found` (Form ID cassé) |
| La page est mal placée verticalement | Le drag & drop du point 4 n'a pas été fait, la Section est encore après le Footer |
| Les 3 étapes sont en 1 seule ligne | Il manque `flex-direction: column` sur `.book-demo__steps` (vérifie dans le Style Manager) |
| Les pastilles numérotées sont carrées | La classe `.book-demo__step-num` a perdu son `border-radius: 9999px` |
| Le titre H1 déborde en mobile | Va sur la vue Mobile dans le Designer → sélectionne le H1 → vérifie que `font-size: 1.5rem` est bien appliqué en override Small |
| Une couleur ne correspond pas à la charte | Rappel : Dark Green `#05312D` / Electric Green `#A3EA34` / Light Fresh Green `#F3FCEB` / Neutral Black `#161616` / Orange `#FF8B00` / Yellow `#FFCE00` / Mild Red `#F9603D` |

---

## Note sur le problème navbar d'hier

Header et Footer sont des **Symbols** (composants réutilisables) — modifiés une fois, propagés partout. C'est ce qui rend impossible pour l'API MCP d'insérer un sibling adjacent à eux (limite de sécurité Webflow, pour éviter qu'un script tiers casse les composants). C'est aussi ce qui rendait ta navbar sensible hier : toute modif d'un Symbol se propage à toutes les pages en même temps.

**Bon réflexe** : quand tu modifies un Symbol, garde un onglet ouvert sur une autre page (ex. la home) pour vérifier en Preview qu'elle n'est pas cassée par ta modif.
