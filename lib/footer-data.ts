export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: 'whatsapp' | 'instagram' | 'tiktok';
}

export interface NavLink {
  label: string;
  href: string;
}

export const FOOTER_CONTENT = {
  name: 'Natasha Pereira',
  crp: 'CRP 01/22302',
  year: 2026,
  contact: {
    phone: '(61) 98144-8553',
    email: 'npclinicapsicologa@gmail.com',
    address: {
      line1: 'Centro Clínico Brasília Medical Center',
      line2: 'SGAN Qd 607 Conj A · Asa Norte',
      line3: 'Brasília - DF · CEP 70830-300',
    },
  },
  social: {
    instagram: 'sounatashapsi',
    tiktok: '@natasha.pereira.p',
  },
  maps: 'https://www.google.com/maps/search/?api=1&query=Centro+Clinico+Brasilia+Medical+Center+SGAN+607+Brasilia',
} as const;

export const FOOTER_NAV_LINKS: readonly NavLink[] = [
  { label: 'Sobre', href: '#quem-sou' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Dúvidas', href: '#faq' },
] as const;
