// components/sections/Footer.integration.test.tsx
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

// Mock the whatsapp module
jest.mock('@/lib/whatsapp', () => ({
  getWhatsAppLink: jest.fn((phoneNumber) => `https://wa.me/${phoneNumber}`),
}));

describe('Footer Integration', () => {
  it('renders WhatsApp link correctly', () => {
    render(<Footer />);

    const whatsappLink = screen.getByRole('link', {
      name: /whatsapp: \+55 61 98144-8553/i,
    });
    expect(whatsappLink).toBeInTheDocument();
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/5561981448553');
    expect(whatsappLink).toHaveAttribute('target', '_blank');
    expect(whatsappLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders email link correctly', () => {
    render(<Footer />);

    const emailLink = screen.getByRole('link', {
      name: /email: natashaa\.pereira@hotmail\.com/i,
    });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:natashaa.pereira@hotmail.com'
    );
  });

  it('renders Instagram link correctly', () => {
    render(<Footer />);

    const instagramLink = screen.getByRole('link', { name: /instagram/i });
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute(
      'href',
      'https://instagram.com/sounatashapsi'
    );
    expect(instagramLink).toHaveAttribute('target', '_blank');
    expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders real address', () => {
    render(<Footer />);

    expect(screen.getByText(/SEPS 705\/905 Bloco A/)).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: /início/i })).toHaveAttribute(
      'href',
      '#inicio'
    );
    expect(screen.getByRole('link', { name: /quem sou/i })).toHaveAttribute(
      'href',
      '#quem-sou'
    );
    expect(screen.getByRole('link', { name: /serviços/i })).toHaveAttribute(
      'href',
      '#servicos'
    );
    expect(screen.getByRole('link', { name: /contato/i })).toHaveAttribute(
      'href',
      '#contato'
    );
  });
});
