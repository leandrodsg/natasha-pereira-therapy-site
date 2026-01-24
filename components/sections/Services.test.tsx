import { render, screen } from '@testing-library/react';
import Services from './Services';

describe('Services', () => {
  it('renders the main heading', () => {
    render(<Services />);
    expect(screen.getByText(/Serviços pensados para/)).toBeInTheDocument();
  });

  it('renders heading with italic text on "acolher"', () => {
    render(<Services />);
    const acolher = screen.getByText('acolher');
    expect(acolher).toHaveClass('italic');
  });

  it('renders the subheading', () => {
    render(<Services />);
    expect(
      screen.getByText(/Atendimento online focado em você/)
    ).toBeInTheDocument();
  });

  it('renders all four service cards', () => {
    render(<Services />);
    expect(screen.getByText('Atendimento Individual')).toBeInTheDocument();
    expect(screen.getByText('Roda de Conversa')).toBeInTheDocument();
    expect(
      screen.getByText('Terapia de Grupo para Mulheres')
    ).toBeInTheDocument();
    expect(screen.getByText('EMDR')).toBeInTheDocument();
  });

  it('renders updated service descriptions', () => {
    render(<Services />);
    expect(
      screen.getByText(/Sessões individuais para trabalhar questões pessoais/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Apoio para conexões mais profundas/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Um círculo seguro entre mulheres/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Técnica para ressignificar traumas/)
    ).toBeInTheDocument();
  });

  it('does not render "saiba mais" links', () => {
    render(<Services />);
    expect(screen.queryByText(/saiba mais/i)).not.toBeInTheDocument();
  });

  it('renders decorative images', () => {
    render(<Services />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThanOrEqual(2);

    const primeiraBox = screen.getByAltText(/blocos de madeira com emoções/i);
    expect(primeiraBox).toHaveAttribute(
      'src',
      expect.stringContaining('primeira-box')
    );

    const segundaBox = screen.getByAltText(/pessoa contemplando natureza/i);
    expect(segundaBox).toHaveAttribute(
      'src',
      expect.stringContaining('segunda-box')
    );
  });

  it('renders CTA button', () => {
    render(<Services />);
    const ctaButton = screen.getByRole('link', {
      name: /agende sua primeira sessão/i,
    });
    expect(ctaButton).toBeInTheDocument();
  });

  it('has correct semantic structure', () => {
    render(<Services />);
    const section = screen.getByRole('region', {
      name: /serviços pensados para/i,
    });
    expect(section).toBeInTheDocument();
    expect(section.tagName).toBe('SECTION');
  });

  it('applies background image to section', () => {
    render(<Services />);
    const section = screen.getByRole('region', {
      name: /serviços pensados para/i,
    });
    expect(section).toHaveStyle({
      backgroundImage: expect.stringContaining('white-background'),
    });
  });

  it('renders title with serif font and large size', () => {
    render(<Services />);
    const title = screen.getByText(/Serviços pensados para/);
    expect(title).toHaveClass('font-display');
  });

  it('renders title centered', () => {
    render(<Services />);
    const title = screen.getByText(/Serviços pensados para/);
    expect(title).toHaveClass('text-center');
  });

  it('renders grid layout for bento box', () => {
    render(<Services />);
    const grid = screen.getByTestId('services-grid');
    expect(grid).toHaveClass('grid');
  });
});
