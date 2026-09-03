# Saveur Royale — Design System

> *« Produire des "saveurs" pour des personnes pour qui la qualité ne peut souffrir d'aucun compromis. »*

A brand & UI design system for **Saveur Royale**, an artisanal Ivorian
liquoristerie (founded 2015, *« depuis 2014 »* on packaging) crafting
fruit liqueurs and syrups from Côte d'Ivoire–grown produce. Everything here
is in **French** — the brand's working language.

---

## 1. Who they are

Saveur Royale is a craft *liquoristerie & siroperie* in Côte d'Ivoire. From
fruit selection to barrel ageing, the house blends contemporary know-how with
respect for tradition to develop fruity, floral flavours. The promise: turn
every moment — intimate or collective — into a celebration, on *« un arc-en-ciel
de saveurs tropicales »*.

- **Mission** — Showcase local fruit through products that are at once natural and refined.
- **Vision** — Have people associate *Saveur Royale* with their moments of rejoicing.
- **Promise** — Flavours for people who will not compromise on quality.
- **Values** — Originalité · Raffinement · Authenticité.
- **Target** — Primarily women, 30–45, active professionals/executives; a male audience of the same bracket gravitates around them. **The products are designed for the ladies.**
- **Context** — A very competitive market of long-established wine & spirits brands; Saveur Royale builds its image progressively to become an icon of refinement.

### Sub-brands / surfaces
- **Liquoristerie & Siroperie** — the core product line (liqueurs + syrups).
- **Saveur Royale Bar Mobile** — a mobile bar promoting mixology & signature cocktails.
- **Saveur Royale Event** — events branch; flagship *Afterwork Royal* (festive, cocktails à volonté).

### The range (*nos saveurs*)
Passion · Bissap (liqueur) · Crème de Bissap · Corossol *(édition limitée)* ·
Citron · Ananas · Chocolat · Mangoustan.
Each carries an evocative, sensorial story (see CONTENT FUNDAMENTALS).

---

## 2. Sources provided

- **`uploads/SAVEUR-ROYAL_Liqueur-Logo-sans-fond.png`** — master logo (script *Royale* + gold crown + *LIQUEUR* banner). Cropped + recoloured into `assets/logo/`.
- **`IMAGES/` local mount** (read-only, attached via Import) — large brand photo archive: product shoots (`SHOOTING PRODUITS/PHOTOS SELECTIONNEES`), labels (`ETIQUETTES`, incl. a print HTML with the brand CSS palette/fonts), events (`AFTERWORK ROYAL`, `10 ans de SR`, expos), cocktails, old & new logos (`LOGO ANCIEN` / `LOGO NOUVEAU` / `NOUVELLE IDENTITE`).
- Website referenced on packaging: **www.saveurroyale.com**.

The palette and font choices in `tokens/` were reverse-engineered from the
brand's own label artwork (`ETIQUETTES/Saveur Royale — Chocolat Crème (Print).html`
declared `--cream:#efe3c4`, `--gold:#c79a4e`, `--band:#5c3a22` and the fonts
Cinzel / Mulish / Pinyon Script).

> **Two label families coexist.** A *light* system (cream/white paper with a fine
> golden wave guilloché, black script flavour names, gold capsule pills, fruit
> vignettes) and a *dark premium* system (deep chocolate ground, cream + gold
> type, ornate cartouche). The system supports both — see VISUAL FOUNDATIONS.

---

## 3. Content fundamentals (voice & tone)

**Language:** French throughout. Elegant, sensorial, lightly literary —
*storytelling de dégustation* rather than spec-sheet copy.

- **Register** — refined and evocative; metaphors of travel, royalty, light and the senses: *« élixir solaire »*, *« une invitation au voyage »*, *« une caresse veloutée »*, *« la pierre précieuse qui manquait à notre couronne »*.
- **Address** — speaks *to* the drinker with soft imperative invitations: *« laissez-vous tenter »*, *« laissez votre palais vous conduire »*. Uses **nous** for the house (*« nos fruits »*, *« notre couronne »*). Avoid blunt second-person commands.
- **Casing** — Brand lock-ups & section labels in **engraved Roman caps** (SAVEUR, LIQUEUR, CRÈME, DEPUIS 2014). Flavour names in **Capitalised Script**. Body in sentence case.
- **Signatures / taglines** — short script flourishes close a composition: *« Un élixir divin pour des personnes d'exception »*, *« Le goût de l'exception »*, *« Savourez la finesse et l'originalité à chaque gorgée »*.
- **Provenance is sacred** — *« Fièrement produite en Côte d'Ivoire »* recurs (often set vertically beside a CI flag chip). Lean on authenticity & terroir.
- **Tone for the feminine target** — sensual but tasteful, premium, celebratory. Words like *raffinement, finesse, élégance, sublimé, audacieux, exception*.
- **Emoji** — **none.** The brand never uses emoji. Ornament comes from gold rules, the crown mark, and script — not pictographs.
- **Numbers** — kept minimal and elegant (e.g. `25% VOL` / `75 CL` inside dotted technical rings). No data-slop.

**Mini lexicon:** saveur · élixir · gorgée · dégustation · sillage · velouté ·
robe · finale · arc-en-ciel de saveurs tropicales · célébration · couronne.

---

## 4. Visual foundations

**Overall:** regal, warm, tropical-luxe. Three materials — **chocolate ink,
antique gold leaf, warm cream paper** — plus an Ivorian-tropical accent set.

- **Colour** — see `tokens/colors.css`. Gold (`--gold-500 #c79a4e`, lite `--gold-300 #e3c074`) for crowns, filets, capsules & accents; cream/ivory (`--cream-100/300`) for paper & dark-ground text; chocolate/espresso (`--choc-400 → --choc-900`) for ink and premium dark grounds; royal indigo (`--indigo-500`) only for technical rings; tropical fruit accents (passion, mango, hibiscus-red, mangosteen) used sparingly per-flavour. The CI flag (orange/white/green) signs provenance.
- **Type** — `tokens/typography.css`. **Cinzel** = engraved caps for the *SAVEUR* lock-up, eyebrows & technical labels (wide tracking, `--ls-caps .22em`). **Pinyon Script** = formal calligraphy for signatures. **Mulish** = clean humanist sans for all body/UI/descriptors. NB: the **flavour names** on the labels (*Ananas*, *Bissap*, *Citron*…) are a **bold, high-contrast brush script with a fine gold outline** — heavier than Pinyon (see caveats); the *Royale* wordmark is a separate custom face. High contrast between engraved caps + flowing script is the signature pairing.
- **Backgrounds** — two grounds: cream paper (`--grad-cream`) and deep chocolate (`--grad-choc` / warm `--grad-choc-warm`). The hallmark texture is a **fine golden wave guilloché** (`.sr-waves`) behind type; premium dark surfaces add a subtle **cacao grain** (`.sr-grain`). Photography is used full-bleed for hero/lifestyle.
- **Gold detailing** — thin **filets** (1–1.3px gold rules fading to transparent, often flanking a centred caps word — see `.sr-rule`), gold-leaf gradient fills (`--grad-gold`) for crowns/banners/capsule pills, and gold hairline frames.
- **Capsules & pills** — flavour qualifiers sit in **gold-leaf capsule pills** (light system) or brown pills (dark system) with `--shadow-inset-gold`. Radii are generous & soft.
- **Technical rings** — `% VOL` / `CL` shown in **double circles**: a solid royal-indigo outer ring + a **gold dotted** inner ring, indigo figures. Two rings sit side by side (touching); the *Crème* adds a third ring with a cocktail-glass glyph (*« idéal pour vos cocktails »*). A distinctive motif — see the `TechnicalRing` component.

### Packaging / labels (the source of truth)
The authentic label artwork lives in `assets/labels/` (9 flavours, transparent PNG). Each label is the brand's clearest statement of its system:
- **Scalloped bracket cartouche** — a tall ornate label frame with ogee crests top & bottom and inward corner ears. This silhouette is the brand's signature container. Use the real artwork rather than redrawing it.
- **Lock-up** (top): arched `SAVEUR` → *Royale* script + crown → gold **banner** reading `LIQUEUR`, `SIROP` (Crème de Bissap) or `CRÈME`.
- **Flavour block** (centre): `SAVEUR` gold rule with mini-crown → big gold-edged script name → gold **capsule pill** (`LIQUEUR DE FRUIT` / `CRÈME`).
- **Wave guilloché** ground tinted to the flavour colour; a fruit line-illustration in the same tint bottom-left.
- **Standard descriptor**: « À SAVOURER FRAIS, SUR GLACE OU EN COCKTAIL. Savourez la finesse et l'originalité à chaque gorgée. »
- **Signature** (bottom): « Un élixir divin pour des personnes d'exception » in handwritten script.
- **Side text** (vertical): « FIÈREMENT PRODUITE EN CÔTE D'IVOIRE » + CI flag.
- **Strengths**: Passion/Ananas/Corossol/Mandarine 25 % · Bissap/Citron/Mangoustan 35 % · Crème de Bissap 15 % · Chocolat 10 %. Volume 75 cl (Mandarine 70 cl).
- **Imagery vibe** — warm, sunlit, natural. Bottles shot outdoors among tree bark, palms & stone, or as clean studio renders with fruit splashes on warm gold gradients. Golden hour, saturated tropical warmth — never cold or desaturated.
- **Corner radii** — soft and premium: cards `--radius-lg (18px)`, capsules `--radius-pill`. Nothing sharp-cornered except fine rules.
- **Cards** — cream/white surface, soft **warm-tinted** elevation (`--shadow-md/lg`, brown-tinted, never grey), optional 1px gold hairline; dark "premium" cards use chocolate ground + cacao grain + gold hairline.
- **Elevation** — warm brown-tinted shadows only (`--shadow-*`); a gold glow (`--shadow-gold`) for primary CTAs.
- **Motion** — restrained & graceful. Gentle fades + small rises on reveal (`--ease-out`, `--dur-base 240ms`). No bounces, no infinite loops. Hover = slight lift + warm/gold deepen; press = subtle shrink (scale .98) + darken. Respect `prefers-reduced-motion`.
- **Borders / hairlines** — `--line-soft`/`--line-strong` on cream; gold hairline (`--hairline-gold`) for ceremony; `--line-on-dark` on chocolate.
- **Transparency & blur** — sparingly: soft cream/choc "protection" gradients under type over photos; light glass only on overlays/nav atop imagery.

---

## 5. Iconography

See ICONOGRAPHY below.

---

## 6. Index / manifest

**Root**
- `styles.css` — entry point (import this one file). `@import`s all of `tokens/`.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills wrapper.

**`tokens/`** — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css` · `base.css`

**`assets/`**
- `logo/` — `royale-logo.png` (black, cropped) · `royale-logo-cream.png` (for dark grounds).
- `products/` — official bottle renders on per-flavour colour grounds: passion, ananas, bissap, creme-bissap, chocolat, citron, corossol, mandarine, mangoustan. Shown full-bleed in cards/detail.
- `labels/` — **authentic label artwork** (transparent PNG, 9 flavours): the scalloped cartouche, wave guilloché, gold-edged flavour script, banners, technical rings, signature. The visual source of truth.
- `photos/` — `cocktail` (generic cocktail render). *Old lifestyle bottle shots removed at the brand's request — those used superseded packaging.*

**`components/`** — reusable React primitives (namespace `SaveurRoyaleDesignSystem_7d78d1`). See each `*.prompt.md`.
- `core/` — **Button** (primary/secondary/ghost/dark/cream), **Badge**, **Tag**, **Card** (paper/raised/premium/waves).
- `forms/` — **Input**, **Select** (engraved-caps labels, gold focus).
- `brand/` — **Logo**, **GoldRule** + **CrownGlyph**, **SectionHeading**, **TechnicalRing**, **FlagChip**.
- `product/` — **ProductCard** (boutique bottle tile).

**`guidelines/`** — foundation specimen cards (`@dsCard`) for the Design System tab.

**`ui_kits/`** — full-screen product recreations.
- `boutique/` — the **saveurroyale.com storefront**: sticky header, full-bleed hero, filterable collection grid, product-detail modal, slide-in cart, heritage section, newsletter footer. Interactive; composes the primitives. See its `README.md`.

### ICONOGRAPHY
- The brand has **no proprietary icon font**. Its true "icons" are heraldic & botanical: the **gold crown** (from the logo), **fleur-de-lis / diamond** flourishes, fine **gold filets**, **dotted technical rings**, and **flat fruit vignettes** (passion, hibiscus, pineapple, lemon, etc.).
- **No emoji, ever.** Avoid pictographic emoji entirely.
- For UI affordances (cart, search, menu, arrows, social) use **Lucide** (CDN, 1.75px stroke) — a thin, elegant line set that matches the gold-filet aesthetic. Tint with `currentColor`/gold. This is a **substitution** (the brand ships no UI icon set) — flagged for the user.
- Provenance is marked with a small **Côte d'Ivoire flag chip** (orange/white/green), not a globe icon.
- Crowns/flourishes should be drawn from the logo assets where possible rather than hand-rolled.

---

## ⚠ Substitutions to confirm
1. **Flavour-name script** — the big label names (*Ananas*, *Bissap*…) are a **bold, high-contrast brush script with a fine gold outline** (a custom face). The system currently uses **Pinyon Script**, which is more delicate; for true fidelity on flavour names a heavier script is needed. The *Royale* wordmark is yet another custom face — always use the logo PNGs for it. *Please share the real font files (or their names) if you have them.*
2. **UI icons** — Lucide (CDN) substituted for the missing UI icon set.
3. **Cream logo** — `royale-logo-cream.png` was generated by recolouring the black wordmark for dark grounds; a native cream/gold master would be better if available.
4. **Label cartouche** — used directly from `assets/labels/` (real artwork) rather than redrawn, to stay pixel-true.
