import Image from 'next/image';
import Link from 'next/link';
import ServiceCard from './ServiceCard';
import { SERVICES, SERVICES_CONTENT } from '@/lib/services-data';

const SECTION_STYLES = 'services min-h-screen flex items-center bg-[#f4eee5]';
const CONTAINER_STYLES = 'w-full max-w-7xl mx-auto px-6 md:px-12 py-16';
const HEADER_STYLES = 'text-center mb-10';
const TITLE_STYLES =
  'font-display text-4xl md:text-5xl font-light text-center text-[#662B2D] mb-4';
const SUBTITLE_STYLES =
  'text-muted-foreground max-w-3xl mx-auto leading-relaxed';
const GRID_STYLES =
  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 auto-rows-[180px] md:auto-rows-[160px]';
const IMAGE_STYLES = 'rounded-2xl overflow-hidden shadow-sm';
const CTA_STYLES =
  'inline-block bg-[#662B2D] text-white px-8 py-3 rounded-full font-medium hover:bg-[#662B2D]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#662B2D] transition-colors duration-200';

export default function Services() {
  const { heading, subtitle, cta, decorativeImages } = SERVICES_CONTENT;

  return (
    <section
      id="servicos"
      className={SECTION_STYLES}
      aria-labelledby="services-title"
    >
      <div className={CONTAINER_STYLES}>
        <header className={HEADER_STYLES}>
          <h2 id="services-title" className={TITLE_STYLES}>
            {heading.text} <span className="italic">{heading.emphasis}</span>{' '}
            {heading.continuation}
          </h2>
          <p className={SUBTITLE_STYLES}>{subtitle}</p>
        </header>

        <div className={GRID_STYLES}>
          <div className={IMAGE_STYLES}>
            <Image
              src={decorativeImages[0].src}
              alt={decorativeImages[0].alt}
              width={400}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>

          {SERVICES.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}

          <div className={IMAGE_STYLES}>
            <Image
              src={decorativeImages[1].src}
              alt={decorativeImages[1].alt}
              width={400}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center">
          <Link href="#contato" className={CTA_STYLES}>
            {cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
