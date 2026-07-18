const WHATSAPP_NUMBER = "2348074349520";

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}