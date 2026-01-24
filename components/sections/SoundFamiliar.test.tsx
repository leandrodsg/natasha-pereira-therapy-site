import { render, screen } from '@testing-library/react';
import SoundFamiliar from './SoundFamiliar';

describe('SoundFamiliar', () => {
  it('renders heading with italic emphasis', () => {
    render(<SoundFamiliar />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(
      'Você está aqui porque encontrar paz é importante para você'
    );
    expect(heading).toHaveClass(
      'font-display',
      'text-[2rem]',
      'md:text-[2.375rem]',
      'font-light',
      'leading-tight'
    );
  });

  it('renders all pain point cards', () => {
    render(<SoundFamiliar />);

    // Verifica se todos os 6 pontos estão sendo renderizados
    const painPoints = [
      'Você sente uma sobrecarga emocional constante, como se carregasse o mundo nos ombros.',
      'Estabelecer limites parece impossível - você sempre acaba cedendo.',
      'O medo de desapontar os outros te paralisa nas decisões.',
      'Culpa ao priorizar você mesma, como se fosse egoísmo.',
      'Sensação de estar sempre "dividida" entre papéis e expectativas.',
      'Pressão por ser forte o tempo todo, sem espaço para vulnerabilidade.',
    ];

    painPoints.forEach((point) => {
      expect(screen.getByText(point)).toBeInTheDocument();
    });
  });

  it('renders image with correct alt text', () => {
    render(<SoundFamiliar />);

    const image = screen.getByAltText('Natasha Pereira em ambiente pensativo');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src'); // Next.js Image component optimizes the src
  });

  it('has split layout on desktop', () => {
    render(<SoundFamiliar />);

    const container = screen.getByTestId('sound-familiar-content');
    expect(container).toHaveClass('lg:w-[62%]');
  });

  it('has correct background color', () => {
    render(<SoundFamiliar />);

    const section = screen.getByRole('region');
    expect(section).toHaveClass('bg-[#4F5543]', 'text-white');
  });

  it('has correct section structure', () => {
    render(<SoundFamiliar />);

    const section = screen.getByRole('region');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute(
      'aria-labelledby',
      'sound-familiar-heading'
    );
    expect(section).toHaveAttribute('aria-label', 'Seção Isso soa familiar');
  });

  it('renders check icons for each pain point', () => {
    render(<SoundFamiliar />);

    const checkIcons = screen.getAllByTestId('check-icon');
    expect(checkIcons).toHaveLength(6); // Deve ter 6 ícones de check
  });
});
