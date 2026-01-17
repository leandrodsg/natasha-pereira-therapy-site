import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SoundFamiliar from './SoundFamiliar';

describe('SoundFamiliar - Animation', () => {
  it('applies hover animation to arrow icons', async () => {
    const user = userEvent.setup();
    render(<SoundFamiliar />);

    const listItems = screen.getAllByRole('listitem');

    for (const item of listItems) {
      const arrow = item.querySelector('[data-testid="arrow-icon"]');
      expect(arrow).toBeInTheDocument();

      // Initially should not have translate-x-1
      expect(arrow).not.toHaveClass('translate-x-1');

      // Hover over the list item (group)
      await user.hover(item);

      // After hover, should have translate-x-1
      expect(arrow).toHaveClass('group-hover:translate-x-1');

      // Unhover
      await user.unhover(item);
    }
  });

  it('has transition classes on arrow icons', () => {
    render(<SoundFamiliar />);

    const arrows = screen.getAllByTestId('arrow-icon');

    arrows.forEach((arrow) => {
      expect(arrow).toHaveClass('transition-transform');
    });
  });
});
