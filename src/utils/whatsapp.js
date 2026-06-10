export const WHATSAPP_NUMBER = "584125377472";

export function createWhatsAppLink(productName) {
  const message = productName
    ? `Hola, quiero pedir informacion sobre ${productName}.`
    : "Hola, quiero hacer un pedido de PRFCT10.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function createWhatsAppMessageLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
