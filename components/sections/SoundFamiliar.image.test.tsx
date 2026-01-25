import { render, screen } from '@testing-library/react';
import SoundFamiliar from './SoundFamiliar';

describe('SoundFamiliar - Image', () => {
  it('renders image with correct attributes', () => {
    render(<SoundFamiliar />);

    const image = screen.getByAltText('Natasha Pereira em ambiente pensativo');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('encontrar-paz.png')
    );
  });

  it('image has asymmetric rounded corners', () => {
    render(<SoundFamiliar />);

    const section = screen.getByRole('region');
    const imageContainer = section.querySelector('.rounded-tr-\\[80px\\]');
    expect(imageContainer).toBeInTheDocument();
    expect(imageContainer).toHaveClass(
      'rounded-tr-[80px]',
      'rounded-bl-[80px]'
    );
  });

  it('image container has aspect ratio', () => {
    render(<SoundFamiliar />);

    const section = screen.getByRole('region');
    const imageContainer = section.querySelector('.aspect-\\[3\\/4\\]');
    expect(imageContainer).toBeInTheDocument();
    expect(imageContainer).toHaveClass('aspect-[3/4]');
  });

  it('image has shadow styling', () => {
    render(<SoundFamiliar />);

    const section = screen.getByRole('region');
    const imageContainer = section.querySelector('.shadow-accent');
    expect(imageContainer).toBeInTheDocument();
    expect(imageContainer).toHaveClass('shadow-accent');
  });

  it('image uses Next.js Image component', () => {
    render(<SoundFamiliar />);

    const image = screen.getByAltText('Natasha Pereira em ambiente pensativo');
    expect(image.tagName).toBe('IMG');
    expect(image).toHaveAttribute('src');
    expect(image).toHaveAttribute('alt');
  });
});
