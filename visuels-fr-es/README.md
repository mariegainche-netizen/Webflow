# Visuels FR / ES et bloc allocation (26/09)

## 1. Images traduites, page Suppliers (classe `s67-img`)

Seules deux images de la page Suppliers contiennent du texte. Home et Retailers sont 100 % natifs : Localize les traduira.

| Fichier | Asset Webflow | Remplace (EN) |
|---|---|---|
| `webshop-flow-fr.png` | `6ab7803f76a5f592a5ae6645` | `webshop-flow.png` |
| `webshop-flow-es.png` | `6ab7803f76a5f592a5ae665b` | `webshop-flow.png` |
| `magic-orders-flow-fr.png` | `6ab7803f81fe065ffd71e4ee` | `magic-orders-flow.png` |
| `magic-orders-flow-es.png` | `6ab7803fdf00b2e3884bc5d4` | `magic-orders-flow.png` |

- Formats locaux appliqués : 2,85 €, 1 000 kg (FR), 1.000 kg (ES), mar. 23 avr.
- Texte alternatif FR / ES déjà renseigné sur chaque asset.
- Affichage par langue : à faire dans le Designer (voir ci-dessous), l'API ne permet pas de remplacer une image par langue.

### Remplacer l'image par langue dans le Designer

1. Ouvrir la page Suppliers, puis choisir « French (France) » dans le sélecteur de langue en haut du Designer.
2. Sélectionner l'image Magic Orders, puis Settings (touche D) › Image › Replace image › `magic-orders-flow-fr.png`.
3. Même chose pour l'image Webshop avec `webshop-flow-fr.png`.
4. Passer en « Spanish (Spain) » et refaire les étapes 2 et 3 avec les fichiers `-es.png`.
5. Publier.

Piège : faire le remplacement **dans la langue secondaire**. En anglais, l'image change pour toutes les langues.

### Régénérer les images (si un texte change)

Les scripts `scripts/webshop.py` et `scripts/magic.py` effacent chaque texte anglais puis le redessinent traduit (police Inter, même taille, couleur et alignement). Les textes sont listés en tête de script.

- Pré-requis : Python 3 avec `pillow`, `numpy`, `opencv-python-headless`, les TTF Inter (400 à 700) dans `fonts/` (ou variable `INTER_DIR`) et l'image anglaise d'origine dans `src/`.
- Lancer : `python3 webshop.py fr` puis `python3 webshop.py es` (idem `magic.py`).

## 2. Bloc « Comparison and allocation », page Retailers

- Reconstruit en éléments natifs Webflow, fidèle à la maquette Lovable (classes `c6-al-*`), donc traduit par Localize comme le reste de la page.
- Source HTML / CSS du bloc : `retailers-allocation/`.
- L'ancien visuel (`c6-alloc`) est masqué, pas supprimé : à supprimer après validation.
