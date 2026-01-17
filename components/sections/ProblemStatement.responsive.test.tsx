import { render, screen } from '@testing-library/react';
import ProblemStatement from './ProblemStatement';

describe('ProblemStatement - Responsive', () => {
  it('renders with centered layout and white background', () => {
    render(<ProblemStatement />);

    const section = screen.getByRole('region', {
      name: 'Você está aqui porque encontrar paz é importante para você.',
    });
    expect(section).toHaveClass('text-center', 'bg-white');
  });

  it('has responsive padding', () => {
    render(<ProblemStatement />);

    const section = screen.getByRole('region', {
      name: 'Você está aqui porque encontrar paz é importante para você.',
    });
    expect(section).toHaveClass('px-6', 'md:px-12');
  });

  it('has responsive text sizes', () => {
    render(<ProblemStatement />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass('text-4xl', 'md:text-5xl');

    const paragraph = screen.getByText(/Para mulheres que carregam/);
    expect(paragraph).toHaveClass('text-sm');
  });

  it('has responsive container max-width', () => {
    render(<ProblemStatement />);

    const container = screen
      .getByText('Você está aqui porque', { exact: false })
      .closest('div');
    expect(container).toHaveClass('max-w-3xl', 'mx-auto');
  });

  it('has responsive paragraph padding', () => {
    render(<ProblemStatement />);

    const paragraph = screen.getByText(/Para mulheres que carregam/);
    expect(paragraph).toHaveClass('md:px-12');
  });
});
