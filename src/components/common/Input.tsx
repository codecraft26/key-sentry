import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, ...props }, ref) => {
    return (
      <div className="group">
        {label && (
          <label className="block text-sm font-medium text-foreground mb-2.5">
            {label}
          </label>
        )}
        <div className="mt-1.5 relative">
          <input
            ref={ref}
            className={cn(
              "block w-full rounded-lg border border-muted/70 bg-background/40 py-2.5 px-4 text-foreground shadow-sm",
              "focus:border-primary focus:ring-1 focus:ring-primary/60 transition-all duration-200",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500/60",
              className
            )}
            {...props}
          />
          <div className="absolute inset-0 rounded-lg border border-primary/0 group-focus-within:border-primary/20 group-focus-within:shadow-[0_0_0_4px_rgba(var(--primary),0.1)] pointer-events-none transition-all duration-300" />
        </div>
        {(error || helperText) && (
          <p className={cn(
            "mt-1.5 text-sm",
            error ? "text-red-500" : "text-muted-foreground"
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 