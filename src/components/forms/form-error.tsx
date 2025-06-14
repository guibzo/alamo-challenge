import type { PropsWithChildren } from 'react'

export const FormError = ({ children }: PropsWithChildren) => {
  return <p className='text-destructive mt-1 text-sm'>{children}</p>
}
