# Règles projet Consentio Webflow

## Principe n°1 — Pas de Custom Code sauf exception justifiée

**Toutes les modifications de style, de mise en page et de comportement doivent passer par les styles et composants Webflow natifs**, via le MCP Webflow (`data_style_tool`, `data_element_tool`, `data_component_tool`) ou le Designer.

Raison : le Custom Code (Site Settings › Custom Code, Page Settings › Custom Code, Embeds inline) est invisible pour l'équipe qui n'ouvre que le Designer. Il est difficile à retrouver, difficile à maintenir, et le prochain passage sur le site risque de le casser ou de le contourner sans le savoir.

**Exceptions acceptées** (uniquement si aucune alternative native n'existe) :

- Scripts tiers imposés (Cookiebot, HubSpot tracking, Axeptio, Google Tag Manager)
- Font loading Google Fonts si non géré par Webflow Fonts
- JSON-LD Schema markup avancé au-delà de ce que `data_pages_tool` permet
- Animation ou logique JS spécifique impossible en Webflow Interactions

Si un Custom Code est ajouté :

- **Documenter** dans un commentaire HTML en tête du bloc : pourquoi, quand, par qui, ce qu'il fait
- **Créer un fichier de suivi** dans le repo (`docs/custom-code-registry.md`) avec un mini-inventaire
- **Prévenir Marie** avant de push, avec le contexte

## Principe n°2 — Composants Webflow natifs pour Header / Footer / sections récurrentes

Les zones structurelles (Header, Footer, CTA final, sections répétées) sont des **Components Webflow** (`Layout` group), pas des Embeds HTML. Toute modification passe par le Component pour se répercuter sur toutes les pages.

## Principe n°3 — Styles BEM

Les styles suivent la convention BEM (`.consentio-header__inner`, `.consentio-header__nav`, `.consentio-header__link`). Ne pas mélanger avec les classes utility du CSS jsDelivr (`.container`, `.nav-links`) qui ne servent que dans les pages Embed héritées.

## Principe n°4 — Localization

Le contenu source du Designer est saisi dans la **locale primaire**. Les traductions se font dans les locales secondaires via le sélecteur de locale du Designer, jamais en dupliquant les pages.

## Stack

- Webflow Business + Localization add-on
- Manrope (Google Fonts)
- Palette Consentio officielle (forest #05312D, lime #A3EA34, orange #FF8B00, yellow #FFCE00, red #F9603D, sand #F3FCEB)
- Site ID : `6aa9284e2c3f1f5923e96572` (consentio-v2-sept2026)
- Component Header : `aac50abf-4721-2768-f552-fe147fcacc55` (Header Consentio, Layout group)

## Historique des décisions techniques

- **2026-09-17** : Fix responsive header — max-width 1200→1440, gap fluide, nowrap. Appliqué **directement sur les styles Webflow** (pas Custom Code). Le Custom Code jsDelivr précédemment poussé (`consentio-styles.css` sur classes `.container.nav`, `.nav-links`) ne s'appliquait pas car les classes Webflow sont BEM.
