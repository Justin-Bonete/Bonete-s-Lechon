<?php

namespace Tests\Feature;

use Tests\TestCase;

class HealthTest extends TestCase
{
    public function test_health_endpoint_returns_expected_shape(): void
    {
        $response = $this->getJson('/api/v1/health');

        $response->assertJsonStructure(['app', 'status', 'checks' => ['database', 'redis'], 'time_utc']);
        $this->assertContains($response->status(), [200, 503]);
    }
}
