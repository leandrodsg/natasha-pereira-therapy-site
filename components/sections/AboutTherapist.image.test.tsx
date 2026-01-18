import { render, screen } from '@testing-library/react';
import { AboutTherapist } from './AboutTherapist';

describe('AboutTherapist Image', () => {
  it('renders image with correct aspect ratio and styling', () => {
    render(<AboutTherapist />);

    const image = screen.getByAltText(
      'Natasha Pereira, psicóloga especializada em terapia para mulheres'
    );
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('width', '500');
    expect(image).toHaveAttribute('height', '750');
    expect(image).toHaveClass(
      'rounded-tr-[100px]',
      'rounded-bl-[100px]',
      'shadow-2xl'
    );
  });

  it('renders image with lazy loading', () => {
    render(<AboutTherapist />);

    const image = screen.getByAltText(
      'Natasha Pereira, psicóloga especializada em terapia para mulheres'
    );
    expect(image).toHaveAttribute('loading', 'lazy');
  });

  it('renders image with correct src', () => {
    render(<AboutTherapist />);

    const image = screen.getByAltText(
      'Natasha Pereira, psicóloga especializada em terapia para mulheres'
    );
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('sou_natasha.png')
    );
  });
});
