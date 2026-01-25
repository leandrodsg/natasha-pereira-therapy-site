import {
  Clock,
  GraduationCap,
  Heart,
  Sparkles,
  LucideIcon,
} from 'lucide-react';

export interface CredentialItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const CREDENTIALS: readonly CredentialItem[] = [
  {
    id: 'experience',
    icon: Clock,
    title: '7 anos de prática clínica',
    description:
      'Um espaço seguro para ser você mesma, sem medo e sem julgamento.',
  },
  {
    id: 'specialization',
    icon: GraduationCap,
    title: 'Especialista em EMDR',
    description:
      'Técnica internacional para ressignificar traumas e desbloquear o que trava sua vida.',
  },
  {
    id: 'sessions',
    icon: Heart,
    title: 'Mais de 11 mil sessões',
    description:
      'Uma trajetória de confiança, onde você pode dizer o que nunca teve coragem.',
  },
  {
    id: 'beyond',
    icon: Sparkles,
    title: 'Além do consultório',
    description:
      'Palestras, rodas de conversa e um cuidado que vai além da sessão.',
  },
] as const;
