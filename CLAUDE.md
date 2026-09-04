# Maison Saveur Royale — documents commerciaux

Liquoristerie artisanale, Abidjan, Côte d'Ivoire. Propriétaire : **Djibret**.
Régime **TEE** — TVA non applicable. Ce dépôt contient les modèles validés de
**facture** et de **reçu**, et l'outil qui les génère.

> Contexte complet (fichier Excel de gestion, historique clients, décisions
> passées, alertes ouvertes) : **`PASSATION_CLAUDE_CODE.md`** — à lire avant
> toute question de chiffres ou d'historique client.

## Outil de génération (à utiliser en priorité)

**https://claude.ai/code/artifact/957e255d-0835-4cbf-ace1-15de36004469**

Onglet **Reçu** ou **Facture**, on remplit les infos du client, l'outil applique
la mise en page officielle, calcule les totaux et la remise du palier, et permet
d'enregistrer en PNG (reçu, pour WhatsApp) ou en PDF (facture).
Source : `project/generateur-recus-factures.html`.

Quand Djibret demande une facture ou un reçu, on peut soit le renvoyer vers
l'outil, soit générer le document directement — les règles ci-dessous
s'appliquent dans les deux cas.

## Constantes de marque (ne jamais improviser)

| | |
|---|---|
| Or | `#C9A84C` (bordures, filets, textes d'accent) |
| Noir profond | `#1a1610` (blocs de contraste) / `#0a0908` (titres) |
| Fond | blanc pur `#FFFFFF` |
| Gris texte | `#6f665c` (secondaire), `#8a8178` (labels), `#a9a099` (mentions) |
| Titres / labels | Cinzel (majuscules, letter-spacing large) |
| Corps | Mulish |
| Slogan | « Le goût de l'exception » |
| Logo | `project/uploads/SAVEUR-ROYAL_Liqueur-Logo-sans-fond.png` |

**Coordonnées fixes de l'émetteur** (identiques sur tous les documents) :
Maison Saveur Royale · Abidjan, Côte d'Ivoire · WhatsApp +225 0544 70 55 30 ·
NCC 2506300G · RCCM CI-ABJ-03-2025-B12-05092 (Tribunal de Commerce d'Abidjan) ·
BP 25 BP 823 Abidjan 25 · www.saveurroyale.com · Conditions : Paiement à réception.
**Coordonnées bancaires** : non communiquées à ce jour — zone laissée vide/éditable.

**Règles de charte :** jamais d'emoji sur les documents. Aucune couleur en dehors
de l'or, du noir et du blanc/crème. Mention « TVA non applicable — régime TEE »
sous le total.

## Les deux modèles

### Reçu — format WhatsApp
Référence : `project/Reçu Fifi WhatsApp.dc.html`. Largeur fixe **1080 px**,
hauteur **libre** (elle suit le contenu — ne jamais la figer, sinon la dernière
ligne du pied de page est coupée). Blocs : en-tête logo + nom + slogan, filet
doré, « REÇU » + N° + date, puis Reçu de / La somme de (montant en lettres) /
Motif / Mode de paiement / Reste à payer, bloc noir « Montant reçu » en or,
mention TVA + statut de paiement, encart fidélité doré, pied de page.
N° au format `SR-REC-<année>-<seq>`. Date en toutes lettres (03 septembre 2026).

### Facture — A4 portrait
Référence : `project/Facture Vierge Saveur Royale.dc.html` (vierge) et
`project/Facture Fifi SR-2026-FIF-04.dc.html` (remplie). **Une seule page A4**
(210 × 297 mm, marges 11 mm / 15 mm) : contrainte dure, tout est calibré pour ça.
Tableau de **10 lignes maximum**, en-tête noir, lignes paires en `#faf6ec`,
dernière ligne bordée d'or. Blocs : en-tête, filet doré, Facturé à / Émetteur
(avec NCC), tableau, encart NOTE doré + totaux (Sous-total / Remise /
NET À PAYER en bloc noir et or), mentions, cadre Signature & cachet, pied de
page légal + encadré Coordonnées bancaires. N° au format
`SR-<année>-<initiales client>-<seq>`. Date courte (03.09.2026) en en-tête,
date longue dans « Facturé à ».

> Le dossier de passation indiquait que le format A4 n'était pas fidèle faute de
> logo source. **C'est résolu** : le vrai logo est dans `project/uploads/` et le
> modèle A4 a été validé par Djibret dans Claude Design. Le A4 est donc le format
> de facture de référence ; le reçu WhatsApp reste le format d'envoi courant.

## Programme fidélité (Option A validée)

Remise valable **sur l'année en cours uniquement**, remise à zéro au 1er janvier.

| Niveau | Seuil | Remise |
|---|---|---|
| Or | dès 12 btl | −5 % |
| Rubis | dès 24 btl | −8 % |
| Diamant | dès 48 btl | −12 % |
| Platinum | dès 96 btl | −15 % |

En dessous de 12 bouteilles : « En progression », pas de remise.

**Mention obligatoire sur toute facture comportant une remise :**
`Remise <Niveau> −X % (dès Y btl) — valable sur l'année <année> uniquement.`

Parrainage : filleul commandant ≥ 6 btl → −5 % de bienvenue + 1-2 btl offertes
selon le niveau du parrain.

## Grille tarifaire

| Produit | Prix |
|---|---|
| Chocolat | 10 000 F |
| Corossol · Mangoustan · Crème de Cocota | 8 000 F |
| Passion · Citron · Bissap · Crème de Bissap · Ananas · Mandarine | 7 000 F |

Pas de tarif dégressif. **« Crème de Chocolat » = la saveur « Chocolat »**
(10 000 F), pas un produit distinct — confusion fréquente, à interpréter
automatiquement. Ne pas confondre Crème de Cocota (8 000) et Crème de Bissap
(7 000).

## Fichier de gestion (source des chiffres clients)

Djibret travaille sur un classeur Excel (nom vu jusqu'ici : `GESTION_COMMERCIALE`,
en version V11 ou V12_corrige selon l'upload) **mis à jour sur plusieurs
terminaux** — je ne le vois que quand il est explicitement partagé dans la
session, jamais en direct. Chaque upload est donc un instantané, pas un lien
permanent : redemander le fichier (ou la ligne qui m'intéresse) au besoin.

**Feuilles utiles pour la facturation :**
- `PARAMÈTRES` §1 : grille tarifaire officielle (prix détail / semi-gros dès 6 /
  gros dès 12). **Au dernier import, les trois prix sont identiques pour chaque
  produit** — donc pas de vraie dégressivité au volume aujourd'hui, malgré les
  colonnes prévues pour ça. Si Djibret dit avoir changé un seuil ou un prix
  semi-gros/gros, aller relire cette section plutôt que de supposer que rien n'a
  changé.
- `PARAMÈTRES` §5 : délais de paiement et **plafond de remise par type de
  client** — distinct de la remise fidélité, à ne pas confondre :

  | Type de client | Délai habituel | Remise max |
  |---|---|---|
  | Ambulant / passant | Immédiat (cash) | 0 % |
  | Client régulier fidèle | Immédiat (cash/mobile) | 10 % |
  | Semi-grossiste | Immédiat à 48h | 10–15 % |
  | Grossiste (ex. Vei, Barell) | 24h à 72h | 15–20 % |
  | Ventes privées / événements | Acompte + solde J+7 | 10 % |
  | Institutions / entreprises | 30 jours | 10 % |

  Un client peut être facturé tantôt en « Client régulier », tantôt en
  « Grossiste » selon la commande (vu dans `VENTES 2026` pour Col Vei Sylvain :
  deux canaux différents sur deux lignes) — vérifier le canal de la commande en
  cours plutôt que de supposer un statut fixe par client.
- `🎴 FIDÉLITÉ CLIENT` : total de bouteilles par client, recalculé
  **automatiquement par somme sur le nom exact** dans `VENTES 2026` — donc
  **fragile aux variantes d'orthographe**. Vu dans ce fichier : "COL VEI
  SYLVAIN" (54 + 12 btl) et "COLONEL VEI" (6 btl) — **confirmé par Djibret :
  même personne** — mais seule la première variante est comptée par la feuille
  (66 au lieu de 72 réels). Palier inchangé dans ce cas (Diamant dans les deux
  cas), mais un cas moins favorable pourrait faire louper un palier. **Avant de
  prendre un chiffre de cette feuille pour une remise, vérifier qu'aucune
  variante du nom n'existe ailleurs dans `VENTES 2026`.**
- `FICHES CLIENTS` peut contenir un statut (actif/inactif, exclusion) qui
  contredit des ventes récentes vues dans `VENTES 2026` — dans ce cas, ne pas
  trancher seul : signaler la contradiction à Djibret plutôt que de choisir une
  des deux sources. **Cas déjà tranché :** Col Vei Sylvain est noté
  « inactif — voyage » dans `FICHES CLIENTS` mais continue d'acheter via un
  intermédiaire pendant son voyage — les ventes sous son nom dans `VENTES 2026`
  sont réelles, ce statut ne les invalide pas.

## Manière de travailler avec Djibret

- Ne code pas : **explications simples et concises**, pas de jargon.
- **Ne jamais improviser un total ni une remise** : le nombre de bouteilles
  cumulées vient du fichier de gestion (feuille `🎴 FIDÉLITÉ CLIENT`, en
  vérifiant les variantes de nom — voir section ci-dessus), pas d'une
  estimation. L'outil calcule le palier à partir du chiffre saisi — c'est à
  Djibret de fournir le bon chiffre.
- **Corrections chirurgicales** plutôt que refontes quand un système marche.
- Décisions tarifaires/structurelles : **confirmer avant d'appliquer**.
- **WhatsApp d'abord** : privilégier ce qui s'envoie facilement en image.
- Toujours la **date réelle du jour**, jamais une date arbitraire — pour une
  facture liée à une vente déjà enregistrée, préférer la date de la vente dans
  `VENTES 2026` si elle est connue, plutôt que la date du jour de rédaction.
- Libellés clients : ne jamais fusionner deux orthographes proches sans
  confirmation (voir les fusions déjà tranchées dans le dossier de passation) —
  et ne pas supposer qu'une fusion mentionnée comme "déjà faite" dans le dossier
  de passation est reflétée dans un classeur donné : elle peut ne pas y être
  (constaté sur COLONEL VEI / COL VEI SYLVAIN dans un upload).

## Contexte
Les `.dc.html` de `project/` sont les maquettes d'origine (export Claude Design,
voir `README.md` et `chats/`) : les lire pour toute question de mise en page
plutôt que de redessiner à l'œil.
