import type { SolutionData } from '@/@types/solution-data'

import { httpClient } from '../client'

type Params = Omit<SolutionData, 'id' | 'observation'>

export const createSolution = async (data: Params): Promise<SolutionData> => {
  return httpClient<SolutionData>({
    path: '/solutions',
    method: 'POST',
    body: data,
  })
}
