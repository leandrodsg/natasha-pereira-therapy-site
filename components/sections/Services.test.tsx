import { render, screen } from '@testing-library/react';
import Services from './Services';

describe('Services', () => {
  it('renders the section title', () => {
    render(<Services />);
    expect(screen.getByText('Como posso te ajudar?')).toBeInTheDocument();
  });

  it('renders all three service cards', () => {
    render(<Services />);
    expect(screen.getByText('Atendimento Individual')).toBeInTheDocument();
    expect(screen.getByText('Roda de conversa')).toBeInTheDocument();
    expect(
      screen.getByText('Terapia de grupo para mulheres')
    ).toBeInTheDocument();
  });

  it('renders service descriptions', () => {
    render(<Services />);
    expect(
      screen.getByText(/Um espaço seguro para falar de si/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Encontros para compartilhar/)).toBeInTheDocument();
    expect(screen.getByText(/Lugar seguro entre mulheres/)).toBeInTheDocument();
  });

  it('renders service links', () => {
    render(<Services />);
    expect(screen.getByText('SAIBA MAIS')).toBeInTheDocument();
    expect(screen.getAllByText('saiba mais')).toHaveLength(2);
  });

  it('has correct semantic structure', () => {
    render(<Services />);
    const section = screen.getByRole('region', {
      name: /como posso te ajudar/i,
    });
    expect(section).toBeInTheDocument();
    expect(section.tagName).toBe('SECTION');
  });

  it('applies beige background to section', () => {
    render(<Services />);
    const section = screen.getByRole('region', {
      name: /como posso te ajudar/i,
    });
    expect(section).toHaveClass('bg-accent');
  });

  it('renders title with serif font and large size', () => {
    render(<Services />);
    const title = screen.getByText('Como posso te ajudar?');
    expect(title).toHaveClass('font-display', 'text-5xl');
  });

  it('renders title centered', () => {
    render(<Services />);
    const title = screen.getByText('Como posso te ajudar?');
    expect(title).toHaveClass('text-center');
  });
});
