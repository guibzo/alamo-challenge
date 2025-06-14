import { LucideMenu } from 'lucide-react'

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { SidebarAvatarDropdown } from './avatar-dropdown'
import { SidebarNavigation } from './navigation'

export const Sidebar = () => {
  return (
    <aside className='border-r-border w-[var(--sidebar-width))] sticky top-0 hidden h-screen items-start border-r p-3 sm:block sm:p-5'>
      <SidebarAvatarDropdown />
      <SidebarNavigation />
    </aside>
  )
}

export const ResponsiveSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <LucideMenu className='size-5 shrink-0 sm:hidden' />
      </SheetTrigger>

      <SheetContent side='left' className='p-3'>
        <SheetTitle className='sr-only'>Menu</SheetTitle>
        <SidebarAvatarDropdown />
        <SidebarNavigation />
      </SheetContent>
    </Sheet>
  )
}
