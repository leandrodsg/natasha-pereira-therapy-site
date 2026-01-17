import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import ProblemStatement from './ProblemStatement';

expect.extend(toHaveNoViolations);

describe('ProblemStatement', () => {
  it('renders the problem statement with elegant layout', () => {
    render(<ProblemStatement />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(
      'Você está aqui porque encontrar paz é importante para você.'
    );

    const paragraph = screen.getByText(
      'Para mulheres que carregam histórias, decisões, pressões, dúvidas e desejam se ouvir com mais força e liberdade.'
    );
    expect(paragraph).toBeInTheDocument();
  });

  it('renders headline with italic emphasis', () => {
    render(<ProblemStatement />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass(
      'font-display',
      'text-4xl',
      'md:text-5xl',
      'font-light'
    );

    // Check for italic span
    const italicSpan = screen.getByText('encontrar paz');
    expect(italicSpan).toHaveClass('italic');
  });

  it('renders with white background and centered layout', () => {
    render(<ProblemStatement />);

    const section = screen.getByRole('region', {
      name: 'Você está aqui porque encontrar paz é importante para você.',
    });
    expect(section).toHaveClass(
      'bg-white',
      'text-center',
      'py-24',
      'px-6',
      'md:px-12'
    );
  });

  it('renders with max-width container', () => {
    render(<ProblemStatement />);

    const container = screen
      .getByText('Você está aqui porque', { exact: false })
      .closest('div');
    expect(container).toHaveClass('max-w-3xl', 'mx-auto', 'space-y-6');
  });

  it('renders subtitle with muted styling', () => {
    render(<ProblemStatement />);

    const paragraph = screen.getByText(/Para mulheres que carregam/);
    expect(paragraph).toHaveClass(
      'text-muted-foreground',
      'text-sm',
      'leading-relaxed',
      'md:px-12'
    );
  });

  it('has correct semantic structure', () => {
    render(<ProblemStatement />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveAttribute('id', 'problem-statement-heading');

    const section = screen.getByRole('region', {
      name: 'Você está aqui porque encontrar paz é importante para você.',
    });
    expect(section).toHaveAttribute(
      'aria-labelledby',
      'problem-statement-heading'
    );
  });

  it('is accessible', async () => {
    const { container } = render(<ProblemStatement />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
