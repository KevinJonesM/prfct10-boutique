export const WHATSAPP_NUMBER = "584125377472";

export function createWhatsAppLink(productName) {
  const message = productName
    ? `Hi PRFCT10, I would like help with ${productName}. Please confirm availability and ordering details.`
    : "Hi PRFCT10, I would like help with an order.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function createWhatsAppMessageLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
