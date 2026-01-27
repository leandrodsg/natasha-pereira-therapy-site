import Image from 'next/image';
import { PainPointCard } from './PainPointCard';
import { SOUND_FAMILIAR_CONTENT } from '@/lib/sound-familiar-content';

const SECTION_STYLES = 'w-full bg-[#4F5543] text-white relative';
const CONTAINER_STYLES = 'max-w-7xl mx-auto px-6 md:px-12 py-16';
const HEADING_WRAPPER_STYLES = 'mb-8 lg:mb-10 text-center';
const HEADING_STYLES =
  'font-display text-[2rem] md:text-[2.375rem] font-light leading-tight';
const LAYOUT_STYLES = 'flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10';
const IMAGE_SECTION_STYLES = 'w-full lg:w-[38%] relative flex items-start';
const IMAGE_WRAPPER_STYLES = 'relative w-[88%] max-w-sm mx-auto lg:mx-0';
const IMAGE_CONTAINER_STYLES =
  'relative w-full aspect-[3/4] rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-accent';
const CONTENT_SECTION_STYLES = 'w-full lg:w-[62%]';

export default function SoundFamiliar() {
  const { heading, image, painPoints } = SOUND_FAMILIAR_CONTENT;

  return (
    <section
      className={SECTION_STYLES}
      aria-labelledby="sound-familiar-heading"
      role="region"
    >
      <div className={CONTAINER_STYLES}>
        <header className={HEADING_WRAPPER_STYLES}>
          <h2 id="sound-familiar-heading" className={HEADING_STYLES}>
            {heading.text} {heading.emphasis} {heading.continuation}
          </h2>
        </header>

        <div className={LAYOUT_STYLES}>
          <div className={IMAGE_SECTION_STYLES}>
            <div className={IMAGE_WRAPPER_STYLES}>
              <div className={IMAGE_CONTAINER_STYLES}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
              </div>
            </div>
          </div>

          <div className={CONTENT_SECTION_STYLES}>
            <ul className="space-y-3 mx-auto lg:mx-0">
              {painPoints.map((point, index) => (
                <PainPointCard key={`pain-point-${index}`} text={point} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
