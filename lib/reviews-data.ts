export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export const reviewsData: Review[] = [
  {
    id: 'review-3',
    name: 'Eric Bispo',
    rating: 5,
    comment:
      'Excelente psicóloga. Natasha tem sido fundamental na minha vida. Estudiosa, ética, competente, humana, abordagem eficiente, atenciosa.',
    date: '25 de setembro de 2024',
    verified: true,
  },
  {
    id: 'review-4',
    name: 'Mônica',
    rating: 5,
    comment:
      'Excelente psicóloga. Natasha tem sido fundamental na minha vida. Estudiosa, ética, competente, humana, abordagem eficiente, atenciosa.',
    date: '25 de setembro de 2024',
    verified: true,
  },
  {
    id: 'review-5',
    name: 'Paciente Anônimo',
    rating: 5,
    comment: 'Profissional excepcional, muito atenciosa e dedicada.',
    date: '20 de agosto de 2024',
    verified: true,
  },
  {
    id: 'review-6',
    name: 'Paciente Anônimo',
    rating: 5,
    comment: 'Recomendo fortemente. Mudou minha perspectiva de vida.',
    date: '15 de julho de 2024',
    verified: true,
  },
];

export const reviewsSectionContent = {
  label: 'Mais de 11 avaliações verificadas',
  heading: 'Histórias de quem já passou por aqui',
  averageRating: 5.0,
  totalReviews: 11,
};
