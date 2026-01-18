import { render, screen } from '@testing-library/react';
import { Button, buttonVariants } from './button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="default">Default</Button>);
    let button = screen.getByRole('button', { name: /default/i });
    expect(button).toHaveClass('bg-primary');

    rerender(<Button variant="destructive">Delete</Button>);
    button = screen.getByRole('button', { name: /delete/i });
    expect(button).toHaveClass('bg-destructive');

    rerender(<Button variant="outline">Outline</Button>);
    button = screen.getByRole('button', { name: /outline/i });
    expect(button).toHaveClass('border');

    rerender(<Button variant="secondary">Secondary</Button>);
    button = screen.getByRole('button', { name: /secondary/i });
    expect(button).toHaveClass('bg-secondary');

    rerender(<Button variant="ghost">Ghost</Button>);
    button = screen.getByRole('button', { name: /ghost/i });
    expect(button).toHaveClass('hover:bg-accent');

    rerender(<Button variant="link">Link</Button>);
    button = screen.getByRole('button', { name: /link/i });
    expect(button).toHaveClass('underline-offset-4');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    let button = screen.getByRole('button', { name: /small/i });
    expect(button).toHaveClass('h-8');

    rerender(<Button size="lg">Large</Button>);
    button = screen.getByRole('button', { name: /large/i });
    expect(button).toHaveClass('h-10');

    rerender(<Button size="icon">Icon</Button>);
    button = screen.getByRole('button', { name: /icon/i });
    expect(button).toHaveClass('size-9');

    rerender(<Button size="icon-sm">Icon Small</Button>);
    button = screen.getByRole('button', { name: /icon small/i });
    expect(button).toHaveClass('size-8');

    rerender(<Button size="icon-lg">Icon Large</Button>);
    button = screen.getByRole('button', { name: /icon large/i });
    expect(button).toHaveClass('size-10');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
  });

  it('applies data attributes correctly', () => {
    render(
      <Button variant="outline" size="lg">
        Data Test
      </Button>
    );
    const button = screen.getByRole('button', { name: /data test/i });
    expect(button).toHaveAttribute('data-variant', 'outline');
    expect(button).toHaveAttribute('data-size', 'lg');
  });

  it('renders as child component when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );
    const link = screen.getByRole('link', { name: /link button/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole('button', { name: /custom/i });
    expect(button).toHaveClass('custom-class');
  });

  it('renders with default size when size prop is undefined', () => {
    render(<Button size={undefined}>Default Size</Button>);
    const button = screen.getByRole('button', { name: /default size/i });
    expect(button).toHaveClass('h-9');
  });

  it('renders with default variant when variant prop is undefined', () => {
    render(<Button variant={undefined}>Default Variant</Button>);
    const button = screen.getByRole('button', { name: /default variant/i });
    expect(button).toHaveClass('bg-primary');
  });

  it('exports buttonVariants function', () => {
    expect(buttonVariants).toBeDefined();
    expect(typeof buttonVariants).toBe('function');

    const result = buttonVariants({ variant: 'destructive', size: 'lg' });
    expect(result).toContain('bg-destructive');
    expect(result).toContain('h-10');
  });
});
