import { APIError } from '@/lib/api-error'

type Path = string
type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
type Body = Record<string, any> | BodyInit | null
type NextParams = RequestInit

type RequestType = {
  path: Path
  method: Method
  nextParams?: NextParams
  body?: Body
}

export const httpClient = async <T>({
  path,
  method,
  body,
  nextParams,
}: RequestType): Promise<T> => {
  const baseURL = 'http://localhost:3001'
  const url = new URL(path, baseURL)

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  }

  const fetchOptions: RequestInit = {
    method,
    body: body && typeof body === 'object' ? JSON.stringify(body) : body,
    headers,
    cache: 'no-store',
    ...nextParams,
  }

  try {
    const response = await fetch(url.toString(), fetchOptions)
    const data = await response.json()

    if (!response.ok) {
      throw new APIError({
        message: data.message || `HTTP Error: ${response.status}`,
        error: true,
        code: response.status,
      })
    }

    return data
  } catch (error) {
    if (error instanceof APIError) {
      throw error
    }

    throw new APIError({
      message: 'Unknown error',
      error: true,
      code: 500,
    })
  }
}
