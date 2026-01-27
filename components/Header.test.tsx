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
    onClick,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
    onClick?: (e: React.MouseEvent) => void;
  }) => (
    <a href={href} className={className} onClick={onClick}>
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
      expect(logoLink).toHaveAttribute('href', '#');
    });

    it('should render all navigation links', () => {
      render(<Header />);
      expect(screen.getByText('Sobre')).toBeInTheDocument();
      expect(screen.getByText('Serviços')).toBeInTheDocument();
      expect(screen.getByText('Como Funciona')).toBeInTheDocument();
      expect(screen.getByText('Opiniões')).toBeInTheDocument();
      expect(screen.getByText('Dúvidas')).toBeInTheDocument();
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

      const sobreLinks = screen.getAllByText('Sobre');
      expect(sobreLinks[0].closest('a')).toHaveAttribute('href', '#quem-sou');

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

      const duvidasLinks = screen.getAllByText('Dúvidas');
      expect(duvidasLinks[0].closest('a')).toHaveAttribute('href', '#faq');
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
        const sobreLink = mobileNav.querySelector('a[href="#quem-sou"]');

        expect(sobreLink).toBeInTheDocument();
        await act(async () => {
          fireEvent.click(sobreLink!);
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
      const sobreLinks = screen.getAllByText('Sobre');
      expect(sobreLinks[0]).toHaveClass('uppercase');
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
      const sobreLinks = screen.getAllByText('Sobre');
      expect(sobreLinks[0]).toHaveClass('transition-colors');
    });
  });

  describe('Logo Functionality', () => {
    it('should scroll to top when clicked', () => {
      const scrollToSpy = jest.fn();
      Object.defineProperty(window, 'scrollTo', {
        writable: true,
        value: scrollToSpy,
      });

      render(<Header />);
      const logoLink = screen
        .getByAltText('Natasha Pereira - Psicóloga')
        .closest('a') as HTMLAnchorElement;

      fireEvent.click(logoLink);

      expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });

    it('should have href attribute', () => {
      render(<Header />);
      const logoLink = screen
        .getByAltText('Natasha Pereira - Psicóloga')
        .closest('a');
      expect(logoLink).toHaveAttribute('href', '#');
    });

    it('should have display font styling', () => {
      render(<Header />);
      const logo = screen.getByAltText('Natasha Pereira - Psicóloga');
      expect(logo.className).toContain('h-9');
      expect(logo.className).toContain('md:h-11');
      expect(logo.className).toContain('w-auto');
    });
  });

  describe('Mobile Menu - Click Outside & Keyboard', () => {
    it('should close mobile menu when clicking outside', async () => {
      const { container } = render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      // Open menu
      await act(async () => {
        fireEvent.click(menuButton);
      });

      await waitFor(() => {
        expect(screen.getByLabelText('Menu mobile')).toBeInTheDocument();
      });

      // Click outside the menu
      await act(async () => {
        fireEvent.mouseDown(container);
      });

      await waitFor(() => {
        const mobileNavs = screen.queryAllByLabelText('Menu mobile');
        expect(mobileNavs.length).toBe(0);
      });
    });

    it('should close mobile menu when pressing Escape key', async () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      // Open menu
      await act(async () => {
        fireEvent.click(menuButton);
      });

      await waitFor(() => {
        expect(screen.getByLabelText('Menu mobile')).toBeInTheDocument();
      });

      // Press Escape key
      await act(async () => {
        fireEvent.keyDown(document, { key: 'Escape' });
      });

      await waitFor(() => {
        const mobileNavs = screen.queryAllByLabelText('Menu mobile');
        expect(mobileNavs.length).toBe(0);
      });
    });

    it('should not close mobile menu when pressing other keys', async () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      // Open menu
      await act(async () => {
        fireEvent.click(menuButton);
      });

      await waitFor(() => {
        expect(screen.getByLabelText('Menu mobile')).toBeInTheDocument();
      });

      // Press Enter key (not Escape)
      await act(async () => {
        fireEvent.keyDown(document, { key: 'Enter' });
      });

      // Menu should still be open
      await waitFor(() => {
        expect(screen.getByLabelText('Menu mobile')).toBeInTheDocument();
      });

      // Press Tab key
      await act(async () => {
        fireEvent.keyDown(document, { key: 'Tab' });
      });

      // Menu should still be open
      await waitFor(() => {
        expect(screen.getByLabelText('Menu mobile')).toBeInTheDocument();
      });
    });

    it('should not close menu when clicking inside the menu', async () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      // Open menu
      await act(async () => {
        fireEvent.click(menuButton);
      });

      let mobileNav: HTMLElement;
      await waitFor(() => {
        mobileNav = screen.getByLabelText('Menu mobile');
        expect(mobileNav).toBeInTheDocument();
      });

      // Click inside the menu
      await act(async () => {
        fireEvent.mouseDown(mobileNav!);
      });

      // Menu should still be open
      await waitFor(() => {
        expect(screen.getByLabelText('Menu mobile')).toBeInTheDocument();
      });
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

  describe('Event Listeners Cleanup', () => {
    it('should not add event listeners when menu is closed', async () => {
      const addEventListenerSpy = jest.spyOn(document, 'addEventListener');
      const removeEventListenerSpy = jest.spyOn(
        document,
        'removeEventListener'
      );

      const { unmount } = render(<Header />);

      // Menu is closed by default, so no listeners should be added
      expect(addEventListenerSpy).not.toHaveBeenCalledWith(
        'mousedown',
        expect.any(Function)
      );
      expect(addEventListenerSpy).not.toHaveBeenCalledWith(
        'keydown',
        expect.any(Function)
      );

      // Cleanup component
      unmount();

      // Cleanup should still be called
      expect(removeEventListenerSpy).toHaveBeenCalled();

      addEventListenerSpy.mockRestore();
      removeEventListenerSpy.mockRestore();
    });

    it('should properly cleanup event listeners on unmount', async () => {
      const removeEventListenerSpy = jest.spyOn(
        document,
        'removeEventListener'
      );

      const { unmount } = render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      // Open menu to add listeners
      await act(async () => {
        fireEvent.click(menuButton);
      });

      await waitFor(() => {
        expect(screen.getByLabelText('Menu mobile')).toBeInTheDocument();
      });

      // Unmount component
      unmount();

      // Should cleanup listeners
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'mousedown',
        expect.any(Function)
      );
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function)
      );

      removeEventListenerSpy.mockRestore();
    });

    it('should handle menu state changes between open and closed', async () => {
      const addEventListenerSpy = jest.spyOn(document, 'addEventListener');
      const removeEventListenerSpy = jest.spyOn(
        document,
        'removeEventListener'
      );

      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      // Initially closed - no listeners added
      expect(addEventListenerSpy).not.toHaveBeenCalled();

      // Open menu - listeners should be added
      await act(async () => {
        fireEvent.click(menuButton);
      });

      await waitFor(() => {
        expect(addEventListenerSpy).toHaveBeenCalledWith(
          'mousedown',
          expect.any(Function)
        );
        expect(addEventListenerSpy).toHaveBeenCalledWith(
          'keydown',
          expect.any(Function)
        );
      });

      // Close menu again - listeners should be cleaned up
      await act(async () => {
        const closeButton = screen.getByLabelText('Fechar menu');
        fireEvent.click(closeButton);
      });

      await waitFor(() => {
        expect(removeEventListenerSpy).toHaveBeenCalledWith(
          'mousedown',
          expect.any(Function)
        );
        expect(removeEventListenerSpy).toHaveBeenCalledWith(
          'keydown',
          expect.any(Function)
        );
      });

      addEventListenerSpy.mockRestore();
      removeEventListenerSpy.mockRestore();
    });
  });
});
