import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Responsive', () => {
  it('renders with responsive 3-column grid layout', () => {
    render(<Footer />);

    const gridContainer = screen.getByRole('contentinfo').firstElementChild;
    expect(gridContainer).toHaveClass(
      'grid',
      'grid-cols-1',
      'md:grid-cols-3',
      'gap-12'
    );
  });

  it('renders contact section in first column', () => {
    render(<Footer />);

    const contactHeading = screen.getByRole('heading', { name: 'Contato' });
    expect(contactHeading).toBeInTheDocument();
  });

  it('renders logo and description in center column', () => {
    render(<Footer />);

    const logo = screen.getByText('Natasha Pereira');
    expect(logo).toBeInTheDocument();
    expect(logo.closest('div')).toHaveTextContent(
      'Psicóloga especializada em terapia para mulheres.'
    );
  });

  it('renders navigation in third column on desktop', () => {
    render(<Footer />);

    const navigationHeading = screen.getByRole('heading', {
      name: 'Navegação',
    });
    expect(navigationHeading).toBeInTheDocument();
  });

  it('renders copyright at bottom spanning full width', () => {
    render(<Footer />);

    const copyrightDiv = screen.getByText(
      '© 2026 Natasha Pereira | CRP 01/22302'
    ).parentElement;
    expect(copyrightDiv).toHaveClass('col-span-full', 'text-center');
  });

  it('stacks columns vertically on mobile', () => {
    render(<Footer />);

    const gridContainer = screen.getByRole('contentinfo').firstElementChild;
    expect(gridContainer).toHaveClass('grid-cols-1');
  });
});
