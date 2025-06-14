import type { SolutionData } from '@/@types/solution-data'
import { httpClient } from '../client'

type Params = {
  query?: string
  time?: string
}

export const getSolutions = async (
  params?: Params,
): Promise<SolutionData[]> => {
  const searchParams = new URLSearchParams()

  if (params?.query && params.query.trim()) {
    searchParams.append('q', params.query.trim())
  }

  if (params?.time && params.time.trim()) {
    searchParams.append('time', params.time.trim())
  }

  searchParams.append('_sort', 'time')
  searchParams.append('_order', 'asc')

  const path = searchParams.toString()
    ? `/solutions?${searchParams.toString()}`
    : '/solutions'

  return httpClient<SolutionData[]>({
    path,
    method: 'GET',
  })
}
