import Script from 'next/script';
import { faqItems, faqSectionContent } from '@/lib/faq-data';
import { getFAQSchemaScript } from '@/lib/faq-schema';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { env } from '@/lib/env';
import { FAQItem } from './FAQItem';

const SECTION_STYLES = 'min-h-screen flex items-center bg-[#f4eee5]';
const CONTAINER_STYLES = 'w-full max-w-7xl mx-auto px-6 md:px-12 py-12';
const HEADER_STYLES = 'text-center mb-10';
const TITLE_STYLES =
  'font-display text-4xl md:text-5xl font-light text-center text-[#662B2D] mb-4';
const SUBTITLE_STYLES =
  'text-muted-foreground max-w-3xl mx-auto leading-relaxed';
const LIST_STYLES = 'max-w-4xl mx-auto flex flex-col gap-3 mb-8';
const CTA_STYLES =
  'inline-block bg-[#662B2D] text-white px-8 py-3 rounded-full font-medium hover:bg-[#662B2D]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#662B2D] transition-colors duration-200';

export function FAQSection() {
  const whatsappLink = getWhatsAppLink(
    env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    faqSectionContent.ctaMessage
  );

  const schemaData = getFAQSchemaScript();

  return (
    <section
      id="faq"
      className={SECTION_STYLES}
      role="region"
      aria-labelledby="faq-heading"
    >
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaData }}
      />

      <div className={CONTAINER_STYLES}>
        <header className={HEADER_STYLES}>
          <h2 id="faq-heading" className={TITLE_STYLES}>
            {faqSectionContent.heading}
          </h2>
          <p className={SUBTITLE_STYLES}>
            Respostas para as dúvidas mais comuns sobre o processo terapêutico.
          </p>
        </header>

        <div className={LIST_STYLES}>
          {faqItems.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>

        <div className="text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={CTA_STYLES}
          >
            {faqSectionContent.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
