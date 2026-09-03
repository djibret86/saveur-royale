# Facture Maison Saveur Royale

_Started 2026-09-03 15:17 UTC_

---

## User

Crée une facture professionnelle au format A4, imprimable, pour une liquoristerie artisanale haut de gamme nommée "Maison Saveur Royale" (Abidjan, Côte d'Ivoire).

Identité visuelle : élégante et sobre — fond blanc/crème, accents dorés (
#C9A84C), noir profond (
#1a1610) pour les blocs de contraste. Typographie mêlant une police serif élégante pour les titres et une sans-serif claire pour le contenu. Le style doit évoquer l'artisanat premium, pas un template générique de facturation.

En-tête :

Logo texte "Saveur Royale" (Saveur en doré, Royale en noir/gris) avec la mention "Liquoristerie artisanale — Abidjan, Côte d'Ivoire" en dessous
À droite : "FACTURE", numéro de document, date

Bloc informations (deux colonnes) :

Gauche : "Facturé à" — nom du client, date d'adhésion, nombre de bouteilles cumulées dans l'année, badge de statut fidélité (ex: "MEMBRE RUBIS" sur fond noir avec le texte en couleur du palier)
Droite : "Émetteur" — Maison Saveur Royale, ville, contact WhatsApp

Tableau des produits : en-tête sur fond noir, colonnes Désignation / Quantité / Prix unitaire / Montant, lignes alternées en gris très clair

Bloc totaux (aligné à droite) :

Sous-total
Ligne de remise fidélité (en couleur brun-rouge, avec le pourcentage et le seuil, ex: "Remise Rubis −8% (dès 24 btl)")
Net commande du jour
Éventuelle dette antérieure à ajouter
Total dû final, mis en valeur dans un bloc noir avec le montant en doré

Encart avantages fidélité : fond crème pâle, bordure fine, rappelant les avantages du niveau du client et le nombre de bouteilles restantes avant le prochain palier

Mention légale : en italique, petite taille, centrée — précisant que la remise fidélité n'est valable que sur l'année en cours

Pied de page : coordonnées de la maison à gauche, zone de signature/cachet à droite avec une ligne pour signer

Contrainte technique : le document doit tenir sur une seule page A4, avec des marges d'au moins 12mm sur tous les bords pour être imprimable sans risque de coupure.

## Assistant

_[tool: read_file]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: copy_starter_component]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

Facture A4 créée avec les valeurs de placeholder (client, produits, montants) — à ajuster librement dans l'éditeur.

