interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Entre em contato.',
    description:
      'Agende uma conversa inicial gratuita via WhatsApp para falarmos sobre suas necessidades e objetivos.',
  },
  {
    number: 2,
    title: 'Inicie sua jornada.',
    description:
      'Nas primeiras sessões, nos conhecemos e definimos os objetivos a serem alcançados na terapia.',
  },
  {
    number: 3,
    title: 'Transforme sua vida.',
    description:
      'Com sessões semanais de 50 minutos, desenvolvemos estratégias práticas para seu bem-estar.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-24 px-6 md:px-12 bg-background"
      aria-labelledby="how-it-works-heading"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
          Como Funciona
        </p>
        <h2
          id="how-it-works-heading"
          className="font-display text-4xl md:text-5xl text-foreground font-light max-w-3xl mx-auto leading-tight"
        >
          O que você precisa agora é de{' '}
          <span className="italic">facilidade</span>. Estou aqui para te ajudar
          a <span className="italic">simplificar</span> o processo enquanto você
          começa sua jornada.
        </h2>
      </div>

      {/* Steps */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
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
