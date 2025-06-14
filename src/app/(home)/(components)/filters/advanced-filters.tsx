'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFilters } from '@/hooks/use-filters'

export const AdvancedSolutionsFilters = () => {
  const { time, setTime } = useFilters()
  const [localTime, setLocalTime] = useState(time || '')

  const handleSearch = () => {
    setTime(localTime)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Filtragem Avançada</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-80' onKeyDown={handleKeyPress}>
        <div className='grid gap-4 p-2.5'>
          <div>
            <Label htmlFor='time'>Horário</Label>
            <Input
              id='time'
              placeholder='Digite o horário...'
              value={localTime}
              type='time'
              onChange={(e) => setLocalTime(e.target.value)}
            />
          </div>

          <Button onClick={handleSearch} className='ml-auto w-full'>
            Buscar
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
