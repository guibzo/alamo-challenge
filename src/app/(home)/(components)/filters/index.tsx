import { AdvancedSolutionsFilters } from './advanced-filters'
import { SearchSolutionsFilter } from './search'

export const SolutionFilters = () => {
  return (
    <div className='mt-11 flex flex-col gap-2.5 sm:flex-row sm:items-center'>
      <SearchSolutionsFilter />
      <AdvancedSolutionsFilters />
    </div>
  )
}
