# llms.txt du site Consentio 2026 : brouillon à valider par Émilien avant insertion

> Préparé le 24/09 via l'API Webflow en **lecture seule** : rien n'a été modifié ni inséré dans Webflow. Site **Consentio 2026** (`6aaaafd0271107b340148c86`).
> Fichier à insérer : [`llms.txt`](llms.txt) (5,7 Ko, anglais, 100 % ASCII, 25 liens vérifiés). **Insertion uniquement après l'OK d'Émilien.**

## En bref

| Question | Réponse |
|---|---|
| C'est quoi ? | Un fichier texte à la racine du site (`/llms.txt`) qui résume Consentio pour les assistants IA (ChatGPT, Claude, Perplexity, agents). Non visible dans le site, non indexé par Google. |
| Que contient le brouillon ? | L'offre (retailers, suppliers, workflow, modules, ERP, Klarys) + 25 liens : 10 pages conservées du nouveau site, 5 pages légales, 5 cas clients, 5 articles. **Aucun chiffre.** Seuls noms de clients : les 5 cas clients déjà publiés. |
| Où l'insérer ? | Site settings › SEO › LLMs.txt › Upload file › Save changes (2 min). |
| Quand est-il en ligne ? | Seulement après publication sur le **domaine de prod** : Webflow ne le sert pas sur `*.webflow.io`. Uploadé vendredi, il part en ligne avec la bascule de lundi. |
| Temps total | 2 min pour la question à Émilien + 5 min d'insertion après son OK. |

## 1. Question pour Émilien (à ajouter au message groupé de 9 h 30)

À glisser dans le message de l'étape 4 du nettoyage (avec langue, chiffres et témoignages), pas dans un message à part. Joindre le fichier `llms.txt`.

> **llms.txt** : je propose de mettre en ligne lundi, avec le site, un fichier llms.txt : un résumé texte de Consentio destiné aux assistants IA (ChatGPT, Perplexity…), invisible dans le site et non indexé par Google. Il ne contient **aucun chiffre** et ne cite que les **5 cas clients déjà publiés** (Coast Tropical, Lagadec Primeurs, Anecoop France, Mytilimer, Agroponiente). Brouillon joint.
> 1. OK pour le publier lundi ?
> 2. OK pour citer ces 5 clients, ou je retire la liste ?
>
> Sans retour de ta part, je ne le mets pas en ligne.

## 2. Insérer le fichier après l'OK (5 min)

1. **Domaine** : le fichier utilise `https://www.consentio.co`. Si Émilien retient `consentio.co` sans www, remplacer les 25 occurrences (Rechercher / Remplacer dans un éditeur, ou dire « domaine = consentio.co » dans une session Claude).
2. **Si « pas de noms de clients »** : supprimer la section `## Customer stories` (6 lignes). Le lien vers la page Customer Stories reste dans `## Main pages`.
3. **Upload** : Webflow › Site settings › SEO › **LLMs.txt** › Upload file › choisir `llms.txt` (UTF-8, moins de 100 Ko) › **Save changes**.
4. **Lundi, après la publication sur le domaine de prod** : ouvrir `https://www.consentio.co/llms.txt` en navigation privée. Attendu : le texte brut s'affiche (ni 404, ni page HTML).

## 3. Pièges

- **Nom exact** : `llms.txt`, en minuscules et avec un s. « LLM.txt » ne sera jamais lu par les outils.
- **Aucun test possible sur le staging** : Webflow ne publie pas le fichier sur `*.webflow.io`. Seul contrôle possible avant lundi : relire le fichier.
- **Une IA peut citer le fichier mot pour mot** : même règle que les metas de la PR #13, aucun chiffre tant que la fiche chiffres n'est pas validée (tableau § 5).
- **Exclus volontairement du fichier** : `/old/`, les 9 pages à trancher, les modèles Product modules et Retailers Logo (noindex), les cas clients Manor (chiffres de démo), Bell Food Group et Ultra Marine (vides), les versions FR et ES (non traduites), la liste des ERP (slider en cours de modification).
- **About Us affiche encore 4 « [TO BE CONFIRMED…] »** : à corriger avant lundi, le fichier renvoie vers cette page.
- **robots.txt** : llms.txt ne sert à rien si les robots IA sont bloqués. Webflow ne bloque rien par défaut ; si un proxy type Cloudflare est placé devant le domaine, vérifier son option de blocage des robots IA. Ne pas bloquer les robots de recherche (OAI-SearchBot, Claude-SearchBot, PerplexityBot) : ce sont eux qui alimentent les citations dans les réponses.
- **Fichier statique** : il ne se met pas à jour tout seul. À ré-uploader à chaque nouvelle page ou changement d'offre. Fin de mission lundi : faire désigner un propriétaire du fichier par Émilien.

## 4. Attentes réalistes

- **Impact direct faible** : sur 500 millions de visites de robots IA suivies pendant 90 jours, seules 408 visaient `/llms.txt` ; Google a déclaré ne pas l'utiliser ; aucun grand fournisseur d'IA ne s'est engagé à le lire.
- **Coût quasi nul** (≈ 10 min) et aucun risque si le contenu est validé : c'est un geste « sans regret », surtout utile aux agents et outils IA qui lisent le fichier à la demande.
- **Les vrais leviers de visibilité dans les IA** : le contenu HTML des pages, les metas (PR #13), le JSON-LD Organization, les redirections 301 et le fait de ne pas bloquer les robots de recherche IA.

## 5. Plus tard (P2)

**Bloc « Key facts » chiffré**, à ajouter quand Émilien aura validé **une seule** fiche chiffres. Valeurs qui coexistent aujourd'hui :

| Donnée | Valeurs en circulation | Où |
|---|---|---|
| Fournisseurs | 1 000+ · près de 3 000 · 3 200+ | meta Suppliers · About Us · Home |
| Effectif | 30 · 55 personnes | brief de mission · About Us |
| Pays | France, Spain, Switzerland, Benelux, United States · France, Espagne, UE, Pays-Bas | Home · brief de mission |
| Utilisateurs | 7 000+ | brief de mission |
| Producteurs numérisés | 1 000+ | brief de mission |
| Expertise | 10+ years | Home |

- **FR et ES** : une fois traduites, ajouter les liens `/fr-fr/…` et `/es-es/…` dans le même fichier (un seul llms.txt par domaine).
- **llms-full.txt** (contenu intégral des pages) : inutile pour 15 pages.

## Sources

- [Webflow Updates : Upload an llms.txt file for your site](https://webflow.com/updates/introducing-llmstxt)
- [Webflow Help Center : Upload an llms.txt file to your site](https://help.webflow.com/hc/en-us/articles/43240104183315-Upload-an-llms-txt-file-to-your-site)
- [llms.txt: What the 2026 Data Actually Shows](https://geojacker.com/llms-txt)
- [LLMs.txt in 2026: The Full Guide](https://limy.ai/blog/llms-txt-in-2026-the-full-guide)
- [Robots.txt for AI Crawlers: GPTBot, ClaudeBot (2026)](https://witscode.com/blogs/robots-txt-strategy-2026-managing-ai-crawlers)
