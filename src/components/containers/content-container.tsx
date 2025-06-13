import { cn } from '@/lib/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'

const containerVariants = cva(
  'mx-auto w-full flex-1 justify-center  p-[var(--content-container-padding)] sm:p-[var(--content-container-sm-padding)]',
  {
    variants: {
      size: {
        default: 'max-w-[870px]',
      },
    },
  },
)

type Props = {
  children: ReactNode
  className?: string
} & VariantProps<typeof containerVariants>

export const ContentContainer = ({
  children,
  size = 'default',
  className,
}: Props) => {
  return (
    <div className={cn(containerVariants({ size }), className)}>{children}</div>
  )
}
