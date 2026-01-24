import { render, screen } from '@testing-library/react';
import HowItWorks from './HowItWorks';

describe('HowItWorks', () => {
  it('renders the label text', () => {
    render(<HowItWorks />);
    expect(screen.getByText('Sua Jornada Começa Aqui')).toBeInTheDocument();
  });

  it('renders the main heading', () => {
    render(<HowItWorks />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(/O que.*esperar.*durante as sess/);
  });

  it('renders heading with italic text on "esperar"', () => {
    render(<HowItWorks />);
    const esperar = screen.getByText('esperar');
    expect(esperar).toHaveClass('italic');
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
      screen.getByText(/Conversamos sobre o que te trouxe até aqui/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Um espaço livre de julgamentos/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Cada pessoa é única/)).toBeInTheDocument();
    expect(
      screen.getByText(/Você participa ativamente do processo/)
    ).toBeInTheDocument();
  });

  it('renders step numbers in circles', () => {
    render(<HowItWorks />);
    const circles = screen.getAllByText(/[1-4]/);
    expect(circles).toHaveLength(4);
    expect(circles[0]).toHaveTextContent('1');
    expect(circles[1]).toHaveTextContent('2');
    expect(circles[2]).toHaveTextContent('3');
    expect(circles[3]).toHaveTextContent('4');
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
      expect(article).toHaveClass('bg-[#EDE8E4]');
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
