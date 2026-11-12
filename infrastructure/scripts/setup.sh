#!/usr/bin/env bash
# One-time bootstrap. Run from repo root: bash infrastructure/scripts/setup.sh
set -euo pipefail

[ -f .env ] || cp .env.example .env
set -a; . ./.env; set +a

docker compose build backend

if [ ! -f backend/artisan ]; then
  echo ">> Creating Laravel project..."
  rm -rf backend && mkdir backend
  docker compose run --rm --no-deps backend composer create-project laravel/laravel . --prefer-dist --no-interaction
fi

echo ">> Applying overlay (API routes, health check, CORS, tests)..."
cp -r backend-overlay/routes backend-overlay/app backend-overlay/config backend-overlay/tests backend/
if ! grep -q "Bonete's Organic Lechons" backend/.env 2>/dev/null; then
  cat backend-overlay/env.append >> backend/.env
fi

echo ">> Configuring backend .env for PostgreSQL + Redis..."
sed_i() { sed -i.bak "$1" backend/.env && rm -f backend/.env.bak; }
sed_i "s|^APP_NAME=.*|APP_NAME=\"Bonete's Organic Lechons\"|"
sed_i "s|^APP_URL=.*|APP_URL=http://localhost:${APP_PORT:-8080}|"
sed_i "s|^DB_CONNECTION=.*|DB_CONNECTION=pgsql|"
sed_i "s|^# *DB_HOST=.*|DB_HOST=postgres|; s|^DB_HOST=.*|DB_HOST=postgres|"
sed_i "s|^# *DB_PORT=.*|DB_PORT=5432|; s|^DB_PORT=.*|DB_PORT=5432|"
sed_i "s|^# *DB_DATABASE=.*|DB_DATABASE=${DB_DATABASE}|; s|^DB_DATABASE=.*|DB_DATABASE=${DB_DATABASE}|"
sed_i "s|^# *DB_USERNAME=.*|DB_USERNAME=${DB_USERNAME}|; s|^DB_USERNAME=.*|DB_USERNAME=${DB_USERNAME}|"
sed_i "s|^# *DB_PASSWORD=.*|DB_PASSWORD=${DB_PASSWORD}|; s|^DB_PASSWORD=.*|DB_PASSWORD=${DB_PASSWORD}|"
sed_i "s|^SESSION_DRIVER=.*|SESSION_DRIVER=redis|"
sed_i "s|^CACHE_STORE=.*|CACHE_STORE=redis|"
sed_i "s|^QUEUE_CONNECTION=.*|QUEUE_CONNECTION=redis|"
sed_i "s|^REDIS_HOST=.*|REDIS_HOST=redis|"
sed_i "s|^REDIS_CLIENT=.*|REDIS_CLIENT=phpredis|"

echo ">> Starting services..."
docker compose up -d postgres redis backend nginx

echo ">> Installing API scaffolding (Sanctum) and migrating..."
docker compose exec backend php artisan install:api --no-interaction || true
cp backend-overlay/routes/api.php backend/routes/api.php   # keep our versioned routes
docker compose exec backend php artisan key:generate --force
docker compose exec backend php artisan migrate --force
docker compose exec backend chmod -R ug+rwX storage bootstrap/cache || true

echo ">> Starting frontend..."
docker compose up -d frontend

echo
echo "Done."
echo "  API health : http://localhost:${APP_PORT:-8080}/api/v1/health"
echo "  Frontend   : http://localhost:${FRONTEND_PORT:-5173}"
