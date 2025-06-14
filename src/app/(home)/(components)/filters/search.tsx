'use client'

import { LucideSearch } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useFilters } from '@/hooks/use-filters'

export const SearchSolutionsFilter = () => {
  const { query, setQuery } = useFilters()
  const [localQuery, setLocalQuery] = useState(query || '')

  const handleSearch = () => {
    setQuery(localQuery)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <>
      <Input
        className='h-6'
        startIcon={<LucideSearch />}
        placeholder='Buscar soluções...'
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <Button size='sm' onClick={handleSearch}>
        Buscar
      </Button>
    </>
  )
}
