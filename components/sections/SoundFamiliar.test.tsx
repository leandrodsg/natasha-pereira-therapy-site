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

  it('renders all sound familiar items', () => {
    render(<SoundFamiliar />);

    const items = [
      'Sobrecarga emocional',
      'Dificuldade em estabelecer limites',
      'Medo de desapontar os outros',
      'Culpa ao priorizar a si mesma',
      'Sensação de estar sempre "dividida"',
      'Pressão por ser forte o tempo todo',
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

  it('is accessible', async () => {
    const { container } = render(<SoundFamiliar />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
