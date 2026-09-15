# Guide intégration home Consentio dans Webflow

**Objectif** : home publiée en staging (`xxx.webflow.io`) demain avant 15h.
**Durée totale** : 30 min si tout se passe bien.

---

## Avant de commencer

- Ouvre le fichier `consentio-home-en.html` (celui qu'on t'a livré aujourd'hui) dans un éditeur de texte (VS Code, Sublime, TextEdit).
- Ouvre en parallèle : `https://webflow.com` connecté à ton compte.
- Prévois ton mot de passe carte bleue : le plan Business + Localization nécessite paiement dès l'activation (fais-le APRÈS validation Emilien à 15h si tu veux gagner du temps aujourd'hui — pour la home EN pure, un plan Basic à 14 €/mois suffit temporairement).

---

## Étape 1 — Créer le projet Webflow (5 min)

1. Dashboard Webflow → **New site** → **Blank site**
2. Nom du projet : `Consentio v3`
3. Workspace : le workspace Consentio existant (pas ton compte perso)
4. **Ne pas activer Localization aujourd'hui** — on attendra le OK d'Emilien à 15h

---

## Étape 2 — Créer la page Home (2 min)

1. Dans le Designer, panneau **Pages** (icône 📄 à gauche)
2. Il y a déjà une page **Home** par défaut → clique dessus pour l'ouvrir (on va la vider et la remplacer)
3. Sinon : **+ New Page** → Nom `Home V3` → Slug laisse par défaut

---

## Étape 3 — Coller le CSS + Manrope (5 min)

1. Sur la page ouverte, icône **⚙ Settings** de la page (roue crantée en haut du panneau Pages)
2. Scroll jusqu'à **Custom Code**
3. Dans le champ **Inside `<head>` tag**, colle exactement :

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
/* ⚠ colle ici tout le contenu entre <style> et </style> du fichier consentio-home-en.html */
</style>
```

4. Sauvegarde (**Save**)

**⚠ Si Webflow refuse pour dépassement de limite** : le CSS fait ~9 500 caractères, ça doit passer. Sinon → me le dire, je te sors une version compressée.

---

## Étape 4 — Coller le HTML dans un Embed (10 min)

1. Retour au **Designer** (icône ✕ en haut à droite si tu es en Settings)
2. Panneau **Add Elements** (icône ➕ à gauche)
3. Section **Components** → glisse un **Embed** dans le corps de la page
4. Une fenêtre de code s'ouvre
5. Dans le fichier `consentio-home-en.html`, sélectionne tout ce qui est **entre `<body>` et `</body>`** — MAIS PAS les balises body, ET PAS le bloc `<script>...</script>` de fin (celui-là va dans l'étape 5)
6. Colle dans l'Embed
7. Clic sur **Save & Close**

**Note importante** : dans le Designer Webflow, l'Embed apparaît en bloc gris avec l'étiquette « Embed ». **C'est normal**, le rendu ne s'affiche que dans le mode Preview et après publication.

---

## Étape 5 — Coller le JavaScript (2 min)

1. Retour aux **⚙ Settings** de la page
2. Dans **Custom Code** → champ **Before `</body>` tag**, colle :

```html
<script>
/* ⚠ colle ici tout le contenu entre <script> et </script> du fichier consentio-home-en.html */
</script>
```

3. **Save**

---

## Étape 6 — Prévisualiser (2 min)

1. Icône **œil (Preview)** en haut à droite du Designer
2. Vérifie :
   - Hero avec image et cartes flottantes s'affiche
   - Trust strip avec les 10 noms de clients
   - KPI stats (Consentio in numbers) alignés
   - Section « Why fresh is different » avec la comparaison Standard vs Fresh
   - **Connected workflow : l'auto-avance fonctionne toutes les 4,5 s**
   - Two sides, Customer stories, Integrations, Final CTA, Footer
3. Bascule vue tablet et mobile (icônes en haut à droite) : rien ne dépasse

---

## Étape 7 — Publier en staging (2 min)

1. Icône **globe (Publish)** en haut à droite
2. Coche **Staging (subdomain.webflow.io)**
3. Clic **Publish selected domains**
4. Copie l'URL affichée
5. Ouvre-la dans un onglet privé pour vérifier que ça marche en public

---

## Étape 8 — Envoyer à Emilien avant 15h (2 min)

Slack ou email :
> Emilien, voici la home Consentio v1 en staging Webflow :
> [URL]
> On la valide ensemble à 15h.

---

## Ce que tu prépares POUR le point 15h

**Support de discussion :** le staging Webflow + ce plan 10j :

| Jour | Livrable |
|---|---|
| J1 | Home EN HTML ✅ |
| J2 aujourd'hui | Home Webflow staging + validation Emilien |
| J3 | Style Guide + Header/Footer symbols + Localization add-on FR/ES si OK budget |
| J4 | For Retailers EN |
| J5 | For Suppliers EN |
| J6 | Book a demo (HubSpot) + Company → **5 pages MVP livrées** |
| J7 | Traduction FR + peuplement Webflow FR |
| J8 | Traduction ES + peuplement Webflow ES |
| J9 | QA, hreflang, redirections, SEO, Cookies |
| J10 | Publication prod |

**Les 5 décisions à obtenir d'Emilien**
1. OK budget Webflow **Business + Localization** (~47 €/mois)
2. **5 pages MVP** : Home / For Retailers / For Suppliers / Book a demo / Company — validé ?
3. **Locale primaire** : EN — validé ?
4. **FR/ES au go-live J+10, ou décalés à J+15 ?** (levier principal pour tenir le délai)
5. **Qui traduit** : DeepL + relecture native / traducteur externe / équipe interne ES ?

---

## Si ça bloque

**« Le CSS ne rentre pas dans Custom Code »**
→ Compresser le CSS (retirer commentaires, espaces) OU l'héberger externe (GitHub Pages, jsDelivr) et le linker avec `<link rel="stylesheet" href="...">`. Me demander en session Claude.

**« L'Embed refuse mon HTML (limite 50 000 caractères) »**
→ Découper en 2-3 Embeds : Hero + Trust + KPI dans le 1er, Why fresh + Connected workflow dans le 2ᵉ, le reste dans le 3ᵉ.

**« L'auto-avance ne se déclenche pas »**
→ Vérifier que le `<script>` est bien dans **Before `</body>`** et pas dans le Head. Si toujours KO, ouvrir la console navigateur (F12) et regarder les erreurs.

**« Le rendu Preview est cassé »**
→ Ouvrir la console navigateur (F12) → onglet Console → me copier-coller les erreurs.

---

_Rappel Agenda posé demain 9h-13h Europe/Paris pour couvrir tout ça._
