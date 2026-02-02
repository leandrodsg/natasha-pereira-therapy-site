import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero Responsive', () => {
  it('renders with responsive text sizes', () => {
    render(<Hero />);

    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toHaveClass('text-4xl', 'md:text-5xl', 'lg:text-6xl');

    const subtitle = screen.getByText('Terapia online para mulheres');
    expect(subtitle).toHaveClass('text-sm');
  });

  it('renders with responsive split layout', () => {
    render(<Hero />);

    const section = screen.getByRole('region', {
      name: 'Um espaço onde você pode existir sem medo.',
    });
    const container = section.querySelector('div');
    expect(container).toHaveClass(
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
      .getByText('Terapia online para mulheres')
      .closest('div');
    expect(textDiv).toHaveClass('w-full', 'md:w-1/2');
  });

  it('renders image column with responsive width', () => {
    render(<Hero />);

    const image = screen.getByAltText(
      'Natasha Pereira, psicóloga especializada em terapia para mulheres'
    );
    const imageDiv = image.parentElement?.parentElement; // div.aspect > div.relative > img
    expect(imageDiv).toHaveClass('w-full', 'md:w-[45%]');
  });

  it('stacks vertically on mobile', () => {
    render(<Hero />);

    const section = screen.getByRole('region', {
      name: 'Um espaço onde você pode existir sem medo.',
    });
    const container = section.querySelector('div');
    expect(container).toHaveClass('flex-col'); // Mobile first
    expect(container).toHaveClass('md:flex-row'); // Desktop split
  });
});
