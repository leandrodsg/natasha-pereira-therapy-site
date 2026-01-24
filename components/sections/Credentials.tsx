import { Clock, GraduationCap, Heart, Sparkles } from 'lucide-react';

export function Credentials() {
  const items = [
    {
      icon: Clock,
      title: '7 anos de prática clínica',
      description:
        'Um espaço seguro para ser você mesma, sem medo e sem julgamento.',
    },
    {
      icon: GraduationCap,
      title: 'Especialista em EMDR',
      description:
        'Técnica internacional para ressignificar traumas e desbloquear o que trava sua vida.',
    },
    {
      icon: Heart,
      title: 'Mais de 11 mil sessões',
      description:
        'Uma trajetória de confiança, onde você pode dizer o que nunca teve coragem.',
    },
    {
      icon: Sparkles,
      title: 'Além do consultório',
      description:
        'Palestras, rodas de conversa e um cuidado que vai além da sessão.',
    },
  ];

  return (
    <section
      className="w-full bg-[#662B2D]"
      aria-label="Credenciais e experiência"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#C58C77]/35 backdrop-blur-sm rounded-2xl p-6 border border-[#C58C77]/20 hover:bg-[#C58C77]/50 transition-colors"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-[#f4eee5]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg md:text-xl text-[#f4eee5] font-medium mb-3">
                  {item.title}
                </h3>
                <p className="text-[#f4eee5]/90 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
