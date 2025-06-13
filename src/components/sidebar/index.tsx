import { SidebarAvatarDropdown } from './avatar-dropdown'
import { SidebarNavigation } from './navigation'

export const Sidebar = () => {
  return (
    <aside className='border-r-border w-[var(--sidebar-width))] border-r p-3 sm:p-5'>
      <SidebarAvatarDropdown />
      <SidebarNavigation />
    </aside>
  )
}
