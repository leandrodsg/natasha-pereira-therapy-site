import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ServiceCard from './ServiceCard';

const mockService = {
  title: 'Atendimento Individual',
  description: 'Um espaço seguro para falar de si.',
  imageSrc:
    'https://via.placeholder.com/400x300/7a8b6f/f5f2ed?text=Atendimento+Individual',
  imageAlt: 'Atendimento Individual',
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

  it('link has hover effects', () => {
    render(<ServiceCard {...mockService} />);
    const link = screen.getByRole('link');
    expect(link).toHaveClass('hover:underline');
  });
});
