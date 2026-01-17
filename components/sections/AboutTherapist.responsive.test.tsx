import { render, screen } from '@testing-library/react';
import { AboutTherapist } from './AboutTherapist';

describe('AboutTherapist Responsive', () => {
  it('renders with responsive grid layout', () => {
    render(<AboutTherapist />);

    const section = screen.getByRole('region', {
      name: 'Acredito que você tem o poder de criar um refúgio seguro dentro de si mesma.',
    });
    expect(section).toHaveClass('py-24', 'px-6', 'md:px-12', 'bg-white');

    // Check the grid container
    const gridContainer = section.querySelector('.grid');
    expect(gridContainer).toHaveClass(
      'md:grid-cols-2',
      'gap-12',
      'items-center'
    );
  });

  it('renders image with asymmetric corners and shadow', () => {
    render(<AboutTherapist />);

    const image = screen.getByAltText(
      'Natasha Pereira, psicóloga especializada em terapia para mulheres'
    );
    expect(image).toHaveClass(
      'w-full',
      'h-auto',
      'rounded-tr-[100px]',
      'rounded-bl-[100px]',
      'shadow-2xl'
    );
  });

  it('renders content with responsive text sizes', () => {
    render(<AboutTherapist />);

    const intro = screen.getByText('Olá, sou Natasha.');
    expect(intro).toHaveClass(
      'block',
      'text-xs',
      'font-bold',
      'tracking-widest',
      'uppercase',
      'text-muted-foreground',
      'mb-4'
    );

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass(
      'font-display',
      'text-4xl',
      'md:text-5xl',
      'text-foreground',
      'font-light',
      'mb-8'
    );
  });

  it('renders with correct column order on desktop', () => {
    render(<AboutTherapist />);

    const contentDiv = screen
      .getByText('Olá, sou Natasha.')
      .closest('.about-content');
    const imageDiv = screen
      .getByAltText(
        'Natasha Pereira, psicóloga especializada em terapia para mulheres'
      )
      .closest('.about-image');

    // On desktop, content should be first, image second
    expect(contentDiv).toHaveClass('order-1', 'md:order-1');
    expect(imageDiv).toHaveClass('order-2', 'md:order-2');
  });
});
