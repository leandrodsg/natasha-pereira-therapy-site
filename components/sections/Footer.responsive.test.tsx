import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Responsive', () => {
  it('renders with horizontal layout on desktop', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');
    const container = footer.firstElementChild;
    expect(container).toHaveClass('max-w-6xl');
  });

  it('renders name prominently', () => {
    render(<Footer />);

    const name = screen.getByText('Natasha Pereira');
    expect(name).toBeInTheDocument();
  });

  it('renders copyright at bottom', () => {
    render(<Footer />);

    const copyrightText = screen.getByText(/© 2026 Natasha Pereira/i);
    expect(copyrightText).toBeInTheDocument();
  });

  it('has compact padding', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('py-6');
  });

  it('renders social icons', () => {
    render(<Footer />);

    expect(screen.getByLabelText('WhatsApp')).toBeInTheDocument();
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
    expect(screen.getByLabelText('TikTok')).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Footer />);

    expect(screen.getByText('(61) 98144-8553')).toBeInTheDocument();
    expect(
      screen.getByText('npclinicapsicologa@gmail.com')
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Centro Clínico Brasília Medical Center/i)
    ).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: 'Sobre' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Serviços' })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Como Funciona' })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Dúvidas' })).toBeInTheDocument();
  });
});
