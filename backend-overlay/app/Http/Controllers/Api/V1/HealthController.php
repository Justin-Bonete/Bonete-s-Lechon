<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;
use Throwable;

class HealthController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $checks = [
            'database' => $this->check(fn () => DB::select('select 1')),
            'redis' => $this->check(fn () => Redis::connection()->ping()),
        ];

        $healthy = ! in_array(false, array_column($checks, 'ok'), true);

        return response()->json([
            'app' => config('app.name'),
            'status' => $healthy ? 'ok' : 'degraded',
            'checks' => $checks,
            'time_utc' => now()->utc()->toIso8601String(),
        ], $healthy ? 200 : 503);
    }

    private function check(callable $fn): array
    {
        try {
            $fn();
            return ['ok' => true];
        } catch (Throwable $e) {
            // Do not leak internals to clients.
            report($e);
            return ['ok' => false];
        }
    }
}
