import * as React from 'react';
import { cn } from '@/lib/utils';

interface LayoutWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function LayoutWrapper({ className, children, ...props }: LayoutWrapperProps) {
  return (
    <div className={cn('min-h-screen bg-background', className)} {...props}>
      {children}
    </div>
  );
}

export { LayoutWrapper };
