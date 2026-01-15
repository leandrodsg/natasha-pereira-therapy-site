// components/sections/CTASection.integration.test.tsx
import { render, screen } from '@testing-library/react';
import { CTASection } from './CTASection';

// Mock the whatsapp module
jest.mock('@/lib/whatsapp', () => ({
  getWhatsAppLink: jest.fn(
    (phoneNumber, message) =>
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message || '')}`
  ),
}));

describe('CTASection Integration', () => {
  it('renders CTA button with WhatsApp link', () => {
    render(<CTASection />);

    const button = screen.getByRole('link', { name: /agende sua sessão/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute(
      'href',
      'https://wa.me/5561981448553?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o'
    );
    expect(button).toHaveAttribute('target', '_blank');
    expect(button).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders CTA content correctly', () => {
    render(<CTASection />);

    expect(
      screen.getByText(
        'Você não precisa continuar se anulando para dar conta de tudo.'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Agende sua sessão e comece a se ouvir/)
    ).toBeInTheDocument();
  });
});
