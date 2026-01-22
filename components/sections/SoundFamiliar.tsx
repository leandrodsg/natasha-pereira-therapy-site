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
      className="w-full bg-primary text-white relative"
      aria-labelledby="sound-familiar-heading"
      role="region"
      aria-label="Seção Isso soa familiar"
      style={{
        backgroundImage: 'url(/images/problem-back.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Container para centralizar conteúdo */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-16">
        {/* Heading Principal - Largura Total */}
        <div className="mb-8 lg:mb-10">
          <h2
            id="sound-familiar-heading"
            className="font-display text-2xl sm:text-3xl md:text-[2.25rem] lg:text-[2.85rem] font-light leading-tight"
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
            className="w-full lg:w-[38%] relative"
          >
            <div
              data-testid="sound-familiar-image-container"
              className="w-full h-full max-w-md mx-auto lg:mx-0 lg:max-w-none relative rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/ProblemStatement.jpg"
                alt="Natasha Pereira em ambiente pensativo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
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
