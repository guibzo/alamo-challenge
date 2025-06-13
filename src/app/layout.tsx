import { Providers } from '@/components/_providers'
import { blinkMac } from '@/fonts/fonts'
import { cn } from '@/lib/cn'
import '@/styles/global.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Alamo',
    default: 'Alamo',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt'>
      <body className={cn('antialiased', blinkMac.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
