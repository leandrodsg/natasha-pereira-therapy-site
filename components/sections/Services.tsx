import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Atendimento Individual',
    description:
      'Um espaço seguro para falar de si, elaborar emoções e se escutar com mais profundidade. No seu tempo, com acolhimento e cuidado.',
    imageSrc:
      'https://via.placeholder.com/400x300/7a8b6f/f5f2ed?text=Atendimento+Individual',
    imageAlt: 'Atendimento Individual',
    linkText: 'SAIBA MAIS',
    linkHref: '#',
  },
  {
    title: 'Roda de conversa',
    description:
      'Encontros para compartilhar, escutar e se reconhecer no outro. Diálogos que acolhem e fortalecem, sem julgamentos.',
    imageSrc:
      'https://via.placeholder.com/400x300/c4a88a/f5f2ed?text=Roda+de+Conversa',
    imageAlt: 'Roda de conversa',
    linkText: 'saiba mais',
    linkHref: '#',
  },
  {
    title: 'Terapia de grupo para mulheres',
    description:
      'Lugar seguro entre mulheres, onde histórias se encontram. Cuidar de si também é perceber que você não está sozinha.',
    imageSrc:
      'https://via.placeholder.com/400x300/333333/f5f2ed?text=Terapia+de+Grupo',
    imageAlt: 'Terapia de grupo para mulheres',
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
          className="section-title text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
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
