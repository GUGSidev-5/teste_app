import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 font-label font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "rounded-full bg-primary px-5 py-3.5 text-primary-foreground shadow-glow hover:brightness-110",
        primary: "rounded-full bg-primary px-5 py-3.5 text-primary-foreground shadow-glow hover:brightness-110",
        secondary: "rounded-full bg-secondary px-5 py-3 text-secondary-foreground hover:bg-accent",
        outline: "rounded-full border border-border bg-background text-foreground hover:bg-accent",
        ghost: "rounded-full px-3 py-2 text-muted-foreground hover:bg-accent hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        destructive: "rounded-full bg-destructive text-destructive-foreground",
        icon: "rounded-full bg-secondary text-foreground hover:bg-accent",
        chip: "rounded-full bg-secondary px-3 py-2 text-xs text-secondary-foreground hover:bg-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: { variant: "secondary", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {
  asChild?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, variant = "secondary", size, className, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";