'use client';

import { getWhatsAppLink } from '@/lib/whatsapp';
import { env } from '@/lib/env';
import { WhatsAppIcon } from '@/components/icons/SocialIcons';

const BUTTON_STYLES = {
  base: 'fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg',
  hover: 'hover:bg-[#20BD5A] hover:scale-110 hover:shadow-xl',
  focus:
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2',
  transition: 'transition-all duration-300 ease-in-out',
} as const;

export function WhatsAppButton() {
  const whatsappLink = getWhatsAppLink(env.NEXT_PUBLIC_WHATSAPP_NUMBER);

  return (
    <aside aria-label="Ações rápidas">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entrar em contato pelo WhatsApp"
        className={`${BUTTON_STYLES.base} ${BUTTON_STYLES.hover} ${BUTTON_STYLES.focus} ${BUTTON_STYLES.transition}`}
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </aside>
  );
}
