# 🎯 Récap demain matin — Intégration Home Webflow

**Point Emilien : demain 15h. Livraison staging Webflow : demain 13h max.**
**Rappel Google Agenda posé demain 9h-13h Europe/Paris.**

---

## Ce qui a été fait aujourd'hui

- Analyse complète du zip Lovable : 14 pages, 20 composants custom, design system Consentio
- **Home EN reconstruite en HTML autonome** (Manrope, palette forest/lime/sand, tokens variables CSS)
- **Section Connected workflow en auto-avance 4,5 s** avec Forecast chart SVG fidèle à la maquette Lovable
- Cadrage projet aligné : Webflow projet vierge, multilingue FR/EN/ES via Localization add-on, J+10, 5 pages MVP décidées par Emilien

---

## Diagnostic du problème d'intégration

Quand tu as collé le HTML entre `<body>` et rien ne s'est affiché : **c'est le CSS qui n'est pas chargé**. Deux causes probables :

1. **Le CSS dépasse la limite Custom Code Head** (10 KB sur Basic, 20 KB sur Business) → mon CSS fait **22 KB**, il est silencieusement tronqué
2. **L'Embed dans le Designer Webflow s'affiche en gris** → il ne se rend qu'en Preview ou après Publish

---

## ✅ La méthode qui va marcher demain (nouveau plan)

Le CSS est hébergé sur **jsDelivr** (CDN gratuit qui sert directement depuis ton repo GitHub). Tu n'as plus à te battre avec les limites de Webflow.

### URLs prêtes à utiliser dans Webflow

**Feuille de style** (à mettre dans Custom Code Head) :
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mariegainche-netizen/Webflow@claude/webflow-lovable-mockup-lygkt4/consentio-styles.min.css">
```

Ce bloc ne fait plus que **380 caractères** → passe partout, même sur Basic.

**HTML** (à coller dans un seul Embed sur la page) :
Le fichier `body-only-content.html` (**36 KB**, sous la limite Embed de 50 KB des plans payants) contient tout le corps de la page + le `<script>` de l'auto-avance intégré à la fin.

---

## Étapes précises demain matin

### 1. Créer le projet Webflow (5 min)
- Dashboard Webflow → **New site → Blank**
- Nom : `Consentio v3`
- **Plan** : Basic suffit pour la home d'aujourd'hui. Business + Localization à activer APRÈS validation d'Emilien à 15h.

### 2. Ouvrir la page Home par défaut (1 min)
- Panneau **Pages** → clic sur **Home** (déjà présente)

### 3. Coller les liens CSS + Manrope dans le Head (2 min)
- Icône **⚙ Settings** de la page → section **Custom Code**
- Dans **Inside `<head>` tag**, colle **exactement** :

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mariegainche-netizen/Webflow@claude/webflow-lovable-mockup-lygkt4/consentio-styles.min.css">
```

- **Save**

### 4. Coller le HTML dans un Embed (5 min)
- Retour au **Designer**
- Panneau **Add Elements (+)** → **Components** → glisser un **Embed** dans la page
- Ouvrir sur ton ordi le fichier **`body-only-content.html`** (celui que je viens de te livrer)
- **Sélectionner tout, copier**, coller dans l'Embed
- **Save & Close**

### 5. Prévisualiser (2 min)
- Icône **œil (Preview)** en haut à droite
- Tu dois voir : Hero forest → Trust strip → KPI → Why fresh → **Connected workflow qui avance tout seul** → Two sides → Stories → Integrations → CTA final → Footer

⚠️ **Important** : dans le Designer, l'Embed reste en placeholder gris. Le rendu ne s'affiche qu'en Preview ou en Publish. **Ne panique pas si le Designer est vide.**

### 6. Publier en staging (2 min)
- Icône **globe** → **Publish to Staging** (`xxx.webflow.io`)
- Copier l'URL

### 7. Envoyer à Emilien avant 14h (2 min)
```
Emilien,
Voici la home Consentio v1 en staging :
[URL]
On la regarde ensemble à 15h.
```

---

## Fichiers disponibles sur le repo GitHub

Sur `mariegainche-netizen/webflow`, branche `claude/webflow-lovable-mockup-lygkt4` :

| Fichier | Taille | Usage |
|---|---|---|
| `consentio-home-en.html` | 59 KB | Fichier complet standalone (ouvre-le dans un navigateur pour vérifier que ça marche) |
| **`body-only-content.html`** | **36 KB** | **À coller dans l'Embed Webflow** |
| `consentio-styles.min.css` | 20 KB | Servi via jsDelivr, tu n'as rien à faire |
| `consentio-embed-all-in-one.html` | 57 KB | Fallback : contient CSS + HTML + JS en un seul bloc (si Business plan et Embed accepte 60 KB) |
| `consentio-embed-part1.html` + `part2.html` | 48 + 8 KB | Fallback : découpe en 2 Embeds si un seul ne suffit pas |
| `GUIDE-integration-webflow.md` | — | Guide long si tu veux le détail |

---

## Ce qui va sur la réunion de 15h avec Emilien

**Support** : URL staging Webflow + ce plan 10j :

| Jour | Livrable |
|---|---|
| J1 | Home EN HTML ✅ |
| **J2 demain** | **Home Webflow staging validée par Emilien** |
| J3 | Style Guide + Header/Footer symbols + activation Localization FR/ES |
| J4 | For Retailers EN |
| J5 | For Suppliers EN |
| J6 | Book a demo (HubSpot) + Company → **5 pages MVP livrées** |
| J7 | Traduction FR + peuplement Webflow FR |
| J8 | Traduction ES + peuplement Webflow ES |
| J9 | QA multi-langue, hreflang, redirections, SEO meta, Cookies |
| J10 | Publication production |

**Les 5 décisions à obtenir d'Emilien**

1. **Budget Webflow** : Business (~29 €/mois) + Localization FR/ES (~9 €/mois × 2 = 18 €) = **~47 €/mois** — validé ?
2. **5 pages MVP** : Home, For Retailers, For Suppliers, Book a demo, Company — validé ?
3. **Locale primaire** : EN (le contenu source existe) — validé ?
4. **FR/ES au go-live J+10 ou décalés à J+15 ?** — c'est le vrai levier pour tenir le délai
5. **Qui traduit** : DeepL + relecture native / traducteur externe / équipe interne ES ?

**Question de fond à lui poser**
> « On préfère 5 pages parfaites en 3 langues le J+10, ou 14 pages en EN le J+10 avec FR/ES à J+15 ? »

---

## Si ça bloque demain matin

| Problème | Solution |
|---|---|
| L'Embed refuse le HTML (limite atteinte) | Utiliser `consentio-embed-part1.html` + un 2ᵉ Embed avec `consentio-embed-part2.html` |
| Rien ne s'affiche en Preview | Vérifier que jsDelivr charge le CSS : `https://cdn.jsdelivr.net/gh/mariegainche-netizen/Webflow@claude/webflow-lovable-mockup-lygkt4/consentio-styles.min.css` (doit s'ouvrir dans le navigateur) |
| Auto-avance ne marche pas | Ouvrir console navigateur (F12) → onglet Console → chercher les erreurs |
| Custom Code refuse le collage | Downgrade vers **Basic** (14 €/mois) suffit pour le CSS externe |

Reviens en session Claude si un truc coince, je débogue.

---

## Angles morts à surveiller

- **Photos hero et section Fresh** : Unsplash placeholder actuel → à remplacer par les vraies photos Consentio quand elles seront prêtes
- **Logos clients Trust strip** : rendus en texte pour l'instant → à remplacer par les vrais logos PNG/SVG **après validation légale** (le code source dit « APPROVAL REQUIRED »)
- **Chiffres KPI** : « 3 200+ fournisseurs », « 10+ ans » → à valider avec le commercial
- **Cookies RGPD** : rien de posé, Cookiebot ou Axeptio à installer avant le go-live prod
- **Redirections 301** depuis fr.consentio.co et klarys.io → à préparer J9

---

**Bon courage demain. Tout est prêt. Commence par créer le projet Webflow, colle les 4 lignes de Custom Code, puis l'Embed. En 30 min tu as le staging live.**
