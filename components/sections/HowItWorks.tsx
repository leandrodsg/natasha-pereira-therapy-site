import { Pencil, ShieldCheck, HandHeart, Heart } from 'lucide-react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Primeira Sessão',
    description:
      'Conversamos sobre seus objetivos e como posso acompanhar sua jornada.',
    icon: Pencil,
  },
  {
    number: 2,
    title: 'Ambiente Seguro',
    description: 'Espaço livre de julgamentos com sigilo e acolhimento.',
    icon: ShieldCheck,
  },
  {
    number: 3,
    title: 'Abordagem Pessoal',
    description: 'Técnicas adaptadas ao seu ritmo e necessidades únicas.',
    icon: HandHeart,
  },
  {
    number: 4,
    title: 'Conexão Aberta',
    description: 'Participação ativa com espaço para dúvidas e descobertas.',
    icon: Heart,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-16 bg-[#4F5543]"
      aria-labelledby="how-it-works-heading"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-18 px-6 md:px-12">
        <span className="block text-sm tracking-widest text-white mb-4">
          Sua jornada para o bem-estar começa aqui
        </span>
        <h2
          id="how-it-works-heading"
          className="font-display text-4xl md:text-5xl text-white font-light max-w-3xl mx-auto leading-tight"
        >
          O que esperar durante as sessões
        </h2>
      </div>

      {/* Steps */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {processSteps.map((step) => {
          const Icon = step.icon;
          return (
            <article
              key={step.number}
              className="relative bg-[#f4eee5] rounded-[2rem] px-5 py-6 pt-12 flex flex-col items-center text-center hover:shadow-xl transition-shadow w-full"
            >
              {/* Icon circle */}
              <div
                className="absolute -top-7 w-14 h-14 bg-[#C58C77] text-white rounded-full flex items-center justify-center shadow-lg border-4 border-[#f4eee5]"
                aria-hidden="true"
              >
                <Icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl mb-2 text-[#8B5541] font-light">
                {step.title}
              </h3>
              <p className="text-sm text-[#3D4235] leading-relaxed">
                {step.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
