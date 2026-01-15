import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Hero } from './Hero';

expect.extend(toHaveNoViolations);

describe('Hero', () => {
  it('renders the hero section with correct Portuguese text', () => {
    render(<Hero />);

    expect(
      screen.getByText('Um espaço onde você finalmente pode existir sem medo.')
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Para mulheres que carregam histórias, decisões, pressões, dúvidas e desejam se ouvir com mais força e liberdade.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: 'Vamos conversar?' })
    ).toBeInTheDocument();
  });

  it('renders the headline as h1', () => {
    render(<Hero />);

    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toHaveTextContent(
      'Um espaço onde você finalmente pode existir sem medo.'
    );
  });

  it('renders with responsive text sizes', () => {
    render(<Hero />);

    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toHaveClass('text-4xl', 'md:text-6xl', 'lg:text-7xl');

    const subheadline = screen.getByText(
      'Para mulheres que carregam histórias, decisões, pressões, dúvidas e desejam se ouvir com mais força e liberdade.'
    );
    expect(subheadline).toHaveClass('text-lg', 'md:text-xl');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Hero />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
