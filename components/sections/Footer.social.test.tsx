import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Social Icons', () => {
  it('renders WhatsApp icon with correct attributes', () => {
    render(<Footer />);

    const whatsappLink = screen.getByRole('link', { name: 'WhatsApp' });
    expect(whatsappLink).toBeInTheDocument();
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/5561981448553');
    expect(whatsappLink).toHaveAttribute('target', '_blank');
    expect(whatsappLink).toHaveAttribute('rel', 'noopener noreferrer');

    const svg = whatsappLink.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders Instagram icon with correct attributes', () => {
    render(<Footer />);

    const instagramLink = screen.getByRole('link', { name: 'Instagram' });
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute(
      'href',
      'https://instagram.com/sounatashapsi'
    );
    expect(instagramLink).toHaveAttribute('target', '_blank');
    expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');

    const svg = instagramLink.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders TikTok icon with correct attributes', () => {
    render(<Footer />);

    const tiktokLink = screen.getByRole('link', { name: 'TikTok' });
    expect(tiktokLink).toBeInTheDocument();
    expect(tiktokLink).toHaveAttribute(
      'href',
      'https://www.tiktok.com/@natasha.pereira.p'
    );
    expect(tiktokLink).toHaveAttribute('target', '_blank');
    expect(tiktokLink).toHaveAttribute('rel', 'noopener noreferrer');

    const svg = tiktokLink.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders all social icons with hover effects', () => {
    render(<Footer />);

    const socialLinks = [
      screen.getByRole('link', { name: 'WhatsApp' }),
      screen.getByRole('link', { name: 'Instagram' }),
      screen.getByRole('link', { name: 'TikTok' }),
    ];

    socialLinks.forEach((link) => {
      expect(link.className).toMatch(/hover:/);
      expect(link.className).toMatch(/transition/);
    });
  });

  it('renders icons with appropriate size', () => {
    render(<Footer />);

    const whatsappLink = screen.getByRole('link', { name: 'WhatsApp' });
    const svg = whatsappLink.querySelector('svg');
    // Icon should have size class (w-5 h-5)
    expect(svg).toHaveClass('w-5', 'h-5');
  });
});
