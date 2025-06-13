import { cn } from '@/lib/cn'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  className?: string
}

export const Logo = ({ className }: Props) => {
  return (
    <Link href='/'>
      <Image
        width={58}
        height={15}
        alt='Alamo'
        src='/icons/logo.svg'
        className={cn(className)}
      />
    </Link>
  )
}
