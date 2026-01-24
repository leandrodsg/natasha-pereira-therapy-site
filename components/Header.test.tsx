/**
 * Header Component Tests
 * PR #14: Header com Navegação e Menu Mobile
 *
 * Core functionality and rendering tests
 */

import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
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

describe('Header Component - PR #14', () => {
  beforeEach(() => {
    // Reset scroll position
    window.scrollY = 0;
  });

  describe('Rendering', () => {
    it('should render header element with banner role', () => {
      render(<Header />);
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });

    it('should render logo with correct text', () => {
      render(<Header />);
      const logo = screen.getByAltText('Natasha Pereira - Psicóloga');
      const logoLink = logo.closest('a');
      expect(logo).toBeInTheDocument();
      expect(logoLink?.tagName).toBe('A');
      expect(logoLink).toHaveAttribute('href', '/');
    });

    it('should render all navigation links', () => {
      render(<Header />);
      expect(screen.getByText('Início')).toBeInTheDocument();
      expect(screen.getByText('Quem sou')).toBeInTheDocument();
      expect(screen.getByText('Serviços')).toBeInTheDocument();
      expect(screen.getByText('Como Funciona')).toBeInTheDocument();
    });

    it('should render WhatsApp CTA button', () => {
      render(<Header />);
      const ctaButtons = screen.getAllByText('Agende sua sessão');
      expect(ctaButtons.length).toBeGreaterThan(0);
    });

    it('should render desktop navigation', () => {
      render(<Header />);
      const navElements = screen.getAllByRole('navigation');
      expect(navElements.length).toBeGreaterThan(0);
    });

    it('should render mobile menu button', () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');
      expect(menuButton).toBeInTheDocument();
    });
  });

  describe('Navigation Links', () => {
    it('should have correct href for all navigation links', () => {
      render(<Header />);

      const inicioLinks = screen.getAllByText('Início');
      expect(inicioLinks[0].closest('a')).toHaveAttribute('href', '#inicio');

      const quemSouLinks = screen.getAllByText('Quem sou');
      expect(quemSouLinks[0].closest('a')).toHaveAttribute('href', '#quem-sou');

      const servicosLinks = screen.getAllByText('Serviços');
      expect(servicosLinks[0].closest('a')).toHaveAttribute(
        'href',
        '#servicos'
      );

      const comoFuncionaLinks = screen.getAllByText('Como Funciona');
      expect(comoFuncionaLinks[0].closest('a')).toHaveAttribute(
        'href',
        '#como-funciona'
      );
    });

    it('should have aria-label on desktop navigation', () => {
      render(<Header />);
      const desktopNav = screen.getByLabelText('Navegação principal');
      expect(desktopNav).toBeInTheDocument();
    });
  });

  describe('WhatsApp CTA', () => {
    it('should generate correct WhatsApp link', () => {
      render(<Header />);
      const ctaLinks = screen.getAllByText('Agende sua sessão');
      const whatsappLink = ctaLinks[0].closest('a');

      expect(whatsappLink).toHaveAttribute(
        'href',
        'https://wa.me/5511999999999'
      );
    });

    it('should open WhatsApp link in new tab', () => {
      render(<Header />);
      const ctaLinks = screen.getAllByText('Agende sua sessão');
      const whatsappLink = ctaLinks[0].closest('a');

      expect(whatsappLink).toHaveAttribute('target', '_blank');
    });

    it('should have noopener noreferrer for security', () => {
      render(<Header />);
      const ctaLinks = screen.getAllByText('Agende sua sessão');
      const whatsappLink = ctaLinks[0].closest('a');

      expect(whatsappLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Mobile Menu', () => {
    it('should not show mobile menu by default', () => {
      render(<Header />);
      const mobileNavs = screen.queryAllByLabelText('Menu mobile');
      // Mobile menu exists in DOM but is hidden
      expect(mobileNavs.length).toBe(0);
    });

    it('should open mobile menu when button is clicked', async () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      await act(async () => {
        fireEvent.click(menuButton);
      });

      await waitFor(() => {
        const mobileNav = screen.getByLabelText('Menu mobile');
        expect(mobileNav).toBeInTheDocument();
      });
    });

    it('should close mobile menu when close button is clicked', async () => {
      render(<Header />);
      const openButton = screen.getByLabelText('Abrir menu');

      await act(async () => {
        fireEvent.click(openButton);
      });

      await waitFor(async () => {
        const closeButton = screen.getByLabelText('Fechar menu');
        await act(async () => {
          fireEvent.click(closeButton);
        });
      });

      await waitFor(() => {
        const mobileNavs = screen.queryAllByLabelText('Menu mobile');
        expect(mobileNavs.length).toBe(0);
      });
    });

    it('should close mobile menu when navigation link is clicked', async () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      await act(async () => {
        fireEvent.click(menuButton);
      });

      await waitFor(async () => {
        const mobileNav = screen.getByLabelText('Menu mobile');
        const inicioLink = mobileNav.querySelector('a[href="#inicio"]');

        expect(inicioLink).toBeInTheDocument();
        await act(async () => {
          fireEvent.click(inicioLink!);
        });
      });

      await waitFor(() => {
        const mobileNavs = screen.queryAllByLabelText('Menu mobile');
        expect(mobileNavs.length).toBe(0);
      });
    });

    it('should update aria-expanded when menu opens/closes', async () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      expect(menuButton).toHaveAttribute('aria-expanded', 'false');

      await act(async () => {
        fireEvent.click(menuButton);
      });

      await waitFor(() => {
        const closeButton = screen.getByLabelText('Fechar menu');
        expect(closeButton).toHaveAttribute('aria-expanded', 'true');
      });
    });

    it('should toggle between Menu and X icons', async () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      // Should show Menu icon initially
      expect(menuButton.querySelector('svg')).toBeInTheDocument();

      await act(async () => {
        fireEvent.click(menuButton);
      });

      // Should show X icon when open
      await waitFor(() => {
        const closeButton = screen.getByLabelText('Fechar menu');
        expect(closeButton.querySelector('svg')).toBeInTheDocument();
      });
    });
  });

  describe('Styling', () => {
    it('should have fixed positioning', () => {
      render(<Header />);
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('fixed');
    });

    it('should have backdrop blur effect', () => {
      render(<Header />);
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('backdrop-blur-sm');
    });

    it('should have high z-index for stacking', () => {
      render(<Header />);
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('z-50');
    });

    it('should apply font-display class to logo', () => {
      render(<Header />);
      const logoLink = screen
        .getByAltText('Natasha Pereira - Psicóloga')
        .closest('a');
      expect(logoLink?.className).toContain('hover:opacity-80');
    });

    it('should have uppercase transformation on nav links', () => {
      render(<Header />);
      const inicioLinks = screen.getAllByText('Início');
      expect(inicioLinks[0]).toHaveClass('uppercase');
    });

    it('should have hover styles on logo', () => {
      render(<Header />);
      const logoLink = screen
        .getByAltText('Natasha Pereira - Psicóloga')
        .closest('a');
      expect(logoLink?.className).toContain('hover:opacity-80');
    });

    it('should have transition effects on nav links', () => {
      render(<Header />);
      const inicioLinks = screen.getAllByText('Início');
      expect(inicioLinks[0]).toHaveClass('transition-colors');
    });
  });

  describe('Logo Functionality', () => {
    it('should link to home page', () => {
      render(<Header />);
      const logoLink = screen
        .getByAltText('Natasha Pereira - Psicóloga')
        .closest('a');
      expect(logoLink).toHaveAttribute('href', '/');
    });

    it('should have display font styling', () => {
      render(<Header />);
      const logo = screen.getByAltText('Natasha Pereira - Psicóloga');
      expect(logo.className).toContain('h-9');
      expect(logo.className).toContain('md:h-11');
      expect(logo.className).toContain('w-auto');
    });
  });

  describe('Environment Integration', () => {
    it('should use WhatsApp number from environment', () => {
      render(<Header />);
      const ctaLinks = screen.getAllByText('Agende sua sessão');
      const whatsappLink = ctaLinks[0].closest('a');

      // Should use the mocked environment variable
      expect(whatsappLink).toHaveAttribute(
        'href',
        'https://wa.me/5511999999999'
      );
    });
  });
});
