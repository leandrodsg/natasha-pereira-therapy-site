/**
 * WhatsAppButton Component Tests
 * Floating WhatsApp button for quick contact
 */

import { render, screen } from '@testing-library/react';
import { WhatsAppButton } from './WhatsAppButton';

// Mock environment
jest.mock('@/lib/env', () => ({
  env: {
    NEXT_PUBLIC_WHATSAPP_NUMBER: '5561981448553',
  },
}));

// Mock WhatsApp utility
jest.mock('@/lib/whatsapp', () => ({
  getWhatsAppLink: (number: string) => `https://wa.me/${number}`,
}));

describe('WhatsAppButton Component', () => {
  describe('Rendering', () => {
    it('should render a link element', () => {
      render(<WhatsAppButton />);
      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
    });

    it('should have correct WhatsApp URL', () => {
      render(<WhatsAppButton />);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', 'https://wa.me/5561981448553');
    });

    it('should open in new tab', () => {
      render(<WhatsAppButton />);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('target', '_blank');
    });

    it('should have security attributes', () => {
      render(<WhatsAppButton />);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Accessibility', () => {
    it('should have aria-label for screen readers', () => {
      render(<WhatsAppButton />);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute(
        'aria-label',
        'Entrar em contato pelo WhatsApp'
      );
    });

    it('should have WhatsApp icon with aria-hidden', () => {
      render(<WhatsAppButton />);
      const svg = document.querySelector('svg');
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Styling', () => {
    it('should have fixed positioning', () => {
      render(<WhatsAppButton />);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('fixed');
    });

    it('should be positioned bottom-right', () => {
      render(<WhatsAppButton />);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('bottom-6');
      expect(link).toHaveClass('right-6');
    });

    it('should have WhatsApp green background', () => {
      render(<WhatsAppButton />);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('bg-[#25D366]');
    });

    it('should have high z-index', () => {
      render(<WhatsAppButton />);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('z-50');
    });

    it('should have rounded shape', () => {
      render(<WhatsAppButton />);
      const link = screen.getByRole('link');
      expect(link).toHaveClass('rounded-full');
    });
  });
});
