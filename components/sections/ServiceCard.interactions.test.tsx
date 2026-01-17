import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ServiceCard from './ServiceCard';

const mockService = {
  title: 'Atendimento Individual',
  description: 'Um espaço seguro para falar de si.',
  linkText: 'SAIBA MAIS',
  linkHref: '#service',
};

describe('ServiceCard - Interactions', () => {
  it('link is keyboard accessible', async () => {
    const user = userEvent.setup();
    render(<ServiceCard {...mockService} />);

    const link = screen.getByRole('link');
    await user.tab();
    expect(link).toHaveFocus();
  });

  it('card has hover lift effect', () => {
    render(<ServiceCard {...mockService} />);
    const article = screen.getByRole('article');
    expect(article).toHaveClass('hover:-translate-y-2');
  });

  it('card has shadow on hover', () => {
    render(<ServiceCard {...mockService} />);
    const article = screen.getByRole('article');
    expect(article).toHaveClass('hover:shadow-xl');
  });

  it('button has pill style', () => {
    render(<ServiceCard {...mockService} />);
    const button = screen.getByText('SAIBA MAIS');
    expect(button).toHaveClass('rounded-full');
  });
});
