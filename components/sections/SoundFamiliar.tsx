import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const soundFamiliarItems = [
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
      className="w-full flex flex-col md:flex-row mt-24 md:mt-32"
      aria-labelledby="sound-familiar-heading"
      role="region"
      aria-label="Seção Isso soa familiar"
    >
      {/* Imagem */}
      <div
        data-testid="sound-familiar-image"
        className="w-full md:w-5/12 relative h-[400px] md:h-auto bg-background p-6 md:p-12 flex items-center justify-center"
      >
        <div
          data-testid="sound-familiar-image-container"
          className="w-full h-full relative z-10 rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-xl aspect-[4/5]"
        >
          <Image
            src="/images/segunda.jpg"
            alt="Ambiente acolhedor com plantas e luz natural"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>
      </div>

      {/* Conteúdo */}
      <div
        data-testid="sound-familiar-content"
        className="w-full md:w-7/12 bg-primary text-white p-12 md:p-20 flex flex-col justify-center"
      >
        <h2
          id="sound-familiar-heading"
          className="font-display text-4xl md:text-5xl mb-12 font-light"
        >
          Isso soa familiar?
        </h2>
        <ul className="space-y-8">
          {soundFamiliarItems.map((item, index) => (
            <li key={index} className="flex items-start gap-6 group">
              <ArrowRight
                data-testid="arrow-icon"
                className="mt-1 opacity-70 group-hover:translate-x-1 transition-transform flex-shrink-0"
                aria-hidden="true"
              />
              <p className="text-sm font-light leading-relaxed opacity-90">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
