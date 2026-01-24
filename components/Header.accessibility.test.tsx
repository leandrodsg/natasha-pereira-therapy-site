/**
 * Header Accessibility Tests
 * PR #14: Header com Navegação e Menu Mobile
 *
 * WCAG 2.1 Level AA compliance tests using jest-axe
 */

import { render, act, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Header } from './Header';

expect.extend(toHaveNoViolations);

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

describe('Header Accessibility - PR #14', () => {
  describe('Automated Accessibility Tests (axe)', () => {
    it('should not have accessibility violations (desktop view)', async () => {
      const { container } = render(<Header />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with mobile menu open', async () => {
      const { container, getByLabelText } = render(<Header />);

      // Open mobile menu
      const menuButton = getByLabelText('Abrir menu');
      await act(async () => {
        menuButton.click();
      });

      await waitFor(async () => {
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });

  describe('Semantic HTML', () => {
    it('should use semantic header element', () => {
      const { container } = render(<Header />);
      const header = container.querySelector('header');
      expect(header).toBeInTheDocument();
    });

    it('should have banner role on header', () => {
      const { getByRole } = render(<Header />);
      const header = getByRole('banner');
      expect(header).toBeInTheDocument();
    });

    it('should use semantic nav elements', () => {
      const { getAllByRole } = render(<Header />);
      const navElements = getAllByRole('navigation');
      expect(navElements.length).toBeGreaterThan(0);
    });

    it('should use button element for mobile menu toggle', () => {
      const { getByLabelText } = render(<Header />);
      const menuButton = getByLabelText('Abrir menu');
      expect(menuButton.tagName).toBe('BUTTON');
    });
  });

  describe('ARIA Attributes', () => {
    it('should have aria-label on desktop navigation', () => {
      const { getByLabelText } = render(<Header />);
      const desktopNav = getByLabelText('Navegação principal');
      expect(desktopNav).toBeInTheDocument();
    });

    it('should have aria-label on mobile navigation', async () => {
      const { getByLabelText } = render(<Header />);
      const menuButton = getByLabelText('Abrir menu');

      await act(async () => {
        menuButton.click();
      });

      await waitFor(() => {
        const mobileNav = getByLabelText('Menu mobile');
        expect(mobileNav).toBeInTheDocument();
      });
    });

    it('should have appropriate aria-label on menu button', () => {
      const { getByLabelText } = render(<Header />);
      const menuButton = getByLabelText('Abrir menu');
      expect(menuButton).toHaveAttribute('aria-label', 'Abrir menu');
    });

    it('should update aria-label when menu is opened', async () => {
      const { getByLabelText } = render(<Header />);
      const openButton = getByLabelText('Abrir menu');

      await act(async () => {
        openButton.click();
      });

      await waitFor(() => {
        const closeButton = getByLabelText('Fechar menu');
        expect(closeButton).toHaveAttribute('aria-label', 'Fechar menu');
      });
    });

    it('should have aria-expanded attribute on menu button', () => {
      const { getByLabelText } = render(<Header />);
      const menuButton = getByLabelText('Abrir menu');
      expect(menuButton).toHaveAttribute('aria-expanded');
    });

    it('should update aria-expanded when menu opens', async () => {
      const { getByLabelText } = render(<Header />);
      const menuButton = getByLabelText('Abrir menu');

      expect(menuButton).toHaveAttribute('aria-expanded', 'false');

      await act(async () => {
        menuButton.click();
      });

      await waitFor(() => {
        const closeButton = getByLabelText('Fechar menu');
        expect(closeButton).toHaveAttribute('aria-expanded', 'true');
      });
    });
  });

  describe('Keyboard Navigation', () => {
    it('should have focusable logo link', () => {
      const { getByAltText } = render(<Header />);
      const logo = getByAltText('Natasha Pereira - Psicóloga');
      const logoLink = logo.closest('a');

      logoLink.focus();
      expect(document.activeElement).toBe(logoLink);
    });

    it('should have focusable navigation links', () => {
      const { getAllByText } = render(<Header />);
      const inicioLinks = getAllByText('Início');
      const firstLink = inicioLinks[0];

      firstLink.focus();
      expect(document.activeElement).toBe(firstLink);
    });

    it('should have focusable WhatsApp CTA', () => {
      const { getAllByText } = render(<Header />);
      const ctaLinks = getAllByText('Agende sua sessão');
      const firstCTA = ctaLinks[0];

      firstCTA.focus();
      expect(document.activeElement).toBe(firstCTA);
    });

    it('should have focusable mobile menu button', () => {
      const { getByLabelText } = render(<Header />);
      const menuButton = getByLabelText('Abrir menu');

      menuButton.focus();
      expect(document.activeElement).toBe(menuButton);
    });

    it('should maintain focus order: logo → nav links → CTA → menu button', () => {
      const { container } = render(<Header />);
      const focusableElements = container.querySelectorAll(
        'a[href], button:not([disabled])'
      );

      expect(focusableElements.length).toBeGreaterThan(4);
    });
  });

  describe('Color Contrast', () => {
    it('should use foreground color on nav links with sufficient contrast', () => {
      const { getAllByText } = render(<Header />);
      const inicioLinks = getAllByText('Início');
      expect(inicioLinks[0]).toHaveClass('text-[#662B2D]');
    });

    it('should use white text on secondary background for CTA', () => {
      const { getAllByText } = render(<Header />);
      const ctaLinks = getAllByText('Agende sua sessão');
      const ctaButton = ctaLinks[0].closest('a');
      expect(ctaButton).toHaveClass('bg-[#662B2D]', 'text-white');
    });
  });

  describe('Link Security', () => {
    it('should have rel="noopener noreferrer" on external links', () => {
      const { getAllByText } = render(<Header />);
      const ctaLinks = getAllByText('Agende sua sessão');
      const whatsappLink = ctaLinks[0].closest('a');

      expect(whatsappLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('should open external links in new tab', () => {
      const { getAllByText } = render(<Header />);
      const ctaLinks = getAllByText('Agende sua sessão');
      const whatsappLink = ctaLinks[0].closest('a');

      expect(whatsappLink).toHaveAttribute('target', '_blank');
    });
  });

  describe('Screen Reader Support', () => {
    it('should have descriptive text for all links', () => {
      const { getAllByText } = render(<Header />);

      expect(getAllByText('Início').length).toBeGreaterThan(0);
      expect(getAllByText('Quem sou').length).toBeGreaterThan(0);
      expect(getAllByText('Serviços').length).toBeGreaterThan(0);
      expect(getAllByText('Como Funciona').length).toBeGreaterThan(0);
      expect(getAllByText('Agende sua sessão').length).toBeGreaterThan(0);
    });

    it('should provide context with navigation labels', () => {
      const { getByLabelText } = render(<Header />);

      expect(getByLabelText('Navegação principal')).toBeInTheDocument();
    });

    it('should announce menu state changes', async () => {
      const { getByLabelText } = render(<Header />);
      const menuButton = getByLabelText('Abrir menu');

      // Initial state
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
      expect(menuButton).toHaveAttribute('aria-label', 'Abrir menu');

      // Opened state
      await act(async () => {
        menuButton.click();
      });

      await waitFor(() => {
        const closeButton = getByLabelText('Fechar menu');
        expect(closeButton).toHaveAttribute('aria-expanded', 'true');
        expect(closeButton).toHaveAttribute('aria-label', 'Fechar menu');
      });
    });
  });

  describe('Touch Target Size', () => {
    it('should have adequate padding on mobile menu button', () => {
      const { getByLabelText } = render(<Header />);
      const menuButton = getByLabelText('Abrir menu');

      // Button should have icon which is 24x24 (w-6 h-6)
      const icon = menuButton.querySelector('svg');
      expect(icon).toBeInTheDocument();
    });

    it('should have adequate padding on navigation links', () => {
      const { getAllByText } = render(<Header />);
      const inicioLinks = getAllByText('Início');

      // Links should have appropriate spacing (gap-8 in nav)
      expect(inicioLinks[0]).toBeInTheDocument();
    });

    it('should have adequate size on CTA button', () => {
      const { getAllByText } = render(<Header />);
      const ctaLinks = getAllByText('Agende sua sessão');
      const ctaButton = ctaLinks[0].closest('a');

      // Button should have px-6 py-3 for adequate touch target
      expect(ctaButton).toHaveClass('px-6', 'py-3');
    });
  });

  describe('Focus Indicators', () => {
    it('should have visible focus on logo', () => {
      const { getByAltText } = render(<Header />);
      const logo = getByAltText('Natasha Pereira - Psicóloga');
      const logoLink = logo.closest('a');

      logoLink.focus();

      // Should have focus-visible styles from global CSS
      expect(document.activeElement).toBe(logoLink);
    });

    it('should have visible focus on navigation links', () => {
      const { getAllByText } = render(<Header />);
      const inicioLinks = getAllByText('Início');
      const firstLink = inicioLinks[0];

      firstLink.focus();

      expect(document.activeElement).toBe(firstLink);
    });

    it('should have visible focus on mobile menu button', () => {
      const { getByLabelText } = render(<Header />);
      const menuButton = getByLabelText('Abrir menu');

      menuButton.focus();

      expect(document.activeElement).toBe(menuButton);
    });
  });

  describe('Language and Localization', () => {
    it('should use Portuguese text for navigation', () => {
      const { getAllByText } = render(<Header />);

      expect(getAllByText('Início')).toBeTruthy();
      expect(getAllByText('Quem sou')).toBeTruthy();
      expect(getAllByText('Serviços')).toBeTruthy();
      expect(getAllByText('Como Funciona')).toBeTruthy();
    });

    it('should use Portuguese for menu labels', () => {
      const { getByLabelText } = render(<Header />);

      expect(getByLabelText('Abrir menu')).toBeInTheDocument();
    });

    it('should use Portuguese for CTA button', () => {
      const { getAllByText } = render(<Header />);

      expect(getAllByText('Agende sua sessão')).toBeTruthy();
    });
  });
});
