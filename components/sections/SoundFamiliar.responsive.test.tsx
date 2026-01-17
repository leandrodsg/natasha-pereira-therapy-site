import { render, screen } from '@testing-library/react';
import SoundFamiliar from './SoundFamiliar';

describe('SoundFamiliar - Responsive', () => {
  it('renders with split layout on desktop', () => {
    render(<SoundFamiliar />);

    const section = screen.getByRole('region', { name: /isso soa familiar/i });
    expect(section).toHaveClass('md:flex-row');

    const contentContainer = screen.getByTestId('sound-familiar-content');
    expect(contentContainer).toHaveClass('md:w-7/12');

    const imageContainer = screen.getByTestId('sound-familiar-image');
    expect(imageContainer).toHaveClass('md:w-5/12');
  });

  it('stacks vertically on mobile', () => {
    render(<SoundFamiliar />);

    const section = screen.getByRole('region', { name: /isso soa familiar/i });
    expect(section).toHaveClass('flex-col');

    const contentContainer = screen.getByTestId('sound-familiar-content');
    expect(contentContainer).toHaveClass('w-full');

    const imageContainer = screen.getByTestId('sound-familiar-image');
    expect(imageContainer).toHaveClass('w-full');
  });

  it('maintains list structure across viewports', () => {
    render(<SoundFamiliar />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(6);
  });

  it('has responsive padding', () => {
    render(<SoundFamiliar />);

    const contentContainer = screen.getByTestId('sound-familiar-content');
    expect(contentContainer).toHaveClass('p-12', 'md:p-20');
  });

  it('has responsive title sizes', () => {
    render(<SoundFamiliar />);

    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveClass('text-4xl', 'md:text-5xl');
  });
});
