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
    expect(screen.getAllByText('Contato')).toHaveLength(2);
    expect(screen.getByText('WhatsApp: +55 61 98144-8553')).toBeInTheDocument();
    expect(
      screen.getByText('Email: natashaa.pereira@hotmail.com')
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Endereço: SEPS 705/905 Bloco A - Centro Empresarial Santa Cruz - Sala 427, Asa Sul, Brasília 70390-055'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Navegação')).toBeInTheDocument();
    expect(
      screen.getByText('© 2025 Natasha Pereira | CRP 01/22302')
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

  it('has no accessibility violations', async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
