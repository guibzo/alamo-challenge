'use client'
import * as LabelPrimitive from '@radix-ui/react-label'
import { LucideAsterisk } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/cn'

type Props = React.ComponentProps<typeof LabelPrimitive.Root> & {
  required?: boolean
  optional?: boolean
}

function Label({
  className,
  required = false,
  optional = false,
  children,
  ...props
}: Props) {
  const BaseLabelComponent = ({
    baseClassName,
  }: {
    baseClassName?: string
  }) => (
    <LabelPrimitive.Root
      data-slot='label'
      className={cn(
        'mb-2 flex select-none items-center gap-2 text-sm font-medium leading-5 transition-all',
        'peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
        'aria-disabled:pointer-events-none aria-disabled:select-none aria-disabled:opacity-50',
        baseClassName,
        className,
      )}
      {...props}
    >
      {children}
    </LabelPrimitive.Root>
  )

  if (required) {
    return (
      <div className={cn('mb-2 flex items-start gap-1')}>
        <BaseLabelComponent baseClassName={cn('mb-0')} />
        <LucideAsterisk className={cn('text-destructive size-3')} />
      </div>
    )
  }

  if (optional) {
    return (
      <div className={cn('mb-2 flex items-center gap-2')}>
        <BaseLabelComponent baseClassName={cn('mb-0')} />
        <span className={cn('text-muted-foreground text-xs')}>(opcional)</span>
      </div>
    )
  }

  return <BaseLabelComponent />
}

export { Label }
