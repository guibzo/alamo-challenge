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
      <span className='hidden text-sm font-medium sm:block'>{label}</span>

      <div className='block sm:hidden'>
        <Logo />
      </div>

      <div className='flex items-center gap-2 sm:gap-3.5'>
        <div className='hidden sm:block'>
          <Logo />
        </div>

        <Button
          size='sm'
          className='px-1.5 text-xs font-semibold sm:px-2 sm:text-sm'
        >
          <Image
            width={14}
            height={14}
            alt='Tarefas'
            src='/icons/tasks-check.svg'
            aria-hidden='true'
            className='sm:h-4 sm:w-4'
          />
          <span className='hidden sm:inline'>Tarefas</span>
        </Button>

        <div className='mt-0.5 flex items-center gap-1.5 sm:gap-2'>
          <IconContainer>
            <Image
              width={16}
              height={16}
              alt='Inbox'
              aria-label='Inbox'
              src='/icons/mail-open.svg'
              className='sm:size-[18px]'
            />

            <div className='absolute bottom-[1px] right-0.5 size-1 rounded-full bg-[#15be53] sm:-bottom-[2.5px] sm:right-0 sm:size-1.5' />
            <div className='absolute bottom-[1px] right-0.5 size-1.5 animate-ping rounded-full bg-green-200 opacity-20 sm:-bottom-[2.5px] sm:right-0 sm:size-2' />
          </IconContainer>

          <IconContainer>
            <Image
              width={16}
              height={16}
              alt='Informações'
              aria-label='Informações'
              src='/icons/info.svg'
              className='sm:size-[18px]'
            />
          </IconContainer>

          <IconContainer>
            <Image
              width={16}
              height={16}
              alt='Configurações'
              aria-label='Configurações'
              src='/icons/settings.svg'
              className='sm:size-[18px]'
            />
          </IconContainer>
        </div>
      </div>
    </header>
  )
}

const IconContainer = ({ children }: PropsWithChildren) => {
  return (
    <button className='hover:brightness-65 relative p-1 transition-all sm:p-0'>
      {children}
    </button>
  )
}
