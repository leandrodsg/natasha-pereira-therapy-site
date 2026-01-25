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
        'A busca constante por provar nosso valor, a necessidade de aceitação e o medo de não ser útil o suficiente, são questões comuns a nós, mulheres, que observo há mais de 7 anos, quando passei a exercer a psicologia.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Como psicóloga, entendo que teoria e estudos acerca do contexto social caminham juntos. Minha especialização em Gestalt Terapia (2019) norteia meu olhar para o aqui e agora, compreendendo como nossas relações acontecem no contato com o outro e com o mundo.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Como entusiasta da autonomia, procurei outra abordagem que pudesse enriquecer o tratamento dos meus pacientes. O EMDR (2020), uma linha que trabalha com traumas e comportamentos não saudáveis. Pois entendo que para sermos livres, precisamos desbloquear aquilo que nos prende.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'A minha vivência e sensibilidade, somada aos estudos, contribuíram para o desenvolvimento da leitura de uma comunicação não verbal, me permitindo alcançar aquilo que muitas vezes não conseguimos traduzir em palavras.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Sempre tive um cuidado com mulheres, por entender que a estrutura da nossa sociedade nem sempre proporciona segurança para externalizarmos nossas vozes e sentimentos reais, o que me levou a uma Formação em Psicologia, voltada para a Saúde Mental da Mulher (2024), que me possibilita compreender como e porquê da dor de cada mulher.'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'O conjunto das dimensões sociais e dos meus estudos moveram o meu ideal: abrir o meu próprio consultório, para criar um espaço seguro e livre de qualquer julgamento, para que cada mulher possa se enxergar, sentir o mundo do próprio jeito, desejar o que quiser, e, claro, ser livre.'
      )
    ).toBeInTheDocument();
  });

  it('renders with flex layout on desktop (text left, image right)', () => {
    render(<AboutTherapist />);

    const section = screen.getByRole('region', {
      name: 'Acredito que você tem o poder de criar um refúgio seguro dentro de si mesma.',
    });

    // Check flex layout instead of grid
    const flexContainer = section.querySelector('.flex');
    expect(flexContainer).toHaveClass('flex-col', 'md:flex-row', 'gap-12');

    // Check proportions
    const contentDiv = section.querySelector('div.w-full.md\\:w-\\[55\\%\\]');
    const imageDiv = section.querySelector('div.w-full.md\\:w-\\[45\\%\\]');

    expect(contentDiv).toBeInTheDocument(); // text ~55%
    expect(imageDiv).toBeInTheDocument(); // image ~45%
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

  it('renders headline with italic emphasis', () => {
    render(<AboutTherapist />);

    const headline = screen.getByRole('heading', { level: 2 });
    const italicSpan = headline.querySelector('span.italic');
    expect(italicSpan).toBeInTheDocument();
    expect(italicSpan).toHaveTextContent('refúgio seguro');
  });

  it('has correct padding alignment with Hero and SoundFamiliar', () => {
    render(<AboutTherapist />);

    const section = screen.getByRole('region', {
      name: 'Acredito que você tem o poder de criar um refúgio seguro dentro de si mesma.',
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
