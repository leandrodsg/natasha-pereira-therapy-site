import { render, screen } from '@testing-library/react';
import { AboutTherapist } from './AboutTherapist';

describe('AboutTherapist Responsive', () => {
  it('renders with responsive flex layout', () => {
    render(<AboutTherapist />);

    const section = screen.getByRole('region', {
      name: 'Acredito que você tem o poder de criar um refúgio seguro dentro de si mesma.',
    });

    // Section should not have padding classes (moved to container)
    expect(section).not.toHaveClass('py-24', 'px-6', 'md:px-12', 'bg-white');

    // Check the flex container
    const flexContainer = section.querySelector('.flex');
    expect(flexContainer).toHaveClass(
      'flex-col',
      'md:flex-row',
      'gap-12',
      'items-start',
      'md:items-center'
    );
  });

  it('renders with correct proportions (55% text / 45% image)', () => {
    render(<AboutTherapist />);

    const section = screen.getByRole('region', {
      name: 'Acredito que você tem o poder de criar um refúgio seguro dentro de si mesma.',
    });

    // Check text container (55%)
    const textContainer = section.querySelector(
      'div.w-full.md\\:w-\\[55\\%\\]'
    );
    expect(textContainer).toBeInTheDocument();

    // Check image container (45%)
    const imageContainer = section.querySelector(
      'div.w-full.md\\:w-\\[45\\%\\]'
    );
    expect(imageContainer).toBeInTheDocument();
  });

  it('renders image with asymmetric corners and shadow', () => {
    render(<AboutTherapist />);

    const image = screen.getByAltText(
      'Natasha Pereira, psicóloga especializada em terapia para mulheres'
    );
    expect(image).toHaveClass(
      'relative',
      'z-10',
      'w-full',
      'h-auto',
      'rounded-tr-[100px]',
      'rounded-bl-[100px]',
      'object-cover'
    );

    // Verifica se o container da imagem tem a classe shadow-brand
    const imageContainer = image.closest('.shadow-brand');
    expect(imageContainer).toBeInTheDocument();
    expect(imageContainer).toHaveClass('shadow-brand');
  });

  it('renders content with responsive text sizes', () => {
    render(<AboutTherapist />);

    const intro = screen.getByText('Olá, sou Natasha.');
    expect(intro).toHaveClass(
      'block',
      'text-xs',
      'tracking-widest',
      'text-[#662B2D]',
      'mb-4'
    );

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass(
      'font-display',
      'text-4xl',
      'md:text-5xl',
      'text-[#662B2D]',
      'font-light',
      'mb-8'
    );
  });

  it('renders with correct mobile stack order (image first, text second)', () => {
    render(<AboutTherapist />);

    const contentDiv = screen.getByText('Olá, sou Natasha.').closest('div');
    const imageDiv = screen
      .getByAltText(
        'Natasha Pereira, psicóloga especializada em terapia para mulheres'
      )
      .closest('div.w-full.md\\:w-\\[45\\%\\]');

    // On mobile, image should be first (order-1), text second (order-2)
    expect(contentDiv).toHaveClass('order-2', 'md:order-1');
    expect(imageDiv).toHaveClass('order-1', 'md:order-2');
  });

  it('renders with correct desktop layout (text left, image right)', () => {
    render(<AboutTherapist />);

    const contentDiv = screen.getByText('Olá, sou Natasha.').closest('div');
    const imageDiv = screen
      .getByAltText(
        'Natasha Pereira, psicóloga especializada em terapia para mulheres'
      )
      .closest('div.w-full.md\\:w-\\[45\\%\\]');

    // On desktop, content should be first (order-1), image second (order-2)
    expect(contentDiv).toHaveClass('order-2', 'md:order-1');
    expect(imageDiv).toHaveClass('order-1', 'md:order-2');
  });

  it('has correct padding alignment with Hero and SoundFamiliar', () => {
    render(<AboutTherapist />);

    const section = screen.getByRole('region', {
      name: 'Acredito que você tem o poder de criar um refúgio seguro dentro de si mesma.',
    });

    const container = section.querySelector('.max-w-7xl');
    expect(container).toHaveClass('px-6', 'md:px-12', 'py-16');
  });
});
