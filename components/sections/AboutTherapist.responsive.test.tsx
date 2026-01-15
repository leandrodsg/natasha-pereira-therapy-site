import { render, screen } from '@testing-library/react';
import { AboutTherapist } from './AboutTherapist';

describe('AboutTherapist Responsive', () => {
  it('renders with responsive grid layout', () => {
    render(<AboutTherapist />);

    const section = screen.getByRole('region', {
      name: 'Olá, sou Natasha Pereira.',
    });
    expect(section).toHaveClass(
      'about-therapist',
      'py-16',
      'md:py-24',
      'bg-white'
    );

    // Check the grid container
    const gridContainer = section.querySelector('.grid');
    expect(gridContainer).toHaveClass(
      'md:grid-cols-2',
      'gap-8',
      'items-center'
    );
  });

  it('renders image with responsive sizing', () => {
    render(<AboutTherapist />);

    const image = screen.getByAltText('Natasha Pereira - Psicóloga');
    expect(image).toHaveClass('w-full', 'h-auto', 'rounded-lg', 'shadow-lg');
  });

  it('renders content with responsive text sizes', () => {
    render(<AboutTherapist />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass(
      'text-2xl',
      'md:text-3xl',
      'lg:text-4xl',
      'font-bold',
      'text-gray-900',
      'mb-4'
    );

    const subheading = screen.getByRole('heading', { level: 3 });
    expect(subheading).toHaveClass(
      'text-lg',
      'md:text-xl',
      'text-gray-700',
      'mb-6',
      'italic'
    );
  });
});
