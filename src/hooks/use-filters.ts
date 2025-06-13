import { getNullableValue } from '@/utils/get-nullable-value'
import { parseAsString, useQueryState } from 'nuqs'

/*
  in order to have updated values being sent to API calls, we need to use searchParams prop from the page file
  instead of using shallow: true here and recovering the value from the tuple, because it will keep rerendering animations on prod upon changing a filter
  (might work with useSearchParams too, didn't test)
*/

export const useFilters = () => {
  const [query, setQueryRaw] = useQueryState('query', parseAsString)
  const [time, setTimeRaw] = useQueryState('time', parseAsString)

  const setQuery = (value: string) => setQueryRaw(getNullableValue(value))
  const setTime = (value: string) => setTimeRaw(getNullableValue(value))

  return {
    query,
    setQuery,
    time,
    setTime,
  }
}
