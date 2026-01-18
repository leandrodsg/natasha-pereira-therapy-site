import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { AboutTherapist } from './AboutTherapist';

expect.extend(toHaveNoViolations);

describe('AboutTherapist', () => {
  it('renders the about therapist section with correct Portuguese text', () => {
    render(<AboutTherapist />);

    expect(screen.getByText('Olá, sou Natasha.')).toBeInTheDocument();

    // Test the main headline
    const headline = screen.getByRole('heading', { level: 2 });
    expect(headline).toHaveTextContent(
      'Acredito que você tem o poder de criar um refúgio seguro dentro de si mesma.'
    );
  });

  it('renders the intro as span', () => {
    render(<AboutTherapist />);

    const intro = screen.getByText('Olá, sou Natasha.');
    expect(intro).toBeInTheDocument();
    expect(intro).toHaveClass(
      'block',
      'text-xs',
      'font-bold',
      'tracking-widest',
      'uppercase',
      'text-muted-foreground',
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
      expect.stringContaining('sou_natasha.png')
    );
    expect(image).toHaveClass('rounded-tr-[100px]', 'rounded-bl-[100px]');
  });

  it('renders concise bio paragraphs', () => {
    render(<AboutTherapist />);

    expect(
      screen.getByText(
        'Formada em 2019, minha trajetória profissional foi moldada pela compreensão de uma dinâmica que, vivida na pele, percebo ser comum a tantas mulheres: a busca constante por provar nosso valor, a necessidade de aceitação e o medo de não ser útil o suficiente.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Sempre fui movida por causas e acolhimento. Meus anos de voluntariado e trabalho com equoterapia me ensinaram a escutar para além das palavras. Mas foi na clínica que encontrei meu lugar de realização: o espaço onde transformo essa sensibilidade em um cuidado técnico e humano.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Lutar por causas diz sobre mim e sobre meu trabalho. Acredito que a transformação estrutural da nossa sociedade acontece no coletivo, mas é no campo individual que encontramos espaço e sustentação para ela. No consultório, construímos uma relação de confiança, clareza e não julgamento.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Trabalhar com mulheres faz sentido porque a liberdade é o que me guia. Aqui, não há o como deveria ser, mas espaço para se enxergar, sentir o mundo do próprio jeito e desejar o que quiser. Te acompanho na escolha que faz sentido para você.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Sou uma psicóloga que não tem dúvidas: crio espaços seguros para que mulheres possam se libertar e ocupar, enfim, o lugar que merecem.'
      )
    ).toBeInTheDocument();
  });

  it('renders with desktop layout (text left, image right)', () => {
    render(<AboutTherapist />);

    const section = screen.getByRole('region', {
      name: 'Acredito que você tem o poder de criar um refúgio seguro dentro de si mesma.',
    });

    // Check grid layout
    const gridContainer = section.querySelector('.grid');
    expect(gridContainer).toHaveClass('md:grid-cols-2', 'gap-12');

    // Check order classes
    const contentDiv = section.querySelector('.about-content');
    const imageDiv = section.querySelector('.about-image');

    expect(contentDiv).toHaveClass('order-1', 'md:order-1'); // text first on mobile, stays first on desktop
    expect(imageDiv).toHaveClass('order-2', 'md:order-2'); // image second on mobile, moves to second on desktop
  });

  it('renders headline with italic emphasis', () => {
    render(<AboutTherapist />);

    const headline = screen.getByRole('heading', { level: 2 });
    const italicSpan = headline.querySelector('span.italic');
    expect(italicSpan).toBeInTheDocument();
    expect(italicSpan).toHaveTextContent('refúgio seguro');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<AboutTherapist />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
