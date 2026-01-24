interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Primeira Sessão',
    description:
      'Conversamos sobre o que te trouxe até aqui, seus objetivos e como posso te acompanhar nessa jornada. Sem pressa, sem pressão.',
  },
  {
    number: 2,
    title: 'Ambiente Seguro',
    description:
      'Um espaço livre de julgamentos, onde você pode ser você mesma. Sigilo e acolhimento são a base de tudo.',
  },
  {
    number: 3,
    title: 'Abordagem Pessoal',
    description:
      'Cada pessoa é única. Adapto as técnicas ao que faz sentido para você, respeitando seu ritmo e suas necessidades.',
  },
  {
    number: 4,
    title: 'Conexão Aberta',
    description:
      'Você participa ativamente do processo. Dúvidas, desconfortos, descobertas — tudo tem espaço aqui.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-20 px-6 md:px-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/images/green-background.png)' }}
      aria-labelledby="how-it-works-heading"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-cream/80 mb-4">
          Sua Jornada Começa Aqui
        </p>
        <h2
          id="how-it-works-heading"
          className="font-display text-4xl md:text-5xl text-cream font-light max-w-3xl mx-auto leading-tight"
        >
          O que <span className="italic">esperar</span> durante as sessões
        </h2>
      </div>

      {/* Steps */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step) => (
          <article
            key={step.number}
            className="relative bg-[#EDE8E4] rounded-[2rem] p-10 pt-16 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
          >
            {/* Number circle */}
            <div
              className="absolute -top-8 w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center font-display text-2xl shadow-lg border-4 border-background"
              aria-hidden="true"
            >
              {step.number}
            </div>
            <h3 className="font-display text-3xl mb-4 text-secondary font-light">
              {step.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
