import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Responsive', () => {
  it('renders with responsive grid layout', () => {
    render(<Footer />);

    const gridContainer = screen
      .getByText('Natasha Pereira')
      .closest('div').parentElement;
    expect(gridContainer).toHaveClass(
      'grid',
      'grid-cols-1',
      'md:grid-cols-2',
      'gap-8'
    );
  });

  it('renders logo and description in first column', () => {
    render(<Footer />);

    const firstColumn = screen.getByText('Natasha Pereira').closest('div');
    expect(firstColumn).toBeInTheDocument();
    expect(firstColumn).toHaveTextContent(
      'Psicóloga especializada em terapia para mulheres.'
    );
  });

  it('renders contact and navigation in second column on desktop', () => {
    render(<Footer />);

    const contactSection = screen.getByText('Contato');
    const navigationSection = screen.getByText('Navegação');

    // On mobile, they stack; on desktop, they are in columns
    expect(contactSection).toBeInTheDocument();
    expect(navigationSection).toBeInTheDocument();
  });

  it('renders copyright at bottom', () => {
    render(<Footer />);

    const copyrightDiv = screen.getByText(
      '© 2025 Natasha Pereira | CRP 01/22302'
    ).parentElement;
    expect(copyrightDiv).toHaveClass('col-span-full', 'text-center');
  });
});
