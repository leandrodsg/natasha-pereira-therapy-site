// lib/whatsapp.ts
export function getWhatsAppLink(phoneNumber: string, message?: string): string {
  const baseUrl = 'https://wa.me/';
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  const url = `${baseUrl}${cleanNumber}`;
  return message && message.length > 0
    ? `${url}?text=${encodeURIComponent(message)}`
    : url;
}
