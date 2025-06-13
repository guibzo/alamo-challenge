import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LucideSearch } from 'lucide-react'

export const SolutionFilters = () => {
  return (
    <div className='mt-11 flex items-center gap-2.5'>
      <Input startIcon={<LucideSearch />} />
      <Button size='sm'>Buscar</Button>
      <Button variant='secondary' size='sm'>
        Filtragem Avançada
      </Button>
    </div>
  )
}
