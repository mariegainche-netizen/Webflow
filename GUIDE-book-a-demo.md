# Book a demo — intégration Webflow + form HubSpot

**Objectif** : page `/book-demo` en staging, form HubSpot embed avec charte Consentio.
**Portal ID HubSpot** : `144242237`
**Form ID** : à créer, puis à coller dans le snippet embed.

---

## Partie 1 — Créer le formulaire côté HubSpot (15 min)

Marketing → **Forms** → **Create form** → **Embedded form** → nom : `Book a demo — Website EN`.

### Les 11 champs à créer (dans cet ordre)

| # | Label affiché | Type HubSpot | Propriété interne | Required | Notes |
|---|---|---|---|---|---|
| 1 | First name | Single-line text | `firstname` (existe) | ✅ | Propriété standard HubSpot |
| 2 | Last name | Single-line text | `lastname` (existe) | ✅ | Propriété standard |
| 3 | Work email | Single-line text (Email) | `email` (existe) | ✅ | HubSpot valide le format et bloque les emails personnels si tu actives l'option « Require business email » |
| 4 | Phone number | Single-line text (Phone) | `phone` (existe) | ❌ | Optionnel |
| 5 | Company | Single-line text | `company` (existe) | ✅ | Propriété standard |
| 6 | Country | Dropdown | `country` (existe) | ✅ | Liste standard HubSpot (utilise « Country/Region ») |
| 7 | Company type | Dropdown | **`company_type_website`** *(à créer)* | ✅ | Options : `Food retailer`, `Central buying office`, `Grower or producer`, `Cooperative`, `Wholesaler`, `Food manufacturer`, `Other` |
| 8 | Job title | Single-line text | `jobtitle` (existe) | ✅ | Propriété standard |
| 9 | Number of employees | Dropdown | `numberofemployees` (existe) | ❌ | Options : `1-50`, `51-200`, `201-1,000`, `1,001-5,000`, `More than 5,000` — attention, la propriété par défaut HubSpot a d'autres valeurs, à ajuster |
| 10 | Primary objective | Dropdown | **`primary_objective_website`** *(à créer)* | ✅ | Options : `Forecast demand`, `Run supplier consultations`, `Compare offers and allocate volumes`, `Automate orders`, `Improve supplier collaboration`, `Manage product catalogues`, `Other` |
| 11 | Message | Multi-line text | `message` (existe) | ❌ | 1 000 caractères max |

### Case RGPD

Dans le form builder → onglet **Options** → **GDPR options** → cocher :
- **Add GDPR options to this form** ✅
- **Type** : `Legitimate interest` ou `Consent to process` selon la politique de Consentio
- **Consent to process** — texte : *« I agree that Consentio may store and process my information to respond to this request, in line with the [privacy policy](/privacy-policy). »*
- **Consent to communications** : optionnel (recommandé pour ne pas cumuler les checkboxes)

### Options du formulaire

- **Onglet Options** :
  - **Thank you** : « Display an inline thank you message » (on gère l'affichage côté page — HubSpot appelle le callback `onFormSubmitted`)
  - **Notifications** : email interne à recevoir sur soumission (par ex. `sales@consentio.co`)
  - **Send follow-up email** : optionnel (workflow HubSpot dédié conseillé)
- **Automation** : créer un workflow qui assigne le lead à un commercial selon `Company type` (Retailer → équipe Retail, Supplier → équipe Supplier)

### Récupérer le Form ID

Form créé → **Actions** → **Share** → **Embed code**. Repère la ligne :

```js
hbspt.forms.create({
  portalId: "144242237",
  formId: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
  region: "eu1"
});
```

Copie la valeur `formId`, tu vas la coller dans les fichiers Webflow (étape suivante).

---

## Partie 2 — Intégrer dans Webflow (20 min)

### 1. Créer la page `/book-demo`

Panneau **Pages** → **+ New Page** → Nom : `Book a demo` → Slug : `book-demo` → SEO title : `Book a demo | Consentio` → Description : `Tell us about your organization and the fresh food workflows you want to improve. We will connect you with the relevant Consentio team.`

### 2. Custom Code — Inside `<head>`

Page **⚙ Settings** → **Custom Code** → **Inside `<head>` tag** :

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mariegainche-netizen/Webflow@claude/charming-ride-fs49bc/consentio-styles.min.css">
<script charset="utf-8" type="text/javascript" src="https://js.hsforms.net/forms/embed/v2.js"></script>
```

Note : si le nom de la branche a changé, mets à jour l'URL jsDelivr en conséquence.

### 3. Coller l'Embed dans la page

Designer → panneau **Add Elements** → **Embed** → glisser dans le corps de la page → coller **le contenu complet de `consentio-book-demo-embed.html`** (tout, du premier `<!--` au dernier `</script>`).

### 4. Remplacer le Form ID

Dans l'Embed, chercher `REPLACE_WITH_FORM_ID` et remplacer par le vrai Form ID récupéré à l'étape « Récupérer le Form ID ».

### 5. Save → Preview → Publish to staging

- Vérifie que le formulaire s'affiche avec :
  - Champs en 2 colonnes desktop / 1 colonne mobile
  - Focus vert forest sur les champs actifs
  - Bouton lime « Book a demo »
  - Bloc forest « What happens next » à droite en desktop, en dessous en mobile
- Teste une soumission avec un mail de test :
  - Le lead doit apparaître dans HubSpot **Contacts**
  - L'écran de succès Consentio doit remplacer le form (pas l'écran par défaut HubSpot)
  - La notification email interne doit partir

---

## Partie 3 — Multilinguisme FR / ES

La page EN reste la source. Une fois **Localization** activé côté Webflow (J3) :

- Le layout et le CSS restent identiques (le CSS ne contient aucune string).
- Il faudra :
  1. **Traduire les 5 strings statiques** dans l'Embed :
     - `Let's discuss your fresh food operations.`
     - `Tell us about your organization and the workflows you want to improve. We will connect you with the relevant Consentio team.`
     - `What happens next` + les 3 étapes
     - `Request received` / `Thank you. Our team will review your request and contact you shortly.` / `← Back to home`
  2. **Créer 2 forms HubSpot supplémentaires** : `Book a demo — Website FR` et `Book a demo — Website ES` (les 3 forms nourrissent les mêmes propriétés, workflows d'assignation identiques).
  3. **Injecter le bon `formId` par locale** :
     ```js
     const forms = {
       en: "FORM_ID_EN",
       fr: "FORM_ID_FR",
       es: "FORM_ID_ES"
     };
     const locale = document.documentElement.lang.slice(0,2);
     hbspt.forms.create({ portalId:"144242237", formId: forms[locale] || forms.en, region:"eu1", target:"#hubspot-form-target", onFormSubmitted: ... });
     ```

---

## Si ça bloque

| Problème | Solution |
|---|---|
| Le form ne s'affiche pas en Preview | Vérifie que le script `js.hsforms.net/forms/embed/v2.js` est bien dans le `<head>`. Ouvre la console (F12) → onglet Console pour voir les erreurs. |
| Erreur `hbspt is not defined` | Le script HubSpot n'est pas chargé avant le `hbspt.forms.create(...)`. Assure-toi qu'il est dans le `<head>` de la page. |
| Le CSS de surcharge ne s'applique pas | HubSpot injecte le form dans un `<iframe>`. Vérifie dans la console DevTools que le form est bien injecté dans un `<div id="hubspot-form-target">` **et pas dans un iframe** (option **Raw HTML** au moment de la création du form, sinon la surcharge CSS ne passe pas). |
| Le bouton reste noir/rouge (style HubSpot par défaut) | Le CSS jsDelivr n'a pas chargé. Ouvre l'URL du min.css dans un onglet, vérifie qu'il s'affiche. |
| Country dropdown vide | La propriété HubSpot `country` a une liste d'options par défaut mais elle peut être vidée dans certains portails. Va dans Settings → Properties → Country/Region et vérifie qu'il y a bien la liste des pays. |

---

## Rappel charte officielle Consentio

- **Dark Green** `#05312D` — fond aside, titres, focus
- **Electric Green** `#A3EA34` — bouton CTA, pastilles numérotées, points d'accent
- **Light Fresh Green** `#F3FCEB` — badges soft, backgrounds tint
- **Neutral Black** `#161616` — texte
- **Orange** `#FF8B00`, **Yellow** `#FFCE00`, **Mild Red** `#F9603D` — accents (Mild Red utilisé pour les astérisques required et messages d'erreur du form)

Manrope 400/500/600/700/800 uniquement.
