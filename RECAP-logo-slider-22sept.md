# Récap modifications Logo Slider — 22 septembre 2026

Modifications appliquées via le MCP Webflow sur le site `consentio-v2-sept2026` (short name `test-8af0bb`, ID `6aa9284e2c3f1f5923e96572`).

**⚠️ À savoir** : ces modifications sont stockées dans Webflow (base cloud + Custom Code des pages). Ce fichier documente ce qui a été fait pour traçabilité et transmission.

---

## 1. Composant « Logo Slider » — modification définition

**Composant ID** : `1d9066dc-8701-fe22-ee37-7ce5cd346ac9`

- **Supprimé** : prop `w-prop--logo11--Image` (était : Generix)
- **Supprimé** : prop `w-prop--logo12--Image` (était : Cegid)
- **Résultat** : le composant passe de 12 à **10 slots logo** (Logo 1 à Logo 10)

**Impact** : la suppression s'applique à toutes les instances du composant sur toutes les pages (Home 2, Retailers, Suppliers).

---

## 2. Page Home 2 (`/home-2`) — mise à jour instance

**Page ID** : `6aaa5adbf961c9c0652a8909`
**Instance Logo Slider ID** : `9f6174be-6d8f-c435-7c7b-5f884bf7cdab`

- **Logo 7** : Oracle → **Infor** (asset ID `6aad1877c3e878bc71ac0448`, fichier `inforerp-removebg-preview.png`)

**Configuration finale des 10 logos** :

| # | Marque | Asset ID |
|---|---|---|
| 1 | SAP | `6aad1879dd2c54d91a383598` |
| 2 | SIGEM | `6aad18796a1ec90d687e775e` |
| 3 | Stepcom | `6aad1879b8099f54ff5164ed` |
| 4 | SAGE | `6aad187866b3f46613d291fe` |
| 5 | Produce Pro | `6aad18781651b453cb478995` |
| 6 | ORISHA | `6aad1878b5b27e709a19d245` |
| 7 | **Infor** | `6aad1877c3e878bc71ac0448` |
| 8 | Microsoft | `6aad18783ffe409454c689a0` |
| 9 | Microsoft Dynamics | `6aad18781a9e8ea52bd3c0e8` |
| 10 | COPILOTE | `6aad1878c3e878bc71ac0497` |

---

## 3. Page Suppliers (`/suppliers`) — nouveau slider inséré

**Page ID** : `6aabe6d6c42b0be0e237f900`

- **Supprimé** : ancien marquee-mask dans le slot `s9-slot` (element ID `af457147-c50b-fc15-7193-f9debe54aaea`)
- **Inséré** : composant Logo Slider dans `s9-slot` (nouveau element ID `ac581569-f678-4961-21f7-561414738391`)
- **Configuré** : les 10 mêmes logos que Home 2 (voir tableau ci-dessus)

---

## 4. Page Retailers (`/retailers`) — slider CMS via Swiper.js

**Page ID** : `6aabe6b7730eb6bd2010a764`

Sur Retailers, un Collection List CMS (20 logos retailers dans la collection `6ab14e3083943882f56b6bc3`) est transformé en slider avec flèches via **Swiper.js** + custom code.

### 4.1. Renommage Navigator
Section 2 (element ID `38484a4d-b04d-8732-2be3-c8ad3a91b798`) renommée dans le Navigator Designer :
> **« Logos Slider Retailers (CMS + Custom Code Swiper) »**

Objectif : qu'un futur mainteneur voie immédiatement le rôle de la section.

### 4.2. Custom Code injecté

**Emplacement** : Page Settings > Custom Code > **Inside `<head>` tag**

```html
<!-- Retailers Logos Slider (Section 2) — Swiper.js with arrows -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<style>
  .section-2 { padding: 56px 56px; background: #fff; position: relative; }
  .section-2 .swiper { overflow: hidden; }
  .section-2 .swiper-slide {
    display: flex; align-items: center; justify-content: center;
    height: 80px;
  }
  .section-2 .swiper-slide img {
    max-width: 140px; max-height: 60px; object-fit: contain;
    filter: grayscale(1); opacity: 0.7;
    transition: filter .3s, opacity .3s;
  }
  .section-2 .swiper-slide img:hover { filter: none; opacity: 1; }
  .section-2 .swiper-button-prev,
  .section-2 .swiper-button-next {
    color: #1a1a1a; width: 28px; height: 28px;
    top: 50%; transform: translateY(-50%); margin-top: 0;
  }
  .section-2 .swiper-button-prev { left: 12px; }
  .section-2 .swiper-button-next { right: 12px; }
  .section-2 .swiper-button-prev::after,
  .section-2 .swiper-button-next::after { font-size: 18px; font-weight: 700; }
</style>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    var section = document.querySelector('.section-2');
    if (!section) return;
    var list = section.querySelector('.w-dyn-list');
    var items = section.querySelector('.w-dyn-items');
    var itemNodes = section.querySelectorAll('.w-dyn-item');
    if (!list || !items || !itemNodes.length) return;
    list.classList.add('swiper');
    items.classList.add('swiper-wrapper');
    itemNodes.forEach(function (n) { n.classList.add('swiper-slide'); });
    var prev = document.createElement('div'); prev.className = 'swiper-button-prev';
    var next = document.createElement('div'); next.className = 'swiper-button-next';
    list.appendChild(prev); list.appendChild(next);
    new Swiper(list, {
      slidesPerView: 4,
      spaceBetween: 40,
      loop: true,
      speed: 800,
      autoplay: { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true },
      navigation: { nextEl: next, prevEl: prev },
      breakpoints: {
        320:  { slidesPerView: 2, spaceBetween: 20 },
        768:  { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 5, spaceBetween: 40 }
      }
    });
  });
</script>
```

### 4.3. Fonctionnement

1. Webflow rend la Collection List classique (source CMS des logos retailers)
2. Au chargement de la page, le script JS :
   - Repère la Collection List dans `.section-2`
   - Ajoute les classes Swiper nécessaires (`swiper`, `swiper-wrapper`, `swiper-slide`)
   - Injecte les 2 boutons flèches
   - Initialise Swiper avec autoplay + navigation
3. Le CSS style les slides (grayscale par défaut, couleur au hover) et les flèches

### 4.4. Paramètres ajustables

| Paramètre | Ligne dans le code | Effet |
|---|---|---|
| Vitesse transition | `speed: 800` | Durée glissement entre slides (ms) |
| Pause entre slides | `autoplay: { delay: 3500 }` | Temps d'affichage de chaque slide (ms) |
| Nb logos visibles | `slidesPerView: 4` + `breakpoints` | 2/3/4/5 selon device |
| Espace entre logos | `spaceBetween: 40` | Pixels |
| Couleur flèches | `color: #1a1a1a` | Hex code |
| Taille flèches | `width: 28px; height: 28px;` | Pixels |
| Style logos | `filter: grayscale(1); opacity: 0.7;` | Effet visuel par défaut |

---

## 5. Notes pour le prochain mainteneur

- **Publier la page** pour voir le rendu live — le custom code ne s'exécute pas dans le Designer
- Ajouter/supprimer un retailer dans la collection CMS → il apparaît/disparaît automatiquement dans le slider Retailers (avantage CMS)
- Sur Home 2 et Suppliers, les logos sont statiques (props image du composant) — modifiable via panneau Properties dans le Designer
- Si besoin d'ajouter plus de 10 logos sur Home 2/Suppliers, il faudra créer de nouveaux slots dans la définition du composant Logo Slider
- Le composant Logo Slider utilise Swiper.js en interne (autoplay, interval, perView props)

## 6. IDs de référence

| Élément | ID |
|---|---|
| Site | `6aa9284e2c3f1f5923e96572` |
| Composant Logo Slider | `1d9066dc-8701-fe22-ee37-7ce5cd346ac9` |
| Collection Retailers Logo | `6ab14e3083943882f56b6bc3` |
| Page Home 2 | `6aaa5adbf961c9c0652a8909` |
| Page Retailers | `6aabe6b7730eb6bd2010a764` |
| Page Suppliers | `6aabe6d6c42b0be0e237f900` |
