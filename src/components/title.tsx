import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export const Title = ({ children, className }: Props) => {
  return (
    <h1
      className={cn(
        'line-clamp-2 text-[28px] font-semibold tracking-tighter sm:line-clamp-1',
        className,
      )}
    >
      {children}
    </h1>
  )
}
