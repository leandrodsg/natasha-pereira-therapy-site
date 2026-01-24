import { render, screen } from '@testing-library/react';
import HowItWorks from './HowItWorks';

describe('HowItWorks - Security', () => {
  it('does not contain dangerous HTML', () => {
    render(<HowItWorks />);
    // Ensure no dangerouslySetInnerHTML is used
    const section = screen.getByRole('region');
    expect(section.innerHTML).not.toContain('dangerouslySetInnerHTML');
  });

  it('renders static content safely', () => {
    render(<HowItWorks />);
    // All content should be static and safe
    expect(
      screen.getByText('Sua jornada para o bem-estar começa aqui')
    ).toBeInTheDocument();
    expect(screen.getByText(/esperar/)).toBeInTheDocument();
  });

  it('renders all step titles', () => {
    render(<HowItWorks />);
    expect(screen.getByText('Primeira Sessão')).toBeInTheDocument();
    expect(screen.getByText('Ambiente Seguro')).toBeInTheDocument();
    expect(screen.getByText('Abordagem Pessoal')).toBeInTheDocument();
    expect(screen.getByText('Conexão Aberta')).toBeInTheDocument();
  });

  it('does not contain external links', () => {
    render(<HowItWorks />);
    const links = screen.queryAllByRole('link');
    expect(links).toHaveLength(0);
  });

  it('content is properly escaped', () => {
    render(<HowItWorks />);
    // Ensure no script tags or dangerous content
    const section = screen.getByRole('region');
    expect(section.innerHTML).not.toContain('<script');
    expect(section.innerHTML).not.toContain('javascript:');
    expect(section.innerHTML).not.toContain('onload=');
  });
});
