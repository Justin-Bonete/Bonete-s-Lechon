export interface HealthResponse {
  app: string
  status: 'ok' | 'degraded'
  checks: Record<string, { ok: boolean }>
  time_utc: string
}
