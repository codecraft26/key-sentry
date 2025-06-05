import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  withArrow?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, withArrow, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
    
    const variants = {
      primary: 'bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-md hover:from-primary/95 hover:to-primary/85 focus-visible:outline-primary',
      secondary: 'bg-muted/30 text-foreground hover:bg-muted/50',
      outline: 'border border-muted/70 bg-background/50 text-foreground hover:bg-muted/30 hover:border-muted',
      ghost: 'text-foreground hover:bg-muted/30'
    };

    const sizes = {
      sm: 'py-2 px-3 text-sm',
      md: 'py-2.5 px-4 text-base',
      lg: 'py-3 px-5 text-lg'
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          isLoading && 'opacity-70 cursor-not-allowed',
          className
        )}
        disabled={isLoading}
        {...props}
      >
        {children}
        {withArrow && <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
