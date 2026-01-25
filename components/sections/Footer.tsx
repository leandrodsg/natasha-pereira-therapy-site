'use client';

import { getWhatsAppLink } from '@/lib/whatsapp';
import { env } from '@/lib/env';
import { FOOTER_CONTENT, FOOTER_NAV_LINKS } from '@/lib/footer-data';
import {
  WhatsAppIcon,
  InstagramIcon,
  TikTokIcon,
} from '@/components/icons/SocialIcons';

const FOOTER_STYLES = {
  container: 'bg-[#662B2D] text-white py-6 px-6',
  maxWidth: 'max-w-6xl mx-auto',
  mainRow:
    'flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-4',
  section: 'text-center md:text-left text-sm opacity-80 space-y-1 md:flex-1',
  link: 'hover:opacity-70 focus-visible:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-opacity rounded',
  socialLink:
    'hover:opacity-70 hover:scale-110 focus-visible:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 rounded',
  name: 'font-display text-xl mb-3 hover:opacity-80 focus-visible:opacity-80 transition-opacity cursor-pointer block rounded',
  copyright: 'border-t border-white/10 pt-4 text-center text-xs opacity-60',
} as const;

export default function Footer() {
  const whatsappLink = getWhatsAppLink(env.NEXT_PUBLIC_WHATSAPP_NUMBER);
  const instagramLink = `https://instagram.com/${FOOTER_CONTENT.social.instagram}`;
  const tiktokLink = `https://www.tiktok.com/${FOOTER_CONTENT.social.tiktok}`;

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="rodape" role="contentinfo" className={FOOTER_STYLES.container}>
      <div className={FOOTER_STYLES.maxWidth}>
        <div className={FOOTER_STYLES.mainRow}>
          <div className={FOOTER_STYLES.section}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`block ${FOOTER_STYLES.link}`}
              aria-label={`Ligar para ${FOOTER_CONTENT.contact.phone}`}
            >
              {FOOTER_CONTENT.contact.phone}
            </a>
            <a
              href={`mailto:${FOOTER_CONTENT.contact.email}`}
              className={`block ${FOOTER_STYLES.link}`}
              aria-label={`Enviar email para ${FOOTER_CONTENT.contact.email}`}
            >
              {FOOTER_CONTENT.contact.email}
            </a>
            <a
              href={FOOTER_CONTENT.maps}
              target="_blank"
              rel="noopener noreferrer"
              className={`block ${FOOTER_STYLES.link}`}
              aria-label="Centro Clínico Brasília Medical Center"
            >
              <span className="block">
                {FOOTER_CONTENT.contact.address.line1}
              </span>
              <span className="block">
                {FOOTER_CONTENT.contact.address.line2}
              </span>
              <span className="block">
                {FOOTER_CONTENT.contact.address.line3}
              </span>
            </a>
          </div>

          <div className="text-center md:flex-1">
            <a
              href="#"
              onClick={scrollToTop}
              className={FOOTER_STYLES.name}
              aria-label="Natasha Pereira"
            >
              {FOOTER_CONTENT.name}
            </a>
            <div
              className="flex justify-center gap-4"
              role="navigation"
              aria-label="Redes sociais"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={FOOTER_STYLES.socialLink}
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className={FOOTER_STYLES.socialLink}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={tiktokLink}
                target="_blank"
                rel="noopener noreferrer"
                className={FOOTER_STYLES.socialLink}
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          <nav
            className="text-center md:text-right md:flex-1"
            aria-label="Navegação do rodapé"
          >
            <ul className="space-y-1 text-sm opacity-80">
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={FOOTER_STYLES.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={FOOTER_STYLES.copyright}>
          <p>
            © {FOOTER_CONTENT.year} {FOOTER_CONTENT.name} · {FOOTER_CONTENT.crp}{' '}
            · Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
