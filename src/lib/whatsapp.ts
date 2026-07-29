const WHATSAPP_NUMBER = "2348074349520";

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// turns cart items into one combined order message
export function buildOrderMessage(
  items: { name: string; price: string; quantity: number }[]
) {
  const lines = items.map((i) => `• ${i.quantity}x ${i.name} (${i.price})`);
  return `Hi Dynah Sweet Treats! I'd like to order:\n\n${lines.join(
    "\n"
  )}\n\nPlease confirm availability and total. Thank you!`;
}