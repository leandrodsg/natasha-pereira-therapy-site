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

    const imageContainer = screen.getByTestId('sound-familiar-image-container');
    expect(imageContainer).toHaveClass(
      'rounded-tr-[80px]',
      'rounded-bl-[80px]'
    );
  });

  it('image container has aspect ratio', () => {
    render(<SoundFamiliar />);

    const imageContainer = screen.getByTestId('sound-familiar-image-container');
    expect(imageContainer).toHaveClass('aspect-[3/4]');
  });

  it('image has shadow styling', () => {
    render(<SoundFamiliar />);

    const imageContainer = screen.getByTestId('sound-familiar-image-container');
    const style = imageContainer.getAttribute('style');
    expect(style).toContain('box-shadow');
  });

  it('image uses Next.js Image component', () => {
    render(<SoundFamiliar />);

    const image = screen.getByAltText('Natasha Pereira em ambiente pensativo');
    expect(image.tagName).toBe('IMG');
    expect(image).toHaveAttribute('src');
    expect(image).toHaveAttribute('alt');
  });
});
