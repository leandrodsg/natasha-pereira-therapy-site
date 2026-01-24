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
      className="relative w-full bg-[#f4eee5]"
      role="region"
      aria-labelledby="hero-headline"
    >
      <div className="pt-28 pb-32 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-start items-center gap-12">
        {/* Texto */}
        <div className="w-full md:w-1/2 space-y-8">
          <span className="block text-xs tracking-[0.2em] text-[#4F5543]">
            Terapia online para mulheres em Brasília
          </span>
          <h1
            id="hero-headline"
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-[#4F5543] font-light"
          >
            Um espaço onde você finalmente pode{' '}
            <span className="italic">existir</span> sem medo.
          </h1>
          <p id="hero-description" className="text-lg text-[#4F5543] max-w-md">
            Para mulheres que carregam histórias, decisões, pressões, dúvidas e
            desejam se ouvir com mais força e liberdade.
          </p>
          <div className="pt-4">
            <Button
              asChild
              className="bg-[#4F5543] text-white text-xs font-bold uppercase px-8 py-4 rounded
                       hover:bg-[#4F5543]/90 transition-all shadow-lg transform hover:-translate-y-1 duration-200"
              aria-describedby="hero-description"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Vamos conversar?
              </a>
            </Button>
          </div>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-[45%] relative flex items-start">
          <div className="aspect-[3/4] w-full max-h-[500px] relative overflow-hidden rounded-tl-[80px] rounded-br-[80px] shadow-2xl">
            <Image
              src="/images/hero_new.png"
              alt="Natasha Pereira, psicóloga especializada em terapia para mulheres"
              fill
              className="object-cover object-[center_70%]"
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
