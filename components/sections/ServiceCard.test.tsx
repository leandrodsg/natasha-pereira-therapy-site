import { render, screen } from '@testing-library/react';
import ServiceCard from './ServiceCard';

const mockService = {
  title: 'Atendimento Individual',
  description:
    'Um espaço seguro para falar de si, elaborar emoções e se escutar com mais profundidade.',
  imageSrc:
    'https://via.placeholder.com/400x300/7a8b6f/f5f2ed?text=Atendimento+Individual',
  imageAlt: 'Atendimento Individual',
  linkText: 'SAIBA MAIS',
  linkHref: '#',
};

describe('ServiceCard', () => {
  it('renders service title', () => {
    render(<ServiceCard {...mockService} />);
    expect(screen.getByText('Atendimento Individual')).toBeInTheDocument();
  });

  it('renders service description', () => {
    render(<ServiceCard {...mockService} />);
    expect(
      screen.getByText(/Um espaço seguro para falar de si/)
    ).toBeInTheDocument();
  });

  it('renders image with correct alt text', () => {
    render(<ServiceCard {...mockService} />);
    const image = screen.getByAltText('Atendimento Individual');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('via.placeholder.com')
    );
  });

  it('renders link with correct text', () => {
    render(<ServiceCard {...mockService} />);
    const link = screen.getByText('SAIBA MAIS');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#');
  });

  it('has correct semantic structure', () => {
    render(<ServiceCard {...mockService} />);
    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
  });

  it('renders link as accessible element', () => {
    render(<ServiceCard {...mockService} />);
    const link = screen.getByRole('link', { name: 'SAIBA MAIS' });
    expect(link).toBeInTheDocument();
  });
});
