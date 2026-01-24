import Image from 'next/image';
import { PainPointCard } from './PainPointCard';

const painPoints = [
  'Você sente uma sobrecarga emocional constante, como se carregasse o mundo nos ombros.',
  'Estabelecer limites parece impossível - você sempre acaba cedendo.',
  'O medo de desapontar os outros te paralisa nas decisões.',
  'Culpa ao priorizar você mesma, como se fosse egoísmo.',
  'Sensação de estar sempre "dividida" entre papéis e expectativas.',
  'Pressão por ser forte o tempo todo, sem espaço para vulnerabilidade.',
];

export default function SoundFamiliar() {
  return (
    <section
      className="w-full bg-[#4F5543] text-white relative"
      aria-labelledby="sound-familiar-heading"
      role="region"
      aria-label="Seção Isso soa familiar"
    >
      {/* Container para centralizar conteúdo */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Heading Principal - Largura Total */}
        <div className="mb-8 lg:mb-10 text-center">
          <h2
            id="sound-familiar-heading"
            className="font-display text-[2rem] md:text-[2.375rem] font-light leading-tight"
          >
            Você está aqui porque <span className="italic">encontrar paz</span>{' '}
            é importante para você.
          </h2>
        </div>

        {/* Layout com imagem e lista */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10">
          {/* Imagem */}
          <div
            data-testid="sound-familiar-image"
            className="w-full lg:w-[38%] relative flex items-start"
          >
            <div className="relative w-[88%] max-w-sm mx-auto lg:mx-0">
              <div
                data-testid="sound-familiar-image-container"
                className="relative w-full aspect-[3/4] rounded-tr-[80px] rounded-bl-[80px] overflow-hidden"
                style={{
                  boxShadow:
                    '12px 12px 0px 0px rgba(134, 139, 108, 0.35), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                }}
              >
                <Image
                  src="/images/encontrar-paz.png"
                  alt="Natasha Pereira em ambiente pensativo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
              </div>
            </div>
          </div>

          {/* Lista de Cards */}
          <div
            data-testid="sound-familiar-content"
            className="w-full lg:w-[62%]"
          >
            <ul className="space-y-3 mx-auto lg:mx-0">
              {painPoints.map((point, index) => (
                <PainPointCard key={index} text={point} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
