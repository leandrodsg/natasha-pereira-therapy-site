import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero Responsive', () => {
  it('renders with responsive text sizes', () => {
    render(<Hero />);

    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toHaveClass('text-4xl', 'md:text-6xl', 'lg:text-7xl');

    const subheadline = screen.getByText(
      'Para mulheres que carregam histórias, decisões, pressões, dúvidas e desejam se ouvir com mais força e liberdade.'
    );
    expect(subheadline).toHaveClass('text-lg', 'md:text-xl');
  });

  it('renders with responsive layout classes', () => {
    render(<Hero />);

    const heroContent = screen
      .getByText('Um espaço onde você finalmente pode existir sem medo.')
      .closest('div');
    expect(heroContent).toHaveClass(
      'text-center',
      'max-w-4xl',
      'mx-auto',
      'px-4'
    );
  });
});
