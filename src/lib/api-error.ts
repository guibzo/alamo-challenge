export type APIErrorResponse = {
  message: string
  error: boolean
  code: number
}

export class APIError extends Error {
  public readonly code: number
  public readonly error: boolean

  constructor(response: APIErrorResponse) {
    super(response.message)
    this.code = response.code
    this.error = response.error
  }
}
