# Maison Saveur Royale — Dossier de passation (Claude Code)
*Généré le 3 septembre 2026 — Session Claude.ai → Claude Code*

Ce document résume l'ensemble des décisions, données et fichiers produits lors des échanges précédents, pour permettre une reprise sans perte de contexte.

---

## 1. Contexte général

**Entreprise** : Maison Saveur Royale — liquoristerie artisanale, Abidjan, Côte d'Ivoire
**Slogan** : *"Le goût de l'exception"*
**Régime fiscal** : TEE (Taxe sur les Entreprises Exportatrices) — TVA non applicable
**Propriétaire** : Djibret

### Identité légale (à faire figurer sur factures/documents officiels)
- **NCC** : 2506300G
- **RCCM** : CI-ABJ-03-2025-B12-05092 (Tribunal de Commerce d'Abidjan)
- **BP** : 25 BP 823 Abidjan 25
- **Site** : www.saveurroyale.com
- **WhatsApp** : +225 05 44 70 55 30
- **Coordonnées bancaires** : non renseignées à ce jour — zone à laisser vide/éditable sur les documents

---

## 2. Fichier maître : GESTION_COMMERCIALE_V12_corrige.xlsx

**Emplacement livré** : `/mnt/user-data/outputs/GESTION_COMMERCIALE_V12_corrige.xlsx`

Fichier Excel vivant avec **~5 050 formules actives**. Contient 22 feuilles, les plus importantes :

| Feuille | Rôle |
|---|---|
| `VENTES 2026` | Journal de ventes ligne par ligne (date, client, saveurs, remise, montants) — lignes 4 à 249 utilisées par les formules |
| `🎴 FIDÉLITÉ CLIENT` | Tableau calculé automatiquement (SUMIF sur VENTES 2026) : total btl, niveau, bouteilles restantes avant palier suivant |
| `TABLEAU DE BORD 2026` | KPIs globaux : CA, bénéfice, point mort |
| `PARAMÈTRES` | Prix produits, coûts de revient, calcul du point mort |
| `ACHATS 2026` / `ACHATS 2025` | Coûts matières |
| `STOCK RÉEL` | Suivi des stocks — ⚠️ voir alertes ci-dessous |
| `HISTORIQUE 10 ANS` | Historique qualitatif des gros clients depuis 2019 |
| `VENTES 2025` | Historique 2025 (référence, non modifié) |

### Structure des colonnes VENTES 2026 (lignes 4 à 249)
| Col | Contenu |
|---|---|
| A | Date |
| B | Nom client |
| C–L | Quantités par saveur : Passion, Chocolat, Citron, Ananas, Bissap, Crème Bissap, Corossol, Mandarine, Mangoustan, Crème de Cocota |
| M | Total bouteilles (formule SUM) |
| N | Remise % appliquée (saisie manuelle selon niveau fidélité) |
| O | Coffret |
| P | Livraison |
| Q | Montant brut (formule SUMPRODUCT) |
| R | Montant net après remise (formule) |
| S | Canal de vente |
| T | Statut paiement |

**Dernière ligne de vente utilisée à ce jour : ligne 191** (Col M Nanga, 01/09/2026). Il reste de la marge jusqu'à la ligne 249 (limite des formules SUMIF) avant qu'il faille étendre les plages.

### Corrections techniques appliquées à ce fichier (par rapport au V11 original)
1. **369 formules XLOOKUP → INDEX/MATCH** (compatibilité universelle Excel/LibreOffice/Sheets)
2. **Formats de date français** (`jj/mm/aaaa`) corrigés en format standard (`DD/MM/YYYY`)
3. **Point mort recalculé** : l'ancien calcul comparait le CA à 12 mois de charges alors que seuls quelques mois sont écoulés, ET comptait les charges fixes en double (déjà incluses dans ACHATS 2026). Statut réel : **rentable**, pas déficitaire comme l'affichait le fichier original
4. **Libellé "MME AMISSA" → "AMISSA"** (ne correspondait à aucune vente, 9 btl invisibles récupérées)
5. **Ligne fantôme supprimée** : une ligne "2 Mangoustan" pour Yvan avait été ajoutée par erreur lors d'une session précédente puis retirée après vérification croisée avec le fichier original
6. **Clients ajoutés au tableau fidélité** qui n'y figuraient pas : Col M Nanga, Atelier Épice, Affian/Ambulant, Ambulant/MTN Plateau, et d'autres (voir liste complète en section 4)

### Fusions de libellés clients appliquées (même personne, écritures différentes dans le fichier source)
Chaque ligne fusionnée porte un **commentaire Excel** indiquant le libellé d'origine pour traçabilité.

| Libellé fusionné | → Libellé retenu |
|---|---|
| CLM NANGA | COL M NANGA |
| COLONEL VEI | COL VEI SYLVAIN |
| MME ADJI | JOSIANNE ADJI |
| CHRISTELLE SANGARÉ (accent) | CHRISTELLE SANGARE |
| MOBOU | MME MOBOU |
| MR YVAN / AMBULANT/YVAN | YVAN |
| AMI FIFI | FIFI |
| AMBULANT/HUSSEIN | HUSSEIN |

**Laissés volontairement distincts** (vérifié = personnes différentes) :
- AMIE MME MOBOU ≠ MME MOBOU (exclue du total sur demande explicite de Djibret)
- MME GADJI ≠ JOSIANNE ADJI/MME ADJI

**Règle mémorisée** : si un nouveau libellé ambigu apparaît (ex. variante orthographique, "Ambulant/X"), vérifier l'historique avant de fusionner — ne jamais fusionner sans confirmation explicite du propriétaire, sauf cas évident déjà tranché ci-dessus.

### ⚠️ Alertes ouvertes, non résolues
- **Stock négatif** sur Passion (−10) et Bissap (−20) dans `STOCK RÉEL` — cause identifiée : la colonne "Qté produite" est saisie manuellement et semble incomplète. **En attente des vraies quantités produites de la part de Djibret.**
- Les doublons potentiels suivants n'ont **pas** été vérifiés/fusionnés faute de confirmation : à surveiller si des libellés similaires apparaissent (RESI, DIABY, KIKI, etc. — noms courts, possibles clients ambulants distincts, ne pas fusionner sans certitude)

---

## 3. Programme fidélité — règles officielles (Option A, validée par l'équipe)

Remises **valables uniquement sur l'année en cours**, RAZ au 1er janvier.

| Niveau | Seuil | Remise | Avantages |
|---|---|---|---|
| 🥇 Or | dès 12 btl | −5 % | Alertes VIP avant-première, emballage cadeau |
| 🔴 Rubis | dès 24 btl | −8 % | + 1 btl offerte, livraison dès 3 btl, stock prioritaire, emballage cadeau |
| 💎 Diamant | dès 48 btl | −12 % | + 1 btl offerte, livraison systématique, étiquette perso 1×/an, 2 places événement SR |
| 🏆 Platinum | dès 96 btl | −15 % | + 3 btl offertes, livraison systématique, étiquette illimitée, 2 places événement, accès VIP |

**Mention obligatoire sur toute facture avec remise** :
`"Remise [Niveau] −X % (dès Y btl) — valable sur l'année 2026 uniquement."`

**Parrainage** : filleul commandant ≥6 btl → −5 % de bienvenue + 1-2 btl offertes selon niveau du parrain (règle définie, peu utilisée jusqu'ici).

### Terminologie produit à connaître
- **"Crème de Chocolat"** = la saveur **"Chocolat"** (10 000 F). Pas un produit distinct — confusion fréquente de Djibret à interpréter automatiquement.
- **Crème de Cocota** = nouvelle saveur ajoutée en V11 (8 000 F), à ne pas confondre avec "Crème de Bissap" (7 000 F).

### Grille tarifaire complète
| Produit | Prix |
|---|---|
| Chocolat | 10 000 F |
| Corossol | 8 000 F |
| Mangoustan | 8 000 F |
| Crème de Cocota | 8 000 F |
| Passion | 7 000 F |
| Citron | 7 000 F |
| Bissap | 7 000 F |
| Crème de Bissap | 7 000 F |
| Ananas | 7 000 F |
| Mandarine | 7 000 F |

Pas de tarif dégressif par volume — même prix en détail/semi-gros/gros dans le fichier actuel.

---

## 4. État des clients au 3 septembre 2026 (fidélité)

*Source : feuille `🎴 FIDÉLITÉ CLIENT` du fichier livré, triée par volume décroissant. Liste non exhaustive (54 clients suivis au total) — voici les principaux :*

| Client | Btl 2026 | Niveau | Reste avant palier suivant |
|---|---|---|---|
| Col Vei Sylvain | 72 | 💎 Diamant | 24 (vers Platinum) |
| Ines Gouaho | 33 | 🔴 Rubis | 15 |
| Col M Nanga | 37 | 🔴 Rubis | 11 |
| Hussein | 31 | 🔴 Rubis | 17 |
| Mme Bitoumbou | 26 | 🔴 Rubis | 22 |
| Josiane Adji | 25 | 🔴 Rubis | 23 |
| Col Oria | 20 | 🥇 Or | 4 |
| Dr Richarde Yao | 18 | 🥇 Or | 6 |
| Wassé Tago | 16 | 🥇 Or | 8 |
| Christelle Yapi | 15 | 🥇 Or | 9 |
| Yvan | 14 | 🥇 Or | 10 |
| Atelier Épice | 12 | 🥇 Or | 12 |
| Mireille Boni | 11 | 🌟 En progression | **1** (proche Or) |
| Affian/Ambulant | 10 | 🌟 En progression | 2 |
| Ambulant | 9 | 🌟 En progression | 3 |
| Amissa | 9 | 🌟 En progression | 3 |
| Christelle Sangaré | 9 | 🌟 En progression | 3 |
| Mme Mobou | 8 | 🌟 En progression | 4 |
| Fifi | 6 | 🌟 En progression | 6 |
| Mme Zoko | 6 | 🌟 En progression | 6 |
| Ambulant/MTN Plateau | 6 | 🌟 En progression | 6 |

*(clients avec 1-5 btl non détaillés ici — voir fichier Excel pour liste complète)*

### Conventions de vouvoiement (greeting) sur les cartes
- Bitoumbou, Ines, Mobou, Amissa, Christelle Yapi, Zoko, Josiane Adji, Fifi, Mireille Boni → **Reine**
- Col Vei Sylvain, Hussein, Wassé Tago, Yvan → **Roi**
- Col Oria → **Roi et Reine** (couple)
- Col M Nanga → **Colonel Major Nanga** (grade complet, confirmé par Djibret)
- Dr Richarde Yao → **Dr Richarde Yao** (titre médical conservé, pas "Roi")

---

## 5. Documents déjà générés (dans `/mnt/user-data/outputs/`)

### Cartes de fidélité HTML (format mobile, fond noir "Orfèvrerie Noire")
Toutes au format `carte_[nom].html`. Design : Playfair Display + Cormorant Garamond + Inter, couleurs par niveau (Or `#C9A84C`, Rubis `#E11D48`, Diamant `#38BDF8`, Platinum `#E2E8F0`).

**À jour (dernier niveau réel)** : carte_col_vei_sylvain.html (Diamant), carte_hussein.html (Rubis), carte_josiane_adji.html (Rubis), carte_col_m_nanga.html (Rubis), carte_yvan.html (Or), carte_dr_richarde_yao.html (Or), carte_fifi.html (stimulation), carte_mireille_boni.html (stimulation, 1 btl de l'Or).

**Potentiellement obsolètes** (niveau peut avoir changé depuis, à vérifier avant renvoi) : carte_ines_gouaho.html, carte_mme_bitoumbou.html, carte_col_oria.html, carte_wasse_tago_or.html, carte_christelle_yapi.html, carte_christelle_sangare.html, carte_mme_mobou.html, carte_mme_zoko.html.

### Factures/reçus HTML (format compact WhatsApp, fond crème)
Format standard : en-tête noir avec logo mini, tableau produits, bloc totaux, encart note motivationnel, pied de page "Maison Saveur Royale". Fichiers `facture_[nom].html` ou `facture_[nom]_v2.html` pour versions corrigées.

### Facture A4 imprimable
`facture_A4_col_m_nanga.html` / `.pdf` — modèle A4 professionnel avec bloc signature/cachet, généré via wkhtmltopdf. **Attention** : première tentative avait un bug de marges (contenu décalé hors zone imprimable) — corrigé en retirant `margin:0 auto` sur le body et en laissant `width:100%` naturel. Toujours vérifier les marges réelles après génération PDF (mesure via script Python + PIL, voir méthode dans l'historique de session) avant de livrer un PDF destiné à l'impression papier.

### Modèle de facture vierge (référence design validée par Djibret)
Djibret a conçu, via **Claude Design** (outil externe, itératif par prompts), un modèle de facture vierge A4 définitif :
- Fond blanc pur
- Logo couronne "Saveur Royale" agrandi, en-tête sur une ligne
- Slogan "Le goût de l'exception" en italique doré sous le nom
- Bloc "Facturé à" (nom, niveau fidélité, date) / bloc "Émetteur" (nom, ville, **NCC** inclus ici)
- Tableau Désignation/Quantité/Prix unitaire/Montant, 5 lignes vides
- Encart NOTE doré + bloc totaux (Sous-total/Remise/NET À PAYER en noir)
- Mention "TVA non applicable — régime TEE"
- Pied de page 2 colonnes : WhatsApp/RCCM/Conditions de paiement (gauche) — BP/site internet (droite)
- Encadré doré "Coordonnées bancaires" (vide, à renseigner) en toute dernière ligne

**Ce modèle n'a été reçu que sous forme d'image PNG (4x), jamais en fichier source éditable.** Les tentatives de reproduction fidèle en HTML/PDF par Claude (`facture_fifi_A4.pdf`) ont approximé le logo (reconstruction manuelle en SVG, pas le fichier logo réel de Djibret) — **rendu jugé "pas fidèle" par Djibret**, qui préfère revenir au format compact HTML existant pour l'usage courant.

**Action en attente** : Djibret doit fournir le fichier logo réel (PNG/SVG) pour que les futurs documents A4 soient fidèles. En attendant, **le format par défaut pour les factures reste le HTML compact** (voir section suivante), le format A4 n'étant utilisé que sur demande explicite.

### Autres documents
- `affiche_fidelite_sr.png` — affiche récapitulative du programme fidélité (4 niveaux, seuils, avantages), 1000×1400px
- `synthese_gestion_commerciale.md` — première synthèse Markdown du fichier Excel (moins à jour que ce document-ci)

---

## 6. Modèle de facture HTML compact (format par défaut actuel)

C'est le gabarit à utiliser pour toute nouvelle facture/reçu sauf demande explicite de format A4. Structure :

```
- En-tête noir (#0a0908), logo SVG couronne mini + "Saveur Royale" en Cormorant Garamond italique doré
- Tagline "Liquoristerie artisanale"
- Corps fond crème (#fffdf8) :
  - Ligne référence (N° facture / Date), séparateur pointillé
  - Bloc client (nom, niveau + bouteilles cumulées)
  - Tableau produits (Produit / Qté / PU / Total)
  - Bloc totaux (fond #f7f3ea) : Sous-total, Remise (si applicable, texte rouge #b8462d), Net à payer (doré #C9A84C, gros caractères Cormorant Garamond)
  - Si dette antérieure : encart séparé rose clair (#fdf0ec) avec solde
  - Encart note motivationnelle si client en progression (fond #fff8ee, bordure dorée)
  - Mention validité remise si applicable
- Pied de page : "Maison Saveur Royale · Abidjan" + message personnalisé
```

Voir n'importe quel fichier `facture_*.html` récent (ex. `facture_mme_bitoumbou.html`, `facture_col_m_nanga.html`) comme référence exacte de code.

---

## 7. Préférences de travail de Djibret

- **Niveau technique** : connaissances de base en informatique, ne code pas, fait beaucoup de recherche/analyse. **Explications simples et concises**, pas de jargon technique inutile.
- **Vérification systématique avant chiffrage** : toujours consulter l'historique réel du client dans le fichier avant d'appliquer une remise ou de générer une carte — ne jamais improviser un total.
- **Corrections chirurgicales** : Djibret préfère des changements minimaux et ciblés plutôt que des refontes complètes quand un système fonctionne déjà.
- **Validation par étapes** : les décisions tarifaires/structurelles importantes (grille de remises, fusions de clients) sont discutées et confirmées explicitement avant application — ne pas décider seul à sa place.
- **Format WhatsApp roi** : la quasi-totalité des documents sont destinés à être envoyés par WhatsApp — d'où la préférence pour des formats HTML compacts, facilement capturables en image sur mobile, plutôt que des PDF complexes.
- **Dates réelles** : toujours utiliser la date du jour réelle (outil `user_time_v0` ou équivalent) plutôt qu'une date arbitraire dans les documents générés.

---

## 8. Prochaines actions identifiées (non traitées à ce jour)

1. **Attendre le fichier logo réel** de Djibret pour finaliser un modèle A4 fidèle
2. **Vérifier/mettre à jour les cartes potentiellement obsolètes** listées en section 5 (Ines Gouaho, Bitoumbou, Oria, etc.) — leur niveau peut avoir changé depuis leur dernière génération
3. **Résoudre l'alerte stock négatif** (Passion, Bissap) dès que Djibret fournit les vraies quantités produites
4. **Étendre les plages de formules** (`VENTES 2026` lignes 4-249) si le nombre de ventes approche la limite de 249 lignes
5. **Décider du sort des doublons non tranchés** (RESI, DIABY, KIKI, etc. — noms courts possiblement des clients ambulants distincts, ne pas fusionner sans confirmation)
