import Image from 'next/image';

const SECTION_STYLES = {
  section: 'py-16 bg-[#E8E4DF]',
  container: 'max-w-7xl mx-auto px-6 md:px-12',
  heading:
    'font-display text-4xl md:text-5xl text-[#4F5543] font-light text-center mb-12',
  widgetWrapper: 'flex justify-center',
  imageLink:
    'inline-block rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200',
} as const;

const DOCTORALIA_URL =
  'https://www.doctoralia.com.br/natasha-pereira-2/psicologo/brasilia';

export default function DoctoraliaWidget() {
  return (
    <section
      id="avaliacoes"
      className={SECTION_STYLES.section}
      aria-labelledby="doctoralia-heading"
    >
      <div className={SECTION_STYLES.container}>
        <h2 id="doctoralia-heading" className={SECTION_STYLES.heading}>
          Histórias de quem já passou por aqui
        </h2>

        <div className={SECTION_STYLES.widgetWrapper}>
          <a
            href={DOCTORALIA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={SECTION_STYLES.imageLink}
            aria-label="Ver perfil no Doctoralia"
          >
            <Image
              src="/images/doctoralia.png"
              alt="Perfil de Natasha Pereira no Doctoralia"
              width={450}
              height={338}
              priority
            />
          </a>
        </div>
      </div>
    </section>
  );
}
