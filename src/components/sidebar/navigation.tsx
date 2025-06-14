import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../ui/button'

export const SidebarNavigation = () => {
  return (
    <nav>
      <ul className='mt-14 flex flex-col gap-4'>
        {GROUP_ONE_ITEMS.map((item, i) => {
          return (
            <Link key={i} href={item.href}>
              <li className='flex items-center'>
                <Button variant='mutedLink' size='fit' className='gap-2.5'>
                  <Image
                    alt={item.label}
                    src={item.iconURL}
                    width={16}
                    height={16}
                    aria-hidden='true'
                  />
                  <span className='text-sm font-semibold'>{item.label}</span>
                </Button>
              </li>
            </Link>
          )
        })}
      </ul>

      <ul className='mt-[82px] flex flex-col gap-4'>
        {GROUP_TWO_ITEMS.map((item, i) => {
          return (
            <li key={i}>
              <Button variant='mutedLink' size='fit' className='gap-2.5'>
                <Image
                  alt={item.label}
                  src={item.iconURL}
                  width={16}
                  height={16}
                  aria-hidden='true'
                />
                <span className='text-sm font-semibold'>{item.label}</span>
              </Button>

              {item.subItems.map((subItem, index) => (
                <ul key={index} className='ml-8'>
                  <Link href={subItem.href}>
                    <li className='flex items-center'>
                      <Button
                        variant='mutedLink'
                        size='fit'
                        className='gap-2.5'
                      >
                        <span className='text-primary text-sm font-semibold'>
                          {subItem.label}
                        </span>
                      </Button>
                    </li>
                  </Link>
                </ul>
              ))}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const GROUP_ONE_ITEMS = [
  { label: 'Página Inicial', iconURL: '/icons/house.svg', href: '#' },
  { label: 'Clientes', iconURL: '/icons/user-circle-calendar.svg', href: '#' },
  { label: 'Agenda', iconURL: '/icons/calendar.svg', href: '#' },
  { label: 'Financeiro', iconURL: '/icons/dollar-badge.svg', href: '#' },
]

const GROUP_TWO_ITEMS = [
  {
    label: 'Cadastros',
    iconURL: '/icons/write-note.svg',
    subItems: [
      {
        label: 'Rotinas',
        href: '#',
      },
    ],
  },
]
