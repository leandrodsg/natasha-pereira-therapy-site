import { render, screen } from '@testing-library/react';
import HowItWorks from './HowItWorks';

describe('HowItWorks - Responsive', () => {
  it('applies responsive grid classes', () => {
    render(<HowItWorks />);
    const grid = screen.getByRole('region').querySelector('div.grid');
    expect(grid).toHaveClass('grid');
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('md:grid-cols-2');
    expect(grid).toHaveClass('lg:grid-cols-4');
  });

  it('applies responsive padding', () => {
    render(<HowItWorks />);
    const section = screen.getByRole('region');
    expect(section).toHaveClass('py-16');
  });

  it('applies responsive vertical padding', () => {
    render(<HowItWorks />);
    const section = screen.getByRole('region');
    expect(section).toHaveClass('py-16');
  });

  it('applies responsive headline sizing', () => {
    render(<HowItWorks />);
    const headline = screen.getByRole('heading', { level: 2 });
    expect(headline).toHaveClass('text-4xl');
    expect(headline).toHaveClass('md:text-5xl');
  });

  it('applies responsive max-width to header', () => {
    render(<HowItWorks />);
    const headerDiv = screen.getByText(
      'Sua jornada para o bem-estar começa aqui'
    ).parentElement;
    expect(headerDiv).toHaveClass('max-w-7xl');
  });

  it('applies responsive max-width to steps grid', () => {
    render(<HowItWorks />);
    const grid = screen.getByRole('region').querySelector('div.grid');
    expect(grid).toHaveClass('max-w-7xl');
  });

  it('applies consistent gap between cards', () => {
    render(<HowItWorks />);
    const grid = screen.getByRole('region').querySelector('div.grid');
    expect(grid).toHaveClass('gap-6');
  });

  it('centers text on mobile and desktop', () => {
    render(<HowItWorks />);
    const headerDiv = screen.getByText(
      'Sua jornada para o bem-estar começa aqui'
    ).parentElement;
    expect(headerDiv).toHaveClass('text-center');
  });
});
