import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { env } from '@/lib/env';
import { CTA_CONTENT } from '@/lib/cta-content';

const SECTION_STYLES =
  'relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden';
const OVERLAY_STYLES =
  'absolute inset-0 bg-gradient-to-b from-black/50 to-black/60';
const CONTENT_STYLES =
  'relative z-10 text-center max-w-4xl mx-auto px-6 md:px-12 py-16';
const HEADING_STYLES =
  'text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-6 leading-tight';
const DESCRIPTION_STYLES =
  'text-base md:text-lg text-white/95 drop-shadow-md mb-8 max-w-2xl mx-auto leading-relaxed';
const BUTTON_STYLES =
  'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

export function CTASection() {
  const whatsappLink = getWhatsAppLink(
    env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    CTA_CONTENT.whatsappMessage
  );

  const { heading, description, button, image } = CTA_CONTENT;

  return (
    <section
      id="contato"
      className={SECTION_STYLES}
      role="region"
      aria-labelledby="cta-heading"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        priority={false}
        sizes="100vw"
      />

      <div className={OVERLAY_STYLES} aria-hidden="true" />

      <div className={CONTENT_STYLES}>
        <h2 id="cta-heading" className={HEADING_STYLES}>
          {heading.text} <span className="italic">{heading.emphasis}</span>{' '}
          {heading.continuation}
        </h2>
        <p id="cta-description" className={DESCRIPTION_STYLES}>
          {description}
        </p>
        <Button
          asChild
          size="lg"
          className={BUTTON_STYLES}
          aria-describedby="cta-description"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            {button}
          </a>
        </Button>
      </div>
    </section>
  );
}
