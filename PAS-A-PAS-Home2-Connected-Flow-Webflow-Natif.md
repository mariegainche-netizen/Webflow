# Connected Flow — Pas à pas Webflow natif (Home 2)

**But :** reproduire la section « One workflow, from demand plan to synchronized order data » **entièrement dans le Designer Webflow**, avec les 5 étapes qui défilent toutes seules toutes les 4,5 s, comme sur Lovable.

**Méthode :** on utilise le **Tabs Component natif de Webflow** (menu de tabs à gauche, contenu à droite). Un mini script en fin de section clique tout seul sur le tab suivant toutes les 4,5 s → auto-play parfait. Tout le contenu reste éditable dans le Designer, tu n'as jamais besoin de retoucher du code pour changer un texte.

**Temps estimé :** 45-60 min la première fois, 10 min pour dupliquer sur un autre projet.

---

## Étape 0 · Ce que tu obtiens à la fin

```
┌─────────────────────────────────────────────────────────────┐
│  THE CONNECTED WORKFLOW                    [fond vert forêt]│
│                                                             │
│  One workflow, from demand plan                             │
│  to synchronized order data.                                │
│                                                             │
│  Each step feeds the next...                                │
│                                                             │
│  ┌────────────────────────┐    ┌────────────────────────┐  │
│  │ ● 01  Forecast   ◄─── │    │  WEEK 27 · DEMAND PLAN │  │
│  │   Build demand plans  │    │                        │  │
│  │   [Without] [With]    │    │      [graphique W27]   │  │
│  │                        │    │                        │  │
│  │ ○ 02  Collect          │    │                        │  │
│  │ ○ 03  Allocation       │    │                        │  │
│  │ ○ 04  Order execution  │    │                        │  │
│  │ ○ 05  Modular approach │    │                        │  │
│  └────────────────────────┘    └────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

Le point vert (●) et le contenu détaillé sautent automatiquement à l'étape suivante toutes les 4,5 s.

---

## Étape 1 · Créer la section (le contenant)

Dans le Designer, ta section vide de Home 2 doit avoir :

- **Nom de classe** : `Connected Flow Section` (raccourci CF)
- **Background color** : `#07372D` (vert forêt Consentio) — clic sur Background dans Style panel
- **Padding top** : `80px` · **Padding bottom** : `88px`
- **Text color** : `#F5F6F1` (blanc cassé) — Style > Typography > Color

Ajoute dedans :

1. Un **Container** (par défaut Webflow, largeur 1200 px auto)
2. À l'intérieur : les 3 blocs qu'on va créer plus bas (Header, Grid, Embed script)

---

## Étape 2 · Le header de la section

Dans le Container, ajoute 3 éléments empilés :

### 2.1 Eyebrow (le petit label vert)

- **Text block** avec le texte : `● THE CONNECTED WORKFLOW`
- Classe : `CF Eyebrow`
- Font size : `11px` · Font weight : `700` · Letter spacing : `0.18em`
- Text transform : `UPPERCASE` · Color : `#F5F6F1`
- Astuce pour le point vert : mets un `Span` autour de `●` avec la classe `CF Eyebrow Dot`, background `#A4EF28`, width/height `6px`, border-radius `50%`, margin-right `8px`, display inline-block

### 2.2 Titre principal

- **Heading H2** avec le texte : `One workflow, from demand plan to synchronized order data.`
- Classe : `CF Title`
- Font size : `40px` (desktop) · Font weight : `800` · Line height : `1.02` · Letter spacing : `-0.03em`
- Color : `#F5F6F1` · Margin top : `16px`
- Responsive Tablet : `32px` · Mobile : `28px`

### 2.3 Sous-titre

- **Paragraph** avec le texte : `Each step feeds the next. Buyers and suppliers work on the same structured information instead of exchanging files, emails and messages.`
- Classe : `CF Lead`
- Font size : `18px` · Color : `#B7C4BE` · Max width : `36rem` · Margin top : `16px`

---

## Étape 3 · La grille à 2 colonnes

Sous le header, ajoute un **Div block** :

- Classe : `CF Grid`
- Display : `Grid`
- Columns : `1.05fr .95fr` · Column gap : `56px`
- Align items : `Start` · Margin top : `40px`
- Responsive Tablet/Mobile : passer en `1 colonne`, row gap `32px`

Cette grille va contenir :
- **Colonne gauche** = le Tabs Menu (les 5 étapes cliquables)
- **Colonne droite** = les Tabs Content (les 5 visuels)

---

## Étape 4 · Ajouter le Tabs Component

Depuis Add panel (touche `A`), cherche **Tabs** et glisse-le dans la CF Grid.

Webflow ajoute une structure prête à l'emploi :

```
Tabs (wrapper)
├─ Tabs Menu
│  ├─ Tab Link Tab 1
│  ├─ Tab Link Tab 2
│  └─ Tab Link Tab 3  (par défaut 3 tabs)
└─ Tabs Content
   ├─ Tab Pane Tab 1
   ├─ Tab Pane Tab 2
   └─ Tab Pane Tab 3
```

**Important :** il te faut **5 tabs**. Dans Tabs Menu, sélectionne un Tab Link, clic droit > Duplicate jusqu'à en avoir 5. Fais pareil dans Tabs Content (ou Webflow duplique les 2 en même temps, ça dépend des versions).

**Renomme** chaque Tab Link et Tab Pane dans le Navigator (barre gauche) :
- Tab 1 → `01 Forecast`
- Tab 2 → `02 Collect`
- Tab 3 → `03 Allocation`
- Tab 4 → `04 Order execution`
- Tab 5 → `05 Modular approach`

**Configure le layout Tabs :**

- Sélectionne le wrapper **Tabs** > onglet Settings (touche `D`)
- Layout : coche `Menu on top` puis change en `Menu on left` (menu à gauche, contenu à droite). Si cette option n'existe pas dans ta version : on la fera en CSS Grid, voir Étape 4 bis
- Classe wrapper : `CF Tabs`

**Étape 4 bis — si `Menu on left` n'existe pas** (versions récentes de Webflow ont retiré l'option) :

- Le wrapper Tabs est déjà en display `flex column` par défaut → change en `Grid` avec 2 colonnes `1fr 1fr` (ou reste sur flex column et on utilise la CF Grid déjà en place)
- Plus simple : mets le **Tabs Menu** dans la colonne gauche de CF Grid, et le **Tabs Content** dans la colonne droite. Pour ça :
  - Dans le Navigator, glisse-déplace `Tabs Menu` en enfant direct de `CF Grid` (colonne 1)
  - Glisse-déplace `Tabs Content` en enfant direct de `CF Grid` (colonne 2)
  - Supprime le wrapper Tabs devenu vide **UNIQUEMENT si Webflow te laisse faire** ; sinon laisse-le en display `contents`

---

## Étape 5 · Design du Tabs Menu (colonne gauche)

Sélectionne **Tabs Menu** :

- Classe : `CF Steps`
- Display : `Flex column` · Gap : `0`
- Padding left : `40px` (pour laisser la place au trait vertical + points)
- Position : `relative` (pour pouvoir mettre le trait en ::before)

**Ajout du trait vertical vert (optionnel mais fait le style Lovable) :**

Webflow ne permet pas de créer des pseudo-elements `::before` visuellement. Solution : ajouter un **Div block** vide dans CF Steps avec :
- Classe : `CF Steps Track`
- Position : `absolute` · Left : `3px` · Top : `16px` · Bottom : `16px`
- Width : `1px` · Background : `rgba(245,246,241,0.15)` (le rail estompé)

---

## Étape 6 · Design de chaque Tab Link (les 5 étapes)

Sélectionne le premier Tab Link (`01 Forecast`) :

- Classe : `CF Step`
- Padding : `16px 0` · Cursor : `pointer` · Position : `relative`
- Background : transparent (vide le style par défaut Webflow)
- **Important :** dans States (Style panel, en haut), configure **Current** (état actif du tab) :
  - Background : reste transparent
  - Rien d'autre à changer, le style vient du contenu

**Contenu du Tab Link :**

Vide le contenu par défaut Webflow et construis ceci :

```
CF Step (Tab Link)
├─ CF Step Dot        (Div block, la puce verte à gauche)
├─ CF Step Head       (Div block flex row)
│  ├─ CF Step Num     (Text : "01")
│  └─ CF Step Title   (Heading H3 : "Forecast")
└─ CF Step Body       (Div block, la partie qui se déplie)
   ├─ CF Step Text    (Paragraph : "Build demand plans...")
   └─ CF Compare Grid (Div block grid 2 colonnes)
      ├─ CF Without Box (Div block)
      │  ├─ H5 : "WITHOUT CONSENTIO"
      │  └─ Ul > Li × 2
      └─ CF With Box    (Div block)
         ├─ H5 : "WITH CONSENTIO"
         └─ Ul > Li × 3
```

**Styles à appliquer :**

| Classe | Propriétés |
|---|---|
| `CF Step Dot` | Position absolute · Left `-40px` · Top `29px` · Width/height `8px` · Border-radius `50%` · Background `rgba(245,246,241,0.25)` |
| `CF Step Head` | Display flex row · Align baseline · Gap `16px` |
| `CF Step Num` | Font family `monospace` (ou Manrope) · Font size `40px` · Font weight `800` · Color `rgba(245,246,241,0.4)` |
| `CF Step Title` | Font size `24px` · Font weight `800` · Color `#F5F6F1` · Margin `0` |
| `CF Step Body` | Overflow `hidden` · Max-height `0` · Opacity `0` · Transition `max-height 0.5s ease, opacity 0.4s ease` |
| `CF Step Text` | Max width `28rem` · Color `#B7C4BE` · Font size `16px` |
| `CF Compare Grid` | Display grid · Grid template columns `1fr 1fr` · Gap `12px` · Max width `36rem` · Margin top `16px` |
| `CF Without Box` | Border `1px solid rgba(245,246,241,0.15)` · Border-radius `10px` · Padding `14px` |
| `CF With Box` | Border `1px solid rgba(164,239,40,0.3)` · Background `rgba(164,239,40,0.06)` · Border-radius `10px` · Padding `14px` |
| Li dans `CF Without Box` | Color `#B7C4BE` · List style position à préfixer avec `✕ ` (croix devant) |
| Li dans `CF With Box` | Color `rgba(245,246,241,0.92)` · À préfixer avec `✓ ` (check devant) |

**Astuce pratique pour les listes** : dans Webflow, tu peux taper directement `✕ Scattered historical data` dans un Text block Li, sans lutter avec des pseudo-elements. C'est moche mais ça marche. Sinon, `Style panel > Text > List style > None` puis mets un Span vert `✓` en début de chaque Li.

**État actif (quand le tab est le tab courant) :**

Sélectionne le Tab Link puis dans le sélecteur de State en haut du Style panel, choisis **Current** :

- `CF Step Dot` : Background `#A4EF28`
- `CF Step Num` : Color `#A4EF28`
- `CF Step Body` : Max-height `500px` · Opacity `1` · Margin top `12px`

Webflow appliquera ces styles automatiquement quand le tab est actif.

**Pour les tabs non-actifs :** dans State normal du `CF Step`, mets Opacity `0.45`. Puis dans State **Current**, mets Opacity `1`. Ça donne l'effet estompé/actif.

---

## Étape 7 · Reproduire pour les 4 autres tabs

Le plus rapide :

- Sélectionne `01 Forecast` dans le Navigator
- Clic droit > Copy (Ctrl/Cmd + C)
- Colle 4 fois dans Tabs Menu (Ctrl/Cmd + V)
- Renomme chaque copie dans le Navigator selon les 5 étapes
- Change juste le contenu texte : numéro, titre, description, boxes

**Contenu des 5 étapes :**

| # | Titre | Description | Without | With |
|---|---|---|---|---|
| 01 | Forecast | Build demand plans by category, store group and period. | Scattered historical data · Manual spreadsheet calculations | Centralized sales and historical data · AI-powered demand forecasting · Granular visibility by store, category and period |
| 02 | Collect | Collect prices, volumes and availability in one comparable format. | Offers through email, Excel and messages · Manual consolidation by buyers | Structured supplier requests · Comparable prices, volumes and availability · Real-time visibility for buyers |
| 03 | Allocation | Distribute volumes across suppliers with full decision context. | Decisions based on fragmented information · Manual supplier comparisons | All offers compared in one place · Faster volume allocation · Transparent and traceable decisions |
| 04 | Order execution | Track confirmations, amendments, deliveries and documents. | Orders created manually from allocations · Changes exchanged by email or phone | Allocations converted into orders · Centralized confirmations and amendments · Validated order data synced with ERP |
| 05 | Modular approach | Start with a focused use case, prove value quickly, then expand progressively across categories, workflows and teams. | Big-bang rollouts that take months · Value proven only after full deployment | Focused pilot live in weeks · Measurable impact before extending scope · Progressive rollout across categories and teams |

---

## Étape 8 · Design des Tab Panes (colonne droite, les visuels)

Sélectionne **Tabs Content** puis chaque **Tab Pane** :

- Classe wrapper : `CF Preview`
- Position : `relative` · Min height : `22rem`

Chaque Tab Pane contient un visuel différent. **Pour aller vite, contentons-nous d'un design simple par pane** — tu peux enrichir ensuite.

### Tab Pane 01 · Forecast (le plus soigné)

Dans le Tab Pane `01 Forecast`, ajoute :

```
CF Panel
├─ CF Panel Meta      (Text : "● WEEK 27 · DEMAND PLAN")
└─ CF Panel Card      (Div block blanc, arrondi, ombre)
   ├─ CF Panel Head   (● DEMAND FORECAST · Vine tomato · Cat. I · 5 kg case)
   └─ CF Panel Body
      ├─ Header (W27 + légende Actual/Forecast/Last year)
      ├─ Graphique (Image ou Embed SVG)
      └─ Footer (Product 1 SKU · Sites 18 · Horizon 12 wks)
```

**Le graphique :** deux options.

**Option A rapide** — screenshot du Lovable → Image dans Webflow. C'est du contenu statique mais visuellement fidèle.

**Option B propre** — Embed le SVG. Colle dans un Embed dans `CF Panel Body` le SVG suivant (400 caractères, sous la limite) :

```html
<svg viewBox="0 0 320 132" preserveAspectRatio="none" style="width:100%;height:176px">
<line x1="0" x2="320" y1="33" y2="33" stroke="#E4E6E1"/>
<line x1="0" x2="320" y1="66" y2="66" stroke="#E4E6E1"/>
<line x1="0" x2="320" y1="99" y2="99" stroke="#E4E6E1"/>
<rect x="160" y="0" width="160" height="132" fill="#07372D" opacity="0.03"/>
<path d="M0,104 L29,98 L58,94 L87,85 L116,75 L145,69" fill="none" stroke="#A4EF28" stroke-width="2.5"/>
<path d="M145,69 L175,61 L204,49 L233,45 L262,37 L291,28 L320,20" fill="none" stroke="#A4EF28" stroke-width="2.5" stroke-dasharray="4 3"/>
<path d="M0,108 L29,96 L58,102 L87,81 L116,69 L145,75" fill="none" stroke="#07372D" stroke-width="2.5"/>
<line x1="160" x2="160" y1="0" y2="132" stroke="#07372D" stroke-opacity=".5"/>
</svg>
```

### Tab Panes 02 à 05 · placeholders rapides

Pour ces panes, tu peux :
- Faire un screenshot Lovable équivalent → l'importer en image
- OU faire un design minimal Webflow : Div block blanc avec titre + liste de 5 lignes (Supplier consultation, Volume allocation, Purchase orders, Deployment plan)

**L'important pour l'auto-play**, c'est que chaque Tab Pane ait au moins UN élément visible dedans. Sinon on verra du vide quand ce tab devient actif.

---

## Étape 9 · Le mini-script auto-play (l'unique Embed de toute la section)

En **dernier enfant** de ta Connected Flow Section, ajoute un bloc **Embed** avec ceci :

```html
<script>
(function(){
  var s = document.currentScript.closest('section');
  if(!s) return;
  var tabs = s.querySelectorAll('.w-tab-link');
  if(tabs.length < 2) return;
  var i = 0, t = null, INT = 4500;
  function go(){ if(t) return; t = setInterval(function(){ i = (i+1) % tabs.length; tabs[i].click(); }, INT); }
  function stop(){ if(t){ clearInterval(t); t = null; } }
  tabs.forEach(function(el, idx){ el.addEventListener('click', function(){ i = idx; stop(); go(); }); });
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(es){ es.forEach(function(e){ e.isIntersecting ? go() : stop(); }); }, {threshold: .3}).observe(s);
  } else go();
})();
</script>
```

**Ce que fait ce script (10 lignes) :**
- Trouve la section qui contient l'Embed
- Repère les 5 tabs Webflow (classe native `.w-tab-link`)
- Clique automatiquement sur le tab suivant toutes les **4,5 s**
- **Démarre** quand la section entre dans l'écran (≥ 30 % visible)
- **Pause** quand la section sort de l'écran
- Si l'utilisateur clique manuellement sur un tab, le compteur redémarre

**Pour changer la vitesse** : modifie `INT = 4500` (millisecondes). 3000 = plus rapide, 6000 = plus lent.

---

## Étape 10 · Preview et Publish

- Touche `⇧ + .` (ou clique l'icône œil en haut à droite) → Preview
- Scrolle jusqu'à ta section
- L'étape 01 doit être active, puis 02 après 4,5 s, etc., en boucle
- Publish quand tu es satisfaite

---

## Debug express

| Symptôme | Cause | Fix |
|---|---|---|
| Les tabs ne défilent pas tout seuls | L'Embed script n'est pas dans la section, ou est cassé | Vérifie que l'Embed est bien dans `Connected Flow Section`, dernier enfant. Console F12 : erreur ? |
| Les tabs défilent trop vite/lentement | Durée à ajuster | Change `INT = 4500` dans l'Embed |
| Le contenu du tab ne s'affiche pas quand il devient actif | Les styles Current pas configurés | Sélectionne le Tab Link > State Current > vérifie que `CF Step Body` a Max-height 500px et Opacity 1 |
| L'auto-play tourne mais on ne voit pas de changement visuel | Toutes les tabs ont le même contenu | Vérifie que tu as bien mis un contenu différent dans chaque Tab Pane |
| Le trait vert vertical n'est pas là | `CF Steps Track` mal positionné | Vérifie Position absolute, parent en Position relative |
| Sur mobile, tout est écrasé | Grid pas responsive | Dans CF Grid, breakpoint Tablet : passer Grid en 1 colonne |

---

## Pourquoi cette méthode plutôt que l'Embed jsDelivr

|  | Embed jsDelivr | Webflow natif + mini-script |
|---|---|---|
| Temps de mise en place | 2 min | 45-60 min |
| Édition des textes | Passer par GitHub | Dans le Designer, live |
| Design éditable | Non, tout est en CSS externe | Oui, chaque élément dans le Style panel |
| Poids Embed | 1,2 kB | 500 octets |
| Contrôle client | Nul | Total |
| Fiabilité long terme | Dépend du cache jsDelivr | 100 % Webflow |

Pour Consentio en prod → **méthode Webflow natif** (celle-ci). L'Embed jsDelivr = dépannage rapide ou POC.

---

## Fichiers du repo liés

- `PAS-A-PAS-Home2-Connected-Flow-Webflow-Natif.md` : cette notice (à suivre)
- `snippet-connected-flow-embed.html` : l'Embed alternatif (méthode rapide jsDelivr, déjà livré)
- `NOTICE-Home2-Connected-Flow.md` : la notice de la méthode rapide
- `assets/connected-flow.*` : les assets de la méthode rapide (sert de référence design)
