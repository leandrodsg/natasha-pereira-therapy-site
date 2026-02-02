// components/sections/Footer.integration.test.tsx
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

// Mock the whatsapp module
jest.mock('@/lib/whatsapp', () => ({
  getWhatsAppLink: jest.fn((phoneNumber) => `https://wa.me/${phoneNumber}`),
}));

describe('Footer Integration', () => {
  it('renders WhatsApp social link correctly', () => {
    render(<Footer />);

    const whatsappLink = screen.getByRole('link', { name: 'WhatsApp' });
    expect(whatsappLink).toBeInTheDocument();
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/5561981448553');
    expect(whatsappLink).toHaveAttribute('target', '_blank');
    expect(whatsappLink).toHaveAttribute('rel', 'noopener noreferrer');
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

  it('renders TikTok link correctly', () => {
    render(<Footer />);

    const tiktokLink = screen.getByRole('link', { name: /tiktok/i });
    expect(tiktokLink).toBeInTheDocument();
    expect(tiktokLink).toHaveAttribute(
      'href',
      'https://www.tiktok.com/@natasha.pereira.p'
    );
    expect(tiktokLink).toHaveAttribute('target', '_blank');
    expect(tiktokLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders email link correctly', () => {
    render(<Footer />);

    const emailLink = screen.getByRole('link', {
      name: /enviar email para/i,
    });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:npclinicapsicologa@gmail.com'
    );
  });

  it('renders address information with maps link', () => {
    render(<Footer />);

    expect(
      screen.getByText(/Centro Clínico Brasília Medical Center/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/SGAN Qd 607 Conj A/i)).toBeInTheDocument();
    expect(screen.getByText(/CEP 70830-300/i)).toBeInTheDocument();

    // Address should be a link to Google Maps
    const addressLink = screen
      .getByText(/Centro Clínico Brasília Medical Center/i)
      .closest('a');
    expect(addressLink).toHaveAttribute('href');
    expect(addressLink?.getAttribute('href')).toContain('google.com/maps');
  });

  it('renders phone number with WhatsApp link', () => {
    render(<Footer />);

    const phoneLink = screen.getByText('(61) 98144-8553');
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink.closest('a')).toHaveAttribute('href');
    expect(phoneLink.closest('a')?.getAttribute('href')).toContain('wa.me');
  });

  it('renders copyright with correct year and CRP', () => {
    render(<Footer />);

    expect(screen.getByText(/© 2026 Natasha Pereira/i)).toBeInTheDocument();
    expect(screen.getByText(/CRP 01\/22302/)).toBeInTheDocument();
  });

  it('renders name prominently', () => {
    render(<Footer />);

    expect(screen.getByText('Natasha Pereira')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: 'Sobre' })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Atendimentos' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Como Funciona' })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Dúvidas' })).toBeInTheDocument();
  });

  it('has navigation landmark', () => {
    render(<Footer />);

    expect(screen.getByLabelText('Navegação do rodapé')).toBeInTheDocument();
  });
});
