import Image from 'next/image';
import { ABOUT_CONTENT } from '@/lib/about-content';

const LAYOUT_WIDTHS = {
  content: 'w-full md:w-[55%]',
  image: 'w-full md:w-[45%]',
} as const;

const IMAGE_STYLES = {
  container: 'relative w-full max-w-sm md:max-w-md md:mt-6 md:ml-8',
  image:
    'relative z-10 w-full h-auto rounded-tr-[100px] rounded-bl-[100px] object-cover shadow-brand',
} as const;

export function AboutTherapist() {
  const { greeting, heading, paragraphs, image } = ABOUT_CONTENT;

  return (
    <section
      id="quem-sou"
      className="w-full bg-[#f4eee5]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
          <div className={`${LAYOUT_WIDTHS.content} order-2 md:order-1`}>
            <span className="block text-xs tracking-widest text-[#662B2D] mb-4">
              {greeting}
            </span>
            <h2
              id="about-heading"
              className="font-display text-4xl md:text-5xl text-[#662B2D] font-light mb-8"
            >
              {heading.text} {heading.emphasis} {heading.continuation}
            </h2>
            <div className="space-y-6 text-[#662B2D]/80">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div
            className={`${LAYOUT_WIDTHS.image} order-1 md:order-2 flex justify-center`}
          >
            <div className={IMAGE_STYLES.container}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={IMAGE_STYLES.image}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
