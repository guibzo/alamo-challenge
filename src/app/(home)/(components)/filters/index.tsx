import { AdvancedSolutionsFilters } from './advanced-filters'
import { SearchSolutionsFilter } from './search'

export const SolutionFilters = () => {
  return (
    <div className='mt-11 flex items-center gap-2.5'>
      <SearchSolutionsFilter />
      <AdvancedSolutionsFilters />
    </div>
  )
}
