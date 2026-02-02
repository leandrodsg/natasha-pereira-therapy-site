import { User, MessageCircle, Heart, Brain, LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SERVICES: readonly ServiceItem[] = [
  {
    id: 'individual',
    title: 'Atendimento Individual',
    description:
      'Sessões individuais para trabalhar questões pessoais e redescobrir clareza.',
    icon: User,
  },
  {
    id: 'roda-conversa',
    title: 'Roda de Conversa',
    description: 'Apoio para conexões mais profundas e comunicação saudável.',
    icon: MessageCircle,
  },
  {
    id: 'terapia-grupo',
    title: 'Terapia de Grupo para Mulheres',
    description:
      'Um círculo seguro entre mulheres para fala, escuta e fortalecimento mútuo.',
    icon: Heart,
  },
  {
    id: 'emdr',
    title: 'EMDR',
    description:
      'Técnica para ressignificar traumas e desbloquear o que te impede de ser livre.',
    icon: Brain,
  },
] as const;

export const SERVICES_CONTENT = {
  heading: {
    text: 'Atendimentos pensados para',
    emphasis: 'acolher',
    continuation: 'sua jornada',
  },
  subtitle:
    'Atendimento online focado em você: suas necessidades, seu tempo, sua forma de ser.',
  cta: 'Descubra como posso te ajudar',
  decorativeImages: [
    {
      src: '/images/primeira-box.png',
      alt: 'Blocos de madeira com emoções',
    },
    {
      src: '/images/segunda-box.jpeg',
      alt: 'Pessoa contemplando natureza',
    },
  ],
} as const;
