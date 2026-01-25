import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SoundFamiliar from './SoundFamiliar';

describe('SoundFamiliar - Animation', () => {
  it('applies hover effect to pain point cards', async () => {
    const user = userEvent.setup();
    render(<SoundFamiliar />);

    const listItems = screen.getAllByRole('listitem');

    for (const item of listItems) {
      // Check initial state - should have base background
      expect(item).toHaveClass('bg-[#868B6C]/35');

      // Hover over the list item
      await user.hover(item);

      // After hover, should still have the hover class (CSS hover effect)
      expect(item).toHaveClass('hover:bg-[#868B6C]/50');

      // Unhover
      await user.unhover(item);
    }
  });

  it('has transition classes on pain point cards', () => {
    render(<SoundFamiliar />);

    const listItems = screen.getAllByRole('listitem');

    listItems.forEach((item) => {
      expect(item).toHaveClass('transition-all');
    });
  });

  it('check icons are properly styled', () => {
    render(<SoundFamiliar />);

    const checkIcons = screen.getAllByTestId('check-icon');

    checkIcons.forEach((icon) => {
      expect(icon).toHaveClass('w-4', 'h-4', 'text-white');
      expect(icon).toHaveAttribute('aria-hidden', 'true');
    });
  });
});
