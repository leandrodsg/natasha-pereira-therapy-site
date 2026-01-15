import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import ProblemStatement from './ProblemStatement';

expect.extend(toHaveNoViolations);

describe('ProblemStatement', () => {
  it('renders the problem statement text in Portuguese', () => {
    render(<ProblemStatement />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Para mulheres que carregam histórias');

    const paragraph = screen.getByText(
      /desejam se ouvir com mais força e liberdade/i
    );
    expect(paragraph).toBeInTheDocument();
  });

  it('has correct semantic structure', () => {
    render(<ProblemStatement />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(<ProblemStatement />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
