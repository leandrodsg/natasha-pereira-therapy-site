import { render, screen } from '@testing-library/react';
import { PainPointCard } from './PainPointCard';

describe('PainPointCard', () => {
  const testText =
    'Você sente uma sobrecarga emocional constante, como se carregasse o mundo nos ombros.';

  it('renders text content correctly', () => {
    render(<PainPointCard text={testText} />);

    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it('renders check icon', () => {
    render(<PainPointCard text={testText} />);

    const checkIcon = screen.getByTestId('check-icon');
    expect(checkIcon).toBeInTheDocument();
    expect(checkIcon).toHaveAttribute('aria-hidden', 'true');
  });

  it('has correct background styling', () => {
    render(<PainPointCard text={testText} />);

    const card = screen.getByRole('listitem');
    expect(card).toHaveClass('bg-white/10', 'rounded-2xl', 'px-6', 'py-5');
  });

  it('has hover state', () => {
    render(<PainPointCard text={testText} />);

    const card = screen.getByRole('listitem');
    expect(card).toHaveClass('hover:bg-white/15', 'transition-all');
  });

  it('renders as list item', () => {
    render(<PainPointCard text={testText} />);

    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

  it('has correct semantic structure', () => {
    render(<PainPointCard text={testText} />);

    const card = screen.getByRole('listitem');
    expect(card).toBeInTheDocument();

    const textElement = screen.getByText(testText);
    expect(textElement).toHaveClass(
      'text-base',
      'text-white/95',
      'leading-relaxed'
    );
  });
});
