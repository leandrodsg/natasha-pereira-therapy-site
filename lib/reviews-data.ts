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
    id: 'review-1',
    name: 'Mônica',
    rating: 5,
    comment:
      'Excelente psicóloga. Natasha tem sido fundamental na minha vida. Estudiosa, ética, competente, humana, abordagem eficiente, atenciosa.',
    date: '5 de novembro de 2024',
    verified: true,
  },
  {
    id: 'review-2',
    name: 'Rúbia Cerqueira',
    rating: 5,
    comment:
      'Estou em terapia com a Natasha há 4 anos. Ela me acompanhou em várias questões complexas da vida. Sempre me apoiando, me ouvindo, me dando feedback. Escuta atenta e cuidadosa. Recomendo muito!',
    date: '5 de novembro de 2024',
    verified: true,
  },
  {
    id: 'review-3',
    name: 'Thaynara',
    rating: 5,
    comment:
      'Faço terapia com a Natasha desde 2023, desde então ela me acompanhou em vários momentos diferentes da minha vida, me ajudando a passar por diversas situações desafiadoras, como mudança de país e términos. Me sinto muito acolhida, confortável e segura para falar durante as sessões.',
    date: '18 de novembro de 2025',
    verified: true,
  },
  {
    id: 'review-4',
    name: 'Marco Venício',
    rating: 5,
    comment:
      'Estou em processo terapêutico com a Natasha há um ano aproximadamente. Passei por um ano muito difícil e o suporte profissional da Natasha me fortaleceu para enfrentar os mais difíceis desafios. Os encontros semanais ajudaram a clarear as ideias e tomar as melhores decisões.',
    date: '18 de novembro de 2025',
    verified: true,
  },
];

export const reviewsSectionContent = {
  label: 'Mais de 11 avaliações verificadas',
  heading: 'Palavras de quem se permitiu começar',
  averageRating: 5.0,
  totalReviews: 11,
};
