import { render, screen } from '@testing-library/react';
import HowItWorks from './HowItWorks';

describe('HowItWorks', () => {
  it('renders the label text', () => {
    render(<HowItWorks />);
    expect(
      screen.getByText('Sua jornada para o bem-estar começa aqui')
    ).toBeInTheDocument();
  });

  it('renders the main heading', () => {
    render(<HowItWorks />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/O que.*esperar.*durante as sess/);
  });

  it('renders heading with full text', () => {
    render(<HowItWorks />);
    const heading = screen.getByRole('heading', {
      name: /o que esperar durante as sessões/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders all four process steps', () => {
    render(<HowItWorks />);
    expect(screen.getByText('Primeira Sessão')).toBeInTheDocument();
    expect(screen.getByText('Ambiente Seguro')).toBeInTheDocument();
    expect(screen.getByText('Abordagem Pessoal')).toBeInTheDocument();
    expect(screen.getByText('Conexão Aberta')).toBeInTheDocument();
  });

  it('renders updated step descriptions', () => {
    render(<HowItWorks />);
    expect(
      screen.getByText(/Conversamos sobre seus objetivos/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Espaço livre de julgamentos/)).toBeInTheDocument();
    expect(
      screen.getByText(/Técnicas adaptadas ao seu ritmo/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Participação ativa com espaço/)
    ).toBeInTheDocument();
  });

  it('renders all step icons', () => {
    render(<HowItWorks />);
    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(4);
  });

  it('has correct semantic structure', () => {
    render(<HowItWorks />);
    const section = screen.getByRole('region', {
      name: /o que esperar durante as sessões/i,
    });
    expect(section).toBeInTheDocument();
    expect(section.tagName).toBe('SECTION');
  });

  it('renders step cards as articles', () => {
    render(<HowItWorks />);
    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(4);
  });

  it('applies background image to section', () => {
    render(<HowItWorks />);
    const section = screen.getByRole('region', {
      name: /o que esperar durante as sessões/i,
    });
    expect(section).toHaveStyle({
      backgroundImage: expect.stringContaining('green-background'),
    });
  });

  it('applies correct background color to step cards', () => {
    render(<HowItWorks />);
    const articles = screen.getAllByRole('article');
    articles.forEach((article) => {
      expect(article).toHaveClass('bg-[#f4eee5]');
    });
  });

  it('renders serif typography for titles', () => {
    render(<HowItWorks />);
    const headline = screen.getByRole('heading', { level: 2 });
    expect(headline).toHaveClass('font-display');

    const stepTitles = screen.getAllByRole('heading', { level: 3 });
    stepTitles.forEach((title) => {
      expect(title).toHaveClass('font-display');
    });
  });
});
