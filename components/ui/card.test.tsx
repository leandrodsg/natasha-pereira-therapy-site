import { render, screen } from '@testing-library/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from './card';

describe('Card', () => {
  it('renders Card with content', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    );
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card Description')).toBeInTheDocument();
    expect(screen.getByText('Card Content')).toBeInTheDocument();
    expect(screen.getByText('Card Footer')).toBeInTheDocument();
  });

  it('renders Card with custom className', () => {
    render(<Card className="custom-class">Content</Card>);
    const card = screen.getByText('Content').closest('[data-slot="card"]');
    expect(card).toHaveClass('custom-class');
  });

  it('renders CardHeader with correct structure', () => {
    render(
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
    );
    const header = screen
      .getByText('Title')
      .closest('[data-slot="card-header"]');
    expect(header).toHaveClass('px-6');
  });

  it('renders CardTitle with correct styling', () => {
    render(<CardTitle>Title</CardTitle>);
    const title = screen.getByText('Title');
    expect(title).toHaveClass('leading-none font-semibold');
  });

  it('renders CardDescription with correct styling', () => {
    render(<CardDescription>Description</CardDescription>);
    const desc = screen.getByText('Description');
    expect(desc).toHaveClass('text-muted-foreground text-sm');
  });

  it('renders CardContent with correct padding', () => {
    render(<CardContent>Content</CardContent>);
    const content = screen.getByText('Content');
    expect(content).toHaveClass('px-6');
  });

  it('renders CardFooter with correct styling', () => {
    render(<CardFooter>Footer</CardFooter>);
    const footer = screen.getByText('Footer');
    expect(footer).toHaveClass('flex items-center px-6');
  });

  it('renders CardAction with correct styling', () => {
    render(<CardAction>Action</CardAction>);
    const action = screen.getByText('Action');
    expect(action).toHaveClass(
      'col-start-2 row-span-2 row-start-1 self-start justify-self-end'
    );
  });
});
