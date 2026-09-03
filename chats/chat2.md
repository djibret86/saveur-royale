# Modifications facture Saveur Royale

_Started 2026-09-03 19:28 UTC_

---

## User

Continuing from "Facture Maison Saveur Royale".

## Assistant

We built a printable A4 invoice for Maison Saveur Royale, an artisanal liquoristerie in Abidjan, following their established design system (cream/white background, gold #C9A84C accents, deep black #1a1610 contrast blocks, serif titles + clean sans-serif body).

Decisions made: used the elegant/sober premium-artisan aesthetic rather than a generic invoice template; header with "Saveur" in gold and "Royale" in black/grey plus tagline; two-column info block (client loyalty info left with a black badge showing tier color like "MEMBRE RUBIS", issuer info right); product table with black header and alternating light-grey rows; right-aligned totals block including subtotal, a brown-red loyalty discount line, day's net total, prior debt if any, and a final total highlighted in a black box with gold text; a pale-cream loyalty benefits box with bottles-remaining-to-next-tier info; centered italic legal mention about the discount being valid only for the current year; footer with company contact left and signature/stamp area right. Ensured margins ≥12mm on all sides to keep everything on one printable A4 page.

Current state: the invoice document has been created (Facture Maison Saveur Royale.dc.html) with placeholder values for client name, membership date, bottle counts, products, and amounts — it's functional and styled per spec but not yet filled with real client/order data.

Next steps: replace placeholder content with actual client and order details as needed, verify print/PDF output fits one A4 page with correct margins, and confirm the logo/brand assets (from the attached JPG) are properly integrated if not already.

Files involved: Facture Maison Saveur Royale.dc.html, doc-page.js, support.js, plus reference materials — Design Components, Saveur Royale Design System, facture_A4_col_m_nanga.pdf, SAVEUR-ROYAL_Liqueur-Logo-avec-fond.jpg.

## User

Crée un modèle de facture A4 unique, éditable, avec une mise en page professionnelle pour la marque "Maison Saveur Royale" (liquoristerie artisanale, Abidjan, Côte d'Ivoire).

IDENTITÉ VISUELLE
- Couleur principale : or/doré #C9A84C
- Fond : blanc ou crème très clair (#fffdf8)
- Texte : noir profond (#1a1610 / #0a0908)
- Typographies : une serif élégante (type Playfair Display ou Cormorant Garamond) pour les titres et le nom de marque, une sans-serif sobre (type Inter) pour le corps de texte
- Logo : emblème en forme de couronne dorée (à intégrer en haut de page, à gauche ou centré)
- Slogan de la marque à faire apparaître clairement sous le nom : "Le goût de l'exception"

STRUCTURE DU DOCUMENT (page blanche à remplir manuellement ou numériquement)
1. En-tête : logo + nom "Maison Saveur Royale" + slogan "Le goût de l'exception"
2. Bloc "Facturé à" : zone vide pour nom du client, niveau de fidélité, date
3. Zone "Émetteur" : nom entreprise, ville
4. Tableau vide de 10 lignes avec colonnes : Désignation / Quantité / Prix unitaire / Montant
5. Zone totaux vide : Sous-total / Remise / Net à payer
6. Zone de note libre (encart discret, bordure fine dorée)
7. Pied de page fixe avec :
   - Maison Saveur Royale · Abidjan, Côte d'Ivoire
   - Contact WhatsApp
   - Coordonnées bancaires : [zone à renseigner ultérieurement]
8. Zone signature / cachet en bas à droite

STYLE
- Épuré, haut de gamme, beaucoup de blanc/espace
- Une seule ligne dorée fine sous l'en-tête pour séparer les sections
- Aucune couleur autre que l'or, le noir et le blanc/crème
- Format A4 portrait, une seule page, imprimable avec marges de sécurité (15mm minimum de chaque côté)

## Assistant

_[tool: read_file]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

Modèle vierge créé : `Facture Vierge Saveur Royale.dc.html` — A4 portrait, marges 15–16mm, logo + slogan, filet doré unique sous l'en-tête, blocs Facturé à / Émetteur avec lignes à remplir, tableau 10 lignes, totaux, encart note bordé d'or, pied de page (WhatsApp + coordonnées bancaires à renseigner) et zone signature. L'ancienne facture remplie est conservée.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

En-tête du tableau sur une seule ligne (colonne « Prix unitaire » élargie) et lignes du tableau portées à 38px pour absorber le vide au-dessus du pied de page.

## User

Ajuste le modèle de facture précédent avec les modifications suivantes :

1. FOND : remplace le fond crème par un fond blanc pur (#FFFFFF)

2. LOGO : agrandis le logo (couronne + "Saveur Royale") d'environ 40 à 50 %, 
   pour qu'il soit plus visible et impose davantage sa présence en en-tête, 
   tout en gardant les proportions et le style actuel

3. Dans le bloc "ÉMETTEUR", sous l'adresse actuelle, ajoute ces informations 
   (déjà remplies, pas de zone vide) :
   - NCC : 2506300G
   - RCCM : CI-ABJ-03-2025-B12-05092 (Tribunal de Commerce d'Abidjan)
   - BP : 25 BP 823 Abidjan 25
   - Site internet : www.saveurroyale.com

4. Ajoute une mention discrète sous le bloc totaux (sous "NET À PAYER"), 
   en petit texte gris clair : "TVA non applicable — régime TEE"

5. Ajoute, également en petit texte discret, une ligne "Conditions : Paiement à réception"
   — à placer près du pied de page, du même style que "WhatsApp :" et "Coordonnées bancaires :"

6. Dans le pied de page, élargis la zone à côté de "Coordonnées bancaires :" 
   pour qu'elle soit bien visible et clairement identifiable comme un futur 
   numéro de compte bancaire à renseigner (laisser vide pour l'instant)

Garde tout le reste du design identique (couleurs, typographies, structure du tableau, encart NOTE, bloc NET À PAYER).

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Fond blanc pur, logo agrandi (~45 %) avec le nom et le slogan mis à l'échelle, mentions légales ajoutées sous l'Émetteur, « TVA non applicable — régime TEE » sous le net à payer, ligne « Conditions : Paiement à réception » au pied de page et zone bancaire élargie. Lignes du tableau à 34px pour rester sur une seule page A4.

## User

Ajuste le modèle de facture précédent avec les modifications suivantes :

1. LOGO : agrandis-le encore, environ 60 à 70 % plus grand que sa taille 
   actuelle — il doit avoir une vraie présence visuelle en en-tête, 
   comparable en poids visuel au texte "MAISON SAVEUR ROYALE" à côté de lui

2. Dans le pied de page, mets en valeur la ligne "Coordonnées bancaires :" 
   en l'entourant d'un léger encadré doré (même style que l'encart NOTE), 
   pour que cette information soit facilement repérable une fois complétée

3. Augmente légèrement l'espacement vertical entre les lignes NCC / RCCM / BP / 
   site internet dans le bloc ÉMETTEUR, pour une meilleure lisibilité

Garde tout le reste du design identique (couleurs, typographies, structure du tableau, encart NOTE, bloc NET À PAYER, mentions légales déjà en place).

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Logo à 176px (+63 %), coordonnées bancaires dans un encadré doré au pied de page, interlignes des mentions légales aérés. Lignes du tableau ramenées à 30px pour tenir sur une seule page A4.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Débordement corrigé : lignes du tableau à 26px, cale flexible sans hauteur minimale, logo à 160px (toujours ~+48 % vs l'étape précédente). Tout tient sur une seule page A4.

## User

maison sur une seule ligne et ''saveur royale'' sur une autre,
augmente de 70% la taille du logo

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Logo à 272px (+70 %) et « MAISON » / « SAVEUR ROYALE » sur deux lignes. Pour compenser la hauteur, j'ai resserré les lignes du tableau (22px), les marges verticales (11mm) et les espaces entre blocs afin de rester sur une seule page A4.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

« MAISON » / « SAVEUR ROYALE » tiennent maintenant sur deux lignes (nowrap, corps 23px, logo à 248px).

## User

Ajuste le modèle de facture précédent avec les corrections suivantes :

1. Le texte "MAISON SAVEUR ROYALE" se casse actuellement sur 3 lignes à cause 
   de l'agrandissement du logo. Réduis sa taille pour qu'il tienne sur une 
   seule ligne, sur la même largeur que le logo à côté de lui. Garde le 
   slogan "LE GOÛT DE L'EXCEPTION" juste en dessous, à la même taille qu'avant

2. Réduis l'espace vertical entre le bloc logo/nom (en-tête) et la ligne 
   dorée horizontale qui sépare l'en-tête du bloc "FACTURÉ À" — il y a 
   actuellement un vide disproportionné suite à l'agrandissement du logo

Garde tout le reste identique : taille du logo, encart doré "Coordonnées bancaires", bloc NCC/RCCM/BP/site internet avec son espacement actuel, structure du tableau, encart NOTE, bloc NET À PAYER.

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

« MAISON SAVEUR ROYALE » sur une seule ligne (16px, nowrap), largeur comparable au logo, slogan inchangé dessous. Le blanc excédentaire du logo est rogné verticalement (−58px) et la ligne dorée remonte, sans changer la taille apparente du logo.

## User

Ajuste le modèle de facture précédent avec cette seule correction :

Le bandeau "LIQUEUR" en bas du logo déborde légèrement vers le bas, trop 
proche de la ligne dorée horizontale qui sépare l'en-tête du bloc "FACTURÉ À". 
Ajoute un peu d'espace vertical entre le bas du logo (bandeau "LIQUEUR" inclus) 
et cette ligne dorée, pour que rien ne soit accolé ou risque de sembler coupé 
à l'impression.

Garde tout le reste identique.

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Le rognage du logo est décalé vers le haut (le bandeau « LIQUEUR » est entièrement visible) et la ligne dorée descend de 10px : il y a maintenant un vrai blanc entre les deux.

## User

en bas de page, mettre le numéro whatsapp (+225 0544 70 55 30), la boîte postale, le site internet, le NCC et le RCCM. la signature et le cachet doivent se trouver juste après ''TVA non applicable''

## Assistant

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Pied de page regroupé sur deux colonnes : WhatsApp +225 0544 70 55 30, BP, site, NCC, RCCM et conditions de paiement, plus l'encart doré des coordonnées bancaires. La zone signature & cachet est passée juste sous « TVA non applicable — régime TEE », à droite. Les mentions légales ne sont plus dupliquées dans le bloc Émetteur.

## User

agrandis la place accordée à la signature et cachet. Réduis le bas de page

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Zone signature & cachet portée de 56 à 104px ; pied de page resserré (corps 9px, interlignes et paddings réduits).

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Débordement corrigé : cadre signature à 90px et marge réduite — tout revient dans la page A4 avec la marge de sécurité.

## User

Ajuste le modèle de facture précédent avec cette seule correction :

Le bandeau "LIQUEUR" en bas du logo déborde légèrement vers le bas, trop 
proche de la ligne dorée horizontale qui sépare l'en-tête du bloc "FACTURÉ À". 
Ajoute un peu d'espace vertical entre le bas du logo (bandeau "LIQUEUR" inclus) 
et cette ligne dorée, pour que rien ne soit accolé ou risque de sembler coupé 
à l'impression.

Garde tout le reste identique.

## User

Ajuste le modèle de facture précédent avec cette seule correction :

Le bandeau "LIQUEUR" en bas du logo déborde légèrement vers le bas, trop 
proche de la ligne dorée horizontale qui sépare l'en-tête du bloc "FACTURÉ À". 
Ajoute un peu d'espace vertical entre le bas du logo (bandeau "LIQUEUR" inclus) 
et cette ligne dorée, pour que rien ne soit accolé ou risque de sembler coupé 
à l'impression.

Garde tout le reste identique.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Vide sous le logo ramené à ~35px : le blanc transparent du PNG est rogné (cadre 152px) et la ligne dorée remonte, bandeau « LIQUEUR » entièrement visible.

## User

Ajuste le modèle de facture précédent avec cette seule modification :

Déplace la ligne "NCC : 2506300G" du pied de page vers le bloc "ÉMETTEUR", 
juste sous "Abidjan, Côte d'Ivoire" — dans le même style que le reste du 
bloc émetteur (taille et couleur de texte discrète, cohérente avec 
"Abidjan, Côte d'Ivoire").

Toutes les autres informations administratives, fiscales et géographiques 
(RCCM, BP, WhatsApp, site internet, Conditions de paiement) restent en 
pied de page, à leur emplacement actuel.

Garde tout le reste identique : logo, espacements, structure du tableau, 
encart NOTE, bloc NET À PAYER, bloc signature, encadré coordonnées bancaires.

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

« NCC : 2506300G » est passé sous « Abidjan, Côte d'Ivoire » dans le bloc Émetteur, au même style ; le pied de page conserve RCCM, BP, WhatsApp, site et conditions.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Chevauchement corrigé : le groupe logo + nom occupe désormais toute la largeur disponible (flex) et le nom passe à 15px, à l'écart du bloc N° / Date.

## User

Voici le prompt à copier-coller dans Claude Design pour générer la facture remplie de Fifi, en reprenant le modèle validé :

```
Utilise le modèle de facture validé précédemment (logo Saveur Royale, 
fond blanc, en-tête avec slogan "Le goût de l'exception", bloc NCC dans 
Émetteur, mentions légales en pied de page, encadré Coordonnées bancaires) 
et remplis-le avec les informations suivantes :

FACTURE N° : SR-2026-FIF-04
DATE : 03 septembre 2026

FACTURÉ À
Nom du client : Fifi
Niveau de fidélité : 🌟 En progression — 6 bouteilles cumulées en 2026
Date : 03 septembre 2026

TABLEAU (désignation / quantité / prix unitaire / montant)
Passion | 1 | 7 000 F | 7 000 F

TOTAUX
Sous-total : 7 000 F
Remise : —
NET À PAYER : 7 000 FCFA

NOTE (encart doré)
💡 Plus que 6 bouteilles pour rejoindre le cercle Or et bénéficier de la 
remise permanente de 5 % sur tous vos achats.

Mention TVA sous le total : TVA non applicable — régime TEE

Garde toutes les autres informations fixes du modèle (logo, coordonnées 
de l'émetteur, NCC, RCCM, BP, WhatsApp, site internet, conditions de 
paiement, encadré coordonnées bancaires) inchangées.
```

Une fois généré, tu peux me le renvoyer en PNG si tu veux que je l'archive comme référence, ou l'envoyer directement à Fifi.

## Assistant

_[tool: copy_files]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Facture de Fifi créée dans un fichier séparé (`Facture Fifi SR-2026-FIF-04.dc.html`), le modèle vierge reste intact. J'ai retiré les emoji (🌟 / 💡) : la charte Saveur Royale n'en utilise jamais. Dis-moi si tu veux le PNG ou le PDF.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Ligne « Passion » dédupliquée : une seule ligne facturée, les 9 autres redeviennent vides.

## User

crée une version reçu

## Assistant

_[tool: read_file]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

`Reçu Saveur Royale.dc.html` : une page A4 avec deux reçus identiques séparés par une ligne de découpe (l'un pour le client, la souche pour la maison). Champs : reçu de, somme en lettres, mode de paiement, motif, facture rattachée, reste à payer, montant reçu en bloc noir/or, signature & cachet, et le même pied de page légal que la facture.

## User

créé le reçu de fifi (format whatsApp)

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

`Reçu Fifi WhatsApp.dc.html` — format vertical 1080×1350, texte lisible sur mobile, reprise des données de la facture SR-2026-FIF-04 (Passion, 7 000 FCFA, payé en intégralité) + encart fidélité.

J'ai supposé « Mobile Money » comme mode de paiement — dis-moi si c'est espèces ou virement. Je peux t'en sortir un PNG à envoyer.

## User

Save this design as a PDF: `Reçu Fifi WhatsApp.dc.html`

## Assistant

_[tool: read_file]_

_[tool: copy_starter_component]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: write_file]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: show_pdf_export_dialog]_

La boîte d'export est ouverte — clique sur « Print or save as PDF » pour lancer l'impression. Le reçu (1080×1350) est mis à l'échelle sur une page A4 portrait, couleurs et polices conservées.

