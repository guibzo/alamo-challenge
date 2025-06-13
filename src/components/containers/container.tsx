import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={cn('flex min-h-screen w-full', className)}>{children}</div>
  )
}
