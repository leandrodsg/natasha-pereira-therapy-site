import { Button } from '@/components/ui/button';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { env } from '@/lib/env';

export function Hero() {
  const whatsappLink = getWhatsAppLink(
    env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    'Olá, gostaria de conversar sobre terapia'
  );

  return (
    <section
      id="inicio"
      className="hero relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="hero-content text-center max-w-4xl mx-auto px-4">
        <h1 className="hero-headline text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Um espaço onde você finalmente pode existir sem medo.
        </h1>
        <p
          id="hero-description"
          className="hero-subheadline text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
        >
          Para mulheres que carregam histórias, decisões, pressões, dúvidas e
          desejam se ouvir com mais força e liberdade.
        </p>
        <Button
          asChild
          size="lg"
          className="cta-button-primary"
          aria-describedby="hero-description"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Vamos conversar?
          </a>
        </Button>
      </div>
      <div className="hero-background absolute inset-0 -z-10">
        {/* Background image would go here */}
      </div>
    </section>
  );
}
