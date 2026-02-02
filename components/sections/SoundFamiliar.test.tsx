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
      'Você carrega o mundo nos ombros. E ninguém parece notar.',
      'Dizer "não" parece impossível. Você sempre cede.',
      'O medo de desapontar paralisa suas decisões.',
      'Cuidar de si parece egoísmo. A culpa é constante.',
      'Dividida entre mil papéis, você não sabe mais quem é.',
      'A obrigação de ser forte. Sem espaço para chorar.',
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

    const section = screen.getByRole('region');
    const container = section.querySelector('.lg\\:w-\\[62\\%\\]');
    expect(container).toBeInTheDocument();
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
  });

  it('renders check icons for each pain point', () => {
    render(<SoundFamiliar />);

    const checkIcons = screen.getAllByTestId('check-icon');
    expect(checkIcons).toHaveLength(6); // Deve ter 6 ícones de check
  });
});
