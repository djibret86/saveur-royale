# Maison Saveur Royale — documents commerciaux

Liquoristerie artisanale, Abidjan, Côte d'Ivoire. Propriétaire : **Djibret**.
Régime **TEE** — TVA non applicable. Ce dépôt contient les modèles validés de
**facture**, de **reçu** et de **carte de fidélité**, et l'outil qui les génère.

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

**Fonctions ajoutées, partagées entre ses appareils (capacité `db` de l'outil) :**
- **Numérotation automatique** : à côté du champ Numéro, le bouton **#** propose
  le prochain numéro pour ce client + ce type de document + cette année, à
  partir de l'historique déjà enregistré. Le « Code client » (à côté du nom,
  auto-suggéré depuis le nom mais toujours modifiable) sert de clé — vérifier
  qu'il correspond au code déjà utilisé pour ce client (ex. toujours VEI pour
  Col Vei Sylvain), sinon la numérotation repart de 01 sous un nouveau code.
- **Historique** : chaque document réellement généré (bouton « Générer ») est
  enregistré (numéro, client, montant, date) et consultable via « Voir
  l'historique » en bas de l'outil — utile pour retrouver ce qui a été émis
  sans fouiller WhatsApp.
- **Type de client** (facture uniquement) : Ambulant / Client régulier /
  Semi-grossiste / Grossiste / Ventes privées / Institutions — reprend les
  délais de paiement de `PARAMÈTRES` §5 du fichier de gestion et met à jour
  automatiquement la mention « Conditions » en pied de page. Affiche aussi le
  plafond de remise de ce type de client à titre indicatif — jamais appliqué
  automatiquement, la remise reste une décision de Djibret.
- **Alerte de nom proche** : quand le nom du client change, l'outil compare
  ses mots significatifs (titres comme Col/Colonel/Mme retirés) à ceux des
  clients déjà dans l'historique. Si un autre code client partage un mot avec
  le nom saisi, un bandeau rouge discret prévient avant de continuer — pensé
  pour les cas déjà vécus (Colonel Vei / Col Vei Sylvain, Mireille Boni / Mme
  Adreille Boni Kong). Une alerte n'empêche rien, elle demande juste de
  vérifier.
- **Suivi des impayés** : le reçu garde son champ Reste à payer ; la facture a
  maintenant un statut Payé / En attente (n'apparaît pas sur le document,
  sert seulement à l'historique). Un document avec un reste dû s'affiche en
  rouge dans l'historique, et la case « Impayés seulement » filtre la liste
  à ceux-là.
- **Recherche dans l'historique** : une barre de recherche filtre par nom de
  client parmi les 50 documents les plus récents.
- **Actions sur une ligne de l'historique** : chaque document a des boutons
  selon son type et son statut —
  - **Réutiliser** (toujours) : recharge le client, les saveurs/lignes, la
    remise dans le formulaire pour créer un NOUVEAU document (numéro et date
    remis à zéro, fidélité recalculée pour aujourd'hui plutôt que copiée).
  - **Marquer payé** (si reste dû) : passe le reste à 0 directement dans
    l'historique, sans regénérer le document.
  - **Générer le reçu** (factures uniquement) : pré-remplit un reçu avec le
    même client et montant, numéro dérivé (SR-2026-VEI-01 → SR-REC-2026-VEI-01,
    même logique que pour Fifi). La facture d'origine n'est marquée payée
    qu'une fois ce reçu réellement généré, pas au moment du clic.

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

**Règles de charte :** jamais d'emoji sur les documents. Mention « TVA non
applicable — régime TEE » sous le total.

**« Saveur Royale » est une marque déposée.** Le symbole **®** accompagne le nom
partout où c'est nécessaire : sur le nom en en-tête et sur la ligne
d'identification du pied de page. Deux occurrences par document suffisent — le
répéter à chaque mention l'affaiblit. Le ® est en or `#C9A84C`, en exposant,
à environ 45 % de la taille du texte porteur.

**Couleurs — deux règles distinctes selon le support :**
- **Documents commerciaux** (facture, reçu) : uniquement l'or, le noir et le
  blanc/crème.
- **Cartes de fidélité** : ce sont des objets de marque, pas des documents.
  Chaque palier a sa couleur — Or `#C9A84C`, Rubis `#E8365F`, Diamant `#38BDF8`,
  Platinum `#DCE3EC` — sur fond noir. C'est un choix validé par Djibret, à ne pas
  « corriger » au nom de la règle ci-dessus.

## Les trois modèles

### Carte de fidélité — format WhatsApp
Troisième onglet de l'outil. Largeur **1080 px**, hauteur libre. Elle se remplit
entièrement à partir du **nom du client** et du **cumul de bouteilles** déjà
saisis en haut du formulaire : le palier, la remise, la progression et les
avantages en découlent. Seul champ propre : « Membre depuis » (date de la
première commande, facultative).

Composition : salutation « Bonjour <nom> », puis la carte elle-même (logotype
teinté au palier + ®, slogan, chiffre romain + nom du palier, mention de rang,
titulaire, bande à trois chiffres **bouteilles / remise / membre depuis**, barre
de progression), puis les avantages en médaillons, puis le pied de page.

**Sous 12 bouteilles**, la carte prend l'habit Or mais dit « EN PROGRESSION /
FUTUR MEMBRE », la remise affiche « — », et le titre des avantages devient
« AVANTAGES À VENIR · CERCLE OR » : ces avantages ne sont pas encore acquis, le
document ne doit pas laisser croire le contraire.

**Avantages par palier** (validés par Djibret) — Or : −5 %, alertes
avant-première, emballage offert. Rubis : −8 %, +1 btl, livraison offerte dès
3 btl, accès prioritaire au stock. Diamant : −12 %, +1 btl, livraison
systématique, 2 places événement. Platinum : −15 %, +2 btl, livraison
systématique, 4 places événement, cuvées en avant-première.

Sa **ligne à copier** ne va pas dans `VENTES 2026` mais dans la colonne B de
`🎴 FIDÉLITÉ CLIENT`, qui est une liste manuelle : un client absent de cette
colonne ne verra jamais sa carte se mettre à jour.

### Reçu — format WhatsApp
Référence : `project/Reçu Fifi WhatsApp.dc.html`. Largeur fixe **1080 px**,
hauteur **libre** (elle suit le contenu — ne jamais la figer, sinon la dernière
ligne du pied de page est coupée). Blocs : en-tête logo + nom + slogan, filet
doré, « REÇU » + N° + date, puis Reçu de / La somme de (montant en lettres) /
Saveur(s) / Mode de paiement / Reste à payer, bloc noir « Montant reçu » en or,
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

**Deux périmètres à ne jamais confondre :**
- **Ancienneté** (« membre depuis » sur la carte) : chercher dans **toutes** les
  feuilles de ventes *et* dans **`HISTORIQUE 10 ANS`**. Cette dernière porte, en
  bas (lignes 50-61), un bloc **« TOP CLIENTS FIDÈLES SUR 10 ANS »** avec une
  colonne **DEPUIS** — une année, saisie en texte. **Elle prime sur les feuilles
  de vente**, qui ne remontent qu'à 2025 : Col Vei Sylvain y est client
  **depuis 2019**, Col Oria **2023**, Richarde Yao **2024**, Mme Mobou **2023**,
  Kiki **2020**, Sandy Candy 2018, Azarah Bio 2019. Sans ce bloc, on daterait
  Col Vei Sylvain de février 2025 — six ans trop tard.
  `FICHES CLIENTS` ne donne que la *dernière* commande, jamais la première.
- **Statut** (palier, remise, carte) : **`VENTES 2026` uniquement**. La remise
  est remise à zéro au 1er janvier.

Dans les deux cas, regrouper d'abord les orthographes du même client — sinon
l'ancienneté est trop récente et le palier trop bas. **Ne jamais fusionner en
chaîne** : si A ressemble à B et B à C, cela ne fait pas de A et C la même
personne (essayé, « Richarde Yao » avait absorbé « Pisam » et « Maman »).

**Fusions confirmées par Djibret** (à cumuler sous le nom unique donné) :
- COLONEL VEI = VEI SYLVAIN = COL VEI SYLVAIN → **Col Vei Sylvain**
- MME ADREILLE BONI KONG (alias **« Boniking »** sur WhatsApp) = MIREILLE BONI
  → **Mireille Boni** (13 btl en 2026)
- CLM NANGA = COL M NANGA → **Col M Nanga** (25 btl → Rubis)
- MME ADJI = Mme Josianne ADJI = JOSIANNE ADJI → **Josiane ADJI** (30 btl → Rubis).
  Orthographe correcte donnée par Djibret : **Josiane avec un seul N**, donc même
  les lignes déjà écrites « JOSIANNE ADJI » sont à corriger.
- YVAN = MR YVAN = M. Yvan = AMBULANT/YVAN → **M. Yvan** (14 btl → Or)
- MOBOU = Mme MOBOU = MME MOBOU → **Mme Mobou** (10 btl). « **Amie** Mme Mobou »
  est **quelqu'un d'autre** — ne pas l'y ajouter, ça lui ferait franchir l'Or à tort.
- CHRISTELLE SANGARÉ = CHRISTELLE SANGARE → **Christelle Sangaré**
- DIABY = **DIBY** (orthographe correcte : Diby)
- AMISSA = AMBULANT AMISSA BOUAKE = **Mme Amissa** (ancienneté : avril 2025)
- CDT WASSE = WASSE TAGO → **Wassé Tago** (ancienneté : mars 2025)
- RESI = **Resi Martel** · AMBULANT MOBIO LAURENCE = **Laurence**
- AMBULANT WILFRIED = **Wilfried** · KIZERBO = **Emmanuel Kizerbo**
- COL ABOUGNAN CADEAU = **Col Abougnan** (« cadeau » qualifie la commande,
  pas une autre personne) · VANGAH FRANCINE BONOUA = **Mme Vangah**
- MME MAIE = **Mme Maie Meli**

**Libellés qui se ressemblent mais désignent des personnes différentes** —
vérifié, ne pas fusionner : « Amie Mme Mobou » ≠ Mme Mobou (la fusionner ferait
passer Mme Mobou à 12 btl et lui donnerait l'Or à tort) · « Ami Fifi » ≠ Fifi ·
« Mme N'Drin » ≠ N'Drin Yannick · « Amie de Jésus » ≠ Jésus · « Col Cissé » ≠
« Elvire Cissé » · « Vente privée Ste Marie » ≠ « Vente privée Cité BCEAO ».

**Encore indécis, à trancher un jour** : Mme Koné / Koné Ephaco (Koné est un nom
très répandu) · Mme Messou Meli / GL Messou · Ambulant Laeticia Bonoua /
Ambulant Laeticia Oulai. Aucun n'a d'effet sur un palier 2026.

**Pièges de nommage repérés dans le fichier :** « AMBULANT », « AMBULANT/<lieu> »,
« XX », « CLIENTE <lieu> » ne sont pas des clients mais des passants anonymes
regroupés sous une même étiquette — ils ne reçoivent pas de carte, même quand le
cumul dépasse un seuil. Et un libellé commençant par « AMI(E) DE X » désigne un
proche de X, pas X.

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
