import { LucideCircleUserRound, LucideLogOut, LucideUser2 } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'

export const SidebarAvatarDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='mutedLink' size='fit' className='hover:brightness-90'>
          <Avatar className='size-5'>
            <AvatarImage
              src='https://github.com/guibzo.png'
              alt='Profile image'
            />
            <AvatarFallback>
              <LucideUser2 className='size-2.5' />
            </AvatarFallback>
          </Avatar>

          <span className='text-sm font-semibold'>Guilherme Viana</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-[calc(75vw-6px)] sm:w-[var(--sidebar-width)]'>
        <DropdownMenuLabel className='flex min-w-0 flex-col'>
          <span className='truncate text-sm font-medium'>Gulherme Viana</span>
          <span className='text-muted-foreground truncate text-xs'>
            imluizguilara@hotmail.com
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {GROUP_ONE_ITEMS.map((item) => {
            const Icon = item.icon

            return (
              <Link key={item.href} href={item.href}>
                <DropdownMenuItem>
                  <Icon
                    className='text-muted-foreground/50 size-4'
                    aria-hidden='true'
                  />
                  <span>{item.label}</span>
                </DropdownMenuItem>
              </Link>
            )
          })}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LucideLogOut
            className='text-destructive size-4'
            aria-hidden='true'
          />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const GROUP_ONE_ITEMS = [
  { label: 'Meu perfil', icon: LucideCircleUserRound, href: '#' },
]
