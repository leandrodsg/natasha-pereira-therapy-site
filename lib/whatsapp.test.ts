// lib/whatsapp.test.ts
import { getWhatsAppLink } from './whatsapp';

describe('getWhatsAppLink', () => {
  it('should generate WhatsApp link without message', () => {
    const phoneNumber = '5561981448553';
    const expected = 'https://wa.me/5561981448553';
    expect(getWhatsAppLink(phoneNumber)).toBe(expected);
  });

  it('should generate WhatsApp link with message', () => {
    const phoneNumber = '5561981448553';
    const message = 'Olá, gostaria de agendar uma sessão';
    const expected =
      'https://wa.me/5561981448553?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o';
    expect(getWhatsAppLink(phoneNumber, message)).toBe(expected);
  });

  it('should clean phone number of non-digits', () => {
    const phoneNumber = '+55 61 98144-8553';
    const expected = 'https://wa.me/5561981448553';
    expect(getWhatsAppLink(phoneNumber)).toBe(expected);
  });

  it('should handle empty message', () => {
    const phoneNumber = '5561981448553';
    const message = '';
    const expected = 'https://wa.me/5561981448553';
    expect(getWhatsAppLink(phoneNumber, message)).toBe(expected);
  });
});
