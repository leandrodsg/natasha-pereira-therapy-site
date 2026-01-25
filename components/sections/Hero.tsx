import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { env } from '@/lib/env';
import { HERO_CONTENT } from '@/lib/hero-content';

const SECTION_STYLES = 'relative w-full bg-[#f4eee5]';
const CONTAINER_STYLES =
  'pt-28 pb-32 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-start items-center gap-12';
const TEXT_CONTAINER_STYLES = 'w-full md:w-1/2 space-y-8';
const SUBTITLE_STYLES = 'block text-xs tracking-[0.2em] text-[#4F5543]';
const HEADING_STYLES =
  'font-display text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-[#4F5543] font-light';
const DESCRIPTION_STYLES = 'text-lg text-[#4F5543] max-w-md';
const BUTTON_STYLES =
  'bg-[#4F5543] text-white text-xs font-bold uppercase px-8 py-4 rounded hover:bg-[#4F5543]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F5543] transition-all shadow-lg transform hover:-translate-y-1 duration-200';
const IMAGE_CONTAINER_STYLES = 'w-full md:w-[45%] relative flex items-start';
const IMAGE_WRAPPER_STYLES =
  'aspect-[3/4] w-full max-h-[500px] relative overflow-hidden rounded-tl-[80px] rounded-br-[80px] shadow-2xl';

export function Hero() {
  const whatsappLink = getWhatsAppLink(
    env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    HERO_CONTENT.cta.whatsappMessage
  );

  const { subtitle, heading, description, cta, image } = HERO_CONTENT;

  return (
    <section
      id="inicio"
      className={SECTION_STYLES}
      role="region"
      aria-labelledby="hero-headline"
    >
      <div className={CONTAINER_STYLES}>
        <div className={TEXT_CONTAINER_STYLES}>
          <span className={SUBTITLE_STYLES}>{subtitle}</span>
          <h1 id="hero-headline" className={HEADING_STYLES}>
            {heading.text} <span className="italic">{heading.emphasis}</span>{' '}
            {heading.continuation}
          </h1>
          <p id="hero-description" className={DESCRIPTION_STYLES}>
            {description}
          </p>
          <div className="pt-4">
            <Button
              asChild
              className={BUTTON_STYLES}
              aria-describedby="hero-description"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                {cta.text}
              </a>
            </Button>
          </div>
        </div>

        <div className={IMAGE_CONTAINER_STYLES}>
          <div className={IMAGE_WRAPPER_STYLES}>
            <Image
              src={image.src}
              alt={image.alt}
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
