import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Links', () => {
  it('social links have correct href attributes', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: 'WhatsApp' })).toHaveAttribute(
      'href',
      'https://wa.me/5561981448553'
    );
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute(
      'href',
      'https://instagram.com/sounatashapsi'
    );
    expect(screen.getByRole('link', { name: 'TikTok' })).toHaveAttribute(
      'href',
      'https://www.tiktok.com/@natasha.pereira.p'
    );
  });

  it('email link has correct href attribute', () => {
    render(<Footer />);

    const emailLink = screen.getByRole('link', {
      name: 'npclinicapsicologa@gmail.com',
    });
    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:npclinicapsicologa@gmail.com'
    );
  });

  it('phone link has correct WhatsApp href', () => {
    render(<Footer />);

    const phoneLink = screen.getByRole('link', { name: '(61) 98144-8553' });
    expect(phoneLink).toHaveAttribute('href', 'https://wa.me/5561981448553');
  });

  it('address link opens Google Maps', () => {
    render(<Footer />);

    const addressLink = screen
      .getByText(/Centro Clínico Brasília Medical Center/i)
      .closest('a');
    expect(addressLink).toHaveAttribute('target', '_blank');
    expect(addressLink?.getAttribute('href')).toContain('google.com/maps');
  });

  it('external links open in new tab with security attributes', () => {
    render(<Footer />);

    const socialLinks = [
      screen.getByRole('link', { name: 'WhatsApp' }),
      screen.getByRole('link', { name: 'Instagram' }),
      screen.getByRole('link', { name: 'TikTok' }),
    ];

    socialLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('renders navigation links with correct hrefs', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: 'Sobre' })).toHaveAttribute(
      'href',
      '#quem-sou'
    );
    expect(screen.getByRole('link', { name: 'Serviços' })).toHaveAttribute(
      'href',
      '#servicos'
    );
    expect(screen.getByRole('link', { name: 'Como Funciona' })).toHaveAttribute(
      'href',
      '#como-funciona'
    );
    expect(screen.getByRole('link', { name: 'Dúvidas' })).toHaveAttribute(
      'href',
      '#faq'
    );
  });
});
