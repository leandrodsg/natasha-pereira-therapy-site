import { render, screen } from '@testing-library/react';
import SoundFamiliar from './SoundFamiliar';

describe('SoundFamiliar - Responsive', () => {
  it('renders with responsive spacing', () => {
    render(<SoundFamiliar />);

    const list = screen.getByRole('list');
    expect(list).toHaveClass('space-y-4', 'md:space-y-6');
  });

  it('maintains list structure across viewports', () => {
    render(<SoundFamiliar />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(6);
  });

  it('has responsive text sizes', () => {
    render(<SoundFamiliar />);

    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveClass('text-2xl', 'md:text-3xl', 'lg:text-4xl');

    const items = screen.getAllByRole('listitem');
    items.forEach((item) => {
      const text = item.querySelector('span');
      expect(text).toHaveClass('text-lg', 'md:text-xl');
    });
  });
});
