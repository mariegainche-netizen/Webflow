# Retailers Page — Webflow assets

HTML + CSS des 9 sections posées sur la page **Retailers** du site Webflow `consentio-v2-sept2026`.

## Structure

Chaque dossier contient une section complète :
- `index.html` — markup de la section (à copier tel quel dans un Webflow Embed, ou à reconstruire élément par élément dans le Designer)
- `styles.css` — CSS scoped à la section (préfixe `.cN-*` où N = numéro de section)

| # | Dossier | Section | Webflow component |
|---|---|---|---|
| 01 | `01-daily-reality/` | The Daily Reality (`#problem`) | Retailers - 01 The Daily Reality |
| 02 | `02-workflow/` | End to End Workflow | Retailers - 02 Workflow |
| 03 | `03-forecasting/` | Module Forecasting (`#modules` / `#forecasting`) | Retailers - 03 Forecasting |
| 04 | `04-consultations/` | Module Consultations (`#consultations`) | Retailers - 04 Consultations |
| 05 | `05-allocation/` | Module Allocation (`#allocation`) | Retailers - 05 Allocation |
| 06 | `06-orders/` | Module Orders (`#orders`, fond forest) | Retailers - 06 Orders |
| 07 | `07-integration/` | Integration ERP (`#integration`, fond warm + carousel) | Retailers - 07 Integration ERP |
| 08 | `08-implementation/` | Implementation timeline | Retailers - 08 Implementation |
| 09 | `09-final-cta/` | Final CTA (`#final-cta`, fond forest) | Retailers - 09 Final CTA |

## Système de couleurs (design tokens Consentio)

- `--forest` : `#07372D` — vert principal
- `--deep` : `#0D4A3A` — vert profond
- `--lime` : `#A4EF28` — vert accent
- `--sand` : `#F5F6F1` — off-white
- `--tint` : `#F0F6E9` — fond tinté (variations du sand)
- `--warm` : `#F5EFE4` — beige chaud
- `--foreground` : `#12211C` — texte principal
- `--amber-accent` : `#F59A23` — orange (rare)

## Typographie

- **Manrope** (400 / 700 / 800) via Google Fonts
- Fallback : `ui-sans-serif, system-ui, sans-serif`
- Numérique / labels : `ui-monospace, SFMono-Regular, Menlo, monospace`

## Breakpoints

Approche desktop-first, overrides mobile :
- `max-width: 991px` — tablet
- `max-width: 767px` — mobile

## Notes

- Le CSS utilise `Manrope` et `ui-monospace` non installés par défaut sur Webflow. À ajouter dans Site Settings → Fonts.
- Les logos ERP (Section 07) et l'image légumes (Section 09) sont des placeholders — à remplacer par les vrais assets uploadés dans Webflow Assets.
- Pseudo-éléments (`::before`, `:last-child`) ne sont pas supportés par le parser Webflow WHTML : toutes les variations d'état passent par des classes modificatrices (`--done`, `--current`, `--last`, `--muted`).
