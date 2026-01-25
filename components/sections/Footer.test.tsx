import { render, screen, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Footer from './Footer';

expect.extend(toHaveNoViolations);

describe('Footer', () => {
  describe('Core Content', () => {
    it('renders the name "Natasha Pereira" as a clickable link', () => {
      render(<Footer />);
      const nameLink = screen.getByRole('link', { name: 'Natasha Pereira' });
      expect(nameLink).toBeInTheDocument();
      expect(nameLink).toHaveAttribute('href', '#');
    });

    it('should scroll to top when name is clicked', () => {
      const scrollToSpy = jest.fn();
      Object.defineProperty(window, 'scrollTo', {
        writable: true,
        value: scrollToSpy,
      });

      render(<Footer />);
      const nameLink = screen.getByRole('link', { name: 'Natasha Pereira' });

      fireEvent.click(nameLink);

      expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });

    it('renders the CRP information in copyright', () => {
      render(<Footer />);
      expect(screen.getByText(/CRP 01\/22302/)).toBeInTheDocument();
    });

    it('renders the copyright year', () => {
      render(<Footer />);
      expect(screen.getByText(/© 2026/)).toBeInTheDocument();
    });

    it('renders with contentinfo role', () => {
      render(<Footer />);
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });
  });

  describe('Social Icons', () => {
    it('renders WhatsApp social icon', () => {
      render(<Footer />);
      const whatsappLink = screen.getByLabelText('WhatsApp');
      expect(whatsappLink).toBeInTheDocument();
      expect(whatsappLink.querySelector('svg')).toBeInTheDocument();
    });

    it('renders Instagram social icon', () => {
      render(<Footer />);
      const instagramLink = screen.getByLabelText('Instagram');
      expect(instagramLink).toBeInTheDocument();
      expect(instagramLink.querySelector('svg')).toBeInTheDocument();
    });

    it('renders TikTok social icon', () => {
      render(<Footer />);
      const tiktokLink = screen.getByLabelText('TikTok');
      expect(tiktokLink).toBeInTheDocument();
      expect(tiktokLink.querySelector('svg')).toBeInTheDocument();
    });

    it('social links open in new tab with security attributes', () => {
      render(<Footer />);

      const socialLinks = [
        screen.getByLabelText('WhatsApp'),
        screen.getByLabelText('Instagram'),
        screen.getByLabelText('TikTok'),
      ];

      socialLinks.forEach((link) => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });
  });

  describe('Visual Styling', () => {
    it('has vinho/marsala background color (#662B2D)', () => {
      render(<Footer />);
      const footer = screen.getByRole('contentinfo');
      expect(footer).toHaveClass('bg-[#662B2D]');
    });

    it('has white or cream text color', () => {
      render(<Footer />);
      const footer = screen.getByRole('contentinfo');
      expect(footer.className).toMatch(/text-(white|cream|\[#f4eee5\])/);
    });

    it('has horizontal layout with flex', () => {
      render(<Footer />);
      const footer = screen.getByRole('contentinfo');
      const container = footer.firstElementChild;
      expect(container).toHaveClass('max-w-6xl');
    });

    it('has compact padding (py-6)', () => {
      render(<Footer />);
      const footer = screen.getByRole('contentinfo');
      expect(footer).toHaveClass('py-6');
    });

    it('renders name with appropriate size (not oversized)', () => {
      render(<Footer />);
      const name = screen.getByRole('link', { name: 'Natasha Pereira' });
      // Should not have text-5xl (too big), should be smaller
      expect(name).not.toHaveClass('text-5xl');
    });
  });

  describe('Simplified Structure', () => {
    it('does not render contact section heading', () => {
      render(<Footer />);
      expect(
        screen.queryByRole('heading', { name: 'Contato' })
      ).not.toBeInTheDocument();
    });

    it('does not render navigation section heading', () => {
      render(<Footer />);
      expect(
        screen.queryByRole('heading', { name: 'Navegação' })
      ).not.toBeInTheDocument();
    });

    it('renders navigation links', () => {
      render(<Footer />);
      expect(screen.getByRole('link', { name: 'Sobre' })).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: 'Serviços' })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: 'Como Funciona' })
      ).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Dúvidas' })).toBeInTheDocument();
    });

    it('renders contact info inline without labels', () => {
      render(<Footer />);
      // Has contact info but without "Endereço:" or "Email:" labels
      expect(screen.queryByText(/Endereço:/)).not.toBeInTheDocument();
      expect(screen.queryByText(/Email:/)).not.toBeInTheDocument();
      // But does have the actual content
      expect(
        screen.getByText('npclinicapsicologa@gmail.com')
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Centro Clínico Brasília Medical Center/i)
      ).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Footer />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper footer landmark', () => {
      render(<Footer />);
      const footer = screen.getByRole('contentinfo');
      expect(footer.tagName).toBe('FOOTER');
    });

    it('social links have aria-labels', () => {
      render(<Footer />);
      expect(screen.getByLabelText('WhatsApp')).toBeInTheDocument();
      expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
      expect(screen.getByLabelText('TikTok')).toBeInTheDocument();
    });
  });
});
