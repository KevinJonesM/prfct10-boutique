# PRFCT10 Product Catalog and Modal Architecture Audit

Audit date: 2026-07-24
Scope: public Training Gear, Accessories, Mind Gym, Apparel, and Bundle records used by the storefront.

## Architecture decisions

- Every public product has an explicit `modalTemplate`: `technical`, `hair`, `jewelry`, `mindGym`, `cosmetic`, `apparel`, `bundle`, `gift`, or `general`.
- Template sections render only when that product has corresponding verified content. There are no generated FAQ or usage fallbacks.
- `modalSections` can merge with, replace, or hide a template section without discarding unrelated sections.
- Internal inventory, historical purchasing, supplier claims, cost, and reconciliation notes are not rendered by the product modal.
- Product content is localized field by field. Structured English fields do not silently appear in the Spanish modal, or vice versa.
- Variant combinations are matched as explicit records. Missing combinations are invalid and cannot be purchased.
- A selected variant can control price, compare-at price, SKU, stock status, quantity cap, and image.
- The only enabled fulfillment method is tracked U.S. shipping.
- Products with unverified inventory, documentation, claims, or bundle pricing are blocked until the relevant review is complete.

## Product-by-product audit

“Inventory confidence” describes the public sellability decision, not a quantity.

| Stable ID | Public name | Template | Commercial unit | Inventory confidence | Issue found | Applied fix | Still needs verification |
|---|---|---|---|---|---|---|---|
| `bar-grips` | Power Grips | technical | pair | High | Size range could drift from source | Limited to XS–L; preserved product-specific fit/use/FAQ | No |
| `chalk` | Gymnastics Chalk Block | technical | block or box of 8 | Low | One static price could misrepresent both buying options | Explicit pack variants control price, SKU, and units consumed | Physical stock |
| `gel-heel-guards` | Gel Heel Guards | technical | pair | High | Generic modal content | Product-specific use, care, safety, and FAQ | No |
| `kinesio-tape` | Kinesiology Tape | technical | roll | High | Generic modal content | Product-specific directions, care, and cautions | No |
| `wrist-bands` | Leather Wrist Support | technical | pair | High | Generic modal content | Product-specific sizing, use, care, and safety | No |
| `tiger-paws` | Wrist Guards | technical | pair | High | Internal inventory section was public-shaped | Internal notes separated; product-specific content retained | No |
| `flex-strap-12` | Flexibility Strap 12 | technical | one strap | High | Generic exercise language | Product-specific controlled-use and safety copy | No |
| `resistance-handles` | Resistance Bands | technical | one set | High | Generic exercise language | Product-specific controlled-use and safety copy | No |
| `power-weights` | Adjustable Wrist & Ankle Weights | technical | pair | High | Static 500 g claim conflicted with variants | Weight now comes only from selected variant | No |
| `patella-band` | Patella Band | technical | one band | High | Generic support content | Product-specific fit, use, and cautions | No |
| `soft-landing-ankle-braces` | Ankle Compression Support | technical | pair | High | Generic support content | Product-specific fit, use, care, and safety | No |
| `sweat-wristbands` | Gymnastics Wrist Bands | technical | pair | High | Product absent from base technical map | Added explicit technical modal content | No |
| `hand-balm` | Hand & Foot Balm | cosmetic | one container | High | Technical template exposed irrelevant sections | Cosmetic template; directions and warnings localized | Ingredient/label changes only |
| `coquet-medal-hanger` | Gymnastics Medal Hanger | gift | one hanger | High | No explicit modal type | Gift template assigned | No |
| `coquet-glitter-spray` | Glitter Spray | cosmetic | one container | Low | Cosmetic claims lacked label documentation | Cosmetic template, restrained copy, purchase blocked | Net contents, ingredients, directions, warnings, approved application areas |
| `coquet-lazos-tul` | PRFCT10 Gymnastics Bows | hair | one bow | Medium | Inventory notes could be mistaken for public content | Internal notes separated; hair template assigned | Pending color allocations |
| `coquet-plush-flowers` | Plush Flowers | gift | one flower | High | No explicit modal type | Gift template assigned | No |
| `coquet-silicone-bag` | PRFCT10 Silicone Charm Bag | general | one bag with included charms | High | Included items were not explicit | Added included section in English and Spanish | Variant allocation |
| `coquet-garment-bag` | Gymnastics Garment Bag | general | one bag | High | No explicit modal type | General template assigned | No |
| `coquet-string-charm-bracelet` | Gymnastics String Charm Bracelet | jewelry | one bracelet | High | Jewelry could be implied as training wear | Jewelry template and remove-before-activity safety in both languages | No |
| `coquet-leather-charm-bracelet` | Gymnastics Leather Charm Bracelet | jewelry | one bracelet | High | Jewelry could be implied as training wear | Jewelry safety added in both languages | No |
| `coquet-infinity-heart-bracelet` | Infinity Heart Gymnastics Bracelet | jewelry | one bracelet | High | Jewelry could be implied as training wear | Jewelry safety added in both languages | No |
| `coquet-lock-charm-bracelet` | Stainless Steel Gymnastics Lock Charm Bracelet | jewelry | one bracelet | High | Jewelry could be implied as training wear | Jewelry safety added in both languages | No |
| `brazalete-gimnasia` | Gymnastics Bracelet | jewelry | one bracelet | High | Potential design/finish Cartesian invention | Only explicit design/finish combinations remain selectable | No |
| `coquet-gymnast-necklace` | Stainless Steel Gymnast Necklace | jewelry | one necklace | High | Jewelry could be implied as training wear | Jewelry safety added in both languages | No |
| `coquet-rhinestone-necklace` | Rhinestone Gymnastics Necklace | jewelry | one necklace | High | “Competition” could imply floor use | Meet-day color wording plus remove-before-activity safety | No |
| `coquet-infinity-necklace` | Infinity Heart Gymnastics Necklace | jewelry | one necklace | High | Jewelry could be implied as training wear | Jewelry safety added in both languages | No |
| `coquet-pendant-necklace` | Cheer & Gymnastics Pendant Necklace | jewelry | one necklace | High | Jewelry could be implied as training wear | Jewelry safety added in both languages | No |
| `coquet-nylon-headbands` | Nylon Headband Pair | hair | same-color pair | High | Card implied mixed colors / unclear unit | Canonical pair name, Pair Color option, two-per-pair included text and FAQ | No |
| `coquet-bun-covers` | Gymnastics Bun Covers | hair | one cover | High | “Competition” lacked context | Meet-day/off-floor section in both languages | No |
| `coquet-tiara-comb` | Rhinestone Tiara Hair Comb | hair | one comb | High | “Competition” lacked context | Meet-day/off-floor rules and removal guidance | No |
| `coquet-tie-dye-visor` | PRFCT10 Tie-Dye Visor | hair | one visor | High | Categorized as on-floor competition gear | Reframed as off-floor/travel accessory | No |
| `bundle-bar-ready` | Bar Ready Bundle | bundle | one configured bundle | Low | Static bundle price and component stock relationship | Recalculated against current effective component prices; variant selection required; blocked | Chalk stock |
| `bundle-meet-day-hair` | Meet Day Hair Bundle | bundle | one configured bundle | Low | Previous price exceeded component total | Price removed pending business review; all component variants required | Final bundle price |
| `bundle-competition-ready` | Competition Ready Bundle | bundle | one configured bundle | Low | Price and cosmetic eligibility unverified | Purchase blocked; component and documentation requirements shown | Final price and glitter documentation |
| `bundle-little-gymnast-gift` | Little Gymnast Gift | bundle | one configured bundle | Low | Previous price exceeded component total | Price removed pending business review; all component variants required | Final bundle price |
| `mental-bolita-puzzle` | Rainbow Puzzle Ball | mindGym | one toy | Low | Historical purchasing looked like current stock | Current availability cleared and purchase blocked | Physical count and sellable condition |
| `mental-rueda-mental` | Finger Magic Cube | mindGym | one toy | Low | Historical purchasing looked like current stock | Current availability cleared and purchase blocked | Physical count and sellable condition |
| `mental-giro-puzzle` | Magic Bean Puzzle | mindGym | one toy | Low | Historical purchasing looked like current stock | Current availability cleared and purchase blocked | Physical count and sellable condition |
| `mental-squishy-dumpling` | Squishy Dumpling | mindGym | one toy | High | Therapeutic-sounding copy | Rewritten as non-medical tactile play; confirmed stock retained | No |
| `mental-pulseras-unicornio` | Unicorn Stretch String Set | mindGym | fixed six-color set | Low | Historical total and color variants implied current individual stock | Removed color variants; fixed set stated; purchase blocked | Physical count, complete-set count, condition |
| `mental-pelota-squishy` | DNA Squishy Ball | mindGym | one toy | Low | Historical purchasing looked like current stock | Current availability cleared and purchase blocked | Physical count and sellable condition |
| `mental-puzzle-magico` | Puzzle Cube Ball | mindGym | one toy | Low | Invented per-color allocation | Removed color variants and purchase blocked | Physical count, color mix, condition |
| `bundle-mind-gym-mystery` | Mind Gym Mystery Bag | bundle | one configured surprise bundle | Low | Could consume historical records as live stock | Pool remains blocked until eligible inventory is reconciled | Eligible pool and final configuration rules |
| `apparel-pastel-striped-tshirt` | Pastel Striped T-Shirt | apparel | one garment | Low | Historical purchase lacked physical size allocation | Current stock cleared; purchase blocked; size placeholders marked pending | Count, size allocation, condition, public price |
| `apparel-green-striped-tshirt` | Green Striped T-Shirt | apparel | one garment | Low | Historical purchase lacked physical size allocation | Current stock cleared; purchase blocked | Count, size allocation, condition, public price |
| `apparel-crop-tshirt` | Crop T-Shirt | apparel | one garment | Low | Historical purchase lacked physical size allocation | Current stock cleared; purchase blocked | Count, size allocation, condition, public price |
| `apparel-open-back-top` | Open-Back Top | apparel | one garment | Low | Historical purchase lacked physical size allocation | Current stock cleared; purchase blocked | Count, size allocation, condition, public price |
| `apparel-white-cropped-sweatshirt` | White Cropped Sweatshirt | apparel | one garment | Low | Historical purchase lacked physical size allocation | Current stock cleared; purchase blocked | Count, size allocation, condition, public price |
| `apparel-contrast-collar-tshirt` | Blue & White Contrast-Collar T-Shirt | apparel | one garment | Low | Historical purchase lacked physical size allocation | Current stock cleared; purchase blocked | Count, size allocation, condition, public price |
| `apparel-polka-dot-zip-hoodie` | White Polka-Dot Zip Hoodie | apparel | one garment | Low | Historical purchase lacked physical size allocation | Current stock cleared; purchase blocked | Count, size allocation, condition, public price |
| `apparel-heart-print-sweatshirt` | Heart Print Sweatshirt | apparel | one garment | Low | Historical purchase lacked physical size allocation | Current stock cleared; purchase blocked | Count, size allocation, condition, public price |
| `apparel-sandwash-tshirt` | Sandwash T-Shirt | apparel | one garment | Low | Historical purchase lacked physical size allocation | Current stock cleared; purchase blocked | Count, size allocation, condition, public price |
| `apparel-period-brief` | Seamless High-Waist Period Brief | apparel | one brief | Medium | Supplier performance claims lacked supporting documentation | Claim verification tracked internally; purchase blocked pending review | Absorbency method, layers, antibacterial/eco claims, fiber content |

## Representative modal QA matrix

Completed in the running storefront on 2026-07-24 in both English and Spanish:

1. Power Grips — XS–L only, selected SKU, break-in guidance, wrist-band disclosure, and product-specific FAQ.
2. Chalk — Single Block vs Box of 8 price, compare-at price, SKU, and unit-content changes; current stock remains unverified.
3. Power Weights — 0.6 kg and 1 kg pairs only; no static 500 g claim.
4. Hand & Foot Balm — cosmetic-only sections with directions and warnings.
5. Nylon Headband Pair — Pair Color option, same-color wording, and two physical headbands included.
6. Silicone Charm Bag — included charms and localized custom sections.
7. Gymnastics Bracelet — only explicitly stored variant records; no generated design/finish combinations.
8. Rhinestone Gymnastics Necklace — jewelry safety and remove-before-activity guidance.
9. Gymnastics Bun Covers — meet-day/off-floor wording.
10. Glitter Spray — restrained public copy, missing documentation clearly identified, and purchase disabled.
11. Squishy Dumpling — non-medical tactile-play wording and confirmed inventory.
12. Unicorn Stretch String Set — fixed six-color contents, no color selector, historical quantity hidden, and purchase disabled.
13. Seamless High-Waist Period Brief — unsupported performance claims withheld and purchase disabled pending documentation.
14. Bar Ready Bundle — current component-price calculation and stock dependency block.

Additional regression checks covered Flex Strap product-specific FAQ, Resistance Bands supervision and safety, the Meet Day Hair Bundle public block message, unavailable historical Mind Gym products, Spanish WhatsApp prefill, and shipping-only fulfillment.

## Operational follow-up

- Complete a physical reconciliation before enabling any `historical_unverified` item.
- Attach supplier/label documentation before enabling Glitter Spray or strengthening period-care claims.
- Approve final bundle prices only after current component variants and effective prices are confirmed.
- Keep historical purchasing and cost data in internal fields and never in public modal sections.
