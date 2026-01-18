/**
 * Header Security Tests
 * PR #14: Header com Navegação e Menu Mobile
 *
 * Tests link safety, XSS prevention, and security best practices
 */

import { render, screen, act, waitFor } from '@testing-library/react';
import { Header } from './Header';

// Mock Next.js Link
jest.mock('next/link', () => {
  const MockLink = ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  );
  MockLink.displayName = 'Link';
  return MockLink;
});

// Mock environment
jest.mock('@/lib/env', () => ({
  env: {
    NEXT_PUBLIC_WHATSAPP_NUMBER: '5511999999999',
    NEXT_PUBLIC_SITE_NAME: 'Natasha Pereira',
  },
}));

// Mock WhatsApp utility
jest.mock('@/lib/whatsapp', () => ({
  getWhatsAppLink: (number: string) => `https://wa.me/${number}`,
}));

describe('Header Security Tests - PR #14', () => {
  describe('External Link Security', () => {
    it('should use rel="noopener noreferrer" on WhatsApp links', () => {
      render(<Header />);
      const ctaLinks = screen.getAllByText('Agende sua sessão');

      ctaLinks.forEach((cta) => {
        const link = cta.closest('a');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });

    it('should open external links in new tab', () => {
      render(<Header />);
      const ctaLinks = screen.getAllByText('Agende sua sessão');

      ctaLinks.forEach((cta) => {
        const link = cta.closest('a');
        expect(link).toHaveAttribute('target', '_blank');
      });
    });

    it('should use HTTPS for WhatsApp links', () => {
      render(<Header />);
      const ctaLinks = screen.getAllByText('Agende sua sessão');
      const whatsappLink = ctaLinks[0].closest('a');

      expect(whatsappLink?.getAttribute('href')).toMatch(/^https:\/\//);
    });

    it('should not have javascript: protocol in any links', () => {
      const { container } = render(<Header />);
      const allLinks = container.querySelectorAll('a');

      allLinks.forEach((link) => {
        const href = link.getAttribute('href') || '';
        expect(href.toLowerCase()).not.toContain('javascript:');
      });
    });

    it('should not have data: protocol in any links', () => {
      const { container } = render(<Header />);
      const allLinks = container.querySelectorAll('a');

      allLinks.forEach((link) => {
        const href = link.getAttribute('href') || '';
        expect(href.toLowerCase()).not.toContain('data:');
      });
    });
  });

  describe('XSS Prevention', () => {
    it('should not render arbitrary HTML from environment variables', () => {
      // Component should escape any HTML in text content
      render(<Header />);
      const { container } = render(<Header />);

      // Check that no <script> tags exist
      const scripts = container.querySelectorAll('script');
      expect(scripts.length).toBe(0);
    });

    it('should not have onclick handlers in markup', () => {
      const { container } = render(<Header />);
      const allElements = container.querySelectorAll('*');

      allElements.forEach((element) => {
        expect(element.getAttribute('onclick')).toBeNull();
      });
    });

    it('should not have onerror handlers in markup', () => {
      const { container } = render(<Header />);
      const allElements = container.querySelectorAll('*');

      allElements.forEach((element) => {
        expect(element.getAttribute('onerror')).toBeNull();
      });
    });

    it('should not have onload handlers in markup', () => {
      const { container } = render(<Header />);
      const allElements = container.querySelectorAll('*');

      allElements.forEach((element) => {
        expect(element.getAttribute('onload')).toBeNull();
      });
    });

    it('should properly escape navigation link text', () => {
      render(<Header />);

      // Navigation text should be rendered as text, not HTML
      const inicioText = screen.getByText('Início');
      expect(inicioText.innerHTML).toBe('Início');
    });
  });

  describe('Link Validation', () => {
    it('should use hash navigation for internal links', () => {
      render(<Header />);

      const inicioLinks = screen.getAllByText('Início');
      const link = inicioLinks[0].closest('a');
      expect(link?.getAttribute('href')).toMatch(/^#/);
    });

    it('should validate WhatsApp number format', () => {
      render(<Header />);
      const ctaLinks = screen.getAllByText('Agende sua sessão');
      const whatsappLink = ctaLinks[0].closest('a');
      const href = whatsappLink?.getAttribute('href');

      // Should match wa.me URL pattern
      expect(href).toMatch(/^https:\/\/wa\.me\/\d+$/);
    });

    it('should not have empty href attributes', () => {
      const { container } = render(<Header />);
      const allLinks = container.querySelectorAll('a');

      allLinks.forEach((link) => {
        const href = link.getAttribute('href');
        expect(href).toBeTruthy();
        expect(href).not.toBe('');
      });
    });

    it('should use valid anchor IDs for navigation', () => {
      render(<Header />);
      const navLinks = [
        { text: 'Início', id: 'inicio' },
        { text: 'Quem sou', id: 'quem-sou' },
        { text: 'Serviços', id: 'servicos' },
        { text: 'Como Funciona', id: 'como-funciona' },
      ];

      navLinks.forEach(({ text, id }) => {
        const links = screen.getAllByText(text);
        const link = links[0].closest('a');
        expect(link?.getAttribute('href')).toBe(`#${id}`);
      });
    });
  });

  describe('Content Security', () => {
    it('should not render user-generated content without sanitization', () => {
      // Header uses static content only (no user input)
      render(<Header />);
      const { container } = render(<Header />);

      // Verify only expected content is rendered
      expect(container.textContent).toContain('Início');
      expect(container.textContent).toContain('Agende sua sessão');
    });

    it('should not have inline styles that could be exploited', () => {
      const { container } = render(<Header />);
      const allElements = container.querySelectorAll('*');

      allElements.forEach((element) => {
        const style = element.getAttribute('style');
        if (style) {
          // If inline styles exist, ensure they don't contain javascript:
          expect(style.toLowerCase()).not.toContain('javascript:');
          expect(style.toLowerCase()).not.toContain('expression(');
        }
      });
    });
  });

  describe('ARIA Security', () => {
    it('should not have aria-label with executable code', () => {
      const { container } = render(<Header />);
      const elementsWithAriaLabel = container.querySelectorAll('[aria-label]');

      elementsWithAriaLabel.forEach((element) => {
        const ariaLabel = element.getAttribute('aria-label') || '';
        expect(ariaLabel.toLowerCase()).not.toContain('<script');
        expect(ariaLabel.toLowerCase()).not.toContain('javascript:');
      });
    });

    it('should use safe text in aria-expanded', () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');
      const ariaExpanded = menuButton.getAttribute('aria-expanded');

      expect(['true', 'false']).toContain(ariaExpanded);
    });
  });

  describe('React Event Handlers', () => {
    it('should use React synthetic events (not inline handlers)', () => {
      const { container } = render(<Header />);

      // React components should not have inline onclick attributes
      const buttons = container.querySelectorAll('button');
      buttons.forEach((button) => {
        expect(button.getAttribute('onclick')).toBeNull();
      });
    });
  });

  describe('Environment Variable Security', () => {
    it('should only expose NEXT_PUBLIC_* variables to client', () => {
      // This is enforced by Next.js, but we validate usage
      render(<Header />);
      const ctaLinks = screen.getAllByText('Agende sua sessão');
      const whatsappLink = ctaLinks[0].closest('a');

      // Should use the phone number from NEXT_PUBLIC_WHATSAPP_NUMBER
      expect(whatsappLink?.getAttribute('href')).toContain('5511999999999');
    });

    it('should validate phone number format from env', () => {
      render(<Header />);
      const ctaLinks = screen.getAllByText('Agende sua sessão');
      const whatsappLink = ctaLinks[0].closest('a');
      const href = whatsappLink?.getAttribute('href') || '';

      // Extract phone number from URL
      const phoneMatch = href.match(/wa\.me\/(\d+)/);
      expect(phoneMatch).toBeTruthy();

      const phone = phoneMatch![1];
      // Should be numeric only
      expect(phone).toMatch(/^\d+$/);
      // Should be reasonable length (10-15 digits)
      expect(phone.length).toBeGreaterThanOrEqual(10);
      expect(phone.length).toBeLessThanOrEqual(15);
    });
  });

  describe('Mobile Menu Security', () => {
    it('should safely toggle menu state', async () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      // Multiple clicks should be safe
      for (let i = 0; i < 10; i++) {
        await act(async () => {
          menuButton.click();
        });

        await waitFor(() => {
          // Just wait a bit for state to update
        });

        // Get current button (might have changed from open to close)
        const currentButton =
          i % 2 === 0
            ? screen.getByLabelText('Fechar menu')
            : screen.getByLabelText('Abrir menu');

        expect(currentButton).toBeInTheDocument();
      }
    });

    it('should not leak state between menu toggles', async () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      // Open menu
      await act(async () => {
        menuButton.click();
      });

      await waitFor(() => {
        expect(screen.getByLabelText('Menu mobile')).toBeInTheDocument();
      });

      // Close menu
      await waitFor(async () => {
        const closeButton = screen.getByLabelText('Fechar menu');
        await act(async () => {
          closeButton.click();
        });
      });

      // Verify clean state
      await waitFor(() => {
        expect(screen.queryByLabelText('Menu mobile')).not.toBeInTheDocument();
      });
    });
  });

  describe('Link Text Security', () => {
    it('should not have misleading link text', () => {
      render(<Header />);
      const ctaLinks = screen.getAllByText('Agende sua sessão');
      const whatsappLink = ctaLinks[0].closest('a');
      const href = whatsappLink?.getAttribute('href') || '';

      // Link text should match destination (WhatsApp)
      expect(href).toContain('wa.me');
    });

    it('should have descriptive text for all navigation links', () => {
      render(<Header />);

      // All links should have meaningful text
      const expectedLinks = [
        'Início',
        'Quem sou',
        'Serviços',
        'Como Funciona',
        'Agende sua sessão',
      ];

      expectedLinks.forEach((linkText) => {
        const links = screen.getAllByText(linkText);
        expect(links.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Button Security', () => {
    it('should use button element for interactive controls', () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      expect(menuButton.tagName).toBe('BUTTON');
    });

    it('should not have type="submit" on non-form buttons', () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      expect(menuButton.getAttribute('type')).not.toBe('submit');
    });
  });

  describe('CSS Class Security', () => {
    it('should not have CSS classes with executable code', () => {
      const { container } = render(<Header />);
      const allElements = container.querySelectorAll('*');

      allElements.forEach((element) => {
        const className = element.getAttribute('class') || '';
        expect(className.toLowerCase()).not.toContain('javascript:');
        expect(className.toLowerCase()).not.toContain('<script');
      });
    });
  });

  describe('Protocol Security', () => {
    it('should only use https: and hash (#) protocols', () => {
      const { container } = render(<Header />);
      const allLinks = container.querySelectorAll('a[href]');

      allLinks.forEach((link) => {
        const href = link.getAttribute('href') || '';

        if (href.startsWith('http')) {
          expect(href).toMatch(/^https:\/\//);
        } else if (!href.startsWith('#') && !href.startsWith('/')) {
          // Should be hash or relative
          fail(`Unexpected protocol in href: ${href}`);
        }
      });
    });
  });

  describe('Injection Prevention', () => {
    it('should not be vulnerable to HTML injection', () => {
      const { container } = render(<Header />);

      // Check that HTML entities are properly escaped
      const textContent = container.textContent || '';
      expect(textContent).not.toContain('<script>');
      expect(textContent).not.toContain('</script>');
    });

    it('should not be vulnerable to attribute injection', () => {
      const { container } = render(<Header />);
      const allElements = container.querySelectorAll('*');

      allElements.forEach((element) => {
        Array.from(element.attributes).forEach((attr) => {
          const value = attr.value;
          // Attributes should not contain quote escapes
          expect(value).not.toMatch(/['"]\s*on\w+\s*=/i);
        });
      });
    });
  });
});
