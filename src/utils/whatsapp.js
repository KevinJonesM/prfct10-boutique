export const WHATSAPP_NUMBER = "584125377472";

export function createWhatsAppLink(productName, locale = "en") {
  const isSpanish = locale === "es";
  const message = productName
    ? isSpanish
      ? `Hola PRFCT10, quisiera ayuda con ${productName}. Por favor confirmen la disponibilidad y los detalles del pedido.`
      : `Hi PRFCT10, I would like help with ${productName}. Please confirm availability and ordering details.`
    : isSpanish
      ? "Hola PRFCT10, quisiera ayuda con un pedido."
      : "Hi PRFCT10, I would like help with an order.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function createWhatsAppMessageLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
