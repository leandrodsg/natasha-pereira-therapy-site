import { render, screen } from '@testing-library/react';
import SoundFamiliar from './SoundFamiliar';

describe('SoundFamiliar - Responsive', () => {
  it('renders with split layout on desktop', () => {
    render(<SoundFamiliar />);

    const contentContainer = screen.getByTestId('sound-familiar-content');
    expect(contentContainer).toHaveClass('lg:w-[62%]');

    const imageContainer = screen.getByTestId('sound-familiar-image');
    expect(imageContainer).toHaveClass('lg:w-[38%]');
  });

  it('stacks vertically on mobile', () => {
    render(<SoundFamiliar />);

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

  it('has responsive title sizes', () => {
    render(<SoundFamiliar />);

    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveClass('text-[2rem]', 'md:text-[2.375rem]');
  });
});
