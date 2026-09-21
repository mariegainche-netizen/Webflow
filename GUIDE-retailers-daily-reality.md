# Retailers · Section « The daily reality » — fix responsive

Correctif de la section 01 de la page Retailers (`test-8af0bb.design.webflow.com/retailers`).

## Ce qui était cassé

- **Layout desktop non équilibré** : 5 cartes dans un grid 2 colonnes → la carte « ERP export » se retrouvait seule à gauche, gros trou à droite.
- **Breakpoint intermédiaire cassé** : la colonne titre restait trop haute pendant que la partie droite se compressait, gros espace vide vertical entre les deux.
- **Alignement vertical** : les deux colonnes n'étaient pas alignées en haut, la répartition du poids visuel partait dans tous les sens selon la largeur.

## Ce qui est corrigé

- Grid parent `align-items: start` → les deux colonnes commencent à la même hauteur.
- Carte **ERP export** en `grid-column: 1 / -1` (pleine largeur) → équilibre les 5 cartes en 2 + 2 + 1 large, plus de trou.
- Bascule en pile 1 colonne dès **1024 px** (avant que le layout ne se casse) plutôt qu'à 768 px.
- Cartes internes en 1 colonne dès **560 px** (mobile).
- Styles scopés sous `.rdr` (Retailers Daily Reality) → aucun conflit possible avec le CSS home global.
- 6 bullets alignés sur la liste de la maquette Lovable.

## Intégration Webflow

1. Ouvre la page **For Retailers** dans le Designer.
2. Supprime l'Embed actuel de la section « Daily reality » (si présent).
3. Panneau **Add Elements (+)** → **Components** → glisse un **Embed** à l'emplacement de la section.
4. Ouvre `retailers-daily-reality.html`, sélectionne **tout le contenu du fichier** (styles + HTML), colle dans l'Embed.
5. **Save & Close**.
6. **Preview** → l'Embed reste gris dans le Designer, c'est normal, le rendu s'affiche uniquement en Preview ou après Publish.
7. **Publish to Staging**.

## Check post-publish (checklist rapide)

- **Desktop ≥ 1200 px** : 2 colonnes équilibrées, ERP export en pleine largeur sous les 4 autres cartes.
- **Tablette 768–1023 px** : titre + bullets en haut, cartes + workspace en dessous, alignement centré.
- **Mobile ≤ 560 px** : cartes empilées 1 par 1, workspace en dessous, colonne `Ton` masquée dans le tableau, meta « Consultation · Week 27 » masquée pour ne pas déborder.
- Badge rouge **42 / 2 / 3 / !** visibles sur les 4 bonnes cartes.
- Prix `1.28 €/kg` en fond lime sur Supplier A.

## Si tu dois retoucher le CSS

Tout est dans le bloc `<style>` en tête du fichier. Toutes les classes commencent par `.rdr__` — safe d'ajouter des règles supplémentaires. Les variables utilisées (`--forest`, `--lime`, `--sand`, `--muted`, `--border`, `--ink`) sont celles déjà chargées par `consentio-styles.min.css` via jsDelivr, avec fallback en dur si le CSS global n'est pas chargé (utile en preview locale).
