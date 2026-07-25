# PRFCT10 variant and media audit

Status: implemented for the current public storefront catalog.

Legend:

- `Mapped` means the variant has its own product image.
- `Shared gallery` means the product has approved media, but not a distinct image for every variant.
- Quick Add applies only when the selected variant is purchasable and the product has one option group.

## Training Gear

| Product ID | Product name | Variant type | Variants | Variant media | Quick Add | Complex | Notes |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| `bar-grips` | Power Grips | Size | 4 | Shared gallery (0/4 mapped) | Yes | No | The selected size is passed to the cart. |
| `chalk` | Gymnastics Chalk Block | Pack | 2 | Shared gallery (0/2 mapped) | Yes | No | Pack selection uses approved shared product photography. |
| `kinesio-tape` | Kinesiology Tape | Color | 8 | Shared gallery (0/8 mapped) | Yes | No | No unverified tape-color media is invented. |
| `tiger-paws` | Wrist Guards | Size | 4 | Shared gallery (0/4 mapped) | Yes | No | Size selection uses approved shared product photography. |
| `flex-strap-12` | Flex Strap 12 | Color | 5 | Shared gallery (0/5 mapped) | Yes | No | Color remains explicit even when the media is shared. |
| `resistance-handles` | Resistance Bands | Color | 3 | Shared gallery (0/3 mapped) | Yes | No | Color selection is preserved in cart state. |
| `power-weights` | Adjustable Wrist & Ankle Weights | Weight + Color | 6 | Shared gallery (0/6 mapped) | No | Yes | Choose Options requires both option groups. |
| `patella-band` | Patella Strap | Color | 2 | Shared gallery (0/2 mapped) | Yes | No | Uses approved shared product photography. |
| `soft-landing-ankle-braces` | Compression Ankle Support | Size | 3 | Shared gallery (0/3 mapped) | Yes | No | Size selection uses approved shared product photography. |

## Accessories

| Product ID | Product name | Variant type | Variants | Variant media | Quick Add | Complex | Notes |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| `coquet-gymnast-necklace` | Stainless Steel Gymnast Necklace | Design | 16 | Shared gallery (0/16 mapped) | Yes | No | Design remains explicit; no design image is fabricated. |
| `coquet-lazos-tul` | PRFCT10 Gymnastics Bows | Color | 13 | Partial (3/13 mapped) | Yes | No | Selected mapped colors update the card and modal; Rainbow keeps its real variant price. |
| `coquet-plush-flowers` | Plush Flowers | Color | 7 | Shared gallery (0/7 mapped) | Yes | No | Color is stored even when photography is shared. |
| `coquet-silicone-bag` | PRFCT10 Silicone Charm Bag | Color | 5 | Mapped (5/5) | Yes | No | Peach Pink, Blue Lagoon, Light Yellow, Lilac, and Sky Blue are synchronized. |
| `coquet-garment-bag` | Gymnastics Garment Bag | Color | 2 | Shared gallery (0/2 mapped) | Yes | No | Uses approved shared media. |
| `coquet-string-charm-bracelet` | Gymnastics String Charm Bracelet | Color | 3 | Shared gallery (0/3 mapped) | Yes | No | Color selection is preserved in cart state. |
| `coquet-leather-charm-bracelet` | Gymnastics Leather Charm Bracelet | Color | 5 | Shared gallery (0/5 mapped) | Yes | No | Color selection is preserved in cart state. |
| `coquet-infinity-heart-bracelet` | Infinity Heart Gymnastics Bracelet | Design | 12 | Shared gallery (0/12 mapped) | Yes | No | No unverified design image is invented. |
| `coquet-lock-charm-bracelet` | Stainless Steel Gymnastics Lock Charm Bracelet | Finish | 2 | Shared gallery (0/2 mapped) | Yes | No | Finish selection is preserved in cart state. |
| `brazalete-gimnasia` | Gymnastics Bracelet | Design + Finish | 6 | Shared gallery (0/6 mapped) | No | Yes | Choose Options requires both option groups. |
| `coquet-infinity-necklace` | Infinity Heart Gymnastics Necklace | Finish | 2 | Shared gallery (0/2 mapped) | Yes | No | Finish selection is preserved in cart state. |
| `coquet-rhinestone-necklace` | Rhinestone Gymnastics Necklace | Color | 3 | Shared gallery (0/3 mapped) | Yes | No | Color selection is preserved in cart state. |
| `coquet-pendant-necklace` | Cheer & Gymnastics Pendant Necklace | Finish | 2 | Shared gallery (0/2 mapped) | Yes | No | Finish selection is preserved in cart state. |
| `coquet-nylon-headbands` | Nylon Headband Pair | Pair Color | 8 | Mapped (8/8) | Yes | No | One cart unit is one same-color pair of two physical headbands. |
| `coquet-bun-covers` | Gymnastics Bun Covers | Color | 5 | Mapped (5/5) | Yes | No | Product and lifestyle media remain in the modal gallery. |
| `coquet-tiara-comb` | Rhinestone Tiara Hair Comb | Crown | 6 | Mapped (6/6) | Yes | No | Public crown names: Aurora, Celeste, Nova, Halo, Opal, and Stella; legacy style names remain internal. |

## Apparel

| Product ID | Product name | Variant type | Variants | Variant media | Quick Add | Complex | Notes |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| `apparel-pastel-striped-tshirt` | Pastel Striped T-Shirt | Size | 3 | Shared gallery (0/3 mapped) | No | No | Purchase is blocked pending physical count, size allocation, condition, and final price. |
| `apparel-green-striped-tshirt` | Green Striped T-Shirt | Size | 3 | Shared gallery (0/3 mapped) | No | No | Purchase is blocked pending physical verification. |
| `apparel-crop-tshirt` | Crop T-Shirt | Size | 3 | Shared gallery (0/3 mapped) | No | No | Purchase is blocked pending physical verification. |
| `apparel-open-back-top` | Open-Back Top | Size | 3 | Shared gallery (0/3 mapped) | No | No | Purchase is blocked pending physical verification. |
| `apparel-white-cropped-sweatshirt` | White Cropped Sweatshirt | Size | 3 | Shared gallery (0/3 mapped) | No | No | Purchase is blocked pending physical verification. |
| `apparel-contrast-collar-tshirt` | Blue & White Contrast-Collar T-Shirt | Size | 3 | Shared gallery (0/3 mapped) | No | No | Purchase is blocked pending physical verification. |
| `apparel-polka-dot-zip-hoodie` | White Polka-Dot Zip Hoodie | Size | 3 | Shared gallery (0/3 mapped) | No | No | Purchase is blocked pending physical verification. |
| `apparel-heart-print-sweatshirt` | Heart Print Sweatshirt | Size | 3 | Shared gallery (0/3 mapped) | No | No | Purchase is blocked pending physical verification. |
| `apparel-sandwash-tshirt` | Sandwash T-Shirt | Size | 3 | Shared gallery (0/3 mapped) | No | No | Purchase is blocked pending physical verification. |
| `coquet-tie-dye-visor` | PRFCT10 Tie-Dye Visor | Color | 4 | Mapped (4/4) | Yes | No | Reclassified under Apparel → Headwear; product and lifestyle images remain available. |
| `apparel-period-brief` | Seamless High-Waist Period Brief | Color + Size | 2 | Shared gallery (0/2 mapped) | No | Yes | Purchase is blocked pending physical inventory, size allocation, and final price verification. |

## Mind Gym

| Product ID | Product name | Variant type | Variants | Variant media | Quick Add | Complex | Notes |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| `mental-squishy-dumpling` | Squishy Dumpling | Color | 4 | Shared gallery (0/4 mapped) | Yes | No | Color selection is preserved; shared approved media is used. |

## Bundles

| Product ID | Product name | Variant type | Variants | Variant media | Quick Add | Complex | Notes |
| --- | --- | --- | ---: | --- | --- | --- | --- |
| `bundle-bar-ready` | Bar Ready Bundle | Grip Size | 4 | Shared component gallery (0/4 mapped) | No | Forced | Configuration required: final retail price and three-roll tape-color rule need business approval. |
| `bundle-meet-day-hair` | Meet Day Hair Bundle | Bow Color | 13 | Partial component mapping (3/13) | No | Forced | Final retail price needs business approval; component total follows the selected bow price. |
| `bundle-conditioning` | Conditioning Bundle | Flex Strap Color + Weight + Weight Color | 30 | Shared component gallery (0/30 mapped) | No | Forced | Final retail price needs business approval; all component choices are explicit. |

## Storefront behavior decisions

- Product-card galleries do not autoplay and do not show carousel dots.
- Variant arrows and horizontal swipe change only the current product card.
- Simple, in-stock, single-option products quick-add the visible variant.
- Products with two or more option groups, forced configuration, blocked inventory, or unresolved business pricing open the modal.
- Sold-out choices remain visible where useful but cannot be added.
- The modal receives the card's selected variant, puts its image first, and removes duplicate gallery entries.
- Crown cards and the modal expose public crown names and approved thumbnails, plus the selected SKU.
- No new availability, discounts, component inventory, or final bundle prices were invented.
