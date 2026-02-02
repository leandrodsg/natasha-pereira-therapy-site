import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { AboutTherapist } from './AboutTherapist';

expect.extend(toHaveNoViolations);

describe('AboutTherapist', () => {
  it('renders the about therapist section with correct Portuguese text', () => {
    render(<AboutTherapist />);

    expect(screen.getByText('Olá, sou a Natasha.')).toBeInTheDocument();

    // Test the main headline
    const headline = screen.getByRole('heading', { level: 2 });
    expect(headline).toHaveTextContent(
      'Existe um refúgio seguro dentro de você.'
    );
  });

  it('renders the intro as span', () => {
    render(<AboutTherapist />);

    const intro = screen.getByText('Olá, sou a Natasha.');
    expect(intro).toBeInTheDocument();
    expect(intro).toHaveClass(
      'block',
      'text-sm',
      'tracking-widest',
      'text-[#662B2D]',
      'mb-4'
    );
  });

  it('renders the image with correct alt text and asymmetric corners', () => {
    render(<AboutTherapist />);

    const image = screen.getByAltText(
      'Natasha Pereira, psicóloga especializada em terapia para mulheres'
    );
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('aboutme_new.jpg')
    );
    expect(image).toHaveClass('rounded-tr-[100px]', 'rounded-bl-[100px]');
  });

  it('renders all 6 new bio paragraphs', () => {
    render(<AboutTherapist />);

    expect(
      screen.getByText(
        'Provar o próprio valor. Buscar aceitação. O medo de não ser útil o suficiente. Há mais de 7 anos escuto essas histórias. Cada história merece ser ouvida com atenção.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Minha formação em Gestalt-Terapia guia meu olhar para o aqui e agora. Para o contato com o mundo. Para como você se relaciona e sente o hoje.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Busquei o EMDR para ir além. Essa abordagem desbloqueia traumas e comportamentos que nos prendem. Pois entendo que, para sermos livres, precisamos recuperar nossa autonomia.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Com o tempo, refinei a leitura da comunicação não verbal. O corpo fala. O silêncio fala. Nem tudo precisa virar palavra para ser compreendido.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Sempre tive um olhar especial para mulheres. A estrutura da nossa sociedade nem sempre oferece espaço para sermos reais. Por isso, me especializei em Saúde Mental da Mulher. Para entender a origem da dor. E aliviar o peso.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Tudo isso me trouxe até aqui: criar um espaço seguro, livre de julgamento. Onde você pode se enxergar, sentir do seu jeito, desejar o que quiser. E, finalmente, ser livre.'
      )
    ).toBeInTheDocument();
  });

  it('renders with flex layout on desktop (text left, image right)', () => {
    render(<AboutTherapist />);

    const section = screen.getByRole('region', {
      name: 'Existe um refúgio seguro dentro de você.',
    });

    // Check flex layout instead of grid
    const flexContainer = section.querySelector('.flex');
    expect(flexContainer).toHaveClass('flex-col', 'md:flex-row', 'gap-12');

    // Check proportions
    const contentDiv = section.querySelector('div.w-full.md\\:w-1\\/2');
    const imageDiv = section.querySelector('div.w-full.md\\:w-\\[45\\%\\]');

    expect(contentDiv).toBeInTheDocument(); // text ~50%
    expect(imageDiv).toBeInTheDocument(); // image ~45%
  });

  it('renders with correct mobile stack order (image first, text second)', () => {
    render(<AboutTherapist />);

    const contentDiv = screen.getByText('Olá, sou a Natasha.').closest('div');
    const imageDiv = screen
      .getByAltText(
        'Natasha Pereira, psicóloga especializada em terapia para mulheres'
      )
      .closest('div.w-full.md\\:w-\\[45\\%\\]');

    // On mobile, image should be first (order-1), text second (order-2)
    expect(contentDiv).toHaveClass('order-2', 'md:order-1');
    expect(imageDiv).toHaveClass('order-1', 'md:order-2');
  });

  it('renders headline with emphasis text', () => {
    render(<AboutTherapist />);

    const headline = screen.getByRole('heading', { level: 2 });
    expect(headline).toHaveTextContent(
      'Existe um refúgio seguro dentro de você.'
    );
  });

  it('has correct padding alignment with Hero and SoundFamiliar', () => {
    render(<AboutTherapist />);

    const section = screen.getByRole('region', {
      name: 'Existe um refúgio seguro dentro de você.',
    });

    // Should have padding inside the max-w-7xl container, not on section
    expect(section).not.toHaveClass('py-24', 'px-6', 'md:px-12');

    const container = section.querySelector('.max-w-7xl');
    expect(container).toHaveClass('px-6', 'md:px-12', 'py-16');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<AboutTherapist />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
