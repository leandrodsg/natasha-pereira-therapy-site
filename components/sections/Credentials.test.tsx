import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Credentials } from './Credentials';

expect.extend(toHaveNoViolations);

describe('Credentials', () => {
  it('renders all 4 credential cards', () => {
    render(<Credentials />);

    expect(screen.getByText('7 anos de prática clínica')).toBeInTheDocument();
    expect(screen.getByText('Especialista em EMDR')).toBeInTheDocument();
    expect(screen.getByText('Mais de 11 mil sessões')).toBeInTheDocument();
    expect(screen.getByText('Além do consultório')).toBeInTheDocument();
  });

  it('renders all credential descriptions', () => {
    render(<Credentials />);

    expect(
      screen.getByText(
        'Um espaço seguro para ser você mesma, sem medo e sem julgamento.'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Técnica internacional para ressignificar traumas e desbloquear o que trava sua vida.'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Uma trajetória de confiança, onde você pode dizer o que nunca teve coragem.'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Palestras, rodas de conversa e um cuidado que vai além da sessão.'
      )
    ).toBeInTheDocument();
  });

  it('renders with marsala background color', () => {
    render(<Credentials />);

    const section = screen.getByRole('region', {
      name: 'Credenciais e experiência',
    });
    expect(section).toHaveClass('bg-[#662B2D]');
  });

  it('renders credential titles as h3 headings', () => {
    render(<Credentials />);

    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings).toHaveLength(4);
  });

  it('renders with responsive grid layout', () => {
    render(<Credentials />);

    const section = screen.getByRole('region', {
      name: 'Credenciais e experiência',
    });
    const grid = section.querySelector('.grid');

    expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4');
  });

  it('renders cards with glassmorphism styling', () => {
    render(<Credentials />);

    const card = screen.getByText('7 anos de prática clínica').closest('div');
    expect(card).toHaveClass(
      'bg-white/10',
      'backdrop-blur-sm',
      'rounded-2xl',
      'border',
      'border-white/20'
    );
  });

  it('renders icons for each credential', () => {
    const { container } = render(<Credentials />);

    // Check that SVG icons are rendered (lucide-react renders as SVG)
    const icons = container.querySelectorAll('svg');
    expect(icons).toHaveLength(4);
  });

  it('has correct padding alignment with other sections', () => {
    render(<Credentials />);

    const section = screen.getByRole('region', {
      name: 'Credenciais e experiência',
    });
    const container = section.querySelector('.max-w-7xl');

    expect(container).toHaveClass('px-6', 'md:px-12', 'py-12', 'md:py-16');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Credentials />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
