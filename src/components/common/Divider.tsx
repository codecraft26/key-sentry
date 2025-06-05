import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  text?: string;
}

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ className, text, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-muted/70" />
        </div>
        {text && (
          <div className="relative flex justify-center text-sm">
            <span className="bg-background/70 backdrop-blur-sm px-3 text-muted-foreground">
              {text}
            </span>
          </div>
        )}
      </div>
    );
  }
);

Divider.displayName = 'Divider';

export default Divider; 