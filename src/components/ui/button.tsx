import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/cn'

const buttonVariants = cva(
  cn(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[6px] text-sm font-medium ring-offset-background transition-all',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  ),
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-red-500 text-white hover:bg-destructive/90',
        outline:
          'border border-border bg-transparent hover:bg-muted/50 hover:text-accent-foreground',
        outlinePrimary:
          'border border-primary bg-transparent hover:brightness-75 text-primary ',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-muted/50 hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:text-primary/80 decoration-1 decoration-primary',
        mutedLink:
          'text-muted-foreground underline-offset-3 hover:brightness-75 decoration-1 decoration-accent',
        foregroundLink:
          'text-foreground hover:text-foreground/80 underline-offset-3 decoration-foreground decoration-1 hover:underline',
        outlineDestructive:
          'border-destructive border text-destructive bg-transparent hover:bg-destructive/5',
      },
      size: {
        default: 'h-[29px] px-4 py-1.5',
        sm: 'h-[21px] rounded-[5px] py-0.5 px-2',
        // lg: 'h-11 rounded-lg px-8',
        icon: 'h-8 w-8',
        fit: 'size-fit',
      },
      radius: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        default: 'rounded',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = ({
  className,
  variant,
  size,
  radius,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, radius, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
