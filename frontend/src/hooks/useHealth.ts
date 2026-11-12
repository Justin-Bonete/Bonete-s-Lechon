import { useEffect, useState } from 'react'
import { api } from '../services/api'
import type { HealthResponse } from '../types/health'

type State =
  | { phase: 'loading' }
  | { phase: 'error'; message: string }
  | { phase: 'ready'; data: HealthResponse }

export function useHealth(): State {
  const [state, setState] = useState<State>({ phase: 'loading' })

  useEffect(() => {
    const ctrl = new AbortController()
    api<HealthResponse>('/health', { signal: ctrl.signal })
      .then((data) => setState({ phase: 'ready', data }))
      .catch((e: unknown) => {
        if (ctrl.signal.aborted) return
        setState({ phase: 'error', message: e instanceof Error ? e.message : 'Unknown error' })
      })
    return () => ctrl.abort()
  }, [])

  return state
}
