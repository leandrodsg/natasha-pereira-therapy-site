import { ArrowRight } from 'lucide-react';

const soundFamiliarItems = [
  'Sobrecarga emocional',
  'Dificuldade em estabelecer limites',
  'Medo de desapontar os outros',
  'Culpa ao priorizar a si mesma',
  'Sensação de estar sempre "dividida"',
  'Pressão por ser forte o tempo todo',
];

export default function SoundFamiliar() {
  return (
    <section
      className="sound-familiar py-16 md:py-24 bg-gray-50"
      aria-labelledby="sound-familiar-heading"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2
          id="sound-familiar-heading"
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 text-center mb-12"
        >
          Isso soa familiar?
        </h2>
        <ul className="space-y-4 md:space-y-6">
          {soundFamiliarItems.map((item, index) => (
            <li key={index} className="flex items-start space-x-4">
              <ArrowRight
                data-testid="arrow-icon"
                className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                aria-hidden="true"
              />
              <span className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
