import { render, screen } from '@testing-library/react';
import { AboutTherapist } from './AboutTherapist';

describe('AboutTherapist Background', () => {
  it('has background image sou_natasha-back.png', () => {
    render(<AboutTherapist />);

    const section = screen.getByRole('region', {
      name: 'Acredito que você tem o poder de criar um refúgio seguro dentro de si mesma.',
    });

    expect(section).toHaveStyle({
      backgroundImage: 'url(/images/sou_natasha-back.png)',
    });
  });

  it('background covers full section', () => {
    render(<AboutTherapist />);

    const section = screen.getByRole('region', {
      name: 'Acredito que você tem o poder de criar um refúgio seguro dentro de si mesma.',
    });

    expect(section).toHaveStyle({
      backgroundSize: 'cover',
    });
  });

  it('background is positioned center', () => {
    render(<AboutTherapist />);

    const section = screen.getByRole('region', {
      name: 'Acredito que você tem o poder de criar um refúgio seguro dentro de si mesma.',
    });

    expect(section).toHaveStyle({
      backgroundPosition: 'center',
    });
  });
});

describe('AboutTherapist Image', () => {
  it('renders image with correct aspect ratio and styling', () => {
    render(<AboutTherapist />);

    const image = screen.getByAltText(
      'Natasha Pereira, psicóloga especializada em terapia para mulheres'
    );
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('width', '400');
    expect(image).toHaveAttribute('height', '600');
    expect(image).toHaveClass(
      'rounded-tr-[100px]',
      'rounded-bl-[100px]',
      'object-cover'
    );
  });

  it('renders image with marsala accent shadow', () => {
    render(<AboutTherapist />);

    const image = screen.getByAltText(
      'Natasha Pereira, psicóloga especializada em terapia para mulheres'
    );
    expect(image).toHaveStyle({
      boxShadow:
        '12px 12px 0px 0px #662B2D, 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    });
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
      expect.stringContaining('aboutme_new.jpg')
    );
  });
});
