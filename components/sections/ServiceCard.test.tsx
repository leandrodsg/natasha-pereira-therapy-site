import { render, screen } from '@testing-library/react';
import ServiceCard from './ServiceCard';

const mockService = {
  title: 'Atendimento Individual',
  description:
    'Um espaço seguro para falar de si, elaborar emoções e se escutar com mais profundidade.',
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

  it('applies white background to card', () => {
    render(<ServiceCard {...mockService} />);
    const article = screen.getByRole('article');
    expect(article).toHaveClass('bg-white');
  });

  it('applies hover lift effect', () => {
    render(<ServiceCard {...mockService} />);
    const article = screen.getByRole('article');
    expect(article).toHaveClass('hover:-translate-y-2');
  });

  it('applies shadow on hover', () => {
    render(<ServiceCard {...mockService} />);
    const article = screen.getByRole('article');
    expect(article).toHaveClass('hover:shadow-xl');
  });

  it('renders title with serif font and large size', () => {
    render(<ServiceCard {...mockService} />);
    const title = screen.getByText('Atendimento Individual');
    expect(title).toHaveClass('font-display', 'text-xl');
  });

  it('renders button with pill style', () => {
    render(<ServiceCard {...mockService} />);
    const button = screen.getByText('SAIBA MAIS');
    expect(button).toHaveClass('rounded-full', 'bg-secondary');
  });

  it('renders button with uppercase text and tracking', () => {
    render(<ServiceCard {...mockService} />);
    const button = screen.getByText('SAIBA MAIS');
    expect(button).toHaveClass('uppercase', 'tracking-widest');
  });
});
