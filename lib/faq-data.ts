export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'primeiro-atendimento',
    question: 'Como funciona o primeiro atendimento?',
    answer:
      'No primeiro encontro, conversamos sobre o motivo que te trouxe até aqui, sua história, expectativas e como a terapia pode te ajudar. É um momento acolhedor, sem julgamentos, para entendermos juntas qual é o próximo passo mais saudável para você.',
  },
  {
    id: 'duracao-sessao',
    question: 'Quanto tempo dura cada sessão?',
    answer:
      'As sessões têm duração aproximada de 50 minutos, acontecendo geralmente 1 vez por semana, dependendo da sua necessidade.',
  },
  {
    id: 'publico-atendimento',
    question: 'Você atende apenas mulheres?',
    answer:
      'O foco do meu trabalho é o atendimento de mulheres, especialmente 40+, mas outros públicos também são acolhidos quando fazem sentido dentro da proposta clínica.',
  },
  {
    id: 'gestalt-terapia',
    question: 'O que é Gestalt-terapia?',
    answer:
      'A Gestalt-terapia é uma abordagem que te ajuda a compreender como você vive suas experiências no momento presente, suas emoções, pensamentos e sensações corporais. É um processo que promove consciência, responsabilidade e presença — ajudando você a se perceber, se posicionar melhor, criar limites saudáveis e romper padrões que te impedem de viver de forma mais leve e autêntica.',
  },
  {
    id: 'quando-buscar-terapia',
    question:
      'Preciso estar passando por algo "muito grave" para buscar terapia?',
    answer:
      'Não. A terapia é um espaço para quem deseja se entender melhor, organizar emoções, fortalecer autoestima, melhorar relações, lidar com ansiedade, culpa, sobrecarga… ou simplesmente para quem quer viver com mais leveza.',
  },
];

export const faqSectionContent = {
  label: 'Tire suas dúvidas',
  heading: 'Perguntas Frequentes',
  ctaText: 'Ainda tem dúvidas? Fale comigo',
  ctaMessage: 'Olá, tenho uma dúvida sobre o atendimento',
};
