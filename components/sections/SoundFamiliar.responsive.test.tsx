import { render, screen } from '@testing-library/react';
import SoundFamiliar from './SoundFamiliar';

describe('SoundFamiliar - Responsive', () => {
  it('renders with split layout on desktop', () => {
    render(<SoundFamiliar />);

    const section = screen.getByRole('region');
    const contentContainer = section.querySelector('.lg\\:w-\\[62\\%\\]');
    expect(contentContainer).toBeInTheDocument();
    expect(contentContainer).toHaveClass('lg:w-[62%]');

    const imageContainer = section.querySelector('.lg\\:w-\\[38\\%\\]');
    expect(imageContainer).toBeInTheDocument();
    expect(imageContainer).toHaveClass('lg:w-[38%]');
  });

  it('stacks vertically on mobile', () => {
    render(<SoundFamiliar />);

    const contentContainer = screen
      .getByRole('region')
      .querySelector('.w-full.lg\\:w-\\[62\\%\\]');
    expect(contentContainer).toBeInTheDocument();

    const imageContainer = screen
      .getByRole('region')
      .querySelector('.w-full.lg\\:w-\\[38\\%\\]');
    expect(imageContainer).toBeInTheDocument();
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
