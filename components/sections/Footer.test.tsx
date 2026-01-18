import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Footer from './Footer';

expect.extend(toHaveNoViolations);

describe('Footer', () => {
  it('renders the footer with correct Portuguese text', () => {
    render(<Footer />);

    expect(screen.getByText('Natasha Pereira')).toBeInTheDocument();
    expect(
      screen.getByText('Psicóloga especializada em terapia para mulheres.')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Contato' })
    ).toBeInTheDocument();
    expect(screen.getByText('WhatsApp: +55 61 98144-8553')).toBeInTheDocument();
    expect(
      screen.getByText('Email: natashaa.pereira@hotmail.com')
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Endereço: SEPS 705/905 Bloco A - Centro Empresarial Santa Cruz - Sala 427, Asa Sul, Brasília 70390-055'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Navegação' })
    ).toBeInTheDocument();
    expect(
      screen.getByText('© 2026 Natasha Pereira | CRP 01/22302')
    ).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: 'Início' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Quem sou' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Serviços' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contato' })).toBeInTheDocument();
  });

  it('renders social link with correct attributes', () => {
    render(<Footer />);

    const instagramLink = screen.getByRole('link', { name: 'Instagram' });
    expect(instagramLink).toHaveAttribute(
      'href',
      'https://instagram.com/sounatashapsi'
    );
    expect(instagramLink).toHaveAttribute('target', '_blank');
    expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders contact links', () => {
    render(<Footer />);

    const whatsappLink = screen.getByRole('link', {
      name: 'WhatsApp: +55 61 98144-8553',
    });
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/5561981448553');

    const emailLink = screen.getByRole('link', {
      name: 'Email: natashaa.pereira@hotmail.com',
    });
    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:natashaa.pereira@hotmail.com'
    );
  });

  it('renders with 3-column layout', () => {
    render(<Footer />);

    const gridContainer = screen.getByRole('contentinfo').firstElementChild;
    expect(gridContainer).toHaveClass(
      'grid',
      'grid-cols-1',
      'md:grid-cols-3',
      'gap-12'
    );
  });

  it('renders contact section in first column', () => {
    render(<Footer />);

    const contactHeading = screen.getByRole('heading', { name: 'Contato' });
    expect(contactHeading).toBeInTheDocument();
    expect(contactHeading.closest('div')).toHaveTextContent(
      'WhatsApp: +55 61 98144-8553'
    );
  });

  it('renders logo and description in center column', () => {
    render(<Footer />);

    const logo = screen.getByText('Natasha Pereira');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass('font-display', 'text-5xl');
  });

  it('renders navigation in third column', () => {
    render(<Footer />);

    const navigationHeading = screen.getByRole('heading', {
      name: 'Navegação',
    });
    expect(navigationHeading).toBeInTheDocument();
  });

  it('renders social icons with SVG', () => {
    render(<Footer />);

    // Check for all social icons
    const whatsappIcon = screen.getByLabelText('WhatsApp').querySelector('svg');
    expect(whatsappIcon).toBeInTheDocument();

    const instagramIcon = screen
      .getByLabelText('Instagram')
      .querySelector('svg');
    expect(instagramIcon).toBeInTheDocument();

    const tiktokIcon = screen.getByLabelText('TikTok').querySelector('svg');
    expect(tiktokIcon).toBeInTheDocument();
  });

  it('renders address with map icon', () => {
    render(<Footer />);

    const addressLink = screen.getByRole('link', {
      name: /endereço/i,
    });
    expect(addressLink).toBeInTheDocument();
    expect(addressLink).toHaveAttribute(
      'href',
      expect.stringContaining('google.com/maps')
    );

    const mapIcon = addressLink.querySelector('svg');
    expect(mapIcon).toBeInTheDocument();
  });

  it('has primary background color', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('bg-primary', 'text-white');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
