# Auditoría de encuadre responsive

## Alcance

Revisión visual a 390 × 844 px del hero principal, los heroes de Training y Apparel, y tarjetas de producto de Training y Apparel.

## Pasos revisados

1. Home hero móvil — Riesgo alto: el rostro de la gimnasta queda convertido en fondo parcial y pierde intención editorial.
2. Training hero móvil — Salud media: el sujeto principal se entiende, aunque el encuadre queda muy cerrado y depende de una posición fija.
3. Training products móvil — Salud media: la tarjeta es consistente, pero fuerza una ventana horizontal sobre todas las fotos.
4. Apparel hero móvil — Riesgo alto: las caras quedan fuera del encuadre; solo se ven torsos y piernas.
5. Apparel product móvil — Salud media: la composición se entiende, pero el formato horizontal recorta contenido lateral y no produce una cuadrícula de producto limpia.

## Recomendaciones

1. Usar fuentes móviles específicas para los heroes mediante `picture`/`srcset`, con recortes editoriales 4:5 o 3:4 preparados de antemano.
2. Mantener `object-position` como metadato por imagen y por breakpoint, no como excepción CSS por categoría.
3. Cambiar el área visual de las tarjetas a `aspect-ratio: 1 / 1`.
4. Usar `object-fit: contain` para producto aislado y `object-fit: cover` solo para lifestyle, con un campo de modo por producto.
5. Normalizar las portadas de catálogo a un lienzo cuadrado, con margen de seguridad de 8–12% alrededor del producto.
6. Evitar zoom o drift en móvil cuando el sujeto ya está cerca del borde del recorte.

## Evidencia

- `01-home-hero-mobile.png`
- `02-training-hero-mobile.png`
- `03-training-products-mobile.png`
- `04-apparel-hero-mobile.png`
- `05-apparel-product-mobile.png`

## Límites

La revisión visual no confirma por sí sola comportamiento con zoom del navegador, lectores de pantalla ni todos los tamaños intermedios. Se revisó el código para identificar las reglas de recorte responsables.
