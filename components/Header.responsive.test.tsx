/**
 * Header Responsive Tests
 * PR #14: Header com Navegação e Menu Mobile
 *
 * Tests responsive behavior across different viewport sizes
 */

import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
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

describe('Header Responsive Behavior - PR #14', () => {
  describe('Desktop View (md and above)', () => {
    it('should show desktop navigation', () => {
      render(<Header />);
      const desktopNav = screen.getByLabelText('Navegação principal');
      expect(desktopNav).toHaveClass('hidden', 'md:flex');
    });

    it('should hide mobile menu button on desktop', () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');
      expect(menuButton).toHaveClass('md:hidden');
    });

    it('should display all navigation links in desktop nav', () => {
      render(<Header />);
      const desktopNav = screen.getByLabelText('Navegação principal');

      const links = desktopNav.querySelectorAll('a');
      expect(links.length).toBe(5); // 5 nav links (inclui Opiniões)
    });

    it('should have horizontal layout with gap-8', () => {
      render(<Header />);
      const desktopNav = screen.getByLabelText('Navegação principal');
      expect(desktopNav).toHaveClass('gap-8');
    });
  });

  describe('Mobile View (below md)', () => {
    it('should show mobile menu button', () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');
      expect(menuButton).toHaveClass('md:hidden');
    });

    it('should hide desktop navigation on mobile', () => {
      render(<Header />);
      const desktopNav = screen.getByLabelText('Navegação principal');
      expect(desktopNav).toHaveClass('hidden', 'md:flex');
    });

    it('should display mobile menu when button is clicked', async () => {
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

    it('should have vertical layout in mobile menu', async () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      await act(async () => {
        fireEvent.click(menuButton);
      });

      await waitFor(() => {
        const mobileNav = screen.getByLabelText('Menu mobile');
        expect(mobileNav).toHaveClass('flex', 'flex-col');
      });
    });

    it('should have gap-4 in mobile menu', async () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      await act(async () => {
        fireEvent.click(menuButton);
      });

      await waitFor(() => {
        const mobileNav = screen.getByLabelText('Menu mobile');
        expect(mobileNav).toHaveClass('gap-4');
      });
    });

    it('should display mobile menu only below md breakpoint', async () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      await act(async () => {
        fireEvent.click(menuButton);
      });

      await waitFor(() => {
        const mobileMenuContainer =
          screen.getByLabelText('Menu mobile').parentElement;
        expect(mobileMenuContainer).toHaveClass('md:hidden');
      });
    });
  });

  describe('Header Padding', () => {
    it('should have responsive padding (px-6 on mobile, md:px-12 on desktop)', () => {
      render(<Header />);
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('px-6', 'md:px-12');
    });

    it('should have consistent vertical padding', () => {
      render(<Header />);
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('py-3');
    });
  });

  describe('Mobile Menu Positioning', () => {
    it('should position mobile menu below header', async () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      await act(async () => {
        fireEvent.click(menuButton);
      });

      await waitFor(() => {
        const mobileMenuContainer =
          screen.getByLabelText('Menu mobile').parentElement;
        expect(mobileMenuContainer).toHaveClass('absolute', 'top-full');
      });
    });

    it('should span full width in mobile menu', () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      fireEvent.click(menuButton);

      const mobileMenuContainer =
        screen.getByLabelText('Menu mobile').parentElement;
      expect(mobileMenuContainer).toHaveClass('left-0', 'right-0');
    });

    it('should have background in mobile menu', () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      fireEvent.click(menuButton);

      const mobileMenuContainer =
        screen.getByLabelText('Menu mobile').parentElement;
      expect(mobileMenuContainer).toHaveClass('bg-[#f4eee5]');
    });

    it('should have border on mobile menu', () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      fireEvent.click(menuButton);

      const mobileMenuContainer =
        screen.getByLabelText('Menu mobile').parentElement;
      expect(mobileMenuContainer).toHaveClass(
        'border-b',
        'border-[#662B2D]/10'
      );
    });

    it('should have padding in mobile menu', () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      fireEvent.click(menuButton);

      const mobileNav = screen.getByLabelText('Menu mobile');
      expect(mobileNav).toHaveClass('p-6');
    });
  });

  describe('Responsive Typography', () => {
    it('should use consistent font size for nav links', () => {
      render(<Header />);
      const sobreLinks = screen.getAllByText('Sobre');
      expect(sobreLinks[0]).toHaveClass('text-xs');
    });
  });

  describe('Menu Button Icons', () => {
    it('should show Menu icon when closed', () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');
      const icon = menuButton.querySelector('svg');
      expect(icon).toHaveClass('w-6', 'h-6');
    });

    it('should show X icon when opened', () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      fireEvent.click(menuButton);

      const closeButton = screen.getByLabelText('Fechar menu');
      const icon = closeButton.querySelector('svg');
      expect(icon).toHaveClass('w-6', 'h-6');
    });

    it('should use text-foreground color for icons', () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');
      expect(menuButton).toHaveClass('text-[#662B2D]');
    });
  });

  describe('CTA Button Responsiveness', () => {
    it('should show CTA in desktop navigation', () => {
      render(<Header />);
      const header = screen.getByRole('banner');
      const ctaButton = header.querySelector('a[href*="wa.me"]');
      expect(ctaButton).toBeInTheDocument();
    });

    it('should show CTA in mobile menu', () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      fireEvent.click(menuButton);

      const mobileNav = screen.getByLabelText('Menu mobile');
      const ctaButton = mobileNav.querySelector('a[href*="wa.me"]');
      expect(ctaButton).toBeInTheDocument();
    });

    it('should have consistent CTA styling across viewports', () => {
      render(<Header />);
      const ctaLinks = screen.getAllByText('Agende sua sessão');

      ctaLinks.forEach((cta) => {
        const button = cta.closest('a');
        expect(button).toHaveClass(
          'bg-[#662B2D]',
          'text-white',
          'px-6',
          'py-3'
        );
      });
    });
  });

  describe('Mobile Menu Interaction', () => {
    it('should close mobile menu when navigation link is clicked', async () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      await act(async () => {
        fireEvent.click(menuButton);
      });

      await waitFor(async () => {
        const mobileNav = screen.getByLabelText('Menu mobile');
        const sobreLink = mobileNav.querySelector('a[href="#quem-sou"]');

        await act(async () => {
          fireEvent.click(sobreLink!);
        });
      });

      await waitFor(() => {
        const mobileMenus = screen.queryAllByLabelText('Menu mobile');
        expect(mobileMenus.length).toBe(0);
      });
    });

    it('should close mobile menu when CTA is clicked', async () => {
      render(<Header />);
      const menuButton = screen.getByLabelText('Abrir menu');

      await act(async () => {
        fireEvent.click(menuButton);
      });

      await waitFor(async () => {
        const mobileNav = screen.getByLabelText('Menu mobile');
        const ctaButton = mobileNav.querySelector('a[href*="wa.me"]');

        await act(async () => {
          fireEvent.click(ctaButton!);
        });
      });

      await waitFor(() => {
        const mobileMenus = screen.queryAllByLabelText('Menu mobile');
        expect(mobileMenus.length).toBe(0);
      });
    });
  });

  describe('Layout Consistency', () => {
    it('should maintain flex layout on header', () => {
      render(<Header />);
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('flex', 'justify-between', 'items-center');
    });

    it('should have full width on all viewports', () => {
      render(<Header />);
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('w-full');
    });
  });
});
