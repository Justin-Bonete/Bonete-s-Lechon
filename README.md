# Bonete's Organic Lechons

Livestock, lechon e-commerce and farm management platform.

**Stack:** Laravel (PHP 8.3) + Sanctum · React + TypeScript + Vite + Tailwind · PostgreSQL 16 · Redis · Nginx · Docker

## Quick start (requires Docker)

```bash
bash infrastructure/scripts/setup.sh
```

- API health: http://localhost:8080/api/v1/health
- Frontend:   http://localhost:5173

## Daily commands

```bash
docker compose up -d                          # start
docker compose exec backend php artisan test  # backend tests
docker compose exec frontend npm test         # frontend tests
docker compose logs -f backend                # logs
docker compose down                           # stop
```

## Layout

- `backend/` Laravel API (created by setup script; `backend-overlay/` holds our customizations)
- `frontend/` React + TS app
- `infrastructure/` Docker, Nginx, scripts
- `documentation/` SRS and design docs

## Phases

See `documentation/PHASES.md`.
