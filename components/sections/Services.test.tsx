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

  it('renders images with alt text', () => {
    render(<Services />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3);
    expect(images[0]).toHaveAttribute('alt', 'Atendimento Individual');
    expect(images[1]).toHaveAttribute('alt', 'Roda de conversa');
    expect(images[2]).toHaveAttribute('alt', 'Terapia de grupo para mulheres');
  });
});
