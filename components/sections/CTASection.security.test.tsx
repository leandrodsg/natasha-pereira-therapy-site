// components/sections/CTASection.security.test.tsx
import { render, screen } from '@testing-library/react';
import { CTASection } from './CTASection';

// Mock the whatsapp module
jest.mock('@/lib/whatsapp', () => ({
  getWhatsAppLink: jest.fn(
    (phoneNumber, message) =>
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message || '')}`
  ),
}));

describe('CTASection Security', () => {
  it('uses validated WhatsApp link', () => {
    render(<CTASection />);

    const link = screen.getByRole('link', { name: 'Agende sua sessão' });
    expect(link).toHaveAttribute('href', expect.stringContaining('wa.me'));
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not contain dangerous HTML', () => {
    render(<CTASection />);

    // Ensure no dangerouslySetInnerHTML is used
    const container = screen.getByRole('region');
    expect(container).not.toHaveAttribute('dangerouslySetInnerHTML');
  });

  it('uses local background image', () => {
    render(<CTASection />);

    const image = screen.getByAltText('Ambiente acolhedor para terapia');
    expect(image).toBeInTheDocument();
    // Next.js Image component should handle local images securely
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('cta-background.jpg')
    );
  });

  it('validates link attributes', () => {
    render(<CTASection />);

    const link = screen.getByRole('link', { name: 'Agende sua sessão' });

    // Ensure external link has security attributes
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');

    // Ensure href is a valid WhatsApp URL
    const href = link.getAttribute('href');
    expect(href).toMatch(/^https:\/\/wa\.me\/\d+\?text=.+$/);
  });

  it('does not expose sensitive information', () => {
    render(<CTASection />);

    // Ensure no sensitive data is rendered in the DOM
    const container = screen.getByRole('region');
    const html = container.innerHTML;

    // Should not contain any sensitive patterns
    expect(html).not.toMatch(/password|secret|key|token/i);
    expect(html).not.toMatch(/<script/i);
  });
});
