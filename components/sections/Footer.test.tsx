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
    expect(screen.getByText('Contato')).toBeInTheDocument();
    expect(screen.getByText('WhatsApp: +55 61 99999-9999')).toBeInTheDocument();
    expect(
      screen.getByText('Email: contato@natashapereira.com.br')
    ).toBeInTheDocument();
    expect(screen.getByText('Endereço: Brasília, DF')).toBeInTheDocument();
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
    expect(screen.getByRole('link', { name: 'Dúvidas' })).toBeInTheDocument();
  });

  it('renders social link with correct attributes', () => {
    render(<Footer />);

    const instagramLink = screen.getByRole('link', { name: 'Instagram' });
    expect(instagramLink).toHaveAttribute(
      'href',
      'https://instagram.com/natashapereira.psi'
    );
    expect(instagramLink).toHaveAttribute('target', '_blank');
    expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders contact links', () => {
    render(<Footer />);

    const whatsappLink = screen.getByRole('link', {
      name: 'WhatsApp: +55 61 99999-9999',
    });
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/5561999999999');

    const emailLink = screen.getByRole('link', {
      name: 'Email: contato@natashapereira.com.br',
    });
    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:contato@natashapereira.com.br'
    );
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
