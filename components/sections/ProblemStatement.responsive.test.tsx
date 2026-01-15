import { render, screen } from '@testing-library/react';
import ProblemStatement from './ProblemStatement';

describe('ProblemStatement - Responsive', () => {
  it('renders with centered layout', () => {
    render(<ProblemStatement />);

    const container = screen.getByText(/Para mulheres/).closest('div');
    expect(container).toHaveClass('text-center');
  });

  it('has responsive padding', () => {
    render(<ProblemStatement />);

    const wrapper = screen.getByText(/Para mulheres/).closest('div');
    expect(wrapper).toHaveClass('px-4');
  });

  it('has responsive text sizes', () => {
    render(<ProblemStatement />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass('text-2xl', 'md:text-3xl', 'lg:text-4xl');

    const paragraph = screen.getByText(/psicoterapia pode ajudar/i);
    expect(paragraph).toHaveClass('text-lg', 'md:text-xl');
  });
});
