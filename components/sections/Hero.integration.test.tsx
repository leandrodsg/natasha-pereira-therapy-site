// components/sections/Hero.integration.test.tsx
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

// Mock the whatsapp module
jest.mock('@/lib/whatsapp', () => ({
  getWhatsAppLink: jest.fn(
    (phoneNumber, message) =>
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message || '')}`
  ),
}));

describe('Hero Integration', () => {
  it('renders CTA button with WhatsApp link', () => {
    render(<Hero />);

    const button = screen.getByRole('link', { name: /vamos conversar\?/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute(
      'href',
      'https://wa.me/5561981448553?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20terapia'
    );
    expect(button).toHaveAttribute('target', '_blank');
    expect(button).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders hero content correctly', () => {
    render(<Hero />);

    expect(
      screen.getByText('Um espaço onde você pode', { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Para mulheres que carregam histórias/)
    ).toBeInTheDocument();
  });
});
