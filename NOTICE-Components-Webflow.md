# Notice — Header & Footer en Components Webflow

*Livrée à Marie le 16/09/2026 pour le point Emilien 15h.*

---

## Ce qui a été fait (dans Webflow, live)

- **Palette officielle Consentio propagée** partout : Dark Green `#05312D`, Electric Green `#A3EA34`, Orange `#FF8B00`, Yellow `#FFCE00`, Mild Red `#F9603D`, Light Fresh Green `#F3FCEB`, Neutral Black `#161616`
- **2 Components réutilisables** créés dans le panneau Webflow **Add > Components > Layout** :
  - **Header Consentio** (`aac50abf…fe147fcacc55`) : logo, nav FR, Klarys Login, Consentio Login, Demander une démo
  - **Footer Consentio** (`9a206680…f3d89a68d8`) : 4 colonnes (brand + baseline / Produit / Entreprise / Légal) + copyright
- **Home 2 (FR)** : Header inséré avant la Section hero, Footer après le CTA final
- **Home V3 (démo Emilien)** : Header et Footer instanciés autour de l'Embed HTML ; l'Embed a été nettoyé pour éviter le doublon
- **Hero Lovable** reconstruit dans l'Embed : cartes flottantes fidèles au design system (ForecastCard + Purchase Order)

---

## Comment réutiliser sur les 3 prochaines pages (Retailers, Suppliers, Company)

1. Ouvre la page dans le **Designer Webflow**
2. Panneau gauche **Add (+)** → onglet **Components** → dossier **Layout**
3. **Glisse « Header Consentio »** au tout début de la page (position : premier enfant du Body)
4. Ajoute tes sections de contenu au milieu
5. **Glisse « Footer Consentio »** à la fin de la page (dernier enfant du Body)

## Modifier un Component (impact global)

- **Double-clic** sur l'instance Header ou Footer → mode édition du Component
- Toute modification (texte, style, lien) se propage instantanément à **toutes** les pages où le Component est utilisé
- Sortie du mode édition : clic hors du Component

## Ce que tu ne dois PAS faire

- **Ne pas modifier l'instance** en simple clic — les changements ne se propagent pas et créent des divergences
- Ne pas dupliquer manuellement le HTML du Header/Footer sur d'autres pages — utilise toujours le Component

---

## Points d'attention identifiés

| Point | Statut | Action recommandée |
|---|---|---|
| Font Manrope pas installée dans Webflow | ⚠️ warning MCP | Site Settings > Fonts > Add Google Font > Manrope (weights 400/600/700/800) |
| Plan Starter probable | À confirmer | Guillaume : upgrade Business + Localize Essential = 34 $/mois avant J+3 pour FR/EN/ES |
| Embed HTML Home V3 = démo Emilien uniquement | ⚠️ à faire | L'Embed contient encore l'ancien header + footer HTML : **remplace-le par le contenu de `body-only-content.html`** (repo, branche `claude/wizardly-cannon-xpo6is`) pour supprimer le doublon (2 min de copier-coller) |
| Backticks ` ```html ` dans le Custom Code Head | ⚠️ | À retirer dans Page Settings > Custom Code — ils cassent le CSS silencieusement |

---

## Prochaine étape recommandée (J+3 / J+4)

Reconstruire en éléments natifs (pas Embed) sur Home 2 les 6 sections manquantes :
1. Trust strip (marquee logos — ton script marquee du portfolio est réutilisable tel quel)
2. Proof / KPI stats (+ fs-number-count si Basic)
3. Why fresh is different (compare block)
4. Connected workflow (5-stage stepper — accordion fs-accordion sur mobile)
5. Two sides (Retailers / Suppliers)
6. Customer stories (CMS collection + fs-cms-slider si Premium)

L'Embed Home V3 sert de **référence visuelle** pour reproduire chaque section en natif.

---

## Repos et livrables

- Repo GitHub : https://github.com/mariegainche-netizen/Webflow
- Branche : `claude/wizardly-cannon-xpo6is`
- Draft PR : https://github.com/mariegainche-netizen/Webflow/pull/1
- Site Webflow : https://test-8af0bb.design.webflow.com (Home 2 = FR native, Home V3 = démo Embed)
