import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "ghost" | "icon" | "chip";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, variant = "secondary", className, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        ref={ref}
        className={cn(
          "inline-flex shrink-0 items-center justify-center gap-2 font-label font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          variant === "primary" && "rounded-full bg-primary px-5 py-3.5 text-primary-foreground shadow-glow hover:brightness-110",
          variant === "secondary" && "rounded-full bg-secondary px-5 py-3 text-secondary-foreground hover:bg-accent",
          variant === "ghost" && "rounded-full px-3 py-2 text-muted-foreground hover:bg-accent hover:text-foreground",
          variant === "icon" && "size-11 rounded-full bg-secondary text-foreground hover:bg-accent",
          variant === "chip" && "rounded-full bg-secondary px-3 py-2 text-xs text-secondary-foreground hover:bg-accent",
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";