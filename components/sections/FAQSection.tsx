import { faqItems, faqSectionContent } from '@/lib/faq-data';
import { getFAQSchemaScript } from '@/lib/faq-schema';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { env } from '@/lib/env';
import { FAQItem } from './FAQItem';

export function FAQSection() {
  const whatsappLink = getWhatsAppLink(
    env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    faqSectionContent.ctaMessage
  );

  return (
    <section
      id="faq"
      className="min-h-screen flex items-center bg-[#f4eee5]"
      role="region"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getFAQSchemaScript() }}
      />

      <div
        data-testid="faq-container"
        className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12"
      >
        {/* Header - igual Services */}
        <div className="text-center mb-10">
          <h2
            id="faq-heading"
            className="section-title font-display text-4xl md:text-5xl font-light text-center text-[#662B2D] mb-4"
          >
            {faqSectionContent.heading}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Respostas para as dúvidas mais comuns sobre o processo terapêutico.
          </p>
        </div>

        {/* FAQ List - centralizado */}
        <div
          data-testid="faq-list"
          className="max-w-4xl mx-auto flex flex-col gap-3 mb-8"
        >
          {faqItems.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#662B2D] text-white px-8 py-3 rounded-full font-medium hover:bg-[#662B2D]/90 transition-colors duration-200"
          >
            {faqSectionContent.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
