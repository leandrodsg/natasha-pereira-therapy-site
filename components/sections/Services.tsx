import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Atendimento Individual',
    description:
      'Um espaço seguro para falar de si, elaborar emoções e se escutar com mais profundidade. No seu tempo, com acolhimento e cuidado.',
    linkText: 'SAIBA MAIS',
    linkHref: '#',
  },
  {
    title: 'Roda de conversa',
    description:
      'Encontros para compartilhar, escutar e se reconhecer no outro. Diálogos que acolhem e fortalecem, sem julgamentos.',
    linkText: 'saiba mais',
    linkHref: '#',
  },
  {
    title: 'Terapia de grupo para mulheres',
    description:
      'Lugar seguro entre mulheres, onde histórias se encontram. Cuidar de si também é perceber que você não está sozinha.',
    linkText: 'saiba mais',
    linkHref: '#',
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="services py-16 px-4 bg-accent"
      aria-labelledby="services-title"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="services-title"
          className="section-title font-display text-5xl font-bold text-center text-gray-900 mb-12"
        >
          Como posso te ajudar?
        </h2>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
