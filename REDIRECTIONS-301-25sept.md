# Redirections 301 : contrôle croisé et 5 ajouts

> Préparé le 25/09 en **lecture seule** via l'API Webflow, à partir des champs « Legacy article URL » (Resources) et « Original article URL » (Customer Stories). Rien n'a été modifié.
> **Fichiers de référence** : ceux du nettoyage CMS (branche `claude/peaceful-curie-z086t0`, dossier `nettoyage-cms/`). Le CSV unique des 301 est assemblé **mercredi 30/09**, pour une mise en ligne **jeudi 1ᵉʳ/10**.

---

## ⚡ En bref

| Question | Réponse |
|---|---|
| Correction de mon analyse du 24/09 | Les pages du dossier `/old/` **sont déjà dans `/old/` sur le site actuel** : aucune n'a bougé depuis la copie du 16/09. Les laisser telles quelles ne crée **aucun 404**. |
| Contrôle croisé | **94 de mes 99 règles** sont déjà dans `import-webflow-301-cms.csv` et `import-webflow-301-klarys.csv`, **avec les mêmes cibles** ✅ |
| Ce que j'ajoute | **5 règles** : `REDIRECTIONS-301-ajouts.csv` (2 à vérifier dans l'audit de la prod, 3 pour klarys.io) |
| Risque spécifique | **fr.consentio.co** est très probablement la version française servie par **Weglot** (§ 3) |

---

## 1. Deux URL à vérifier lors de l'audit de la prod (lundi)

| Ancienne URL | Nouvelle URL | Pourquoi |
|---|---|---|
| `/solutions/for-supermarkets` | `/retailers` | copie « OLD - For Supermarkets » créée le 23/09 dans `/solutions/` |
| `/solutions/for-producers` | `/suppliers` | copie « OLD - For Producers » créée le 23/09 dans `/solutions/` |

- Ces copies laissent penser que les 2 pages de solution étaient dans `/solutions/` avant la refonte. **Ni l'une ni l'autre n'est dans les fichiers actuels.**
- Si l'audit de la prod (session de lundi 8 h 30, section 5 du récap d'estimation) montre que ces URL existent : les ajouter au CSV unique. Sinon : les ignorer.

---

## 2. Trois règles à ajouter au fichier klarys.io

| Ancienne URL (klarys.io) | Nouvelle URL |
|---|---|
| `/en` | `https://consentio.co/klarys-joins-consentio` |
| `/` | `https://consentio.co/klarys-joins-consentio` |
| `/(.*)` | `https://consentio.co/klarys-joins-consentio` |

- Le fichier klarys actuel couvre les **21 articles et les 2 cas clients**, mais pas l'accueil ni les autres pages.
- Ordre : après les 23 règles existantes, **la règle générique tout en bas**. À affiner avec l'audit de klarys.io.
- Domaine : `consentio.co` comme dans le fichier existant, à ajuster si Emilien choisit `www.consentio.co`.

---

## 3. fr.consentio.co : le point à trancher

- Exemple : `fr.consentio.co/blog/technologie-tracabilite-capteurs` est la traduction de `/blog/technology-traceability-sensors`. C'est le fonctionnement d'un **sous-domaine Weglot**.
- ⚠️ À vérifier dans le compte Weglot : tant qu'il est actif, fr.consentio.co peut **traduire automatiquement le nouveau site**, sans relecture, en consommant le quota de mots.
- Décision pour Emilien : garder Weglot en attendant `/fr-fr/`, ou le couper le jour J et rediriger fr.consentio.co. Les URL françaises des articles sont **déjà dans le fichier CMS**.

---

## 4. Ce qui me bloque encore

- Le réseau de ma session refuse `www.consentio.co`, `fr.consentio.co` et `klarys.io`. Pour que je lise les sitemaps et teste les 301 : menu de l'environnement cloud dans la barre de titre de la session › **Edit** › **Network access** › ajouter ces 3 domaines.
- Pas indispensable si l'audit de lundi se fait avec l'accès Webflow à la prod (reconnexion de 8 h 30).
