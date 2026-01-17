import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { env } from '@/lib/env';

export function CTASection() {
  const whatsappLink = getWhatsAppLink(
    env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    'Olá, gostaria de agendar uma sessão'
  );

  return (
    <section
      id="contato"
      className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
      role="region"
      aria-labelledby="cta-heading"
    >
      {/* Background Image */}
      <Image
        src="/images/cta-background.jpg"
        alt="Ambiente acolhedor para terapia"
        fill
        className="object-cover"
        priority={false}
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        data-testid="cta-overlay"
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="relative z-10 text-center max-w-4xl mx-auto px-4 py-16 md:py-24"
        data-testid="cta-content"
      >
        <h2
          id="cta-heading"
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-6 leading-tight"
        >
          Pronta para <span className="italic">abraçar</span> a mudança?
        </h2>
        <p
          id="cta-description"
          className="text-base md:text-lg text-white drop-shadow-md mb-8 max-w-2xl mx-auto"
          data-testid="cta-description"
        >
          Você não precisa continuar se anulando para dar conta de tudo. Agende
          sua sessão e comece a se ouvir com mais força e liberdade.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200"
          aria-describedby="cta-description"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Agende sua sessão
          </a>
        </Button>
      </div>
    </section>
  );
}
