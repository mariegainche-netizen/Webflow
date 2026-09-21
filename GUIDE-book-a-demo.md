# Book a demo — construction native Webflow + form HubSpot

**Objectif** : page `/book-demo` construite à **90 % en natif Webflow** (Designer, Style Guide, symbols). Seul le formulaire HubSpot passe par un mini-Embed — c'est incontournable, HubSpot injecte le form au runtime dans un `<div>` cible.

**Portal ID HubSpot** : `144242237` · Région : `eu1`

---

## Partie 1 — Créer le formulaire côté HubSpot (15 min)

Marketing → **Forms** → **Create form** → **Embedded form** → nom : `Book a demo — Website EN`.

### Les 11 champs à créer (dans cet ordre)

| # | Label affiché | Type HubSpot | Propriété interne | Required | Notes |
|---|---|---|---|---|---|
| 1 | First name | Single-line text | `firstname` (existe) | ✅ | Propriété standard |
| 2 | Last name | Single-line text | `lastname` (existe) | ✅ | Propriété standard |
| 3 | Work email | Single-line text (Email) | `email` (existe) | ✅ | Active « Require business email » si tu veux bloquer les emails perso |
| 4 | Phone number | Single-line text (Phone) | `phone` (existe) | ❌ | Optionnel |
| 5 | Company | Single-line text | `company` (existe) | ✅ | Propriété standard |
| 6 | Country | Dropdown | `country` (existe) | ✅ | Liste standard HubSpot Country/Region |
| 7 | Company type | Dropdown | **`company_type_website`** *(à créer)* | ✅ | Options : `Food retailer`, `Central buying office`, `Grower or producer`, `Cooperative`, `Wholesaler`, `Food manufacturer`, `Other` |
| 8 | Job title | Single-line text | `jobtitle` (existe) | ✅ | Propriété standard |
| 9 | Number of employees | Dropdown | `numberofemployees` (existe) | ❌ | Options à ajuster : `1-50`, `51-200`, `201-1,000`, `1,001-5,000`, `More than 5,000` |
| 10 | Primary objective | Dropdown | **`primary_objective_website`** *(à créer)* | ✅ | Options : `Forecast demand`, `Run supplier consultations`, `Compare offers and allocate volumes`, `Automate orders`, `Improve supplier collaboration`, `Manage product catalogues`, `Other` |
| 11 | Message | Multi-line text | `message` (existe) | ❌ | 1 000 caractères max |

### Case RGPD

Form builder → onglet **Options** → **GDPR options** :
- **Add GDPR options to this form** ✅
- **Type** : `Consent to process`
- **Consent to process** : *« I agree that Consentio may store and process my information to respond to this request, in line with the [privacy policy](/privacy-policy). »*

### Options du formulaire

- **Thank you** : « Display an inline thank you message » (peu importe le texte, l'affichage final vient de Webflow via `onFormSubmitted`)
- **Notifications** : email interne à `sales@consentio.co` (ou similaire)
- **Automation** : plus tard, workflow qui assigne le lead selon `Company type` (Retailer → équipe Retail, Supplier → équipe Supplier)

### Récupérer le Form ID

Form créé → **Actions** → **Share** → **Embed code**. Repère la ligne :

```js
formId: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
```

Copie la valeur. Tu vas la coller dans **un seul endroit** dans Webflow (étape 5 ci-dessous).

---

## Partie 2 — Construction native dans Webflow Designer

### 1. Charger le script HubSpot une seule fois pour tout le site (2 min)

**Site Settings** (icône ⚙ en haut à gauche du dashboard) → onglet **Custom Code** → **Head Code** → ajoute :

```html
<script charset="utf-8" type="text/javascript" src="https://js.hsforms.net/forms/embed/v2.js"></script>
```

Comme ça, chaque future page avec un form HubSpot pourra l'utiliser sans recharger le script.

### 2. Alimenter le Style Guide (10 min)

Panneau **Style Manager** → crée ces classes globales (avec ces valeurs — tu les réutiliseras sur toutes les pages) :

**Layout**

| Classe | Propriétés |
|---|---|
| `.section-book-demo` | Padding top/bottom `56px` (mobile), `112px` (desktop ≥ 960) · Background `#F5F6F1` (sand) |
| `.container` | Max-width `1200px` · Margin `0 auto` · Padding left/right `clamp(20px, 4vw, 40px)` |
| `.demo-grid` | Display `Grid` · Gap `48px` · Columns 1fr (mobile), `1fr 0.75fr` (desktop ≥ 960) · Align items `Start` |

**Carte formulaire**

| Classe | Propriétés |
|---|---|
| `.demo-card` | Background `#FFFFFF` (white) · Border `1px solid #E4E6E1` · Radius `24px` · Padding `40px` |
| `.demo-card-title` | Font Manrope 800 · Font-size `clamp(1.75rem, 3.2vw, 2.25rem)` · Color `#05312D` (forest) · Line-height 1.1 · Letter-spacing `-0.02em` |
| `.demo-card-lead` | Font Manrope 400 · Font-size `1.0625rem` · Color `#5C6B65` (muted) · Max-width `34rem` · Margin-top `16px` |

**Aside forest**

| Classe | Propriétés |
|---|---|
| `.demo-aside` | Background `#05312D` (forest) · Color `#F3FCEB` (fresh) · Radius `24px` · Padding `32px` · Height `fit-content` |
| `.demo-aside-title` | Font Manrope 700 · Size `1.25rem` · Color `#F3FCEB` |
| `.demo-steps` | Display `Flex` (vertical) · Gap `16px` · Margin-top `24px` |
| `.demo-step` | Display `Flex` · Gap `12px` · Align items `Start` · Font-size `0.9375rem` · Color `#B7C4BE` |
| `.step-num` | Width `28px` · Height `28px` · Radius `50%` · Background `#A3EA34` (lime) · Color `#05312D` (forest) · Font Manrope 800 `0.75rem` · Display `Flex` centered · Flex-shrink `0` |

### 3. Créer la page (1 min)

Panneau **Pages** → **+ New Page** → Nom `Book a demo` → Slug `book-demo`.
Dans les **SEO** de la page :
- Title : `Book a demo | Consentio`
- Description : `Tell us about your organization and the fresh food workflows you want to improve. We will connect you with the relevant Consentio team.`

### 4. Construire la structure dans le Designer (10 min)

Structure à reproduire dans **Add Elements** :

```
Section  →  classe .section-book-demo
└─ Div Block  →  classe .container
   └─ Div Block  →  classe .demo-grid
      │
      ├─ Div Block  →  classe .demo-card
      │  ├─ Heading H1  →  classe .demo-card-title  →  "Let's discuss your fresh food operations."
      │  ├─ Paragraph  →  classe .demo-card-lead   →  "Tell us about your organization and the workflows you want to improve. We will connect you with the relevant Consentio team."
      │  └─ Embed  →  ID de l'élément Webflow : "hubspot-embed"
      │              (voir contenu du micro-Embed à l'étape 5)
      │
      └─ Div Block  →  classe .demo-aside
         ├─ Heading H2  →  classe .demo-aside-title  →  "What happens next"
         └─ Div Block  →  classe .demo-steps
            ├─ Div Block  →  classe .demo-step
            │  ├─ Div Block  →  classe .step-num  →  "1"
            │  └─ Text Block  →  "We review your request and operational context."
            ├─ Div Block  →  classe .demo-step
            │  ├─ Div Block  →  classe .step-num  →  "2"
            │  └─ Text Block  →  "A specialist from the retailer or supplier team contacts you."
            └─ Div Block  →  classe .demo-step
               ├─ Div Block  →  classe .step-num  →  "3"
               └─ Text Block  →  "We prepare a demo focused on your categories and workflows."
```

**Astuce** : tu peux dupliquer `.demo-step` 3 fois, changer juste le chiffre et le texte.

### 5. Coller le micro-Embed HubSpot (2 min)

Un seul Embed, dans la Div `.demo-card`, juste après le `.demo-card-lead`. Ne dépasse pas 40 lignes :

```html
<div id="hubspot-form-target"></div>

<style>
  /* Surcharge du form HubSpot injecté au runtime — charte Consentio */
  #hubspot-form-target .hs-form{display:grid;gap:20px;grid-template-columns:1fr;margin-top:32px}
  @media(min-width:640px){#hubspot-form-target .hs-form{grid-template-columns:1fr 1fr}}
  #hubspot-form-target .hs-form fieldset{border:0;padding:0;margin:0;max-width:none!important}
  #hubspot-form-target .hs-form .hs-form-field{margin:0}
  #hubspot-form-target .hs-form .form-columns-1,#hubspot-form-target .hs-form .form-columns-2{max-width:none!important;display:contents}
  #hubspot-form-target .hs-form .hs-form-field>label,#hubspot-form-target .hs-form .hs-fieldtype-booleancheckbox>label,#hubspot-form-target .hs-form .hs-richtext label{display:block;font:600 .875rem "Manrope",sans-serif;color:#05312D;margin-bottom:8px}
  #hubspot-form-target .hs-form .hs-form-required{color:#F9603D;margin-left:2px}
  #hubspot-form-target .hs-form input[type=text],#hubspot-form-target .hs-form input[type=email],#hubspot-form-target .hs-form input[type=tel],#hubspot-form-target .hs-form input[type=number],#hubspot-form-target .hs-form select,#hubspot-form-target .hs-form textarea{width:100%;max-width:none!important;padding:12px 16px;font:400 1rem "Manrope",sans-serif;color:#161616;background:#FFFFFF;border:1px solid #E4E6E1;border-radius:12px;outline:0;transition:border-color .15s,box-shadow .15s}
  #hubspot-form-target .hs-form input:focus,#hubspot-form-target .hs-form select:focus,#hubspot-form-target .hs-form textarea:focus{border-color:#05312D;box-shadow:0 0 0 3px rgba(5,49,45,.12)}
  #hubspot-form-target .hs-form textarea{resize:vertical;min-height:120px}
  #hubspot-form-target .hs-form .hs-fieldtype-textarea,#hubspot-form-target .hs-form .hs-fieldtype-booleancheckbox,#hubspot-form-target .hs-form .legal-consent-container,#hubspot-form-target .hs-form .hs-richtext,#hubspot-form-target .hs-form .hs-submit{grid-column:1/-1}
  #hubspot-form-target .hs-form .hs-form-booleancheckbox-display{display:flex;gap:10px;align-items:flex-start;font:400 .875rem "Manrope",sans-serif;color:#5C6B65;cursor:pointer}
  #hubspot-form-target .hs-form .hs-form-booleancheckbox-display input[type=checkbox]{margin-top:3px;accent-color:#05312D;width:16px;height:16px;flex:0 0 16px}
  #hubspot-form-target .hs-form .hs-error-msg,#hubspot-form-target .hs-form .hs-error-msgs label{color:#F9603D;font:600 .8125rem "Manrope",sans-serif;margin-top:6px}
  #hubspot-form-target .hs-form .hs-button,#hubspot-form-target .hs-form input[type=submit]{display:inline-flex;align-items:center;padding:14px 24px;border-radius:12px;background:#A3EA34;color:#05312D;font:700 .9375rem "Manrope",sans-serif;border:0;cursor:pointer;transition:background .15s,transform .15s}
  #hubspot-form-target .hs-form .hs-button:hover{background:#B8F04C;transform:translateY(-1px)}
  #hubspot-form-target .submitted-message{color:#05312D;font:600 1rem "Manrope",sans-serif}
</style>

<script>
  hbspt.forms.create({
    portalId: "144242237",
    formId: "REPLACE_WITH_FORM_ID",
    region: "eu1",
    target: "#hubspot-form-target"
  });
</script>
```

**⚠ Remplace `REPLACE_WITH_FORM_ID`** par le vrai Form ID récupéré à la Partie 1.

### 6. Vérifier en Preview + publier (2 min)

- Icône **œil (Preview)** en haut à droite → tu dois voir la page complète avec le form réel HubSpot déjà stylé Consentio.
- Icône **globe** → **Publish to Staging** (`test-8af0bb.webflow.io/book-demo`).
- Teste une soumission avec un mail de test :
  - Le lead apparaît dans HubSpot **Contacts**
  - HubSpot affiche son thank-you message inline (à personnaliser si besoin dans HubSpot → **Thank you** → texte)
  - La notification email interne part

---

## Partie 3 — Multilinguisme FR / ES (J7-J8)

Une fois **Localization** activé côté Webflow :

- **La structure Webflow reste identique** — c'est l'atout du natif : Localization traduit les strings visibles directement dans le Designer.
- **Créer 2 forms HubSpot supplémentaires** : `Book a demo — Website FR` et `Book a demo — Website ES` (mêmes propriétés, mêmes workflows d'assignation).
- **Le Form ID change par locale** — au lieu d'un ID fixe dans l'Embed, utilise ce snippet qui détecte la langue de la page :

```html
<script>
  const FORMS = {
    en: "FORM_ID_EN",
    fr: "FORM_ID_FR",
    es: "FORM_ID_ES"
  };
  const locale = (document.documentElement.lang || "en").slice(0,2).toLowerCase();
  hbspt.forms.create({
    portalId: "144242237",
    formId: FORMS[locale] || FORMS.en,
    region: "eu1",
    target: "#hubspot-form-target"
  });
</script>
```

---

## Si ça bloque

| Problème | Solution |
|---|---|
| Le form ne s'affiche pas en Preview | Vérifie que le script `js.hsforms.net/forms/embed/v2.js` est bien dans **Site Settings → Custom Code → Head** (pas dans la page). Ouvre la console (F12) pour voir les erreurs. |
| Erreur `hbspt is not defined` | Le script HubSpot n'est pas chargé. Republish le site après avoir ajouté le script dans Site Settings. |
| Le form s'affiche mais garde le style HubSpot par défaut (bouton bleu, champs gris) | HubSpot t'a créé le form avec un thème personnalisé. Va dans le form builder → **Style & preview** → passe le **Form style** sur `Default (raw HTML)`. Le CSS de surcharge ne peut styler que du raw HTML. |
| Country dropdown vide | Settings → Properties → Country/Region → vérifie la liste d'options. |
| `.demo-grid` en 1 colonne malgré desktop | Vérifie que le breakpoint dans le Designer est bien sur « Desktop » (≥ 992 px Webflow ≈ 960 px CSS). |

---

## Rappel charte officielle Consentio

| Rôle | Hex |
|---|---|
| Dark Green (fond aside, titres, focus) | `#05312D` |
| Electric Green (CTA, pastilles) | `#A3EA34` |
| Light Fresh Green (textes sur forest) | `#F3FCEB` |
| Neutral Black (texte) | `#161616` |
| Orange (accents secondaires) | `#FF8B00` |
| Yellow (highlights) | `#FFCE00` |
| Mild Red (erreurs, required, alertes) | `#F9603D` |

Font : Manrope 400/500/600/700/800 uniquement.
