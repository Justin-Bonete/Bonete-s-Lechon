const BASE = '/api/v1'

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message)
  }
}

export async function api<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers: { Accept: 'application/json', 'Content-Type': 'application/json', ...init.headers },
    credentials: 'include',
  })
  if (!res.ok) throw new ApiError(res.status, `Request failed (${res.status})`)
  return res.json() as Promise<T>
}
