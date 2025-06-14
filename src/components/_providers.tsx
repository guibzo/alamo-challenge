'use client'

import { NuqsAdapter } from 'nuqs/adapters/next/app'
import type { PropsWithChildren } from 'react'
import { Toaster } from './ui/sonner'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <NuqsAdapter>
      <Toaster />

      {children}
    </NuqsAdapter>
  )
}
