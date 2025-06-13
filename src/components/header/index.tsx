import Image from 'next/image'
import type { PropsWithChildren } from 'react'
import { Logo } from '../logo'
import { Button } from '../ui/button'

type Props = {
  label: string
}

export const Header = ({ label }: Props) => {
  return (
    <header className='mb-6 flex w-full items-center justify-between gap-2.5'>
      <span className='text-sm font-medium'>{label}</span>

      <div className='flex items-center gap-3.5'>
        <Logo />

        <Button size='sm' className='px-2 text-sm font-semibold'>
          <Image
            width={16}
            height={16}
            alt='Tarefas'
            src='/icons/tasks-check.svg'
            aria-hidden='true'
          />
          Tarefas
        </Button>

        <div className='mt-0.5 flex items-center gap-2'>
          <IconContainer>
            <Image
              width={18}
              height={18}
              alt='Tarefas'
              aria-label='Inbox'
              src='/icons/mail-open.svg'
            />

            <div className='absolute -bottom-[2.5px] right-0 size-1.5 rounded-full bg-[#15be53]' />
            <div className='absolute -bottom-[2.5px] right-0 size-2 animate-ping rounded-full bg-green-200 opacity-20' />
          </IconContainer>

          <IconContainer>
            <Image
              width={18}
              height={18}
              alt='Informações'
              aria-label='Informações'
              src='/icons/info.svg'
            />
          </IconContainer>

          <IconContainer>
            <Image
              width={18}
              height={18}
              alt='Configurações'
              aria-label='Configurações'
              src='/icons/settings.svg'
            />
          </IconContainer>
        </div>
      </div>
    </header>
  )
}

const IconContainer = ({ children }: PropsWithChildren) => {
  return (
    <button className='hover:brightness-65 relative transition-all'>
      {children}
    </button>
  )
}
