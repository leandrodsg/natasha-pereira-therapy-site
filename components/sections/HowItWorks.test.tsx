import { render, screen } from '@testing-library/react';
import HowItWorks from './HowItWorks';

describe('HowItWorks', () => {
  it('renders the section with subtitle', () => {
    render(<HowItWorks />);
    expect(screen.getByText('Como Funciona')).toBeInTheDocument();
  });

  it('renders the main headline', () => {
    render(<HowItWorks />);
    expect(
      screen.getByText(/O que você precisa agora é de/)
    ).toBeInTheDocument();
  });

  it('renders headline with italic text', () => {
    render(<HowItWorks />);
    const facilidade = screen.getByText('facilidade');
    const simplificar = screen.getByText('simplificar');
    expect(facilidade).toHaveClass('italic');
    expect(simplificar).toHaveClass('italic');
  });

  it('renders all three process steps', () => {
    render(<HowItWorks />);
    expect(screen.getByText('Entre em contato.')).toBeInTheDocument();
    expect(screen.getByText('Inicie sua jornada.')).toBeInTheDocument();
    expect(screen.getByText('Transforme sua vida.')).toBeInTheDocument();
  });

  it('renders step descriptions', () => {
    render(<HowItWorks />);
    expect(
      screen.getByText(/Agende uma conversa inicial gratuita/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Nas primeiras sessões, nos conhecemos/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Com sessões semanais de 50 minutos/)
    ).toBeInTheDocument();
  });

  it('renders step numbers in circles', () => {
    render(<HowItWorks />);
    const circles = screen.getAllByText(/[1-3]/);
    expect(circles).toHaveLength(3);
    expect(circles[0]).toHaveTextContent('1');
    expect(circles[1]).toHaveTextContent('2');
    expect(circles[2]).toHaveTextContent('3');
  });

  it('has correct semantic structure', () => {
    render(<HowItWorks />);
    const section = screen.getByRole('region', {
      name: /o que você precisa agora é de/i,
    });
    expect(section).toBeInTheDocument();
    expect(section.tagName).toBe('SECTION');
  });

  it('renders step cards as articles', () => {
    render(<HowItWorks />);
    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(3);
  });

  it('applies correct background color to step cards', () => {
    render(<HowItWorks />);
    const articles = screen.getAllByRole('article');
    articles.forEach((article) => {
      expect(article).toHaveClass('bg-[#EDE8E4]');
    });
  });

  it('renders serif typography for titles', () => {
    render(<HowItWorks />);
    const headline = screen.getByText(/O que você precisa agora é de/);
    expect(headline).toHaveClass('font-display');

    const stepTitles = screen.getAllByRole('heading', { level: 3 });
    stepTitles.forEach((title) => {
      expect(title).toHaveClass('font-display');
    });
  });
});
