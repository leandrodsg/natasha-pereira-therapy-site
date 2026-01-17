import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero Responsive', () => {
  it('renders with responsive text sizes', () => {
    render(<Hero />);

    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toHaveClass('text-5xl', 'md:text-7xl');

    const subtitle = screen.getByText(
      'Terapia online para mulheres em Brasília'
    );
    expect(subtitle).toHaveClass('text-xs');
  });

  it('renders with responsive split layout', () => {
    render(<Hero />);

    const section = screen.getByRole('region', {
      name: 'Um espaço onde você finalmente pode existir sem medo.',
    });
    expect(section).toHaveClass(
      'flex',
      'flex-col',
      'md:flex-row',
      'items-center',
      'gap-12'
    );
  });

  it('renders text column with responsive width', () => {
    render(<Hero />);

    const textDiv = screen
      .getByText('Terapia online para mulheres em Brasília')
      .closest('div');
    expect(textDiv).toHaveClass('w-full', 'md:w-1/2');
  });

  it('renders image column with responsive width', () => {
    render(<Hero />);

    const image = screen.getByAltText(
      'Natasha Pereira, psicóloga especializada em terapia para mulheres'
    );
    const imageDiv = image.parentElement?.parentElement; // div.aspect > div.relative > img
    expect(imageDiv).toHaveClass('w-full', 'md:w-1/2');
  });

  it('stacks vertically on mobile', () => {
    render(<Hero />);

    const section = screen.getByRole('region', {
      name: 'Um espaço onde você finalmente pode existir sem medo.',
    });
    expect(section).toHaveClass('flex-col'); // Mobile first
    expect(section).toHaveClass('md:flex-row'); // Desktop split
  });
});
