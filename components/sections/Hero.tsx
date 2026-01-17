import Image from 'next/image';
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
      className="relative pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12"
      role="region"
      aria-labelledby="hero-headline"
    >
      {/* Texto */}
      <div className="w-full md:w-1/2 space-y-8">
        <span className="block text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
          Terapia online para mulheres em Brasília
        </span>
        <h1
          id="hero-headline"
          className="font-display text-5xl md:text-7xl leading-[1.1] text-foreground font-light"
        >
          Um espaço onde você finalmente pode{' '}
          <span className="italic">existir</span> sem medo.
        </h1>
        <p
          id="hero-description"
          className="text-lg text-muted-foreground max-w-md"
        >
          Para mulheres que carregam histórias, decisões, pressões, dúvidas e
          desejam se ouvir com mais força e liberdade.
        </p>
        <div className="pt-4">
          <Button
            asChild
            className="bg-primary text-white text-xs font-bold uppercase px-8 py-4 rounded
                       hover:opacity-90 transition-all shadow-lg transform hover:-translate-y-1 duration-200"
            aria-describedby="hero-description"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Vamos conversar?
            </a>
          </Button>
        </div>
      </div>

      {/* Imagem */}
      <div className="w-full md:w-1/2 relative">
        <div className="aspect-[4/5] w-full relative overflow-hidden rounded-tl-[100px] rounded-br-[100px] shadow-2xl">
          <Image
            src="/images/hero.jpg"
            alt="Natasha Pereira, psicóloga especializada em terapia para mulheres"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
