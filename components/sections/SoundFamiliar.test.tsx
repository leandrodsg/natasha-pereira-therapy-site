import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import SoundFamiliar from './SoundFamiliar';

expect.extend(toHaveNoViolations);

describe('SoundFamiliar', () => {
  it('renders the sound familiar title', () => {
    render(<SoundFamiliar />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/soa familiar/i);
  });

  it('renders all sound familiar items with expanded text', () => {
    render(<SoundFamiliar />);

    const items = [
      'Você sente uma sobrecarga emocional constante, como se carregasse o mundo nos ombros.',
      'Estabelecer limites parece impossível - você sempre acaba cedendo.',
      'O medo de desapontar os outros te paralisa nas decisões.',
      'Culpa ao priorizar você mesma, como se fosse egoísmo.',
      'Sensação de estar sempre "dividida" entre papéis e expectativas.',
      'Pressão por ser forte o tempo todo, sem espaço para vulnerabilidade.',
    ];

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('renders items with arrow icons', () => {
    render(<SoundFamiliar />);

    // Check for arrow icons (assuming they're using lucide-react ArrowRight)
    const arrows = screen.getAllByTestId('arrow-icon');
    expect(arrows).toHaveLength(6); // 6 items
  });

  it('has correct semantic structure with list', () => {
    render(<SoundFamiliar />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(6);
  });

  it('renders image with correct alt text', () => {
    render(<SoundFamiliar />);

    const image = screen.getByAltText(
      'Ambiente acolhedor com plantas e luz natural'
    );
    expect(image).toBeInTheDocument();
  });

  it('has split layout structure', () => {
    render(<SoundFamiliar />);

    // Check for split layout containers
    const imageContainer = screen.getByTestId('sound-familiar-image');
    const contentContainer = screen.getByTestId('sound-familiar-content');

    expect(imageContainer).toBeInTheDocument();
    expect(contentContainer).toBeInTheDocument();
  });

  it('applies primary background to content section', () => {
    render(<SoundFamiliar />);

    const contentContainer = screen.getByTestId('sound-familiar-content');
    expect(contentContainer).toHaveClass('bg-primary');
  });

  it('renders title with font-display class', () => {
    render(<SoundFamiliar />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass('font-display');
  });

  it('is accessible', async () => {
    const { container } = render(<SoundFamiliar />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
