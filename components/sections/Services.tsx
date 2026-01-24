import Image from 'next/image';
import Link from 'next/link';
import ServiceCard from './ServiceCard';
import { User, MessageCircle, Heart, Brain } from 'lucide-react';

const services = [
  {
    title: 'Atendimento Individual',
    description:
      'Sessões individuais para trabalhar questões pessoais e redescobrir clareza.',
    icon: <User />,
  },
  {
    title: 'Roda de Conversa',
    description: 'Apoio para conexões mais profundas e comunicação saudável.',
    icon: <MessageCircle />,
  },
  {
    title: 'Terapia de Grupo para Mulheres',
    description:
      'Um círculo seguro entre mulheres para fala, escuta e fortalecimento mútuo.',
    icon: <Heart />,
  },
  {
    title: 'EMDR',
    description:
      'Técnica para ressignificar traumas e desbloquear o que te impede de ser livre.',
    icon: <Brain />,
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="services min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/images/white-background.png)' }}
      aria-labelledby="services-title"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h2
            id="services-title"
            className="section-title font-display text-4xl md:text-5xl font-light text-center text-[#662B2D] mb-4"
          >
            Serviços pensados para <span className="italic">acolher</span> sua
            jornada
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada atendimento é pensado para te ajudar a se sentir mais segura,
            compreendida e fortalecida — no seu tempo, do seu jeito.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div
          data-testid="services-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 auto-rows-[160px]"
        >
          {/* Decorative Image 1 - Top Left */}
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/images/primeira-box.png"
              alt="Blocos de madeira com emoções"
              width={400}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Service Card 1 */}
          <ServiceCard {...services[0]} />

          {/* Service Card 2 */}
          <ServiceCard {...services[1]} />

          {/* Service Card 3 */}
          <ServiceCard {...services[2]} />

          {/* Service Card 4 - EMDR */}
          <ServiceCard {...services[3]} />

          {/* Decorative Image 2 - Bottom Right */}
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/images/segunda-box.jpeg"
              alt="Pessoa contemplando natureza"
              width={400}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="#contato"
            className="inline-block bg-[#662B2D] text-white px-8 py-3 rounded-full font-medium hover:bg-[#662B2D]/90 transition-colors duration-200"
          >
            Agende sua primeira sessão
          </Link>
        </div>
      </div>
    </section>
  );
}
