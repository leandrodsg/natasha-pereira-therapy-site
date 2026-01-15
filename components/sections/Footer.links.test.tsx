import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Links', () => {
  it('navigation links have correct href attributes', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: 'Início' })).toHaveAttribute(
      'href',
      '#inicio'
    );
    expect(screen.getByRole('link', { name: 'Quem sou' })).toHaveAttribute(
      'href',
      '#quem-sou'
    );
    expect(screen.getByRole('link', { name: 'Serviços' })).toHaveAttribute(
      'href',
      '#servicos'
    );
    expect(screen.getByRole('link', { name: 'Contato' })).toHaveAttribute(
      'href',
      '#contato'
    );
  });

  it('external links open in new tab', () => {
    render(<Footer />);

    const instagramLink = screen.getByRole('link', { name: 'Instagram' });
    expect(instagramLink).toHaveAttribute('target', '_blank');
    expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('contact links are properly formatted', () => {
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
});
