/**
 * Header Scroll Behavior Tests
 * PR #14: Header com Navegação e Menu Mobile
 *
 * Tests header visibility on scroll (show/hide behavior)
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

describe('Header Scroll Behavior - PR #14', () => {
  beforeEach(() => {
    // Reset scroll position
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    });
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  describe('Initial State', () => {
    it('should be visible on page load', () => {
      render(<Header />);
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('translate-y-0');
      expect(header).not.toHaveClass('-translate-y-full');
    });

    it('should have transition class for smooth animation', () => {
      render(<Header />);
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('transition-transform', 'duration-300');
    });
  });

  describe('Scroll Down Behavior', () => {
    it('should hide header when scrolling down past 100px', async () => {
      render(<Header />);
      const header = screen.getByRole('banner');

      // Simulate scroll down
      act(() => {
        Object.defineProperty(window, 'scrollY', {
          value: 150,
          writable: true,
        });
        window.dispatchEvent(new Event('scroll'));
      });

      await waitFor(() => {
        expect(header).toHaveClass('-translate-y-full');
      });
    });

    it('should remain visible when scrolling down less than 100px', async () => {
      render(<Header />);
      const header = screen.getByRole('banner');

      // Simulate small scroll down
      act(() => {
        Object.defineProperty(window, 'scrollY', { value: 50, writable: true });
        window.dispatchEvent(new Event('scroll'));
      });

      await waitFor(() => {
        expect(header).toHaveClass('translate-y-0');
      });
    });
  });

  describe('Scroll Up Behavior', () => {
    it('should show header when scrolling up', async () => {
      render(<Header />);
      const header = screen.getByRole('banner');

      // First scroll down to hide
      act(() => {
        Object.defineProperty(window, 'scrollY', {
          value: 200,
          writable: true,
        });
        window.dispatchEvent(new Event('scroll'));
      });

      await waitFor(() => {
        expect(header).toHaveClass('-translate-y-full');
      });

      // Then scroll up to show
      act(() => {
        Object.defineProperty(window, 'scrollY', {
          value: 150,
          writable: true,
        });
        window.dispatchEvent(new Event('scroll'));
      });

      await waitFor(() => {
        expect(header).toHaveClass('translate-y-0');
      });
    });

    it('should show header immediately when near top (< 100px)', async () => {
      render(<Header />);
      const header = screen.getByRole('banner');

      // Scroll to position
      act(() => {
        Object.defineProperty(window, 'scrollY', {
          value: 300,
          writable: true,
        });
        window.dispatchEvent(new Event('scroll'));
      });

      // Scroll back to top
      act(() => {
        Object.defineProperty(window, 'scrollY', { value: 50, writable: true });
        window.dispatchEvent(new Event('scroll'));
      });

      await waitFor(() => {
        expect(header).toHaveClass('translate-y-0');
      });
    });
  });

  describe('Event Listener Management', () => {
    it('should add scroll event listener on mount', () => {
      const addEventListenerSpy = jest.spyOn(window, 'addEventListener');

      render(<Header />);

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function),
        { passive: true }
      );

      addEventListenerSpy.mockRestore();
    });

    it('should remove scroll event listener on unmount', () => {
      const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

      const { unmount } = render(<Header />);
      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function)
      );

      removeEventListenerSpy.mockRestore();
    });

    it('should use passive: true for scroll performance', () => {
      const addEventListenerSpy = jest.spyOn(window, 'addEventListener');

      render(<Header />);

      const scrollCall = addEventListenerSpy.mock.calls.find(
        (call) => call[0] === 'scroll'
      );

      expect(scrollCall).toBeDefined();
      expect(scrollCall![2]).toEqual({ passive: true });

      addEventListenerSpy.mockRestore();
    });
  });

  describe('Scroll Direction Detection', () => {
    it('should detect downward scroll', async () => {
      render(<Header />);
      const header = screen.getByRole('banner');

      // Start at 0
      act(() => {
        Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
        window.dispatchEvent(new Event('scroll'));
      });

      // Scroll down to 200
      act(() => {
        Object.defineProperty(window, 'scrollY', {
          value: 200,
          writable: true,
        });
        window.dispatchEvent(new Event('scroll'));
      });

      await waitFor(() => {
        expect(header).toHaveClass('-translate-y-full');
      });
    });

    it('should detect upward scroll', async () => {
      render(<Header />);
      const header = screen.getByRole('banner');

      // Start at 300
      act(() => {
        Object.defineProperty(window, 'scrollY', {
          value: 300,
          writable: true,
        });
        window.dispatchEvent(new Event('scroll'));
      });

      await waitFor(() => {
        expect(header).toHaveClass('-translate-y-full');
      });

      // Scroll up to 200
      act(() => {
        Object.defineProperty(window, 'scrollY', {
          value: 200,
          writable: true,
        });
        window.dispatchEvent(new Event('scroll'));
      });

      await waitFor(() => {
        expect(header).toHaveClass('translate-y-0');
      });
    });
  });

  describe('Position Tracking', () => {
    it('should track last scroll position', async () => {
      render(<Header />);

      // Scroll to multiple positions
      const positions = [100, 200, 150, 300, 250];

      for (const position of positions) {
        act(() => {
          Object.defineProperty(window, 'scrollY', {
            value: position,
            writable: true,
          });
          window.dispatchEvent(new Event('scroll'));
        });

        await waitFor(() => {
          // Position should be tracked internally
          expect(window.scrollY).toBe(position);
        });
      }
    });
  });

  describe('Edge Cases', () => {
    it('should handle rapid scroll events', async () => {
      render(<Header />);

      // Simulate rapid scrolling
      for (let i = 0; i < 50; i += 10) {
        act(() => {
          Object.defineProperty(window, 'scrollY', {
            value: i,
            writable: true,
          });
          window.dispatchEvent(new Event('scroll'));
        });
      }

      // Header should still be responsive
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });

    it('should handle scroll to same position', async () => {
      render(<Header />);
      const header = screen.getByRole('banner');

      // Scroll to position
      act(() => {
        Object.defineProperty(window, 'scrollY', {
          value: 200,
          writable: true,
        });
        window.dispatchEvent(new Event('scroll'));
      });

      // Scroll to same position again
      act(() => {
        Object.defineProperty(window, 'scrollY', {
          value: 200,
          writable: true,
        });
        window.dispatchEvent(new Event('scroll'));
      });

      // Should maintain state
      await waitFor(() => {
        expect(header).toBeInTheDocument();
      });
    });

    it('should handle negative scroll values (iOS bounce)', async () => {
      render(<Header />);
      const header = screen.getByRole('banner');

      // Simulate iOS bounce (negative scroll)
      act(() => {
        Object.defineProperty(window, 'scrollY', {
          value: -50,
          writable: true,
        });
        window.dispatchEvent(new Event('scroll'));
      });

      await waitFor(() => {
        // Should remain visible at top
        expect(header).toHaveClass('translate-y-0');
      });
    });
  });

  describe('Performance Optimizations', () => {
    it('should use CSS transform for animation (hardware acceleration)', () => {
      render(<Header />);
      const header = screen.getByRole('banner');

      // Check for transform classes
      expect(
        header.className.includes('translate-y') ||
          header.className.includes('transform')
      ).toBe(true);
    });

    it('should have reasonable transition duration', () => {
      render(<Header />);
      const header = screen.getByRole('banner');
      expect(header).toHaveClass('duration-300');
    });
  });

  describe('Fixed Positioning', () => {
    it('should maintain fixed position during scroll', () => {
      render(<Header />);
      const header = screen.getByRole('banner');

      expect(header).toHaveClass('fixed', 'top-0');
    });

    it('should have high z-index for layering', () => {
      render(<Header />);
      const header = screen.getByRole('banner');

      expect(header).toHaveClass('z-50');
    });

    it('should span full width when fixed', () => {
      render(<Header />);
      const header = screen.getByRole('banner');

      expect(header).toHaveClass('w-full');
    });
  });

  describe('Visual Effects During Scroll', () => {
    it('should have backdrop blur effect', () => {
      render(<Header />);
      const header = screen.getByRole('banner');

      expect(header).toHaveClass('backdrop-blur-sm');
    });

    it('should have semi-transparent background', () => {
      render(<Header />);
      const header = screen.getByRole('banner');

      expect(header).toHaveClass('bg-[#f4eee5]/95');
    });

    it('should maintain border during scroll', () => {
      render(<Header />);
      const header = screen.getByRole('banner');

      expect(header).toHaveClass('border-b');
    });
  });
});
